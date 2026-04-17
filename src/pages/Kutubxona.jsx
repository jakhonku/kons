import PageHero from '../components/PageHero';
import { Music, BookOpen, Video } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Online kutubxona' },
];

const COLLECTIONS = [
  {
    title: 'Nota bazasi',
    count: '12 000+',
    desc: "Klassik va zamonaviy nota yozuvlari, partituralar",
    icon: Music,
    items: ["Barcha davrlar klassik asarlari", "O'zbek milliy musiqa notaglari", "Kamera va orkestr partituralari", "Fortepiano, vokal, torli cholg'ular"],
  },
  {
    title: "O'quv adabiyotlari",
    count: '8 500+',
    desc: "Darsliklar, metodik qo'llanmalar, ilmiy maqolalar",
    icon: BookOpen,
    items: ["Musiqa nazariyasi darsliklar", "Ijrochilik pedagogikasi", "Musiqa tarixi va musiqashunoslik", "Xalqaro ilmiy jurnallar"],
  },
  {
    title: 'Audio va video',
    count: '3 200+',
    desc: "Kontsert yozuvlari, master-klass videolari",
    icon: Video,
    items: ["Konservatoriya kontsertlari arxivi", "Jahon yulduzlari yozuvlari", "O'quv master-klasslar", "Opera va balet postanovkalari"],
  },
];

export default function Kutubxona() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Online"
        emphasis="Kutubxona"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Stats */}
          <div className="page-stats-4" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)', marginBottom: '60px',
          }}>
            {[
              { num: '23 700+', label: 'Jami resurslar' },
              { num: '12 000+', label: 'Nota bazasi' },
              { num: '8 500+', label: 'Kitob va maqolalar' },
              { num: '3 200+', label: 'Audio/video' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Kolleksiyalar</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {COLLECTIONS.map((col) => (
              <div key={col.title} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '32px',
                transition: 'box-shadow 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '12px' }}><col.icon size={32} strokeWidth={1.5} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold-dark)', lineHeight: 1, marginBottom: '8px' }}>
                  {col.count}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{col.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '20px', lineHeight: 1.6 }}>{col.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#555' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Access */}
          <div style={{
            background: 'linear-gradient(110deg, var(--navy) 0%, #1e1e5a 100%)',
            borderTop: '3px solid var(--gold)', padding: '48px 56px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '60px', flexWrap: 'wrap', gap: '24px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Kirish
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', fontWeight: 300, marginBottom: '8px' }}>
                Kutubxonaga <em>kirish</em>
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.65)', fontFamily: 'var(--font-serif)', maxWidth: 400 }}>
                HEMIS tizimidagi login va parolingiz bilan kutubxonaga kiring.
              </p>
            </div>
            <a href="#" style={{
              padding: '14px 40px', background: 'var(--gold)',
              color: '#08081a', textDecoration: 'none', fontFamily: 'var(--font-sans)',
              fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase',
            }}>
              Kutubxonaga o'tish →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
