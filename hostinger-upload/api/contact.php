<?php
// ─────────────────────────────────────────────
//  SECURITY GATE
// ─────────────────────────────────────────────
define('ECONNECT_SECURE', true);
require_once __DIR__ . '/config.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

// ─────────────────────────────────────────────
//  CORS HEADERS
// ─────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Handle preflight (browser OPTIONS request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// ─────────────────────────────────────────────
//  ONLY ALLOW POST
// ─────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// ─────────────────────────────────────────────
//  RATE LIMIT — max 5 submissions per IP per hour
// ─────────────────────────────────────────────
session_start();
$ip  = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$key = 'contact_rate_' . md5($ip);

if (!isset($_SESSION[$key])) {
    $_SESSION[$key] = ['count' => 0, 'reset_at' => time() + 3600];
}
if (time() > $_SESSION[$key]['reset_at']) {
    $_SESSION[$key] = ['count' => 0, 'reset_at' => time() + 3600];
}
if ($_SESSION[$key]['count'] >= 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many submissions. Please try again after 1 hour.']);
    exit();
}
$_SESSION[$key]['count']++;

// ─────────────────────────────────────────────
//  PARSE & VALIDATE INPUT
// ─────────────────────────────────────────────
$raw = file_get_contents('php://input');
if (!$raw) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Empty request body.']);
    exit();
}

$data = json_decode($raw, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON.']);
    exit();
}

// Sanitize helper
function clean(string $val, int $maxLen = 255): string {
    return mb_substr(trim(strip_tags($val)), 0, $maxLen);
}

$name          = clean($data['name']          ?? '');
$email         = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone         = clean($data['phone']         ?? '', 30);
$company       = clean($data['company']       ?? '');
$country       = clean($data['country']       ?? '');
$service       = clean($data['service']       ?? '');
$traffic       = clean($data['traffic']       ?? '');
$contactMethod = clean($data['contactMethod'] ?? '');
$message       = clean($data['message']       ?? '', 2000);

// Required fields
if (!$name) {
    respond(false, 'Name is required.'); exit();
}
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'A valid email address is required.'); exit();
}
if (!$phone) {
    respond(false, 'Phone number is required.'); exit();
}

// ─────────────────────────────────────────────
//  DATABASE — Save to contacts table
// ─────────────────────────────────────────────
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );

    $stmt = $pdo->prepare("
        INSERT INTO contacts
            (name, email, phone, company, country, service, traffic, contact_method, message, ip_address)
        VALUES
            (:name, :email, :phone, :company, :country, :service, :traffic, :contact_method, :message, :ip)
    ");
    $stmt->execute([
        ':name'           => $name,
        ':email'          => $email,
        ':phone'          => $phone,
        ':company'        => $company,
        ':country'        => $country,
        ':service'        => $service,
        ':traffic'        => $traffic,
        ':contact_method' => $contactMethod,
        ':message'        => $message,
        ':ip'             => $ip,
    ]);

} catch (PDOException $e) {
    // Log error internally, don't expose to client
    error_log('[EConnect Contact] DB Error: ' . $e->getMessage());
    respond(false, 'Server error. Please try again later.');
    exit();
}

// ─────────────────────────────────────────────
//  EMAIL — Send notification
// ─────────────────────────────────────────────
$subject = '[EConnect] New Contact Form — ' . $name . ' (' . ($company ?: 'N/A') . ')';

$body = "
========================================
  NEW CONTACT FORM SUBMISSION
  " . SITE_NAME . "
========================================

Name:             {$name}
Email:            {$email}
Phone:            {$phone}
Company:          {$company}
Country:          {$country}

Service Needed:   {$service}
Monthly Traffic:  {$traffic}
Preferred Contact:{$contactMethod}

Message:
-----------------------------------------
{$message}
-----------------------------------------

Submitted At:     " . date('d M Y, h:i A') . "
IP Address:       {$ip}

========================================
Reply directly to this email to respond.
========================================
";

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    // Recipients
    // From address must be the authenticated SMTP user to be accepted by Hostinger
    $mail->setFrom(SMTP_USER, SITE_NAME);
    $mail->addAddress(MAIL_TO);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false); // Plain text email
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    $mailSent = true;
} catch (Exception $e) {
    error_log('[EConnect Contact] SMTP Mail failed: ' . $mail->ErrorInfo);
    $mailSent = false;
}

// ─────────────────────────────────────────────
//  SUCCESS
// ─────────────────────────────────────────────
respond(true, 'Your message has been sent successfully! We\'ll get back to you within 2 business hours.');

// ─────────────────────────────────────────────
//  Helper
// ─────────────────────────────────────────────
function respond(bool $success, string $message): void {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit();
}
