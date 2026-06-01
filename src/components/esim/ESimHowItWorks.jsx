import { motion } from 'framer-motion';
import { Search, QrCode, Smartphone, Wifi } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Choose Destination',
    desc: 'Browse plans for 180+ countries. Filter by data, duration, and price to find the perfect fit for your trip.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    glow: 'rgba(79,70,229,0.1)',
  },
  {
    num: '02',
    icon: QrCode,
    title: 'Receive QR Code',
    desc: 'Get your eSIM QR code instantly via email. No waiting, no shipping, delivered in seconds.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'rgba(59,130,246,0.1)',
  },
  {
    num: '03',
    icon: Smartphone,
    title: 'Activate eSIM',
    desc: 'Scan the QR code in your phone settings. Takes less than 2 minutes. No technical knowledge needed.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    glow: 'rgba(139,92,246,0.1)',
  },
  {
    num: '04',
    icon: Wifi,
    title: 'Start Using Data',
    desc: 'Land at your destination and connect instantly. Full-speed data, no roaming charges, no surprises.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    glow: 'rgba(16,185,129,0.1)',
  },
];

export default function ESimHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />

      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-200/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Connected in 4 Simple Steps
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From purchase to connected, the entire process takes under 5 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className={`rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 shadow-sm hover:shadow-md`}
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 32px ${step.glow}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <span className={`text-3xl font-black ${step.color} opacity-20`}>{step.num}</span>
                  </div>

                  <h3 className="text-slate-900 font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow connector — mobile */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden flex justify-center my-2">
                    <div className="w-px h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
