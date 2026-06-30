import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Fakultetlar',
    tag: 'Tuzilma', title: 'Konservatoriya', emphasis: 'fakultetlari',
    lead: 'Konservatoriyada 5 ta yetakchi fakultet faoliyat koʻrsatadi. Har bir fakultet oʻz yoʻnalishi boʻyicha bakalavr va magistratura darajasidagi mutaxassislarni tayyorlaydi va musiqa sanʼatining yetakchi sohalarini rivojlantiradi.',
    stats: [{ value: '5', label: 'Fakultet' }, { value: '16', label: 'Kafedra' }, { value: '1200+', label: 'Talaba' }],
    h1: 'Akademik fakultetlar',
    fac: 'Fakultet',
    cards: [
      ['Akademik xonandalik fakulteti', 'Solo, opera va xor xonandalik boʻyicha mutaxassislar tayyorlaydi. Fakultet bitiruvchilari xalqaro tanlovlarda muntazam yutuqlarga erishmoqda.'],
      ['Cholgʻu ijrochiligi fakulteti', 'Fortepiano, torli va dam olish cholgʻulari, kamera ansambli va orkestr sinflarini birlashtiruvchi yetakchi fakultet.'],
      ['Kompozitsiya va musiqa nazariyasi', 'Bastakorlar, musiqashunoslar va ilmiy-tadqiqotchilarni tayyorlovchi nazariy fakultet.'],
      ['Xalq cholgʻulari fakulteti', 'Dutor, gʻijjak, doira, ud va boshqa milliy cholgʻular boʻyicha noyob taʼlim. Maqom sanʼatini rivojlantirish markazi.'],
      ['Musiqa sanʼati va pedagogika', 'Musiqa oʻqituvchilari, maktabgacha taʼlim mutaxassislari va musiqa psixologiyasi boʻyicha kadrlarni tayyorlaydi.'],
    ],
    h2: 'Fakultetlar boʻyicha statistika',
    tableHead: ['Fakultet', 'Kafedralar', 'Talabalar', 'Oʻqituvchilar'],
    rowNames: ['Akademik xonandalik', 'Cholgʻu ijrochiligi', 'Kompozitsiya va musiqa nazariyasi', 'Xalq cholgʻulari', 'Musiqa sanʼati va pedagogika'],
    responsible: 'Oʻquv ishlari boʻlimi (Oʻquv ishlari prorektori)',
    hours: 'Dushanba – Juma, 09:00 – 17:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Факультеты',
    tag: 'Структура', title: 'Факультеты', emphasis: 'консерватории',
    lead: 'В консерватории действуют 5 ведущих факультетов. Каждый факультет готовит специалистов уровня бакалавриата и магистратуры по своему направлению и развивает ведущие области музыкального искусства.',
    stats: [{ value: '5', label: 'Факультетов' }, { value: '16', label: 'Кафедр' }, { value: '1200+', label: 'Студентов' }],
    h1: 'Академические факультеты',
    fac: 'Факультет',
    cards: [
      ['Факультет академического пения', 'Готовит специалистов по сольному, оперному и хоровому пению. Выпускники факультета регулярно побеждают на международных конкурсах.'],
      ['Факультет инструментального исполнительства', 'Ведущий факультет, объединяющий классы фортепиано, струнных и духовых инструментов, камерного ансамбля и оркестра.'],
      ['Композиция и теория музыки', 'Теоретический факультет, готовящий композиторов, музыковедов и исследователей.'],
      ['Факультет народных инструментов', 'Уникальное образование по дутару, гиджаку, дойре, уду и другим национальным инструментам. Центр развития искусства макома.'],
      ['Музыкальное искусство и педагогика', 'Готовит учителей музыки, специалистов дошкольного образования и кадры по музыкальной психологии.'],
    ],
    h2: 'Статистика по факультетам',
    tableHead: ['Факультет', 'Кафедры', 'Студенты', 'Преподаватели'],
    rowNames: ['Академическое пение', 'Инструментальное исполнительство', 'Композиция и теория музыки', 'Народные инструменты', 'Музыкальное искусство и педагогика'],
    responsible: 'Учебный отдел (проректор по учебной работе)',
    hours: 'Понедельник – Пятница, 09:00 – 17:00',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Faculties',
    tag: 'Structure', title: 'Conservatory', emphasis: 'faculties',
    lead: 'The conservatory has 5 leading faculties. Each faculty trains bachelor’s and master’s level specialists in its field and develops the leading areas of musical art.',
    stats: [{ value: '5', label: 'Faculties' }, { value: '16', label: 'Departments' }, { value: '1200+', label: 'Students' }],
    h1: 'Academic faculties',
    fac: 'Faculty',
    cards: [
      ['Faculty of Academic Singing', 'Trains specialists in solo, opera and choral singing. Graduates of the faculty regularly win international competitions.'],
      ['Faculty of Instrumental Performance', 'A leading faculty combining classes of piano, string and wind instruments, chamber ensemble and orchestra.'],
      ['Composition and Music Theory', 'A theoretical faculty training composers, musicologists and researchers.'],
      ['Faculty of Folk Instruments', 'Unique education in dutar, gijjak, doira, oud and other national instruments. A centre for the development of maqom art.'],
      ['Music Art and Pedagogy', 'Trains music teachers, preschool education specialists and staff in music psychology.'],
    ],
    h2: 'Statistics by faculty',
    tableHead: ['Faculty', 'Departments', 'Students', 'Teachers'],
    rowNames: ['Academic singing', 'Instrumental performance', 'Composition and music theory', 'Folk instruments', 'Music art and pedagogy'],
    responsible: 'Academic Affairs Department (Vice-Rector for Academic Affairs)',
    hours: 'Monday – Friday, 09:00 – 17:00',
  },
};

const ROW_NUMS = [['4', '180', '32'], ['12', '420', '78'], ['4', '95', '28'], ['7', '230', '46'], ['5', '275', '38']];

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

