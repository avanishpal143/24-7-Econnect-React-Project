import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// Social icons as inline SVGs (brand icons not in this lucide-react version)
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const footerLinks = {
  Services: [
    { name: 'Bulk SMS', href: '/services/bulk-sms' },
    { name: 'Voice Call', href: '/services/voice-call' },
    { name: 'WhatsApp API', href: '/services/whatsapp-api' },
    { name: 'WhatsApp Marketing', href: '/services/whatsapp-marketing' },
  ],
  Solutions: [
    { name: 'SMS Termination', href: '/solutions/sms-termination' },
    { name: 'OTP Messaging', href: '/solutions/otp-messaging' },
    { name: 'Voice Services', href: '/solutions/voice-services' },
    { name: 'Bulk Messaging', href: '/solutions/bulk-messaging' },
    { name: 'SMPP/API Integration', href: '/solutions/smpp-api' },
    { name: 'India DLT Compliance', href: '/solutions/dlt-compliance' },
  ],
  Company: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'What is A2P SMS?', href: '/blog/what-is-a2p-sms' },
    { name: 'How OTP Delivery Works', href: '/blog/how-otp-delivery-works' },
    { name: 'DLT Regulations India', href: '/blog/dlt-regulations-india' },
    { name: 'SMS Routing Explained', href: '/blog/sms-routing-explained' },
    { name: 'CMS Admin Portal', href: '/admin' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/24x7econnect/', label: 'LinkedIn' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61590427572946', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/24x7econnect/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/imgs/Screenshot_2026-06-04_at_1.49.15_PM-removebg-preview.png"
                alt="EConnect"
                className="h-8 w-auto object-contain drop-shadow-[0_2px_12px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'var(--font-body)' }}>
              Carrier-grade SMS and voice infrastructure for enterprises, aggregators, and telecom operators across 190+ countries.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href="tel:+918287936724" className="flex items-center gap-3 text-sm text-slate-200 hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-indigo-400" />
                +91 82879 36724
              </a>
              <a href="mailto:sales@24x7econnect.com" className="flex items-center gap-3 text-sm text-slate-200 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-indigo-400" />
                sales@24x7econnect.com
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <MapPin className="w-4 h-4 flex-shrink-0 text-indigo-400 mt-0.5" />
                <span>
                  1007, Aggarwal Millenium Tower 1,
                  <br />
                  Netaji Subhash Place, Delhi 110034
                </span>
              </div>
            </div>
            {/* Company registration */}
            <div className="text-xs text-slate-400 leading-relaxed">
              <p>24x7 EConnect Pvt. Ltd.</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-sm text-slate-300 hover:text-indigo-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-slate-300 hover:text-indigo-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} 24x7 EConnect Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-white/15">|</span>
            <Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center border border-white/15 text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all rounded-lg"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
