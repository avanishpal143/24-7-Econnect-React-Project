import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeadphonesIcon, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    Icon: Zap,
    title: 'High Delivery Rates',
    description: 'Ensure up to 99.9% delivery rates using direct operator connections, automated retry logic, and smart quality-based routing.',
    color: 'text-indigo-500',
  },
  {
    Icon: Globe,
    title: 'Global Coverage',
    description: 'Reach mobile subscribers in 190+ countries with interconnects spanning 800+ international mobile carriers.',
    color: 'text-emerald-500',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure Infrastructure',
    description: 'Fully compliant platform with end-to-end encryption, proactive fraud filtering, and strict data protection.',
    color: 'text-rose-500',
  },
  {
    Icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock proactive monitoring and technical escalation support staffed by professional telecom engineers.',
    color: 'text-amber-500',
  },
  {
    Icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track message deliverability, read rates, and campaign statistics in real-time using our live dashboard panels.',
    color: 'text-sky-500',
  },
];

const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="section-heading mb-3">
            Carrier-Grade Infrastructure You Can Rely On
          </h2>
          <p className="section-sub max-w-xl mx-auto">
            Built for{' '}
            <strong className="text-slate-700 font-semibold">enterprises</strong>,{' '}
            <strong className="text-slate-700 font-semibold">aggregators</strong>, and{' '}
            <strong className="text-slate-700 font-semibold">telecom operators</strong>{' '}
            that require redundant infrastructure and direct carrier connectivity
          </p>
          <div className="flex justify-center gap-1.5 mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
          </div>
        </motion.div>

        {/* Centered balanced grid */}
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-5xl mx-auto"
        >
          {features.map(({ Icon, title, description, color }) => (
            <motion.div
              key={title}
              variants={item}
              className="text-center group w-full sm:w-[30%] min-w-[260px] flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">
                <Icon
                  className={`w-12 h-12 ${color} group-hover:scale-110 transition-transform duration-300`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xs font-semibold tracking-[0.18em] text-slate-700 uppercase mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-505 leading-relaxed max-w-[240px] mx-auto">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
