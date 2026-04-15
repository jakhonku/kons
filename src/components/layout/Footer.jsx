import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Konservatoriya tarixi', to: '/tarix' },
  { label: 'Muassasa tuzilmasi', to: '/tuzilma' },
  { label: 'Rahbariyat', to: '/rahbariyat' },
  { label: "Me'yoriy hujjatlar", to: '/hujjatlar' },
  { label: 'Abituriyentlar', to: '/abituriyentlar' },
  { label: 'Tadbirlar taqvimi', to: '/taqvim' },
  { label: 'Yangiliklar', to: '/yangiliklar' },
  { label: 'Kontaktlar', to: '/kontaktlar' },
];

export default function Footer() {
  return (
    <footer className="main-footer">

      {/* Decorative top ornament */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '120px', background: 'linear-gradient(90deg, transparent, var(--border-gold))' }} />
          <div style={{
            width: '10px', height: '10px',
            background: 'var(--gold)',
            transform: 'rotate(45deg)',
          }} />
          <div style={{ height: '1px', width: '120px', background: 'linear-gradient(90deg, var(--border-gold), transparent)' }} />
        </div>
      </div>

      <div className="footer-container">
        {/* Logo & tagline */}
        <div className="footer-left">
          <img src="/Konservatoriya_logo_white-05.png" alt="Logo" className="footer-logo-img" />
          <p>
            O'zbekiston Davlat Konservatoriyasi — Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa ta'lim muassasasi.
          </p>
          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {[
              { label: 'Telegram', svg: <path d="m22 2-7 20-4-9-9-4Z" /> },
              { label: 'Instagram', svg: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
              { label: 'YouTube', svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
            ].map(({ label, svg }) => (
              <a key={label} href="#" aria-label={label} style={{
                width: '40px', height: '40px',
                border: '1px solid var(--border-gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--silver)',
                transition: '0.35s',
                borderRadius: '2px',
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-gold)'; e.currentTarget.style.color = 'var(--silver)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Sahifalar */}
        <div className="footer-col">
          <h4>Sahifalar</h4>
          {NAV_LINKS.slice(0, 4).map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>

        {/* Aloqa */}
        <div className="footer-col">
          <h4>Bog'lanish</h4>
          {NAV_LINKS.slice(4).map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
            <p>Toshkent sh., Olmazor tumani,</p>
            <p>Mustaqillik ko'chasi, 31-uy</p>
            <p style={{ marginTop: '10px' }}>+998 71 234-56-78</p>
            <p>info@konservatoriya.uz</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2026 O'zbekiston Davlat Konservatoriyasi. Barcha huquqlar himoyalangan.</span>
        <span style={{ color: 'var(--gold-dim)', letterSpacing: '2px', fontSize: '0.65rem' }}>
          TOSHKENT · O'ZBEKISTON
        </span>
      </div>

    </footer>
  );
}
