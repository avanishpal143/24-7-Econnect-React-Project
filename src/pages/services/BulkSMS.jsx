import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Smartphone, Zap, BarChart3, Shield, Globe, Headphones } from 'lucide-react';
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
      <section className="relative pt-0 h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <img 
          src="/imgs/Services/Bulk SMS Services.png" 
          alt="Bulk SMS Services Dashboard" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors mb-6 uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Services
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-black tracking-[0.2em] text-indigo-400 uppercase mb-3"
          >
            Bulk SMS Service
          </motion.p>
          <motion.h1
            id="sms-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl"
          >
            Bulk SMS Service for Global Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed"
          >
            Carrier-grade bulk SMS delivery for OTPs, transactional notifications, and global marketing campaigns.
          </motion.p>
          
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {[
              { v: '120M+', l: 'SMS Delivered/Month' },
              { v: '99%+', l: 'Delivery Rate' },
              { v: '<5s', l: 'OTP Delivery SLA' },
              { v: '800+', l: 'Global Operators' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-indigo-400">{s.v}</div>
                <div className="text-xs text-white/50 tracking-widest uppercase mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white" aria-labelledby="sms-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Features</p>
            <h2 id="sms-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Complete Bulk SMS Platform<br />for Global Outreach
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Everything your business needs to send SMS campaigns, OTPs, and transactional alerts worldwide, with full compliance support.
            </p>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeInUp}
                className="bg-white border border-gray-100 p-7 hover:shadow-md transition-all duration-300 rounded-xl">
                <div className={`w-12 h-12 ${f.bg} flex items-center justify-center mb-5 rounded-lg`}>
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
              Who Uses Our Bulk SMS<br />Service Worldwide
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
                className="bg-white border border-gray-100 p-6 hover:shadow-sm transition-all duration-300 rounded-xl">
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
              Bulk SMS Service:<br />Common Questions
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-gray-100 border-l-4 border-l-indigo-500 p-6 bg-white rounded-xl overflow-hidden">
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
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-colors rounded-lg">
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
