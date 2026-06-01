import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/utils';

// Process steps — 6 steps matching the actual onboarding flow
const steps = [
  { num: '1', label: 'CONNECT',   bg: 'bg-[#7ec8d8]' },
  { num: '2', label: 'CONFIGURE', bg: 'bg-[#e8857a]' },
  { num: '3', label: 'TEST',      bg: 'bg-[#7ecfb0]' },
  { num: '4', label: 'ROUTE',     bg: 'bg-[#f0c96e]' },
  { num: '5', label: 'MONITOR',   bg: 'bg-[#b39ddb]' },
  { num: '6', label: 'SCALE',     bg: 'bg-[#f48fb1]' },
];

const skills = [
  { label: 'Message Delivery Rate', pct: 99,    color: 'bg-indigo-500' },
  { label: 'Platform Uptime',       pct: 99.95, color: 'bg-emerald-500' },
  { label: 'Carrier Connections',   pct: 98,    color: 'bg-sky-500' },
  { label: 'Route Optimization',    pct: 96,    color: 'bg-amber-500' },
];

export default function Features() {
  return (
    <>
      {/* ── About the Company ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — image collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team working"
                  className="w-full h-52 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                  alt="Office"
                  className="w-full h-52 object-cover rounded-lg mt-6"
                />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                  alt="Meeting"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
                  alt="Tech"
                  className="w-full h-40 object-cover rounded-lg mt-3"
                />
              </div>
              {/* Floating stat badge — inside container, no overflow */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 right-4 bg-indigo-700 text-white px-5 py-3 shadow-lg"
              >
                <div className="text-2xl font-extrabold leading-none">99.95%</div>
                <div className="text-[10px] text-indigo-200 font-medium tracking-wider uppercase mt-0.5">Uptime SLA</div>
              </motion.div>
            </motion.div>

            {/* Right — text + skill bars */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="section-label mb-3">
                About the Company
              </p>
              <h2 className="section-heading mb-4">
                High-Performance Infrastructure for Critical Communications
              </h2>
              <p className="section-sub mb-3">
                EConnect operates carrier-grade A2P messaging and voice routing infrastructure for enterprises, aggregators, and telecom operators across 190+ countries.
              </p>
              <p className="section-sub mb-8">
                With direct carrier interconnects, redundant failover paths, and 24/7 NOC support, our platform delivers message throughput at scale with delivery optimization on every route.
              </p>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1.5">
                      <span>{s.label}</span>
                      <span className="text-gray-400">{s.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                        className={`h-full ${s.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Model — Hygge overlapping circles ── */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-2">
              Onboarding Process
            </h2>
            <p className="section-sub">how we get your routes live and optimized</p>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
            </div>
          </motion.div>

          {/* Overlapping circles — Hygge style */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center items-center"
          >
            {/* On desktop: overlapping row. On mobile: 2×2 grid */}
            <div className="hidden sm:flex items-center justify-center">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative w-36 h-36 rounded-full ${s.bg} flex flex-col items-center justify-center text-white select-none cursor-default ${i > 0 ? '-ml-6' : ''}`}
                  style={{ zIndex: i + 1 }}
                  whileHover={{ scale: 1.08, zIndex: 10 }}
                >
                  <span className="text-2xl font-black leading-none opacity-90">{s.num}.</span>
                  <span className="text-[10px] font-black tracking-[0.1em] uppercase mt-1 text-center px-3 leading-tight opacity-90">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile: 2×3 grid */}
            <div className="sm:hidden grid grid-cols-3 gap-3">
              {steps.map((s) => (
                <div key={s.label} className={`w-24 h-24 rounded-full ${s.bg} flex flex-col items-center justify-center text-white mx-auto`}>
                  <span className="text-xl font-black leading-none opacity-90">{s.num}.</span>
                  <span className="text-[9px] font-black tracking-wider uppercase mt-1 text-center px-2 leading-tight opacity-90">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Description paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 text-sm max-w-2xl mx-auto mt-10 leading-relaxed"
          >
            From initial SMPP or API connection to full-scale production routing, our onboarding process gets you live in hours.
            Our NOC team monitors your routes continuously and optimizes delivery paths as traffic scales.
          </motion.p>
        </div>
      </section>
    </>
  );
}
