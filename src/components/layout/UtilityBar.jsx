import { Link } from 'react-router-dom';
import { UTILITY_LINKS } from '../../data/navigation';
import { useTranslation } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import AccessibilityWidget from '../AccessibilityWidget';

export default function UtilityBar({ onSearchOpen }) {
  const { t } = useTranslation();
  return (
    <div className="utility-bar">
      <div className="utility-inner">

        {/* Chap: yordamchi havolalar */}
        <nav className="utility-links" aria-label={t('common.helpLinks')}>
          {UTILITY_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="utility-link">
              {label}
            </Link>
          ))}
        </nav>

        {/* Oʻng: a11y + til + qidiruv */}
        <div className="utility-right">
          <AccessibilityWidget />
          <div className="utility-divider" />
          <LanguageSwitcher />

          <div className="utility-divider" />

          <button
            className="utility-search"
            aria-label={t('common.search')}
            onClick={onSearchOpen}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>{t('common.search')}</span>
          </button>

          <div className="utility-divider" />
          <ThemeSwitcher />
        </div>

      </div>
    </div>
  );
}
