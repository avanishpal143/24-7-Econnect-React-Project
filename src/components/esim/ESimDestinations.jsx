import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    flag: '🇺🇸',
    country: 'United States',
    region: 'North America',
    desc: 'High-speed LTE/5G coverage across all 50 states.',
    from: '₹499',
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-200',
    glow: 'rgba(59,130,246,0.1)',
  },
  {
    flag: '🇦🇪',
    country: 'UAE',
    region: 'Middle East',
    desc: 'Seamless connectivity in Dubai, Abu Dhabi & beyond.',
    from: '₹399',
    color: 'from-amber-600/20 to-orange-600/10',
    border: 'border-amber-200',
    glow: 'rgba(245,158,11,0.1)',
  },
  {
    flag: '🇹🇭',
    country: 'Thailand',
    region: 'Southeast Asia',
    desc: 'Stay connected from Bangkok to Phuket.',
    from: '₹299',
    color: 'from-rose-600/20 to-pink-600/10',
    border: 'border-rose-200',
    glow: 'rgba(244,63,94,0.1)',
  },
  {
    flag: '🇪🇺',
    country: 'Europe',
    region: '30+ Countries',
    desc: 'One plan covering the entire European Union.',
    from: '₹699',
    color: 'from-indigo-600/20 to-teal-600/10',
    border: 'border-indigo-200',
    glow: 'rgba(79,70,229,0.1)',
  },
  {
    flag: '🇸🇬',
    country: 'Singapore',
    region: 'Southeast Asia',
    desc: 'Ultra-fast 5G in the Lion City.',
    from: '₹349',
    color: 'from-emerald-600/20 to-green-600/10',
    border: 'border-emerald-200',
    glow: 'rgba(16,185,129,0.1)',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    region: 'Europe',
    desc: 'Reliable coverage across England, Scotland & Wales.',
    from: '₹449',
    color: 'from-violet-600/20 to-purple-600/10',
    border: 'border-violet-200',
    glow: 'rgba(139,92,246,0.1)',
  },
  {
    flag: '🇻🇳',
    country: 'Vietnam',
    region: 'Southeast Asia',
    desc: 'Fast data from Hanoi to Ho Chi Minh City.',
    from: '₹249',
    color: 'from-red-600/20 to-rose-600/10',
    border: 'border-red-200',
    glow: 'rgba(239,68,68,0.1)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ESimDestinations() {
  return (
    <section id="destinations" className="scroll-mt-20 py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(79,70,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Animated Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">Popular Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Where Do You Want to Go?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
            Instant eSIM plans for the world's most popular travel destinations. Activate before you board.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border ${dest.border} bg-gradient-to-br ${dest.color} overflow-hidden cursor-pointer`}
              style={{ boxShadow: `0 0 0 0 ${dest.glow}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${dest.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${dest.glow}`;
              }}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/20 transition-colors duration-500 backdrop-blur-sm" />

              <div className="relative p-5">
                {/* Flag + region */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{dest.flag}</span>
                  <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">
                    {dest.region}
                  </span>
                </div>

                {/* Country */}
                <h3 className="text-slate-900 font-bold text-base mb-1">{dest.country}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{dest.desc}</p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Starting from</div>
                    <div className="text-indigo-600 font-black text-lg">{dest.from}</div>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">
                    View Plans
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View all card */}
          <motion.div
            custom={destinations.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-8 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center mb-3 group-hover:border-indigo-200 transition-colors shadow-sm">
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>
            <span className="text-slate-600 text-sm font-semibold group-hover:text-indigo-700 transition-colors">
              View All 180+
            </span>
            <span className="text-slate-400 text-xs mt-1">Destinations</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
