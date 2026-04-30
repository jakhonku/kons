import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import UtilityBar from './UtilityBar';
import DesktopNav from './DesktopNav';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';
import SearchPanel from './SearchPanel';

const MONTHS_SHORT = ['YAN','FEV','MAR','APR','MAY','IYN','IYL','AVG','SEN','OKT','NOY','DEK'];

function CalendarBtn() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const now   = new Date();
  const day   = now.getDate();
  const month = MONTHS_SHORT[now.getMonth()];
  return (
    <Link
      to="/taqvim"
      aria-label="Tadbirlar taqvimi"
      style={{
        display:        'flex',
        alignItems:     'center',
        gap:            isDesktop ? '12px' : '8px',
        padding:        isDesktop ? '0 16px 0 14px' : '0 10px 0 8px',
        height:         isDesktop ? '46px' : '38px',
        border:         '1px solid rgba(201,168,76,0.35)',
        background:     'rgba(201,168,76,0.04)',
        textDecoration: 'none',
        flexShrink:     0,
        transition:     'border-color 0.25s, background 0.25s',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--gold)';
        e.currentTarget.style.background  = 'rgba(201,168,76,0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
        e.currentTarget.style.background  = 'rgba(201,168,76,0.04)';
      }}
    >
      {/* TADBIRLAR matni */}
      <span style={{
        fontFamily:    'var(--font-sans)',
        fontSize:      '0.62rem',
        fontWeight:    700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color:         'rgba(240,237,232,0.65)',
        lineHeight:    1,
      }}>
        TADBIRLAR
      </span>

      {/* Vertikal ajratgich */}
      <span style={{
        display:    'block',
        width:      '1px',
        height:     '26px',
        background: 'rgba(201,168,76,0.3)',
        flexShrink: 0,
      }} />

      {/* Kalendar kvadrat */}
      <span style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        lineHeight:     1,
        gap:            '1px',
      }}>
        {/* Oy */}
        <span style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '0.44rem',
          fontWeight:    700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color:         '#e05050',
        }}>
          {month}
        </span>
        {/* Kun */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize:   isDesktop ? '1.4rem' : '1.1rem',
          fontWeight: 300,
          color:      'var(--gold-light)',
        }}>
          {day}
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
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

          {/* Home Link — yanada elegant dizayn */}
          {!isHome && (
            <>
              <div style={{
                width: '1px',
                height: '24px',
                background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
                marginLeft: '15px',
                marginRight: '10px'
              }} />
              <Link 
                to="/" 
                className="nav-home-link" 
                aria-label="Bosh sahifaga qaytish"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: '8px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--gold-shimmer)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--gold-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="1.2" 
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3L21 9.5V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9.5Z" />
                  <path d="M9 22V12H15V22" strokeWidth="1" opacity="0.6"/>
                </svg>
                
                {/* Hover effekti uchun nur */}
                <span className="home-glow" style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease'
                }} />
              </Link>
            </>
          )}

          {/* Desktop: horizontal mega nav + calendar */}
          {isDesktop && (
            <>
              <DesktopNav />
              <CalendarBtn />
            </>
          )}

          {/* Mobile: calendar + hamburger */}
          {!isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CalendarBtn />
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
