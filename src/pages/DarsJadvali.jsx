import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const TIMES = ['08:30 – 10:00', '10:15 – 11:45', '12:30 – 14:00', '14:15 – 15:45', '16:00 – 17:30'];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Dars jadvali',
    heroTag: 'Talabalar uchun', heroTitle: 'Dars', heroEm: 'Jadvali',
    bannerPre: 'Toʻliq va individual dars jadvalingiz ',
    bannerBold: 'HEMIS',
    bannerPost: ' tizimida mavjud. Quyidagi jadval 2025–2026 oʻquv yili, 2-semestr uchun namunaviy jadval hisoblanadi.',
    facultyLabel: 'Fakultet:',
    faculties: ['Akademik xonandalik fakulteti', 'Cholgʻu ijrochiligi fakulteti', 'Kompozitsiya va musiqa nazariyasi', 'Xalq cholgʻulari fakulteti', 'Musiqa sanʼati va pedagogika fakulteti'],
    tableHeading: 'Haftalik jadval — Bakalavr, 2-kurs',
    timeCol: 'Vaqt',
    days: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    schedule: {
      0: ['Solfejio (203-xona)', 'Fortepiano (101-xona)', '—', 'Musiqa nazariyasi (205-xona)', '—'],
      1: ['—', 'Cholgʻu ansambli (Zal)', 'Garmoniya (204-xona)', '—', 'Vokal (102-xona)'],
      2: ['Fortepiano (101-xona)', '—', 'Solfejio (203-xona)', 'Kompozitsiya (206-xona)', '—'],
      3: ['Musiqa tarixi (207-xona)', 'Vokal (102-xona)', '—', 'Fortepiano (101-xona)', 'Garmoniya (204-xona)'],
      4: ['—', 'Musiqa nazariyasi (205-xona)', 'Cholgʻu ansambli (Zal)', '—', '—'],
    },
    legend: [
      ['Nazariy darslar', 'var(--navy)', '203, 204, 205, 206, 207-xonalar'],
      ['Amaliy mashgʻulotlar', 'var(--gold-dark)', '101, 102-xonalar (individual)'],
      ['Ansambl / Konsert', '#555', 'Katta kontsert zali'],
    ],
    ctaEyebrow: 'Shaxsiy jadval',
    ctaTitle: 'HEMIS tizimiga kiring',
    ctaText: 'Oʻzingizning individual dars jadvalingizni koʻring',
    ctaBtn: 'HEMIS ga oʻtish →',
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Расписание занятий',
    heroTag: 'Для студентов', heroTitle: 'Расписание', heroEm: 'занятий',
    bannerPre: 'Ваше полное и индивидуальное расписание занятий доступно в системе ',
    bannerBold: 'HEMIS',
    bannerPost: '. Приведённое ниже расписание является примерным для 2-го семестра 2025–2026 учебного года.',
    facultyLabel: 'Факультет:',
    faculties: ['Факультет академического пения', 'Факультет инструментального исполнительства', 'Композиция и теория музыки', 'Факультет народных инструментов', 'Факультет музыкального искусства и педагогики'],
    tableHeading: 'Недельное расписание — Бакалавриат, 2-й курс',
    timeCol: 'Время',
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    schedule: {
      0: ['Сольфеджио (каб. 203)', 'Фортепиано (каб. 101)', '—', 'Теория музыки (каб. 205)', '—'],
      1: ['—', 'Инструментальный ансамбль (Зал)', 'Гармония (каб. 204)', '—', 'Вокал (каб. 102)'],
      2: ['Фортепиано (каб. 101)', '—', 'Сольфеджио (каб. 203)', 'Композиция (каб. 206)', '—'],
      3: ['История музыки (каб. 207)', 'Вокал (каб. 102)', '—', 'Фортепиано (каб. 101)', 'Гармония (каб. 204)'],
      4: ['—', 'Теория музыки (каб. 205)', 'Инструментальный ансамбль (Зал)', '—', '—'],
    },
    legend: [
      ['Теоретические занятия', 'var(--navy)', 'каб. 203, 204, 205, 206, 207'],
      ['Практические занятия', 'var(--gold-dark)', 'каб. 101, 102 (индивидуально)'],
      ['Ансамбль / Концерт', '#555', 'Большой концертный зал'],
    ],
    ctaEyebrow: 'Личное расписание',
    ctaTitle: 'Войдите в систему HEMIS',
    ctaText: 'Посмотрите своё индивидуальное расписание занятий',
    ctaBtn: 'Перейти в HEMIS →',
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Class schedule',
    heroTag: 'For students', heroTitle: 'Class', heroEm: 'Schedule',
    bannerPre: 'Your full and individual class schedule is available in the ',
    bannerBold: 'HEMIS',
    bannerPost: ' system. The schedule below is a sample for the 2nd semester of the 2025–2026 academic year.',
    facultyLabel: 'Faculty:',
    faculties: ['Faculty of Academic Singing', 'Faculty of Instrumental Performance', 'Composition and Music Theory', 'Faculty of Folk Instruments', 'Faculty of Music Art and Pedagogy'],
    tableHeading: 'Weekly schedule — Bachelor, 2nd year',
    timeCol: 'Time',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    schedule: {
      0: ['Solfeggio (room 203)', 'Piano (room 101)', '—', 'Music theory (room 205)', '—'],
      1: ['—', 'Instrumental ensemble (Hall)', 'Harmony (room 204)', '—', 'Vocal (room 102)'],
      2: ['Piano (room 101)', '—', 'Solfeggio (room 203)', 'Composition (room 206)', '—'],
      3: ['Music history (room 207)', 'Vocal (room 102)', '—', 'Piano (room 101)', 'Harmony (room 204)'],
      4: ['—', 'Music theory (room 205)', 'Instrumental ensemble (Hall)', '—', '—'],
    },
    legend: [
      ['Theoretical classes', 'var(--navy)', 'rooms 203, 204, 205, 206, 207'],
      ['Practical classes', 'var(--gold-dark)', 'rooms 101, 102 (individual)'],
      ['Ensemble / Concert', '#555', 'Grand concert hall'],
    ],
    ctaEyebrow: 'Personal schedule',
    ctaTitle: 'Log in to the HEMIS system',
    ctaText: 'View your individual class schedule',
    ctaBtn: 'Go to HEMIS →',
  },
};

export default function DarsJadvali() {
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

          {/* Info banner */}
          <div style={{
            background: 'var(--navy)',
            borderLeft: '4px solid var(--gold)',
            padding: '20px 28px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.8)', fontFamily: 'var(--font-serif)', lineHeight: 1.6, margin: 0 }}>
              {tr.bannerPre}<strong style={{ color: 'var(--gold-light)' }}>{tr.bannerBold}</strong>{tr.bannerPost}
            </p>
          </div>

          {/* Filter row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold-dark)', alignSelf: 'center', fontFamily: 'var(--font-sans)' }}>
              {tr.facultyLabel}
            </div>
            {tr.faculties.map((f, i) => (
              <button key={f} style={{
                padding: '7px 16px',
                background: i === 0 ? 'var(--navy)' : 'var(--white)',
                border: `1px solid ${i === 0 ? 'var(--navy)' : 'var(--light-border)'}`,
                color: i === 0 ? 'var(--white)' : '#555',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'all 0.2s',
              }}>
                {f.split(' ')[0]}...
              </button>
            ))}
          </div>

          {/* Schedule table */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.tableHeading}</h2>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              background: 'var(--white)', border: '1px solid var(--light-border)',
              fontSize: '0.85rem',
            }}>
              <thead>
                <tr style={{ background: 'var(--navy)' }}>
                  <th style={{ padding: '14px 18px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                    {tr.timeCol}
                  </th>
                  {tr.days.map((d) => (
                    <th key={d} style={{ padding: '14px 18px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMES.map((time, ti) => (
                  <tr key={time} style={{ borderBottom: '1px solid var(--light-border)', background: ti % 2 === 0 ? 'var(--white)' : 'var(--light-50)' }}>
                    <td style={{ padding: '14px 18px', color: 'var(--navy)', fontWeight: 700, fontFamily: 'var(--font-sans)', fontSize: '0.78rem', whiteSpace: 'nowrap', borderRight: '1px solid var(--light-border)' }}>
                      {time}
                    </td>
                    {tr.days.map((d, di) => {
                      const cell = tr.schedule[di][ti];
                      const isEmpty = cell === '—';
                      return (
                        <td key={d} style={{ padding: '14px 18px', color: isEmpty ? '#ccc' : 'var(--navy)', fontFamily: 'var(--font-sans)', borderRight: '1px solid var(--light-border)', fontSize: '0.82rem' }}>
                          {isEmpty ? '—' : (
                            <div>
                              <div style={{ fontWeight: 500, marginBottom: '2px' }}>{cell.split('(')[0].trim()}</div>
                              <div style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontStyle: 'italic' }}>
                                {cell.match(/\(([^)]+)\)/)?.[1]}
                              </div>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="g-3" style={{ marginBottom: '60px' }}>
            {tr.legend.map(([label, color, desc]) => (
              <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px 20px', background: 'var(--white)', border: '1px solid var(--light-border)' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 3 }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '3px', fontFamily: 'var(--font-sans)' }}>{label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#888' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* HEMIS CTA */}
          <div className="page-cta-block" style={{
            background: 'linear-gradient(110deg, var(--navy) 0%, var(--navy-light) 100%)',
            padding: '40px 48px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderTop: '3px solid var(--gold)',
            marginBottom: '60px',
            flexWrap: 'wrap', gap: '20px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>{tr.ctaEyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', fontWeight: 300, marginBottom: '6px' }}>
                {tr.ctaTitle}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.6)', fontFamily: 'var(--font-serif)' }}>
                {tr.ctaText}
              </p>
            </div>
            <a href="https://student.hemis.uz" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 36px',
              background: 'var(--gold)',
              color: '#08081a',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              {tr.ctaBtn}
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
