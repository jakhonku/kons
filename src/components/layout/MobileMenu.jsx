import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buildNavMenu } from '../../data/navigation';
import { useTranslation } from '../../contexts/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { useScrollLock } from '../../hooks/useScrollLock';
import AccessibilityWidget from '../AccessibilityWidget';
import ThemeSwitcher from './ThemeSwitcher';

export default function MobileMenu({ isOpen, onClose }) {
  useScrollLock(isOpen);
  const { t, lang, setLang } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const NAV_MENU = useMemo(() => buildNavMenu(t), [t, lang]);
  const [openIndex, setOpenIndex] = useState(null);

  const isLinkActive = (to) => {
    if (!to || to === '#') return false;
    if (to === '/') return currentPath === '/';
    return currentPath === to || currentPath.startsWith(to + '/');
  };

  const isParentActive = (item) => {
    if (item.to && isLinkActive(item.to)) return true;
    if (item.columns) {
      return item.columns.some(col =>
        col.links?.some(link => isLinkActive(link.to))
      );
    }
    return false;
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const activeIdx = NAV_MENU.findIndex(item => isParentActive(item));
      if (activeIdx !== -1) {
        setOpenIndex(activeIdx);
      }
    } else {
      setOpenIndex(null);
    }
  }, [isOpen, currentPath, NAV_MENU]);

  const toggleItem = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mob-fullscreen"
          initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          role="dialog"
          aria-modal="true"
        >
          {/* Gold dekorativ chiziq */}
          <div className="mob-fs-accent" />

          {/* Header */}
          <div className="mob-fs-header">
            <Link to="/" className="mob-fs-logo" onClick={onClose}>
              <img
                src="/Konservatoriya_logo_white-05.png"
                alt="Oʻzbekiston Davlat Konservatoriyasi"
              />
            </Link>
            <button className="mob-fs-close" onClick={onClose} aria-label="Yopish">
              <span />
              <span />
            </button>
          </div>

          {/* Nav */}
          <nav className="mob-fs-nav">
            {NAV_MENU.map((item, i) => (
              <motion.div
                key={item.id}
                className="mob-fs-item"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
              >
                {item.columns?.length ? (
                  <>
                    <button
                      className={`mob-fs-label${openIndex === i ? ' open' : ''}${isParentActive(item) ? ' active-parent' : ''}`}
                      onClick={() => toggleItem(i)}
                    >
                      <span>{item.label}</span>
                      <svg className="mob-fs-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          className="mob-fs-sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          {item.columns.map((col, ci) => (
                            <div key={ci} className="mob-fs-subgroup">
                              {col.heading && (
                                <p className="mob-fs-subheading">{col.heading}</p>
                              )}
                              {col.links?.map((link) => (
                                link.to.startsWith('http') ? (
                                  <a
                                    key={link.to}
                                    href={link.to}
                                    className="mob-fs-sublink"
                                    onClick={onClose}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span className="mob-fs-sublink-dot" />
                                    {link.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`mob-fs-sublink${isLinkActive(link.to) ? ' active' : ''}`}
                                    onClick={onClose}
                                  >
                                    <span className="mob-fs-sublink-dot" />
                                    {link.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.to} className={`mob-fs-label${isLinkActive(item.to) ? ' active' : ''}`} onClick={onClose}>
                    <span>{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          <motion.div
            className="mob-fs-footer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.3 }}
          >
            {/* Til tanlash */}
            <div className="mob-fs-langs">
              {SUPPORTED_LANGUAGES.map(({ code, short }) => (
                <button
                  key={code}
                  className={`mob-fs-lang${lang === code ? ' active' : ''}`}
                  onClick={() => setLang(code)}
                >
                  {short}
                </button>
              ))}
            </div>

            <div className="mob-fs-divider" />

            {/* Rejim va Imkoniyatlar */}
            <div className="mob-fs-controls">
              <div className="mob-fs-theme">
                <span>Rejim</span>
                <ThemeSwitcher />
              </div>
              <div className="mob-fs-a11y">
                <AccessibilityWidget />
              </div>
            </div>

            {/* Social */}
            <div className="mob-fs-socials">
              <a href="https://t.me/Ozbekistondavlatkonservatoriyasi" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://instagram.com/konservatoriya_uzb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://youtube.com/@stateconservatoryofuzbekis282" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
