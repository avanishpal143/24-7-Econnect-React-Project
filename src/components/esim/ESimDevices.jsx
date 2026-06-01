import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Smartphone } from 'lucide-react';

const brands = [
  {
    name: 'Apple',
    icon: Smartphone,
    color: 'text-slate-900',
    border: 'border-slate-200',
    bg: 'bg-slate-100',
    activeBorder: 'border-slate-300',
    devices: [
      'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max',
      'iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max',
      'iPhone 13 / 13 Mini / 13 Pro / 13 Pro Max',
      'iPhone 12 / 12 Mini / 12 Pro / 12 Pro Max',
      'iPhone 11 / 11 Pro / 11 Pro Max',
      'iPhone XS / XS Max / XR',
      'iPad Pro (2018 and later)',
      'iPad Air (3rd gen and later)',
      'iPad Mini (5th gen and later)',
    ],
  },
  {
    name: 'Samsung',
    icon: Smartphone,
    color: 'text-blue-700',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    activeBorder: 'border-blue-300',
    devices: [
      'Galaxy S24 / S24+ / S24 Ultra',
      'Galaxy S23 / S23+ / S23 Ultra',
      'Galaxy S22 / S22+ / S22 Ultra',
      'Galaxy S21 / S21+ / S21 Ultra',
      'Galaxy Z Fold 5 / Fold 4 / Fold 3',
      'Galaxy Z Flip 5 / Flip 4 / Flip 3',
      'Galaxy Note 20 / Note 20 Ultra',
      'Galaxy A54 / A34 (select models)',
    ],
  },
  {
    name: 'Google Pixel',
    icon: Smartphone,
    color: 'text-emerald-700',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    activeBorder: 'border-emerald-300',
    devices: [
      'Pixel 8 / 8 Pro / 8a',
      'Pixel 7 / 7 Pro / 7a',
      'Pixel 6 / 6 Pro / 6a',
      'Pixel 5 / 5a',
      'Pixel 4 / 4 XL / 4a',
      'Pixel 3a / 3a XL',
    ],
  },
];

export default function ESimDevices() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="devices" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/60 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
            <span className="text-indigo-600 text-xs font-semibold tracking-[0.15em] uppercase">Device Compatibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Works with Your Device
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            EConnect eSIM is compatible with all major eSIM-enabled smartphones and tablets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Brand tabs */}
          <div className="space-y-3">
            {brands.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <motion.button
                  key={brand.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => { setActive(i); setExpanded(true); }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left relative overflow-hidden group ${
                    active === i
                      ? `${brand.activeBorder} ${brand.bg} shadow-sm`
                      : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white border ${brand.border} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${brand.color}`} />
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className={`font-bold text-sm ${active === i ? brand.color : 'text-slate-700 group-hover:text-indigo-900 transition-colors'}`}>
                      {brand.name}
                    </div>
                    <div className="text-slate-500 text-xs">{brand.devices.length} devices supported</div>
                  </div>
                  {active === i && (
                    <div className={`relative z-10 ml-auto w-2 h-2 rounded-full ${brand.color.replace('text-', 'bg-')}`} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Device list */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border ${brands[active].border} bg-white overflow-hidden shadow-sm`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="w-full flex items-center justify-between p-5 border-b border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${brands[active].bg}`}>
                      <Smartphone className={`w-5 h-5 ${brands[active].color}`} />
                    </div>
                    <div className="text-left">
                      <div className={`font-bold text-sm ${brands[active].color}`}>{brands[active].name}</div>
                      <div className="text-slate-500 text-xs">{brands[active].devices.length} compatible devices</div>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Device list */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 grid sm:grid-cols-2 gap-2">
                        {brands[active].devices.map((device, i) => (
                          <motion.div
                            key={device}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100"
                          >
                            <CheckCircle className={`w-3.5 h-3.5 ${brands[active].color} flex-shrink-0`} />
                            <span className="text-slate-700 text-xs font-medium">{device}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Note */}
            <p className="text-slate-500 text-xs mt-4 text-center">
              Device must be unlocked and eSIM-capable. Check your device settings to confirm eSIM support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
