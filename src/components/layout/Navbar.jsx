import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MessageSquare, Smartphone, PhoneCall, Plug, RadioTower, Lock, Mail, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { label: 'WhatsApp Marketing', path: '/services/whatsapp-marketing', icon: MessageSquare },
      { label: 'Bulk SMS Service', path: '/services/bulk-sms', icon: Smartphone },
      { label: 'Voice Call Service', path: '/services/voice-call', icon: PhoneCall },
      { label: 'WhatsApp API', path: '/services/whatsapp-api', icon: Plug },
    ],
  },
  {
    name: 'Solutions',
    path: '/solutions',
    dropdown: [
      { label: 'SMS Termination', path: '/solutions/sms-termination', icon: RadioTower },
      { label: 'OTP Messaging', path: '/solutions/otp-messaging', icon: Lock },
      { label: 'Voice Services', path: '/solutions/voice-services', icon: PhoneCall },
      { label: 'Bulk Messaging', path: '/solutions/bulk-messaging', icon: Mail },
      { label: 'SMPP/API Integration', path: '/solutions/smpp-api', icon: Plug },
      { label: 'India DLT Compliance', path: '/solutions/dlt-compliance', icon: ShieldCheck },
    ],
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'eSIM', path: '/esim', highlight: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // Set initial state
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Transparent only on homepage when not scrolled
  const transparent = isHome && !scrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent shadow-none'
          : 'bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)] border-b border-slate-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={transparent ? "/imgs/logo-white.png" : "/imgs/logo-black.png"}
              alt="E-Connect"
              className="h-8 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                    link.highlight
                      ? 'text-cyan-400 hover:text-cyan-300 font-semibold'
                      : transparent
                        ? location.pathname === link.path
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                        : location.pathname === link.path
                          ? 'text-slate-900'
                          : 'text-slate-500 hover:text-slate-900'
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={cn(
                        'w-3 h-3 opacity-60 transition-transform duration-200',
                        activeDropdown === link.name ? 'rotate-180' : ''
                      )}
                    />
                  )}
                </Link>

                {/* Active underline */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className={cn(
                      'absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full',
                      transparent ? 'bg-white' : 'bg-indigo-600'
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Dropdown panel */}
                <AnimatePresence>
                  {activeDropdown === link.name && link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1.5 w-64 bg-white border border-slate-200 shadow-xl rounded-lg py-2 z-50"
                    >
                      <div className="px-4 pb-2 mb-1 border-b border-slate-100">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                          {link.name}
                        </span>
                      </div>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                        >
                          <span className="text-base leading-none w-5 h-5 flex items-center justify-center flex-shrink-0 text-indigo-500">
                            <item.icon className="w-4 h-4" />
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── CTA button ── */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={cn(
                'ml-2 px-5 py-2 text-sm font-semibold border transition-all duration-200 rounded-lg',
                transparent
                  ? 'border-white/60 text-white hover:bg-white hover:text-slate-900'
                  : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700'
              )}
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === link.name ? null : link.name)}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                        mobileActiveDropdown === link.name
                          ? 'text-indigo-700 bg-indigo-50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          mobileActiveDropdown === link.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                        location.pathname === link.path
                          ? 'text-indigo-700 bg-indigo-50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                  <AnimatePresence>
                    {link.dropdown && mobileActiveDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 border-l-2 border-slate-100 pl-3 mt-1 mb-1.5 space-y-0.5 py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileActiveDropdown(null);
                              }}
                              className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                            >
                              <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-slate-400">
                                <item.icon className="w-full h-full" />
                              </span>
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}