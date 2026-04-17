import PageHero from '../components/PageHero';
import { GraduationCap, Users, BookOpen, Calendar, ChevronRight } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: 'Xorijiy dasturlar' },
];

const PROGRAMS = [
  {
    title: "Erasmus+ Ta'lim Dasturi",
    badge: 'Faol',
    badgeColor: '#22c55e',
    icon: GraduationCap,
    desc: "Yevropa Ittifoqi universitetlarida 1 semestr yoki 1 yillik o'qish imkoniyati. To'liq stipendiya.",
    details: ["24 ta Yevropa universiteti", "Oylik 800–1200 € stipendiya", "Ariza: har yili dekabr–yanvar", "Til talabi: B2 darajasi"],
    deadline: 'Yanvar 2026',
  },
  {
    title: "Ikki tomonlama Almashinuv Dasturi",
    badge: 'Ariza qabul',
    badgeColor: 'var(--gold-dark)',
    icon: Users,
    desc: "Hamkor universitetlar bilan talabalar almashinuvi. 1 semestrdan 1 yilgacha.",
    details: ["Rossiya, Xitoy, Koreya, Turkiya", "To'liq yoki qisman stipendiya", "Ariza: aprel–may oylari", "IELTS / TOPIK talab qilinishi mumkin"],
    deadline: 'May 2026',
  },
  {
    title: "Qo'shma Magistratura Dasturi",
    badge: 'Yangi',
    badgeColor: 'var(--navy)',
    icon: BookOpen,
    desc: "Yevropa universitetlari bilan qo'shma 2 yillik magistratura. Ikki diplom beriladi.",
    details: ["Vena va Parij universitetlari", "1-yil O'zbekistonda, 2-yil xorijda", "Ariza: mart–iyun oylari", "Magistratura darajasi talab qilinadi"],
    deadline: 'Iyun 2026',
  },
  {
    title: "Yozgi Master-klass Dasturi",
    badge: 'Doimiy',
    badgeColor: '#6366f1',
    icon: Calendar,
    desc: "Har yili yozda xorijiy ustoz-musiqachilar bilan intensiv 2–4 haftalik treninglar.",
    details: ["Yevropa va Osiyo ustazorlari", "Individual va guruh darslar", "Ariza: may oyi", "Barcha kurs talabalari uchun"],
    deadline: 'May 2026',
  },
];

const STEPS = [
  { num: '01', title: "Dasturni tanlash",       desc: "Siz uchun mos dasturni toping va talablarni diqqat bilan o'qing." },
  { num: '02', title: "Hujjatlarni tayyorlash", desc: "Diplom, transkript, motivatsion xat, rekomendatsiya xatlari." },
  { num: '03', title: "Ariza topshirish",        desc: "Xalqaro aloqalar bo'limiga 2-bino, 201-xona ga hujjatlar topshiring." },
  { num: '04', title: "Tanlov jarayoni",         desc: "Akademik ko'rsatkichlar va auditsiya natijalariga ko'ra tanlov." },
  { num: '05', title: "Yo'llanma olish",         desc: "Tanlangan talabalar rasmiy yo'llanma va stipendiya hujjatlarini oladi." },
];

export default function XorijiyDasturlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Xorijiy"
        emphasis="Dasturlar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Konservatoriya talabalari va o'qituvchilari uchun xorijda ta'lim olish,
              tajriba almashish va rivojlanish dasturlari mavjud.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Mavjud dasturlar</h2>
          </div>

          <div className="g-2" style={{ marginBottom: '60px' }}>
            {PROGRAMS.map((prog) => (
              <div key={prog.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--gold)' }}><prog.icon size={28} strokeWidth={1.5} /></div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 400 }}>{prog.title}</h3>
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px', background: prog.badgeColor, color: 'var(--white)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
                    {prog.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65, fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '20px' }}>{prog.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  {prog.details.map((d) => (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#555' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                      {d}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--gold-dark)', fontWeight: 700, fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>
                  <Calendar size={13} strokeWidth={2} />
                  ARIZA MUDDATI: {prog.deadline}
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>Ariza topshirish tartibi</h2>
          </div>

          <div className="steps-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', marginBottom: '60px', border: '1px solid var(--light-border)' }}>
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ padding: '28px 20px', borderRight: i < STEPS.length - 1 ? '1px solid var(--light-border)' : 'none', background: 'var(--white)', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '12px' }}>{step.num}</div>
                <h4 style={{ color: 'var(--navy)', fontSize: '0.92rem', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>{step.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: 2 }}><ChevronRight size={20} strokeWidth={2} /></div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '6px' }}>Xalqaro aloqalar bo'limi</h4>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
                2-bino, 201-xona &nbsp;·&nbsp; international@konservatoriya.uz &nbsp;·&nbsp; +998 71 234-56-91<br />
                Ish vaqti: Dushanba–Juma, 09:00–17:00
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
