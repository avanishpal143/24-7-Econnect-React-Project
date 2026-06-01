import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why eSIM', href: '#why-esim' },
  { label: 'Devices', href: '#devices' },
  { label: 'FAQ', href: '#faq' },
];

export default function ESimNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/esim" className="flex items-center gap-2.5 group">
            <img
              src="/logo-black.png"
              alt="EConnect"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col leading-none border-l border-slate-200 pl-2.5 ml-1">
              <span className="text-indigo-600 text-[10px] font-semibold tracking-[0.15em] uppercase mt-1">eSIM</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg text-slate-600 hover:text-slate-900 ${
                  scrolled ? 'hover:bg-slate-50' : 'hover:bg-slate-100/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Main Site
            </Link>
            <button
              onClick={() => scrollTo('#cta')}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider rounded-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-700 ${
                scrolled ? 'shadow-md' : 'shadow-lg hover:shadow-xl'
              }`}
            >
              GET eSIM
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 pb-1">
                <button
                  onClick={() => scrollTo('#cta')}
                  className="w-full py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg"
                >
                  GET eSIM NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
