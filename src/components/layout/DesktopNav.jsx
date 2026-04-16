import { useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NAV_MENU } from '../../data/navigation';
import MegaDropdown from './MegaDropdown';

export default function DesktopNav() {
  const [activeId, setActiveId] = useState(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveId(null), 160);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const handleItemEnter = useCallback((id) => {
    clearTimeout(closeTimer.current);
    setActiveId(id);
  }, []);

  const handleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActiveId(null);
  }, []);

  const isCurrentPage = (item) =>
    pathname === item.to ||
    item.columns?.some((col) =>
      col.links.some((l) => l.to !== '#' && l.to !== '/' && pathname.startsWith(l.to))
    );

  const activeItem = NAV_MENU.find((m) => m.id === activeId) ?? null;

  return (
    /* Wrapper — faqat nav elementlari uchun */
    <div className="desktop-nav-wrap">
      <nav
        className="desktop-nav"
        aria-label="Asosiy navigatsiya"
        onMouseLeave={scheduleClose}
      >
        {NAV_MENU.map((item) => {
          const isOpen    = activeId === item.id;
          const isCurrent = isCurrentPage(item);
          return (
            <div
              key={item.id}
              className="dnav-item-wrap"
              onMouseEnter={() => handleItemEnter(item.id)}
            >
              <Link
                to={item.to}
                className={`dnav-item${isOpen || isCurrent ? ' active' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {item.label}
                <span className="dnav-chevron" aria-hidden="true">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Mega dropdown — onMouseEnter/Leave to keep it open */}
      <AnimatePresence>
        {activeItem && (
          <MegaDropdown
            key={activeItem.id}
            item={activeItem}
            onClose={handleClose}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
