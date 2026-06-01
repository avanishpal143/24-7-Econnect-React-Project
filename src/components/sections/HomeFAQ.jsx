import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is Bulk WhatsApp Marketing and how does it work?',
    a: 'Bulk WhatsApp Marketing lets businesses send promotional, transactional, or informational messages to thousands of customers at once via the official WhatsApp Business API. EConnect\'s platform handles message delivery, template management, and real-time analytics so your campaigns reach customers on the world\'s most-used messaging app.',
  },
  {
    q: 'Is EConnect an official WhatsApp API provider globally?',
    a: 'Yes. EConnect provides WhatsApp Business API integration for businesses globally. We support chatbot automation, bulk messaging, two-way conversations, and campaign management, all through Meta\'s official API with full compliance.',
  },
  {
    q: 'What bulk SMS services does EConnect offer for global businesses?',
    a: 'We offer carrier-grade bulk SMS including transactional SMS, promotional SMS, OTP delivery, and A2P messaging. All routes are fully compliant with direct carrier interconnects, real-time delivery reports, and 99%+ delivery rates across global operators.',
  },
  {
    q: 'Does EConnect provide voice call automation services?',
    a: 'Yes. Our voice call automation services include IVR systems, outbound voice broadcasting, automated call campaigns, payment reminders, and appointment notifications. We support both CLI and non-CLI routes with HD voice quality across the world.',
  },
  {
    q: 'Which regions and countries does EConnect serve?',
    a: 'EConnect serves businesses across the globe, including North America, Europe, Asia, the Middle East, and Africa. While our operations are headquartered in New Delhi, we provide international service with 24/7 support.',
  },
  {
    q: 'What is the pricing for bulk SMS and WhatsApp marketing services?',
    a: 'Our plans start from ₹999/month for bulk SMS and WhatsApp services. We offer flexible, volume-based pricing with no lock-in contracts. Enterprise plans with custom pricing and dedicated infrastructure are available for high-volume businesses. Contact our sales team for a tailored quote.',
  },
  {
    q: 'Is regulatory compliance required for sending bulk SMS?',
    a: 'Yes. Regulatory compliance (like TRAI DLT in India, 10DLC in the US, and local regulations in other countries) requires businesses to register their entities and message templates. EConnect handles the entire compliance and registration process globally so your messages are delivered without delay.',
  },
  {
    q: 'How quickly can I get started with EConnect?',
    a: 'You can get started within 24 to 48 hours. Our onboarding team handles API integration, DLT registration, and account setup. We provide sandbox access for testing before going live, and a dedicated account manager to guide you through the process.',
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-3">FAQ</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Everything you need to know about our Bulk WhatsApp Marketing, SMS, Voice Call, and Business Communication services worldwide.
          </p>
          <div className="flex justify-center gap-1.5 mt-5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <h3 className="text-sm font-bold text-gray-900 leading-snug">{faq.q}</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-indigo-500">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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
