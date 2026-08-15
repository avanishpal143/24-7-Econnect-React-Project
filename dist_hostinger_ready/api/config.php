<?php
// ─────────────────────────────────────────────
//  SECURITY: Block direct browser access
// ─────────────────────────────────────────────
if (!defined('ECONNECT_SECURE')) {
    http_response_code(403);
    exit('Access denied.');
}

// ─────────────────────────────────────────────
//  DATABASE — Fill these from Hostinger hPanel
//  Databases → MySQL Databases
// ─────────────────────────────────────────────
define('DB_HOST', 'localhost');
define('DB_NAME', 'u742162087_Inquiryform'); // Replace with your live DB name if different
define('DB_USER', 'u742162087_econnect');     // Replace with your live DB user
define('DB_PASS', 'Econnect@sim1##');         // Replace with your live DB password
define('JWT_SECRET', 'econnect-cms-super-secret-key-2026');

// ─────────────────────────────────────────────
//  EMAIL CONFIG (Contact Form)
// ─────────────────────────────────────────────
define('MAIL_TO',       'sales@24x7econnect.com');
define('MAIL_FROM',     'noreply@24x7econnect.com');
define('SITE_NAME',     '24x7 EConnect');

// ─────────────────────────────────────────────
//  SMTP CONFIG (Google Workspace / Gmail SMTP)
// ─────────────────────────────────────────────
define('SMTP_HOST',     'smtp.gmail.com');
define('SMTP_USER',     'sales@24x7econnect.com');
define('SMTP_PASS',     ''); // Enter 16-character Google App Password here if using SMTP
define('SMTP_PORT',     465);
define('SMTP_SECURE',   'ssl');

// ─────────────────────────────────────────────
//  ALLOWED ORIGIN (CORS)
// ─────────────────────────────────────────────
define('ALLOWED_ORIGIN', '*');

// ─────────────────────────────────────────────
//  DATABASE CONNECTION HELPER
// ─────────────────────────────────────────────
function getDbConnection() {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Database connection error: ' . $e->getMessage()
            ]);
            exit;
        }
    }
    return $pdo;
}

// ─────────────────────────────────────────────
//  RESPONSE & REQUEST HELPERS
// ─────────────────────────────────────────────
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function getRequestBody() {
    $raw = file_get_contents('php://input');
    if (empty($raw)) {
        return $_POST;
    }
    $json = json_decode($raw, true);
    return is_array($json) ? $json : $_POST;
}

function generateUuid() {
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

// ─────────────────────────────────────────────
//  SIMPLE & SECURE JWT/TOKEN HELPER
// ─────────────────────────────────────────────
function generateToken($payload) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload['iat'] = time();
    $payload['exp'] = time() + (7 * 24 * 60 * 60); // 7 days
    $payloadJson = json_encode($payload);

    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payloadJson));
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
}

function verifyAuthToken() {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if (!$authHeader && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    }

    if (!preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        return null;
    }

    $token = $matches[1];
    $tokenParts = explode('.', $token);
    if (count($tokenParts) !== 3) {
        return null;
    }

    list($header64, $payload64, $sig64) = $tokenParts;
    $sig = hash_hmac('sha256', $header64 . "." . $payload64, JWT_SECRET, true);
    $expectedSig64 = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($sig));

    if (!hash_equals($expectedSig64, $sig64)) {
        return null;
    }

    $payload = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $payload64)), true);
    if (!$payload || !isset($payload['exp']) || $payload['exp'] < time()) {
        return null;
    }

    return $payload;
}

function requireAuth() {
    $user = verifyAuthToken();
    if (!$user) {
        sendJsonResponse([
            'success' => false,
            'message' => 'Unauthorized: Please log in as an administrator.'
        ], 401);
    }
    return $user;
}
