import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Building2, Users, UserPlus, Calendar, FileText, ArrowRight, Radio, ChevronLeft, ChevronRight, MapPin, Clock, Ticket } from 'lucide-react';

const LATEST_NEWS = [
  { id: 1, cat: 'Voqealar', title: 'Xalqaro Teatr Kuni munosabati bilan tantanali kecha' },
  { id: 2, cat: "Ta'lim", title: "Yangi o'quv dasturlari tasdiqlandi" },
  { id: 3, cat: 'Mukofotlar', title: "Talabamiz xalqaro tanlovi g'olibi bo'ldi" },
  { id: 4, cat: 'Xalqaro', title: "Parij Musiqa Akademiyasi bilan memorandum imzolandi" },
  { id: 5, cat: 'Voqealar', title: "Bahor konsert mavsumi boshlanadi" },
];

const STATS = [
  { num: '1936', label: 'Yildan buyon' },
  { num: '5000+', label: 'Bitiruvchilar' },
  { num: '48', label: 'Kafedra' },
  { num: '120+', label: "Xalqaro hamkor" },
];

const AFISHA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    tag: 'Simfonik orkestr',
    title: 'Bahor simfoniyasi',
    date: '15 May 2026',
    time: '19:00',
    venue: 'Katta zal',
    price: "150 000 so'm",
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop',
    tag: 'Mumtoz musiqa',
    title: "O'zbek mumtoz musiqasi kechasi",
    date: '22 May 2026',
    time: '18:30',
    venue: 'Kichik zal',
    price: "100 000 so'm",
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop',
    tag: 'Bitiruv konserti',
    title: 'Yosh ijodkorlar kechasi',
    date: '5 Iyun 2026',
    time: '19:00',
    venue: 'Katta zal',
    price: "80 000 so'm",
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465225314224-587cd83d322b?q=80&w=1200&auto=format&fit=crop',
    tag: 'Gala konsert',
    title: "Xalqaro tanlov g'oliblari",
    date: '12 Iyun 2026',
    time: '19:30',
    venue: 'Katta zal',
    price: "200 000 so'm",
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Pianino kechasi',
    title: 'Chopin va Liszt kechasi',
    date: '20 Iyun 2026',
    time: '19:00',
    venue: 'Kichik zal',
    price: "120 000 so'm",
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Opera',
    title: "Layli va Majnun — opera kechasi",
    date: '28 Iyun 2026',
    time: '19:30',
    venue: 'Katta zal',
    price: "180 000 so'm",
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1200&auto=format&fit=crop',
    tag: 'Xor konserti',
    title: 'Akademik xor — Sharq sadosi',
    date: '4 Iyul 2026',
    time: '18:00',
    venue: 'Katta zal',
    price: "90 000 so'm",
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop',
    tag: 'Jazz',
    title: 'Jazz oqshomi — Konservatoriya jazz kvinteti',
    date: '11 Iyul 2026',
    time: '20:00',
    venue: 'Kichik zal',
    price: "110 000 so'm",
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop',
    tag: 'Kamerali ansambl',
    title: 'Mozart va Beethoven — kamerali kecha',
    date: '18 Iyul 2026',
    time: '19:00',
    venue: 'Kichik zal',
    price: "130 000 so'm",
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=1200&auto=format&fit=crop',
    tag: 'Mavsum yopilishi',
    title: "Yakuniy gala — Bahor-yoz mavsumi 2026",
    date: '25 Iyul 2026',
    time: '19:30',
    venue: 'Katta zal',
    price: "250 000 so'm",
  },
];

const ITICKET_URL = 'https://iticket.uz/';

const QUICK_LINKS = [
  { icon: History, label: 'Konservatoriya tarixi', sub: '1936-yildan bugun', to: '/tarix' },
  { icon: Building2, label: 'Muassasa tuzilmasi', sub: 'Fakultet va kafedralar', to: '/tuzilma' },
  { icon: Users, label: 'Rahbariyat', sub: 'Rektor va prorektor', to: '/rahbariyat' },
  { icon: UserPlus, label: 'Abituriyentlar', sub: 'Qabul 2026 — Kvota', to: '/abituriyentlar' },
  { icon: Calendar, label: 'Tadbirlar taqvimi', sub: 'Kelgusi konsertlar', to: '/taqvim' },
  { icon: FileText, label: "Me'yoriy hujjatlar", sub: 'PDF, Ustav, Qoidalar', to: '/hujjatlar' },
];

export default function Home() {
  const [afishaIdx, setAfishaIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAfishaIdx((i) => (i + 1) % AFISHA.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const afishaPrev = () => setAfishaIdx((i) => (i - 1 + AFISHA.length) % AFISHA.length);
  const afishaNext = () => setAfishaIdx((i) => (i + 1) % AFISHA.length);
  const current = AFISHA[afishaIdx];

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
            Oʻzbekiston<br />
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

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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

      {/* ── AFISHA / KONSERT E'LONLARI ──────────────────── */}
      <section className="afisha-section">
        <div className="container">
          <div className="afisha-row">

            {/* Chap — matn */}
            <div className="afisha-info reveal reveal-left">
              <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>Afisha</span>
              <h2 className="afisha-heading">
                Yaqinlashayotgan <span>konsertlar</span>
              </h2>
              <div className="ornament">
                <div className="ornament-diamond" />
              </div>
              <p className="afisha-lede">
                Konservatoriya sahnasida bo'lib o'tadigan tadbirlar, simfonik orkestr chiqishlari va xalqaro tanlov g'oliblari konsertlari.
              </p>

              <div className="afisha-counter">
                <span className="afisha-counter-num">{String(afishaIdx + 1).padStart(2, '0')}</span>
                <span className="afisha-counter-sep" />
                <span className="afisha-counter-total">{String(AFISHA.length).padStart(2, '0')}</span>
              </div>

              <div className="afisha-actions">
                <button type="button" className="afisha-arrow" onClick={afishaPrev} aria-label="Oldingi">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button type="button" className="afisha-arrow" onClick={afishaNext} aria-label="Keyingi">
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
                <Link to="/taqvim" className="btn-outline" style={{ marginLeft: '12px', textDecoration: 'none' }}>
                  BARCHA TADBIRLAR
                </Link>
              </div>
            </div>

            {/* O'ng — afisha karuseli */}
            <div className="afisha-carousel reveal reveal-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="afisha-poster"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={current.image} alt={current.title} />
                  <div className="afisha-poster-grad" />
                  <div className="afisha-poster-meta">
                    <span className="afisha-poster-tag">{current.tag}</span>
                    <h3>{current.title}</h3>
                    <div className="afisha-poster-info">
                      <span><Calendar size={13} strokeWidth={1.7} /> {current.date}</span>
                      <span><Clock size={13} strokeWidth={1.7} /> {current.time}</span>
                      <span><MapPin size={13} strokeWidth={1.7} /> {current.venue}</span>
                    </div>
                    <div className="afisha-poster-cta">
                      <span className="afisha-poster-price">{current.price}</span>
                      <a
                        href={ITICKET_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="afisha-ticket-btn"
                      >
                        <Ticket size={15} strokeWidth={1.8} />
                        BILET OLISH
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="afisha-dots">
                {AFISHA.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`afisha-dot ${i === afishaIdx ? 'is-active' : ''}`}
                    onClick={() => setAfishaIdx(i)}
                    aria-label={`Afisha ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
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

          <div className="reveal home-gallery-grid">
            <div className="gallery-item-home gallery-item-wide-tall">
              <img src="/images/fotohisobot/img3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G3" />
              <div className="gallery-hover-overlay">Simfonik orkestr konserti</div>
            </div>
            <div className="gallery-item-home">
              <img src="/images/fotohisobot/img1.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G1" />
            </div>
            <div className="gallery-item-home">
              <img src="/images/fotohisobot/img2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G2" />
            </div>
            <div className="gallery-item-home gallery-item-wide">
              <img src="/image.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G4" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/fotogalereya" className="btn-outline light" style={{ textDecoration: 'none', display: 'inline-block' }}>
              BARCHA RASMLARNI KO'RISH
            </Link>
          </div>
        </div>
      </section>

      {/* ── YANGILIKLAR LENTASI ───────────────────────────── */}
      <div className="news-ticker-wrap">
        <div className="news-ticker-label">
          <Radio size={13} strokeWidth={2} className="news-ticker-dot" />
          <span>So'nggi yangiliklar</span>
        </div>
        <div className="news-ticker-track-wrap">
          <div className="news-ticker-track">
            {[...LATEST_NEWS, ...LATEST_NEWS].map((item, i) => (
              <span key={i} className="news-ticker-item">
                <span className="news-ticker-cat">{item.cat}</span>
                {item.title}
                <span className="news-ticker-sep">·</span>
              </span>
            ))}
          </div>
        </div>
        <Link to="/yangiliklar" className="news-ticker-btn">
          Batafsil <ArrowRight size={13} strokeWidth={2} />
        </Link>
      </div>

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

          <div className="reveal quick-links-grid" style={{
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
                  color: 'var(--gold)',
                  marginBottom: '18px',
                  lineHeight: 1,
                }}>
                  <item.icon size={32} strokeWidth={1.5} />
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
          <div className="home-talabalar-row">

            {/* Chap matn */}
            <div style={{ flex: 1, color: 'var(--text-primary)', minWidth: 0 }}>
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
            <div className="home-talabalar-card" style={{
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
