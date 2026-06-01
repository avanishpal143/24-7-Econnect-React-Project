import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Wifi, MessageSquare, Zap, BarChart3, Shield, Code } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/utils';
import SEOMeta from '../../components/shared/SEOMeta';
import CTASection from '../../components/sections/CTASection';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://24x7econnect.com/services/whatsapp-api#service",
    "name": "WhatsApp API Provider Global",
    "serviceType": "WhatsApp Business API",
    "provider": { "@id": "https://24x7econnect.com/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Worldwide" },
    "description": "Official WhatsApp Business API provider for global businesses. Integrate WhatsApp messaging, chatbots, and automation into your business applications with EConnect's API platform.",
    "url": "https://24x7econnect.com/services/whatsapp-api"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is WhatsApp Business API?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatsApp Business API is Meta's official API that allows businesses to send and receive WhatsApp messages programmatically at scale. Unlike the WhatsApp Business App, the API supports high-volume messaging, chatbot integration, and CRM connectivity for enterprise use."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get WhatsApp API access globally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To get WhatsApp API access globally, you need to apply through an official WhatsApp Business Solution Provider (BSP) like EConnect. We handle the Meta verification process, phone number registration, and API setup to get you live within 24 to 48 hours."
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
      { "@type": "ListItem", "position": 3, "name": "WhatsApp API", "item": "https://24x7econnect.com/services/whatsapp-api" }
    ]
  }
];

const features = [
  { icon: Wifi, title: 'Official WhatsApp Business API', desc: 'Access Meta\'s official WhatsApp Business API through EConnect, a verified Business Solution Provider globally.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: MessageSquare, title: 'Two-Way Messaging', desc: 'Send and receive WhatsApp messages programmatically. Build conversational flows, support bots, and customer engagement systems.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Code, title: 'REST API & Webhooks', desc: 'Simple REST API with webhook delivery for incoming messages. SDKs available for Node.js, Python, PHP, and Java.', color: 'text-violet-500', bg: 'bg-violet-50' },
  { icon: Zap, title: 'Chatbot Integration', desc: 'Build intelligent WhatsApp chatbots for customer support, lead qualification, order tracking, and automated FAQs.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: BarChart3, title: 'Message Analytics', desc: 'Track delivery rates, read receipts, response rates, and conversation metrics with real-time dashboards.', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Shield, title: 'Template Management', desc: 'Create, submit, and manage Meta-approved message templates for outbound campaigns and transactional notifications.', color: 'text-rose-500', bg: 'bg-rose-50' },
];

const faqs = [
  {
    q: 'What is WhatsApp Business API and how is it different from WhatsApp Business App?',
    a: 'WhatsApp Business API is Meta\'s enterprise-grade API for high-volume messaging. Unlike the WhatsApp Business App (limited to 1 device, manual messaging), the API supports unlimited messages, multiple agents, chatbot integration, CRM connectivity, and programmatic automation, ideal for businesses sending thousands of messages daily.',
  },
  {
    q: 'How do I get WhatsApp API access globally?',
    a: 'You need to apply through an official WhatsApp Business Solution Provider (BSP) like EConnect. We handle the Meta business verification, phone number registration, and API setup. The process typically takes 24 to 48 hours. Contact our team to get started.',
  },
  {
    q: 'What types of messages can I send via WhatsApp API?',
    a: 'You can send template messages (promotional, transactional, OTP) and session messages (replies within 24 hour conversation windows). Template messages require Meta approval before sending. EConnect helps you create and get templates approved quickly.',
  },
  {
    q: 'Can I integrate WhatsApp API with my CRM or existing software?',
    a: 'Yes. EConnect\'s WhatsApp API integrates with popular CRMs (Salesforce, HubSpot, Zoho), e-commerce platforms (Shopify, WooCommerce), and custom applications via REST API and webhooks. Our technical team provides integration support.',
  },
];

export default function WhatsAppAPI() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="WhatsApp API Provider | Official WhatsApp Business API Integration"
        description="Official WhatsApp Business API provider. Integrate WhatsApp messaging, chatbots, and automation into your business. REST API, webhooks, and full technical support. Serving businesses worldwide."
        path="/services/whatsapp-api"
        keywords="WhatsApp API provider, WhatsApp Business API, WhatsApp API integration, WhatsApp chatbot, official WhatsApp API, WhatsApp BSP"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden" aria-labelledby="wapi-hero-heading">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
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
                  <li className="text-gray-400">WhatsApp API</li>
                </ol>
              </nav>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">
                WhatsApp Business API
              </motion.p>
              <motion.h1 id="wapi-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Official WhatsApp API Provider for Global Businesses
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Integrate WhatsApp Business API into your applications, automate customer communication, and build intelligent chatbots, with EConnect as your official WhatsApp BSP globally.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white text-xs font-black tracking-widest hover:bg-green-700 transition-colors">
                  GET API ACCESS <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-xs font-black tracking-widest hover:border-white/60 transition-colors">
                  VIEW DOCUMENTATION
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
                  alt="WhatsApp API Services Dashboard" 
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
              { v: 'Official', l: 'Meta BSP Partner' },
              { v: '24/48h', l: 'Go-Live Time' },
              { v: 'REST', l: 'API & Webhooks' },
              { v: '24/7', l: 'Technical Support' },
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
      <section className="py-16 bg-white" aria-labelledby="wapi-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">API Features</p>
            <h2 id="wapi-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Everything You Need to Build on WhatsApp API
            </h2>
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

      {/* Integration */}
      <section className="py-16 bg-gray-50" aria-labelledby="wapi-integration-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">Integration</p>
              <h2 id="wapi-integration-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-5">
                Integrate WhatsApp API with Your Existing Systems
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                EConnect's WhatsApp API connects seamlessly with your CRM, e-commerce platform, helpdesk, and custom applications. Our REST API and webhook system make integration straightforward for any tech stack.
              </p>
              <ul className="space-y-3">
                {[
                  'CRM integration (Salesforce, HubSpot, Zoho)',
                  'E-commerce platforms (Shopify, WooCommerce)',
                  'Helpdesk software (Freshdesk, Zendesk)',
                  'Custom applications via REST API',
                  'Webhook support for real-time events',
                  'SDKs for Node.js, Python, PHP, Java',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Quick Start</p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Apply for API Access', desc: 'Contact EConnect and submit your business details for Meta verification.' },
                  { step: '02', title: 'Get Verified', desc: 'We handle the Meta business verification and phone number registration.' },
                  { step: '03', title: 'Integrate API', desc: 'Use our REST API, webhooks, and SDKs to integrate WhatsApp into your app.' },
                  { step: '04', title: 'Go Live', desc: 'Start sending messages within 24 to 48 hours with full technical support.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="text-lg font-black text-green-400 w-8 flex-shrink-0">{s.step}</div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{s.title}</div>
                      <div className="text-xs text-gray-400">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="wapi-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">FAQ</p>
            <h2 id="wapi-faq-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              WhatsApp API: Common Questions
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
              { label: 'WhatsApp Marketing', to: '/services/whatsapp-marketing' },
              { label: 'Bulk SMS Service', to: '/services/bulk-sms' },
              { label: 'Voice Call Automation', to: '/services/voice-call' },
              { label: 'SMPP/API Integration', to: '/solutions/smpp-api' },
              { label: 'View Pricing', to: '/pricing' },
              { label: 'Contact Sales', to: '/contact' },
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
