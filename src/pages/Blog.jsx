import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Tag, Search, Eye, Sparkles, RefreshCw } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';
import { fetchPublishedArticles, fetchBlogCategories } from '../services/blogService';

const MotionLink = motion(Link);

export default function Blog() {
  const location = useLocation();
  const [categories, setCategories] = useState(['All', 'A2P Messaging', 'OTP Delivery', 'DLT Compliance', 'Infrastructure']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load categories
  useEffect(() => {
    fetchBlogCategories().then((cats) => {
      if (cats && cats.length > 0) {
        setCategories(cats);
      }
    });
  }, []);

  // Sync category from route location state if passed
  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  // Load articles from CMS API / Fallback
  const loadArticles = useCallback(async () => {
    setLoading(true);
    try {
      const posts = await fetchPublishedArticles({
        category: activeCategory,
        search: searchQuery,
      });
      setArticlesList(posts);
    } catch (err) {
      console.error('Failed to load articles:', err);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadArticles();
    }, 250);
    return () => clearTimeout(timer);
  }, [loadArticles]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <SEOMeta
        title="Blog & Telecom Knowledge Base | 24*7 EConnect"
        description="Guides on Bulk WhatsApp Marketing, SMS campaigns, Voice Call Automation, DLT compliance, and telecom infrastructure. Updated live by EConnect experts."
        path="/blog"
        keywords="WhatsApp marketing blog, bulk SMS guide, DLT compliance, business communication blog, SMS marketing, telecom infrastructure"
      />

      <section className="relative pt-20 pb-20 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" /> Resources & Knowledge Base
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Telecom & Marketing Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Real-time guides on WhatsApp campaigns, OTP priority routing, carrier nodes, DLT regulations, and enterprise communication.
          </motion.p>

          {/* Search Box inside Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, topic, or keyword..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-slate-900/80 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 bg-white/10 rounded-md"
              >
                Clear
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter & Top Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
            {/* Category chips */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-all duration-200 rounded-lg ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Results counter & refresh */}
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span>Showing {articlesList.length} {articlesList.length === 1 ? 'article' : 'articles'}</span>
              <button
                onClick={() => loadArticles()}
                title="Refresh articles"
                className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Loading Skeleton */}
          {loading && articlesList.length === 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-pulse">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="h-52 bg-slate-200" />
                  <div className="p-7 space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-1/4" />
                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                    <div className="h-16 bg-slate-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : articlesList.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16 border border-dashed border-slate-200 bg-slate-50 rounded-2xl max-w-2xl mx-auto px-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-sm text-slate-500 mb-6">
                {searchQuery
                  ? `No matching articles found for "${searchQuery}". Try different keywords.`
                  : `There are currently no published articles under "${activeCategory}".`}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Article grid */
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {articlesList.map((article) => (
                <MotionLink
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  variants={fadeInUp}
                  className={`group block bg-white border border-slate-100 border-t-4 ${article.border} hover:shadow-lg hover:border-slate-200 transition-all duration-300 overflow-hidden rounded-xl flex flex-col`}
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative bg-slate-100">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
                      }}
                    />
                    {article.isDynamic && (
                      <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
                        Live Post
                      </span>
                    )}
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    {/* Tag + meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-md ${article.tagBg} ${article.tagColor}`}
                      >
                        {article.tag}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                        <span>{article.date}</span>
                        {article.views > 0 && (
                          <span className="flex items-center gap-1 text-slate-400">
                            <Eye className="w-3 h-3" /> {article.views}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-700 transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3 flex-1"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Topic tags */}
                    {article.topics && article.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {article.topics.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <Tag className="w-2.5 h-2.5 text-slate-400" /> {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read more */}
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide ${article.tagColor} hover:opacity-80 transition-opacity group/link mt-auto pt-2 border-t border-slate-100`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* SEO-focused topic strip */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p className="section-label mb-3">Key Topics</p>
            <h2 className="section-heading">Telecom Infrastructure Explained</h2>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              {
                title: 'SMS Termination',
                desc: 'How A2P SMS traffic is routed from aggregators to end-user handsets via carrier interconnects.',
                link: '/solutions/sms-termination',
              },
              {
                title: 'OTP Solutions',
                desc: 'Priority routing, retry logic, and delivery SLAs for time-sensitive authentication messages.',
                link: '/solutions/otp-messaging',
              },
              {
                title: 'Voice Routing',
                desc: 'CLI and non-CLI voice termination routes, call completion rates, and HD voice quality standards.',
                link: '/solutions/voice-services',
              },
              {
                title: 'DLT Compliance',
                desc: 'TRAI DLT mandate requirements, entity registration, and template approval for Indian telecom operators.',
                link: '/solutions/dlt-compliance',
              },
              {
                title: 'Enterprise Messaging',
                desc: 'High-volume bulk SMS infrastructure for enterprises, featuring throughput, scheduling, and delivery analytics.',
                link: '/solutions/bulk-messaging',
              },
              {
                title: 'API Connectivity',
                desc: 'SMPP v3.4 and REST API integration options, TPS capacity, and sandbox testing for developers.',
                link: '/solutions/smpp-api',
              },
            ].map((topic) => (
              <motion.div key={topic.title} variants={fadeInUp}>
                <Link
                  to={topic.link}
                  className="group flex flex-col h-full bg-white border border-slate-200 p-5 hover:border-indigo-600 hover:shadow-sm transition-all duration-200 rounded-xl"
                >
                  <h3
                    className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className="text-xs text-slate-500 leading-relaxed flex-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {topic.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-600 mt-3 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
