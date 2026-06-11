import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, Clock, Search, FilterX, Ticket } from 'lucide-react';
import PageHero from '../components/PageHero';
import DatePicker from '../components/DatePicker';
import { ITICKET_URL } from '../data/events';
import { useAdminPosters } from '../hooks/useAdminStorage';
import { useTranslation } from '../contexts/LanguageContext';
import Seo from '../components/Seo';

const MONTH_ABBR_UZ = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];
const WEEKDAY_ABBR_UZ = ['Yaks', 'Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan'];

function adaptPoster(p, language = 'uz') {
  let month = '', day = '', weekday = '', fullDate = '';
  if (p.date) {
    const d = new Date(p.date);
    if (!Number.isNaN(d.getTime())) {
      month = MONTH_ABBR_UZ[d.getMonth()];
      day = String(d.getDate()).padStart(2, '0');
      weekday = WEEKDAY_ABBR_UZ[d.getDay()];
      fullDate = p.date;
    }
  }
  const formatPrice = (pr) => {
    if (!pr) return '';
    const numeric = pr.toString().replace(/[^0-9]/g, '');
    if (!numeric) return pr;
    const formatted = new Intl.NumberFormat('uz-UZ').format(numeric);
    return `${formatted} UZS`;
  };

  const isRu = language === 'ru';
  const isEn = language === 'en';

  const title = (isRu && p.title_ru) ? p.title_ru : (isEn && p.title_en) ? p.title_en : p.title;
  const venue = (isRu && p.venue_ru) ? p.venue_ru : (isEn && p.venue_en) ? p.venue_en : (p.venue || 'Katta Zal');
  const artist = (isRu && p.artist_ru) ? p.artist_ru : (isEn && p.artist_en) ? p.artist_en : (p.artist || '');
  const desc = (isRu && p.description_ru) ? p.description_ru : (isEn && p.description_en) ? p.description_en : (p.description || '');
  
  let img = p.image;
  if (isRu && p.image_ru) img = p.image_ru;
  else if (isEn && p.image_en) img = p.image_en;

  const priceText = p.free ? 'Bepul' : formatPrice(p.price);
  const time = [p.time, priceText].filter(Boolean).join(' | ');

  return {
    id: `poster-${p.id}`,
    month, day, weekday, fullDate,
    title,
    venue,
    tags: p.tags || '',
    time: time || (p.time || ''),
    free: !!p.free,
    img: img || 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1600',
    desc,
    program: [],
    artist,
    ticket_url: p.ticket_url || '',
  };
}

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tadbirlar taqvimi' },
];

const HALLS = ['Barchasi', 'Katta Zal', 'Organ Zali', 'Kichik Zal', 'Kamer Zali'];


export default function Taqvim() {
  const { lang } = useTranslation();
  const [selectedHall, setSelectedHall] = useState('Barchasi');
  const [selectedDate, setSelectedDate] = useState('');
  const { items: adminPosters } = useAdminPosters();

  const allEvents = useMemo(() => {
    return adminPosters.map(p => adaptPoster(p, lang));
  }, [adminPosters, lang]);

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const matchesHall = selectedHall === 'Barchasi' || event.venue === selectedHall;
      const matchesDate = !selectedDate || event.fullDate === selectedDate;
      return matchesHall && matchesDate;
    });
  }, [allEvents, selectedHall, selectedDate]);

  return (
    <main className="content-wrapper">
      <Seo title="Tadbirlar afishasi" description="Oʻzbekiston Davlat Konservatoriyasi konsertlari va tadbirlari afishasi — sana, joy va chiptalar haqida maʼlumot." />
      <PageHero
        tag="Tadbirlar va Konsertlar"
        title="Badiiy"
        emphasis="Taqvim"
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── FILTRLAR ────────────────────────────────────── */}
      <div className="filter-section" style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-gold)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px', 
            alignItems: 'flex-end' 
          }}>
            <div className="filter-group">
              <label style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.75rem' }}>
                <MapPin size={14} /> ZALNI TANLANG:
              </label>
              <select 
                value={selectedHall} 
                onChange={(e) => setSelectedHall(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-gold)', color: 'white', padding: '14px', borderRadius: '4px', width: '100%', outline: 'none' }}
              >
                {HALLS.map(h => <option key={h} value={h} style={{ background: '#1a1a38' }}>{h}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '1.5px', fontStyle: 'normal' }}>
                <Calendar size={14} /> SANANI TANLANG:
              </label>
              <DatePicker 
                value={selectedDate} 
                onChange={setSelectedDate} 
                placeholder="Sanani tanlang"
              />
            </div>

            <button 
              onClick={() => { setSelectedHall('Barchasi'); setSelectedDate(''); }}
              style={{ 
                height: '48px', 
                background: 'transparent', 
                border: '1px solid rgba(255,255,255,0.1)', 
                color: 'rgba(255,255,255,0.5)', 
                borderRadius: '4px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                transition: '0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <FilterX size={16} /> FILTRNI TOZALASH
            </button>
          </div>
        </div>
      </div>

      {/* ── TADBIRLAR ROʻYXATI ──────────────────────────── */}
      <div className="events-list-v2" style={{ background: 'var(--bg-deep)', padding: '70px 0 90px' }}>
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div className="ticket-grid">
              {filteredEvents.map((event) => {
                const [timeOnly, priceText] = event.time.split('|').map(s => s.trim());
                const tagList = event.tags.split(',').map(t => t.trim()).filter(Boolean);
                return (
                  <article key={event.id} className="ticket-card">
                    <div className="ticket-poster">
                      <img src={event.img} alt={event.title} />
                      <div className="ticket-poster-grad" />
                      <div className="ticket-date-badge">
                        <span className="ticket-date-month">{event.month}</span>
                        <span className="ticket-date-day">{event.day}</span>
                        <span className="ticket-date-week">{event.weekday}</span>
                      </div>
                      {event.free && (
                        <span className="ticket-free-flag">BEPUL</span>
                      )}
                      <div className="ticket-venue-overlay">
                        <MapPin size={13} strokeWidth={1.8} /> {event.venue}
                      </div>
                    </div>

                    <div className="ticket-perforation" aria-hidden="true">
                      <span className="ticket-notch ticket-notch-left" />
                      <span className="ticket-notch ticket-notch-right" />
                    </div>

                    <div className="ticket-body">
                      <Link to={`/taqvim/${event.id}`} className="ticket-title-link">
                        <h3 className="ticket-title">{event.title}</h3>
                      </Link>

                      <div className="ticket-tags">
                        {tagList.slice(0, 3).map((t, i) => (
                          <span key={i} className="ticket-tag">{t}</span>
                        ))}
                      </div>

                      <div className="ticket-meta">
                        <div className="ticket-meta-item">
                          <Clock size={14} strokeWidth={1.8} />
                          <div>
                            <span className="ticket-meta-label">Vaqt</span>
                            <span className="ticket-meta-val">{timeOnly}</span>
                          </div>
                        </div>
                        <div className="ticket-meta-divider" />
                        <div className="ticket-meta-item">
                          <Tag size={14} strokeWidth={1.8} />
                          <div>
                            <span className="ticket-meta-label">Narx</span>
                            <span className={`ticket-meta-val ${event.free ? 'is-free' : ''}`}>{priceText || 'Bepul'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="ticket-actions">
                        <Link to={`/taqvim/${event.id}`} className="ticket-btn-detail">
                          BATAFSIL
                        </Link>
                        {!event.free ? (
                          <a
                            href={event.ticket_url || ITICKET_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ticket-btn-buy"
                          >
                            <Ticket size={14} strokeWidth={2} />
                            BILET OLISH
                          </a>
                        ) : (
                          <span className="ticket-btn-free">
                            <Ticket size={14} strokeWidth={2} />
                            KIRISH BEPUL
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '120px 0', border: '1px dashed var(--border-gold)', borderRadius: '8px' }}>
              <Search size={48} color="var(--gold)" style={{ opacity: 0.3, marginBottom: '20px' }} />
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                Ushbu parametrlar boʻyicha hech qanday tadbir topilmadi.
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
