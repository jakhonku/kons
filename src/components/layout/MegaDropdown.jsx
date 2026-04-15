import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MegaDropdown({ item, onClose }) {
  return (
    <motion.div
      className="mega-dropdown"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mega-inner">
        {/* Ustunlar */}
        <div className="mega-columns">
          {item.columns.map((col) => (
            <div key={col.heading} className="mega-col">
              <h4 className="mega-heading">{col.heading}</h4>
              <ul className="mega-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="mega-link"
                      onClick={onClose}
                    >
                      <span className="mega-link-arrow">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured panel */}
        {item.featured && (
          <div className="mega-featured">
            <div className="mega-featured-ornament" />
            <div className="mega-featured-label">{item.featured.label}</div>
            <p className="mega-featured-desc">{item.featured.desc}</p>
            <Link to={item.to} className="mega-featured-cta" onClick={onClose}>
              Ko'proq &rarr;
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
