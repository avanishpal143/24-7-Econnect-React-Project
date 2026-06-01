import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle, Users, BarChart3, Zap, Shield, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/utils';
import SEOMeta from '../../components/shared/SEOMeta';
import CTASection from '../../components/sections/CTASection';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://24x7econnect.com/services/whatsapp-marketing#service",
    "name": "Bulk WhatsApp Marketing Global",
    "serviceType": "Bulk WhatsApp Marketing",
    "provider": { "@id": "https://24x7econnect.com/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Worldwide" },
    "description": "Official WhatsApp Business API-powered bulk marketing platform for global businesses. Send promotional messages, run campaigns, and automate customer communication at scale.",
    "url": "https://24x7econnect.com/services/whatsapp-marketing"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bulk WhatsApp Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk WhatsApp Marketing is sending promotional or transactional messages to large customer lists via the official WhatsApp Business API. It offers higher open rates (98%) compared to email or SMS, making it the most effective channel for customer engagement worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Is bulk WhatsApp marketing compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when done through the official WhatsApp Business API with proper opt-in consent and approved message templates. EConnect ensures full compliance with Meta's policies and international regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How many messages can I send per day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With EConnect's WhatsApp API platform, you can send from 1000 to unlimited messages per day depending on your tier. Business accounts start at 1000 conversations per day and scale up with verification."
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
      { "@type": "ListItem", "position": 3, "name": "WhatsApp Marketing", "item": "https://24x7econnect.com/services/whatsapp-marketing" }
    ]
  }
];

const features = [
  { icon: MessageCircle, title: 'Official WhatsApp Business API', desc: 'Send messages through Meta\'s official API with no bans, no blocks, and full compliance with WhatsApp policies.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Users, title: 'Bulk Campaign Management', desc: 'Upload contact lists, segment audiences, and run targeted WhatsApp campaigns to thousands of customers at once.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track message delivery, read rates, click-through rates, and campaign performance with live dashboards.', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Zap, title: 'Chatbot Automation', desc: 'Automate customer replies, lead qualification, and support workflows with intelligent WhatsApp chatbots.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Shield, title: 'Template Management', desc: 'Create, submit, and manage approved message templates for promotional and transactional campaigns.', color: 'text-violet-500', bg: 'bg-violet-50' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated account manager and round-the-clock technical support for uninterrupted campaign delivery.', color: 'text-rose-500', bg: 'bg-rose-50' },
];

const useCases = [
  'Product launch announcements',
  'Flash sale promotions',
  'Order confirmations & tracking',
  'Appointment reminders',
  'Customer feedback collection',
  'Lead nurturing campaigns',
  'Event invitations',
  'Payment reminders',
];

const faqs = [
  {
    q: 'What is Bulk WhatsApp Marketing?',
    a: 'Bulk WhatsApp Marketing is sending promotional or transactional messages to large customer lists via the official WhatsApp Business API. It offers 98% open rates (far higher than email or SMS), making it the most effective customer engagement channel globally.',
  },
  {
    q: 'Is bulk WhatsApp marketing compliant?',
    a: 'Yes, when done through the official WhatsApp Business API with proper opt-in consent and Meta-approved message templates. EConnect ensures full compliance with Meta\'s policies and international consumer protection regulations.',
  },
  {
    q: 'How many messages can I send per day?',
    a: 'With EConnect\'s WhatsApp API platform, you can send from 1000 to unlimited messages per day depending on your business tier. Accounts scale up with Meta verification and usage history.',
  },
  {
    q: 'What types of messages can I send via WhatsApp API?',
    a: 'You can send promotional campaigns, transactional alerts, OTPs, order updates, appointment reminders, payment notifications, and interactive messages with buttons and quick replies.',
  },
];

export default function WhatsAppMarketing() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Bulk WhatsApp Marketing | Official WhatsApp API Provider"
        description="Globally trusted Bulk WhatsApp Marketing platform. Send bulk WhatsApp messages, run campaigns, and automate customer communication via official WhatsApp Business API. Serving businesses worldwide."
        path="/services/whatsapp-marketing"
        keywords="bulk WhatsApp marketing, WhatsApp marketing platform, WhatsApp API provider, bulk WhatsApp messages, WhatsApp business API"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden" aria-labelledby="wm-hero-heading">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 text-left">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex justify-start mb-6">
                <ol className="flex items-center gap-2 text-xs text-gray-500">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li className="text-gray-600">/</li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li className="text-gray-600">/</li>
                  <li className="text-gray-400">WhatsApp Marketing</li>
                </ol>
              </nav>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">
                WhatsApp Marketing
              </motion.p>
              <motion.h1 id="wm-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Bulk WhatsApp Marketing for Global Businesses
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Send bulk WhatsApp messages, run promotional campaigns, and automate customer communication via the official WhatsApp Business API, trusted by 1,000+ businesses worldwide.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white text-xs font-black tracking-widest hover:bg-green-700 transition-colors">
                  GET STARTED FREE <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-xs font-black tracking-widest hover:border-white/60 transition-colors">
                  BOOK A DEMO
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
                  src="/imgs/Services/Whatsapp API Services.png" 
                  alt="WhatsApp Marketing Services Dashboard" 
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
              { v: '98%', l: 'Message Open Rate' },
              { v: '5x', l: 'Higher Engagement vs SMS' },
              { v: '1,000+', l: 'Businesses Served' },
              { v: '24/7', l: 'Campaign Support' },
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
      <section className="py-16 bg-white" aria-labelledby="wm-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">Platform Features</p>
            <h2 id="wm-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Everything You Need for WhatsApp Marketing Globally
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              A complete WhatsApp marketing platform built for global businesses, from campaign creation to delivery analytics.
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-50" aria-labelledby="wm-usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">Use Cases</p>
              <h2 id="wm-usecases-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-5">
                How Global Businesses Use WhatsApp Marketing
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                From e-commerce to healthcare, fintech to education, businesses worldwide use EConnect's WhatsApp marketing platform to engage customers, drive sales, and automate communication at scale.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {useCases.map((uc) => (
                  <li key={uc} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {uc}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gray-900 text-white text-xs font-black tracking-widest hover:bg-gray-800 transition-colors">
                START YOUR CAMPAIGN <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Why WhatsApp Marketing?</p>
              <div className="space-y-5">
                {[
                  { stat: '98%', label: 'Open Rate', sub: 'vs 20% for email' },
                  { stat: '45%', label: 'Click-Through Rate', sub: 'vs 2% for email' },
                  { stat: '2.7B+', label: 'WhatsApp Users Worldwide', sub: 'most active messaging platform' },
                  { stat: '3x', label: 'Higher Conversion', sub: 'vs traditional SMS' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="text-2xl font-black text-green-400 w-20 flex-shrink-0">{item.stat}</div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="wm-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">FAQ</p>
            <h2 id="wm-faq-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              WhatsApp Marketing: Common Questions
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-gray-100 border-l-4 border-l-green-500 p-6 bg-white">
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
              { label: 'Bulk SMS Service', to: '/services/bulk-sms' },
              { label: 'Voice Call Automation', to: '/services/voice-call' },
              { label: 'WhatsApp API', to: '/services/whatsapp-api' },
              { label: 'OTP Messaging', to: '/solutions/otp-messaging' },
              { label: 'India DLT Compliance', to: '/solutions/dlt-compliance' },
              { label: 'View Pricing', to: '/pricing' },
            ].map((link) => (
              <Link key={link.label} to={link.to}
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 transition-colors">
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
