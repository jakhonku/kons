import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileAccordion({ item, index, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mob-item"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className={`mob-label${open ? ' active' : ''}`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <motion.span
          className="mob-chevron"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ›
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {item.columns.map((col) => (
              <div key={col.heading} className="mob-sub-group">
                <div className="mob-sub-heading">{col.heading}</div>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="mob-sub-link"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
