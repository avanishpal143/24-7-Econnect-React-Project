/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /* Safelist — classes used inside cn() conditionals that Tailwind can't statically detect */
  safelist: [
    /* Navbar transparent state */
    'border-white/50', 'text-white', 'hover:bg-white', 'hover:text-gray-900',
    'bg-white', 'text-white/65', 'hover:text-white',
    /* Navbar solid state */
    'border-[#4f46e5]', 'text-[#4f46e5]', 'hover:bg-[#4f46e5]',
    /* Brand colors used in cn() */
    'bg-brand-600', 'hover:bg-brand-700', 'text-brand-600',
    'border-brand-600', 'hover:bg-brand-600', 'hover:text-white',
    /* Ink colors */
    'text-ink-900', 'text-ink-500', 'hover:text-ink-900',
    'bg-ink-50', 'hover:bg-ink-50',
    'text-ink-400', 'hover:text-brand-700',
    /* Active indicator */
    'bg-white', 'bg-brand-600',
    /* Button variants */
    'border-white/60', 'bg-white/10',
    /* Pricing plan classes */
    'bg-ink-900', 'border-ink-700', 'text-ink-300', 'text-ink-400',
    'text-brand-400', 'bg-brand-600', 'hover:bg-brand-700',
    'border-emerald-600', 'text-emerald-700', 'hover:bg-emerald-600',
    'border-ink-800', 'text-ink-800', 'hover:bg-ink-900',
  ],
  theme: {
    extend: {
      /* ── Enterprise Color Palette ─────────────────────────────────────────── */
      colors: {
        /* Brand primaries */
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',   // primary CTA
          700: '#4338ca',   // hover state
          800: '#3730a3',   // dark accent
          900: '#312e81',   // deepest
        },
        /* Enterprise dark backgrounds */
        ink: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',   // primary dark bg
          950: '#080f1e',   // deepest dark
        },
        /* Success / active */
        signal: {
          green:  '#059669',  // emerald-600 — more muted than 500
          amber:  '#d97706',  // amber-600
          red:    '#dc2626',  // red-600
          blue:   '#0284c7',  // sky-600
        },
      },

      /* ── Typography ───────────────────────────────────────────────────────── */
      fontFamily: {
        sans:    ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter',         'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        /* Tighter enterprise scale */
        '2xs': ['0.65rem',  { lineHeight: '1rem' }],
        'xs':  ['0.75rem',  { lineHeight: '1.125rem' }],
        'sm':  ['0.875rem', { lineHeight: '1.375rem' }],
        'base':['1rem',     { lineHeight: '1.625rem' }],
        'lg':  ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':  ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.625rem' }],
        '5xl': ['3rem',     { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem',  { lineHeight: '4rem' }],
        '7xl': ['4.5rem',   { lineHeight: '4.75rem' }],
      },
      fontWeight: {
        thin:       '100',
        light:      '300',
        normal:     '400',
        medium:     '500',
        semibold:   '600',
        bold:       '700',
        extrabold:  '800',
        black:      '900',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
        tight:    '-0.01em',
        normal:   '0em',
        wide:     '0.025em',
        wider:    '0.05em',
        widest:   '0.1em',
        'label':  '0.12em',
        'caps':   '0.18em',
        'badge':  '0.22em',
      },

      /* ── Spacing & Layout ─────────────────────────────────────────────────── */
      maxWidth: {
        'prose-sm': '55ch',
        'prose':    '68ch',
        'prose-lg': '80ch',
      },

      /* ── Shadows ──────────────────────────────────────────────────────────── */
      boxShadow: {
        'xs':         '0 1px 2px 0 rgba(0,0,0,0.05)',
        'sm':         '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'DEFAULT':    '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06)',
        'md':         '0 6px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -2px rgba(0,0,0,0.06)',
        'lg':         '0 10px 24px -4px rgba(0,0,0,0.12), 0 4px 8px -4px rgba(0,0,0,0.06)',
        'xl':         '0 20px 40px -8px rgba(0,0,0,0.14), 0 8px 16px -8px rgba(0,0,0,0.06)',
        'card':       '0 2px 8px 0 rgba(15,23,42,0.06)',
        'card-hover': '0 8px 24px 0 rgba(15,23,42,0.10)',
        'enterprise': '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
        'brand':      '0 4px 20px -4px rgba(79,70,229,0.30)',
        'none':       'none',
      },

      /* ── Border Radius ────────────────────────────────────────────────────── */
      borderRadius: {
        'none': '0',
        'sm':   '2px',
        'DEFAULT': '3px',
        'md':   '4px',
        'lg':   '6px',
        'xl':   '8px',
        '2xl':  '12px',
        '3xl':  '16px',
        'full': '9999px',
      },

      /* ── Animations ───────────────────────────────────────────────────────── */
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.4s ease-out',
        'slide-up':   'slideUp 0.5s cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
