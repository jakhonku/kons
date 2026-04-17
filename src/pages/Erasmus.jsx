import PageHero from '../components/PageHero';
import { GraduationCap, Calendar, CheckCircle, Globe } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: 'Erasmus+ dasturi' },
];

const UNIVERSITIES = [
  { name: 'Vena Musiqa va Sanoat Badiiy Universiteti', country: 'Avstriya',   flag: '🇦🇹', slots: 4, lang: 'Nemis / Ingliz' },
  { name: 'Parij Milliy Oliy Musiqa Konservatoriyasi', country: 'Fransiya',   flag: '🇫🇷', slots: 3, lang: 'Fransuz / Ingliz' },
  { name: "Berliner Universität der Künste",           country: 'Germaniya',  flag: '🇩🇪', slots: 4, lang: 'Nemis / Ingliz' },
  { name: 'Varshava Frederic Chopin Musiqa Universiteti', country: 'Polsha',  flag: '🇵🇱', slots: 3, lang: 'Polsha / Ingliz' },
  { name: 'Rim Santa Cecilia Milliy Akademiyasi',      country: 'Italiya',    flag: '🇮🇹', slots: 2, lang: 'Italyan / Ingliz' },
  { name: "Barselona Oliy Musiqa Maktabi (ESMUC)",     country: 'Ispaniya',   flag: '🇪🇸', slots: 3, lang: 'Ispan / Ingliz' },
];

const REQUIREMENTS = [
  "Kamida 2-kurs talabasi yoki magistratura talabalari",
  "O'rtacha ball: 3.5 va undan yuqori (4-ballik tizimda)",
  "Ingliz yoki hamkor universitetning milliy tili: B2 darajasi",
  "Motivatsion xat (ingliz tilida, kamida 500 so'z)",
  "2 ta akademik rekomendatsiya xati",
  "Ijrochilik portfolio yoki yozma akademik ish namunasi",
];

const BENEFITS = [
  { title: 'Oylik stipendiya',     desc: '800–1 200 € (mamlakatga qarab)',     icon: GraduationCap },
  { title: "Sayohat xarajatlari",  desc: 'Masofaga qarab 820 € gacha',          icon: Globe },
  { title: "Ta'lim to'lovi",       desc: "Hamkor universitetda to'lovsiz o'qish", icon: CheckCircle },
  { title: 'Muddat',               desc: '1 semestr yoki 1 o\'quv yili',        icon: Calendar },
];

const TIMELINE = [
  { month: 'Oktyabr',  action: "Tanlov e'lon qilinadi va ariza shakllari tarqatiladi" },
  { month: 'Noyabr',   action: "Ma'lumot sessiyasi — Xalqaro aloqalar bo'limida" },
  { month: 'Dekabr',   action: "Hujjatlar topshirish muddati tugaydi" },
  { month: 'Yanvar',   action: "Ichki tanlov — akademik komissiya baholaydi" },
  { month: 'Fevral',   action: "Natijalar e'lon qilinadi va rasmiy yo'llanma beriladi" },
  { month: 'Sentyabr', action: "O'qish boshlanadi (keyingi o'quv yili)" },
];

export default function Erasmus() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Erasmus+"
        emphasis="Dasturi"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {[
          { num: '6',   label: 'Hamkor universitetlar' },
          { num: '19',  label: "O'rin (har yili)" },
          { num: '1200€', label: 'Oylik maksimal stipendiya' },
          { num: '2020', label: 'Dastur boshlangan yil' },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Erasmus+ — Yevropa Ittifoqining ta'lim almashinuvi dasturi. Konservatoriya talabalari
              Yevropa yetakchi musiqa universitetlarida 1 semestr yoki to'liq yil o'qish imkoniga ega.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Imtiyozlar</h2>
          </div>

          <div className="g-4" style={{ marginBottom: '50px' }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '28px 22px' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '14px' }}><b.icon size={28} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{b.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>Hamkor universitetlar</h2>
          </div>

          <div style={{ border: '1px solid var(--light-border)', marginBottom: '50px', overflow: 'hidden' }}>
            {UNIVERSITIES.map((u, i) => (
              <div key={u.name} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '18px 24px', borderBottom: i < UNIVERSITIES.length - 1 ? '1px solid var(--light-border)' : 'none', background: 'var(--white)', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{u.flag}</span>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '3px' }}>{u.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#888', fontFamily: 'var(--font-sans)' }}>{u.country} · {u.lang}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{u.slots}</div>
                  <div style={{ fontSize: '0.6rem', color: '#888', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase' }}>o'rin</div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>Talablar</h2>
          </div>

          <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px', marginBottom: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {REQUIREMENTS.map((req) => (
                <div key={req} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.88rem', color: '#444', lineHeight: 1.6 }}>
                  <div style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}><CheckCircle size={15} strokeWidth={2} /></div>
                  {req}
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider">
            <h2>Ariza muddatlari</h2>
          </div>

          <div style={{ border: '1px solid var(--light-border)', overflow: 'hidden', marginBottom: '60px' }}>
            {TIMELINE.map((t, i) => (
              <div key={t.month} style={{ display: 'flex', borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--light-border)' : 'none' }}>
                <div style={{ width: 120, background: i === 2 ? 'var(--gold)' : 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: i === 2 ? '#08081a' : 'rgba(255,255,255,0.7)' }}>{t.month}</span>
                </div>
                <div style={{ padding: '16px 24px', background: 'var(--white)', flex: 1, display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '0.85rem', color: i === 2 ? 'var(--navy)' : '#555', margin: 0, fontWeight: i === 2 ? 600 : 400 }}>{t.action}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
