import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Headphones, Activity,
  ArrowRight, ShieldCheck, Server, Target,
  Compass, CheckCircle2, Clock, PhoneCall
} from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import SEOMeta from '../components/shared/SEOMeta';

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'EConnect was established in New Delhi, India, with a vision to simplify global messaging and telecom access for enterprises.' },
  { year: '2019', title: 'Carrier Routing Platform', desc: 'Launched our proprietary SMS gateway with direct operator integrations, ensuring high success rates for A2P traffic.' },
  { year: '2021', title: 'Global Interconnect Hub', desc: 'Expanded carrier connections globally, establishing routing nodes across Europe, the Middle East, and Southeast Asia.' },
  { year: '2023', title: 'WhatsApp Business API & Voice Routing', desc: 'Became an official WhatsApp BSP partner and rolled out CLI and non-CLI automated voice broadcasting systems.' },
  { year: '2025', title: 'Enterprise scale & Compliance', desc: 'Achieved ISO 27001 security standards, processing over 120M messages monthly with full TRAI DLT compliance.' },
];

const coreValues = [
  {
    icon: Target,
    title: 'OUR VISION',
    desc: 'To build the world\'s most resilient and secure B2B communication network, bridging the gap between global enterprises and their customers through next-generation telecom infrastructure.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-t-indigo-500',
  },
  {
    icon: Compass,
    title: 'OUR MISSION',
    desc: 'To deliver carrier-grade A2P messaging, WhatsApp marketing, and voice automation with unmatched throughput, zero grey routes, TRAI compliance, and dedicated engineering support.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-t-emerald-500',
  },
];

const infraStrengths = [
  { title: 'Carrier Interconnects', desc: '800+ direct operator connects globally to eliminate middlemen and grey routing paths.', icon: Globe, color: 'text-sky-500', bg: 'bg-sky-50' },
  { title: 'High TPS Throughput', desc: 'Enterprise-grade gateway handling up to 5,000 transactions per second (TPS) with zero latency spikes.', icon: Server, color: 'text-violet-500', bg: 'bg-violet-50' },
  { title: 'Intelligent Quality Routing', desc: 'Dynamic path selection monitors routes in real-time, instantly failing over to backup channels if performance drops.', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-50' },
  { title: 'Bank-Grade Security', desc: 'Full TLS 1.3 encryption, fraud filters, spam blocks, and strict customer data privacy safeguards.', icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-50' },
];

const whyChooseUs = [
  { title: 'High Delivery Rates', desc: 'Guaranteeing up to 99.9% delivery success for critical transactional text and OTP notifications.' },
  { title: 'Global Coverage', desc: 'Deploy messages and voice calls across 190+ countries through our interconnected carrier matrix.' },
  { title: 'Secure Infrastructure', desc: 'Fully TRAI DLT compliant platform matching global banking and information security standards.' },
  { title: '24/7 Dedicated Support', desc: 'Our Network Operations Center (NOC) is staffed by expert telecom engineers 24 hours a day.' },
  { title: 'Real-Time Analytics', desc: 'Live campaign dashboards showing message deliverability, read rates, and response metrics instantly.' },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="About Us | Enterprise Telecom & Business Messaging Infrastructure"
        description="EConnect is a carrier-grade business communication provider. Learn about our global vision, mission, infrastructure strength, and why enterprises choose us."
        path="/about"
        keywords="about EConnect, messaging infrastructure, A2P SMS provider, telecom carrier routing, business messaging global"
      />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase mb-5"
          >
            WHO WE ARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Carrier-Grade Infrastructure for Global Enterprise Communication
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            EConnect is a specialized B2B telecom infrastructure partner. We power application-to-person (A2P) messaging, WhatsApp marketing campaigns, and voice automation for global enterprises.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white text-xs font-black tracking-widest hover:bg-indigo-700 transition-colors rounded-lg">
              TALK TO AN ENGINEER <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-xs font-black tracking-widest hover:border-white/60 transition-colors rounded-lg">
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {coreValues.map((val) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white border border-gray-100 border-t-4 ${val.border} p-8 hover:shadow-md transition-all duration-300 rounded-xl`}
              >
                <div className={`w-12 h-12 ${val.bg} flex items-center justify-center mb-5`}>
                  <val.icon className={`w-6 h-6 ${val.color}`} />
                </div>
                <h3 className="text-xs font-black tracking-[0.2em] text-gray-900 uppercase mb-3">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infrastructure Strength ── */}
      <section className="py-12 sm:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left intro text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">OPERATIONAL CAPABILITY</p>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                BUILT FOR ULTRA-RELIABILITY & SPEED
              </h2>
              <div className="flex gap-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Unlike consumer-facing aggregators, EConnect controls its routing channels. We host our messaging nodes inside secure datacenter clusters, managing direct carrier interconnects for maximum route stability.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our architecture guarantees low latency, meaning your verification OTPs and transaction alerts are dispatched and acknowledged in under 3 seconds.
              </p>
            </motion.div>

            {/* Right grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {infraStrengths.map((str) => (
                <motion.div
                  key={str.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 p-6 hover:border-gray-200 transition-all duration-300 rounded-xl"
                >
                  <div className={`w-10 h-10 ${str.bg} flex items-center justify-center mb-4`}>
                    <str.icon className={`w-5 h-5 ${str.color}`} />
                  </div>
                  <h4 className="text-sm font-black text-gray-900 mb-2">{str.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{str.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Global Reach ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { v: '190+', l: 'Countries Reached', c: 'text-indigo-600', b: 'bg-indigo-50' },
                { v: '800+', l: 'Operator Connections', c: 'text-emerald-600', b: 'bg-emerald-50' },
                { v: '120M+', l: 'Monthly Volume', c: 'text-sky-600', b: 'bg-sky-50' },
                { v: '99.95%', l: 'Guaranteed Uptime', c: 'text-rose-600', b: 'bg-rose-50' },
              ].map((stat) => (
                <div key={stat.l} className="p-6 bg-gray-50 border border-gray-100 text-center rounded-xl">
                  <div className={`text-3xl font-black ${stat.c} mb-1 tracking-tight`}>{stat.v}</div>
                  <div className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold">{stat.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Right text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-0 lg:pl-8"
            >
              <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">GLOBAL ACCESS</p>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                DIRECT Operator Route Delivery
              </h2>
              <div className="flex gap-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Global communication requires local carrier knowledge. EConnect bypasses international aggregator markups and low-quality SMS routes by terminating traffic through direct mobile network operator interconnects.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Whether sending an OTP to a subscriber in Mumbai, London, or Dubai, our traffic is prioritized on direct carrier channels for instant deliverability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why Clients Choose EConnect ── */}
      <section className="py-12 sm:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">BENEFITS & VALUES</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">WHY ENTERPRISES CHOOSE US</h2>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-100 p-5 hover:shadow-sm transition-all duration-300 rounded-xl"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                </div>
                <h3 className="text-xs font-black text-gray-900 tracking-wider uppercase mb-2">{item.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-3">OUR HERITAGE</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">EXPERIENCE & MILESTONES</h2>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </motion.div>

          <div className="relative pl-8 border-l border-slate-200">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[2.85rem] top-0.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-white shadow-sm">
                  <span className="text-[9px] font-black text-white">{m.year.slice(2)}</span>
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900 mb-1.5 uppercase tracking-wide">{m.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support & Reliability ── */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase mb-3">24/7 CARRIER OPERATIONS</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-5 leading-tight">
                ROUND-THE-CLOCK PROACTIVE MONITORING
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Our Network Operations Center (NOC) runs 24/7/365, monitoring delivery latency, error rates, and operator queues across every route. 
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                With real-time route path optimization, EConnect detects carrier degradations before they affect your business campaigns, automatically rerouting traffic through backup operators.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs text-slate-300 font-medium">99.95% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-slate-300 font-medium">Proactive NOC Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 text-center rounded-lg"
            >
              <Headphones className="w-12 h-12 text-indigo-400 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-black tracking-wider uppercase mb-2">Need Technical Assistance?</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs mx-auto">
                Speak directly with a telecom routing engineer. No bots, no generic replies.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 text-white text-xs font-bold tracking-wider hover:bg-indigo-500 transition-colors uppercase rounded-lg">
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
