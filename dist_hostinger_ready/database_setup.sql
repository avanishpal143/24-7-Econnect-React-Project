-- ═══════════════════════════════════════════════════════════════
--  24x7 EConnect & CMS Blog Dashboard — Complete Database Setup
--  Run this in phpMyAdmin → SQL tab on Hostinger
--  Select your database first before running!
-- ═══════════════════════════════════════════════════════════════

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- 1. Users Table
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `username` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('super_admin','admin','editor','author','reader') NOT NULL DEFAULT 'reader',
  `avatar` varchar(500) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `links` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tokenVersion` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `parent_id` varchar(36) DEFAULT NULL,
  `postCount` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Tags Table
CREATE TABLE IF NOT EXISTS `tags` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Posts Table
CREATE TABLE IF NOT EXISTS `posts` (
  `id` varchar(36) NOT NULL,
  `title` varchar(500) NOT NULL,
  `slug` varchar(500) NOT NULL,
  `featuredImage` varchar(500) DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `status` enum('draft','published','archived','scheduled','trash') NOT NULL DEFAULT 'draft',
  `scheduledAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `categories` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `author` varchar(36) NOT NULL,
  `metaTitle` varchar(500) DEFAULT NULL,
  `metaDescription` text DEFAULT NULL,
  `focusKeyword` varchar(255) DEFAULT NULL,
  `canonical` varchar(500) DEFAULT NULL,
  `layout` varchar(50) DEFAULT 'default',
  `styles` text DEFAULT NULL,
  `seo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `publishedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `author` (`author`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Media Table
CREATE TABLE IF NOT EXISTS `media` (
  `id` varchar(36) NOT NULL,
  `filename` varchar(500) NOT NULL,
  `originalname` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL,
  `size` int(11) NOT NULL DEFAULT 0,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `mimeType` varchar(100) DEFAULT NULL,
  `altText` varchar(500) DEFAULT '',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `data` longblob DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Comments Table
CREATE TABLE IF NOT EXISTS `comments` (
  `id` varchar(36) NOT NULL,
  `content` text NOT NULL,
  `postId` varchar(36) NOT NULL,
  `authorName` varchar(255) NOT NULL DEFAULT 'Anonymous',
  `authorEmail` varchar(255) DEFAULT NULL,
  `status` enum('pending','approved','rejected','spam') NOT NULL DEFAULT 'pending',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Settings Table
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section` varchar(100) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `section` (`section`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Contacts Table (Inquiries from Contact Us page)
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `company` varchar(255) DEFAULT '',
  `country` varchar(100) DEFAULT '',
  `service` varchar(255) DEFAULT '',
  `traffic` varchar(100) DEFAULT '',
  `contact_method` varchar(50) DEFAULT '',
  `message` text DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT '',
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  INDEX `idx_email` (`email`),
  INDEX `idx_submitted_at` (`submitted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ═══════════════════════════════════════════════════════════════
--  Default Seed Users (Password for superadmin is: super123)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO `users` (`id`, `username`, `name`, `email`, `password`, `role`, `avatar`, `bio`, `phone`, `links`, `tokenVersion`, `createdAt`, `updatedAt`) VALUES
('56575629-40f2-4341-a06c-c21aed234fdc', 'superadmin', 'Super Admin', 'super@cms.com', '$2b$10$67H2iMusxmItYPZDpK143e7Ud80tiAobVBITuasGwPOLQi5lAOcca', 'super_admin', NULL, 'Super administrator with full access', '+1-555-0000', '[{\"platform\":\"github\",\"url\":\"https://github.com/superadmin\"}]', 0, NOW(), NOW()),
('47c60ee0-c11a-49d6-9250-300d7e1a29c1', 'admin', 'Admin', 'admin@cms.com', '$2b$10$o3kPjXD4.VOCestohbP/Weg65mS15vtAfn5Rk17CNfBFttUmh6Je6', 'admin', NULL, 'Site administrator', '+1-555-0100', '[]', 0, NOW(), NOW())
ON DUPLICATE KEY UPDATE `updatedAt` = NOW();

-- ═══════════════════════════════════════════════════════════════
--  Default Categories
-- ═══════════════════════════════════════════════════════════════
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `postCount`, `createdAt`, `updatedAt`) VALUES
('c8e870f9-b5a8-47cd-90c1-a882c8be1c6b', 'A2P Messaging', 'a2p-messaging', 'Guides on A2P Messaging and Bulk SMS infrastructure', 0, NOW(), NOW()),
('9bd48ec9-cf20-4941-8b11-a6a24c05fe9b', 'OTP Delivery', 'otp-delivery', 'Priority routing and OTP delivery SLAs', 0, NOW(), NOW()),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'DLT Compliance', 'dlt-compliance', 'TRAI DLT compliance and entity registration', 0, NOW(), NOW()),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Infrastructure', 'infrastructure', 'Carrier interconnects and SMPP API connections', 0, NOW(), NOW())
ON DUPLICATE KEY UPDATE `updatedAt` = NOW();

COMMIT;

-- ═══════════════════════════════════════════════════════════════
--  Verify all tables
-- ═══════════════════════════════════════════════════════════════
SHOW TABLES;
