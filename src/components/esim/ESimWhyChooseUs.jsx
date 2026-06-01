import { motion } from 'framer-motion';
import { Server, Globe, Zap, Map, Headphones, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'Telecom-Backed Infrastructure',
    desc: 'Powered by 24x7 EConnect\'s carrier-grade network, which is the same infrastructure trusted by 1,000+ enterprises worldwide.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Globe,
    title: 'Reliable International Coverage',
    desc: '180+ countries, 800+ carrier connections. We route through the best available network at your destination automatically.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    desc: 'Scan, activate, connect. Your eSIM is ready in under 2 minutes, with no store visits and no waiting for delivery.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Map,
    title: 'Multi-Country Support',
    desc: 'One eSIM, multiple countries. Regional plans cover entire continents so you never need to switch plans mid-trip.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Headphones,
    title: '24×7 Assistance',
    desc: 'Our support team is available around the clock via WhatsApp, email, and phone, available in English and multiple other languages.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    desc: 'ISO 27001-aligned infrastructure. Your data and payment information are protected with enterprise-grade security.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
];

export default function ESimWhyChooseUs() {
  return (
    <section id="why-esim" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(79,70,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/30 blur-[120px] rounded-full pointer-events-none"
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
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Enterprise-Grade eSIM for Everyone
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Built on the same telecom infrastructure that powers leading global enterprises, now available for every traveler.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-indigo-50/0 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-indigo-900 transition-colors">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 rounded-2xl border border-slate-200 bg-white shadow-sm backdrop-blur-sm p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: '180+', l: 'Countries' },
              { v: '800+', l: 'Carrier Connections' },
              { v: '99.9%', l: 'Network Uptime' },
              { v: '24/7', l: 'Customer Support' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-indigo-600 mb-1">{s.v}</div>
                <div className="text-slate-500 text-xs tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
