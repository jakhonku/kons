import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileAccordion({ item, index, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mob-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.06 + index * 0.055,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Toggle button */}
      <button
        className={`mob-label${open ? ' active' : ''}`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-controls={`mob-sub-${item.id}`}
      >
        <span>{item.label}</span>

        {/* Animated + / × icon */}
        <motion.span
          className="mob-chevron"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Sub-links accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`mob-sub-${item.id}`}
            className="mob-sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
            role="region"
          >
            {item.columns.map((col, colIdx) => (
              <div key={col.heading ?? colIdx} className="mob-sub-group">
                {col.heading && (
                  <div className="mob-sub-heading">{col.heading}</div>
                )}
                {col.links.map((link, linkIdx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: colIdx * 0.04 + linkIdx * 0.04,
                      duration: 0.28,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      to={link.to}
                      className="mob-sub-link"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
