import PageHero from '../components/PageHero';
import { Globe, ExternalLink } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar' },
  { label: 'Hamkor tashkilotlar' },
];

const STATS = [
  { num: '100+', label: 'Hamkor tashkilot' },
  { num: '19', label: 'Hamkorlik davlatlari' },
];

/* Haqiqiy maʼlumot — hamkorlik davlatlari geografiyasi */
const COUNTRIES = [
  { name: 'Estoniya', code: 'ee' },
  { name: 'Latviya', code: 'lv' },
  { name: 'Chexiya', code: 'cz' },
  { name: 'Belgiya', code: 'be' },
  { name: 'Slovakiya', code: 'sk' },
  { name: 'Rossiya', code: 'ru' },
  { name: 'Belarus', code: 'by' },
  { name: 'Ukraina', code: 'ua' },
  { name: 'Xitoy', code: 'cn' },
  { name: 'Janubiy Koreya', code: 'kr' },
  { name: 'Italiya', code: 'it' },
  { name: 'Germaniya', code: 'de' },
  { name: 'Buyuk Britaniya', code: 'gb' },
  { name: 'Turkiya', code: 'tr' },
  { name: 'Ozarbayjon', code: 'az' },
  { name: 'Qozogʻiston', code: 'kz' },
  { name: 'Qirgʻiziston', code: 'kg' },
  { name: 'Tojikiston', code: 'tj' },
  { name: 'BAA', code: 'ae' },
];

const TASKS = [
  'Xorijiy oliy taʼlim muassasalari, ilmiy markazlar va xalqaro tashkilotlar bilan hamkorlik aloqalarini oʻrnatish va rivojlantirish.',
  'Xalqaro shartnomalar, memorandumlar va hamkorlik bitimlarini tayyorlash hamda ularning ijrosini monitoring qilish.',
  'Professor-oʻqituvchilar, talabalar va tadqiqotchilarni xalqaro grantlar, stajirovkalar va akademik almashinuv dasturlarida ishtirok etishga koʻmaklashish.',
  'Xorijiy mutaxassislar ishtirokida mahorat darslari, seminarlar va konferensiyalar tashkil etish.',
  'Xorijiy delegatsiyalar tashriflari va akademik mobillik jarayonlarini muvofiqlashtirish.',
  'Xalqaro reytinglar va grant dasturlarida konservatoriya ishtirokini kengaytirish.',
];

export default function HamkorTashkilotlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Hamkor"
        emphasis="Tashkilotlar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Oʻzbekiston davlat konservatoriyasining Xalqaro aloqalar boʻlimi Konservatoriyaning
              xalqaro faoliyatini rivojlantirish, xorijiy taʼlim va ilmiy muassasalar bilan
              hamkorlikni mustahkamlash hamda professor-oʻqituvchilar, talabalar va
              tadqiqotchilarning xalqaro akademik mobilligini qoʻllab-quvvatlash bilan
              shugʻullanadi. Konservatoriya xorijiy mamlakatlardagi 100 ga yaqin oliy taʼlim
              tashkiloti bilan hamkorlik aloqalarini yoʻlga qoʻygan.
            </p>
          </article>

          {/* Hamkorlik geografiyasi */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Hamkorlik geografiyasi</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: 'var(--light-border)', border: '1px solid var(--light-border)', marginBottom: '50px' }}>
            {COUNTRIES.map((c) => (
              <div key={c.name} style={{ background: 'var(--white)', padding: '20px 18px', display: 'flex', alignItems: 'center', gap: '12px', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--light-50)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--white)'; }}
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                  width="30"
                  height="22"
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  style={{ flexShrink: 0, width: '30px', height: 'auto', borderRadius: '2px', border: '1px solid var(--light-border)', display: 'block' }}
                />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--navy)' }}>{c.name}</span>
              </div>
            ))}
          </div>

          {/* Boʻlim vazifalari */}
          <div className="section-divider">
            <h2>Boʻlimning asosiy vazifalari</h2>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {TASKS.map((task) => (
              <li key={task} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '18px 24px', fontSize: '0.95rem', color: '#555', lineHeight: 1.65, fontFamily: 'var(--font-serif)' }}>
                {task}
              </li>
            ))}
          </ul>

          <div style={{ background: 'var(--navy)', padding: '40px', textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: 'var(--gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <Globe size={36} strokeWidth={1.2} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
              Yangi <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Hamkorlik</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', marginBottom: '8px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', maxWidth: 520, margin: '0 auto 8px' }}>
              Xalqaro hamkorlik boʻyicha takliflaringiz yoki savollaringiz boʻlsa, Xalqaro
              aloqalar boʻlimi bilan bogʻlaning.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '24px', fontFamily: 'var(--font-sans)' }}>
              Boʻlim boshligʻi: Gaibova Habiba Sodiqjon qizi
            </p>
            <a href="/kontaktlar" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 36px', border: '1px solid var(--gold)', color: 'var(--gold)',
              textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
              fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s',
            }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              <ExternalLink size={14} strokeWidth={2} /> BOGʻLANISH
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
