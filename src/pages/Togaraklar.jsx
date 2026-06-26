import PageHero from '../components/PageHero';
import { Clock, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const COLORS = ['var(--gold-dark)', 'var(--navy)', '#555'];

/* Haqiqiy maʼlumot — Konservatoriyada faoliyat olib borayotgan toʻgaraklar */
const SECTIONS = [
  ['Sport toʻgaraklar', [
    ['Voleybol', 'Dushanba · Chorshanba · Juma 17:00–19:00', '', 'Murabbiy Otabek Axmedov'],
    ['Basketbol', 'Dushanba · Chorshanba · Juma 17:00–19:00', '', 'Murabbiy Otabek Axmedov'],
    ['Stol tennisi', 'Dushanba · Chorshanba · Juma 17:00–19:00', '', 'Murabbiy Otabek Axmedov'],
    ['Shaxmat va shashka', 'Dushanba · Chorshanba · Juma 17:00–19:00', '', 'Murabbiy Otabek Axmedov'],
    ['Sogʻlomlashtirish gimnastikasi', 'Dushanba · Chorshanba · Juma 17:00–19:00', '', 'Murabbiy Otabek Axmedov'],
  ]],
  ['Maʼnaviy-maʼrifiy toʻgaraklar', [
    ['“Uygʻonish” – kitobxonlik klubi', 'Chorshanba 17:00–18:30', '', 'Nilufar Turajonova (Yoshlar ittifoqi yetakchisi)'],
    ['“Qizlarjon” klubi', 'Seshanba 18:00–20:00', '', 'S. Xamdamova (Xotin-qizlar kengashi raisi)'],
    ['Tikuvchilik', 'Chorshanba 17:00–19:00', '', 'S. Xamdamova'],
    ['Pazandachilik', 'Yakshanba 11:00–16:00', '', 'S. Xamdamova'],
  ]],
  ['Til toʻgaraklari', [
    ['Ingliz tili', 'Chorshanba 15:30–17:00', '', 'M. Abdullayeva (kafedra mudiri)'],
    ['Rus tili', 'Chorshanba 17:00–18:30', '', 'M. Abdullayeva (kafedra mudiri)'],
  ]],
];

const NOTE = 'Toʻgaraklarga qoʻshilish uchun “Kompozitor” sport klubi yoki Yoshlar ittifoqi boshlangʻich tashkilotiga murojaat qiling. Barcha toʻgaraklar bepul.';

const T = {
  uz: { crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Toʻgaraklar', heroTag: 'Talabalar uchun', heroTitle: 'Toʻgaraklar va', heroEm: 'Faoliyatlar', leaderLabel: 'Masʼul' },
  ru: { crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Кружки', heroTag: 'Для студентов', heroTitle: 'Кружки и', heroEm: 'занятия', leaderLabel: 'Ответственный' },
  en: { crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Clubs', heroTag: 'For students', heroTitle: 'Clubs and', heroEm: 'activities', leaderLabel: 'In charge' },
};

export default function Togaraklar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbStudents, to: '/talabalar' },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.heroTag}
        title={tr.heroTitle}
        emphasis={tr.heroEm}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {SECTIONS.map(([heading, items], si) => (
            <div key={heading}>
              <div className="section-divider" style={{ marginTop: si === 0 ? 0 : undefined }}>
                <h2>{heading}</h2>
              </div>

              <div className="g-2" style={{ marginBottom: '50px' }}>
                {items.map(([name, schedule, room, leader]) => (
                  <div key={name} style={{
                    background: 'var(--white)', border: '1px solid var(--light-border)',
                    borderLeft: `4px solid ${COLORS[si]}`, padding: '24px 28px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'box-shadow 0.3s',
                    flexWrap: 'wrap', gap: '16px',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,56,0.09)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', fontWeight: 400 }}>
                        {name}
                      </h3>
                      <div style={{ fontSize: '0.75rem', color: '#888', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} strokeWidth={2} />{schedule}</span>
                        {room && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} strokeWidth={2} />{room}</span>}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#bbb', marginBottom: '2px' }}>{tr.leaderLabel}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 500 }}>{leader}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '22px 30px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {NOTE}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
