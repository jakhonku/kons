import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGS = [
  { code: 'UZ', label: "O'zbek" },
  { code: 'RU', label: 'Русский' },
  { code: 'EN', label: 'English' },
];

export default function LanguageSwitcher() {
  const [active, setActive] = useState('UZ');
  const [open, setOpen]     = useState(false);

  return (
    <div
      className="lang-switcher"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Joriy til + globe icon */}
      <button
        className="lang-trigger"
        aria-label="Tilni almashtirish"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
      >
        {/* Globe SVG */}
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{active}</span>
        <motion.svg
          width="8" height="8" viewBox="0 0 10 6" fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -6, scaleY: 0.92 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.92 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          >
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-option${active === code ? ' lang-option--active' : ''}`}
                onClick={() => { setActive(code); setOpen(false); }}
              >
                <span className="lang-code">{code}</span>
                <span className="lang-label">{label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
