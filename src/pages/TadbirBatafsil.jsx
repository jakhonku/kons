import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Tag, Ticket, ArrowLeft, ArrowRight, Music2, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import { EVENTS, ITICKET_URL } from '../data/events';

export default function TadbirBatafsil() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idNum = parseInt(id, 10);
  const eventIndex = EVENTS.findIndex(e => e.id === idNum);
  const event = EVENTS[eventIndex];

  if (!event) {
    return (
      <main className="content-wrapper">
        <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--navy)', fontSize: '2rem', marginBottom: '16px' }}>Tadbir topilmadi</h2>
          <Link to="/taqvim" className="btn-outline">← Taqvimga qaytish</Link>
        </div>
      </main>
    );
  }

  const [timeOnly, priceText] = event.time.split('|').map(s => s.trim());
  const tagList = event.tags.split(',').map(t => t.trim()).filter(Boolean);
  const prevEvent = eventIndex > 0 ? EVENTS[eventIndex - 1] : null;
  const nextEvent = eventIndex < EVENTS.length - 1 ? EVENTS[eventIndex + 1] : null;

  const BREADCRUMBS = [
    { label: 'Bosh sahifa', to: '/' },
    { label: 'Tadbirlar taqvimi', to: '/taqvim' },
    { label: event.title },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Tadbir batafsil"
        title={event.title}
        emphasis=""
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── HERO POSTER + KEY INFO ──────────────────────── */}
      <section className="tadbir-hero">
        <div className="container">
          <div className="tadbir-hero-grid">

            {/* Poster */}
            <div className="tadbir-poster-wrap reveal reveal-left">
              <div className="tadbir-poster">
                <img src={event.img} alt={event.title} />
                <div className="tadbir-poster-grad" />
                <div className="tadbir-poster-date">
                  <span className="tadbir-poster-date-month">{event.month}</span>
                  <span className="tadbir-poster-date-day">{event.day}</span>
                  <span className="tadbir-poster-date-week">{event.weekday}</span>
                </div>
                {event.free && <span className="tadbir-poster-free">BEPUL</span>}
                <div className="tadbir-poster-tags">
                  {tagList.slice(0, 3).map((t, i) => (
                    <span key={i} className="tadbir-poster-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Info card */}
            <aside className="tadbir-info-card reveal reveal-right">
              <span className="section-tag" style={{ color: 'var(--gold)' }}>Tadbir ma'lumotlari</span>
              <h2 className="tadbir-info-title">{event.title}</h2>
              <p className="tadbir-info-artist"><User size={14} strokeWidth={1.8} /> {event.artist}</p>

              <div className="tadbir-info-rows">
                <div className="tadbir-info-row">
                  <Calendar size={18} strokeWidth={1.6} />
                  <div>
                    <span className="tadbir-info-label">Sana</span>
                    <span className="tadbir-info-val">{event.day} {event.month}, {event.weekday}</span>
                  </div>
                </div>
                <div className="tadbir-info-row">
                  <Clock size={18} strokeWidth={1.6} />
                  <div>
                    <span className="tadbir-info-label">Vaqt</span>
                    <span className="tadbir-info-val">{timeOnly}</span>
                  </div>
                </div>
                <div className="tadbir-info-row">
                  <MapPin size={18} strokeWidth={1.6} />
                  <div>
                    <span className="tadbir-info-label">Manzil</span>
                    <span className="tadbir-info-val">{event.venue}</span>
                    <span className="tadbir-info-sub">Oʻzbekiston Davlat Konservatoriyasi</span>
                  </div>
                </div>
                <div className="tadbir-info-row">
                  <Tag size={18} strokeWidth={1.6} />
                  <div>
                    <span className="tadbir-info-label">Narxi</span>
                    <span className={`tadbir-info-val ${event.free ? 'is-free' : 'is-price'}`}>
                      {priceText || 'Bepul'}
                    </span>
                  </div>
                </div>
              </div>

              {!event.free ? (
                <a href={ITICKET_URL} target="_blank" rel="noopener noreferrer" className="tadbir-buy-btn">
                  <Ticket size={16} strokeWidth={2} />
                  BILET OLISH
                </a>
              ) : (
                <div className="tadbir-free-banner">
                  <Ticket size={16} strokeWidth={2} />
                  KIRISH BEPUL
                </div>
              )}

              <p className="tadbir-info-note">
                Biletlar <strong>iticket.uz</strong> operatori orqali sotiladi. Tadbir kuni kassada ham mavjud.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + PROGRAM ──────────────────────── */}
      <section className="tadbir-content">
        <div className="container">
          <div className="tadbir-content-grid">

            {/* Description */}
            <div className="reveal">
              <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>Tadbir haqida</span>
              <h3 className="tadbir-section-h">Bayoni</h3>
              <div className="ornament" style={{ margin: '12px 0 24px' }}>
                <div className="ornament-diamond" />
              </div>
              <p className="tadbir-desc">{event.desc}</p>
            </div>

            {/* Program */}
            {event.program && event.program.length > 0 && (
              <div className="reveal reveal-d2">
                <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>Konsert dasturi</span>
                <h3 className="tadbir-section-h">Programma</h3>
                <div className="ornament" style={{ margin: '12px 0 24px' }}>
                  <div className="ornament-diamond" />
                </div>
                <ol className="tadbir-program">
                  {event.program.map((p, i) => (
                    <li key={i}>
                      <span className="tadbir-program-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="tadbir-program-text"><Music2 size={14} strokeWidth={1.8} /> {p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ──────────────────────── */}
      <section className="tadbir-nav">
        <div className="container">
          <div className="tadbir-nav-row">
            {prevEvent ? (
              <button type="button" className="tadbir-nav-btn" onClick={() => navigate(`/taqvim/${prevEvent.id}`)}>
                <ArrowLeft size={16} strokeWidth={1.8} />
                <div>
                  <span className="tadbir-nav-label">Oldingi tadbir</span>
                  <span className="tadbir-nav-title">{prevEvent.title}</span>
                </div>
              </button>
            ) : <span />}

            <Link to="/taqvim" className="tadbir-nav-back">
              BARCHA TADBIRLAR
            </Link>

            {nextEvent ? (
              <button type="button" className="tadbir-nav-btn tadbir-nav-btn-r" onClick={() => navigate(`/taqvim/${nextEvent.id}`)}>
                <div>
                  <span className="tadbir-nav-label">Keyingi tadbir</span>
                  <span className="tadbir-nav-title">{nextEvent.title}</span>
                </div>
                <ArrowRight size={16} strokeWidth={1.8} />
              </button>
            ) : <span />}
          </div>
        </div>
      </section>
    </main>
  );
}
