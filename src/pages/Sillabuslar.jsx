import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Oʻquv dasturlari (Sillabuslar)',
    heroTag: 'Talabalar uchun', heroTitle: 'Oʻquv dasturlari', heroEm: 'Sillabuslar',
    heading: 'Kafedra boʻyicha sillabuslar',
    subjects: [
      ['Musiqa nazariyasi kafedrasi', ['Solfejio', 'Garmoniya', 'Polifoniya', 'Musiqa shakllari tahlili', 'Musiqa tarixi']],
      ['Fortepiano kafedrasi', ['Maxsus fortepiano', 'Kamera ansambli', 'Fortepiano pedagogikasi', 'Konsertmeystirlik sinfi']],
      ['Xonandalik kafedrasi', ['Vokal', 'Opera tayyorgarligi', 'Sahna mahorati', 'Xor dirijyorligi']],
      ['Kompozitsiya kafedrasi', ['Kompozitsiya', 'Orkestr partiturasini oʻqish', 'Aranjirovka', 'Elektron musiqa']],
      ['Xalq cholgʻulari kafedrasi', ['Dutor', 'Gʻijjak', 'Doira', 'Xalq musiqasi tarixi']],
    ],
    notePre: 'Barcha sillabuslar ',
    noteYear: '2025–2026 oʻquv yili',
    notePost: ' uchun moʻljallangan. Qoʻshimcha fanlar va yangilangan sillabuslar uchun tegishli kafedra oʻqituvchilari bilan bogʻlaning.',
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Учебные программы (силлабусы)',
    heroTag: 'Для студентов', heroTitle: 'Учебные программы', heroEm: 'Силлабусы',
    heading: 'Силлабусы по кафедрам',
    subjects: [
      ['Кафедра теории музыки', ['Сольфеджио', 'Гармония', 'Полифония', 'Анализ музыкальных форм', 'История музыки']],
      ['Кафедра фортепиано', ['Специальное фортепиано', 'Камерный ансамбль', 'Фортепианная педагогика', 'Класс концертмейстера']],
      ['Кафедра пения', ['Вокал', 'Подготовка оперы', 'Сценическое мастерство', 'Хоровое дирижирование']],
      ['Кафедра композиции', ['Композиция', 'Чтение оркестровой партитуры', 'Аранжировка', 'Электронная музыка']],
      ['Кафедра народных инструментов', ['Дутар', 'Гиджак', 'Дойра', 'История народной музыки']],
    ],
    notePre: 'Все силлабусы рассчитаны на ',
    noteYear: '2025–2026 учебный год',
    notePost: '. По дополнительным предметам и обновлённым силлабусам обращайтесь к преподавателям соответствующей кафедры.',
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Study programmes (Syllabi)',
    heroTag: 'For students', heroTitle: 'Study programmes', heroEm: 'Syllabi',
    heading: 'Syllabi by department',
    subjects: [
      ['Music Theory Department', ['Solfeggio', 'Harmony', 'Polyphony', 'Analysis of musical forms', 'Music history']],
      ['Piano Department', ['Special piano', 'Chamber ensemble', 'Piano pedagogy', 'Concertmaster class']],
      ['Singing Department', ['Vocal', 'Opera preparation', 'Stage skills', 'Choral conducting']],
      ['Composition Department', ['Composition', 'Reading the orchestral score', 'Arrangement', 'Electronic music']],
      ['Folk Instruments Department', ['Dutar', 'Gijjak', 'Doira', 'History of folk music']],
    ],
    notePre: 'All syllabi are designed for the ',
    noteYear: '2025–2026 academic year',
    notePost: '. For additional subjects and updated syllabi, contact the teachers of the relevant department.',
  },
};

export default function Sillabuslar() {
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

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.heading}</h2>
          </div>

          <div className="g-2" style={{ marginBottom: '60px' }}>
            {tr.subjects.map(([heading, fanlar]) => (
              <div key={heading} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '28px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                  color: 'var(--navy)', marginBottom: '20px', fontWeight: 400,
                }}>
                  {heading}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {fanlar.map((fan) => (
                    <div key={fan} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 14px', background: 'var(--light-50)',
                      border: '1px solid var(--light-border)',
                      transition: 'background 0.2s',
                    }}
                      onMouseOver={(e) => { e.currentTarget.style.background = 'var(--cream)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = 'var(--light-50)'; }}
                    >
                      <span style={{ fontSize: '0.85rem', color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>
                        {fan}
                      </span>
                      <button style={{
                        padding: '4px 12px', background: 'transparent',
                        border: '1px solid var(--gold-dark)', color: 'var(--gold-dark)',
                        fontSize: '0.65rem', fontFamily: 'var(--font-sans)',
                        cursor: 'pointer', fontWeight: 700, letterSpacing: '0.5px',
                      }}>
                        PDF ↓
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--navy)', padding: '32px 40px',
            borderTop: '3px solid var(--gold)', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.75)', fontFamily: 'var(--font-serif)', lineHeight: 1.8, margin: 0 }}>
              {tr.notePre}<strong style={{ color: 'var(--gold-light)' }}>{tr.noteYear}</strong>{tr.notePost}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
