import PageHero from '../components/PageHero';
import { Target, Handshake, Clipboard, Globe, Mic, TrendingUp } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Kelajakka qadam' },
];

const SERVICES = [
  { icon: Target,     title: 'Karyera maslahat',         desc: "Individual karyera maslahati, portfoilo tuzish, auditsiya tayyorgarlik" },
  { icon: Handshake,  title: 'Hamkorlar bilan uchrashuvlar', desc: "Opera teatrlari, filarmoniya va musiqa maktablari vakillari bilan uchrashuv" },
  { icon: Clipboard,  title: 'CV va motivatsion xat',    desc: "Xalqaro standartlarga mos CV va motivatsion xat tayyorlash" },
  { icon: Globe,      title: 'Xorijiy imkoniyatlar',     desc: "Chet el teatrlari va orkestrlariga qabul haqida ma'lumot" },
  { icon: Mic,        title: 'Mock audition',            desc: "Auditsiyaga tayyorgarlik: professional hakamlar oldida mashq" },
  { icon: TrendingUp, title: 'Bandlik statistikasi',     desc: "Bitiruvchilarimizning 85% birinchi yilda ishga joylashadi" },
];

const PARTNERS = [
  "O'zbek Milliy Simfonik Orkestri",
  "Alisher Navoiy nomidagi GABT",
  "Toshkent Davlat Filarmoniyasi",
  "Yoshlar simfonik orkestri",
  "Toshkent shahar musiqa maktablari",
  "O'zbekiston Bastakorlar Uyushmasi",
];

export default function KelajakkaQadam() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Kelajakka"
        emphasis="Qadam"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Stats banner */}
          <div className="page-stats-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)',
            marginBottom: '60px',
          }}>
            {[
              { num: '85%', label: 'Birinchi yilda ishga joylashgan' },
              { num: '120+', label: 'Hamkor tashkilotlar' },
              { num: '40+', label: 'Xorijiy imkoniyatlar' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '36px 24px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Xizmatlar</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                padding: '32px 28px', transition: 'all 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,56,0.09)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '14px' }}><s.icon size={32} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="section-divider">
            <h2>Asosiy hamkorlar</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {PARTNERS.map((p) => (
              <div key={p} style={{
                padding: '18px 24px',
                background: 'var(--white)', border: '1px solid var(--light-border)',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            background: 'var(--cream)', borderLeft: '4px solid var(--gold)',
            border: '1px solid var(--light-border)', padding: '24px 32px', marginBottom: '60px',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.1rem', marginBottom: '8px' }}>
              Karyera markazi
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              2-bino, 210-xona · Telefon: +998 71 234-56-95 · karyera@konservatoriya.uz<br />
              Ish vaqti: Dushanba–Juma, 09:00–17:00
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
