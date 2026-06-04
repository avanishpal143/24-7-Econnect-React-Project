import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';
import { articles } from '../data/blogArticles';

const categories = ['All', 'A2P Messaging', 'OTP Delivery', 'DLT Compliance', 'Infrastructure'];

const MotionLink = motion(Link);

export default function Blog() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.tag.toUpperCase() === activeCategory.toUpperCase());

  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <SEOMeta
        title="Blog | WhatsApp Marketing, Bulk SMS & Business Communication"
        description="Guides on Bulk WhatsApp Marketing, SMS campaigns, Voice Call Automation, DLT compliance, and business communication for global enterprises. Written by EConnect experts."
        path="/blog"
        keywords="WhatsApp marketing blog, bulk SMS guide, DLT compliance, business communication blog, SMS marketing"
      />
      <section className="relative pt-20 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="section-label mb-4"
            style={{ color: '#818cf8' }}
          >
            Resources & Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Telecom Knowledge Base
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Technical guides on A2P messaging, OTP delivery, carrier routing, DLT compliance, and SMS infrastructure, written for engineers and operators.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filter */}
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-all duration-200 rounded-lg ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Article grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-250 bg-slate-50 rounded-xl">
              <p className="text-slate-500 text-sm font-semibold">No articles found in this category.</p>
            </div>
          ) : (
            <motion.div
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {filteredArticles.map((article) => (
                <MotionLink
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  variants={fadeInUp}
                  className={`group block bg-white border border-slate-100 border-t-4 ${article.border} hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl`}
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7">
                    {/* Tag + meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-md ${article.tagBg} ${article.tagColor}`}>
                        {article.tag}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-700 transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Topic tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {article.topics.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          <Tag className="w-2.5 h-2.5" /> {t}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide ${article.tagColor} hover:opacity-70 transition-opacity group/link`}
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
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-10"
          >
            <p className="section-label mb-3">Key Topics</p>
            <h2 className="section-heading">Telecom Infrastructure Explained</h2>
          </motion.div>
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { title: 'SMS Termination',     desc: 'How A2P SMS traffic is routed from aggregators to end-user handsets via carrier interconnects.',       link: '/solutions/sms-termination' },
              { title: 'OTP Solutions',        desc: 'Priority routing, retry logic, and delivery SLAs for time-sensitive authentication messages.',          link: '/solutions/otp-messaging' },
              { title: 'Voice Routing',        desc: 'CLI and non-CLI voice termination routes, call completion rates, and HD voice quality standards.',      link: '/solutions/voice-services' },
              { title: 'DLT Compliance',       desc: 'TRAI DLT mandate requirements, entity registration, and template approval for Indian telecom operators.',       link: '/solutions/dlt-compliance' },
              { title: 'Enterprise Messaging', desc: 'High-volume bulk SMS infrastructure for enterprises, featuring throughput, scheduling, and delivery analytics.', link: '/solutions/bulk-messaging' },
              { title: 'API Connectivity',     desc: 'SMPP v3.4 and REST API integration options, TPS capacity, and sandbox testing for developers.',        link: '/solutions/smpp-api' },
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
