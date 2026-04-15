import { Link } from 'react-router-dom';
import { NAV_MENU } from '../../data/navigation';

export default function Sidebar({ isOpen, activePanel, onClose, onSelectPanel, sidebarRef }) {
  const sidebarClass = ['sidebar', isOpen && 'active', activePanel && 'secondary-open']
    .filter(Boolean)
    .join(' ');

  return (
    <aside className={sidebarClass} ref={sidebarRef}>
      <div className="sidebar-wrapper">
        <div className="sidebar-main">
          <div className="sidebar-header">
            <h2>MENYU</h2>
            <button className="close-sidebar" onClick={onClose}>&times;</button>
          </div>

          <nav className="main-nav-links">
            {NAV_MENU.map((item) => (
              <button
                key={item.id}
                className={`nav-item${activePanel === item.id ? ' active' : ''}`}
                onClick={() => onSelectPanel(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="social-mini">
              <a href="#" aria-label="Telegram" className="social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar-secondary">
          {NAV_MENU.map((item) => (
            <div
              key={item.id}
              className={`secondary-panel${activePanel === item.id ? ' active' : ''}`}
            >
              <h3>{item.label}</h3>
              {item.links.map((link) =>
                link.to.startsWith('/') ? (
                  <Link key={link.label} to={link.to} onClick={onClose}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.to}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
