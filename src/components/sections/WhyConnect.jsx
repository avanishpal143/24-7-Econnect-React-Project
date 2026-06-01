import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const groups = [
  {
    label: 'SMS & OTP',
    labelColor: 'bg-indigo-500',
    items: [
      {
        title: 'SMS Termination',
        category: 'A2P Messaging',
        categoryColor: 'text-indigo-500',
        desc: 'High-delivery A2P messaging via direct carrier routes with no grey routes, redundant failover, and real-time delivery monitoring.',
        link: '/solutions/sms-termination',
        img: '/imgs/Solutions/SMS:API Solutions.png',
        side: 'left',
      },
      {
        title: 'OTP Messaging',
        category: 'OTP Delivery',
        categoryColor: 'text-indigo-500',
        desc: 'Low-latency OTP delivery with sub-5-second SLA, priority carrier lanes, and automatic retry logic for critical authentication flows.',
        link: '/solutions/otp-messaging',
        img: '/imgs/Solutions/OTP Solutions.png',
        side: 'right',
      },
    ],
  },
  {
    label: 'VOICE & BULK',
    labelColor: 'bg-emerald-500',
    items: [
      {
        title: 'Voice Services',
        category: 'Voice Routing',
        categoryColor: 'text-emerald-500',
        desc: 'CLI and non-CLI voice routing with global coverage, HD voice quality, and intelligent routing for optimal call completion rates.',
        link: '/solutions/voice-services',
        img: '/imgs/Solutions/Voice Solutions.png',
        side: 'left',
      },
      {
        title: 'Bulk Messaging',
        category: 'Bulk SMS',
        categoryColor: 'text-emerald-500',
        desc: 'Campaign messaging with real-time analytics, intelligent routing, delivery optimization, and compliance support for global operator networks.',
        link: '/solutions/bulk-messaging',
        img: '/imgs/Solutions/Bulk Messaging Solutions.png',
        side: 'right',
      },
    ],
  },
  {
    label: 'CONNECTIVITY & COMPLIANCE',
    labelColor: 'bg-rose-500',
    items: [
      {
        title: 'SMPP/API Integration',
        category: 'Connectivity',
        categoryColor: 'text-rose-500',
        desc: 'SMPP v3.4 and REST API connectivity with high TPS capacity, sandbox environment, and dedicated technical onboarding support.',
        link: '/solutions/smpp-api',
        img: '/imgs/Solutions/SMS:API Solutions.png',
        side: 'left',
      },
      {
        title: 'India DLT Compliance',
        category: 'Compliance',
        categoryColor: 'text-rose-500',
        desc: 'Fully compliant messaging for Indian telecom networks, with end-to-end TRAI DLT registration, header management, and template approval.',
        link: '/solutions/dlt-compliance',
        img: '/imgs/Solutions/India DLT Solutions.png',
        side: 'right',
      },
    ],
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyConnect() {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
            Infrastructure Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
            PLATFORM CAPABILITIES
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            carrier-grade infrastructure built for high-volume messaging and voice routing
          </p>
          <div className="flex justify-center gap-1.5 mt-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gray-200" />

          {groups.map((group) => (
            <div key={group.label} className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="flex justify-center mb-8 relative z-10"
              >
                <span className={`${group.labelColor} text-white text-xs font-black tracking-[0.18em] px-5 py-2`}>
                  {group.label}
                </span>
              </motion.div>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-40px' }}
                    className={`relative flex items-start gap-0 sm:gap-6
                      ${item.side === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'}
                      flex-col
                    `}
                  >
                    <div className={`w-full sm:w-[calc(50%-2rem)] bg-white border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row
                      ${item.side === 'right' ? 'sm:ml-auto' : ''}
                    `}>
                      <div className="w-full sm:w-32 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <span className={`text-[10px] font-bold tracking-widest uppercase ${item.categoryColor} mb-1.5 block`}>
                            {item.category}
                          </span>
                          <h3 className="text-sm font-black text-gray-900 mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                            {item.desc}
                          </p>
                        </div>
                        <Link
                          to={item.link}
                          className={`inline-flex items-center gap-1 text-[10px] font-black tracking-widest uppercase mt-3 ${item.categoryColor} hover:opacity-70 transition-opacity group/link`}
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${group.labelColor} ring-2 ring-white shadow`} />
                      <span className={`w-3 h-3 rounded-full ${group.labelColor} ring-2 ring-white shadow opacity-60`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-10 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '120M+',  label: 'Messages/Month',      color: 'text-indigo-500' },
            { value: '99.95%', label: 'Uptime SLA',          color: 'text-emerald-500' },
            { value: '800+',   label: 'Carrier Connections', color: 'text-rose-500' },
            { value: '190+',   label: 'Countries',           color: 'text-amber-500' },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-3xl font-black ${s.color} mb-0.5`}>{s.value}</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
