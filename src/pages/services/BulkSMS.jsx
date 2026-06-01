import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Smartphone, Zap, BarChart3, Shield, Globe, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/utils';
import SEOMeta from '../../components/shared/SEOMeta';
import CTASection from '../../components/sections/CTASection';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://24x7econnect.com/services/bulk-sms#service",
    "name": "Bulk SMS Service Global",
    "serviceType": "Bulk SMS Service",
    "provider": { "@id": "https://24x7econnect.com/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Worldwide" },
    "description": "Carrier-grade bulk SMS service for global businesses. Send transactional SMS, promotional SMS, and OTP messages with global compliance and 99%+ delivery rates.",
    "url": "https://24x7econnect.com/services/bulk-sms"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is bulk SMS service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk SMS service allows businesses to send large volumes of text messages to customers simultaneously. It is used for promotional campaigns, transactional alerts, OTP delivery, and customer notifications. EConnect provides carrier-grade bulk SMS with direct operator routes worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Is registration required for bulk SMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, depending on the destination. For example, TRAI mandates DLT registration in India, and 10DLC is required in the US. EConnect handles compliance setups globally across operators."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://24x7econnect.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://24x7econnect.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Bulk SMS Service", "item": "https://24x7econnect.com/services/bulk-sms" }
    ]
  }
];

const features = [
  { icon: Smartphone, title: 'Transactional SMS', desc: 'Send OTPs, alerts, and notifications instantly via direct carrier routes with 99%+ delivery rates across all global operators.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Globe, title: 'Promotional SMS', desc: 'Run bulk promotional campaigns to opted-in customers with compliant sender IDs and approved templates.', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Zap, title: 'OTP Delivery', desc: 'Sub-5-second OTP delivery via priority carrier lanes with automatic retry logic for critical authentication flows.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Live delivery dashboards with per-operator breakdown, DLR tracking, failure reasons, and campaign performance metrics.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: Shield, title: 'Global Compliance', desc: 'Full compliance with entity registration, header management, and template approval across regional and global telecom operators.', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Headphones, title: '24/7 NOC Support', desc: 'Round-the-clock Network Operations Center with dedicated support engineers for uninterrupted message delivery.', color: 'text-violet-500', bg: 'bg-violet-50' },
];

const faqs = [
  {
    q: 'What is bulk SMS service and how does it work?',
    a: 'Bulk SMS service allows businesses to send thousands of text messages simultaneously to customers. Messages are routed through direct carrier interconnects for maximum delivery rates. EConnect\'s platform supports transactional, promotional, and OTP SMS with real-time delivery tracking.',
  },
  {
    q: 'Is registration required for bulk SMS?',
    a: 'Yes. Depending on the country, registration is required (like DLT in India or 10DLC in the US). EConnect handles the complete compliance process across major global and regional operators.',
  },
  {
    q: 'What is the difference between transactional and promotional SMS?',
    a: 'Transactional SMS (OTPs, alerts, order updates) can be sent 24/7 to all numbers. Promotional SMS (offers, campaigns) can only be sent to opted-in customers during permitted hours (9 AM to 9 PM). Both require DLT registration.',
  },
  {
    q: 'What delivery rates can I expect with EConnect bulk SMS?',
    a: 'EConnect delivers 99%+ delivery rates via direct carrier interconnects with no grey routes. Our intelligent routing engine selects the optimal carrier path per destination in real time, with automatic failover for maximum reliability.',
  },
];

export default function BulkSMS() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Bulk SMS Service | Transactional, Promotional & OTP SMS"
        description="Carrier-grade Bulk SMS service. Send transactional SMS, promotional campaigns, and OTP messages with global compliance and 99%+ delivery rates. Serving businesses worldwide."
        path="/services/bulk-sms"
        keywords="bulk SMS service, bulk SMS provider, transactional SMS, promotional SMS, OTP SMS service, global A2P SMS"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden" aria-labelledby="sms-hero-heading">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 text-left">
              <nav aria-label="Breadcrumb" className="flex justify-start mb-6">
                <ol className="flex items-center gap-2 text-xs text-gray-500">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li className="text-gray-600">/</li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li className="text-gray-600">/</li>
                  <li className="text-gray-400">Bulk SMS</li>
                </ol>
              </nav>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">
                Bulk SMS Service
              </motion.p>
              <motion.h1 id="sms-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Bulk SMS Service for Global Businesses
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Send transactional SMS, promotional campaigns, and OTPs with carrier-grade reliability, global compliance, and 99%+ delivery rates across all global operators.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white text-xs font-black tracking-widest hover:bg-indigo-700 transition-colors">
                  GET STARTED <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-xs font-black tracking-widest hover:border-white/60 transition-colors">
                  VIEW PRICING
                </Link>
              </motion.div>
            </div>
            {/* Right Column: Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative p-2 bg-white/5 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden max-w-lg lg:max-w-full">
                <img 
                  src="/imgs/Services/Bulk SMS Services.png" 
                  alt="Bulk SMS Services Dashboard" 
                  className="w-full h-auto object-cover rounded-xl border border-white/5 shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#080f1e] border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
            {[
              { v: '120M+', l: 'SMS Delivered/Month' },
              { v: '99%+', l: 'Delivery Rate' },
              { v: '<5s', l: 'OTP Delivery SLA' },
              { v: '800+', l: 'Global Operators' },
            ].map((m) => (
              <div key={m.l} className="py-5 px-6 text-center">
                <div className="text-2xl font-extrabold text-white tracking-tight">{m.v}</div>
                <div className="text-[0.65rem] font-medium text-slate-400 tracking-wider uppercase mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 bg-white" aria-labelledby="sms-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Features</p>
            <h2 id="sms-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Complete Bulk SMS Platform for Global Outreach
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Everything your business needs to send SMS campaigns, OTPs, and transactional alerts worldwide, with full compliance support.
            </p>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeInUp}
                className="bg-white border border-gray-100 p-7 hover:shadow-md transition-all duration-300">
                <div className={`w-12 h-12 ${f.bg} flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-base font-black text-gray-900 tracking-tight mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50" aria-labelledby="sms-industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Industries</p>
            <h2 id="sms-industries-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              Who Uses Our Bulk SMS Service Worldwide
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Fintech & Banking', uses: ['Payment OTPs', 'Transaction alerts', 'Fraud notifications'] },
              { name: 'E-commerce', uses: ['Order confirmations', 'Delivery tracking', 'Promotional offers'] },
              { name: 'Healthcare', uses: ['Appointment reminders', 'Prescription alerts', 'Lab reports'] },
              { name: 'Education', uses: ['Exam notifications', 'Fee reminders', 'Result alerts'] },
              { name: 'Logistics', uses: ['Shipment tracking', 'Delivery updates', 'Driver alerts'] },
              { name: 'Real Estate', uses: ['Lead follow-ups', 'Site visit reminders', 'Payment dues'] },
            ].map((ind) => (
              <motion.div key={ind.name} variants={fadeInUp}
                className="bg-white border border-gray-100 p-6 hover:shadow-sm transition-all duration-300">
                <h3 className="text-sm font-black text-gray-900 mb-3">{ind.name}</h3>
                <ul className="space-y-1.5">
                  {ind.uses.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />{u}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="sms-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">FAQ</p>
            <h2 id="sms-faq-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              Bulk SMS Service: Common Questions
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-gray-100 border-l-4 border-l-indigo-500 p-6 bg-white">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 text-center">Related Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'WhatsApp Marketing', to: '/services/whatsapp-marketing' },
              { label: 'Voice Call Automation', to: '/services/voice-call' },
              { label: 'WhatsApp API', to: '/services/whatsapp-api' },
              { label: 'DLT Compliance', to: '/solutions/dlt-compliance' },
              { label: 'OTP Messaging', to: '/solutions/otp-messaging' },
              { label: 'View Pricing', to: '/pricing' },
            ].map((link) => (
              <Link key={link.label} to={link.to}
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
