import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, Clock, Search, FilterX, Ticket } from 'lucide-react';
import PageHero from '../components/PageHero';
import DatePicker from '../components/DatePicker';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tadbirlar taqvimi' },
];

const HALLS = ['Barchasi', 'Katta Zal', 'Organ Zali', 'Kichik Zal', 'Kamer Zali'];

const ITICKET_URL = 'https://iticket.uz/';

const TICKET_IMAGES = [
  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465225314224-587cd83d322b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546528377-9049abc44d24?q=80&w=1200&auto=format&fit=crop',
];

const EVENTS = [
  {
    id: 1,
    month: 'Apr',
    day: '14',
    weekday: 'Sesh',
    fullDate: '2026-04-14',
    title: 'Aziz Ismatov, Viola Mahorat Darsi',
    venue: 'Organ Zali',
    tags: 'Bepul, Musiqa, Master-klass',
    time: '17:00 | Bepul',
    free: true,
  },
  {
    id: 2,
    month: 'Apr',
    day: '20',
    weekday: 'Dush',
    fullDate: '2026-04-20',
    title: 'Simfonik Orkestr: Bahor Ijrosi',
    venue: 'Katta Zal',
    tags: "Konsert, Simfonik, To'lovli",
    time: '18:30 | 50,000 UZS',
  },
  {
    id: 3,
    month: 'May',
    day: '02',
    weekday: 'Shan',
    fullDate: '2026-05-02',
    title: "O'zbek Mumtoz Musiqasi Kechasi — Maqom Sadolari",
    venue: 'Kichik Zal',
    tags: "Konsert, Mumtoz musiqa, To'lovli",
    time: '18:30 | 100,000 UZS',
  },
  {
    id: 4,
    month: 'May',
    day: '08',
    weekday: 'Juma',
    fullDate: '2026-05-08',
    title: "G'olibaning ovozi — Vokal Tanlov G'oliblari",
    venue: 'Kamer Zali',
    tags: "Konsert, Vokal, To'lovli",
    time: '19:00 | 70,000 UZS',
  },
  {
    id: 5,
    month: 'May',
    day: '15',
    weekday: 'Juma',
    fullDate: '2026-05-15',
    title: 'Bahor Simfoniyasi — Mavsum Ochilishi',
    venue: 'Katta Zal',
    tags: "Konsert, Simfonik, Premyera, To'lovli",
    time: '19:00 | 150,000 UZS',
  },
  {
    id: 6,
    month: 'May',
    day: '20',
    weekday: 'Chor',
    fullDate: '2026-05-20',
    title: 'Bach va Organ Musiqasi Tunlari',
    venue: 'Organ Zali',
    tags: "Konsert, Organ, Klassika, To'lovli",
    time: '19:00 | 90,000 UZS',
  },
  {
    id: 7,
    month: 'May',
    day: '24',
    weekday: 'Yaks',
    fullDate: '2026-05-24',
    title: "Yosh Pianino Ijrochilari Sahnasi",
    venue: 'Kichik Zal',
    tags: 'Bepul, Konsert, Talabalar',
    time: '17:00 | Bepul',
    free: true,
  },
  {
    id: 8,
    month: 'May',
    day: '28',
    weekday: 'Pay',
    fullDate: '2026-05-28',
    title: "Xalqaro hamkorlik kechasi — Parij konservatoriyasi tashrif konserti",
    venue: 'Katta Zal',
    tags: "Konsert, Xalqaro, To'lovli",
    time: '19:30 | 180,000 UZS',
  },
  {
    id: 9,
    month: 'Iyn',
    day: '05',
    weekday: 'Juma',
    fullDate: '2026-06-05',
    title: 'Yosh Ijodkorlar Kechasi — Bitiruv Konserti',
    venue: 'Katta Zal',
    tags: "Konsert, Bitiruv, To'lovli",
    time: '19:00 | 80,000 UZS',
  },
  {
    id: 10,
    month: 'Iyn',
    day: '10',
    weekday: 'Chor',
    fullDate: '2026-06-10',
    title: 'Kamerali Ansambl: Mozart va Beethoven',
    venue: 'Kamer Zali',
    tags: "Konsert, Kamerali, Klassika, To'lovli",
    time: '19:00 | 130,000 UZS',
  },
  {
    id: 11,
    month: 'Iyn',
    day: '12',
    weekday: 'Juma',
    fullDate: '2026-06-12',
    title: "Xalqaro Tanlov G'oliblari — Gala Konsert",
    venue: 'Katta Zal',
    tags: "Konsert, Gala, Premyera, To'lovli",
    time: '19:30 | 200,000 UZS',
  },
  {
    id: 12,
    month: 'Iyn',
    day: '18',
    weekday: 'Pay',
    fullDate: '2026-06-18',
    title: "Konditsiyali ovoz: Akademik Xor Konserti",
    venue: 'Katta Zal',
    tags: "Konsert, Xor, To'lovli",
    time: '18:00 | 90,000 UZS',
  },
  {
    id: 13,
    month: 'Iyn',
    day: '20',
    weekday: 'Shan',
    fullDate: '2026-06-20',
    title: 'Chopin va Liszt — Pianino Kechasi',
    venue: 'Kichik Zal',
    tags: "Konsert, Pianino, Klassika, To'lovli",
    time: '19:00 | 120,000 UZS',
  },
  {
    id: 14,
    month: 'Iyn',
    day: '25',
    weekday: 'Pay',
    fullDate: '2026-06-25',
    title: "Talabalar konferensiyasi — Musiqashunoslik o'qishlari",
    venue: 'Kamer Zali',
    tags: "Bepul, Ilmiy, Talabalar",
    time: '14:00 | Bepul',
    free: true,
  },
  {
    id: 15,
    month: 'Iyn',
    day: '28',
    weekday: 'Yaks',
    fullDate: '2026-06-28',
    title: "Layli va Majnun — Opera Kechasi",
    venue: 'Katta Zal',
    tags: "Opera, Premyera, To'lovli",
    time: '19:30 | 180,000 UZS',
  },
  {
    id: 16,
    month: 'Iyl',
    day: '04',
    weekday: 'Shan',
    fullDate: '2026-07-04',
    title: 'Akademik Xor — Sharq Sadosi',
    venue: 'Katta Zal',
    tags: "Konsert, Xor, Milliy, To'lovli",
    time: '18:00 | 90,000 UZS',
  },
  {
    id: 17,
    month: 'Iyl',
    day: '08',
    weekday: 'Chor',
    fullDate: '2026-07-08',
    title: "Saksofon va Klarnet — Pufak cholg'ulari kechasi",
    venue: 'Kichik Zal',
    tags: "Konsert, Pufak, To'lovli",
    time: '19:00 | 95,000 UZS',
  },
  {
    id: 18,
    month: 'Iyl',
    day: '11',
    weekday: 'Shan',
    fullDate: '2026-07-11',
    title: 'Jazz Oqshomi — Konservatoriya Jazz Kvinteti',
    venue: 'Kichik Zal',
    tags: "Konsert, Jazz, To'lovli",
    time: '20:00 | 110,000 UZS',
  },
  {
    id: 19,
    month: 'Iyl',
    day: '15',
    weekday: 'Chor',
    fullDate: '2026-07-15',
    title: 'Skripka Mahorat Darsi — Prof. Ravshan Mansurov',
    venue: 'Organ Zali',
    tags: "Bepul, Master-klass, Skripka",
    time: '15:00 | Bepul',
    free: true,
  },
  {
    id: 20,
    month: 'Iyl',
    day: '18',
    weekday: 'Shan',
    fullDate: '2026-07-18',
    title: "Mozart Rekviyemi — Xor va Orkestr ijrosi",
    venue: 'Katta Zal',
    tags: "Konsert, Klassika, Premyera, To'lovli",
    time: '19:00 | 160,000 UZS',
  },
  {
    id: 21,
    month: 'Iyl',
    day: '22',
    weekday: 'Chor',
    fullDate: '2026-07-22',
    title: "Etnomusiqa kechasi — Markaziy Osiyo cholg'ulari",
    venue: 'Kichik Zal',
    tags: "Konsert, Etnik, Milliy, To'lovli",
    time: '18:30 | 80,000 UZS',
  },
  {
    id: 22,
    month: 'Iyl',
    day: '25',
    weekday: 'Shan',
    fullDate: '2026-07-25',
    title: 'Yakuniy Gala — Bahor-Yoz Mavsumi 2026',
    venue: 'Katta Zal',
    tags: "Konsert, Gala, Mavsum yopilishi, To'lovli",
    time: '19:30 | 250,000 UZS',
  },
  {
    id: 23,
    month: 'Sen',
    day: '03',
    weekday: 'Pay',
    fullDate: '2026-09-03',
    title: "Yangi o'quv yili tantanali ochilish marosimi",
    venue: 'Katta Zal',
    tags: 'Bepul, Tantana, Talabalar',
    time: '10:00 | Bepul',
    free: true,
  },
  {
    id: 24,
    month: 'Sen',
    day: '12',
    weekday: 'Shan',
    fullDate: '2026-09-12',
    title: "Mustaqillik kuniga bag'ishlangan tantanali konsert",
    venue: 'Katta Zal',
    tags: "Konsert, Bayram, Milliy, To'lovli",
    time: '19:00 | 100,000 UZS',
  },
  {
    id: 25,
    month: 'Okt',
    day: '01',
    weekday: 'Pay',
    fullDate: '2026-10-01',
    title: "Ustoz va Murabbiy kuni — Professor-o'qituvchilar konserti",
    venue: 'Katta Zal',
    tags: 'Bepul, Bayram, Tantana',
    time: '18:00 | Bepul',
    free: true,
  },
];

export default function Taqvim() {
  const [selectedHall, setSelectedHall] = useState('Barchasi');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredEvents = useMemo(() => {
    return EVENTS.filter(event => {
      const matchesHall = selectedHall === 'Barchasi' || event.venue === selectedHall;
      const matchesDate = !selectedDate || event.fullDate === selectedDate;
      return matchesHall && matchesDate;
    });
  }, [selectedHall, selectedDate]);

  return (
    <main className="content-wrapper">
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

      {/* ── TADBIRLAR RO'YXATI ──────────────────────────── */}
      <div className="events-list-v2" style={{ background: 'var(--bg-deep)', padding: '70px 0 90px' }}>
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div className="ticket-grid">
              {filteredEvents.map((event) => {
                const [timeOnly, priceText] = event.time.split('|').map(s => s.trim());
                const tagList = event.tags.split(',').map(t => t.trim()).filter(Boolean);
                const imgUrl = TICKET_IMAGES[(event.id - 1) % TICKET_IMAGES.length];
                return (
                  <article key={event.id} className="ticket-card">
                    <div className="ticket-poster">
                      <img src={imgUrl} alt={event.title} />
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
                            href={ITICKET_URL}
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
                Ushbu parametrlar bo'yicha hech qanday tadbir topilmadi.
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
