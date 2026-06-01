import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, Mic, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/utils';
import SEOMeta from '../../components/shared/SEOMeta';
import CTASection from '../../components/sections/CTASection';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://24x7econnect.com/services/voice-call#service",
    "name": "Voice Call Automation Global",
    "serviceType": "Voice Call Automation",
    "provider": { "@id": "https://24x7econnect.com/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Worldwide" },
    "description": "Carrier-grade voice call automation services for global businesses. IVR systems, outbound voice broadcasting, automated call campaigns, and CLI/non-CLI routing with HD voice quality.",
    "url": "https://24x7econnect.com/services/voice-call"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is voice call automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voice call automation uses pre-recorded or text-to-speech messages to automatically call customers at scale. It is used for payment reminders, appointment confirmations, promotional campaigns, and customer surveys without requiring human agents."
        }
      },
      {
        "@type": "Question",
        "name": "What is an IVR system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IVR (Interactive Voice Response) is an automated phone system that interacts with callers through voice prompts and keypad inputs. EConnect provides multi-level IVR systems for customer support, lead qualification, and automated information delivery."
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
      { "@type": "ListItem", "position": 3, "name": "Voice Call Automation", "item": "https://24x7econnect.com/services/voice-call" }
    ]
  }
];

const features = [
  { icon: Phone, title: 'Outbound Voice Broadcasting', desc: 'Send automated voice messages to thousands of customers simultaneously for promotions, reminders, and alerts.', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Mic, title: 'IVR Systems', desc: 'Multi-level Interactive Voice Response for customer support, lead qualification, and automated information delivery.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Zap, title: 'CLI & Non-CLI Routes', desc: 'Both CLI (with caller ID) and non-CLI voice routes globally with intelligent path selection for optimal call completion.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Globe, title: 'HD Voice Quality', desc: 'Crystal-clear HD audio on all routes with low jitter and minimal packet loss for professional call quality.', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: BarChart3, title: 'Call Analytics', desc: 'Real-time call analytics including ASR, ACD, call duration, answer rates, and per-carrier quality metrics.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: Shield, title: '99.9% Call Uptime', desc: 'Redundant voice infrastructure with automatic failover ensures your calls are always connected when it matters.', color: 'text-violet-500', bg: 'bg-violet-50' },
];

const faqs = [
  {
    q: 'What is voice call automation and how does it work?',
    a: 'Voice call automation uses pre-recorded or text-to-speech messages to automatically call customers at scale. EConnect\'s platform dials numbers from your list, plays your message, and records responses without human agents. It\'s used for payment reminders, appointment confirmations, surveys, and promotional campaigns.',
  },
  {
    q: 'What is an IVR system and do I need one?',
    a: 'IVR (Interactive Voice Response) is an automated phone system that interacts with callers through voice prompts and keypad inputs. If you receive inbound calls for customer support, lead qualification, or information requests, an IVR system can handle them 24/7 without human agents.',
  },
  {
    q: 'What is the difference between CLI and non-CLI voice calls?',
    a: 'CLI (Calling Line Identification) calls display your business number on the recipient\'s phone. Non-CLI calls do not show a caller ID. CLI calls have higher answer rates and are preferred for customer-facing campaigns. EConnect provides both options.',
  },
  {
    q: 'How many calls can EConnect handle simultaneously?',
    a: 'EConnect\'s voice infrastructure supports thousands of concurrent calls with carrier-grade reliability. Our platform scales automatically to handle high-volume campaigns without degradation in call quality or completion rates.',
  },
];

export default function VoiceCall() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Voice Call Automation | IVR, Outbound Calling & Voice Broadcasting"
        description="Carrier-grade Voice Call Automation service. IVR systems, outbound voice broadcasting, automated call campaigns with HD voice quality and 99.9% uptime. Serving businesses worldwide."
        path="/services/voice-call"
        keywords="voice call automation, IVR service, outbound voice broadcasting, automated call service, bulk voice call"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden" aria-labelledby="voice-hero-heading">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
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
                  <li className="text-gray-400">Voice Call Automation</li>
                </ol>
              </nav>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase mb-4">
                Voice Call Automation
              </motion.p>
              <motion.h1 id="voice-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Voice Call Automation & IVR Services for Global Businesses
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Automate outbound voice campaigns, build IVR systems, and deliver voice broadcasts to thousands of customers worldwide with HD voice quality and 99.9% uptime.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 text-white text-xs font-black tracking-widest hover:bg-orange-700 transition-colors">
                  GET STARTED <ArrowRight className="w-4 h-4" />
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
                  src="/imgs/Services/Bulk SMS Services.png" 
                  alt="Voice Call Automation Services Dashboard" 
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
              { v: 'HD', l: 'Voice Quality' },
              { v: '99.9%', l: 'Call Uptime' },
              { v: '190+', l: 'Countries' },
              { v: '24/7', l: 'NOC Support' },
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
      <section className="py-16 bg-white" aria-labelledby="voice-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-3">Features</p>
            <h2 id="voice-features-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Complete Voice Automation Platform for Global Reach
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-50" aria-labelledby="voice-usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-3">Use Cases</p>
            <h2 id="voice-usecases-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              How Businesses Use Voice Call Automation Worldwide
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Payment Reminders', desc: 'Automatically call customers with overdue payments, reducing collection costs and improving recovery rates.' },
              { title: 'Appointment Confirmations', desc: 'Send automated voice reminders for appointments, reducing no-shows for clinics, salons, and service businesses.' },
              { title: 'Customer Surveys', desc: 'Collect feedback via automated voice surveys with keypad responses at scale, without human agents.' },
              { title: 'Promotional Campaigns', desc: 'Broadcast promotional offers and announcements to opted-in customers worldwide with personalized voice messages.' },
            ].map((uc) => (
              <motion.div key={uc.title} variants={fadeInUp}
                className="bg-white border border-gray-100 p-6 hover:shadow-sm transition-all duration-300">
                <h3 className="text-sm font-black text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="voice-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-3">FAQ</p>
            <h2 id="voice-faq-heading" className="text-3xl font-black text-gray-900 tracking-tight">
              Voice Call Automation: Common Questions
            </h2>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-gray-100 border-l-4 border-l-orange-500 p-6 bg-white">
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
              { label: 'WhatsApp API', to: '/services/whatsapp-api' },
              { label: 'Voice Solutions', to: '/solutions/voice-services' },
              { label: 'View Pricing', to: '/pricing' },
              { label: 'Contact Sales', to: '/contact' },
            ].map((link) => (
              <Link key={link.label} to={link.to}
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-colors">
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
