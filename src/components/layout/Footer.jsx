import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../contexts/LanguageContext';

const MUASSASA_KEYS = [
  { key: 'structure', to: '/tuzilma' },
  { key: 'management', to: '/rahbariyat' },
  { key: 'documents', to: '/hujjatlar' },
  { key: 'applicants', to: '/abituriyentlar' },
  { key: 'international', to: '/xalqaro' },
  { key: 'news', to: '/yangiliklar' },
];

const TALABALAR_KEYS = [
  { key: 'students', to: '/talabalar' },
  { key: 'schedules', to: '/dars-jadvali' },
  { key: 'library', to: '/kutubxona' },
  { key: 'registrator', to: '/registrator' },
  { key: 'clubs', to: '/togaraklar' },
  { key: 'dorm', to: '/yotoqxona' },
  { key: 'hemis', to: '/hemis-talaba' },
];

const SOCIAL = [
  {
    label: 'Telegram',
    href: 'https://t.me/Ozbekistondavlatkonservatoriyasi',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/konservatoriya_uzb',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@stateconservatoryofuzbekis282?si=z6atAUb3y8225Je3',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/konservatoriya.uz',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const showMap = pathname === '/' || pathname === '/kontaktlar';

  return (
    <footer className="main-footer">

      {/* Google Maps */}
      {showMap && (
        <div className="footer-map">
          <iframe
            title={t('footer.mapTitle')}
            src="https://maps.google.com/maps?q=O%27zbekiston+Davlat+Konservatoriyasi+Toshkent&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="footer-map-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('footer.mapBadge')}
          </div>
        </div>
      )}

      {/* Main grid */}
      <div className="footer-container">

        {/* Col 1 — Logo & about */}
        <div className="footer-left">
          <img src="/Konservatoriya_logo_white-05.png" alt="Logo" className="footer-logo-img" />
          <p>{t('footer.aboutText')}</p>
          <div className="footer-social">
            {SOCIAL.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-btn"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Muassasa */}
        <div className="footer-col">
          <h4>{t('footer.headings.institution')}</h4>
          {MUASSASA_KEYS.map(({ key, to }) => (
            <Link key={to} to={to}>{t(`footer.institutionLinks.${key}`)}</Link>
          ))}
        </div>

        {/* Col 3 — Talabalar */}
        <div className="footer-col">
          <h4>{t('footer.headings.students')}</h4>
          {TALABALAR_KEYS.map(({ key, to }) => (
            <Link key={to} to={to}>{t(`footer.studentLinks.${key}`)}</Link>
          ))}
        </div>

        {/* Col 4 — Kontakt */}
        <div className="footer-col footer-contact">
          <h4>{t('footer.headings.contact')}</h4>

          <div className="footer-contact-item">
            <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <span>{t('footer.address.line1')}</span>
              <span>{t('footer.address.line2')}</span>
            </div>
          </div>

          <div className="footer-contact-item">
            <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.9z" />
            </svg>
            <div>
              <a href="tel:+998712345678">+998 71 234-56-78</a>
              <a href="tel:+998712345679">+998 71 234-56-79</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            <div>
              <a href="mailto:info@konservatoriya.uz">info@konservatoriya.uz</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <span>{t('footer.hours.weekday')}</span>
              <span>{t('footer.hours.saturday')}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <div className="footer-bottom-right">
          <Link to="/hujjatlar">{t('footer.privacy')}</Link>
          <span className="footer-bottom-sep">·</span>
          <Link to="/kontaktlar">{t('footer.sitemap')}</Link>
          <span className="footer-bottom-sep" style={{ color: 'var(--gold-dim)', letterSpacing: '2px', fontSize: '0.65rem' }}>
            {t('footer.region')}
          </span>
        </div>
      </div>

    </footer>
  );
}
