import OrgDetail from '../components/OrgDetail';
import { useTranslation } from '../contexts/LanguageContext';

const LEAD_UZ = `O'zbekiston Respublikasi Prezidentining "O'zbekiston davlat konservatoriyasi faoliyatini yanada rivojlantirish va takomillashtirish chora-tadbirlari to'g'risida" 2017-yil 8-avgustdagi PQ-3178-sonli qarori asosida "Cholg'u ijrochiligi" fakulteti tashkil qilindi.

Fakultetda 60211500 — Cholg'u ijrochiligi (torli cholg'ular), 60211500 — Cholg'u ijrochiligi (puflama va zarbli cholg'ular), 60211500 — Cholg'u ijrochiligi (xalq cholg'ulari), 60211300 — Dirijorlik (turlari bo'yicha) ta'lim yo'nalishlari mavjud.`;

const LEAD_RU = `Факультет «Инструментальное исполнительство» был организован на основании Постановления Президента Республики Узбекистан № ПП-3178 от 8 августа 2017 года «О мерах по дальнейшему развитию и совершенствованию деятельности Государственной консерватории Узбекистана».

На факультете реализуются образовательные направления: 60211500 — Инструментальное исполнительство (струнные инструменты), 60211500 — Инструментальное исполнительство (духовые и ударные инструменты), 60211500 — Инструментальное исполнительство (народные инструменты), 60211300 — Дирижёрство (по видам).`;

const LEAD_EN = `The Faculty of Instrumental Performance was established by Decree No. PD-3178 of the President of the Republic of Uzbekistan dated August 8, 2017, "On measures to further develop and improve the activities of the State Conservatory of Uzbekistan."

The faculty has the following educational directions: 60211500 — Instrumental Performance (string instruments), 60211500 — Instrumental Performance (wind and percussion instruments), 60211500 — Instrumental Performance (folk instruments), 60211300 — Conducting (by type).`;

const HAQIDA_UZ = `Hozirgi kunga qadar mutaxassislik kafedralarida musiqa san'atining taniqli va yetakchi namoyandalari — O'zbekiston san'at arboblari, O'zbekiston xalq artistlari, O'zbekistonda xizmat ko'rsatgan artistlar, O'zbekistonda xizmat ko'rsatgan yoshlar murabbiylari musiqa san'atimiz rivoji uchun yuqori malakali kadrlar tayyorlab kelmoqdalar.

Fakultet kadrlar tayyorlash jarayonini ishlab chiqarishdan ajralgan (kunduzgi) holda amalga oshiriladi.

Shuningdek, Fakultet professor-o'qituvchilarining ilmiy salohiyatini mustahkamlash maqsadida ilmiy-uslubiy seminarlar, taniqli olim va mutaxassislar bilan davra suhbatlari, turli loyihalar, ilmiy ma'ruzalar muntazam o'tkazib boriladi.

Fakultet hamda xorijiy musiqa san'ati muassasalari bilan ham samarali hamkorlik yo'lga qo'yilgan. Italiya, Germaniya, AQSH, Fransiya, Rossiya, Janubiy Koreya shular jumlasidan.`;

const HAQIDA_RU = `На сегодняшний день в специализированных кафедрах выдающиеся представители музыкального искусства — деятели искусств Узбекистана, народные артисты Узбекистана, заслуженные артисты Узбекистана, заслуженные наставники молодёжи Узбекистана ведут подготовку высококвалифицированных кадров для развития музыкального искусства.

Подготовка кадров на факультете осуществляется в очной (дневной) форме обучения.

С целью укрепления научного потенциала профессорско-преподавательского состава факультета регулярно проводятся научно-методические семинары, круглые столы с известными учёными и специалистами, различные проекты и научные доклады.

Налажено эффективное сотрудничество факультета с зарубежными учреждениями музыкального искусства: Италией, Германией, США, Францией, Россией, Южной Кореей.`;

const HAQIDA_EN = `To date, distinguished representatives of musical art — Honored Art Workers of Uzbekistan, People's Artists of Uzbekistan, Honored Artists of Uzbekistan, Honored Youth Coaches of Uzbekistan — are training highly qualified personnel for the development of musical art at the specialized departments.

The faculty trains personnel in full-time (daytime) format.

To strengthen the scientific potential of the faculty's teaching staff, scientific-methodological seminars, roundtable discussions with renowned scholars and specialists, various projects and scientific lectures are regularly held.

Effective cooperation has been established with foreign musical art institutions from Italy, Germany, the USA, France, Russia, and South Korea.`;

const KAFEDRALAR_UZ = [
  "Puflama va zarbli cholg'ular",
  'Xalq cholgularida ijrochilik',
  "Torli cholg'ular",
  "Orkestr dirijyorligi",
  "O'zbek tili va ijtimoiy fanlar",
  "Fakultetlararo fortepiano",
];

const KAFEDRALAR_RU = [
  'Духовые и ударные инструменты',
  'Исполнительство на народных инструментах',
  'Струнные инструменты',
  'Оркестровое дирижёрство',
  'Узбекский язык и общественные науки',
  'Межфакультетское фортепиано',
];

const KAFEDRALAR_EN = [
  'Wind and Percussion Instruments',
  'Folk Instrument Performance',
  'String Instruments',
  'Orchestral Conducting',
  'Uzbek Language and Social Sciences',
  'Inter-Faculty Piano',
];

const BAKALAVR_UZ = [
  '60211600 — Dirijyorlik: "Opera-simfoniya dirijyorligi", "O\'zbek xalq cholg\'ulari orkestri dirijyorligi", "Harbiy orkestr dirijyorligi"',
  "60211500 — Cholg'u ijrochiligi (xalq cholg'ulari) ta'lim yo'nalishlari bo'yicha kadrlar tayyorlov",
  "60211500 — Cholg'u ijrochiligi (puflama va zarbli cholg'ular) ta'lim yo'nalishlari bo'yicha kadrlar tayyorlov",
  "60211500 — Cholg'u ijrochiligi (torli cholg'ular) ta'lim yo'nalishlari bo'yicha kadrlar tayyorlov",
];

const BAKALAVR_RU = [
  '60211600 — Дирижёрство: «Оперно-симфоническое дирижёрство», «Дирижёрство оркестра узбекских народных инструментов», «Дирижёрство военного оркестра»',
  '60211500 — Подготовка кадров по направлению «Инструментальное исполнительство (народные инструменты)»',
  '60211500 — Подготовка кадров по направлению «Инструментальное исполнительство (духовые и ударные инструменты)»',
  '60211500 — Подготовка кадров по направлению «Инструментальное исполнительство (струнные инструменты)»',
];

const BAKALAVR_EN = [
  '60211600 — Conducting: "Opera-Symphony Conducting", "Uzbek Folk Instruments Orchestra Conducting", "Military Orchestra Conducting"',
  '60211500 — Training in Instrumental Performance (folk instruments)',
  '60211500 — Training in Instrumental Performance (wind and percussion instruments)',
  '60211500 — Training in Instrumental Performance (string instruments)',
];

const PROFESSOR_UZ = `Professor-o'qituvchilar soni umumiy 101 tani tashkil etadi. Jumladan:
— 7 nafar fan nomzodi (PhD);
— 21 nafar professor;
— 26 nafar dotsent.

Fakultetda jami talabalar soni 535 tani tashkil etadi. Ular orasida davlat stipendiyasi, davlat mukofotlari sovrindorlari, xalqaro va respublika tanlovi g'oliblari mavjud:
— 6 nafar davlat mukofoti sovrindorlari
— 13 nafar davlat stipendiyasi sohiblari
— 61 nafar xalqaro tanlovi g'oliblari
— 73 nafar respublika tanlovi g'oliblari`;

const PROFESSOR_RU = `Общее число профессорско-преподавательского состава составляет 101 человек: 7 кандидатов наук (PhD); 21 профессор; 26 доцентов.

Общее число студентов факультета составляет 535 человек. Среди них:
— 6 лауреатов государственных премий
— 13 стипендиатов государственных стипендий
— 61 победитель международных конкурсов
— 73 победителя республиканских конкурсов`;

const PROFESSOR_EN = `The total number of teaching staff is 101 people: 7 candidates of science (PhD); 21 professors; 26 associate professors.

The total number of students at the faculty is 535. Among them:
— 6 state award winners
— 13 state scholarship recipients
— 61 international competition winners
— 73 republican competition winners`;

const T = {
  uz: {
    crumbHome: 'Bosh sahifa',
    crumbTuzilma: 'Tuzilma',
    crumbFakultetlar: 'Fakultetlar',
    crumbThis: "Cholg'u ijrochiligi fakulteti",
    tag: 'Fakultetlar',
    title: "Cholg'u ijrochiligi",
    emphasis: 'fakulteti',
    hHaqida: 'Fakultet haqida',
    hKafedralar: 'Fakultet tarkibida 6 ta kafedra mavjud',
    hBakalavr: "Bakalavr ta'lim yo'nalishlari",
    hProfessor: "Professor-o'qituvchilar va talabalar",
    hDeputies: 'Dekan oʻrinbosarlari',
    role: "Cholg'u ijrochiligi fakulteti dekani",
    awards1: ['Nihol mukofoti sovrindori', '"Madaniyat va san\'at fidokori" ko\'krak nishoni'],
    awards2: ['"Madaniyat va san\'at fidokori" ko\'krak nishoni', 'Mustaqilligimizning 30 yilligi ko\'krak nishoni'],
    roleDeputy1: "Yoshlar masalalari, ma'naviy va ma'rifiy ishlar bo'yicha dekan o'rinbosari",
    roleDeputy2: "O'quv ishlari bo'yicha dekan o'rinbosari",
  },
  ru: {
    crumbHome: 'Главная',
    crumbTuzilma: 'Структура',
    crumbFakultetlar: 'Факультеты',
    crumbThis: 'Факультет инструментального исполнительства',
    tag: 'Факультеты',
    title: 'Факультет инструментального',
    emphasis: 'исполнительства',
    hHaqida: 'О факультете',
    hKafedralar: 'В составе факультета 6 кафедр',
    hBakalavr: 'Направления бакалавриата',
    hProfessor: 'Преподаватели и студенты',
    hDeputies: 'Заместители декана',
    role: 'Декан факультета инструментального исполнительства',
    awards1: ['Лауреат премии «Nihol»', 'Нагрудный знак «Fidokor san\'at va madaniyat»'],
    awards2: ['Нагрудный знак «Fidokor san\'at va madaniyat»', 'Нагрудный знак «30-летие независимости»'],
    roleDeputy1: 'Заместитель декана по делам молодёжи, духовности и просветительства',
    roleDeputy2: 'Заместитель декана по учебным делам',
  },
  en: {
    crumbHome: 'Home',
    crumbTuzilma: 'Structure',
    crumbFakultetlar: 'Faculties',
    crumbThis: 'Faculty of Instrumental Performance',
    tag: 'Faculties',
    title: 'Faculty of Instrumental',
    emphasis: 'Performance',
    hHaqida: 'About the Faculty',
    hKafedralar: 'There are 6 departments in the faculty',
    hBakalavr: 'Bachelor Degree Programs',
    hProfessor: 'Teaching Staff and Students',
    hDeputies: 'Deputy Deans',
    role: 'Dean of the Faculty of Instrumental Performance',
    awards1: ['Nihol Award Laureate', '"Culture and Art Devotee" Badge'],
    awards2: ['"Culture and Art Devotee" Badge', '"30th Anniversary of Independence" Badge'],
    roleDeputy1: 'Vice Dean for Youth Affairs, Spirituality and Enlightenment',
    roleDeputy2: 'Vice Dean for Academic Affairs',
  },
};

export default function CholuIjrochiligi() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const leads = { uz: LEAD_UZ, ru: LEAD_RU, en: LEAD_EN };
  const haqidaText = { uz: HAQIDA_UZ, ru: HAQIDA_RU, en: HAQIDA_EN };
  const kafedralar = { uz: KAFEDRALAR_UZ, ru: KAFEDRALAR_RU, en: KAFEDRALAR_EN };
  const bakalavr = { uz: BAKALAVR_UZ, ru: BAKALAVR_RU, en: BAKALAVR_EN };
  const professorText = { uz: PROFESSOR_UZ, ru: PROFESSOR_RU, en: PROFESSOR_EN };

  const DEPUTIES = [
    {
      name: 'Zokirov Bexzod Baxtiyor o\'g\'li',
      role: tr.roleDeputy1,
      awards: tr.awards2,
      photo: '/bolimlar/cholgu-2.jpeg',
    },
    {
      name: 'Ubayev Alisher Ismonali o\'g\'li',
      role: tr.roleDeputy2,
      photo: '/bolimlar/cholgu-3.jpeg',
    },
  ];

  return (
    <OrgDetail
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={[
        { label: tr.crumbHome, to: '/' },
        { label: tr.crumbTuzilma },
        { label: tr.crumbFakultetlar, to: '/fakultetlar' },
        { label: tr.crumbThis },
      ]}
      leader={{
        name: 'Axmedov Alisher Nosirovich',
        role: tr.role,
        awards: tr.awards1,
        photo: '/bolimlar/cholgu-1.jpeg',
      }}
      intro={[leads[lang] || leads.uz]}
      sections={[
        {
          heading: tr.hHaqida,
          text: haqidaText[lang] || haqidaText.uz,
        },
        {
          heading: tr.hKafedralar,
          items: kafedralar[lang] || kafedralar.uz,
        },
        {
          heading: tr.hBakalavr,
          items: bakalavr[lang] || bakalavr.uz,
        },
        {
          heading: tr.hProfessor,
          text: professorText[lang] || professorText.uz,
        },
      ]}
    >
      <div className="section-divider">
        <h2>{tr.hDeputies}</h2>
      </div>

      <div className="prorektor-grid">
        {DEPUTIES.map((dep, idx) => (
          <div key={idx} className="prorektor-card">
            <div className="prorektor-photo">
              <img src={dep.photo} alt={dep.name} loading="lazy" />
            </div>
            <div className="prorektor-body">
              {dep.awards && dep.awards.length > 0 && (
                <div className="prorektor-badge" style={{ textTransform: 'none', letterSpacing: '0.5px' }}>
                  {dep.awards.join(', ')}
                </div>
              )}
              <h3 className="prorektor-name">{dep.name}</h3>
              <p className="prorektor-title-text">{dep.role}</p>
            </div>
          </div>
        ))}
      </div>
    </OrgDetail>
  );
}
