import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import WhatsAppMarketing from './pages/services/WhatsAppMarketing';
import BulkSMS from './pages/services/BulkSMS';
import VoiceCall from './pages/services/VoiceCall';
import WhatsAppAPI from './pages/services/WhatsAppAPI';
import ESim from './pages/esim/ESim';
import AdminRedirect from './pages/AdminRedirect';
import ScrollToTop from './components/shared/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                              element={<Layout><Home /></Layout>} />
        <Route path="/services"                      element={<Layout><Services /></Layout>} />
        <Route path="/services/whatsapp-marketing"   element={<Layout><WhatsAppMarketing /></Layout>} />
        <Route path="/services/bulk-sms"             element={<Layout><BulkSMS /></Layout>} />
        <Route path="/services/voice-call"           element={<Layout><VoiceCall /></Layout>} />
        <Route path="/services/whatsapp-api"         element={<Layout><WhatsAppAPI /></Layout>} />
        <Route path="/about"                         element={<Layout><About /></Layout>} />
        <Route path="/contact"                       element={<Layout><Contact /></Layout>} />
        <Route path="/solutions"                     element={<Layout><Solutions /></Layout>} />
        <Route path="/solutions/:slug"               element={<Layout><SolutionDetail /></Layout>} />
        <Route path="/pricing"                       element={<Layout><Pricing /></Layout>} />
        <Route path="/blog"                          element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug"                    element={<Layout><BlogDetail /></Layout>} />
        <Route path="/admin"                         element={<AdminRedirect />} />
        <Route path="/privacy-policy"                element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms"                         element={<Layout><Terms /></Layout>} />
        <Route path="/esim"                          element={<ESim />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
