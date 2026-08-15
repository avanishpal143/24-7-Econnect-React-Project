import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Wifi } from 'lucide-react';

export default function ESimFooter() {
  return (
    <footer className="bg-[#040d1a] border-t border-white/10 text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/esim" className="inline-flex items-center gap-2.5">
            <img
              src="/imgs/logo-white.png"
              alt="EConnect"
              className="h-8 w-auto object-contain hover:scale-105 transition-all duration-300"
              onError={(e) => { e.target.src = '/imgs/Screenshot_2026-06-04_at_1.49.15_PM-removebg-preview.png'; }}
            />
            <span className="w-px h-7 bg-white/30 mx-1" />
            <span className="text-sm font-extrabold tracking-[0.22em] uppercase text-indigo-400">
              ESIM
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed">
            Stay connected globally with instant eSIM activation for 190+ countries. No physical SIM required.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Destinations', href: '#destinations' },
              { label: 'Compatible Devices', href: '#devices' },
              { label: 'FAQ', href: '#faq' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-cyan-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Solutions', to: '/solutions' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-cyan-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
              <a href="mailto:sales@24x7econnect.com" className="hover:text-cyan-400 transition-colors">
                sales@24x7econnect.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
              <a href="tel:+918287936724" className="hover:text-cyan-400 transition-colors">
                +91 82879 36724
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
              <span className="text-white/70">
                1007, Aggarwal Millenium Tower 1,
                <br />
                Netaji Subhash Place, Delhi 110034
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
              <span>180+ Countries Covered</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
        <span>&copy; {new Date().getFullYear()} EConnect. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
