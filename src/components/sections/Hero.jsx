import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    bg: '/imgs/Header 01.png',
    tag: 'BULK WHATSAPP · SMS · VOICE · GLOBAL',
    title: 'The World\'s Most Powerful Communication & Marketing Platform',
    sub: 'Engage millions of customers globally with carrier-grade WhatsApp messaging, high-throughput SMS, and intelligent voice automation built for scale.',
    cta: { label: 'GET STARTED FREE', to: '/contact' },
    cta2: { label: 'VIEW ALL SERVICES', to: '/services' },
  },
  {
    bg: '/imgs/Header 02.png',
    tag: 'WHATSAPP API · BULK SMS · GLOBAL',
    title: 'Enterprise-Grade WhatsApp API & Global Messaging Infrastructure',
    sub: 'Unlock direct carrier connectivity, automated customer workflows, and deep integrations, trusted by industry leaders across the globe.',
    cta: { label: 'EXPLORE SERVICES', to: '/services' },
    cta2: { label: 'BOOK A FREE DEMO', to: '/contact' },
  },
  {
    bg: '/imgs/Header 03.png',
    tag: 'VOICE CALLS · OTP · AUTOMATION · GLOBAL',
    title: 'Intelligent Voice Automation & Ultra-Fast OTP Delivery Worldwide',
    sub: 'Deploy mission-critical OTPs with under 3-second delivery SLAs, and launch dynamic voice broadcasting campaigns with real-time tracking.',
    cta: { label: 'CONTACT SALES', to: '/contact' },
    cta2: { label: 'SEE PRICING', to: '/pricing' },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);
  const go = useCallback((i) => setCurrent(i), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      {/* ── Background photos with crossfade ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Photo */}
          <img
            src={slide.bg}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Deep enterprise overlay — gradient from bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/50 to-ink-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* ── Content — centered like Hygge ── */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl w-full"
          >
            {/* Tag */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.22em' }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[11px] font-semibold tracking-[0.18em] text-white/55 uppercase mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {slide.tag}
            </motion.p>

            {/* Heading — enterprise: extrabold, not all-caps, tight tracking */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white tracking-tightest leading-[1.04] mb-6"
              style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 32px rgba(0,0,0,0.45)' }}
            >
              {slide.title}
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={slide.cta.to}
                className="inline-flex items-center px-9 py-3.5 bg-indigo-600 text-white text-xs font-bold tracking-wide rounded-sm shadow-[0_0_24px_rgba(79,70,229,0.3)] hover:shadow-[0_0_36px_rgba(79,70,229,0.45)] hover:bg-indigo-500 hover:scale-[1.02] transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.cta.label}
              </Link>
              <Link
                to={slide.cta2.to}
                className="inline-flex items-center px-9 py-3.5 border border-white/40 text-white/90 text-xs font-bold tracking-wide rounded-sm hover:border-white hover:bg-white/10 hover:text-white hover:scale-[1.02] transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next arrows — Hygge style ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* ── Dot indicators — bottom center, Hygge style ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${i === current
                ? 'w-7 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/65'
              }`}
          />
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/g, '');
  const isDecimal = numericValue % 1 !== 0;

  useEffect(() => {
    if (isNaN(numericValue)) return;
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [numericValue]);

  const displayCount = isDecimal
    ? (count === numericValue ? count.toFixed(2) : count.toFixed(2))
    : Math.ceil(count);

  return (
    <span>
      {displayCount}
      {suffix}
    </span>
  );
}

export function HeroMetrics() {
  const metrics = [
    { value: '120M+', label: 'Messages Per Month' },
    { value: '190+', label: 'Countries Covered' },
    { value: '800+', label: 'Carrier Connections' },
    { value: '99.95%', label: 'Uptime SLA' },
  ];
  return (
    <div className="bg-[#080f1e] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
          {metrics.map((m) => (
            <div key={m.label} className="py-5 px-6 text-center">
              <div
                className="text-2xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <AnimatedNumber value={m.value} />
              </div>
              <div
                className="text-[0.65rem] font-medium text-slate-400 tracking-wider uppercase mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
