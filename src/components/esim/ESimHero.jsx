import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Headphones, Shield } from 'lucide-react';

const badges = [
  { icon: Zap,         label: 'Instant Activation' },
  { icon: Globe,       label: '180+ Destinations' },
  { icon: Headphones,  label: '24×7 Support' },
  { icon: Shield,      label: 'Telecom-Grade' },
];

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function ESimHero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.85]"
          style={{ backgroundImage: 'url(/esim-hero-bg.png)' }}
        />
        {/* Soft overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-slate-50/60" />

        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-200/60 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-200/50 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-200/40 blur-[140px]"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(79,70,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Diagonal light beam */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">
                24x7 EConnect eSIM
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              Global eSIM
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                Connectivity
              </span>
              <br />
              for Modern Travelers
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Stay connected across 180+ countries with fast, reliable, telecom-grade eSIM data plans. No physical SIM. No roaming surprises.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('#destinations')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-xl shadow-[0_0_24px_rgba(79,70,229,0.3)] hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#cta')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-300 text-slate-700 text-sm font-bold tracking-wide rounded-xl hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
              >
                Enquire Now
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((b, i) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <b.icon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-slate-600 text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute w-[420px] h-[420px] rounded-full border border-indigo-200/50 bg-indigo-50/50"
            />
            <motion.div
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute w-[320px] h-[320px] rounded-full border border-blue-200/50 bg-blue-50/50"
            />

            {/* Center globe visual */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative w-64 h-64 lg:w-80 lg:h-80"
            >
              {/* Globe base */}
              <div className="absolute inset-0 rounded-full bg-white border border-slate-100 shadow-[0_0_40px_rgba(79,70,229,0.1),inset_0_0_20px_rgba(79,70,229,0.05)]" />

              {/* Grid lines on globe */}
              <div
                className="absolute inset-0 rounded-full opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(79,70,229,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.8) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                  maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                }}
              />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm">
                  <Globe className="w-10 h-10 text-indigo-600" />
                </div>
              </div>

              {/* Orbiting nodes */}
              {[
                { top: '8%',  left: '50%',  flag: '🇺🇸', delay: 0 },
                { top: '50%', left: '92%',  flag: '🇦🇪', delay: 0.5 },
                { top: '85%', left: '65%',  flag: '🇹🇭', delay: 1 },
                { top: '75%', left: '15%',  flag: '🇬🇧', delay: 1.5 },
                { top: '20%', left: '5%',   flag: '🇸🇬', delay: 2 },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + node.delay, duration: 0.4 }}
                  className="absolute w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-slate-200 flex items-center justify-center text-base shadow-sm"
                  style={{ top: node.top, left: node.left }}
                >
                  {node.flag}
                </motion.div>
              ))}
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-4 -left-4 lg:-left-8 px-4 py-3 rounded-xl bg-white/95 border border-slate-100 shadow-md backdrop-blur-sm"
            >
              <div className="text-indigo-600 text-xl font-black">180+</div>
              <div className="text-slate-500 text-xs font-medium">Countries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-4 -right-4 lg:-right-8 px-4 py-3 rounded-xl bg-white/95 border border-slate-100 shadow-md backdrop-blur-sm"
            >
              <div className="text-emerald-500 text-xl font-black">99.9%</div>
              <div className="text-slate-500 text-xs font-medium">Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-3 rounded-xl bg-white/95 border border-slate-100 shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-700 text-xs font-medium">Instant Activation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
