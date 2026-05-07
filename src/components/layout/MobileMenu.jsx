import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buildNavMenu, UTILITY_LINKS } from '../../data/navigation';
import { useTranslation } from '../../contexts/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { useScrollLock } from '../../hooks/useScrollLock';
import MobileAccordion from './MobileAccordion';
import AccessibilityWidget from '../AccessibilityWidget';

export default function MobileMenu({ isOpen, onClose }) {
  useScrollLock(isOpen);
  const { t, lang, setLang } = useTranslation();
  const NAV_MENU = useMemo(() => buildNavMenu(t), [t, lang]);

  // Escape tugmasi bilan yopish
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Qorovul qatlam */}
          <motion.div
            className="mob-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Asosiy panel */}
          <motion.div
            className="mob-panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={t('common.helpLinks')}
          >
            {/* Panel boshi: logo + yopish */}
            <div className="mob-header">
              <Link to="/" className="mob-logo" onClick={onClose}>
                <img
                  src="/Konservatoriya_logo_white-05.png"
                  alt="Oʻzbekiston Davlat Konservatoriyasi"
                  style={{ height: '36px' }}
                />
              </Link>
              <button
                className="mob-close"
                onClick={onClose}
                aria-label={t('common.closeMenu')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Asosiy nav */}
            <nav className="mob-nav" aria-label={t('common.helpLinks')}>
              {NAV_MENU.map((item, i) => (
                <MobileAccordion
                  key={item.id}
                  item={item}
                  index={i}
                  onClose={onClose}
                />
              ))}
            </nav>

            {/* Pastki qism: til va utility linklar */}
            <motion.div
              className="mob-footer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.32, ease: 'easeOut' }}
            >
              {/* Til tanlash */}
              <div className="mob-langs">
                {SUPPORTED_LANGUAGES.map(({ code, short }) => (
                  <button
                    key={code}
                    className={`mob-lang-btn${lang === code ? ' active' : ''}`}
                    onClick={() => setLang(code)}
                  >
                    {short}
                  </button>
                ))}
              </div>

              <div className="mob-footer-line" />

              {/* Maxsus imkoniyatlar (nogironlar uchun) */}
              <div className="mob-a11y">
                <AccessibilityWidget />
              </div>

              <div className="mob-footer-line" />

              {/* Utility havolalar */}
              <div className="mob-utility">
                {UTILITY_LINKS.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="mob-utility-link"
                    onClick={onClose}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mob-footer-line" />

              {/* Social Links — Mobile Menu */}
              <div className="mob-socials" style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center',
                padding: '10px 0 20px'
              }}>
                <a href="https://t.me/Ozbekistondavlatkonservatoriyasi" target="_blank" rel="noopener noreferrer" className="mob-social-btn" aria-label="Telegram">
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/konservatoriya_uzb" target="_blank" rel="noopener noreferrer" className="mob-social-btn" aria-label="Instagram">
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="https://youtube.com/@stateconservatoryofuzbekis282?si=z6atAUb3y8225Je3" target="_blank" rel="noopener noreferrer" className="mob-social-btn" aria-label="YouTube">
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
