import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Wifi, MessageSquare, Zap, BarChart3, Shield, Code } from 'lucide-react';
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
      <section className="relative pt-0 h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <img 
          src="/imgs/Services/Whatsapp API Services.png" 
          alt="WhatsApp Business API Dashboard" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        
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
            className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-3"
          >
            WhatsApp Business API
          </motion.p>
          <motion.h1
            id="wapi-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl"
          >
            Official WhatsApp API Provider for Global Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed"
          >
            Integrate official WhatsApp Business API into your systems to automate communication and build chatbots.
          </motion.p>
          
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {[
              { v: 'Official', l: 'Meta BSP Partner' },
              { v: '24/48h', l: 'Go-Live Time' },
              { v: 'REST', l: 'API & Webhooks' },
              { v: '24/7', l: 'Technical Support' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-green-400">{s.v}</div>
                <div className="text-xs text-white/50 tracking-widest uppercase mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white" aria-labelledby="wapi-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">API Features</p>
            <h2 id="wapi-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Everything You Need to Build<br />on WhatsApp API
            </h2>
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

      {/* Integration */}
      <section className="py-16 bg-gray-50" aria-labelledby="wapi-integration-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-3">Integration</p>
              <h2 id="wapi-integration-heading" className="text-3xl font-black text-gray-900 tracking-tight mb-5">
                Integrate WhatsApp API with<br />Your Existing Systems
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
              className="bg-gray-900 p-8 rounded-xl">
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
              WhatsApp API:<br />Common Questions
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-gray-100 border-l-4 border-l-green-500 p-6 bg-white rounded-xl overflow-hidden">
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
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 transition-colors rounded-lg">
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
