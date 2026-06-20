import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Oʻquv uslubiy kengash',
    tag: 'Tuzilma', title: 'Oʻquv uslubiy', emphasis: 'kengash',
    lead: 'Oʻquv uslubiy kengash — konservatoriyaning taʼlim sifati, oʻquv rejalari va metodik taʼminoti boʻyicha asosiy maslahat organi. Kengash oʻquv jarayonini muvofiqlashtiradi va mutaxassislarning kasbiy kompetensiyalarini shakllantirishga koʻmaklashadi.',
    stats: [{ value: '14', label: 'Aʼzolar' }, { value: '12', label: 'Yillik yigʻilish' }, { value: '16', label: 'Kafedra qamrovi' }],
    h1: 'Asosiy faoliyat yoʻnalishlari',
    items: [
      ['Oʻquv rejalarini tasdiqlash', 'Bakalavr va magistratura yoʻnalishlari boʻyicha oʻquv rejalarini tasdiqlash.'],
      ['Sillabuslarni ekspertizadan oʻtkazish', 'Yangi va yangilangan oʻquv dasturlarini metodik jihatdan baholash.'],
      ['Pedagogik tajriba almashinuvi', 'Eng yaxshi pedagogik tajribalar va innovatsion metodikalarni tarqatish.'],
      ['Sifat monitoringi', 'Imtihonlar, kurs ishlari va bitiruv ishlari natijalarining sifatiy tahlili.'],
      ['Xalqaro standartlarga moslashish', 'Bolonya jarayoni va ESG standartlariga muvofiq oʻquv jarayonini takomillashtirish.'],
      ['Ilmiy-metodik nashrlar', 'Darsliklar, oʻquv qoʻllanmalari va elektron resurslarni tasdiqlash.'],
    ],
    h2: 'Yigʻilishlar grafigi',
    tableHead: ['Sana', 'Mavzu', 'Masʼul'],
    rows: [
      ['10.01.2026', '2025-2026 1-semestr yakunlari tahlili', 'Oʻquv ishlari prorektori'],
      ['12.02.2026', 'Yangi oʻquv rejalari muhokamasi', 'Oʻquv boʻlimi'],
      ['18.03.2026', 'Sillabuslar ekspertizasi', 'Metodboʻlim'],
      ['15.04.2026', 'Bitiruv ishlari himoyasi tartibi', 'Davlat attestatsiya komissiyasi'],
      ['22.05.2026', 'Yozgi sessiya tahlili', 'Oʻquv ishlari prorektori'],
    ],
    responsible: 'Abdullayev Farhod Rustambekovich (Oʻquv ishlari prorektori)',
    hours: 'Har oyning 2-juma kuni 14:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Учебно-методический совет',
    tag: 'Структура', title: 'Учебно-методический', emphasis: 'совет',
    lead: 'Учебно-методический совет — основной консультативный орган консерватории по качеству образования, учебным планам и методическому обеспечению. Совет координирует учебный процесс и способствует формированию профессиональных компетенций специалистов.',
    stats: [{ value: '14', label: 'Членов' }, { value: '12', label: 'Заседаний в год' }, { value: '16', label: 'Охват кафедр' }],
    h1: 'Основные направления деятельности',
    items: [
      ['Утверждение учебных планов', 'Утверждение учебных планов по направлениям бакалавриата и магистратуры.'],
      ['Экспертиза силлабусов', 'Методическая оценка новых и обновлённых учебных программ.'],
      ['Обмен педагогическим опытом', 'Распространение лучшего педагогического опыта и инновационных методик.'],
      ['Мониторинг качества', 'Качественный анализ результатов экзаменов, курсовых и выпускных работ.'],
      ['Соответствие международным стандартам', 'Совершенствование учебного процесса в соответствии с Болонским процессом и стандартами ESG.'],
      ['Научно-методические издания', 'Утверждение учебников, учебных пособий и электронных ресурсов.'],
    ],
    h2: 'График заседаний',
    tableHead: ['Дата', 'Тема', 'Ответственный'],
    rows: [
      ['10.01.2026', 'Анализ итогов 1-го семестра 2025-2026', 'Проректор по учебной работе'],
      ['12.02.2026', 'Обсуждение новых учебных планов', 'Учебный отдел'],
      ['18.03.2026', 'Экспертиза силлабусов', 'Методический отдел'],
      ['15.04.2026', 'Порядок защиты выпускных работ', 'Государственная аттестационная комиссия'],
      ['22.05.2026', 'Анализ летней сессии', 'Проректор по учебной работе'],
    ],
    responsible: 'Абдуллаев Фарход Рустамбекович (проректор по учебной работе)',
    hours: 'Каждую 2-ю пятницу месяца в 14:00',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Educational and Methodological Council',
    tag: 'Structure', title: 'Educational and', emphasis: 'Methodological Council',
    lead: 'The Educational and Methodological Council is the main advisory body of the conservatory on the quality of education, curricula and methodological support. The council coordinates the educational process and helps to form the professional competencies of specialists.',
    stats: [{ value: '14', label: 'Members' }, { value: '12', label: 'Meetings per year' }, { value: '16', label: 'Departments covered' }],
    h1: 'Main areas of activity',
    items: [
      ['Approval of curricula', 'Approval of curricula for bachelor’s and master’s programmes.'],
      ['Expert review of syllabi', 'Methodological evaluation of new and updated study programmes.'],
      ['Exchange of pedagogical experience', 'Dissemination of best pedagogical practices and innovative methods.'],
      ['Quality monitoring', 'Qualitative analysis of the results of exams, coursework and final theses.'],
      ['Compliance with international standards', 'Improving the educational process in accordance with the Bologna process and ESG standards.'],
      ['Scientific and methodological publications', 'Approval of textbooks, study guides and electronic resources.'],
    ],
    h2: 'Schedule of meetings',
    tableHead: ['Date', 'Topic', 'Responsible'],
    rows: [
      ['10.01.2026', 'Analysis of the results of the 1st semester 2025-2026', 'Vice-Rector for Academic Affairs'],
      ['12.02.2026', 'Discussion of new curricula', 'Academic Department'],
      ['18.03.2026', 'Expert review of syllabi', 'Methodological Department'],
      ['15.04.2026', 'Procedure for the defence of final theses', 'State Attestation Commission'],
      ['22.05.2026', 'Analysis of the summer session', 'Vice-Rector for Academic Affairs'],
    ],
    responsible: 'Abdullayev Farhod Rustambekovich (Vice-Rector for Academic Affairs)',
    hours: 'Every 2nd Friday of the month at 14:00',
  },
};

export default function OquvUslubiyKengash() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma, to: '/tuzilma' },
    { label: tr.crumbThis },
  ];

  return (
    <InfoPage
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={BREADCRUMBS}
      lead={tr.lead}
      stats={tr.stats}
      sections={[
        { heading: tr.h1, items: tr.items.map(([title, desc]) => ({ title, desc })) },
        { heading: tr.h2, table: { head: tr.tableHead, rows: tr.rows } },
      ]}
      contact={{
        responsible: tr.responsible,
        phone: '+998 71 234-56-80',
        email: 'oqv-kengash@konservatoriya.uz',
        hours: tr.hours,
      }}
    />
  );
}
