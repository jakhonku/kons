import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useTranslation } from '../../contexts/LanguageContext';
import UtilityBar from './UtilityBar';
import DesktopNav from './DesktopNav';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';
import SearchPanel from './SearchPanel';

const MONTHS_SHORT = {
  uz: ['YAN','FEV','MAR','APR','MAY','IYN','IYL','AVG','SEN','OKT','NOY','DEK'],
  ru: ['ЯНВ','ФЕВ','МАР','АПР','МАЙ','ИЮН','ИЮЛ','АВГ','СЕН','ОКТ','НОЯ','ДЕК'],
  en: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
};



export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const location  = useLocation();
  const isHome    = location.pathname === '/';
  const { t, lang } = useTranslation();
  const months = MONTHS_SHORT[lang] || MONTHS_SHORT.uz;


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
          <Link to="/" className="nav-logo" aria-label={t('common.backToHome')}>
            <img
              src="/Konservatoriya_logo_white-05.png"
              alt="Oʻzbekiston Davlat Konservatoriyasi"
            />
          </Link>

          <div className="nav-actions-wrap" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: 0,
            marginLeft: isHome ? (isDesktop ? '40px' : '10px') : '0'
          }}>
            {/* Home Link */}
            {!isHome && (
              <Link
                to="/"
                className="nav-home-link"
                aria-label={t('common.backToHome')}
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
                }}>{t('common.home')}</span>
              </Link>
            )}

            {/* Desktop: horizontal mega nav */}
            {isDesktop && <DesktopNav />}

            {/* Social Links — Faqat bosh sahifada */}
            {isHome && (
              <div className="header-social-wrap">
                <a href="https://t.me/Ozbekistondavlatkonservatoriyasi" target="_blank" rel="noopener noreferrer" className="h-social-link telegram" aria-label="Telegram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/konservatoriya_uzb" target="_blank" rel="noopener noreferrer" className="h-social-link instagram" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="https://youtube.com/@stateconservatoryofuzbekis282?si=z6atAUb3y8225Je3" target="_blank" rel="noopener noreferrer" className="h-social-link youtube" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Calendar Widget */}
          <Link to="/taqvim" className="header-calendar-widget">
            <div className="shine-effect" />
            <div className="cal-icon-box">
              <span className="cal-month">{months[new Date().getMonth()]}</span>
              <span className="cal-day">{new Date().getDate()}</span>
            </div>
            <div className="cal-text-box">
              <div className="cal-title-row">
                <span className="cal-title">{t('common.posters')}</span>
                <span className="live-indicator" />
              </div>
              <span className="cal-subtitle">{t('common.concertCalendar')}</span>
            </div>
          </Link>

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
