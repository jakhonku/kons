import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

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
    desc: "O'zbekiston Davlat Konservatoriyasining ko'p yillik tajribaga ega o'qituvchisi Aziz Ismatov tomonidan viola cholg'usi ijrochilari uchun mahorat darsi tashkil etilmoqda. Darsda texnik mahorat, asar talqini va sahna madaniyati masalalari ko'rib chiqiladi.",
    img: 'https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=1200',
    ticketUrl: 'https://iticket.uz/'
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
    desc: "Bahorning eng go'zal taronalari simfonik orkestr ijrosida. Dasturda jahon va o'zbek klassik kompozitorlarining sara asarlari o'rin olgan. Dirijyor: Xalqaro tanlovlar g'olibi.",
    img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200',
    ticketUrl: 'https://iticket.uz/'
  },
];

export default function TadbirBatafsil() {
  const { id } = useParams();
  const event = EVENTS.find(e => e.id === parseInt(id));

  if (!event) return <div className="container">Tadbir topilmadi</div>;

  const BREADCRUMBS = [
    { label: 'Bosh sahifa', to: '/' },
    { label: 'Tadbirlar taqvimi', to: '/taqvim' },
    { label: event.title },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={event.tags}
        title={event.title}
        emphasis=""
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '60px', padding: '60px 0' }}>
          
          {/* Chap qism: Rasm va Tavsif */}
          <div>
            <div style={{ width: '100%', height: '450px', overflow: 'hidden', borderRadius: '4px', marginBottom: '40px', border: '1px solid var(--border-subtle)' }}>
              <img src={event.img} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--navy)', marginBottom: '24px' }}>
              Tadbir <span>Haqida</span>
            </h2>
            <div className="ornament" style={{ marginBottom: '30px' }}>
              <div className="ornament-diamond" />
            </div>
            
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: '1.8', color: '#111', fontStyle: 'italic', fontWeight: 500 }}>
              {event.desc}
            </p>
          </div>

          {/* O'ng qism: Ma'lumotlar va Chipta */}
          <aside>
            <div style={{ background: 'var(--navy)', color: 'white', padding: '40px', borderRadius: '4px', position: 'sticky', top: '120px' }}>
              <div style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Sana va Vaqt</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>{event.day} {event.month}, {event.weekday}</div>
                <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>{event.time.split('|')[0]}</div>
              </div>

              <div style={{ marginBottom: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Manzil / Zal</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>{event.venue}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>O'zbekiston Davlat Konservatoriyasi binosi</div>
              </div>

              <div style={{ marginBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Narxi</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold-light)' }}>{event.time.split('|')[1] || 'Bepul'}</div>
              </div>

              <a 
                href={event.ticketUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline light" 
                style={{ width: '100%', textAlign: 'center', background: 'var(--gold)', color: 'var(--bg-deep)', border: 'none', fontWeight: 700 }}
              >
                BILET OLISH
              </a>

              <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.75rem', opacity: 0.6 }}>
                Biletlar iticket.uz operatori orqali sotiladi
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}
