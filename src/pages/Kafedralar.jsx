import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

// [prof|dots, name] — har bir kafedra mudiri (ismlar barcha tillarda bir xil)
const PEOPLE = [
  ['prof', 'Yusupova Madina Otabekovna'], ['dots', 'Karimov Bobur Sherzodovich'], ['prof', 'Tursunova Dilfuza Otabekovna'], ['dots', 'Olimov Sherzod Akbarovich'],
  ['prof', 'Rashidova Nargiza Bekovna'], ['prof', 'Akhmedov Davron Sherzodovich'], ['dots', 'Mirzayev Bobur Olimovich'], ['prof', 'Sodiqova Madina Erkinovna'], ['prof', 'Yusupov Akbar Murodovich'], ['dots', 'Toshmatova Sevara Otabekovna'], ['dots', 'Karimov Sardor Bobirovich'],
  ['prof', 'Aliyeva Nigora Sherzodovna'], ['prof', 'Tursunov Otabek Murodovich'], ['dots', 'Yusupova Sevara Akbarovna'], ['dots', 'Rashidov Bobur Sherzodovich'],
  ['prof', 'Qodirova Madina Olimovna'], ['dots', 'Akhmedov Sardor Bobirovich'], ['prof', 'Toshmatov Akbar Sherzodovich'], ['dots', 'Mirzayeva Gulnora Otabekovna'], ['prof', 'Yusupov Davron Murodovich'],
  ['prof', 'Karimova Sarvinoz Otabekovna'], ['dots', 'Sodiqov Sherzod Bobirovich'], ['dots', 'Aliyeva Nargiza Erkinovna'], ['dots', 'Rashidov Otabek Sherzodovich'],
];

const GROUPS = [4, 7, 4, 5, 4]; // har fakultetdagi kafedralar soni

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Kafedralar',
    tag: 'Tuzilma', title: 'Konservatoriya', emphasis: 'kafedralari',
    lead: 'Konservatoriyaning 16 kafedrasi 5 fakultet ostida tashkil etilgan. Har bir kafedra oʻz sohasi boʻyicha oʻquv-uslubiy ishlarni amalga oshiradi va ilmiy tadqiqotlarni olib boradi.',
    stats: [{ value: '16', label: 'Kafedra' }, { value: '220+', label: 'Pedagog' }, { value: '15', label: 'Fan doktori' }],
    mudir: 'Mudir', prof: 'prof.', dots: 'dots.',
    headings: ['Akademik xonandalik fakulteti', 'Cholgʻu ijrochiligi fakulteti', 'Kompozitsiya va musiqa nazariyasi', 'Xalq cholgʻulari fakulteti', 'Musiqa sanʼati va pedagogika'],
    titles: [
      'Akademik xonandalik kafedrasi', 'Opera tayyorlash kafedrasi', 'Xor dirijyorligi kafedrasi', 'Sahna nutqi va aktyorlik mahorati',
      'Fortepiano kafedrasi', 'Torli cholgʻular kafedrasi', 'Dam olish cholgʻulari kafedrasi', 'Kamera ansambli', 'Orkestr sinfi va dirijyorlik', 'Konsertmeyster sinfi', 'Estrada-jaz cholgʻulari',
      'Kompozitsiya kafedrasi', 'Musiqa nazariyasi', 'Musiqa tarixi', 'Polifoniya va garmoniya',
      'Dutor va gʻijjak kafedrasi', 'Doira va zarbli cholgʻular', 'Ud va tanbur kafedrasi', 'Xalq ansambli', 'Maqom sanʼati',
      'Musiqa pedagogikasi', 'Maktabgacha taʼlim musiqasi', 'Musiqa psixologiyasi', 'Amaliy musiqa va menejment',
    ],
    responsible: 'Oʻquv-uslubiy boʻlim',
    address: 'Toshkent sh., Shayxontohur tumani, Botir Zokirov koʻchasi 1-uy',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Кафедры',
    tag: 'Структура', title: 'Кафедры', emphasis: 'консерватории',
    lead: '16 кафедр консерватории организованы в составе 5 факультетов. Каждая кафедра ведёт учебно-методическую работу по своему направлению и проводит научные исследования.',
    stats: [{ value: '16', label: 'Кафедр' }, { value: '220+', label: 'Педагогов' }, { value: '15', label: 'Докторов наук' }],
    mudir: 'Заведующий', prof: 'проф.', dots: 'доц.',
    headings: ['Факультет академического пения', 'Факультет инструментального исполнительства', 'Композиция и теория музыки', 'Факультет народных инструментов', 'Музыкальное искусство и педагогика'],
    titles: [
      'Кафедра академического пения', 'Кафедра подготовки оперы', 'Кафедра хорового дирижирования', 'Сценическая речь и актёрское мастерство',
      'Кафедра фортепиано', 'Кафедра струнных инструментов', 'Кафедра духовых инструментов', 'Камерный ансамбль', 'Оркестровый класс и дирижирование', 'Класс концертмейстера', 'Эстрадно-джазовые инструменты',
      'Кафедра композиции', 'Теория музыки', 'История музыки', 'Полифония и гармония',
      'Кафедра дутара и гиджака', 'Дойра и ударные инструменты', 'Кафедра уда и танбура', 'Народный ансамбль', 'Искусство макома',
      'Музыкальная педагогика', 'Музыка дошкольного образования', 'Музыкальная психология', 'Прикладная музыка и менеджмент',
    ],
    responsible: 'Учебно-методический отдел',
    address: 'г. Ташкент, Шайхантахурский район, ул. Ботира Закирова, дом 1',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Departments',
    tag: 'Structure', title: 'Conservatory', emphasis: 'departments',
    lead: 'The conservatory’s 16 departments are organised within 5 faculties. Each department carries out educational and methodological work in its field and conducts research.',
    stats: [{ value: '16', label: 'Departments' }, { value: '220+', label: 'Teachers' }, { value: '15', label: 'Doctors of Science' }],
    mudir: 'Head', prof: 'Prof.', dots: 'Assoc. Prof.',
    headings: ['Faculty of Academic Singing', 'Faculty of Instrumental Performance', 'Composition and Music Theory', 'Faculty of Folk Instruments', 'Music Art and Pedagogy'],
    titles: [
      'Department of Academic Singing', 'Opera Training Department', 'Choral Conducting Department', 'Stage Speech and Acting',
      'Piano Department', 'String Instruments Department', 'Wind Instruments Department', 'Chamber Ensemble', 'Orchestra Class and Conducting', 'Concertmaster Class', 'Pop and Jazz Instruments',
      'Composition Department', 'Music Theory', 'Music History', 'Polyphony and Harmony',
      'Dutar and Gijjak Department', 'Doira and Percussion Instruments', 'Oud and Tanbur Department', 'Folk Ensemble', 'Maqom Art',
      'Music Pedagogy', 'Preschool Music Education', 'Music Psychology', 'Applied Music and Management',
    ],
    responsible: 'Educational and Methodological Department',
    address: 'Tashkent, Shaykhantakhur district, Botir Zokirov street 1',
  },
};

export default function Kafedralar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma },
    { label: tr.crumbThis },
  ];

  // Kafedralarni fakultet guruhlariga ajratish
  const sections = [];
  let cursor = 0;
  GROUPS.forEach((count, gi) => {
    const items = [];
    for (let k = 0; k < count; k++) {
      const idx = cursor + k;
      const [prefixKey, name] = PEOPLE[idx];
      items.push({
        title: tr.titles[idx],
        desc: `${tr.mudir}: ${tr[prefixKey]} ${name}`,
      });
    }
    sections.push({ heading: tr.headings[gi], items });
    cursor += count;
  });

  return (
    <InfoPage
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={BREADCRUMBS}
      lead={tr.lead}
      stats={tr.stats}
      sections={sections}
      contact={{
        responsible: tr.responsible,
        phone: '+998 71 234-56-82',
        email: 'kafedralar@konservatoriya.uz',
        address: tr.address,
      }}
    />
  );
}

