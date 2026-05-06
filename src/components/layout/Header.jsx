import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import UtilityBar from './UtilityBar';
import DesktopNav from './DesktopNav';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';
import SearchPanel from './SearchPanel';

const MONTHS_SHORT = ['YAN','FEV','MAR','APR','MAY','IYN','IYL','AVG','SEN','OKT','NOY','DEK'];



export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const location  = useLocation();
  const isHome    = location.pathname === '/';


  // Scroll effekt
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Katta ekranda mobile menu avtomatik yopiladi
  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  const toggleMobile = useCallback(() => setMobileOpen((p) => !p), []);
  const closeMobile  = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        {/* Utility bar — faqat desktop */}
        {isDesktop && <UtilityBar onSearchOpen={() => setIsSearchOpen(true)} />}

        {/* Asosiy navbar */}
        <div className="navbar">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Bosh sahifaga o'tish">
            <img
              src="/Konservatoriya_logo_white-05.png"
              alt="O'zbekiston Davlat Konservatoriyasi"
            />
          </Link>

          <div className="nav-actions-wrap" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            minWidth: 0,
            marginLeft: isHome ? '40px' : '0'
          }}>
            {/* Home Link */}
            {!isHome && (
              <Link 
                to="/" 
                className="nav-home-link" 
                aria-label="Bosh sahifaga qaytish"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--gold-light)',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  background: 'rgba(201,168,76,0.05)',
                  flexShrink: 0
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="1.5" 
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3L21 9.5V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9.5Z" />
                </svg>
                <span style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.5px', 
                  textTransform: 'uppercase',
                  marginLeft: '8px',
                  whiteSpace: 'nowrap'
                }}>Bosh sahifa</span>
              </Link>
            )}

            {/* Desktop: horizontal mega nav */}
            {isDesktop && <DesktopNav />}
          </div>

          {/* Calendar Widget — faqat desktop */}
          {isDesktop && (
            <Link 
              to="/taqvim" 
              className="header-calendar-widget"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '6px 16px',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(8,8,21,0.4))',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                flexShrink: 0,
                marginLeft: 'auto',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                position: 'relative',
                overflow: 'hidden',
                marginRight: '-15px'
              }}
            >
               {/* Shine Effect */}
               <div className="shine-effect" />

               {/* Calendar Icon Box */}
               <div style={{
                 background: 'linear-gradient(to bottom, var(--gold-light), var(--gold))',
                 color: 'var(--bg-deep)',
                 padding: '5px 10px',
                 borderRadius: '5px',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 minWidth: '42px',
                 boxShadow: '0 2px 8px rgba(201,168,76,0.3)'
               }}>
                 <span style={{ fontSize: '0.6rem', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{MONTHS_SHORT[new Date().getMonth()]}</span>
                 <span style={{ fontSize: '1.1rem', fontWeight: 900, lineHeight: 1 }}>{new Date().getDate()}</span>
               </div>
               
               {/* Text & Status */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                   <span style={{ 
                     color: '#ffffff', 
                     fontSize: '0.85rem', 
                     fontWeight: 800, 
                     letterSpacing: '1px',
                     textTransform: 'uppercase',
                     fontFamily: 'var(--font-sans)'
                   }}>Afishalar</span>
                   <span className="live-indicator" />
                 </div>
                 <span style={{ 
                   color: 'var(--gold-light)', 
                   fontSize: '0.6rem', 
                   fontWeight: 600,
                   letterSpacing: '1.5px',
                   textTransform: 'uppercase',
                   opacity: 0.8
                 }}>Konsert taqvimi</span>
               </div>
            </Link>
          )}

          {/* Mobile: hamburger only */}
          {!isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HamburgerIcon
                isOpen={mobileOpen}
                onClick={toggleMobile}
              />
            </div>
          )}
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />

      {/* Global Search Panel */}
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
