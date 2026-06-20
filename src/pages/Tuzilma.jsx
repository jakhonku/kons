import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const FAC_ICONS = ['♪', '♫', '𝄞', '♬', '𝄢'];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbKons: 'Konservatoriya', crumbThis: 'Tuzilma',
    heroTag: 'Konservatoriya', heroTitle: 'Muassasa', heroEm: 'Tuzilmasi',
    lead: 'Konservatoriya tuzilmasi 5 ta fakultet, 16 kafedra va koʻplab maʼmuriy boʻlimlardan iborat boʻlib, barcha jarayonlar zamonaviy boshqaruv tizimi asosida olib boriladi.',
    mgmtHeading: 'Boshqaruv tuzilmasi',
    leaderTag: 'Rahbar', leaderName: 'Rektor',
    prorektors: ['Taʼlim ishlari prorektori', 'Ilmiy-ijodiy ishlar prorektori', 'Xalqaro aloqalar prorektori', 'Maʼmuriy-xoʻjalik prorektori'],
    facHeading: 'Fakultetlar',
    kafedraWord: 'kafedra',
    faculties: [
      { name: 'Akademik xonandalik fakulteti', kafedralar: ['Akademik xonandalik', 'Opera tayyorlash', 'Xor dirijyorligi', 'Sahna nutqi va aktyorlik mahorati'] },
      { name: 'Cholgʻu ijrochiligi fakulteti', kafedralar: ['Fortepiano', 'Torli cholgʻular', 'Dam olish cholgʻulari', 'Kamera ansambli', 'Orkestr sinfi'] },
      { name: 'Kompozitsiya va musiqa nazariyasi fakulteti', kafedralar: ['Kompozitsiya', 'Musiqa nazariyasi', 'Musiqa tarixi', 'Polifoniya va garmoniya'] },
      { name: 'Xalq cholgʻulari fakulteti', kafedralar: ['Dutor va gʻijjak', 'Doira va zarbli cholgʻular', 'Ud va tanbur', 'Xalq ansambli'] },
      { name: 'Musiqa sanʼati va pedagogika fakulteti', kafedralar: ['Musiqa pedagogikasi', 'Maktabgacha taʼlim musiqasi', 'Musiqa psixologiyasi', 'Amaliy musiqa'] },
    ],
    deptHeading: 'Maʼmuriy boʻlimlar',
    respWord: 'Masʼul',
    departments: [
      ['Akademik masalalar boʻlimi', 'Oʻquv boʻlimi'],
      ['Ilmiy-tadqiqot markazi', 'Ilmiy boʻlim'],
      ['Xalqaro aloqalar boʻlimi', 'Xalqaro boʻlim'],
      ['Moliya-xoʻjalik boʻlimi', 'Maʼmuriy boʻlim'],
      ['Axborot texnologiyalari', 'IT boʻlimi'],
      ['Kutubxona va arxiv', 'Kutubxona boʻlimi'],
    ],
  },
  ru: {
    crumbHome: 'Главная', crumbKons: 'Консерватория', crumbThis: 'Структура',
    heroTag: 'Консерватория', heroTitle: 'Структура', heroEm: 'учреждения',
    lead: 'Структура консерватории включает 5 факультетов, 16 кафедр и множество административных отделов; все процессы ведутся на основе современной системы управления.',
    mgmtHeading: 'Структура управления',
    leaderTag: 'Руководитель', leaderName: 'Ректор',
    prorektors: ['Проректор по учебной работе', 'Проректор по научно-творческой работе', 'Проректор по международным связям', 'Проректор по административно-хозяйственной части'],
    facHeading: 'Факультеты',
    kafedraWord: 'кафедр',
    faculties: [
      { name: 'Факультет академического пения', kafedralar: ['Академическое пение', 'Подготовка оперы', 'Хоровое дирижирование', 'Сценическая речь и актёрское мастерство'] },
      { name: 'Факультет инструментального исполнительства', kafedralar: ['Фортепиано', 'Струнные инструменты', 'Духовые инструменты', 'Камерный ансамбль', 'Оркестровый класс'] },
      { name: 'Факультет композиции и теории музыки', kafedralar: ['Композиция', 'Теория музыки', 'История музыки', 'Полифония и гармония'] },
      { name: 'Факультет народных инструментов', kafedralar: ['Дутар и гиджак', 'Дойра и ударные инструменты', 'Уд и танбур', 'Народный ансамбль'] },
      { name: 'Факультет музыкального искусства и педагогики', kafedralar: ['Музыкальная педагогика', 'Музыка дошкольного образования', 'Музыкальная психология', 'Прикладная музыка'] },
    ],
    deptHeading: 'Административные отделы',
    respWord: 'Ответственный',
    departments: [
      ['Отдел академических вопросов', 'Учебный отдел'],
      ['Научно-исследовательский центр', 'Научный отдел'],
      ['Отдел международных связей', 'Международный отдел'],
      ['Финансово-хозяйственный отдел', 'Административный отдел'],
      ['Информационные технологии', 'ИТ-отдел'],
      ['Библиотека и архив', 'Отдел библиотеки'],
    ],
  },
  en: {
    crumbHome: 'Home', crumbKons: 'Conservatory', crumbThis: 'Structure',
    heroTag: 'Conservatory', heroTitle: 'Institutional', heroEm: 'Structure',
    lead: 'The structure of the conservatory includes 5 faculties, 16 departments and many administrative units; all processes are carried out on the basis of a modern management system.',
    mgmtHeading: 'Management structure',
    leaderTag: 'Leader', leaderName: 'Rector',
    prorektors: ['Vice-Rector for Academic Affairs', 'Vice-Rector for Research and Creative Affairs', 'Vice-Rector for International Relations', 'Vice-Rector for Administration'],
    facHeading: 'Faculties',
    kafedraWord: 'departments',
    faculties: [
      { name: 'Faculty of Academic Singing', kafedralar: ['Academic Singing', 'Opera Training', 'Choral Conducting', 'Stage Speech and Acting'] },
      { name: 'Faculty of Instrumental Performance', kafedralar: ['Piano', 'String Instruments', 'Wind Instruments', 'Chamber Ensemble', 'Orchestra Class'] },
      { name: 'Faculty of Composition and Music Theory', kafedralar: ['Composition', 'Music Theory', 'Music History', 'Polyphony and Harmony'] },
      { name: 'Faculty of Folk Instruments', kafedralar: ['Dutar and Gijjak', 'Doira and Percussion', 'Oud and Tanbur', 'Folk Ensemble'] },
      { name: 'Faculty of Music Art and Pedagogy', kafedralar: ['Music Pedagogy', 'Preschool Music Education', 'Music Psychology', 'Applied Music'] },
    ],
    deptHeading: 'Administrative units',
    respWord: 'Responsible',
    departments: [
      ['Academic Affairs Department', 'Academic Department'],
      ['Research Center', 'Research Department'],
      ['International Relations Department', 'International Department'],
      ['Finance and Economic Department', 'Administrative Department'],
      ['Information Technologies', 'IT Department'],
      ['Library and Archive', 'Library Department'],
    ],
  },
};

export default function Tuzilma() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbKons },
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

          <article className="article-body">
            <p className="lead">
              {tr.lead}
            </p>
          </article>

          {/* Rektorat */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.mgmtHeading}</h2>
          </div>

          <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px', marginBottom: '40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '16px 48px', border: '2px solid var(--gold)', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '4px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                {tr.leaderTag}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)' }}>{tr.leaderName}</div>
            </div>
            <div className="tuzilma-prorektor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {tr.prorektors.map((p) => (
                <div key={p} style={{ padding: '14px', border: '1px solid var(--light-border)', background: 'var(--light-50)', fontSize: '0.78rem', color: 'var(--navy)', textAlign: 'center', lineHeight: 1.4, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Fakultetlar */}
          <div className="section-divider">
            <h2>{tr.facHeading}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
            {tr.faculties.map((fac, fi) => (
              <div key={fac.name} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 28px', borderBottom: '1px solid var(--light-border)', background: 'var(--light-50)' }}>
                  <div style={{ fontSize: '1.8rem', color: 'var(--gold)', lineHeight: 1, width: '40px', textAlign: 'center' }}>{FAC_ICONS[fi]}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 400 }}>{fac.name}</h3>
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', color: '#888', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                    {fac.kafedralar.length} {tr.kafedraWord}
                  </div>
                </div>
                <div className="tuzilma-kafedra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light-border)' }}>
                  {fac.kafedralar.map((k) => (
                    <div key={k} style={{ background: 'var(--white)', padding: '14px 18px', fontSize: '0.82rem', color: '#555', fontFamily: 'var(--font-serif)' }}>
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Boʻlimlar */}
          <div className="section-divider">
            <h2>{tr.deptHeading}</h2>
          </div>

          <div className="tuzilma-dept-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '60px' }}>
            {tr.departments.map(([name, resp]) => (
              <div key={name} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '22px 24px', borderLeft: '3px solid var(--gold)' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>{name}</h4>
                <div style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'var(--font-sans)' }}>{tr.respWord}: {resp}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
