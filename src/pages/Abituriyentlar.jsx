import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Abituriyentlar uchun' },
];

const DIRECTIONS = [
  {
    code: '5111400',
    name: 'Ijrochilik san\'ati (fortepiano)',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 20,
    form: 'Kunduzgi',
  },
  {
    code: '5111401',
    name: 'Ijrochilik san\'ati (torli cholg\'ular)',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 15,
    form: 'Kunduzgi',
  },
  {
    code: '5111402',
    name: "Ijrochilik san'ati (dam olish cholg'ulari)",
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 15,
    form: 'Kunduzgi',
  },
  {
    code: '5111403',
    name: "Ijrochilik san'ati (xalq cholg'ulari)",
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 25,
    form: 'Kunduzgi',
  },
  {
    code: '5111500',
    name: 'Akademik xonandalik',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 30,
    form: 'Kunduzgi',
  },
  {
    code: '5111600',
    name: 'Kompozitsiya',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 10,
    form: 'Kunduzgi',
  },
  {
    code: '5111700',
    name: 'Dirijyorlik (xor)',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 12,
    form: 'Kunduzgi',
  },
  {
    code: '5111800',
    name: 'Musiqa nazariyasi va tarixi',
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 18,
    form: 'Kunduzgi',
  },
  {
    code: '5112000',
    name: "Musiqa ta'limi",
    degree: 'Bakalavr',
    duration: '4 yil',
    quota: 40,
    form: 'Kunduzgi / Sirtqi',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Hujjatlarni tayyorlash',
    desc: "Pasport nusxasi, o'rta ta'lim diplomi, 3x4 fotosurat (6 ta), tibbiy ma'lumotnoma (086-shakl), ijodiy faoliyat hujjatlari.",
  },
  {
    num: '02',
    title: "Hujjatlarni topshirish",
    desc: "Hujjatlar qabul komissiyasiga shaxsan yoki elektron pochta orqali topshiriladi. Qabul muddati: 1-25 avgust.",
  },
  {
    num: '03',
    title: 'Kasbiy-ijodiy imtihon',
    desc: "Tanlangan mutaxassislik bo'yicha amaliy imtihon. Fortepiano, solfejio va musiqa adabiyoti fanlari bo'yicha sinovlar.",
  },
  {
    num: '04',
    title: "DTM natijalari",
    desc: "O'zbekiston Respublikasi DTM tomonidan o'tkazilgan test imtihoni natijalari hisobga olinadi. Minimal ball: 56.0.",
  },
  {
    num: '05',
    title: 'Natijalar e\'lon qilinishi',
    desc: "Qabul natijalari 1-sentyabrgacha e'lon qilinadi. Ro'yxatlar konservatoriya doskasida va rasmiy saytda chop etiladi.",
  },
];

const DOCUMENTS = [
  "Pasport yoki tug'ilganlik guvohnomasi nusxasi",
  "O'rta ta'lim to'g'risidagi diplom (asl nusxa va nusxasi)",
  "6 ta 3×4 o'lchamidagi fotosurat",
  "Tibbiy ma'lumotnoma (086-shakl)",
  "DTM guvohnomasi nusxasi",
  "Ijodiy yutuqlar hujjatlari (mavjud bo'lsa)",
  "Ariza (qabul komissiyasida to'ldiriladi)",
];

export default function Abituriyentlar() {
  const totalQuota = DIRECTIONS.reduce((sum, d) => sum + d.quota, 0);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Qabul 2026"
        title="Abituriyentlar"
        emphasis="uchun"
        breadcrumbs={BREADCRUMBS}
      />

      {/* Statistika */}
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-num">{DIRECTIONS.length}</div>
          <div className="stat-label">Ta'lim yo'nalishi</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">{totalQuota}</div>
          <div className="stat-label">Davlat kvotasi (2026)</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4</div>
          <div className="stat-label">Yillik o'qish muddati</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">56.0</div>
          <div className="stat-label">Minimal DTM ball</div>
        </div>
      </div>

      <section className="main-content">
        <div className="container" style={{ maxWidth: '1100px' }}>

          {/* Muhim sana */}
          <div className="info-box" style={{ marginTop: 0 }}>
            <h4>2026-yil qabul muddatlari</h4>
            <p>
              Hujjat topshirish: <strong>1 – 25 avgust 2026</strong> &nbsp;|&nbsp;
              Kasbiy imtihon: <strong>27 – 30 avgust 2026</strong> &nbsp;|&nbsp;
              Natijalar: <strong>1 sentyabr 2026</strong>
            </p>
          </div>

          {/* Qabul bosqichlari */}
          <div className="section-divider">
            <h2>Qabul bosqichlari</h2>
          </div>
          <div className="steps-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', marginBottom: '60px', border: '1px solid #e8e4dc' }}>
            {STEPS.map((step, i) => (
              <div key={step.num} style={{
                padding: '30px 25px',
                borderRight: i < STEPS.length - 1 ? '1px solid #e8e4dc' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: '15px',
                }}>
                  {step.num}
                </div>
                <h4 style={{ color: 'var(--navy)', fontSize: '0.95rem', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Ta'lim yo'nalishlari va kvota jadvali */}
          <div className="section-divider">
            <h2>Ta'lim yo'nalishlari va kvota</h2>
          </div>
          <div className="data-table-wrap" style={{ paddingTop: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Mutaxassislik kodi</th>
                  <th>Ta'lim yo'nalishi</th>
                  <th>Daraja</th>
                  <th>Muddat</th>
                  <th>O'qish shakli</th>
                  <th style={{ textAlign: 'right' }}>Kvota</th>
                </tr>
              </thead>
              <tbody>
                {DIRECTIONS.map((d) => (
                  <tr key={d.code}>
                    <td>
                      <span className="badge badge-blue">{d.code}</span>
                    </td>
                    <td>{d.name}</td>
                    <td>{d.degree}</td>
                    <td>{d.duration}</td>
                    <td>{d.form}</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>{d.quota}</td>
                  </tr>
                ))}
                <tr style={{ background: 'var(--light-100)', fontWeight: 700 }}>
                  <td colSpan={5} style={{ textAlign: 'right', fontWeight: 700, paddingRight: '20px', color: 'var(--navy)' }}>Jami:</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--gold-dark)', fontSize: '1.1rem' }}>{totalQuota}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kerakli hujjatlar */}
          <div className="section-divider">
            <h2>Kerakli hujjatlar</h2>
          </div>
          <div className="docs-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '60px' }}>
            {DOCUMENTS.map((doc, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '16px 20px',
                border: '1px solid #e8e4dc',
                background: 'white',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  background: 'var(--navy)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: '0.9rem', color: '#555' }}>{doc}</span>
              </div>
            ))}
          </div>

          {/* Qo'shimcha ma'lumot */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '60px' }}>
            <div className="info-box">
              <h4>Kasbiy-ijodiy imtihon</h4>
              <p>
                Har bir yo'nalish bo'yicha maxsus dastur asosida o'tkaziladi.
                Imtihon dasturlari qabul komissiyasida va rasmiy saytda e'lon qilinadi.
                Minimal o'tish bali: <strong>70 ball (100 dan)</strong>.
              </p>
            </div>
            <div className="info-box">
              <h4>Bog'lanish — Qabul komissiyasi</h4>
              <p>
                Tel: <strong>+998 71 234-56-90</strong><br />
                Email: <strong>qabul@konservatoriya.uz</strong><br />
                Manzil: Toshkent, Mustaqillik ko'chasi, 31-uy, 1-qavat, 105-xona
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
