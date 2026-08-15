import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Smartphone, Search } from 'lucide-react';

const brands = [
  {
    name: 'Apple',
    color: 'text-slate-800',
    border: 'border-slate-200',
    bg: 'bg-slate-100',
    activeBorder: 'border-slate-400',
    devices: [
      'iPhone XR', 'iPhone XS', 'iPhone XS Max',
      'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
      'iPhone SE 2 (2020)', 'iPhone SE 3 (2022)',
      'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
      'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
      'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
      'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max',
      'iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 16e',
      'iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone 17e',
      'iPhone Air',
    ],
  },
  {
    name: 'Samsung',
    color: 'text-blue-700',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    activeBorder: 'border-blue-400',
    devices: [
      // S Series
      'Galaxy S20', 'Galaxy S20+', 'Galaxy S20+ 5G', 'Galaxy S20 Ultra', 'Galaxy S20 Ultra 5G',
      'Galaxy S21', 'Galaxy S21+ 5G', 'Galaxy S21 Ultra 5G',
      'Galaxy S22', 'Galaxy S22+', 'Galaxy S22 Ultra',
      'Galaxy S23', 'Galaxy S23+', 'Galaxy S23 Ultra', 'Galaxy S23 FE',
      'Galaxy S24', 'Galaxy S24+', 'Galaxy S24 Ultra', 'Galaxy S24 FE',
      'Galaxy S25', 'Galaxy S25+', 'Galaxy S25 Ultra', 'Galaxy S25 Edge', 'Galaxy S25 FE',
      'Galaxy S26', 'Galaxy S26+', 'Galaxy S26 Ultra',
      // Note
      'Galaxy Note 20', 'Galaxy Note 20 Ultra 5G',
      // Fold / Flip
      'Galaxy Fold', 'Galaxy Z Fold2 5G', 'Galaxy Z Fold3 5G', 'Galaxy Z Fold4',
      'Galaxy Z Fold5 5G', 'Galaxy Z Fold6 5G', 'Galaxy Z Fold7', 'Galaxy Z TriFold',
      'Galaxy Z Flip', 'Galaxy Z Flip3 5G', 'Galaxy Z Flip4',
      'Galaxy Z Flip5 5G', 'Galaxy Z Flip6 5G', 'Galaxy Z Flip7', 'Galaxy Z Flip7 FE',
      // A Series
      'Galaxy A35', 'Galaxy A36', 'Galaxy A54', 'Galaxy A55 5G', 'Galaxy A56',
    ],
  },
  {
    name: 'Google Pixel',
    color: 'text-emerald-700',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    activeBorder: 'border-emerald-400',
    devices: [
      'Pixel 2', 'Pixel 2 XL',
      'Pixel 3', 'Pixel 3 XL', 'Pixel 3a', 'Pixel 3a XL',
      'Pixel 4', 'Pixel 4a', 'Pixel 4 XL',
      'Pixel 5', 'Pixel 5a',
      'Pixel 6', 'Pixel 6a', 'Pixel 6 Pro',
      'Pixel 7', 'Pixel 7a', 'Pixel 7 Pro',
      'Pixel 8', 'Pixel 8a', 'Pixel 8 Pro', 'Pixel Fold',
      'Pixel 9', 'Pixel 9 Pro', 'Pixel 9 Pro XL',
      'Pixel 10', 'Pixel 10 Pro', 'Pixel 10 Pro XL', 'Pixel 10a',
    ],
  },
  {
    name: 'Xiaomi',
    color: 'text-orange-600',
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    activeBorder: 'border-orange-400',
    devices: [
      'Xiaomi 12T Pro',
      'Xiaomi 13', 'Xiaomi 13 Lite', 'Xiaomi 13 Pro', 'Xiaomi 13T', 'Xiaomi 13T Pro',
      'Xiaomi 14', 'Xiaomi 14 Pro', 'Xiaomi 14T', 'Xiaomi 14T Pro',
      'Xiaomi 15', 'Xiaomi 15 Ultra', 'Xiaomi 15T', 'Xiaomi 15T Pro',
      'Xiaomi 17', 'Xiaomi 17 Ultra',
      'Redmi Note 13 Pro+', 'Redmi Note 14 Pro', 'Redmi Note 14 Pro+',
      'Redmi Note 15 Pro', 'Redmi Note 15 Pro+',
      'Poco X7', 'Poco X8 Pro Max',
    ],
  },
  {
    name: 'Oppo',
    color: 'text-green-700',
    border: 'border-green-200',
    bg: 'bg-green-50',
    activeBorder: 'border-green-400',
    devices: [
      'Find X3', 'Find X3 Pro', 'Find X5', 'Find X5 Pro',
      'Find X8', 'Find X8 Pro', 'Find X9', 'Find X9 Pro', 'Find X9 Ultra',
      'Find N2 Flip', 'Find N3', 'Find N3 Flip',
      'Reno 5A', 'Reno 6 Pro 5G', 'Reno 9A',
      'Reno 14', 'Reno 14 Pro', 'Reno 15', 'Reno 15 Pro',
      'Oppo A55s 5G',
    ],
  },
  {
    name: 'Motorola',
    color: 'text-red-700',
    border: 'border-red-200',
    bg: 'bg-red-50',
    activeBorder: 'border-red-400',
    devices: [
      'Razr 2019', 'Razr 2022', 'Razr 5G', 'Razr 40', 'Razr 40 Ultra',
      'Razr+', 'Razr+ 2024', 'Razr 2024', 'Razr 60', 'Razr 60 Ultra',
      'Edge 2022', 'Edge 2023', 'Edge+ (2023)',
      'Edge 40', 'Edge 40 Pro', 'Edge 40 Neo',
      'Edge 50 Pro', 'Edge 50 Ultra', 'Edge 50 Fusion',
      'Edge 60', 'Edge 60 Pro', 'Edge 60 Fusion', 'Edge 60 Stylus',
      'Edge 70', 'Edge 70 Ultra', 'Edge 70 Fusion', 'Edge 70 Fusion+', 'Edge 70 Pro',
      'Moto G Power 5G (2024)', 'G52J 5G', 'G52J 5G II', 'G53J 5G',
      'G54 5G', 'G84', 'G34', 'Moto G53', 'Moto G54',
      'Moto G Stylus 5G 2024', 'Moto G35',
    ],
  },
  {
    name: 'Vivo',
    color: 'text-violet-700',
    border: 'border-violet-200',
    bg: 'bg-violet-50',
    activeBorder: 'border-violet-400',
    devices: [
      'X80 Pro', 'X90 Pro', 'X100 Pro',
      'X200', 'X200s', 'X200 Pro', 'X200 FE',
      'X300', 'X300 Pro',
      'V29', 'V29 Lite', 'V29 Lite 5G',
      'V40', 'V40 Lite', 'V40 SE',
    ],
  },
  {
    name: 'OnePlus',
    color: 'text-rose-700',
    border: 'border-rose-200',
    bg: 'bg-rose-50',
    activeBorder: 'border-rose-400',
    devices: [
      'OnePlus Open',
      'OnePlus 11', 'OnePlus 12', 'OnePlus 13',
      'OnePlus 13R', 'OnePlus 13T', 'OnePlus 15',
    ],
  },
  {
    name: 'Honor',
    color: 'text-cyan-700',
    border: 'border-cyan-200',
    bg: 'bg-cyan-50',
    activeBorder: 'border-cyan-400',
    devices: [
      'Magic 4 Pro', 'Magic 5 Pro', 'Magic 6 Pro', 'Magic 7 Pro', 'Magic 8 Pro',
      'Magic V2', 'Magic V3', 'Magic V5', 'Magic V6',
      'Honor 90', 'Honor X8', 'Honor 200 Pro', 'Honor 400 Lite',
    ],
  },
  {
    name: 'Sony',
    color: 'text-indigo-700',
    border: 'border-indigo-200',
    bg: 'bg-indigo-50',
    activeBorder: 'border-indigo-400',
    devices: [
      'Xperia 10 III Lite', 'Xperia 10 IV', 'Xperia 10 V',
      'Xperia 1 IV', 'Xperia 1 V', 'Xperia 1 VI',
      'Xperia 5 IV', 'Xperia 5 V',
      'Xperia Ace III',
    ],
  },
  {
    name: 'Huawei',
    color: 'text-red-600',
    border: 'border-red-200',
    bg: 'bg-red-50',
    activeBorder: 'border-red-400',
    devices: [
      'Huawei P40', 'Huawei P40 Pro',
      'Huawei Mate 40 Pro',
      'Huawei Pura 70 Pro',
    ],
  },
  {
    name: 'Others',
    color: 'text-slate-700',
    border: 'border-slate-200',
    bg: 'bg-slate-50',
    activeBorder: 'border-slate-400',
    devices: [
      // Sharp
      'Sharp AQUOS sense4 lite', 'Sharp AQUOS sense6s', 'Sharp AQUOS sense7', 'Sharp AQUOS sense7plus',
      'Sharp AQUOS sense8', 'Sharp AQUOS Wish', 'Sharp AQUOS wish2 SHG08', 'Sharp AQUOS wish3',
      'Sharp AQUOS zero6', 'Sharp Simple Sumaho6', 'Sharp AQUOS R7', 'Sharp AQUOS R8', 'Sharp AQUOS R8 Pro',
      // Rakuten
      'Rakuten Mini', 'Rakuten Big-S', 'Rakuten Big', 'Rakuten Hand', 'Rakuten Hand 5G',
      // Realme
      'Realme 14 Pro+', 'Realme GT 7', 'Realme GT 8 Pro',
      // Nothing
      'Nothing Phone 3', 'Nothing Phone 3a Pro', 'Nothing Phone 4a Pro',
      // Infinix
      'Infinix Note 60 Pro', 'Infinix Note 60 Ultra',
      // TCL
      'TCL 50 5G', 'TCL 50 Pro NxtPaper', 'TCL 60 XE NxtPaper', 'TCL NxtPaper 60 Ultra', 'TCL NxtPaper 70 Pro',
      // Tecno
      'Tecno Camon 50 Ultra',
      // Nokia
      'Nokia XR21', 'Nokia X30', 'Nokia G60 5G',
      // Hammer
      'Hammer Blade 3', 'Hammer Explorer PRO', 'Hammer Blade 5G',
      // Oukitel
      'Oukitel WP30 Pro', 'Oukitel WP33 Pro',
      // Various
      'Gemini PDA', 'Fairphone 4', 'Fairphone 5', 'DOOGEE V30',
      'myPhone NOW eSIM', 'Nuu X5', 'ZTE Nubia Flip',
      'Asus ROG Phone 9', 'Asus ROG Phone 9 Pro', 'Asus Zenfone 12 Ultra',
    ],
  },
];

export default function ESimDevices() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState('');

  const filtered = brands[active].devices.filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="devices" className="scroll-mt-20 py-24 relative overflow-hidden">
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

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Brand sidebar */}
          <div className="lg:w-56 xl:w-64 flex-shrink-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              {brands.map((brand, i) => (
                <motion.button
                  key={brand.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  onClick={() => { setActive(i); setSearch(''); }}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 text-left ${
                    active === i
                      ? `${brand.activeBorder} ${brand.bg} shadow-sm`
                      : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border ${brand.border} shadow-sm flex-shrink-0`}>
                    <Smartphone className={`w-4 h-4 ${brand.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className={`font-bold text-xs truncate ${active === i ? brand.color : 'text-slate-700'}`}>
                      {brand.name}
                    </div>
                    <div className="text-slate-400 text-[10px]">{brand.devices.length} devices</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Device list panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl border ${brands[active].border} bg-white shadow-sm overflow-hidden`}
              >
                {/* Panel header + search */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${brands[active].bg}`}>
                      <Smartphone className={`w-4 h-4 ${brands[active].color}`} />
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${brands[active].color}`}>{brands[active].name}</div>
                      <div className="text-slate-400 text-xs">{filtered.length} of {brands[active].devices.length} devices</div>
                    </div>
                  </div>
                  {/* Search */}
                  <div className="relative sm:w-56">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search model…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 transition-all"
                    />
                  </div>
                </div>

                {/* Devices grid */}
                <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[480px] overflow-y-auto">
                  {filtered.length > 0 ? filtered.map((device, i) => (
                    <motion.div
                      key={device}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors"
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${brands[active].color} flex-shrink-0`} />
                      <span className="text-slate-700 text-xs font-medium leading-tight">{device}</span>
                    </motion.div>
                  )) : (
                    <div className="col-span-3 py-10 text-center text-slate-400 text-sm">
                      No devices found for "{search}"
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Note */}
            <p className="text-slate-500 text-xs mt-4 text-center leading-relaxed">
              ⚠️ Device must be unlocked and eSIM-capable. Regional restrictions apply — iPhones & Samsung devices purchased in mainland China or Hong Kong may not support eSIM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
