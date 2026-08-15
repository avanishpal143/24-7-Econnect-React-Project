import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight, Share2, Eye, Check } from 'lucide-react';
import { fadeInUp } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';
import CTASection from '../components/sections/CTASection';
import { fetchArticleBySlug, fetchPublishedArticles, trackArticleView } from '../services/blogService';

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function BlogDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherArticles, setOtherArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll reading progress
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setScrollProgress(Math.min((scrollTop / docHeight) * 100, 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Load article & related posts
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchArticleBySlug(slug)
      .then((art) => {
        if (!isMounted) return;
        setArticle(art);
        setLoading(false);

        if (art?.id && !sessionStorage.getItem(`viewed_post_${art.id}`)) {
          sessionStorage.setItem(`viewed_post_${art.id}`, '1');
          trackArticleView(art.id);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('Error fetching post:', err);
        setArticle(null);
        setLoading(false);
      });

    // Load related/recent posts for sidebar
    fetchPublishedArticles({ limit: 6 })
      .then((all) => {
        if (!isMounted) return;
        setOtherArticles(all.filter((a) => a.slug !== slug).slice(0, 4));
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article ? `Read "${article.title}" by 24*7 EConnect` : 'Check this out';

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 animate-pulse space-y-6">
          <div className="h-4 bg-slate-200 rounded w-24" />
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-6 bg-slate-200 rounded w-1/3" />
          <div className="h-96 bg-slate-200 rounded-xl" />
          <div className="space-y-3 pt-6">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-5/6" />
            <div className="h-4 bg-slate-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  // If article not found
  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-20">
        <div className="text-center max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Tag className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Article Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">
            The article you are looking for might have been moved, unpublished, or does not exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Top Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-100">
        <div
          className="h-full bg-indigo-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <SEOMeta
        title={article.metaTitle || `${article.title} | 24*7 EConnect Blog`}
        description={article.metaDescription || article.excerpt}
        path={`/blog/${article.slug}`}
        keywords={`${article.topics?.join(', ') || ''}, business communication, SMS marketing, telecom infrastructure`}
      />

      {/* Breadcrumbs & Header Banner */}
      <section className="pt-10 pb-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 hover:text-indigo-600 transition-colors uppercase mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Knowledge Base
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-md ${article.tagBg} ${article.tagColor}`}
            >
              {article.tag}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
              {article.views > 0 && (
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {article.views} views
                </span>
              )}
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 max-w-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pb-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 overflow-hidden">
              {article.authorAvatar ? (
                <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
              ) : (
                <User className="w-5 h-5" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 leading-none">{article.author || 'EConnect Editorial Team'}</p>
              <p className="text-xs text-slate-400 mt-1">Telecom Infrastructure & Messaging Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.img && (
        <section className="relative bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full aspect-[21/9] max-h-[480px] min-h-[260px] overflow-hidden shadow-sm border border-slate-100 rounded-2xl bg-slate-100">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Main Layout Area */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Article Body */}
            <div className="lg:col-span-2">
              <motion.div initial="initial" animate="animate" variants={fadeInUp}>
                {article.isHtmlContent || typeof article.content === 'string' ? (
                  /* Dynamic HTML content from CMS editor */
                  <div
                    className="blog-rich-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                ) : Array.isArray(article.content) ? (
                  /* Structured blocks content from static dataset */
                  <div className="space-y-6">
                    {article.content.map((block, index) => {
                      switch (block.type) {
                        case 'paragraph':
                          return (
                            <p
                              key={index}
                              className="text-base sm:text-lg text-slate-600 leading-relaxed"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              {block.text}
                            </p>
                          );
                        case 'heading':
                          if (block.level === 2) {
                            return (
                              <h2
                                key={index}
                                className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                              >
                                {block.text}
                              </h2>
                            );
                          } else {
                            return (
                              <h3
                                key={index}
                                className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3 tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                              >
                                {block.text}
                              </h3>
                            );
                          }
                        case 'list':
                          return (
                            <ul
                              key={index}
                              className="space-y-3 pl-5 list-disc text-slate-600 text-base sm:text-lg"
                            >
                              {block.items.map((item, itemIdx) => {
                                const parts = item.split('**');
                                if (parts.length > 2) {
                                  return (
                                    <li key={itemIdx} className="leading-relaxed">
                                      <strong>{parts[1]}</strong>
                                      {parts.slice(2).join('')}
                                    </li>
                                  );
                                }
                                return (
                                  <li key={itemIdx} className="leading-relaxed">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          );
                        case 'quote':
                          return (
                            <div
                              key={index}
                              className="my-8 p-6 border-l-4 border-indigo-600 bg-indigo-50/50 text-slate-700 italic text-base sm:text-lg rounded-r-lg"
                            >
                              "{block.text}"
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                ) : null}
              </motion.div>

              {/* Social Sharing & Topic Tags */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {article.topics &&
                    article.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-md"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <Tag className="w-3 h-3 text-slate-400" /> {topic}
                      </span>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Share:</span>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    title="Share on WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare('copy')}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative"
                    title="Copy Link"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-8">
              {/* Category list / Quick navigation */}
              <div className="border border-slate-200 p-6 bg-white shadow-sm rounded-xl">
                <h3 className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">
                  Browse by Topic
                </h3>
                <div className="flex flex-col gap-2">
                  {['A2P Messaging', 'OTP Delivery', 'DLT Compliance', 'Infrastructure'].map((cat) => (
                    <Link
                      key={cat}
                      to="/blog"
                      state={{ category: cat }}
                      className="px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors border border-slate-200 block rounded-lg"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related/Recent posts */}
              {otherArticles.length > 0 && (
                <div className="border border-slate-200 p-6 bg-white shadow-sm rounded-xl">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase mb-5">
                    Recent Articles
                  </h3>
                  <div className="space-y-5">
                    {otherArticles.map((other) => (
                      <Link
                        key={other.slug}
                        to={`/blog/${other.slug}`}
                        className="group block"
                      >
                        <span className={`text-[9px] font-bold tracking-widest uppercase mb-1 block ${other.tagColor}`}>
                          {other.tag}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                          {other.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1">{other.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Enterprise CTA Card */}
              <div className="bg-slate-900 p-6 shadow-sm border border-slate-800 rounded-xl">
                <div className="w-10 h-10 bg-indigo-950 flex items-center justify-center border border-indigo-900/50 mb-4 rounded-lg">
                  <Tag className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Ready to test our routing?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                  Sign up for an API sandbox account or speak with our routing coordinators to run latency checks.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold tracking-widest transition-colors mb-2.5 rounded-lg"
                >
                  REQUEST SANDBOX ACCESS <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-slate-700 hover:bg-slate-800/40 text-slate-300 text-xs font-bold tracking-widest transition-colors rounded-lg"
                >
                  SPEAK TO AN EXPERT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
