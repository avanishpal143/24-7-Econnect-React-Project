import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Phone, Globe, Wifi, FileCheck, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';

export const solutionsData = [
  // ── 1. SMS Termination ──────────────────────────────────────────────────────
  {
    slug: 'sms-termination',
    tag: 'A2P MESSAGING',
    icon: Smartphone,
    title: 'SMS Termination',
    tagline: 'High-delivery A2P messaging via direct carrier routes',
    heroImg: '/imgs/Solutions/SMS Termination.png',
    accent: 'text-indigo-500',
    accentBg: 'bg-indigo-500',
    accentLight: 'bg-indigo-50',
    dot: 'bg-indigo-500',
    border: 'border-t-indigo-500',
    btn: 'border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white',
    overview:
      'EConnect delivers A2P SMS traffic through direct carrier interconnects across 190+ countries. Our termination infrastructure is built on carrier-grade routes with no grey routes, no middlemen, just clean, compliant delivery paths optimized for maximum throughput and reliability.',
    description: [
      'Direct carrier interconnects eliminate grey routes and ensure every message is delivered through compliant, high-quality paths with full visibility.',
      'Intelligent routing engine selects the optimal carrier path per destination in real time, maximizing delivery rates and minimizing latency.',
      'Redundant failover architecture automatically reroutes traffic when a carrier path degrades, maintaining delivery continuity without manual intervention.',
      'Real-time delivery monitoring with per-carrier performance dashboards, DLR tracking, and instant alerting for route degradation.',
    ],
    features: [
      { title: 'Direct Carrier Routes', desc: 'No grey routes. All traffic via direct operator interconnects for compliance and quality.' },
      { title: 'Intelligent Routing', desc: 'Real-time path selection per destination for optimal delivery rates.' },
      { title: 'Redundant Failover', desc: 'Automatic rerouting on carrier degradation with zero manual intervention.' },
      { title: 'DLR Tracking', desc: 'Delivery receipt tracking with carrier-level granularity.' },
      { title: 'Real-Time Monitoring', desc: '24/7 NOC dashboards with per-carrier performance metrics.' },
      { title: 'Global Coverage', desc: '190+ countries with 800+ carrier connections.' },
    ],
    useCases: [
      'Enterprise transactional alerts',
      'Financial notifications',
      'E-commerce order updates',
      'Logistics delivery tracking',
    ],
    stats: [
      { v: '190+', l: 'Countries' },
      { v: '800+', l: 'Carrier Connections' },
      { v: '99.95%', l: 'Uptime SLA' },
    ],
  },

  // ── 2. OTP Messaging ────────────────────────────────────────────────────────
  {
    slug: 'otp-messaging',
    tag: 'OTP DELIVERY',
    icon: MessageSquare,
    title: 'OTP Messaging',
    tagline: 'Low-latency OTP delivery with high success rates',
    heroImg: '/imgs/Solutions/OTP Solutions.png',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-500',
    accentLight: 'bg-emerald-50',
    dot: 'bg-emerald-500',
    border: 'border-t-emerald-500',
    btn: 'border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white',
    overview:
      'Our OTP messaging infrastructure is purpose-built for time-sensitive authentication traffic. Priority carrier lanes, sub-5-second delivery SLA, and automatic retry logic ensure your OTPs reach users before the session expires, every time.',
    description: [
      'Priority carrier lanes dedicated to OTP traffic ensure sub-5-second delivery even during peak load, with no contention from bulk promotional traffic.',
      'Automatic retry logic with intelligent fallback routes re-attempts failed deliveries across alternate carriers within milliseconds.',
      'Full TRAI DLT compliance built in, covering entity registration, header management, and template approval handled end-to-end.',
      'Real-time success rate dashboards with per-operator breakdown, latency tracking, and failure reason analysis.',
    ],
    features: [
      { title: 'Sub-5s Delivery SLA', desc: 'Guaranteed delivery within 5 seconds via priority carrier lanes.' },
      { title: 'Priority Routing', desc: 'Dedicated OTP lanes separate from bulk traffic for consistent speed.' },
      { title: 'Auto Retry Logic', desc: 'Intelligent retry across fallback routes on delivery failure.' },
      { title: 'DLT Compliant', desc: 'Fully TRAI-compliant with automated DLT registration support.' },
      { title: 'High Success Rate', desc: 'Optimized routes deliver industry-leading OTP success rates.' },
      { title: 'Latency Analytics', desc: 'Per-operator latency tracking and delivery reason codes.' },
    ],
    useCases: [
      'Fintech login & payment OTPs',
      'Banking 2FA verification',
      'E-commerce account security',
      'Healthcare patient authentication',
    ],
    stats: [
      { v: '<5s', l: 'Delivery SLA' },
      { v: '99%+', l: 'Success Rate' },
      { v: '24/7', l: 'NOC Monitoring' },
    ],
  },

  // ── 3. Voice Services ───────────────────────────────────────────────────────
  {
    slug: 'voice-services',
    tag: 'VOICE ROUTING',
    icon: Phone,
    title: 'Voice Services',
    tagline: 'CLI and non-CLI voice routing with global coverage',
    heroImg: '/imgs/Solutions/Voice Solutions.png',
    accent: 'text-orange-500',
    accentBg: 'bg-orange-500',
    accentLight: 'bg-orange-50',
    dot: 'bg-orange-500',
    border: 'border-t-orange-500',
    btn: 'border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white',
    overview:
      'EConnect provides carrier-grade voice termination with CLI and non-CLI routes across 190+ countries. Our voice infrastructure delivers HD audio quality with intelligent routing for optimal call completion rates, backed by 24/7 NOC monitoring.',
    description: [
      'CLI and non-CLI voice routes available across all major destinations, with intelligent path selection for optimal call completion rates.',
      'HD voice quality on all routes with low jitter and minimal packet loss, ensuring clear audio for enterprise and telecom operator traffic.',
      'IVR and outbound voice broadcasting capabilities for enterprises running automated call campaigns at scale.',
      'Real-time call analytics including ASR, ACD, call duration, and per-carrier quality metrics for full route visibility.',
    ],
    features: [
      { title: 'CLI & Non-CLI Routes', desc: 'Both CLI and non-CLI termination routes across 190+ countries.' },
      { title: 'HD Voice Quality', desc: 'Low jitter, minimal packet loss, crystal-clear audio on all routes.' },
      { title: 'Global Coverage', desc: 'Voice termination across 190+ countries with direct carrier routes.' },
      { title: 'IVR Capabilities', desc: 'Multi-level IVR for enterprise call routing and automation.' },
      { title: 'Outbound Broadcasting', desc: 'High-volume automated voice campaigns with personalized messages.' },
      { title: 'Call Analytics', desc: 'ASR, ACD, duration, and per-carrier quality metrics in real time.' },
    ],
    useCases: [
      'Enterprise customer support IVR',
      'Outbound voice campaigns',
      'Payment & appointment reminders',
      'Telecom carrier interconnects',
    ],
    stats: [
      { v: 'HD', l: 'Voice Quality' },
      { v: '190+', l: 'Countries' },
      { v: '99.9%', l: 'Call Uptime' },
    ],
  },

  // ── 4. Bulk Messaging ───────────────────────────────────────────────────────
  {
    slug: 'bulk-messaging',
    tag: 'BULK SMS',
    icon: Globe,
    title: 'Bulk Messaging',
    tagline: 'Campaign messaging with real-time analytics',
    heroImg: '/imgs/Solutions/Bulk Messaging Solutions.png',
    accent: 'text-sky-500',
    accentBg: 'bg-sky-500',
    accentLight: 'bg-sky-50',
    dot: 'bg-sky-500',
    border: 'border-t-sky-500',
    btn: 'border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white',
    overview:
      'Our bulk messaging platform handles high-volume promotional and transactional campaigns with intelligent routing and delivery optimization. Send millions of messages with real-time analytics, sender ID management, and compliance support for global operator networks.',
    description: [
      'High-throughput bulk SMS delivery with intelligent routing that selects the best carrier path per destination for maximum delivery rates.',
      'Campaign scheduling and contact list management with segmentation support for targeted messaging at scale.',
      'Real-time campaign analytics with delivery rates, failure reasons, carrier-wise breakdown, and click tracking.',
      'Full compliance support, covering entity registration, header management, and template approval globally.',
    ],
    features: [
      { title: 'High Throughput', desc: 'Millions of messages per hour with intelligent carrier routing.' },
      { title: 'Campaign Scheduling', desc: 'Schedule campaigns with timezone-aware delivery windows.' },
      { title: 'Sender ID Management', desc: 'Manage multiple sender IDs with DLT-compliant headers.' },
      { title: 'Real-Time Analytics', desc: 'Live delivery rates, failure reasons, and carrier breakdown.' },
      { title: 'Contact Segmentation', desc: 'Target specific audience segments for relevant messaging.' },
      { title: 'Regulatory Compliant', desc: 'Fully compliant messaging for international operators.' },
    ],
    useCases: [
      'Promotional campaigns',
      'Product launch announcements',
      'Loyalty & retention messaging',
      'Event notifications',
    ],
    stats: [
      { v: '120M+', l: 'Messages/Month' },
      { v: '190+', l: 'Countries' },
      { v: '99%+', l: 'Delivery Rate' },
    ],
  },

  // ── 5. SMPP/API Integration ─────────────────────────────────────────────────
  {
    slug: 'smpp-api',
    tag: 'CONNECTIVITY',
    icon: Wifi,
    title: 'SMPP/API Integration',
    tagline: 'Easy integration with scalable throughput',
    heroImg: '/imgs/Solutions/SMS:API Solutions.png',
    accent: 'text-violet-500',
    accentBg: 'bg-violet-500',
    accentLight: 'bg-violet-50',
    dot: 'bg-violet-500',
    border: 'border-t-violet-500',
    btn: 'border-violet-600 text-violet-700 hover:bg-violet-600 hover:text-white',
    overview:
      'EConnect supports SMPP v3.4 and REST API connectivity with high TPS capacity for enterprise-grade integration. Whether you are connecting an existing messaging platform or building a new one, our sandbox environment and comprehensive documentation get you live fast.',
    description: [
      'SMPP v3.4 protocol support with configurable TPS limits, bind modes (transmitter, receiver, transceiver), and session management for enterprise-grade connectivity.',
      'REST API with full JSON support, webhook delivery receipts, and SDKs for major languages: Node.js, Python, PHP, Java, and more.',
      'Full sandbox environment for testing message flows, delivery receipts, and error handling before production deployment.',
      'Dedicated technical onboarding with integration support, documentation, and a sandbox account to validate your setup end-to-end.',
    ],
    features: [
      { title: 'SMPP v3.4 Support', desc: 'Full SMPP v3.4 with transmitter, receiver, and transceiver bind modes.' },
      { title: 'REST API', desc: 'JSON REST API with webhook DLRs and comprehensive documentation.' },
      { title: 'High TPS Capacity', desc: 'Configurable throughput limits to match your traffic volume.' },
      { title: 'Sandbox Environment', desc: 'Full test environment to validate integration before going live.' },
      { title: 'Multi-Language SDKs', desc: 'SDKs for Node.js, Python, PHP, Java, and more.' },
      { title: 'Technical Onboarding', desc: 'Dedicated integration support from our technical team.' },
    ],
    useCases: [
      'Messaging platform integration',
      'Enterprise application connectivity',
      'Aggregator interconnects',
      'Custom messaging workflows',
    ],
    stats: [
      { v: 'SMPP', l: 'v3.4 Protocol' },
      { v: 'REST', l: 'API Support' },
      { v: 'High', l: 'TPS Capacity' },
    ],
  },

  // ── 6. India DLT Compliance ─────────────────────────────────────────────────
  {
    slug: 'dlt-compliance',
    tag: 'COMPLIANCE',
    icon: FileCheck,
    title: 'India DLT Compliance',
    tagline: 'Fully compliant messaging for Indian operators',
    heroImg: '/imgs/Solutions/India DLT Solutions.png',
    accent: 'text-rose-500',
    accentBg: 'bg-rose-500',
    accentLight: 'bg-rose-50',
    dot: 'bg-rose-500',
    border: 'border-t-rose-500',
    btn: 'border-rose-600 text-rose-700 hover:bg-rose-600 hover:text-white',
    overview:
      "TRAI's DLT mandate requires all businesses sending commercial SMS in India to register their entity, headers, and message templates on the Distributed Ledger Technology platform. EConnect handles the entire compliance process end-to-end across all major Indian telecom operators.",
    description: [
      'Complete entity registration on all major Indian telecom operators: Airtel, Jio, BSNL, and Vi, through a single point of contact with our compliance team.',
      'Header and Sender ID registration and management so your messages always display your brand name, not a random numeric sender.',
      'Template creation and approval with expert guidance to ensure your message templates meet TRAI guidelines and pass operator review.',
      'Ongoing compliance monitoring: we track regulatory changes and proactively update your registrations to keep your messaging uninterrupted.',
    ],
    features: [
      { title: 'Entity Registration', desc: 'Register on all operators with a single application via our compliance team.' },
      { title: 'Header Registration', desc: 'Get your brand Sender ID approved across all Indian operators.' },
      { title: 'Template Approval', desc: 'Expert-guided template creation and fast operator approval.' },
      { title: 'All Operators Covered', desc: 'Airtel, Jio, BSNL, Vi all covered under one engagement.' },
      { title: 'Consent Management', desc: 'Set up compliant consent collection workflows for promotional messaging.' },
      { title: 'Ongoing Support', desc: 'Proactive monitoring and updates as TRAI regulations evolve.' },
    ],
    useCases: [
      'New business SMS setup',
      'Template re-registration',
      'Operator migration support',
      'Compliance audit assistance',
    ],
    stats: [
      { v: '100%', l: 'Compliance Rate' },
      { v: '3 to 5', l: 'Days Processing' },
      { v: 'All', l: 'Operators Covered' },
    ],
  },
];

export default function Solutions() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <SEOMeta
        title="Communication Solutions | SMS, WhatsApp API, Voice & DLT Compliance"
        description="EConnect's carrier-grade communication solutions: SMS termination, OTP messaging, voice routing, bulk messaging, SMPP/API integration, and compliance support for enterprises."
        path="/solutions"
        keywords="SMS termination, OTP messaging, voice routing, bulk messaging, SMPP API, DLT compliance"
      />
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 text-left">
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4"
              >
                Solutions
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight"
              >
                Carrier-Grade Messaging & Voice Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8"
              >
                SMS termination, OTP delivery, voice routing, bulk messaging, SMPP/API connectivity, and compliance support, all on one carrier-grade platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white text-xs font-black tracking-widest hover:bg-indigo-700 transition-colors">
                  REQUEST ROUTING TEST <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            {/* Right Column: Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative p-2 bg-white/5 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden max-w-lg lg:max-w-full">
                <img
                  src="/solutions-hero.png"
                  alt="Enterprise Telecom Network Solutions"
                  className="w-full h-auto object-cover rounded-xl border border-white/5 shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Solutions overview cards ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutionsData.map((sol) => (
              <motion.div
                key={sol.slug}
                variants={fadeInUp}
                className={`group bg-white border border-gray-100 border-t-4 ${sol.border} hover:shadow-md transition-all duration-300 overflow-hidden`}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={sol.heroImg}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${sol.accent} mb-2 block`}>
                    {sol.tag}
                  </span>
                  <h3 className="text-base font-black text-gray-900 tracking-tight mb-1">{sol.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{sol.tagline}</p>

                  {/* Stats row */}
                  <div className="flex gap-4 mb-5 pb-5 border-b border-gray-100">
                    {sol.stats.map((s) => (
                      <div key={s.l}>
                        <div className={`text-sm font-black ${sol.accent}`}>{s.v}</div>
                        <div className="text-[10px] text-gray-400 tracking-wide uppercase">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini feature list */}
                  <ul className="space-y-1.5 mb-5">
                    {sol.features.slice(0, 3).map((f) => (
                      <li key={f.title} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${sol.dot} flex-shrink-0`} />
                        {f.title}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/solutions/${sol.slug}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-black tracking-widest border-2 px-4 py-2 transition-all duration-200 ${sol.btn}`}
                  >
                    LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
