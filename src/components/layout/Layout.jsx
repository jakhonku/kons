import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Scroll reveal
  useScrollReveal();

  return (
    <>
      <Header />
      <div key={location.pathname} className="page-transition">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
