import { Link } from 'react-router-dom';
import { UTILITY_LINKS } from '../../data/navigation';

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="utility-inner">
        {/* Chap: yordamchi havolalar */}
        <nav className="utility-links">
          {UTILITY_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="utility-link">
              {label}
            </Link>
          ))}
        </nav>

        {/* O'ng: qidiruv */}
        <button className="utility-search" aria-label="Qidiruv">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Qidiruv</span>
        </button>
      </div>
    </div>
  );
}
