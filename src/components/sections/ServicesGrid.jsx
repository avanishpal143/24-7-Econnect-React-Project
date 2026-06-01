import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Smartphone, Phone, Globe, Wifi, FileCheck, ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../lib/utils';

const categories = ['All', 'SMS', 'Voice', 'Connectivity', 'Compliance'];

const services = [
  {
    icon: Smartphone,
    title: 'SMS Termination',
    description: 'High-delivery A2P messaging via direct carrier routes. Optimized routing paths with real-time delivery monitoring and redundant failover.',
    features: ['Direct Carrier Routes', 'No Grey Routes', 'Real-Time Monitoring', 'Redundant Failover'],
    category: 'SMS',
    link: '/solutions/sms-termination',
    accent: 'from-indigo-400 to-violet-500',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: MessageSquare,
    title: 'OTP Messaging',
    description: 'Low-latency OTP delivery with high success rates. Sub-5-second delivery guaranteed via priority carrier interconnects.',
    features: ['Sub-5s Delivery', 'Priority Routing', 'High Success Rate', 'DLT Compliant'],
    category: 'SMS',
    popular: true,
    link: '/solutions/otp-messaging',
    accent: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Phone,
    title: 'Voice Services',
    description: 'CLI and non-CLI voice routing with global coverage. Crystal-clear HD voice with intelligent routing for optimal call quality.',
    features: ['CLI & Non-CLI Routes', 'Global Coverage', 'HD Voice Quality', 'Call Analytics'],
    category: 'Voice',
    link: '/solutions/voice-services',
    accent: 'from-orange-400 to-amber-500',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Globe,
    title: 'Bulk Messaging',
    description: 'Campaign messaging with real-time analytics. Reach millions of recipients with intelligent routing and delivery optimization.',
    features: ['Campaign Management', 'Real-Time Analytics', 'Delivery Optimization', 'Scheduling'],
    category: 'SMS',
    link: '/solutions/bulk-messaging',
    accent: 'from-sky-400 to-blue-500',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    icon: Wifi,
    title: 'SMPP/API Integration',
    description: 'Easy integration with scalable throughput. SMPP v3.4 and REST API with high TPS capacity for enterprise-grade connectivity.',
    features: ['SMPP v3.4 Support', 'REST API', 'High TPS Capacity', 'Sandbox Testing'],
    category: 'Connectivity',
    link: '/solutions/smpp-api',
    accent: 'from-violet-400 to-purple-500',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: FileCheck,
    title: 'India DLT Compliance',
    description: 'Fully compliant messaging for Indian operators. End-to-end TRAI DLT registration, header management, and template approval.',
    features: ['TRAI Compliant', 'Entity Registration', 'Template Approval', 'All Operators'],
    category: 'Compliance',
    link: '/solutions/dlt-compliance',
    accent: 'from-rose-400 to-pink-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? services : services.filter((s) => s.category === active);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
            MESSAGING INFRASTRUCTURE SERVICES
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Carrier-grade SMS, voice, and connectivity services built for enterprises, aggregators, and telecom operators
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-1 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                  active === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="relative group bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-[0_8px_32px_rgba(79,70,229,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden rounded-xl"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.accent}`} />

                {service.popular && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold bg-gray-900 text-white tracking-wider">
                    POPULAR
                  </span>
                )}

                <div className="p-7">
                  <div className={`w-14 h-14 ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-base font-black text-gray-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">{service.description}</p>

                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accent} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gray-900 hover:text-indigo-600 transition-colors group/link"
                  >
                    EXPLORE MORE
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-indigo-600 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold tracking-widest hover:bg-indigo-600 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
