import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import CTASection from '../components/sections/CTASection';
import SEOMeta from '../components/shared/SEOMeta';

const plans = [
  {
    name: 'STARTER',
    price: '',
    period: '',
    desc: 'For businesses starting with A2P messaging, including OTP delivery, and compliance support.',
    topBar: 'bg-indigo-600',
    featured: false,
    cardClass: 'bg-white border border-slate-200',
    nameClass: 'text-slate-900',
    priceClass: 'text-slate-900',
    descClass: 'text-slate-500',
    checkColor: 'text-indigo-600',
    features: [
      '10,000 SMS Credits',
      'OTP & transactional messaging',
      'Basic delivery analytics',
      'Email support',
      'DLT & compliance assistance',
      '99.9% uptime SLA',
    ],
    cta: 'GET STARTED',
    ctaClass: 'border border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white',
    link: '/contact',
  },
  {
    name: 'GROWTH',
    price: '',
    period: '',
    desc: 'For growing enterprises that need higher message throughput, carrier routing options, and priority support.',
    topBar: 'bg-indigo-600',
    featured: true,
    badge: 'MOST POPULAR',
    cardClass: 'bg-slate-900 border border-slate-700',
    nameClass: 'text-white',
    priceClass: 'text-white',
    descClass: 'text-slate-400',
    checkColor: 'text-indigo-400',
    features: [
      '50,000 SMS Credits',
      'SMS + Voice + Bulk campaigns',
      'Carrier routing analytics',
      'Priority 24/7 NOC support',
      'Dedicated account manager',
      'SMPP / API access',
      '99.99% uptime SLA',
    ],
    cta: 'GET STARTED',
    ctaClass: 'bg-indigo-600 text-white hover:bg-indigo-700',
    link: '/contact',
  },
  {
    name: 'ENTERPRISE',
    price: '',
    period: '',
    desc: 'For aggregators and telecom operators requiring custom traffic volumes, direct carrier routes, and SLA-backed infrastructure.',
    topBar: 'bg-emerald-600',
    featured: false,
    cardClass: 'bg-white border border-slate-200',
    nameClass: 'text-slate-900',
    priceClass: 'text-slate-900',
    descClass: 'text-slate-500',
    checkColor: 'text-emerald-600',
    features: [
      'Unlimited message volume',
      'Direct carrier interconnects',
      'Custom SMPP connectivity',
      'Dedicated infrastructure',
      'SLA-backed NOC support',
      'On-premise deployment option',
      'Custom compliance & routing',
    ],
    cta: 'CONTACT SALES',
    ctaClass: 'border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white',
    link: '/contact',
  },
];

const faqs = [
  {
    q: 'Is there a free routing test available?',
    a: 'Yes. We provide a sandbox environment and test credits so you can validate delivery rates and latency before committing to a plan.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Yes. You can upgrade or downgrade at any time. Traffic volume adjustments take effect within one business day.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No hidden fees. The price shown covers message throughput at the stated volume. Volume discounts apply for high-traffic accounts.',
  },
  {
    q: 'What connectivity options are available?',
    a: 'We support SMPP v3.4 and REST API. SMPP credentials and sandbox access are provided on all paid plans.',
  },
  {
    q: 'What is the uptime SLA?',
    a: 'Starter plans carry a 99.9% uptime SLA. Growth and Enterprise plans carry 99.99%, backed by redundant carrier infrastructure.',
  },
  {
    q: 'Is regulatory compliance (like TRAI DLT or 10DLC) included?',
    a: 'Compliance assistance is included in all plans. Our compliance team handles TRAI DLT registration, 10DLC campaign setups, and other regional compliance requirements.',
  },
];

export default function Pricing() {
  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <SEOMeta
        title="Pricing | Bulk WhatsApp, SMS & Voice Plans"
        description="Transparent pricing for Bulk WhatsApp Marketing, SMS campaigns, Voice Call Automation, and WhatsApp API services globally. Plans from ₹999/month (~$12 USD). No lock-in contracts."
        path="/pricing"
        keywords="bulk WhatsApp pricing, bulk SMS pricing, voice call service pricing, WhatsApp API pricing, business communication plans"
      />
      <section className="relative pt-24 pb-16 sm:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="section-label mb-4"
            style={{ color: '#818cf8' }}
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Transparent, Volume-Based Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            No lock-in contracts. Scale message throughput as your traffic grows.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 items-start"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative overflow-hidden ${plan.cardClass} ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                <div className={`h-1 w-full ${plan.topBar}`} />
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-widest bg-indigo-600 text-white">{plan.badge}</span>
                  </div>
                )}
                <div className="p-8">
                  <p className={`text-xs font-semibold tracking-[0.18em] uppercase mb-4 ${plan.nameClass}`}
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-4xl font-extrabold tracking-tight ${plan.priceClass}`}
                      style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm mb-1 ${plan.descClass}`}>{plan.period}</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed mb-8 ${plan.descClass}`}
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.checkColor}`} />
                        <span className={plan.featured ? 'text-slate-300' : 'text-slate-600'}
                          style={{ fontFamily: 'var(--font-body)' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.link}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold tracking-wide transition-all duration-200 ${plan.ctaClass}`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {['No Setup Fees', 'Routing Test Available', '24/7 NOC Support', 'No Lock-in Contracts', 'DLT Compliance Included'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-white border border-slate-200 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />{b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-heading mb-2">Frequently Asked Questions</h2>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
            </div>
          </motion.div>
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-2 gap-5"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={fadeInUp}
                className="border border-slate-100 border-l-4 border-l-indigo-600 p-6 bg-white hover:shadow-sm transition-shadow duration-300"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-2 tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
