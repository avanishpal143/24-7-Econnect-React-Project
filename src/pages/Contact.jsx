import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, MessageCircle,
  CheckCircle, Clock, AlertTriangle,
  ArrowRight, Headphones, ShieldCheck, Zap
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const dedicatedContacts = [
  {
    type: 'Sales',
    icon: Phone,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    borderColor: 'border-t-indigo-500',
    badge: 'SALES',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    value: '+91 82879 36724',
    href: 'tel:+918287936724',
    sub: 'Business inquiries, routing tests & custom quotes',
    response: 'Within 2 business hours',
    external: false,
  },
  {
    type: 'Technical Support',
    icon: Headphones,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-t-emerald-500',
    badge: 'SUPPORT',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    value: 'sales@24x7econnect.com',
    href: 'mailto:sales@24x7econnect.com',
    sub: 'Technical issues, API integration & NOC escalations',
    response: 'Within 4 hours (24/7)',
    external: false,
  },
  {
    type: 'Dispute Reporting',
    icon: AlertTriangle,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-t-amber-500',
    badge: 'DISPUTE',
    badgeColor: 'bg-amber-100 text-amber-700',
    value: 'dispute@24x7econnect.com',
    href: 'mailto:dispute@24x7econnect.com',
    sub: 'Disputes, transaction claims & route discrepancies',
    response: 'Within 1 business day',
    external: false,
  },
  {
    type: 'WhatsApp',
    icon: MessageCircle,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-t-teal-500',
    badge: 'WHATSAPP',
    badgeColor: 'bg-teal-100 text-teal-700',
    value: 'Chat with us now',
    href: 'https://wa.me/918287936724',
    sub: 'Fastest response channel for quick queries',
    response: 'Usually within minutes',
    external: true,
  },
];

const responseTimes = [
  { type: 'Sales Inquiries',    time: 'Within 2 business hours', icon: Zap,          color: 'text-indigo-500',  dot: 'bg-indigo-500' },
  { type: 'Technical Support',  time: 'Within 4 hours (24/7)',   icon: Headphones,   color: 'text-emerald-500', dot: 'bg-emerald-500' },
  { type: 'Dispute Reports',    time: 'Within 1 business day',   icon: ShieldCheck,  color: 'text-amber-500',   dot: 'bg-amber-500' },
  { type: 'General Inquiries',  time: 'Within 1 business day',   icon: Mail,         color: 'text-gray-400',    dot: 'bg-gray-400' },
];

const services = [
  'SMS Termination',
  'OTP Messaging',
  'Voice Services',
  'Bulk Messaging',
  'SMPP/API Integration',
  'TRAI DLT Compliance (India)',
  'Other / General Inquiry',
];

const trafficRanges = [
  'Under 1M messages/month',
  '1M to 10M messages/month',
  '10M to 50M messages/month',
  '50M to 100M messages/month',
  '100M+ messages/month',
];

const contactMethods = [
  { value: 'Email',    label: 'Email' },
  { value: 'Phone',    label: 'Phone' },
  { value: 'WhatsApp', label: 'WhatsApp' },
];

const inputClass =
  'w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200';

const labelClass = 'block text-[11px] font-bold text-gray-600 tracking-[0.12em] uppercase mb-1.5';

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function Contact() {
  const [form, setForm] = useState({
    company: '', name: '', country: '', phone: '',
    email: '', traffic: '', service: '', contactMethod: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [errors, setErrors]       = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.company.trim())  e.company = 'Company name is required';
    if (!form.name.trim())     e.name    = 'Your name is required';
    if (!form.country.trim())  e.country = 'Country is required';
    if (!form.phone.trim())    e.phone   = 'Phone number is required';
    if (!form.email.trim())    e.email   = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Contact Us | Global Bulk WhatsApp, SMS & Voice Services"
        description="Contact EConnect for Bulk WhatsApp Marketing, SMS campaigns, Voice Call Automation, and WhatsApp API services globally. Head office in New Delhi. Sales: +91 82879 36724. Serving businesses worldwide."
        path="/contact"
        keywords="contact EConnect, global WhatsApp marketing, bulk SMS provider, voice call service, international communications"
      />

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-20 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.05]"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Speak with our team about SMS termination, voice routing, SMPP connectivity, or request a routing test.
          </motion.p>
        </div>
      </section>

      {/* ── Dedicated Contacts ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
            className="mb-10"
          >
            <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-2">Dedicated Contacts</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">REACH THE RIGHT TEAM</h2>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </motion.div>

          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {dedicatedContacts.map((c) => (
              <motion.div key={c.type} variants={fadeInUp}>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className={`group flex flex-col h-full bg-white border border-gray-100 border-t-4 ${c.borderColor} p-6 hover:shadow-md transition-all duration-300`}
                >
                  {/* Badge + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-black tracking-[0.15em] px-2.5 py-1 ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                    <div className={`w-10 h-10 ${c.iconBg} flex items-center justify-center`}>
                      <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                    </div>
                  </div>

                  {/* Contact type */}
                  <p className="text-xs text-gray-400 font-medium mb-1">{c.type}</p>

                  {/* Value */}
                  <p className="text-sm font-black text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug break-all">
                    {c.value}
                  </p>

                  {/* Sub description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{c.sub}</p>

                  {/* Response time */}
                  <div className="flex items-center gap-1.5 pt-4 border-t border-gray-100">
                    <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-[11px] text-gray-400">{c.response}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Left sidebar: Response times + Address ── */}
            <motion.div
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-2 space-y-6"
            >
              {/* Response Times */}
              <motion.div variants={fadeInUp} className="bg-white border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <h3 className="text-xs font-black tracking-[0.2em] text-gray-900 uppercase">Expected Response Times</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {responseTimes.map((row) => (
                    <div key={row.type} className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${row.dot} flex-shrink-0`} />
                        <span className="text-sm font-medium text-gray-700">{row.type}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium text-right ml-4">{row.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Office Address */}
              <motion.div variants={fadeInUp} className="bg-white border border-gray-100 p-6">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.15em] text-gray-900 uppercase mb-1">Office Address</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      1007, Aggarwal millenium tower 1,<br />Netaji Subhash Place, Delhi 110034
                    </p>
                  </div>
                </div>
                {/* Stylised map placeholder */}
                <div className="w-full h-36 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                  />
                  <MapPin className="w-6 h-6 text-indigo-500 relative z-10" />
                  <span className="text-xs font-semibold text-gray-500 relative z-10">New Delhi, India</span>
                  <a
                    href="https://maps.google.com/?q=Majlis+Park+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-500 hover:underline relative z-10"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </motion.div>

              {/* Quick links */}
              <motion.div variants={fadeInUp} className="bg-gray-900 p-6">
                <p className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-4">Quick Actions</p>
                <div className="space-y-2.5">
                  <a
                    href="tel:+918287936724"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-indigo-400" /> Call Sales
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/918287936724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Chat
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="mailto:sales@24x7econnect.com"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-sky-400" /> Email Support
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="mailto:dispute@24x7econnect.com"
                    className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Dispute Report
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right: Business Inquiry Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-200">
                {/* Form header */}
                <div className="px-8 py-6 border-b border-gray-100">
                  <p className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-1">Business Inquiry</p>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">SEND US A MESSAGE</h3>
                  <p className="text-sm text-gray-500 mt-1.5">
                    Fill in the details below and our team will get back to you within the expected timeframe.
                  </p>
                </div>

                <div className="px-8 py-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-50 flex items-center justify-center mb-5">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h4 className="text-lg font-black text-gray-900 mb-2 tracking-tight">MESSAGE SENT</h4>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
                        Our team will review your inquiry and respond within the expected timeframe.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ company: '', name: '', country: '', phone: '', email: '', traffic: '', service: '', contactMethod: '', message: '' }); }}
                        className="text-xs font-black tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">

                      {/* Row 1: Company + Name */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>
                            Company Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text" name="company" value={form.company}
                            onChange={handleChange} placeholder="Acme Corp"
                            className={`${inputClass} ${errors.company ? 'border-rose-400' : ''}`}
                          />
                          {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>
                            Your Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text" name="name" value={form.name}
                            onChange={handleChange} placeholder="Rahul Sharma"
                            className={`${inputClass} ${errors.name ? 'border-rose-400' : ''}`}
                          />
                          {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                        </div>
                      </div>

                      {/* Row 2: Country + Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>
                            Country <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text" name="country" value={form.country}
                            onChange={handleChange} placeholder="India"
                            className={`${inputClass} ${errors.country ? 'border-rose-400' : ''}`}
                          />
                          {errors.country && <p className="text-xs text-rose-500 mt-1">{errors.country}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel" name="phone" value={form.phone}
                            onChange={handleChange} placeholder="+91 98765 43210"
                            className={`${inputClass} ${errors.phone ? 'border-rose-400' : ''}`}
                          />
                          {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Row 3: Email */}
                      <div>
                        <label className={labelClass}>
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange} placeholder="rahul@company.com"
                          className={`${inputClass} ${errors.email ? 'border-rose-400' : ''}`}
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      {/* Row 4: Traffic + Service */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Estimated Monthly Traffic</label>
                          <div className="relative">
                            <select
                              name="traffic" value={form.traffic} onChange={handleChange}
                              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                            >
                              <option value="">Select volume…</option>
                              {trafficRanges.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Required Services</label>
                          <div className="relative">
                            <select
                              name="service" value={form.service} onChange={handleChange}
                              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                            >
                              <option value="">Select service…</option>
                              {services.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                          </div>
                        </div>
                      </div>

                      {/* Row 5: Preferred Contact Method */}
                      <div>
                        <label className={labelClass}>Preferred Contact Method</label>
                        <div className="flex gap-3 flex-wrap">
                          {contactMethods.map((m) => (
                            <label
                              key={m.value}
                              className={`flex items-center gap-2 px-4 py-2.5 border cursor-pointer transition-all duration-200 text-sm font-medium select-none ${
                                form.contactMethod === m.value
                                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                  : 'border-gray-200 text-gray-600 hover:border-gray-400'
                              }`}
                            >
                              <input
                                type="radio" name="contactMethod" value={m.value}
                                checked={form.contactMethod === m.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                form.contactMethod === m.value ? 'border-indigo-500' : 'border-gray-300'
                              }`}>
                                {form.contactMethod === m.value && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                )}
                              </span>
                              {m.label}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Row 6: Message */}
                      <div>
                        <label className={labelClass}>Message</label>
                        <textarea
                          name="message" value={form.message} onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your requirements, such as traffic volumes, destinations, current provider, or any specific routing needs…"
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-gray-900 text-white text-xs font-black tracking-[0.2em] hover:bg-gray-800 active:bg-black transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            SENDING…
                          </>
                        ) : (
                          <>SEND MESSAGE <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>

                      {/* Trust line */}
                      <p className="text-xs text-gray-400 text-center leading-relaxed">
                        By submitting, you agree to our{' '}
                        <a href="/privacy-policy" className="text-indigo-500 hover:underline">Privacy Policy</a>.
                        {' '}We will never share your data with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
