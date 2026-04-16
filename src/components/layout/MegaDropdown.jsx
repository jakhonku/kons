import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MegaDropdown({ item, onClose, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      className="mega-dropdown"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega-inner">

        {/* Ustunlar */}
        <div className="mega-columns">
          {item.columns.map((col, colIdx) => (
            <div key={col.heading ?? colIdx} className="mega-col">
              {col.heading && (
                <h4 className="mega-heading">{col.heading}</h4>
              )}
              <ul className="mega-links">
                {col.links.map((link, linkIdx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: colIdx * 0.04 + linkIdx * 0.025,
                      duration: 0.2,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      to={link.to}
                      className="mega-link"
                      onClick={onClose}
                    >
                      <span className="mega-link-arrow" aria-hidden="true">→</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured panel — o'ng tomon */}
        {item.featured && (
          <motion.div
            className="mega-featured"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06, duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mega-featured-ornament" />
            <div className="mega-featured-label">{item.featured.label}</div>
            <p className="mega-featured-desc">{item.featured.desc}</p>
            <Link to={item.to} className="mega-featured-cta" onClick={onClose}>
              Ko'proq →
            </Link>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}
