import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const NAMES = [
  'Axmedov Baxodir Madjitovich',
  'Urinbayev Kamoliddin Turdimuratovich',
  'Sultanova Tatyana Akramovna',
  'Mirsoatov Alisher Kudratullayevich',
  'Abdullayev Rustam Abdullayevich',
  'Ramiz Usmonov Beknazarovich',
  'Zairov Zair Kamildjanovich',
  'Azimov Ilhom Azimovich',
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Vasiylik kengashi',
    tag: 'Tuzilma', title: 'Vasiylik', emphasis: 'kengashi',
    lead: 'Oʻzbekiston davlat konservatoriyasi va uning Nukus filialining Vasiylik kengashi tarkibi quyida keltirilgan. Kengash madaniyat, taʼlim, moliya hamda musiqa sanʼati sohalaridagi rahbar va yetakchi mutaxassislardan tashkil topgan.',
    h1: 'Kengash raisligi',
    h2: 'Kengash aʼzolari',
    tags: ['Kengash raisi', 'Rais oʻrinbosari', 'Kengash kotibi', 'Aʼzo', 'Aʼzo', 'Aʼzo', 'Aʼzo', 'Aʼzo'],
    desc: [
      'Oʻzbekiston Respublikasi Madaniyat vazirining birinchi oʻrinbosari.',
      'Oʻzbekiston davlat konservatoriyasi rektori.',
      'Oʻzbekiston davlat konservatoriyasining Reja-moliya boʻlimi boshligʻi.',
      'Oʻzbekiston Respublikasi “Tashqi iqtisodiy faoliyat milliy banki” aksiyadorlik jamiyati boshqaruvi raisi.',
      'Oʻzbekiston kompozitorlar va bastakorlari uyushmasi raisi.',
      'Alisher Navoiy nomidagi DAKT direktori.',
      'V. Uspenskiy nomidagi RIMM direktori.',
      'Toshkent musiqa va sanʼat kolleji direktori.',
    ],
    noteHead: 'Izoh',
    note: 'Vasiylik kengashi aʼzolari boshqa ishga oʻtgan taqdirda Kengash tarkibiga ushbu lavozimga yangi tayinlangan yoki mazkur vazifalarni bajarishi yuklatilgan shaxslar kiritiladi.',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Попечительский совет',
    tag: 'Структура', title: 'Попечительский', emphasis: 'совет',
    lead: 'Ниже приведён состав Попечительского совета Государственной консерватории Узбекистана и её Нукусского филиала. Совет состоит из руководителей и ведущих специалистов в области культуры, образования, финансов и музыкального искусства.',
    h1: 'Председательство совета',
    h2: 'Члены совета',
    tags: ['Председатель совета', 'Заместитель председателя', 'Секретарь совета', 'Член', 'Член', 'Член', 'Член', 'Член'],
    desc: [
      'Первый заместитель министра культуры Республики Узбекистан.',
      'Ректор Государственной консерватории Узбекистана.',
      'Начальник планово-финансового отдела Государственной консерватории Узбекистана.',
      'Председатель правления акционерного общества «Национальный банк внешнеэкономической деятельности Республики Узбекистан».',
      'Председатель Союза композиторов и бастакоров Узбекистана.',
      'Директор ГАБТ имени Алишера Навои.',
      'Директор РСММ имени В. Успенского.',
      'Директор Ташкентского колледжа музыки и искусства.',
    ],
    noteHead: 'Примечание',
    note: 'В случае перехода членов Попечительского совета на другую работу в состав Совета включаются лица, вновь назначенные на эту должность или на которых возложено исполнение данных обязанностей.',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Board of Trustees',
    tag: 'Structure', title: 'Board of', emphasis: 'Trustees',
    lead: 'Below is the composition of the Board of Trustees of the State Conservatory of Uzbekistan and its Nukus branch. The board consists of leaders and leading specialists in the fields of culture, education, finance and musical art.',
    h1: 'Board chairmanship',
    h2: 'Board members',
    tags: ['Chairman of the Board', 'Deputy Chairman', 'Board Secretary', 'Member', 'Member', 'Member', 'Member', 'Member'],
    desc: [
      'First Deputy Minister of Culture of the Republic of Uzbekistan.',
      'Rector of the State Conservatory of Uzbekistan.',
      'Head of the Planning and Finance Department of the State Conservatory of Uzbekistan.',
      'Chairman of the Board of the “National Bank for Foreign Economic Activity of the Republic of Uzbekistan” joint-stock company.',
      'Chairman of the Union of Composers and Bastakors of Uzbekistan.',
      'Director of the Alisher Navoi State Academic Bolshoi Theatre.',
      'Director of the V. Uspensky Research Institute of Musical Art.',
      'Director of the Tashkent College of Music and Art.',
    ],
    noteHead: 'Note',
    note: 'If members of the Board of Trustees move to another job, persons newly appointed to this position or entrusted with these duties are included in the Board.',
  },
};

export default function VasiylikKengashi() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma, to: '/tuzilma' },
    { label: tr.crumbThis },
  ];

  const cardAt = (i) => ({ tag: tr.tags[i], title: NAMES[i], desc: tr.desc[i] });

  return (
    <InfoPage
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={BREADCRUMBS}
      lead={tr.lead}
      sections={[
        { heading: tr.h1, cards: [cardAt(0), cardAt(1), cardAt(2)] },
        { heading: tr.h2, cards: [cardAt(3), cardAt(4), cardAt(5), cardAt(6), cardAt(7)] },
        { heading: tr.noteHead, text: tr.note },
      ]}
    />
  );
}
