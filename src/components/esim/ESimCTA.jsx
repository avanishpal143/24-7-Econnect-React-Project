import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function ESimCTA() {
  return (
    <section id="cta" className="scroll-mt-20 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-200/50 blur-[120px] rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(79,70,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">Get Connected Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Looking for the Right
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              eSIM Plan?
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Our team helps you choose the best international connectivity package for your destination, duration, and data needs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <motion.a
              href="https://wa.me/918287936724"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold tracking-wide rounded-xl shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_36px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Enquiry
            </motion.a>
            <motion.a
              href="tel:+918287936724"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </motion.a>
            <motion.a
              href="mailto:sales@24x7econnect.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-slate-300 text-slate-700 text-sm font-bold tracking-wide rounded-xl hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </motion.a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '✓ No hidden charges',
              '✓ Instant QR delivery',
              '✓ 24/7 support',
              '✓ 180+ countries',
            ].map((item) => (
              <span key={item} className="text-slate-500 text-sm font-medium">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
