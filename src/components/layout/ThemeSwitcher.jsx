import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeSwitcher({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-switch${isLight ? ' theme-switch--light' : ''} ${className}`.trim()}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Tungi rejimga oʼtish' : 'Kunduzgi rejimga oʼtish'}
      title={isLight ? 'Tungi rejim' : 'Kunduzgi rejim'}
    >
      <span className="theme-switch__track">
        <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
        <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </span>
        <span className="theme-switch__thumb" aria-hidden="true" />
      </span>
    </button>
  );
}
