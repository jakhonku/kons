import OrgDetail from '../components/OrgDetail';
import { useTranslation } from '../contexts/LanguageContext';

const LEAD_UZ = `Musiqa san'ati fakultetida 8 ta ta'lim yo'nalishi mavjud. Jumladan, Akademik xonandalik va opera tayyorlovi, Akademik xor dirijyorligi, Maxsus fortepiano, San'atshunoslik (musiqashunoslik), Professional ta'lim: cholg'u ijrochiligi (turlari bo'yicha), Professional ta'lim: vokal san'ati (turlari bo'yicha), Bastakorlik san'ati va Musiqiy ovoz rejissyorligi.`;

const LEAD_RU = `На факультете музыкального искусства действуют 8 направлений образования. В частности, академическое пение и оперная подготовка, академическое хоровое дирижирование, специальное фортепиано, искусствоведение (музыковедение), профессиональное образование: инструментальное исполнительство (по видам), профессиональное образование: вокальное искусство (по видам), композиторское искусство и музыкальная звукорежиссура.`;

const LEAD_EN = `There are 8 educational directions at the Faculty of Music Art. These include Academic Singing and Opera Training, Academic Choral Conducting, Special Piano, Art History (Musicology), Professional Education: Instrumental Performance (by type), Professional Education: Vocal Art (by type), Compositional Art, and Music Sound Engineering.`;

const HAQIDA_UZ = `Hozirgi kunda mutaxassislik kafedralarida musiqa san'atining taniqli va yetakchi namoyandalari — O'zbekiston san'at arboblari, O'zbekiston xalq artistlari, O'zbekistonda xizmat ko'rsatgan artistlar, O'zbekistonda xizmat ko'rsatgan yoshlar murabbiylari musiqa san'atimiz rivoji uchun yuqori malakali kadrlar tayyorlab kelmoqdalar.

Fakultet kadrlar tayyorlash jarayonini ishlab chiqarishdan ajralgan (kunduzgi) holda amalga oshiriladi.

Shuningdek, Fakultet professor-o'qituvchilarining ilmiy salohiyatini mustahkamlash maqsadida ilmiy-uslubiy seminarlar, taniqli olim va mutaxassislar bilan davra suhbatlari, turli loyihalar, ilmiy ma'ruzalar muntazam o'tkazib boriladi.

Fakultet hamda xorijiy musiqa san'ati muassasalari bilan samarali hamkorlik yo'lga qo'yilgan. Italiya, Germaniya, AQSH, Fransiya, Rossiya, Janubiy Koreya shular jumlasidan.`;

const HAQIDA_RU = `В настоящее время на профильных кафедрах выдающиеся и ведущие деятели музыкального искусства — деятели искусств Узбекистана, народные артисты Узбекистана, заслуженные артисты Узбекистана, заслуженные наставники молодежи Узбекистана готовят высококвалифицированные кадры для развития музыкального искусства.

Процесс подготовки кадров на факультете осуществляется в очной (дневной) форме.

Также в целях укрепления научного потенциала профессоров и преподавателей факультета регулярно проводятся научно-методические семинары, круглые столы с участием известных ученых и специалистов, различные проекты, научные доклады.

Налажено эффективное сотрудничество с зарубежными музыкальными учреждениями. В их числе Италия, Германия, США, Франция, Россия, Южная Корея.`;

const HAQIDA_EN = `Currently, prominent and leading figures of music art — Art Workers of Uzbekistan, People's Artists of Uzbekistan, Honored Artists of Uzbekistan, Honored Youth Coaches of Uzbekistan are training highly qualified personnel for the development of our music art at the specialty departments.

The faculty conducts the training process in a full-time (daytime) format.

In addition, in order to strengthen the scientific potential of the faculty's professors and teachers, scientific-methodical seminars, roundtables with famous scientists and specialists, various projects, and scientific lectures are regularly held.

Fruitful cooperation has been established with foreign music institutions. These include Italy, Germany, USA, France, Russia, South Korea.`;

const KAFEDRALAR_UZ = [
  'Akademik xonandalik va opera tayyorlovi',
  'Akademik xor dirijyorligi',
  'Maxsus fortepiano',
  'Konsertmeysterlik mahorati',
  'Kamer musiqasi',
  'Musiqa nazariyasi',
  'Musiqa tarixi va tanqidi',
  "O'zbek musiqasi tarixi",
  "Kompozitorlik va cholg'ulashtirish",
];

const KAFEDRALAR_RU = [
  'Академическое пение и оперная подготовка',
  'Академическое хоровое дирижирование',
  'Специальное фортепиано',
  'Концертмейстерское мастерство',
  'Камерная музыка',
  'Теория музыки',
  'История и критика музыки',
  'История узбекской музыки',
  'Композиция и инструментовка',
];

const KAFEDRALAR_EN = [
  'Academic Singing and Opera Preparation',
  'Academic Choral Conducting',
  'Special Piano',
  'Concertmaster Skills',
  'Chamber Music',
  'Music Theory',
  'Music History and Criticism',
  'History of Uzbek Music',
  'Composition and Orchestration',
];

const PROFESSOR_UZ = `Professor-o'qituvchilar soni umumiy 123 tani tashkil etadi. Jumladan:
— 6 nafar fan doktori;
— 11 nafar fan nomzodi professor;
— 24 nafar professor;
— 7 nafar fan nomzodi dotsent;
— 18 nafar dotsent;
— 8 nafar fan nomzodi katta o'qituvchi;
— 37 nafar katta o'qituvchi;
— 12 nafar o'qituvchi mavjud.

Fakultetda jami talabalar soni 535 tani tashkil etadi. Ular orasida davlat stipendiyasi, davlat mukofotlari sovrindorlari, xalqaro va respublika tanlovi g'oliblari mavjud.`;

const PROFESSOR_RU = `Общее количество профессорско-преподавательского состава составляет 123 человека. В частности:
— 6 докторов наук;
— 11 профессоров — кандидатов наук;
— 24 профессора;
— 7 доцентов — кандидатов наук;
— 18 доцентов;
— 8 старших преподавателей — кандидатов наук;
— 37 старших преподавателей;
— 12 преподавателей.

Общее число студентов на факультете составляет 535 человек. Среди них есть лауреаты государственных стипендений, государственных наград, победители международных и республиканских конкурсов.`;

const PROFESSOR_EN = `The total number of professors and teachers is 123. In particular:
— 6 doctors of science;
— 11 professors, candidates of science;
— 24 professors;
— 7 associate professors, candidates of science;
— 18 associate professors;
— 8 senior teachers, candidates of science;
— 37 senior teachers;
— 12 teachers.

The total number of students at the faculty is 535. Among them are winners of state scholarships, state awards, international and republican competitions.`;

const T = {
  uz: {
    crumbHome: 'Bosh sahifa',
    crumbTuzilma: 'Tuzilma',
    crumbFakultetlar: 'Fakultetlar',
    crumbThis: 'Musiqa sanʼati fakulteti',
    tag: 'Fakultetlar',
    title: 'Musiqa sanʼati',
    emphasis: 'fakulteti',
    hHaqida: 'Fakultet haqida',
    hKafedralar: 'Fakultetda 8 ta kafedra mavjud',
    hProfessor: 'Professor-oʻqituvchilar va talabalar',
    hDeputies: 'Dekan oʻrinbosarlari',
    role: 'Musiqa sanʼati fakulteti dekani',
    roleDeputy1: 'Yoshlar masalalari, maʼnaviy va maʼrifiy ishlar boʻyicha dekan oʻrinbosari',
    roleDeputy2: 'Oʻquv ishlari boʻyicha dekan oʻrinbosari',
  },
  ru: {
    crumbHome: 'Главная',
    crumbTuzilma: 'Структура',
    crumbFakultetlar: 'Факультеты',
    crumbThis: 'Факультет музыкального искусства',
    tag: 'Факультеты',
    title: 'Факультет музыкального',
    emphasis: 'искусства',
    hHaqida: 'О факультете',
    hKafedralar: 'На факультете действуют 8 кафедр',
    hProfessor: 'Преподавательский состав и студенты',
    hDeputies: 'Заместители декана',
    role: 'Декан факультета музыкального искусства',
    roleDeputy1: 'Заместитель декана по делам молодёжи, духовности и просветительства',
    roleDeputy2: 'Заместитель декана по учебным делам',
  },
  en: {
    crumbHome: 'Home',
    crumbTuzilma: 'Structure',
    crumbFakultetlar: 'Faculties',
    crumbThis: 'Faculty of Music Art',
    tag: 'Faculties',
    title: 'Faculty of',
    emphasis: 'Music Art',
    hHaqida: 'About the Faculty',
    hKafedralar: 'There are 8 departments in the faculty',
    hProfessor: 'Professors, Teachers and Students',
    hDeputies: 'Deputy Deans',
    role: 'Dean of the Faculty of Music Art',
    roleDeputy1: 'Deputy Dean for Youth Affairs, Spirituality and Enlightenment',
    roleDeputy2: 'Deputy Dean for Academic Affairs',
  },
};

export default function MusiqaSanati() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const leads = { uz: LEAD_UZ, ru: LEAD_RU, en: LEAD_EN };
  const haqidaText = { uz: HAQIDA_UZ, ru: HAQIDA_RU, en: HAQIDA_EN };
  const kafedralar = { uz: KAFEDRALAR_UZ, ru: KAFEDRALAR_RU, en: KAFEDRALAR_EN };
  const professorText = { uz: PROFESSOR_UZ, ru: PROFESSOR_RU, en: PROFESSOR_EN };

  const DEPUTIES = [
    {
      name: 'Elmurodova Gulrux Axmadjonovna',
      role: tr.roleDeputy1,
      title: 'Dotsent v.b.',
      photo: '/bolimlar/musiqa-2.png',
    },
    {
      name: "Qo'ldashboyev Bahodirjon Axadjon o'g'li",
      role: tr.roleDeputy2,
      title: 'O\'qituvchi',
      photo: '/bolimlar/musiqa-3.png',
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
        name: 'Kazaqbayeva Maxfuza Sultanovna',
        role: tr.role,
        awards: ['professor'],
        photo: '/bolimlar/musiqa-1.png',
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
          heading: tr.hProfessor,
          text: professorText[lang] || professorText.uz,
        },
      ]}
    >
      <div className="section-divider">
        <h2>{tr.hDeputies}</h2>
      </div>

      <div 
        className="prorektor-grid" 
        style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 340px))',
          justifyContent: 'center',
          gap: '30px'
        }}
      >
        {DEPUTIES.map((dep, idx) => (
          <div key={idx} className="prorektor-card" style={{ maxWidth: '340px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              paddingBottom: '20px',
              background: 'var(--light-50)',
              borderBottom: '1px solid var(--light-border)'
            }}>
              <div style={{
                width: '180px',
                height: '240px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: 'var(--cream)',
                boxShadow: '0 4px 12px rgba(26, 26, 56, 0.08)',
              }}>
                <img
                  src={dep.photo}
                  alt={dep.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
            <div className="prorektor-body">
              <div className="prorektor-badge">{dep.title}</div>
              <h3 className="prorektor-name">{dep.name}</h3>
              <p className="prorektor-title-text">{dep.role}</p>
            </div>
          </div>
        ))}
      </div>
    </OrgDetail>
  );
}
