import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tadbirlar taqvimi' },
];

const HIGHLIGHTS = [
  { title: 'Simfonik Orkestr: Bahor Ohanglari', date: 'Dushanba, 20 Aprel, 2026, 18:30', venue: 'Katta zal' },
  { title: 'Fortepiano Kechasi: Chopin va Liszt', date: 'Seshanba, 21 Aprel, 2026, 19:00', venue: 'Kichik zal' },
  { title: 'Opera Studiyasi Namoyishi', date: 'Chorshanba, 22 Aprel, 2026, 18:00', venue: 'Organ zali' },
];

const EVENTS = [
  {
    id: 1,
    month: 'Apr',
    day: '14',
    weekday: 'Sesh',
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
    title: 'Simfonik Orkestr: Bahor Ijrosi',
    venue: 'Katta Zal',
    tags: 'Konsert, Simfonik, To\'lovli',
    time: '18:30 | 50,000 UZS',
  },
];

export default function Taqvim() {
  return (
    <main className="content-wrapper">
      <div className="calendar-highlight-bar">
        <div className="container" style={{ display: 'flex', gap: '40px' }}>
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="highlight-item">
              <h4>{item.title}</h4>
              <div className="date">{item.date}</div>
              <div className="loc">{item.venue}</div>
            </div>
          ))}
        </div>
      </div>

      <PageHero
        tag="Axborot xizmati"
        title="Tadbirlar"
        emphasis="Taqvimi"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="filter-section">
        <div className="container">
          <div className="filter-grid">
            <div className="filter-group">
              <label>Kimdan:</label>
              <input type="text" defaultValue="Hozir" placeholder="Hozir" />
            </div>
            <div className="filter-group">
              <label>Kimga:</label>
              <input type="date" />
            </div>
            <div className="filter-group">
              <label>Fakultet:</label>
              <select>
                <option>- Tanlang -</option>
                <option>Akademik xonandalik</option>
                <option>Cholg'u ijrochiligi</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Tadbir Turi:</label>
              <select>
                <option>- Tanlang -</option>
                <option>Konsert</option>
                <option>Mahorat darsi</option>
              </select>
            </div>
          </div>
          <div className="search-trigger">
            <button className="btn-search">QIDIRISH</button>
          </div>
        </div>
      </div>

      <div className="events-list">
        {EVENTS.map((event) => (
          <div key={event.id} className="event-row">
            <div className="date-col">
              <div className="month">{event.month}</div>
              <div className="day">{event.day}</div>
              <div className="weekday">{event.weekday}</div>
            </div>
            <div className="details-col">
              <div>
                <div className="event-title">{event.title}</div>
                <div className="event-venue">{event.venue}</div>
              </div>
              <div className="event-tags">{event.tags}</div>
              <div className="event-time">{event.time}</div>
            </div>
            <div className="action-col">
              <a href="#" className="btn-view">BATAFSIL</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
