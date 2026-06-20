import PageHero from '../components/PageHero';
import { ExternalLink, Globe, MapPin, Phone, Mail, Music, Calendar, Languages, Clock } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const OFFICIAL_SITE = 'https://uzdknf.uz/';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Nukus filiali',
    tag: 'Tuzilma', title: 'Nukus', emphasis: 'filiali',
    lead: 'Oʻzbekiston Davlat Konservatoriyasining Nukus filiali — Qoraqalpogʻiston Respublikasida professional musiqa taʼlimi beruvchi oliy oʻquv yurti. Filial Oʻzbekiston Respublikasi Vazirlar Mahkamasining 2021-yil 5-apreldagi 186-son qarori bilan tashkil etilgan va 2021-yil 6-sentyabrda birinchi oʻquv yilini boshlagan.',
    intro2: 'Filialning asosiy vazifasi — milliy musiqa sanʼati sohasida yuqori malakali bakalavr va magistrlarni, shuningdek ilmiy-pedagogik kadrlarni tayyorlash, qoraqalpoq milliy musiqa madaniyatini saqlash va rivojlantirishdir. Taʼlim oʻzbek, rus va qoraqalpoq tillarida olib boriladi.',
    siteEyebrow: 'Rasmiy veb-sayt',
    siteDesc: 'Filialning toʻliq maʼlumotlari, qabul, yangiliklar va boʻlimlar bilan tanishish uchun rasmiy saytga tashrif buyuring.',
    siteBtn: 'Saytga oʻtish',
    stats: [
      { value: '2021', label: 'Tashkil etilgan yil' },
      { value: '5', label: 'Taʼlim yoʻnalishi' },
      { value: '3', label: 'Oʻqitish tili' },
    ],
    facultyEyebrow: 'Musiqa sanʼati fakulteti',
    directionsHeading: 'Taʼlim yoʻnalishlari',
    yonalishlar: [
      ['Musiqashunoslik', 'Musiqa nazariyasi va tarixi boʻyicha mutaxassislar tayyorlash.'],
      ['Dirijyorlik', 'Akademik xor dirijyorligi yoʻnalishi.'],
      ['Vokal sanʼati', 'Akademik xonandalik (solo) yoʻnalishi.'],
      ['Orkestr ijrochiligi — Gʻarb cholgʻulari', 'Torli, puflama (yogʻoch va mis) hamda zarbli cholgʻular ijrochiligi.'],
      ['Orkestr ijrochiligi — milliy cholgʻular', 'Qoraqalpoq va oʻzbek xalq cholgʻulari ijrochiligi.'],
    ],
    leaderEyebrow: 'Rahbariyat',
    leaderHeading: 'Filial rahbari',
    directorLabel: 'Filial direktori',
    directorName: 'Allanbaev Rudakiy Orinbaevich',
    directorBio: 'Dotsent, Qoraqalpogʻiston Respublikasida xizmat koʻrsatgan sanʼat arbobi, «Shuhrat» medali sohibi. 2021-yildan filialga rahbarlik qiladi.',
    historyEyebrow: 'Tashkil etilishi',
    historyHeading: 'Filial tarixi',
    historyPre: 'Filial Oʻzbekiston Respublikasi Vazirlar Mahkamasining ',
    historyLink: '2021-yil 5-apreldagi 186-son qarori',
    historyPost: ' bilan Nukus madaniyat ixtisoslashtirilgan maktabi negizida tashkil etilgan. Qarorga koʻra filial uchun zamonaviy oʻquv binosi, 200 va 100 oʻrinli ikkita konsert zali, yotoqxona hamda sport inshooti qurilishi rejalashtirilgan. Filial — konservatoriyaning yuridik shaxs maqomiga ega tarkibiy boʻlinmasi.',
    contactEyebrow: 'Bogʻlanish',
    contactHeading: 'Manzil va aloqa',
    addrLabel: 'Manzil',
    addrValue: ['Qoraqalpogʻiston Respublikasi,', 'Nukus shahar, Sharjaw Abdirov koʻchasi, 5-uy'],
    phoneLabel: 'Telefon',
    emailLabel: 'Email',
    hoursLabel: 'Ish vaqti',
    hoursValue: ['Dushanba – Shanba', '9:00 – 18:00'],
    langLabel: 'Oʻqitish tillari',
    langValue: 'Oʻzbek, rus va qoraqalpoq tillari',
    siteBanner: 'Rasmiy sayt: uzdknf.uz',
    visit: 'Tashrif buyurish',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Нукусский филиал',
    tag: 'Структура', title: 'Нукусский', emphasis: 'филиал',
    lead: 'Нукусский филиал Государственной консерватории Узбекистана — высшее учебное заведение, дающее профессиональное музыкальное образование в Республике Каракалпакстан. Филиал создан постановлением Кабинета Министров Республики Узбекистан №186 от 5 апреля 2021 года и начал первый учебный год 6 сентября 2021 года.',
    intro2: 'Основная задача филиала — подготовка высококвалифицированных бакалавров и магистров, а также научно-педагогических кадров в области национального музыкального искусства, сохранение и развитие каракалпакской национальной музыкальной культуры. Обучение ведётся на узбекском, русском и каракалпакском языках.',
    siteEyebrow: 'Официальный сайт',
    siteDesc: 'Для ознакомления с полной информацией о филиале, приёме, новостях и отделах посетите официальный сайт.',
    siteBtn: 'Перейти на сайт',
    stats: [
      { value: '2021', label: 'Год основания' },
      { value: '5', label: 'Направлений образования' },
      { value: '3', label: 'Языка обучения' },
    ],
    facultyEyebrow: 'Факультет музыкального искусства',
    directionsHeading: 'Направления образования',
    yonalishlar: [
      ['Музыковедение', 'Подготовка специалистов по теории и истории музыки.'],
      ['Дирижирование', 'Направление академического хорового дирижирования.'],
      ['Вокальное искусство', 'Направление академического (сольного) пения.'],
      ['Оркестровое исполнительство — западные инструменты', 'Исполнительство на струнных, духовых (деревянных и медных) и ударных инструментах.'],
      ['Оркестровое исполнительство — национальные инструменты', 'Исполнительство на каракалпакских и узбекских народных инструментах.'],
    ],
    leaderEyebrow: 'Руководство',
    leaderHeading: 'Руководитель филиала',
    directorLabel: 'Директор филиала',
    directorName: 'Алланбаев Рудакий Оринбаевич',
    directorBio: 'Доцент, заслуженный деятель искусств Республики Каракалпакстан, обладатель медали «Шухрат». Руководит филиалом с 2021 года.',
    historyEyebrow: 'Создание',
    historyHeading: 'История филиала',
    historyPre: 'Филиал создан постановлением Кабинета Министров Республики Узбекистан ',
    historyLink: '№186 от 5 апреля 2021 года',
    historyPost: ' на базе Нукусской специализированной школы культуры. Согласно постановлению для филиала запланировано строительство современного учебного корпуса, двух концертных залов на 200 и 100 мест, общежития и спортивного сооружения. Филиал — структурное подразделение консерватории со статусом юридического лица.',
    contactEyebrow: 'Контакты',
    contactHeading: 'Адрес и контакты',
    addrLabel: 'Адрес',
    addrValue: ['Республика Каракалпакстан,', 'г. Нукус, ул. Шаржав Абдирова, дом 5'],
    phoneLabel: 'Телефон',
    emailLabel: 'Email',
    hoursLabel: 'Время работы',
    hoursValue: ['Понедельник – Суббота', '9:00 – 18:00'],
    langLabel: 'Языки обучения',
    langValue: 'Узбекский, русский и каракалпакский языки',
    siteBanner: 'Официальный сайт: uzdknf.uz',
    visit: 'Посетить',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Nukus branch',
    tag: 'Structure', title: 'Nukus', emphasis: 'branch',
    lead: 'The Nukus branch of the State Conservatory of Uzbekistan is a higher education institution providing professional music education in the Republic of Karakalpakstan. The branch was established by Resolution No. 186 of the Cabinet of Ministers of the Republic of Uzbekistan dated 5 April 2021 and began its first academic year on 6 September 2021.',
    intro2: 'The main task of the branch is to train highly qualified bachelors and masters, as well as scientific and pedagogical staff in the field of national musical art, and to preserve and develop Karakalpak national musical culture. Education is conducted in Uzbek, Russian and Karakalpak languages.',
    siteEyebrow: 'Official website',
    siteDesc: 'Visit the official website to learn about the branch’s full information, admissions, news and departments.',
    siteBtn: 'Go to website',
    stats: [
      { value: '2021', label: 'Year founded' },
      { value: '5', label: 'Fields of study' },
      { value: '3', label: 'Languages of instruction' },
    ],
    facultyEyebrow: 'Faculty of Musical Art',
    directionsHeading: 'Fields of study',
    yonalishlar: [
      ['Musicology', 'Training specialists in music theory and history.'],
      ['Conducting', 'Academic choral conducting field.'],
      ['Vocal Art', 'Academic (solo) singing field.'],
      ['Orchestral Performance — Western instruments', 'Performance on string, wind (woodwind and brass) and percussion instruments.'],
      ['Orchestral Performance — national instruments', 'Performance on Karakalpak and Uzbek folk instruments.'],
    ],
    leaderEyebrow: 'Administration',
    leaderHeading: 'Head of the branch',
    directorLabel: 'Branch director',
    directorName: 'Allanbaev Rudakiy Orinbaevich',
    directorBio: 'Associate Professor, Honoured Art Worker of the Republic of Karakalpakstan, holder of the “Shuhrat” medal. Has been heading the branch since 2021.',
    historyEyebrow: 'Establishment',
    historyHeading: 'History of the branch',
    historyPre: 'The branch was established by ',
    historyLink: 'Resolution No. 186 of the Cabinet of Ministers dated 5 April 2021',
    historyPost: ' on the basis of the Nukus specialized school of culture. According to the resolution, a modern educational building, two concert halls with 200 and 100 seats, a dormitory and a sports facility are planned for the branch. The branch is a structural unit of the conservatory with the status of a legal entity.',
    contactEyebrow: 'Contact',
    contactHeading: 'Address and contacts',
    addrLabel: 'Address',
    addrValue: ['Republic of Karakalpakstan,', 'Nukus city, Sharjaw Abdirov street, 5'],
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Working hours',
    hoursValue: ['Monday – Saturday', '9:00 – 18:00'],
    langLabel: 'Languages of instruction',
    langValue: 'Uzbek, Russian and Karakalpak languages',
    siteBanner: 'Official website: uzdknf.uz',
    visit: 'Visit',
  },
};

const sectionTitle = {
  fontFamily: 'var(--font-display)',
  color: 'var(--navy)',
  fontSize: '1.6rem',
  fontWeight: 500,
  marginBottom: '24px',
};

const eyebrow = {
  fontSize: '0.6rem',
  fontWeight: 700,
  letterSpacing: '3px',
  color: 'var(--gold-dark)',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

export default function NukusFiliali() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma, to: '/tuzilma' },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.tag}
        title={tr.title}
        emphasis={tr.emphasis}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* ── Kirish + rasmiy sayt ── */}
          <div
            className="reveal nukus-intro-grid"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: '36px', alignItems: 'start', marginBottom: '64px' }}
          >
            <div>
              <p className="lead" style={{ marginBottom: '18px' }}>
                {tr.lead}
              </p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
                {tr.intro2}
              </p>
            </div>

            {/* Rasmiy sayt kartasi */}
            <aside
              style={{ background: 'var(--bg-deep, #0c0c1e)', color: '#fff', borderRadius: '14px', padding: '28px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(201,168,76,0.15)', color: 'var(--gold, #c9a84c)', marginBottom: '16px' }}>
                <Globe size={22} />
              </div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold, #c9a84c)', textTransform: 'uppercase', marginBottom: '8px' }}>
                {tr.siteEyebrow}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '6px' }}>
                uzdknf.uz
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {tr.siteDesc}
              </p>
              <a
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--gold, #c9a84c)', color: '#1a1a1a', padding: '13px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                {tr.siteBtn} <ExternalLink size={15} />
              </a>
            </aside>
          </div>

          {/* ── Statistika ── */}
          <div
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', marginBottom: '64px' }}
          >
            {tr.stats.map((s) => (
              <div key={s.label} style={{ background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold-dark, #a8891e)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: '#777', fontSize: '0.82rem', marginTop: '10px', letterSpacing: '0.5px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Taʼlim yoʻnalishlari ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>{tr.facultyEyebrow}</div>
            <h2 style={sectionTitle}>{tr.directionsHeading}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
              {tr.yonalishlar.map(([title, desc]) => (
                <div key={title} style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'var(--light-50, #f8f5ee)', color: 'var(--gold-dark, #a8891e)', marginBottom: '14px' }}>
                    <Music size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '8px', lineHeight: 1.35 }}>{title}</h3>
                  <p style={{ color: '#666', fontSize: '0.86rem', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Rahbariyat ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>{tr.leaderEyebrow}</div>
            <h2 style={sectionTitle}>{tr.leaderHeading}</h2>
            <div className="nukus-leader" style={{ display: 'flex', gap: '22px', alignItems: 'flex-start', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderLeft: '3px solid var(--gold, #c9a84c)', borderRadius: '12px', padding: '26px 28px', maxWidth: '720px' }}>
              <img
                src="/images/rahbariyat/nukus-direktor.jpg"
                alt={`${tr.directorName} — ${tr.directorLabel}`}
                style={{ width: '112px', height: '134px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '12px', flexShrink: 0, border: '1px solid var(--light-border, #e6e1d6)' }}
              />
              <div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark, #a8891e)', textTransform: 'uppercase', marginBottom: '6px' }}>{tr.directorLabel}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '8px' }}>
                  {tr.directorName}
                </h3>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {tr.directorBio}
                </p>
              </div>
            </div>
          </div>

          {/* ── Tarix / qaror ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>{tr.historyEyebrow}</div>
            <h2 style={sectionTitle}>{tr.historyHeading}</h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'var(--light-50, #f8f5ee)', color: 'var(--gold-dark, #a8891e)', flexShrink: 0 }}>
                <Calendar size={18} />
              </div>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.85 }}>
                {tr.historyPre}
                <a href="https://lex.uz/docs/-5355586" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark, #a8891e)', fontWeight: 600 }}>
                  {tr.historyLink}
                </a>
                {tr.historyPost}
              </p>
            </div>
          </div>

          {/* ── Aloqa ── */}
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <div style={eyebrow}>{tr.contactEyebrow}</div>
            <h2 style={sectionTitle}>{tr.contactHeading}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <MapPin size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>{tr.addrLabel}</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {tr.addrValue[0]}<br />
                  {tr.addrValue[1]}
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Phone size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>{tr.phoneLabel}</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.9 }}>
                  <a href="tel:+998551020540" style={{ color: 'var(--navy)', textDecoration: 'none' }}>+998 55 102 05 40</a>
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Mail size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>{tr.emailLabel}</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  <a href="mailto:conservatorynukus@uzdknf.uz" style={{ color: 'var(--navy)', textDecoration: 'none', wordBreak: 'break-all' }}>conservatorynukus@uzdknf.uz</a>
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Clock size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>{tr.hoursLabel}</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {tr.hoursValue[0]}<br />
                  {tr.hoursValue[1]}
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Languages size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>{tr.langLabel}</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {tr.langValue}
                </p>
              </div>

            </div>

            {/* Rasmiy sayt — yana bir bor, aniq koʻrinadigan */}
            <a
              href={OFFICIAL_SITE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginTop: '18px', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '20px 26px', textDecoration: 'none', flexWrap: 'wrap' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--navy)' }}>
                <Globe size={20} style={{ color: 'var(--gold-dark, #a8891e)' }} />
                <span style={{ fontWeight: 600 }}>{tr.siteBanner}</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-dark, #a8891e)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {tr.visit} <ExternalLink size={15} />
              </span>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
