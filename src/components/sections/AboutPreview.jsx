import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Smartphone, Globe, Phone } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/utils';

const capabilities = [
  {
    icon: MessageSquare,
    title: 'A2P Messaging',
    desc: 'Direct carrier routes for application-to-person SMS with no grey routes.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Smartphone,
    title: 'OTP Delivery',
    desc: 'Sub-5-second OTP delivery with priority routing and retry logic.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Globe,
    title: 'Carrier Routing',
    desc: 'Intelligent routing across 800+ carrier connections globally.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Phone,
    title: 'Enterprise Communication',
    desc: 'Bulk campaigns, transactional alerts, and SMPP connectivity.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
];

const strengths = [
  'Direct carrier integrations across 190+ countries',
  'Real-time delivery monitoring and NOC support',
  'Scalable messaging infrastructure with redundant failover',
  'Optimized routing systems for low latency',
  '24/7 operational support from telecom engineers',
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Company intro ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">About EConnect</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
              FOUNDED TO SIMPLIFY GLOBAL COMMUNICATION
            </h2>
            <div className="flex gap-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
              EConnect provides high-performance SMS and voice infrastructure for enterprises and telecom operators worldwide. We operate carrier-grade A2P messaging routes with direct carrier interconnects, offering no grey routes and no middlemen.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              From OTP delivery to bulk campaigns and voice routing, our redundant infrastructure handles high-volume traffic with real-time monitoring and 24/7 NOC support.
            </p>

            {/* Core Strengths list */}
            <ul className="space-y-3 mb-10">
              {strengths.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{s}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-900 text-gray-900 text-xs font-black tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ── Right: What We Do cards ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
              CORE CAPABILITIES
            </h2>
            <div className="flex gap-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  variants={fadeInUp}
                  className="bg-gray-50 border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 ${cap.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <cap.icon className={`w-5 h-5 ${cap.color}`} />
                  </div>
                  <h4 className="text-sm font-black text-gray-900 tracking-tight mb-2">{cap.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Industries strip */}
            <div className="mt-6 p-5 bg-gray-900 border border-gray-800">
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Industries Served</p>
              <div className="flex flex-wrap gap-2">
                {['Fintech', 'Healthcare', 'E-commerce', 'Telecom', 'Enterprise Platforms'].map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1.5 text-xs font-semibold text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
