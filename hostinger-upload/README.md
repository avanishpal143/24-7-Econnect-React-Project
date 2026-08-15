# 📦 Hostinger Upload — Readme

Ye folder Hostinger pe upload karne ke liye ready hai.

---

## 📁 Folder Structure

```
hostinger-upload/
├── .htaccess              ← public_html/ root mein jaayega
├── database_setup.sql     ← phpMyAdmin mein run karo (sirf ek baar)
└── api/
    ├── .htaccess          ← api/ folder ko protect karta hai
    ├── config.php         ← DB credentials daalo PEHLE
    └── contact.php        ← Contact form handler
```

---

## ✅ Step-by-Step Upload

### STEP 1 — config.php mein apna data daalo

`api/config.php` file open karo aur fill karo:

```php
define('DB_NAME', 'u123456789_econnect');   // Hostinger DB name
define('DB_USER', 'u123456789_user');        // Hostinger DB user
define('DB_PASS', 'YourStrongPassword');     // DB password
define('ALLOWED_ORIGIN', 'https://www.24x7econnect.com');  // Your domain
```

---

### STEP 2 — phpMyAdmin mein database banao

1. Hostinger hPanel → Databases → MySQL Databases
2. Naya DB + user banao
3. phpMyAdmin open karo → apna DB select karo
4. SQL tab → `database_setup.sql` ka content paste karo → Run

---

### STEP 3 — React app build karo

```bash
cd /path/to/247-econnect-main
npm run build
```

---

### STEP 4 — Hostinger File Manager mein upload karo

| Kya upload karna hai | Kahan jaayega |
|----------------------|----------------|
| `dist/` ka poora content | `public_html/` (dist folder nahi, andar ka content) |
| `.htaccess` (root wala) | `public_html/.htaccess` |
| `api/` folder poora | `public_html/api/` |

**Final structure public_html mein:**
```
public_html/
├── index.html
├── assets/
├── *.png / *.svg (images)
├── .htaccess          ← root wala
└── api/
    ├── .htaccess
    ├── config.php
    └── contact.php
```

---

### STEP 5 — Test karo

Form fill karo → Submit karo → Check karo:
- [ ] phpMyAdmin → contacts table mein entry aayi
- [ ] sales@24x7econnect.com pe email aayi

---

## 🔒 Security Features

| Feature | Details |
|---------|---------|
| Rate Limiting | 1 IP se max 5 submissions/hour |
| SQL Injection | PDO Prepared Statements |
| XSS | strip_tags + htmlspecialchars |
| CORS | Sirf aapke domain se requests allow |
| config.php protection | Direct browser access blocked (.htaccess) |
| Security Headers | X-Frame-Options, X-Content-Type-Options |
| Input Validation | Required fields check + email validation |
| Error Logging | Server side only — client ko expose nahi hota |
