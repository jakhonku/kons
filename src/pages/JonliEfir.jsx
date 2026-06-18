import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Send, Radio, ExternalLink, ArrowRight, Calendar } from 'lucide-react';

const Youtube = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat' },
  { label: 'Jonli efir' },
];

const YOUTUBE = 'https://youtube.com/@stateconservatoryofuzbekis282';
const TELEGRAM = 'https://t.me/Ozbekistondavlatkonservatoriyasi';
const INSTAGRAM = 'https://instagram.com/konservatoriya_uzb';
const FACEBOOK = 'https://facebook.com/konservatoriya.uz';

const CHANNELS = [
  { icon: Youtube, name: 'YouTube', handle: '@stateconservatoryofuzbekis282', url: YOUTUBE, desc: 'Konsert va tadbirlarning jonli efiri hamda video arxivi.', color: '#ff0000' },
  { icon: Send, name: 'Telegram', handle: 'Ozbekistondavlatkonservatoriyasi', url: TELEGRAM, desc: 'Jonli efir havolalari va eʼlonlar shu rasmiy kanalda beriladi.', color: '#229ED9' },
  { icon: Instagram, name: 'Instagram', handle: 'konservatoriya_uzb', url: INSTAGRAM, desc: 'Jonli translatsiyalar (Live) va lavhalar.', color: '#E1306C' },
  { icon: Facebook, name: 'Facebook', handle: 'konservatoriya.uz', url: FACEBOOK, desc: 'Tadbir translatsiyalari va yangiliklar.', color: '#1877F2' },
];

const STEPS = [
  { n: '01', title: 'Obuna boʻling', desc: 'Rasmiy YouTube va Telegram kanallariga obuna boʻling — jonli efir boshlanishidan xabar olasiz.' },
  { n: '02', title: 'Havolani kuting', desc: 'Tadbir oldidan jonli efir havolasi Telegram kanali va afishada eʼlon qilinadi.' },
  { n: '03', title: 'Tomosha qiling', desc: 'Istalgan qurilmadan — telefon, planshet yoki kompyuterdan toʻgʻridan-toʻgʻri tomosha qiling.' },
];

const sectionTitle = {
  fontFamily: 'var(--font-display)',
  color: 'var(--navy)',
  fontSize: '1.6rem',
  fontWeight: 500,
  marginBottom: '24px',
};

const eyebrow = {
  fontSize: '0.6rem',
  fontWeight: 700,
  letterSpacing: '3px',
  color: 'var(--gold-dark)',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

export default function JonliEfir() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Ijodiy faoliyat"
        title="Jonli"
        emphasis="efir"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* ── Kirish ── */}
          <div className="reveal" style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <p className="lead">
              Oʻzbekiston Davlat Konservatoriyasi konsertlari, tadbirlari va muhim
              jarayonlarini rasmiy kanallari orqali onlayn translatsiya qiladi. Quyidagi
              kanallarga obuna boʻlib, jonli efirlarni uy sharoitida tomosha qilishingiz mumkin.
            </p>
          </div>

          {/* ── YouTube jonli efir hero ── */}
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            style={{ display: 'block', textDecoration: 'none', background: 'var(--bg-deep, #0c0c1e)', borderRadius: '16px', padding: '40px', marginBottom: '56px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 0 4px rgba(220,38,38,0.25)' }} />
              <span style={{ color: '#dc2626', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Jonli efir</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,0,0,0.12)', color: '#ff3b3b', flexShrink: 0 }}>
                <Radio size={30} />
              </div>
              <div style={{ flex: '1 1 320px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.6rem', fontWeight: 500, marginBottom: '6px' }}>
                  Jonli efirni YouTube’da tomosha qiling
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Konservatoriyaning rasmiy YouTube kanali — konsertlar jonli efiri va to‘liq video arxivi.
                </p>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ff0000', color: '#fff', padding: '14px 26px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                <Youtube size={18} /> Kanalga oʻtish
              </span>
            </div>
          </a>

          {/* ── Rasmiy kanallar ── */}
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <div style={eyebrow}>Rasmiy kanallar</div>
            <h2 style={sectionTitle}>Qayerdan tomosha qilish mumkin</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px' }}>
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', textDecoration: 'none', background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '24px', transition: 'box-shadow .2s' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '11px', background: c.color + '14', color: c.color }}>
                        <Icon size={22} />
                      </div>
                      <ExternalLink size={16} style={{ color: '#bbb' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '4px' }}>{c.name}</h3>
                    <div style={{ color: 'var(--gold-dark, #a8891e)', fontSize: '0.78rem', marginBottom: '10px', wordBreak: 'break-all' }}>{c.handle}</div>
                    <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.desc}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Qanday tomosha qilish ── */}
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <div style={eyebrow}>Qoʻllanma</div>
            <h2 style={sectionTitle}>Jonli efirni qanday tomosha qilish</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold, #c9a84c)', lineHeight: 1, marginBottom: '12px' }}>{s.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.86rem', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Afisha CTA ── */}
          <div
            className="reveal"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '14px', padding: '28px 32px', flexWrap: 'wrap', marginBottom: '40px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
              <Calendar size={22} style={{ color: 'var(--gold-dark, #a8891e)' }} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '4px' }}>
                  Yaqin tadbirlar jadvali
                </h3>
                <p style={{ color: '#666', fontSize: '0.88rem' }}>
                  Jonli efir vaqtlari afisha sahifasida va rasmiy kanallarda eʼlon qilinadi.
                </p>
              </div>
            </div>
            <Link
              to="/taqvim"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--navy)', color: '#fff', padding: '13px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Afishani koʻrish <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
