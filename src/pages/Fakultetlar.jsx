import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

// Routes for the two provided faculties
const CARD_LINKS = [
  '/fakultetlar/cholgu-ijrochiligi',
  '/fakultetlar/musiqa-sanati',
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Fakultetlar',
    tag: 'Tuzilma', title: 'Konservatoriya', emphasis: 'fakultetlari',
    lead: 'Konservatoriyada yetakchi fakultetlar faoliyat koʻrsatadi. Har bir fakultet oʻz yoʻnalishi boʻyicha bakalavr va magistratura darajasidagi mutaxassislarni tayyorlaydi va musiqa sanʼatining yetakchi sohalarini rivojlantiradi.',
    stats: [{ value: '2', label: 'Fakultet' }, { value: '15', label: 'Kafedra' }, { value: '1070', label: 'Talaba' }],
    h1: 'Akademik fakultetlar',
    fac: 'Fakultet',
    cards: [
      ['Cholgʻu ijrochiligi fakulteti', 'Puflama, torli va zarbli cholgʻular, dirijyorlik sinflari, xalq cholgʻulari ijrochiligi boʻyicha yetakchi fakultet.'],
      ['Musiqa sanʼati fakulteti', '8 ta taʼlim yoʻnalishi: akademik xonandalik, xor dirijyorligi, maxsus fortepiano, sanʼatshunoslik, bastakorlik sanʼati va boshqalar.'],
    ],
    h2: 'Fakultetlar boʻyicha statistika',
    tableHead: ['Fakultet', 'Kafedralar', 'Talabalar', 'Oʻqituvchilar'],
    rowNames: ['Cholgʻu ijrochiligi', 'Musiqa sanʼati'],
    responsible: 'Oʻquv ishlari boʻlimi (Oʻquv ishlari prorektori)',
    hours: 'Dushanba – Juma, 09:00 – 17:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Факультеты',
    tag: 'Структура', title: 'Факультеты', emphasis: 'консерватории',
    lead: 'В консерватории действуют ведущие факультеты. Каждый факультет готовит специалистов уровня бакалавриата и магистратуры по своему направлению и развивает ведущие области музыкального искусства.',
    stats: [{ value: '2', label: 'Факультета' }, { value: '15', label: 'Кафедр' }, { value: '1070', label: 'Студентов' }],
    h1: 'Академические факультеты',
    fac: 'Факультет',
    cards: [
      ['Факультет инструментального исполнительства', 'Ведущий факультет с классами духовых, струнных и ударных инструментов, дирижёрства и исполнительства на народных инструментах.'],
      ['Факультет музыкального искусства', '8 образовательных направлений: академическое пение, хоровое дирижёрство, специальное фортепиано, искусствоведение, композиторское искусство и другие.'],
    ],
    h2: 'Статистика по факультетам',
    tableHead: ['Факультет', 'Кафедры', 'Студенты', 'Преподаватели'],
    rowNames: ['Инструментальное исполнительство', 'Музыкальное искусство'],
    responsible: 'Учебный отдел (проректор по учебной работе)',
    hours: 'Понедельник – Пятница, 09:00 – 17:00',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Faculties',
    tag: 'Structure', title: 'Conservatory', emphasis: 'faculties',
    lead: 'Leading faculties operate at the conservatory. Each faculty trains bachelor’s and master’s level specialists in its field and develops the leading areas of musical art.',
    stats: [{ value: '2', label: 'Faculties' }, { value: '15', label: 'Departments' }, { value: '1070', label: 'Students' }],
    h1: 'Academic faculties',
    fac: 'Faculty',
    cards: [
      ['Faculty of Instrumental Performance', 'A leading faculty with wind, string and percussion instruments, conducting and folk instrument performance classes.'],
      ['Faculty of Music Art', '8 educational directions: academic singing, choral conducting, special piano, art studies, compositional art and others.'],
    ],
    h2: 'Statistics by faculty',
    tableHead: ['Faculty', 'Departments', 'Students', 'Teachers'],
    rowNames: ['Instrumental Performance', 'Music Art'],
    responsible: 'Academic Affairs Department (Vice-Rector for Academic Affairs)',
    hours: 'Monday – Friday, 09:00 – 17:00',
  },
};

// Based directly on docx data:
// Cholg'u ijrochiligi: 6 kafedra, 535 talaba, 101 o'qituvchi
// Musiqa san'ati: 9 kafedra, 535 talaba, 123 o'qituvchi
const ROW_NUMS = [['6', '535', '101'], ['9', '535', '123']];

export default function Fakultetlar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma },
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
        {
          heading: tr.h1,
          cards: tr.cards.map(([title, desc], i) => ({
            tag: `${tr.fac} ${String(i + 1).padStart(2, '0')}`,
            title,
            desc,
            to: CARD_LINKS[i],
          })),
        },
        {
          heading: tr.h2,
          table: {
            head: tr.tableHead,
            rows: tr.rowNames.map((name, i) => [name, ...ROW_NUMS[i]]),
          },
        },
      ]}
      contact={{
        responsible: tr.responsible,
        phone: '+998 71 234-56-80',
        email: 'oquv@konservatoriya.uz',
        hours: tr.hours,
      }}
    />
  );
}
