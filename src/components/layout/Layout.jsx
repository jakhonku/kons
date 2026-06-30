import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Header from './Header';
import Footer from './Footer';
import ComingSoon from '../../pages/ComingSoon';
import QabulModal from './QabulModal';
import Seo from '../Seo';
import { isPathOpen } from '../../config/lockedPages';
import { getSeoForPath } from '../../config/seoMeta';

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

  // Markazlashtirilgan SEO meta (faqat xaritada bor sahifalar uchun;
  // oʻz <Seo /> siga ega sahifalar xaritada yoʻq, shu sababli tegilmaydi)
  const seo = open ? getSeoForPath(location.pathname) : null;

  return (
    <>
      {seo && <Seo title={seo.title} description={seo.description} />}
      <Header />
      <div key={location.pathname} className="page-transition">
        {open ? <Outlet /> : <ComingSoon />}
      </div>
      <Footer />
      <QabulModal />
    </>
  );
}
