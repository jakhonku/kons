/* ============================================================
   OʻZBEKISTON DAVLAT KONSERVATORIYASI
   Navigatsiya Maʻlumotlari — Yagona manba
   Tuzilma "Сайт тузилмаси.docx" hujjatiga muvofiq joylashtirilgan.
   ============================================================ */

export const UTILITY_LINKS = [];

export const NAV_MENU = [
  /* ---------- 1. TUZILMA ---------- */
  {
    id: 'tuzilma',
    label: 'Tuzilma',
    to: '#',
    columns: [
      {
        heading: 'Boshqaruv',
        links: [
          { label: 'Tuzilma haqida',        to: '/tuzilma' },
          { label: 'Rahbariyat',            to: '/rahbariyat' },
          { label: 'Vasiylik kengashi',     to: '/vasiylik-kengashi' },
          { label: 'Nukus filiali',        to: '/nukus-filiali' },
        ],
      },
      {
        heading: "Akademik boʻlinmalar",
        links: [
          { label: 'Fakultetlar',          to: '/fakultetlar' },
          { label: 'Kafedralar',           to: '/kafedralar' },
          { label: "Boʻlimlar",            to: '/bolimlar' },
          { label: "Oʻquv uslubiy kengash", to: '/oquv-uslubiy-kengash' },
          { label: 'Jamoat tashkilotlari', to: '/jamoat-tashkilotlari' },
        ],
      },
      {
        heading: "Qoʻshimcha",
        links: [
          { label: "Aloqa maʻlumotlari",  to: '/kontaktlar' },
          { label: 'Yashil universitet',  to: '/yashil-universitet' },
          { label: "Boʻsh ish oʻrinlari", to: '/vakansiyalar' },
        ],
      },
    ],
    featured: {
      label: '1936 yildan buyon',
      desc: "Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa taʻlim maskani.",
    },
  },

  /* ---------- 2. TAʻLIM ---------- */
  {
    id: 'talim',
    label: "Taʻlim",
    to: '#',
    columns: [
      {
        heading: "Oʻquv jarayoni",
        links: [
          { label: 'Taʻlim haqida',                   to: '/talim' },
          { label: 'Dars jadvallari',                to: '/dars-jadvali' },
          { label: "Oʻquv rejalar",                  to: '/oquv-rejalar' },
          { label: "Oʻquv dasturlari (Sillabuslar)", to: '/sillabuslar' },
        ],
      },
      {
        heading: 'Talabalar uchun',
        links: [
          { label: 'Kelajakka qadam',                  to: '/kelajakka-qadam' },
          { label: "Toʻgaraklar",                      to: '/togaraklar' },
          { label: 'Bitiruvchilar bandligi (career)',  to: '/bitiruvchilar-bandligi' },
        ],
      },
    ],
    featured: {
      label: "Akademik taʻlim",
      desc: "Bakalavr, magistratura va doktorantura dasturlari yagona platformada.",
    },
  },

  /* ---------- 3. ILM-FAN ---------- */
  {
    id: 'ilm-fan',
    label: 'Ilm-fan',
    to: '#',
    columns: [
      {
        heading: 'Ilmiy faoliyat',
        links: [
          { label: 'Ilm-fan haqida',         to: '/ilm-fan' },
          { label: 'Ilmiy kengash',         to: '/ilmiy-kengash' },
          { label: 'Ilmiy loyihalar',       to: '/ilmiy-loyihalar' },
          { label: 'Doktorantura',          to: '/doktorantura' },
          { label: 'Ilmiy konferensiyalar', to: '/ilmiy-konferensiyalar' },
          { label: 'Grantlar',              to: '/grantlar' },
        ],
      },
      {
        heading: 'Nashriyot',
        links: [
          { label: 'Nashriyot',                  to: '/nashriyot' },
          { label: 'Musiqa jurnali tahririyati', to: '/musiqa-jurnali-tahririyati' },
          { label: '"Musiqa" jurnali',           to: '/musiqa-jurnali' },
          { label: "Musiqa cholgʻulari laboratoriyasi", to: '/musiqa-cholgulari-laboratoriyasi' },
          { label: 'Eurasian Music Journal',     to: '/eurasian-music-journal' },
        ],
      },
    ],
    featured: {
      label: 'Ilmiy salohiyat',
      desc: 'Musiqa fani sohasidagi yetakchi tadqiqot va nashriyot markazi.',
    },
  },

  /* ---------- 4. INTERAKTIV XIZMATLAR ---------- */
  {
    id: 'interaktiv',
    label: 'Interaktiv xizmatlar',
    to: '#',
    columns: [
      {
        heading: 'Onlayn xizmatlar',
        links: [
          { label: 'Interaktiv xizmatlar haqida', to: '/interaktiv-xizmatlar' },
          { label: 'Online murojaat',  to: '/online-murojaat' },
          { label: 'Online kutubxona', to: '/kutubxona' },
        ],
      },
      {
        heading: 'HEMIS tizimi',
        links: [
          { label: 'HEMIS-talaba',     to: '/hemis-talaba' },
          { label: "HEMIS-oʻqituvchi", to: '/hemis-oquvchi' },
        ],
      },
      {
        heading: 'Talabalar uchun',
        links: [
          { label: 'Registrator ofisiga murojaat', to: '/registrator' },
          { label: 'Talabalar turar joyi',         to: '/yotoqxona' },
        ],
      },
    ],
    featured: {
      label: 'Yagona xizmatlar',
      desc: "Talaba va oʻqituvchilar uchun barcha onlayn xizmatlar bir joyda.",
    },
  },

  /* ---------- 5. IJODIY FAOLIYAT ---------- */
  {
    id: 'ijodiy',
    label: 'Ijodiy faoliyat',
    to: '#',
    columns: [
      {
        heading: 'Tadbirlar',
        links: [

          { label: 'Ijodiy faoliyat haqida',  to: '/ijodiy-faoliyat' },
          { label: 'Jonli efir',              to: '/jonli-efir' },
        ],
      },
    ],
    featured: {
      label: 'Sahna hayoti',
      desc: 'Konservatoriyaning konsertlari, spektakllari va jonli efirlari.',
    },
  },

  /* ---------- 6. QABUL ---------- */
  {
    id: 'qabul',
    label: 'Qabul',
    to: '#',
    columns: [
      {
        heading: "Taʻlim",
        links: [
          { label: 'Qabul haqida',        to: '/abituriyentlar' },
          { label: "Taʻlim yoʻnalishlari", to: '/talim-yonalishlari' },
          { label: "Taʻlim dasturlari",   to: '/talim-dasturlari' },
        ],
      },
      {
        heading: 'Qabul jarayoni',
        links: [
          { label: "Qabul taʻlablari",            to: '/qabul-talablari' },
          { label: 'Qabul kvotasi',               to: '/qabul-kvotasi' },
          { label: 'Kasbiy va ijodiy imtihonlar', to: '/kasbiy-imtihonlar' },
          { label: 'Imtihon natijalari',          to: '/imtihon-natijalari' },
        ],
      },
    ],
    featured: {
      label: 'Qabul 2026',
      desc: '185 ta davlat kvotasi. Hujjat topshirish: 1–25 avgust 2026.',
    },
  },

  /* ---------- 7. XALQARO ALOQALAR ---------- */
  {
    id: 'xalqaro',
    label: 'Xalqaro aloqalar',
    to: '#',
    columns: [
      {
        heading: 'Hamkorlik',
        links: [
          { label: 'Xalqaro aloqalar haqida', to: '/xalqaro' },
          { label: 'Hamkor tashkilotlar',    to: '/hamkor-tashkilotlar' },
          { label: 'Xorijiy talabalar uchun', to: '/xorijiy-talabalar' },
          { label: 'Xalqaro memorandumlar',  to: '/xalqaro-memorandumlar' },
        ],
      },
      {
        heading: 'Dasturlar',
        links: [
          { label: 'Study in Uzbekistan', to: '/study-in-uzbekistan' },
          { label: 'Erasmus+',            to: '/erasmus' },
        ],
      },
    ],
    featured: {
      label: '120+ Hamkor',
      desc: "Dunyo boʻylab yetakchi musiqa institutlari bilan faol aloqalar.",
    },
  },

  /* ---------- 8. AXBOROT XIZMATI ---------- */
  {
    id: 'axborot',
    label: 'Axborot xizmati',
    to: '#',
    columns: [
      {
        heading: 'Yangiliklar',
        links: [
          { label: 'Axborot xizmati',          to: '/yangiliklar' },
          { label: 'Online tur (360°)',        to: '/sayohat-360' },
          { label: 'Rektor tabrigi va nutqlari', to: '/rektor-tabrigi' },
          { label: 'Videogalereya',            to: '/videogalereya' },
          { label: 'Fotogalereya',             to: '/fotogalereya' },
          { label: 'Kontaktlar',               to: '/kontaktlar' },
        ],
      },
    ],
    featured: {
      label: "Soʻnggi Yangiliklar",
      desc: "Konservatoriya hayotidan soʻnggi xabarlar, tadbirlar va afishalar.",
    },
  },
];

