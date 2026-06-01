import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Instant Activation',       esim: true,  physical: false },
  { feature: 'No Physical SIM Swap',     esim: true,  physical: false },
  { feature: 'Multi-Country Support',    esim: true,  physical: false },
  { feature: 'Eco-Friendly (No Plastic)',esim: true,  physical: false },
  { feature: 'Activate Before Travel',   esim: true,  physical: false },
  { feature: 'No Roaming Charges',       esim: true,  physical: false },
  { feature: 'Keep Your Number',         esim: true,  physical: true  },
  { feature: 'Works on All Devices',     esim: false, physical: true  },
];

export default function ESimVsPhysical() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(79,70,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">eSIM vs Physical SIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why eSIM is the Future of Travel
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            The modern traveler's choice: instant, flexible, and hassle-free connectivity.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 text-slate-500 text-xs font-semibold uppercase tracking-wider">Feature</div>
            <div className="p-4 text-center border-l border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200">
                <span className="text-indigo-600 text-xs font-bold tracking-wider">EConnect eSIM</span>
              </div>
            </div>
            <div className="p-4 text-center border-l border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-700 text-xs font-bold tracking-wider">Physical SIM</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 0 ? 'bg-slate-50/50' : 'bg-transparent'} hover:bg-slate-50 transition-colors`}
            >
              <div className="p-4 text-slate-700 text-sm font-medium flex items-center">{row.feature}</div>
              <div className="p-4 flex justify-center items-center border-l border-slate-100">
                {row.esim ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shadow-sm">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shadow-sm">
                    <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                  </div>
                )}
              </div>
              <div className="p-4 flex justify-center items-center border-l border-slate-100">
                {row.physical ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shadow-sm">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shadow-sm">
                    <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
