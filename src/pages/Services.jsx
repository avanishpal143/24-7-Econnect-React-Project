import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Phone, Globe, Wifi, FileCheck, MessageSquare, ArrowRight, Activity, Shield, HeadphonesIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import CTASection from '../components/sections/CTASection';
import SEOMeta from '../components/shared/SEOMeta';

const serviceCategories = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Marketing',
    tagline: 'Official WhatsApp Business API-powered bulk marketing',
    desc: 'Send bulk WhatsApp messages, run promotional campaigns, and automate customer communication via the official WhatsApp Business API with 98% open rates.',
    specs: ['Official WhatsApp Business API', 'Bulk campaign management', 'Real-time delivery analytics', 'Chatbot & automation support', 'Meta template approval guidance'],
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-t-green-500',
    link: '/services/whatsapp-marketing',
  },
  {
    icon: Smartphone,
    title: 'Bulk SMS Service',
    tagline: 'Carrier-grade transactional, promotional & OTP campaigns',
    desc: 'Deliver high-volume text messages globally with 99%+ delivery rates. Connect via REST API or SMPP v3.4 for priority routing with automatic failovers.',
    specs: ['Transactional & promotional SMS', 'Priority OTP delivery lanes', 'Real-time campaign analytics', 'TRAI DLT compliance support', 'Global operator coverage'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-t-indigo-500',
    link: '/services/bulk-sms',
  },
  {
    icon: Phone,
    title: 'Voice Call Service',
    tagline: 'Automated outbound voice broadcasting & IVR systems',
    desc: 'Deliver pre-recorded voice broadcasts and build multi-level IVR menus at scale. Access high-quality CLI and non-CLI routing for optimal call completion.',
    specs: ['Outbound voice broadcasting', 'Multi-level IVR system', 'CLI & non-CLI routes', 'HD call quality & low latency', 'Call duration & ASR analytics'],
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-t-orange-500',
    link: '/services/voice-call',
  },
  {
    icon: Wifi,
    title: 'WhatsApp API',
    tagline: 'Official Meta integration for developers & platforms',
    desc: 'Connect your CRM, helpdesk, or custom platform to Meta\'s official WhatsApp Business API. Set up webhooks for two-way conversations and automated bots.',
    specs: ['Official Meta partner access', 'REST API & webhook support', 'Two-way conversational messaging', 'CRM & e-commerce integrations', 'Full developer sandbox'],
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-t-violet-500',
    link: '/services/whatsapp-api',
  },
];

const platformFeatures = [
  { icon: Activity, title: 'REAL-TIME MONITORING', desc: '24/7 NOC with live delivery dashboards, carrier performance tracking, and instant failure alerts across all routes.', color: 'text-indigo-500' },
  { icon: Shield, title: 'FRAUD PROTECTION', desc: 'Multi-layer filtering blocks grey routes, SIM farms, and fraudulent traffic before it impacts your delivery rates.', color: 'text-emerald-500' },
  { icon: HeadphonesIcon, title: '24/7 NOC SUPPORT', desc: 'Round-the-clock Network Operations Center staffed by telecom engineers for immediate issue resolution.', color: 'text-amber-500' },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Business Communication Services | Bulk SMS, WhatsApp API & Voice India"
        description="EConnect's carrier-grade business communication services: Bulk SMS, WhatsApp API, Voice Call Automation, OTP delivery, and SMPP connectivity for enterprises across India."
        path="/services"
        keywords="business communication services India, bulk SMS service India, WhatsApp API India, voice call service India, OTP delivery India, SMPP API India"
      />
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 text-left">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">Services</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Bulk WhatsApp, SMS & Voice Communication Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Deploy high-throughput WhatsApp marketing campaigns, priority transaction OTP messages, and intelligent automated voice broadcasting on a single carrier-grade global infrastructure.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white text-xs font-black tracking-widest hover:bg-indigo-700 transition-colors rounded-lg">
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
                  src="/services-hero.png" 
                  alt="Enterprise Communication Dashboard" 
                  className="w-full h-auto object-cover rounded-xl border border-white/5 shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Service Categories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">WHAT WE DELIVER</h2>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {serviceCategories.map((svc) => (
              <motion.div key={svc.title} variants={fadeInUp} className={`bg-white border border-gray-100 border-t-4 ${svc.border} p-7 hover:shadow-md transition-all duration-300 rounded-xl`}>
                <div className={`w-12 h-12 ${svc.bg} flex items-center justify-center mb-5 rounded-lg`}>
                  <svc.icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <h3 className="text-base font-black text-gray-900 tracking-tight mb-1">{svc.title}</h3>
                <p className={`text-xs font-semibold ${svc.color} mb-3`}>{svc.tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {svc.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${svc.bg.replace('bg-', 'bg-').replace('-50', '-500')} flex-shrink-0`} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link to={svc.link} className={`inline-flex items-center gap-1.5 text-xs font-black tracking-widest ${svc.color} hover:opacity-70 transition-opacity group/link`}>
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">PLATFORM CAPABILITIES</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">Redundant infrastructure with real-time monitoring and 24/7 NOC support.</p>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-3 gap-6">
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp} className="bg-white border border-gray-100 p-7 hover:border-gray-300 hover:shadow-sm transition-all duration-300 text-center rounded-xl">
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4 mx-auto`} strokeWidth={1.5} />
                <h3 className="text-sm font-black text-gray-900 tracking-tight mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
