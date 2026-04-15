import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_MENU, UTILITY_LINKS } from '../../data/navigation';
import { useScrollLock } from '../../hooks/useScrollLock';
import MobileAccordion from './MobileAccordion';

export default function MobileMenu({ isOpen, onClose }) {
  useScrollLock(isOpen);

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
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Asosiy panel */}
          <motion.div
            className="mob-panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigatsiya menyusi"
          >
            {/* Panel boshi: logo + yopish */}
            <div className="mob-header">
              <Link to="/" className="mob-logo" onClick={onClose}>
                <img
                  src="/Konservatoriya_logo_white-05.png"
                  alt="Logo"
                  style={{ height: '38px' }}
                />
              </Link>
              <button
                className="mob-close"
                onClick={onClose}
                aria-label="Menyuni yopish"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Asosiy nav */}
            <nav className="mob-nav">
              {NAV_MENU.map((item, i) => (
                <MobileAccordion
                  key={item.id}
                  item={item}
                  index={i}
                  onClose={onClose}
                />
              ))}
            </nav>

            {/* Pastki utility linklar */}
            <motion.div
              className="mob-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.35 }}
            >
              <div className="mob-footer-line" />
              <div className="mob-utility">
                {UTILITY_LINKS.map(({ label, to }) => (
                  <Link key={label} to={to} className="mob-utility-link" onClick={onClose}>
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
