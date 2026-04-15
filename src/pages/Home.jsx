import { Link } from 'react-router-dom';

const STATS = [
  { num: '1936', label: 'Yildan buyon' },
  { num: '5000+', label: 'Bitiruvchilar' },
  { num: '48', label: 'Kafedra' },
  { num: '120+', label: "Xalqaro hamkor" },
];

const QUICK_LINKS = [
  { icon: '♩', label: 'Konservatoriya tarixi', sub: '1936-yildan bugun',  to: '/tarix' },
  { icon: '♪', label: 'Muassasa tuzilmasi',   sub: 'Fakultet va kafedralar', to: '/tuzilma' },
  { icon: '♫', label: 'Rahbariyat',            sub: 'Rektor va prorektor', to: '/rahbariyat' },
  { icon: '♬', label: 'Abituriyentlar',        sub: 'Qabul 2026 — Kvota', to: '/abituriyentlar' },
  { icon: '𝄞', label: 'Tadbirlar taqvimi',    sub: 'Kelgusi konsertlar',  to: '/taqvim' },
  { icon: '𝄢', label: "Me'yoriy hujjatlar",   sub: 'PDF, Ustav, Qoidalar', to: '/hujjatlar' },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-visual">
          <img src="/image.png" className="slide active" alt="Konservatoriya" />
          <div className="staff-lines" />
        </div>

        <div className="hero-content">
          <span className="section-tag" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', marginBottom: '18px' }}>
            EST. 1936 · TOSHKENT
          </span>

          <h1>
            O'zbekiston<br />
            Davlat <span>Konservatoriyasi</span>
          </h1>

          <div className="ornament">
            <div className="ornament-diamond" />
          </div>

          <blockquote style={{
            borderLeft: '2px solid var(--gold-dim)',
            paddingLeft: '20px',
            marginBottom: '40px',
            maxWidth: '380px',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'rgba(240,237,232,0.7)',
              lineHeight: 1.65,
              fontWeight: 300,
            }}>
              Musiqa fani va san'ati har bir insonni yuksak axloq, go'zallik va nafosat ruhida tarbiyalashda qudratli vositadir.
            </p>
            <footer style={{
              marginTop: '14px',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '3px',
              color: 'var(--gold)',
              fontWeight: 700,
            }}>
              — SH. MIRZIYOYEV
            </footer>
          </blockquote>

          <div style={{ display: 'flex', gap: '14px' }}>
            <Link to="/tarix" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
              BATAFSIL
            </Link>
            <Link to="/taqvim" className="btn-outline light" style={{ textDecoration: 'none', display: 'inline-block' }}>
              TADBIRLAR
            </Link>
          </div>

          <div className="hero-year">Konservatoriya · 1936</div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <div className="stats-row">
        {STATS.map((s, i) => (
          <div key={s.label} className={`stat-item reveal reveal-d${i + 1}`}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── AKADEMIK MEROS ───────────────────────────────── */}
      <section className="split-section">
        <div className="section-text-dark reveal-left">
          <span className="section-tag">Biz Haqimizda</span>
          <h2>Akademik <span>Meros</span></h2>
          <div className="ornament" style={{ maxWidth: '300px' }}>
            <div className="ornament-diamond" />
          </div>
          <p style={{ color: 'rgba(240,237,232,0.6)', fontFamily: 'var(--font-serif)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '35px' }}>
            Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa ta'lim muassasasi. 1936-yildan beri musiqa san'atining eng buyuk namoyandalari shu devorlar ichida yetishib chiqqan.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            {[
              { label: 'Konservatoriya tarixi', to: '/tarix' },
              { label: 'Muassasa tuzilmasi', to: '/tuzilma' },
              { label: 'Rahbariyat', to: '/rahbariyat' },
            ].map(({ label, to }) => (
              <Link key={to} to={to} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(240,237,232,0.5)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'color 0.3s, gap 0.3s',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = 'var(--gold-light)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(240,237,232,0.5)'; }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>→</span> {label}
              </Link>
            ))}
          </div>
          <Link to="/tarix" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            TARIXNI O'QING
          </Link>
        </div>

        {/* 3D Image */}
        <div className="section-image-feature reveal-right" style={{ padding: '80px 60px' }}>
          <div className="image-3d-wrap">
            <div className="image-3d-inner">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
                alt="Konservatoriya"
                style={{ filter: 'grayscale(30%) brightness(0.8)', display: 'block' }}
              />
            </div>
            <div className="year-badge-3d">
              <div className="yr">1936</div>
              <div className="lb">dan buyon</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEZKOR HAVOLALAR 3D GRID ─────────────────────── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Navigatsiya</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.2rem',
              fontWeight: 300,
              color: 'var(--text-primary)',
              marginTop: '10px',
            }}>
              Tezkor <span>Yo'nalishlar</span>
            </h2>
            <div className="ornament" style={{ justifyContent: 'center' }}>
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border-subtle)',
          }}>
            {QUICK_LINKS.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                data-reveal-index={i}
                style={{
                  display: 'block',
                  background: 'var(--bg-card)',
                  padding: '50px 40px',
                  textDecoration: 'none',
                  transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--bg-elevated)';
                  e.currentTarget.style.transform = 'translateY(-6px) perspective(600px) rotateX(3deg)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px var(--border-gold)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2.2rem',
                  color: 'var(--gold)',
                  marginBottom: '20px',
                  lineHeight: 1,
                  fontFamily: 'serif',
                  textShadow: '0 2px 12px rgba(201,168,76,0.4)',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.05em',
                }}>
                  {item.sub}
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '28px',
                  right: '36px',
                  color: 'var(--gold-dim)',
                  fontSize: '1.2rem',
                  transition: 'transform 0.3s',
                }}>
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALABALAR SECTION ────────────────────────────── */}
      <section
        className="full-section"
        style={{ background: "url('https://images.unsplash.com/photo-1523240715632-d984723145e1?q=80&w=2070') center/cover fixed" }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '100px 0',
            gap: '60px',
          }}>

            {/* Chap matn */}
            <div style={{ flex: 1, color: 'var(--text-primary)' }}>
              <span className="section-tag light">Talabalar uchun</span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '20px', marginTop: '10px' }}>
                Talabalar <span>Hayoti</span>
              </h2>
              <div className="ornament" style={{ maxWidth: '280px' }}>
                <div className="ornament-diamond" />
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.6)', marginBottom: '40px', maxWidth: '460px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: 1.8 }}>
                Barcha o'quv resurslari, dars jadvallari va xalqaro imkoniyatlar yagona portalda.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border-subtle)', marginBottom: '40px', maxWidth: '460px' }}>
                {['Dars jadvallari', 'Grantlar', 'HEMIS Tizimi', 'Online kutubxona'].map((label) => (
                  <a key={label} href="#" style={{
                    display: 'block',
                    background: 'rgba(7,7,14,0.6)',
                    color: 'rgba(240,237,232,0.6)',
                    padding: '14px 18px',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    transition: '0.3s',
                    fontFamily: 'var(--font-sans)',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.12)'; e.currentTarget.style.color = 'var(--gold-light)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(7,7,14,0.6)'; e.currentTarget.style.color = 'rgba(240,237,232,0.6)'; }}
                  >
                    {label} →
                  </a>
                ))}
              </div>
              <button className="btn-outline light">PORTALGA KIRISH</button>
            </div>

            {/* O'ng — Shisha karta */}
            <div style={{
              width: '380px',
              flexShrink: 0,
              background: 'rgba(7,7,14,0.7)',
              backdropFilter: 'blur(30px)',
              border: '1px solid var(--border-gold)',
              padding: '50px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(201,168,76,0.15)',
              transform: 'perspective(800px) rotateY(-4deg)',
              transition: 'transform 0.6s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(-4deg)'; }}
            >
              <span className="section-tag" style={{ marginBottom: '16px' }}>DIQQAT</span>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: 300, marginBottom: '16px' }}>
                Kelajakka <span>Qadam</span>
              </h3>
              <div style={{ height: '1px', background: 'var(--border-gold)', margin: '20px 0' }} />
              <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: '0.92rem', marginBottom: '30px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: 1.7 }}>
                Talabalarimiz uchun xalqaro tanlovlar va malaka oshirish dasturlari e'lon qilindi.
              </p>
              <Link to="/yangiliklar" style={{
                color: 'var(--gold)',
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '3px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                BATAFSIL MA'LUMOT <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
