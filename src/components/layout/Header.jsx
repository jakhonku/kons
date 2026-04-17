import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import UtilityBar from './UtilityBar';
import DesktopNav from './DesktopNav';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';
import SearchPanel from './SearchPanel';

const MONTHS_SHORT = ['YAN','FEV','MAR','APR','MAY','IYN','IYL','AVG','SEN','OKT','NOY','DEK'];

function CalendarBtn() {
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
        gap:            '12px',
        padding:        '0 16px 0 14px',
        height:         '46px',
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
          fontSize:   '1.4rem',
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
