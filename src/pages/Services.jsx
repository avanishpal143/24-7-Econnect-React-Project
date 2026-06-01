import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Phone, Globe, Wifi, FileCheck, MessageSquare, ArrowRight, Activity, Shield, HeadphonesIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import CTASection from '../components/sections/CTASection';
import SEOMeta from '../components/shared/SEOMeta';

const serviceCategories = [
  {
    icon: Smartphone,
    title: 'SMS Termination',
    tagline: 'High-delivery A2P messaging via direct carrier routes',
    desc: 'Deliver A2P SMS traffic through direct carrier interconnects with no grey routes. Our optimized routing engine selects the best path per destination for maximum delivery rates and minimum latency.',
    specs: ['Direct carrier interconnects', 'No grey routes', 'Redundant failover paths', 'Real-time delivery monitoring', 'Delivery rate reporting'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-t-indigo-500',
    link: '/solutions/sms-termination',
  },
  {
    icon: MessageSquare,
    title: 'OTP Messaging',
    tagline: 'Low-latency OTP delivery with high success rates',
    desc: 'Priority routing for time-sensitive OTP traffic. Sub-5-second delivery guaranteed via dedicated carrier lanes with automatic retry logic and fallback routes.',
    specs: ['Sub-5s delivery SLA', 'Priority carrier lanes', 'Automatic retry logic', 'Fallback route support', 'DLT compliant'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-t-emerald-500',
    link: '/solutions/otp-messaging',
  },
  {
    icon: Phone,
    title: 'Voice Services',
    tagline: 'CLI and non-CLI voice routing with global coverage',
    desc: 'Carrier-grade voice termination with CLI and non-CLI routes across 190+ countries. HD voice quality with intelligent routing for optimal call completion rates.',
    specs: ['CLI & non-CLI routes', 'Global coverage 190+ countries', 'HD voice quality', 'Call completion optimization', 'Real-time call analytics'],
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-t-orange-500',
    link: '/solutions/voice-services',
  },
  {
    icon: Globe,
    title: 'Bulk Messaging',
    tagline: 'Campaign messaging with real-time analytics',
    desc: 'High-volume bulk SMS delivery for promotional and transactional campaigns. Intelligent routing with delivery optimization and real-time campaign analytics.',
    specs: ['High-volume throughput', 'Campaign scheduling', 'Real-time analytics', 'Delivery optimization', 'Sender ID management'],
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    border: 'border-t-sky-500',
    link: '/solutions/bulk-messaging',
  },
  {
    icon: Wifi,
    title: 'SMPP/API Integration',
    tagline: 'Easy integration with scalable throughput',
    desc: 'Enterprise-grade SMPP v3.4 and REST API connectivity with high TPS capacity. Full sandbox environment for testing before production deployment.',
    specs: ['SMPP v3.4 protocol', 'REST API with full docs', 'High TPS capacity', 'Sandbox environment', 'SDK support'],
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-t-violet-500',
    link: '/solutions/smpp-api',
  },
  {
    icon: FileCheck,
    title: 'India DLT Compliance',
    tagline: 'Fully compliant messaging for Indian operators',
    desc: 'End-to-end TRAI DLT compliance management. Entity registration, header management, and template approval across all major Indian telecom operators.',
    specs: ['TRAI DLT registration', 'All operators covered', 'Header & template approval', 'Consent management', 'Ongoing compliance support'],
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-t-rose-500',
    link: '/solutions/dlt-compliance',
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

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((svc) => (
              <motion.div key={svc.title} variants={fadeInUp} className={`bg-white border border-gray-100 border-t-4 ${svc.border} p-7 hover:shadow-md transition-all duration-300`}>
                <div className={`w-12 h-12 ${svc.bg} flex items-center justify-center mb-5`}>
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
              <motion.div key={feature.title} variants={fadeInUp} className="bg-white border border-gray-100 p-7 hover:border-gray-300 hover:shadow-sm transition-all duration-300 text-center">
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
