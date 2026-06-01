import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { fadeInUp } from '../../lib/utils';

const trustBadges = [
  'Direct Carrier Routes',
  'No Grey Routes',
  '24/7 NOC Support',
  'Redundant Infrastructure',
];

const ctaStats = [
  { v: '120M+',  l: 'Messages/Month' },
  { v: '99.95%', l: 'Uptime SLA' },
  { v: '800+',   l: 'Carriers' },
];

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="section-label mb-3">Get in Touch</p>
            <h2 className="section-heading mb-5">
              Talk to Our Team
            </h2>
            <div className="flex gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
            <p className="section-sub mb-8">
              Ready to optimize your messaging infrastructure? Speak with our team about SMS termination,
              OTP delivery, voice routing, and SMPP connectivity.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: Phone,         href: 'tel:+918287936724',                label: 'Sales',    value: '+91 82879 36724',          bg: 'bg-indigo-50',   ic: 'text-indigo-700',   hover: 'group-hover:text-indigo-700' },
                { icon: Mail,          href: 'mailto:sales@24x7econnect.com',  label: 'Support',  value: 'sales@24x7econnect.com', bg: 'bg-indigo-50',   ic: 'text-indigo-700',   hover: 'group-hover:text-indigo-700' },
                { icon: MapPin,        href: null,                               label: 'Address',  value: '1007, Aggarwal millenium tower 1, Netaji Subhash Place, Delhi 110034', bg: 'bg-slate-100', ic: 'text-slate-500', hover: '' },
                { icon: MessageCircle, href: 'https://wa.me/918287936724',       label: 'WhatsApp', value: 'Chat with us now',         bg: 'bg-emerald-50', ic: 'text-emerald-700', hover: 'group-hover:text-emerald-700', external: true },
              ].map((c) => {
                const inner = (
                  <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group">
                    <div className={`w-10 h-10 ${c.bg} flex items-center justify-center flex-shrink-0`}>
                      <c.icon className={`w-4.5 h-4.5 ${c.ic}`} />
                    </div>
                    <div>
                      <div className="text-[0.65rem] text-slate-400 font-medium tracking-wide uppercase">{c.label}</div>
                      <div className={`text-sm font-semibold text-slate-800 transition-colors ${c.hover}`}>{c.value}</div>
                    </div>
                  </div>
                );
                return (
                  <div key={c.label}>
                    {c.href ? (
                      <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}>
                        {inner}
                      </a>
                    ) : inner}
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-white border border-slate-200 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: CTA card ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-slate-900 p-10"
          >
            {/* Subtle gradient accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-indigo-400 uppercase mb-4">
                Request a Test
              </p>
              <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}>
                Request a Routing Test
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}>
                Test our carrier routes before committing. Get sandbox access, delivery reports, and a dedicated account manager.
              </p>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 text-white text-xs font-bold tracking-wide shadow-[0_0_24px_rgba(79,70,229,0.3)] hover:shadow-lg hover:bg-indigo-500 hover:scale-[1.02] transition-all duration-300 mb-3 rounded-sm"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                REQUEST ROUTING TEST <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 text-white text-xs font-bold tracking-wide hover:bg-white/10 hover:border-white/50 hover:scale-[1.02] transition-all duration-300 rounded-sm"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                CONTACT SALES
              </Link>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {ctaStats.map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-extrabold text-white tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}>
                      {s.v}
                    </div>
                    <div className="text-[0.65rem] text-slate-500 tracking-wider uppercase mt-0.5"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
