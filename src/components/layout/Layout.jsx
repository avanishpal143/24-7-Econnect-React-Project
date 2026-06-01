import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloating from '../shared/WhatsAppFloating';
import GoToTop from '../shared/GoToTop';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/*
        Home page: no top padding — hero is full-bleed and sits behind the
        transparent navbar. The hero itself handles its own top spacing.

        All other pages: pt-[60px] pushes content below the fixed navbar.
      */}
      <main className={`flex-1 ${isHome ? '' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppFloating />
      <GoToTop />
    </div>
  );
}
