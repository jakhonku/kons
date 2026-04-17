import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, Clock, Search, FilterX } from 'lucide-react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tadbirlar taqvimi' },
];

const HALLS = ['Barchasi', 'Katta Zal', 'Organ Zali', 'Kichik Zal', 'Kamer Zali'];

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
  },
  {
    id: 2,
    month: 'Apr',
    day: '20',
    weekday: 'Dush',
    fullDate: '2026-04-20',
    title: 'Simfonik Orkestr: Bahor Ijrosi',
    venue: 'Katta Zal',
    tags: 'Konsert, Simfonik, To\'lovli',
    time: '18:30 | 50,000 UZS',
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
              <label style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.75rem' }}>
                <Calendar size={14} /> SANANI TANLANG:
              </label>
              <input 
                type="date" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-gold)', color: 'white', padding: '12px', borderRadius: '4px', width: '100%', outline: 'none' }}
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
      <div className="events-list-v2" style={{ background: 'var(--bg-deep)', padding: '60px 0' }}>
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-subtle)' }}>
              {filteredEvents.map((event) => (
                <div key={event.id} className="event-item-modern" style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '120px 1fr 200px', 
                  background: 'var(--bg-surface)', 
                  padding: '30px', 
                  alignItems: 'center',
                  transition: '0.3s',
                  borderLeft: '4px solid transparent'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.borderLeftColor = 'var(--gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-surface)'; e.currentTarget.style.borderLeftColor = 'transparent'; }}
                >
                  {/* Sana */}
                  <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-subtle)', paddingRight: '20px' }}>
                    <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{event.month}</div>
                    <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1, margin: '5px 0' }}>{event.day}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '1px' }}>{event.weekday}</div>
                  </div>

                  {/* Ma'lumot */}
                  <div style={{ padding: '0 40px' }}>
                    <Link to={`/taqvim/${event.id}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '12px', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold-light)'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
                        {event.title}
                      </h3>
                    </Link>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'normal' }}>
                        <MapPin size={14} color="var(--gold)" /> {event.venue}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'normal' }}>
                        <Tag size={14} color="var(--gold)" /> {event.tags}
                      </span>
                    </div>
                  </div>

                  {/* Vaqt va Tugma */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', color: 'var(--gold-light)', fontWeight: 600, fontSize: '1rem', marginBottom: '20px' }}>
                      <Clock size={16} /> {event.time}
                    </div>
                    <Link 
                      to={`/taqvim/${event.id}`} 
                      className="btn-outline light" 
                      style={{ padding: '10px 24px', fontSize: '0.7rem', display: 'inline-block' }}
                    >
                      BATAFSIL →
                    </Link>
                  </div>
                </div>
              ))}
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
