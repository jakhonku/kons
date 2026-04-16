import { Link } from 'react-router-dom';
import { UTILITY_LINKS } from '../../data/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="utility-inner">

        {/* Chap: yordamchi havolalar */}
        <nav className="utility-links" aria-label="Yordamchi havolalar">
          {UTILITY_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="utility-link">
              {label}
            </Link>
          ))}
        </nav>

        {/* O'ng: til + qidiruv */}
        <div className="utility-right">
          <LanguageSwitcher />

          <div className="utility-divider" />

          <button className="utility-search" aria-label="Qidiruv">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>Qidiruv</span>
          </button>
        </div>

      </div>
    </div>
  );
}
