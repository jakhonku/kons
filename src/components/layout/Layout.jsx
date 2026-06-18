import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Header from './Header';
import Footer from './Footer';
import ComingSoon from '../../pages/ComingSoon';
import QabulModal from './QabulModal';
import { isPathOpen } from '../../config/lockedPages';

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Scroll reveal
  useScrollReveal();

  // Vaqtinchalik qulf: ochiq boʻlmagan sahifalarda ComingSoon koʻrsatiladi
  const open = isPathOpen(location.pathname);

  return (
    <>
      <Header />
      <div key={location.pathname} className="page-transition">
        {open ? <Outlet /> : <ComingSoon />}
      </div>
      <Footer />
      <QabulModal />
    </>
  );
}
