import { useEffect } from 'react';
import { ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

const CMS_DASHBOARD_URL = import.meta.env.VITE_CMS_DASHBOARD_URL || '/admin/';

export default function AdminRedirect() {
  useEffect(() => {
    // Navigate directly to the /admin/ dashboard
    window.location.href = CMS_DASHBOARD_URL;
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-900 px-4 py-20 text-white">
      <div className="max-w-md w-full text-center bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          CMS Admin Portal
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Redirecting you to the 24*7 EConnect Blog & Content Management Dashboard...
        </p>

        <a
          href={CMS_DASHBOARD_URL}
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/25"
        >
          Open Admin Dashboard <ExternalLink className="w-4 h-4" />
        </a>

        <div className="mt-6 pt-6 border-t border-slate-700/60 text-xs text-slate-400 space-y-1 text-left bg-slate-900/50 p-4 rounded-xl">
          <p className="font-semibold text-slate-300">Default Admin Credentials:</p>
          <p>• <span className="text-indigo-300">Email:</span> super@cms.com</p>
          <p>• <span className="text-indigo-300">Password:</span> super123</p>
        </div>
      </div>
    </div>
  );
}
