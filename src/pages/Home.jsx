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
 
      {/* ── VIZUAL GALEREYA (YANGI) ───────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Fotohisobot</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginTop: '10px' }}>
              Konservatoriya <span>Hayotidan</span>
            </h2>
            <div className="ornament" style={{ justifyContent: 'center' }}>
              <div className="ornament-diamond" />
            </div>
          </div>
          
          <div className="reveal" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gridTemplateRows: 'repeat(2, 280px)',
            gap: '12px' 
          }}>
            <div style={{ gridColumn: 'span 2', gridRow: 'span 2', position: 'relative', overflow: 'hidden' }} className="gallery-item-home">
              <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G1" />
              <div className="gallery-hover-overlay">Konsert zalidagi jarayon</div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }} className="gallery-item-home">
              <img src="https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G2" />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }} className="gallery-item-home">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G3" />
            </div>
            <div style={{ gridColumn: 'span 2', position: 'relative', overflow: 'hidden' }} className="gallery-item-home">
              <img src="https://images.unsplash.com/photo-1523240715632-d984723145e1?q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G4" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/fotogalereya" className="btn-outline light" style={{ textDecoration: 'none', display: 'inline-block' }}>
              BARCHA RASMLARNI KO'RISH
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEZKOR HAVOLALAR 3D GRID ─────────────────────── */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--light-border)', borderBottom: '1px solid var(--light-border)', padding: '100px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>Navigatsiya</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.2rem',
              fontWeight: 300,
              color: 'var(--navy)',
              marginTop: '10px',
            }}>
              Tezkor <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>Yo'nalishlar</span>
            </h2>
            <div className="ornament" style={{ justifyContent: 'center' }}>
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {QUICK_LINKS.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                data-reveal-index={i}
                style={{
                  display: 'block',
                  background: 'var(--white)',
                  border: '1px solid var(--light-border)',
                  padding: '44px 36px',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--navy)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,26,56,0.18)';
                  e.currentTarget.style.borderColor = 'var(--navy)';
                  e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = '#fff');
                  e.currentTarget.querySelectorAll('[data-sub]').forEach(el => el.style.color = 'rgba(208,208,224,0.7)');
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--light-border)';
                  e.currentTarget.querySelectorAll('[data-title]').forEach(el => el.style.color = 'var(--navy)');
                  e.currentTarget.querySelectorAll('[data-sub]').forEach(el => el.style.color = '#888');
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--gold)',
                  marginBottom: '18px',
                  lineHeight: 1,
                  fontFamily: 'serif',
                }}>
                  {item.icon}
                </div>
                <h3 data-title="" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  transition: 'color 0.3s',
                }}>
                  {item.label}
                </h3>
                <p data-sub="" style={{
                  fontSize: '0.78rem',
                  color: '#888',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                }}>
                  {item.sub}
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '32px',
                  color: 'var(--gold)',
                  fontSize: '1.1rem',
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
