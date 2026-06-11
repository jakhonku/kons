import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, UserPlus, Calendar, FileText, ArrowRight, Radio, Send, ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import { useAdminNews, useAdminTicker, useAdminTelegram } from '../hooks/useAdminStorage';
import TelegramPostEmbed from '../components/TelegramPostEmbed';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Seo from '../components/Seo';

export default function Home() {
  const { t, lang } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 991px)');
  const { items: adminNews, loading } = useAdminNews();
  const { items: tgPosts, loading: tgLoading } = useAdminTelegram();
  const [newsIndex, setNewsIndex] = useState(0);

  const displayNews = useMemo(() => {
    return adminNews.map(n => {
      const isRu = lang === 'ru';
      const isEn = lang === 'en';
      
      const title = (isRu && n.title_ru) ? n.title_ru : (isEn && n.title_en) ? n.title_en : n.title;
      const excerpt = (isRu && n.excerpt_ru) ? n.excerpt_ru : (isEn && n.excerpt_en) ? n.excerpt_en : n.excerpt;
      
      let mainImg = (Array.isArray(n.images) ? n.images[0] : n.image);
      if (isRu && Array.isArray(n.images_ru) && n.images_ru.length > 0) mainImg = n.images_ru[0];
      else if (isEn && Array.isArray(n.images_en) && n.images_en.length > 0) mainImg = n.images_en[0];

      return {
        id: String(n.id),
        cat: n.category || 'Voqealar',
        title: title,
        date: n.date || n.created_at,
        excerpt: excerpt || '',
        image: mainImg || null,
        views: n.views || 0,
      };
    }).slice(0, 5);
  }, [adminNews, lang]);

  // "Konservatoriya hayotidan" galereyasi — yangiliklardagi real rasmlar,
  // yetishmasa statik rasm bilan toʻldiriladi (hech qachon boʻsh/buzilmaydi)
  const galleryImages = useMemo(() => {
    const fromNews = [];
    adminNews.forEach((n) => {
      const imgs = Array.isArray(n.images) ? n.images.filter(Boolean) : [];
      if (imgs.length) fromNews.push(...imgs);
      else if (n.image) fromNews.push(n.image);
    });
    const fallback = [
      '/images/fotohisobot/img3.jpg',
      '/images/fotohisobot/img1.jpg',
      '/images/fotohisobot/img2.jpg',
      '/image.png',
    ];
    return fallback.map((fb, i) => fromNews[i] || fb);
  }, [adminNews]);

  useEffect(() => {
    if (displayNews.length <= 1) return;
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % displayNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [displayNews.length]);
  const { items: tickerItems } = useAdminTicker();

  const LATEST_NEWS = tickerItems.map((it) => ({
    id: it.id,
    cat: it.category || 'Yangilik',
    title: it.title,
    link: it.link || '',
  }));

  const STATS = [
    { num: '1936',  label: t('home.stats.sinceYear') },
    { num: '5000+', label: t('home.stats.graduates') },
    { num: '16',    label: t('home.stats.departments') },
    { num: '120+',  label: t('home.stats.partners') },
  ];

  const QUICK_LINKS = [
    { icon: Building2, label: t('home.quickLinks.tuzilma.label'),       sub: t('home.quickLinks.tuzilma.sub'),       to: '/tuzilma' },
    { icon: Users,     label: t('home.quickLinks.rahbariyat.label'),    sub: t('home.quickLinks.rahbariyat.sub'),    to: '/rahbariyat' },
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
      <Seo description="Oʻzbekiston Davlat Konservatoriyasi rasmiy sayti — 1936-yildan buyon faoliyat yuritayotgan yetakchi musiqa taʼlim muassasasi. Qabul, fakultet va kafedralar, yangiliklar va tadbirlar afishasi." />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-visual">
          <img src="/3M7A4170.JPG" className="slide active" alt="Konservatoriya" fetchpriority="high" decoding="async" />
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

          <blockquote className="hero-quote">
            <p className="hero-quote-text">
              {t('home.hero.quote')}
            </p>
            <footer className="hero-quote-author">
              {t('home.hero.quoteAuthor')}
            </footer>
          </blockquote>
        </div>
      </section>


      {/* ── STATS ────────────────────────────────────────── */}
      <div className="stats-row">
        {STATS.map((s, i) => (
          <div key={i} className={`stat-item reveal reveal-d${i + 1}`}>
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
              <img
                src={galleryImages[0]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                alt="G3"
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-hover-overlay">{t('home.gallery.photoCaption')}</div>
            </div>
            <div className="gallery-item-home">
              <img
                src={galleryImages[1]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                alt="G1"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="gallery-item-home">
              <img
                src={galleryImages[2]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                alt="G2"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="gallery-item-home gallery-item-wide">
              <img
                src={galleryImages[3]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                alt="G4"
                loading="lazy"
                decoding="async"
              />
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
      {LATEST_NEWS.length > 0 && (
        <div className="news-ticker-wrap">
          <div className="news-ticker-label">
            <Radio size={13} strokeWidth={2} className="news-ticker-dot" />
            <span>{t('home.news.latest')}</span>
          </div>
          <div className="news-ticker-track-wrap">
            <div className="news-ticker-track">
              {[...LATEST_NEWS, ...LATEST_NEWS].map((item, i) => {
                const inner = (
                  <>
                    <span className="news-ticker-cat">{item.cat}</span>
                    {item.title}
                    <span className="news-ticker-sep">·</span>
                  </>
                );
                if (item.link) {
                  const isExternal = /^https?:\/\//i.test(item.link);
                  return isExternal ? (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="news-ticker-item">{inner}</a>
                  ) : (
                    <Link key={i} to={item.link} className="news-ticker-item">{inner}</Link>
                  );
                }
                return <span key={i} className="news-ticker-item">{inner}</span>;
              })}
            </div>
          </div>
          <Link to="/yangiliklar" className="news-ticker-btn">
            {t('home.news.readMore')} <ArrowRight size={13} strokeWidth={2} />
          </Link>
        </div>
      )}

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

      {/* ── YANGILIKLAR SLIDER SECTION ────────────────────────────── */}
      <section
        className="full-section news-slider-section"
        style={{
          background: "linear-gradient(rgba(7,7,14,0.85), rgba(7,7,14,0.85)), url('https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=2070') center/cover fixed",
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <span className="section-tag light">YANGILIKLAR</span>
            <h2 className="section-title light">Soʻnggi <span>Yangiliklar</span></h2>
            <div className="ornament" style={{ maxWidth: '280px' }}>
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="news-slider-viewport" style={{ position: 'relative', overflow: 'visible', minHeight: isMobile ? '600px' : '500px' }}>
            <AnimatePresence mode="wait">
              {displayNews.length > 0 ? (
                <motion.div
                  key={newsIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="news-slide-content"
                  style={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '0' : '40px', 
                    alignItems: 'stretch',
                    position: 'relative'
                  }}
                >
                  {displayNews[newsIndex].image && displayNews[newsIndex].image !== '/Konservatoriya_logo_white-05.png' && (
                    <div className="news-slide-image-wrap" style={{ 
                      flex: isMobile ? 'none' : '1.5',
                      height: isMobile ? '300px' : '550px',
                      width: '100%',
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                      background: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={displayNews[newsIndex].image}
                        alt={displayNews[newsIndex].title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(7,7,14,0.8))' 
                      }} />
                    </div>
                  )}

                  {/* Matn qismi - Glassmorphism panel */}
                  <div className="news-slide-text-panel" style={{ 
                    flex: '1',
                    background: 'rgba(25, 25, 35, 0.65)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: isMobile ? '30px' : '50px',
                    borderRadius: '12px',
                    marginTop: isMobile ? '-40px' : '40px',
                    marginBottom: isMobile ? '0' : '40px',
                    marginLeft: isMobile ? '20px' : '-80px',
                    marginRight: isMobile ? '20px' : '0',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <span style={{ 
                        background: 'rgba(201,168,76,0.15)', 
                        color: 'var(--gold-light)', 
                        padding: '6px 14px', 
                        fontSize: '0.65rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px',
                        border: '1px solid rgba(201,168,76,0.3)',
                        borderRadius: '4px'
                      }}>
                        {displayNews[newsIndex].cat}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span>{new Date(displayNews[newsIndex].date).toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Eye size={14} /> {displayNews[newsIndex].views || 0}
                        </span>
                      </span>
                    </div>

                    <h3 style={{ 
                      fontSize: isMobile ? '1.5rem' : '2.2rem', 
                      fontFamily: 'var(--font-display)', 
                      fontWeight: 400, 
                      lineHeight: 1.2, 
                      marginBottom: '20px',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.5px'
                    }}>
                      {displayNews[newsIndex].title}
                    </h3>

                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: 'rgba(240,237,232,0.7)', 
                      lineHeight: 1.7, 
                      marginBottom: '35px', 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {displayNews[newsIndex].excerpt}
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                      <Link to={`/yangiliklar/${displayNews[newsIndex].id}`} className="btn-gold" style={{ 
                        padding: '12px 28px',
                        fontSize: '0.75rem',
                        letterSpacing: '2px'
                      }}>
                        BATAFSIL OʻQISH →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '120px 0', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  {loading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                      <div className="loader-spin" style={{ width: '30px', height: '30px', border: '2px solid var(--gold)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                      <span>Yangiliklar yuklanmoqda...</span>
                    </div>
                  ) : 'Hozircha yangiliklar yoʻq'}
                </div>
              )}
            </AnimatePresence>

            {displayNews.length > 1 && (
              <div className="slider-controls" style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '20px', 
                marginTop: isMobile ? '30px' : '0',
                position: isMobile ? 'static' : 'absolute',
                bottom: '-20px',
                right: '0',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setNewsIndex((prev) => (prev - 1 + displayNews.length) % displayNews.length)}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      color: 'white', 
                      width: '48px', 
                      height: '48px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '50%'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={() => setNewsIndex((prev) => (prev + 1) % displayNews.length)}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      color: 'white', 
                      width: '48px', 
                      height: '48px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '50%'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
                
                {!isMobile && (
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '20px' }}>
                    {displayNews.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setNewsIndex(i)}
                        style={{
                          width: i === newsIndex ? '40px' : '10px',
                          height: '4px',
                          background: i === newsIndex ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: '2px'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* ── TELEGRAM FEED ────────────────────────────────────────── */}
      {tgPosts && tgPosts.length > 0 && (
        <section style={{ padding: '100px 0', background: 'var(--white)', borderTop: '1px solid var(--light-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>TELEGRAM</span>
              <h2 className="section-title">Bizning <span>Telegram</span> kanalimiz</h2>
              <div className="ornament" style={{ justifyContent: 'center' }}>
                <div className="ornament-diamond" />
              </div>
            </div>

            <div className="telegram-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {tgPosts.slice(0, isMobile ? 2 : 3).map((post) => (
                <div key={post.id} className="tg-post-card">
                  <TelegramPostEmbed url={post.post_url} caption={post.caption} />
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a 
                href="https://t.me/Ozbekistondavlatkonservatoriyasi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Send size={16} /> TELEGRAM KANALGA OBUNA BOʻLISH
              </a>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
