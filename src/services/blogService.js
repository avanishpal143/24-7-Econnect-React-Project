import { articles as staticArticles } from '../data/blogArticles';

const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const API_BASE_URL = import.meta.env.VITE_API_URL || (isLocal ? 'http://localhost:5001/api' : '/api');
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || (isLocal ? 'http://localhost:5001' : '');

// Consistent and vibrant badge color schemes
const CATEGORY_STYLES = [
  { tagBg: 'bg-indigo-50', tagColor: 'text-indigo-700', border: 'border-t-indigo-500' },
  { tagBg: 'bg-emerald-50', tagColor: 'text-emerald-700', border: 'border-t-emerald-500' },
  { tagBg: 'bg-blue-50', tagColor: 'text-blue-700', border: 'border-t-blue-500' },
  { tagBg: 'bg-amber-50', tagColor: 'text-amber-700', border: 'border-t-amber-500' },
  { tagBg: 'bg-purple-50', tagColor: 'text-purple-700', border: 'border-t-purple-500' },
  { tagBg: 'bg-rose-50', tagColor: 'text-rose-700', border: 'border-t-rose-500' },
  { tagBg: 'bg-teal-50', tagColor: 'text-teal-700', border: 'border-t-teal-500' },
  { tagBg: 'bg-cyan-50', tagColor: 'text-cyan-700', border: 'border-t-cyan-500' },
];

const DEFAULT_FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
];

export const getBackendUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${BACKEND_BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const getCategoryStyle = (categoryName) => {
  if (!categoryName) return CATEGORY_STYLES[0];
  const upper = categoryName.toUpperCase();
  if (upper.includes('A2P') || upper.includes('MESSAG')) return CATEGORY_STYLES[0];
  if (upper.includes('OTP') || upper.includes('AUTH')) return CATEGORY_STYLES[1];
  if (upper.includes('DLT') || upper.includes('COMPLIANCE')) return CATEGORY_STYLES[2];
  if (upper.includes('INFRA') || upper.includes('CARRIER')) return CATEGORY_STYLES[3];
  if (upper.includes('WHATSAPP') || upper.includes('MARKETING')) return CATEGORY_STYLES[4];
  if (upper.includes('VOICE') || upper.includes('CALL')) return CATEGORY_STYLES[5];

  // Hash-based style selection for any new dynamic category
  let hash = 0;
  for (let i = 0; i < categoryName.length; i++) {
    hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % CATEGORY_STYLES.length;
  return CATEGORY_STYLES[index];
};

export const calculateReadingTime = (content) => {
  if (!content) return '3 min read';
  if (Array.isArray(content)) {
    let totalWords = 0;
    content.forEach((block) => {
      if (block.text) totalWords += block.text.split(/\s+/).length;
      if (block.items) {
        block.items.forEach((item) => {
          totalWords += item.split(/\s+/).length;
        });
      }
    });
    return `${Math.max(1, Math.ceil(totalWords / 200))} min read`;
  }
  if (typeof content === 'string') {
    const text = content.replace(/<[^>]+>/g, ' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  }
  return '4 min read';
};

export const formatDate = (dateStr) => {
  if (!dateStr) return 'Recent';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
};

export const formatApiPost = (p, index = 0) => {
  const categories = Array.isArray(p.categories) ? p.categories : [];
  const primaryCategory = categories.length > 0
    ? (typeof categories[0] === 'object' ? categories[0].name : categories[0])
    : 'Telecom & Tech';

  const style = getCategoryStyle(primaryCategory);
  const tagsList = Array.isArray(p.tags)
    ? p.tags.map((t) => (typeof t === 'object' ? t.name : t))
    : [];

  const rawImage = p.featuredImage ? getBackendUrl(p.featuredImage) : null;
  const fallbackImg = DEFAULT_FALLBACK_IMAGES[index % DEFAULT_FALLBACK_IMAGES.length];

  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || (typeof p.content === 'string' ? p.content.replace(/<[^>]+>/g, '').slice(0, 160) + '...' : ''),
    content: p.content,
    isHtmlContent: typeof p.content === 'string',
    tag: primaryCategory.toUpperCase(),
    tagBg: style.tagBg,
    tagColor: style.tagColor,
    border: style.border,
    date: formatDate(p.publishedAt || p.createdAt),
    rawDate: p.publishedAt || p.createdAt,
    readTime: calculateReadingTime(p.content),
    img: rawImage || fallbackImg,
    topics: tagsList.length > 0 ? tagsList : [primaryCategory, 'Business Communication'],
    author: p.author || 'EConnect Editorial Team',
    authorAvatar: p.authorAvatar ? getBackendUrl(p.authorAvatar) : null,
    views: p.views || 0,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    focusKeyword: p.focusKeyword,
    isDynamic: true,
  };
};

/**
 * Fetch all published posts with search & category support
 */
export async function fetchPublishedArticles({ page = 1, limit = 50, category, search } = {}) {
  let apiPosts = [];
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const queryParams = new URLSearchParams({
      status: 'published',
      page: String(page),
      limit: String(limit),
    });
    if (category && category !== 'All') {
      queryParams.append('category', category);
    }
    if (search) {
      queryParams.append('search', search);
    }

    const res = await fetch(`${API_BASE_URL}/posts?${queryParams.toString()}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const rawPosts = data?.data?.posts || (Array.isArray(data?.data) ? data.data : []);
      apiPosts = rawPosts.map((p, idx) => formatApiPost(p, idx));
    }
  } catch (err) {
    console.warn('CMS API fetch warning (falling back to static data if needed):', err?.message || err);
  }

  // Format static articles
  const formattedStatic = staticArticles.map((a) => ({
    ...a,
    isDynamic: false,
    isHtmlContent: false,
  }));

  // Filter static articles if category / search is applied
  let filteredStatic = formattedStatic;
  if (category && category !== 'All') {
    filteredStatic = filteredStatic.filter((a) => a.tag.toUpperCase() === category.toUpperCase());
  }
  if (search) {
    const q = search.toLowerCase();
    filteredStatic = filteredStatic.filter(
      (a) => a.title.toLowerCase().includes(q) || a.excerpt?.toLowerCase().includes(q)
    );
  }

  // Deduplicate by slug (API posts take priority)
  const seenSlugs = new Set(apiPosts.map((p) => p.slug));
  const combined = [
    ...apiPosts,
    ...filteredStatic.filter((s) => !seenSlugs.has(s.slug)),
  ];

  return combined;
}

/**
 * Fetch single article by slug
 */
export async function fetchArticleBySlug(slug) {
  if (!slug) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${API_BASE_URL}/posts/slug/${slug}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const rawPost = data?.data;
      if (rawPost) {
        return formatApiPost(rawPost);
      }
    }
  } catch (err) {
    console.warn(`CMS API fetch single post failed for slug ${slug}:`, err?.message || err);
  }

  // Fallback to static articles
  const staticFound = staticArticles.find((a) => a.slug === slug);
  if (staticFound) {
    return {
      ...staticFound,
      isDynamic: false,
      isHtmlContent: false,
    };
  }

  return null;
}

/**
 * Fetch categories list
 */
export async function fetchBlogCategories() {
  const defaultCategories = ['All', 'A2P Messaging', 'OTP Delivery', 'DLT Compliance', 'Infrastructure'];
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${API_BASE_URL}/categories`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const apiCats = data?.data || [];
      const catNames = apiCats.map((c) => (typeof c === 'object' ? c.name : c)).filter(Boolean);
      
      const allUnique = Array.from(new Set([...defaultCategories, ...catNames]));
      return allUnique;
    }
  } catch (err) {
    console.warn('Could not fetch categories from CMS API:', err?.message || err);
  }
  return defaultCategories;
}

/**
 * Track view count
 */
export async function trackArticleView(postId) {
  if (!postId) return;
  try {
    await fetch(`${API_BASE_URL}/posts/${postId}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    // Silently ignore tracking errors
  }
}
