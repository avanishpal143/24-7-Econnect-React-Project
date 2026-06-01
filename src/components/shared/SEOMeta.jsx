import { Helmet } from 'react-helmet-async';

const SITE_NAME   = 'EConnect';
const BASE_URL    = 'https://24x7econnect.com';
const DEFAULT_IMG = `${BASE_URL}/og-image.png`;

/**
 * SEOMeta — drop into any page for per-route meta tags.
 *
 * Props:
 *   title        — page title (appended with " | EConnect")
 *   description  — meta description (150–160 chars ideal)
 *   path         — URL path e.g. "/solutions/sms-termination"
 *   image        — OG image URL (defaults to /og-image.png)
 *   noIndex      — set true for legal/utility pages
 *   schema       — optional JSON-LD object or array to inject as structured data
 *   keywords     — optional comma-separated keyword string
 */
export default function SEOMeta({
  title,
  description,
  path = '',
  image = DEFAULT_IMG,
  noIndex = false,
  schema = null,
  keywords = '',
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Carrier-Grade SMS & Voice Infrastructure`;
  const url = `${BASE_URL}${path}`;

  const schemaJson = schema
    ? JSON.stringify(Array.isArray(schema) ? schema : schema)
    : null;

  return (
    <Helmet>
      {/* ── Devlofox Credit ── */}
      <meta name="author"    content="Devlofox" />
      <meta name="designer"  content="Devlofox | devlofox.com" />
      <meta name="developer" content="Devlofox | devlofox.com" />

      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords    && <meta name="keywords"    content={keywords} />}
      <link rel="canonical" href={url} />
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }

      {/* ── OpenGraph ── */}
      <meta property="og:title"       content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@24x7econnect" />
      <meta name="twitter:title"       content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image"       content={image} />

      {/* ── JSON-LD Structured Data ── */}
      {schemaJson && (
        <script type="application/ld+json">{schemaJson}</script>
      )}
    </Helmet>
  );
}
