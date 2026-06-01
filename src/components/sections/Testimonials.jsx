import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { staggerContainer } from '../../lib/utils';

const testimonials = [
  {
    name: 'Nilay Mishra',
    role: 'Founder, Wyb Social',
    quote: 'One of the best service providers in the industry. Never faced any issues in 2 years. Team is always available to assist.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    topColor: 'border-t-indigo-500',
  },
  {
    name: 'Aditi Dalvi',
    role: 'CTO, eVote Technologies',
    quote: 'SMS service is top-notch! Easy to use, messages delivered promptly, support team is excellent. Cost-friendly too!',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    topColor: 'border-t-emerald-500',
  },
  {
    name: 'Sneha Gupta',
    role: 'Director, HealthFirst Clinic',
    quote: 'WhatsApp API integration was straightforward. Our message delivery rates improved by 40% in the first month.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    topColor: 'border-t-sky-500',
  },
  {
    name: 'Priya Kapoor',
    role: 'CEO, FinPay Solutions',
    quote: "Best OTP delivery service we've used. 5-second delivery is real! Highly recommend for fintech businesses.",
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    topColor: 'border-t-rose-500',
  },
];

const brands = ['TechStart', 'FinPay', 'HealthFirst', 'RetailMax', 'eVote', 'LogiCorp'];

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
            Client Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
            MEET OUR CLIENTS
          </h2>
          <p className="text-gray-500 text-sm">Trusted by enterprises and operators across 190+ countries.</p>
          <div className="flex justify-center gap-1.5 mt-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className={`group text-center bg-white border border-gray-100 border-t-4 ${t.topColor} hover:shadow-md transition-all duration-300 p-6`}
            >
              <div className="rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-gray-100 group-hover:ring-indigo-100 transition-all"
                style={{ width: 72, height: 72 }}>
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-black text-gray-900 text-sm tracking-wide">{t.name}</h3>
              <p className="text-xs text-indigo-500 font-semibold mt-0.5 mb-3">{t.role}</p>
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-4 h-4 text-gray-200 mx-auto mb-2" />
              <p className="text-xs text-gray-500 leading-relaxed italic">"{t.quote}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Trusted brands — properly visible ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 pt-10 border-t border-gray-100"
        >
          <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-base font-black text-gray-300 hover:text-gray-600 transition-colors duration-200 tracking-wide cursor-default select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
