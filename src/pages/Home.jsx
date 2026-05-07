import { Link } from 'react-router-dom';
import { Building2, Users, UserPlus, Calendar, FileText, ArrowRight, Radio } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useTranslation();

  const LATEST_NEWS = [
    { id: 1, cat: t('home.news_categories.events'),       title: t('home.news_items.n1') },
    { id: 2, cat: t('home.news_categories.education'),    title: t('home.news_items.n2') },
    { id: 3, cat: t('home.news_categories.awards'),       title: t('home.news_items.n3') },
    { id: 4, cat: t('home.news_categories.international'),title: t('home.news_items.n4') },
    { id: 5, cat: t('home.news_categories.events'),       title: t('home.news_items.n5') },
  ];

  const STATS = [
    { num: '1936',  label: t('home.stats.sinceYear') },
    { num: '5000+', label: t('home.stats.graduates') },
    { num: '48',    label: t('home.stats.departments') },
    { num: '120+',  label: t('home.stats.partners') },
  ];

  const QUICK_LINKS = [
    { icon: Building2, label: t('home.quickLinks.tuzilma.label'),       sub: t('home.quickLinks.tuzilma.sub'),       to: '/tuzilma' },
    { icon: Users,     label: t('home.quickLinks.rahbariyat.label'),    sub: t('home.quickLinks.rahbariyat.sub'),    to: '/rahbariyat' },
    { icon: UserPlus,  label: t('home.quickLinks.abituriyentlar.label'),sub: t('home.quickLinks.abituriyentlar.sub'),to: '/abituriyentlar' },
    { icon: Calendar,  label: t('home.quickLinks.taqvim.label'),        sub: t('home.quickLinks.taqvim.sub'),        to: '/taqvim' },
    { icon: FileText,  label: t('home.quickLinks.hujjatlar.label'),     sub: t('home.quickLinks.hujjatlar.sub'),     to: '/hujjatlar' },
  ];

  const STUDENT_LINKS = [
    t('home.students.links.schedules'),
    t('home.students.links.grants'),
    t('home.students.links.hemis'),
    t('home.students.links.library'),
  ];

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-visual">
          <img src="/3M7A4170.JPG" className="slide active" alt="Konservatoriya" />
          <div className="staff-lines" />
        </div>

        <div className="hero-content">
          <span className="section-tag" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', marginBottom: '18px' }}>
            {t('home.hero.eyebrow')}
          </span>

          <h1>
            {t('home.hero.title1')}<br />
            {t('home.hero.title2')} <span>{t('home.hero.titleEm')}</span>
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
              {t('home.hero.quote')}
            </p>
            <footer style={{
              marginTop: '14px',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '3px',
              color: 'var(--gold)',
              fontWeight: 700,
            }}>
              {t('home.hero.quoteAuthor')}
            </footer>
          </blockquote>

          <div className="hero-year">{t('home.hero.yearLabel')}</div>
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

      {/* ── VIZUAL GALEREYA ───────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">{t('home.gallery.tag')}</span>
            <h2 className="section-title light">
              {t('home.gallery.title1')} <span>{t('home.gallery.titleEm')}</span>
            </h2>
            <div className="ornament" style={{ justifyContent: 'center' }}>
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="reveal home-gallery-grid">
            <div className="gallery-item-home gallery-item-wide-tall">
              <img src="/images/fotohisobot/img3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} alt="G3" />
              <div className="gallery-hover-overlay">{t('home.gallery.photoCaption')}</div>
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
              {t('home.gallery.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── YANGILIKLAR LENTASI ───────────────────────────── */}
      <div className="news-ticker-wrap">
        <div className="news-ticker-label">
          <Radio size={13} strokeWidth={2} className="news-ticker-dot" />
          <span>{t('home.news.latest')}</span>
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
          {t('home.news.readMore')} <ArrowRight size={13} strokeWidth={2} />
        </Link>
      </div>

      {/* ── TEZKOR HAVOLALAR ─────────────────────── */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--light-border)', borderBottom: '1px solid var(--light-border)', padding: '100px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>{t('home.quickLinks.tag')}</span>
            <h2 className="section-title">
              {t('home.quickLinks.title1')} <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>{t('home.quickLinks.titleEm')}</span>
            </h2>
            <div className="ornament" style={{ justifyContent: 'center' }}>
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="reveal quick-links-grid">
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
              <span className="section-tag light">{t('home.students.tag')}</span>
              <h2 className="section-title light">
                {t('home.students.title1')} <span>{t('home.students.titleEm')}</span>
              </h2>
              <div className="ornament" style={{ maxWidth: '280px' }}>
                <div className="ornament-diamond" />
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.6)', marginBottom: '40px', maxWidth: '460px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: 1.8 }}>
                {t('home.students.desc')}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border-subtle)', marginBottom: '40px', maxWidth: '460px' }}>
                {STUDENT_LINKS.map((label) => (
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
              <button className="btn-outline light">{t('home.students.portalEnter')}</button>
            </div>

            {/* Oʻng — Shisha karta */}
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
              <span className="section-tag" style={{ marginBottom: '16px' }}>{t('home.students.attentionTag')}</span>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: 300, marginBottom: '16px' }}>
                {t('home.students.stepCardTitle1')} <span>{t('home.students.stepCardTitleEm')}</span>
              </h3>
              <div style={{ height: '1px', background: 'var(--border-gold)', margin: '20px 0' }} />
              <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: '0.92rem', marginBottom: '30px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: 1.7 }}>
                {t('home.students.stepCardDesc')}
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
                {t('home.students.readMore')} <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
