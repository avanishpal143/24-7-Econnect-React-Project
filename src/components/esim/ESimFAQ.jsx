import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is an eSIM?',
    a: 'An eSIM (embedded SIM) is a digital SIM card built into your device. Unlike a physical SIM, it can be activated remotely by scanning a QR code, with no need to visit a store or wait for delivery. You can store multiple eSIM profiles on one device.',
  },
  {
    q: 'How do I activate my EConnect eSIM?',
    a: 'After purchase, you\'ll receive a QR code via email. Go to your phone\'s Settings → Mobile Data / Cellular → Add eSIM → Scan QR Code. The process takes under 2 minutes. Our support team is available 24/7 if you need help.',
  },
  {
    q: 'Which devices support eSIM?',
    a: 'Most modern smartphones support eSIM including iPhone XS and later, Samsung Galaxy S21 and later, Google Pixel 3a and later, and many other Android devices. Check our Device Compatibility section above for the full list.',
  },
  {
    q: 'Can I use multiple eSIM plans on one device?',
    a: 'Yes. Most eSIM-compatible devices support multiple eSIM profiles. You can keep your home SIM active while using your EConnect eSIM for data abroad, with no need to remove your existing SIM.',
  },
  {
    q: 'Will I retain my existing phone number?',
    a: 'Yes. Your EConnect eSIM is a data-only plan. Your existing SIM and phone number remain active. You can still receive calls and SMS on your regular number while using EConnect eSIM for data.',
  },
  {
    q: 'When will I receive my QR code?',
    a: 'Your QR code is delivered instantly to your email after purchase, typically within 60 seconds. If you don\'t receive it, check your spam folder or contact our 24/7 support team via WhatsApp.',
  },
  {
    q: 'What happens if I run out of data?',
    a: 'You\'ll receive a notification when you\'re approaching your data limit. You can top up your plan or purchase a new plan directly through our platform. Your eSIM profile remains active, so there is no need to re-scan.',
  },
  {
    q: 'Is EConnect eSIM available for business travelers?',
    a: 'Yes. We offer corporate eSIM plans with centralized billing, multi-device management, and dedicated account support. Contact our sales team for enterprise pricing and custom packages.',
  },
];

export default function ESimFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-100/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Everything you need to know about EConnect eSIM.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden shadow-sm ${
                open === i
                  ? 'border-indigo-200 bg-indigo-50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className={`text-sm font-semibold leading-snug transition-colors ${open === i ? 'text-indigo-900' : 'text-slate-700'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? 'bg-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-400'
                }`}>
                  {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-indigo-200 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
