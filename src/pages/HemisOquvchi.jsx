import PageHero from '../components/PageHero';
import { Calendar, BarChart2, ClipboardList, FileText, MessageCircle, Users } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: "HEMIS-oʻqituvchi" },
];

const FEATURES = [
  { icon: Calendar,      title: 'Dars jadvali',       desc: "Oʻqituvchining joriy va keyingi semestr darslari jadvali." },
  { icon: BarChart2,     title: 'Reyting va baholar',  desc: "Talabalarga baho qoʻyish, davomadni belgilash va yakuniy natijalar." },
  { icon: ClipboardList, title: 'Topshiriqlar',        desc: "Talabalar uchun vazifalar yaratish va topshirishlarni kuzatish." },
  { icon: FileText,      title: 'Oʻquv materiallar',  desc: "Kurs materiallari, sillabuslar va metodik qoʻllanmalarni yuklash." },
  { icon: MessageCircle, title: 'Xabarlar',            desc: "Talabalar va maʼmuriyat bilan tizim ichida muloqot." },
  { icon: Users,         title: 'Guruh roʻyxati',     desc: "Tahsil olayotgan talabalar, ularning maʼlumotlari va faoliyati." },
];

export default function HemisOquvchi() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="HEMIS"
        emphasis="Oʻqituvchi portali"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Main CTA */}
          <div className="page-cta-block" style={{
            background: 'linear-gradient(110deg, var(--navy) 0%, #1e1e5a 100%)',
            borderTop: '3px solid var(--gold)',
            padding: '56px 64px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '60px', flexWrap: 'wrap', gap: '32px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                Shaxsiy kabinet
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--white)', fontWeight: 300, marginBottom: '12px', lineHeight: 1.1 }}>
                HEMIS Tizimiga<br />
                <em>Kirish</em>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.65)', fontFamily: 'var(--font-serif)', lineHeight: 1.7, maxWidth: 420 }}>
                Tizimga login va parol bilan emas, davlatning yagona identifikatsiya tizimi
                — «OneID» (elektron pasport) orqali kiriladi.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://hemis.konservatoriya.uz/dashboard/login" target="_blank" rel="noopener noreferrer" style={{
                padding: '16px 48px', background: 'var(--gold)',
                color: '#08081a', textDecoration: 'none',
                fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: '0.82rem', letterSpacing: '2px', textTransform: 'uppercase',
                textAlign: 'center', display: 'block',
              }}>
                HEMIS ga kirish →
              </a>
              <p style={{ fontSize: '0.72rem', color: 'rgba(201,168,76,0.5)', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
                hemis.konservatoriya.uz
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Tizim imkoniyatlari</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                padding: '32px 28px', transition: 'all 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '16px', lineHeight: 1 }}><f.icon size={32} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: 400 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Help */}
          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px',
            display: 'flex', gap: '20px', alignItems: 'flex-start',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '6px' }}>
                Kirish muammosi yuzaga keldimi?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
                «OneID» orqali kirishda muammo boʻlsa, konservatoriyaning oʻquv boʻlimi
                yoki HEMIS administratoriga murojaat qiling.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

