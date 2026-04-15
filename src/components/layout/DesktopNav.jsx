import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NAV_MENU } from '../../data/navigation';
import MegaDropdown from './MegaDropdown';

export default function DesktopNav() {
  const [activeId, setActiveId] = useState(null);
  const closeTimer = useRef(null);

  const handleEnter = useCallback((id) => {
    clearTimeout(closeTimer.current);
    setActiveId(id);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveId(null), 160);
  }, []);

  const handleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActiveId(null);
  }, []);

  const activeItem = NAV_MENU.find((m) => m.id === activeId) ?? null;

  return (
    <div
      className="desktop-nav-wrap"
      onMouseLeave={handleLeave}
    >
      {/* Nav itemlari */}
      <nav className="desktop-nav">
        {NAV_MENU.map((item) => (
          <div
            key={item.id}
            className="dnav-item-wrap"
            onMouseEnter={() => handleEnter(item.id)}
          >
            <Link
              to={item.to}
              className={`dnav-item${activeId === item.id ? ' active' : ''}`}
            >
              {item.label}
              <span className="dnav-chevron">
                <svg width="10" height="10" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </nav>

      {/* Mega dropdown */}
      <AnimatePresence>
        {activeItem && (
          <MegaDropdown
            key={activeItem.id}
            item={activeItem}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
