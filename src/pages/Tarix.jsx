import PageHero from '../components/PageHero';
import { Mic2, Music, Music2, Headphones, GraduationCap } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Tarixi' },
];

const MILESTONES = [
  { year: '1936', title: "Tashkil etildi", desc: "O'zbekiston Davlat Konservatoriyasi O'rta Osiyo hududida birinchi oliy musiqa ta'lim muassasasi sifatida tashkil etildi." },
  { year: '1944', title: "Birinchi bitiruvchilar", desc: "Urush yillarida ta'limni to'xtatmagan holda, konservatoriya birinchi bitiruvchilarini yetishtirdi." },
  { year: '1960', title: "Xalqaro tan olinish", desc: "Konservatoriya bitiruvchilari xalqaro musiqa tanlovlarida birinchi o'rinlarni egallay boshladi." },
  { year: '1991', title: "Mustaqillik davri", desc: "O'zbekiston mustaqillikka erishgach, konservatoriya milliy musiqa an'analarini asrab-avaylash markazi sifatida yangicha rivojlandi." },
  { year: '2010', title: "Modernizatsiya", desc: "Zamonaviy o'quv jihozlari va xalqaro standartlarga mos keladigan yangi o'quv dasturlari joriy etildi." },
  { year: '2024', title: "Digital ta'lim", desc: "Onlayn kutubxona, HEMIS tizimi va raqamli o'quv resurslari to'liq joriy etildi." },
];

const FACULTIES = [
  { name: "Akademik xonandalik", icon: Mic2,         count: "8 kafedra" },
  { name: "Cholg'u ijrochiligi",  icon: Music,        count: "12 kafedra" },
  { name: "Kompozitsiya",          icon: Music2,       count: "6 kafedra" },
  { name: "Xalq cholg'ulari",     icon: Headphones,   count: "7 kafedra" },
  { name: "Musiqa pedagogikasi",  icon: GraduationCap, count: "5 kafedra" },
];

export default function Tarix() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Konservatoriya"
        emphasis="Tarixi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Kirish matni */}
          <article className="article-body">
            <p className="lead">
              O'zbekiston Davlat Konservatoriyasi — 1936-yilda tashkil etilgan, Markaziy Osiyodagi
              eng qadimgi va nufuzli oliy musiqa ta'lim muassasasi.
            </p>
            <p>
              Sakkiz o'ndan ziyod yil mobaynida konservatoriya minglab professional musiqachilarni
              yetishtirdi. Bugungi kunda muassasada 5 ta fakultet, 38 kafedra va 1200 dan ortiq
              talaba ta'lim olmoqda.
            </p>
          </article>

          {/* Tarixiy bosqichlar */}
          <div className="section-divider">
            <h2>Tarixiy bosqichlar</h2>
          </div>

          <div className="timeline-container" style={{ position: 'relative', marginBottom: '60px' }}>
            {/* Vertikal chiziq */}
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(180deg, transparent, var(--gold), transparent)', transform: 'translateX(-50%)' }} />

            {MILESTONES.map((m, i) => (
              <div key={m.year} className="timeline-item" style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '32px',
                position: 'relative',
              }}>
                {/* Yil marker */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '24px',
                  transform: 'translateX(-50%)',
                  width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  border: '3px solid var(--white)',
                  boxShadow: '0 0 0 2px var(--gold)',
                  zIndex: 1,
                }} />
                <div className="timeline-card" style={{
                  width: '44%',
                  background: 'var(--white)',
                  border: '1px solid var(--light-border)',
                  borderLeft: i % 2 === 0 ? '3px solid var(--gold)' : '1px solid var(--light-border)',
                  borderRight: i % 2 !== 0 ? '3px solid var(--gold)' : '1px solid var(--light-border)',
                  padding: '22px 24px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>
                    {m.year}
                  </div>
                  <h4 style={{ color: 'var(--navy)', marginBottom: '8px', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{m.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rasm */}
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
            alt="Konservatoriya binosi"
            className="content-img"
          />

          {/* Fakultetlar */}
          <div className="section-divider">
            <h2>Fakultetlar</h2>
          </div>

          <div className="faculties-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'var(--light-border)', marginBottom: '60px', border: '1px solid var(--light-border)' }}>
            {FACULTIES.map((f) => (
              <div key={f.name} style={{ background: 'var(--white)', padding: '32px 20px', textAlign: 'center', transition: 'background 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.querySelectorAll('*').forEach(el => { el.style.color = el.dataset.keep ? el.style.color : '#fff'; }); }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.querySelectorAll('*').forEach(el => { el.style.color = ''; }); }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '14px', lineHeight: 1, display: 'flex', justifyContent: 'center' }}><f.icon size={32} strokeWidth={1.5} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '6px', lineHeight: 1.3 }}>{f.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '1px' }}>{f.count}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
