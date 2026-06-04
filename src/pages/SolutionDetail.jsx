import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import CTASection from '../components/sections/CTASection';
import { solutionsData } from './Solutions';
import SEOMeta from '../components/shared/SEOMeta';

export default function SolutionDetail() {
  const { slug } = useParams();
  const sol = solutionsData.find((s) => s.slug === slug);

  // 404 fallback — redirect to solutions index
  if (!sol) return <Navigate to="/solutions" replace />;

  // Other solutions (excluding current)
  const others = solutionsData.filter((s) => s.slug !== slug);

  return (
    <div className="overflow-hidden">
      <SEOMeta
        title={`${sol.title} | Telecom Solutions`}
        description={`${sol.title} solution from EConnect. ${sol.tagline}`}
        path={`/solutions/${sol.slug}`}
        keywords={`${sol.title}, enterprise communications, telecom solutions, SMS routing`}
      />

      {/* ── Hero — full-width image with dark overlay ── */}
      <section className="relative pt-0 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={sol.heroImg}
          alt={sol.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          {/* Back link */}
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors mb-6 uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Solutions
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-xs font-black tracking-[0.2em] uppercase ${sol.accent} mb-3`}
          >
            {sol.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl"
          >
            {sol.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed"
          >
            {sol.tagline}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {sol.stats.map((s) => (
              <div key={s.l}>
                <div className={`text-3xl font-black ${sol.accent}`}>{s.v}</div>
                <div className="text-xs text-white/50 tracking-widest uppercase mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Overview + Description ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: overview text */}
            <div className="lg:col-span-2">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className={`text-xs font-black tracking-[0.2em] uppercase ${sol.accent} mb-3`}>Overview</p>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">
                  What is {sol.title}?
                </h2>
                <div className="flex gap-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">{sol.overview}</p>

                {/* Detailed description bullets */}
                <div className="space-y-4">
                  {sol.description.map((para, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`flex gap-4 p-4 border-l-4 ${sol.accentBg.replace('bg-', 'border-l-')} bg-gray-50`}
                    >
                      <span className={`text-sm font-black ${sol.accent} flex-shrink-0 mt-0.5`}>{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{para}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: use cases + CTA card */}
            <div className="space-y-6">
              {/* Use cases */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-gray-100 p-6 rounded-xl bg-white shadow-sm"
              >
                <h3 className="text-xs font-black tracking-[0.2em] text-gray-900 uppercase mb-4">Use Cases</h3>
                <ul className="space-y-2.5">
                  {sol.useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className={`w-2 h-2 rounded-full ${sol.dot} flex-shrink-0`} />
                      {uc}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className={`w-10 h-10 ${sol.accentLight} flex items-center justify-center mb-4`}>
                  <sol.icon className={`w-5 h-5 ${sol.accent}`} />
                </div>
                <h3 className="text-sm font-black text-white mb-2">Ready to get started?</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">
                  Talk to our team about {sol.title}, request a routing test, or get a custom quote.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-gray-900 text-xs font-black tracking-widest hover:bg-gray-100 transition-colors mb-2 rounded-lg"
                >
                  REQUEST ROUTING TEST <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white text-xs font-bold tracking-widest hover:bg-white/10 transition-colors rounded-lg"
                >
                  CONTACT SALES
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className={`text-xs font-black tracking-[0.2em] uppercase ${sol.accent} mb-3`}>Features</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
              KEY FEATURES
            </h2>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {sol.features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className={`bg-white border border-gray-100 border-t-4 ${sol.border} p-6 hover:shadow-sm transition-shadow duration-300 rounded-xl overflow-hidden`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 ${sol.accentLight} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className={`w-4 h-4 ${sol.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-1 tracking-tight">{f.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Other Solutions ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Explore More</p>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">OTHER SOLUTIONS</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {others.slice(0, 3).map((other) => (
              <motion.div
                key={other.slug}
                variants={fadeInUp}
                className={`group border border-gray-100 border-t-4 ${other.border} hover:shadow-sm transition-all duration-300 p-5 rounded-xl overflow-hidden`}
              >
                <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${other.accent} mb-2 block`}>{other.tag}</span>
                <h3 className="text-sm font-black text-gray-900 mb-1 tracking-tight">{other.title}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{other.tagline}</p>
                <Link
                  to={`/solutions/${other.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-black tracking-widest text-gray-500 hover:text-gray-900 transition-colors group/link"
                >
                  LEARN MORE <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link to="/solutions" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 text-xs font-black tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-200 rounded-lg">
              VIEW ALL SOLUTIONS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
