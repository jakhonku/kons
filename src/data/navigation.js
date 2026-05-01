/* ============================================================
   O'ZBEKISTON DAVLAT KONSERVATORIYASI
   Navigatsiya Ma'lumotlari — Yagona manba
   Tuzilma "Сайт тузилмаси.docx" hujjatiga muvofiq joylashtirilgan.
   ============================================================ */

export const UTILITY_LINKS = [];

export const NAV_MENU = [
  /* ---------- 1. TUZILMA ---------- */
  {
    id: 'tuzilma',
    label: 'Tuzilma',
    to: '/tuzilma',
    columns: [
      {
        heading: 'Boshqaruv',
        links: [
          { label: 'Konservatoriya tarixi', to: '/tarix' },
          { label: 'Rahbariyat',            to: '/rahbariyat' },
          { label: 'Vasiylik kengashi',     to: '/vasiylik-kengashi' },
          { label: "O'quv uslubiy kengash", to: '/oquv-uslubiy-kengash' },
        ],
      },
      {
        heading: "Akademik bo'linmalar",
        links: [
          { label: 'Fakultetlar',          to: '/fakultetlar' },
          { label: 'Kafedralar',           to: '/kafedralar' },
          { label: "Bo'limlar",            to: '/bolimlar' },
          { label: 'Nukus filiali',        to: '/nukus-filiali' },
          { label: 'Jamoat tashkilotlari', to: '/jamoat-tashkilotlari' },
        ],
      },
      {
        heading: "Qo'shimcha",
        links: [
          { label: "Aloqa ma'lumotlari",  to: '/kontaktlar' },
          { label: 'Yashil universitet',  to: '/yashil-universitet' },
          { label: "Bo'sh ish o'rinlari", to: '/vakansiyalar' },
        ],
      },
    ],
    featured: {
      label: '1936 yildan buyon',
      desc: "Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa ta'lim maskani.",
    },
  },

  /* ---------- 2. TA'LIM ---------- */
  {
    id: 'talim',
    label: "Ta'lim",
    to: '/talim',
    columns: [
      {
        heading: "O'quv jarayoni",
        links: [
          { label: 'Dars jadvallari',                to: '/dars-jadvali' },
          { label: "O'quv rejalar",                  to: '/oquv-rejalar' },
          { label: "O'quv dasturlari (Sillabuslar)", to: '/sillabuslar' },
        ],
      },
      {
        heading: 'Talabalar uchun',
        links: [
          { label: 'Kelajakka qadam',                  to: '/kelajakka-qadam' },
          { label: "To'garaklar",                      to: '/togaraklar' },
          { label: 'Bitiruvchilar bandligi (career)',  to: '/bitiruvchilar-bandligi' },
        ],
      },
    ],
    featured: {
      label: "Akademik ta'lim",
      desc: "Bakalavr, magistratura va doktorantura dasturlari yagona platformada.",
    },
  },

  /* ---------- 3. ILM-FAN ---------- */
  {
    id: 'ilm-fan',
    label: 'Ilm-fan',
    to: '/ilm-fan',
    columns: [
      {
        heading: 'Ilmiy faoliyat',
        links: [
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
          { label: "Musiqa cholg'ulari laboratoriyasi", to: '/musiqa-cholgulari-laboratoriyasi' },
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
    to: '/interaktiv-xizmatlar',
    columns: [
      {
        heading: 'Onlayn xizmatlar',
        links: [
          { label: 'Online murojaat',  to: '/online-murojaat' },
          { label: 'Online kutubxona', to: '/kutubxona' },
        ],
      },
      {
        heading: 'HEMIS tizimi',
        links: [
          { label: 'HEMIS-talaba',     to: '/hemis-talaba' },
          { label: "HEMIS-o'qituvchi", to: '/hemis-oquvchi' },
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
      desc: "Talaba va o'qituvchilar uchun barcha onlayn xizmatlar bir joyda.",
    },
  },

  /* ---------- 5. IJODIY FAOLIYAT ---------- */
  {
    id: 'ijodiy',
    label: 'Ijodiy faoliyat',
    to: '/ijodiy-faoliyat',
    columns: [
      {
        heading: 'Tadbirlar',
        links: [
          { label: 'Afisha',                  to: '/taqvim' },
          { label: 'Jonli efir',              to: '/jonli-efir' },
          { label: 'Musiqali teatr studiyasi', to: '/musiqali-teatr-studiyasi' },
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
    to: '/abituriyentlar',
    columns: [
      {
        heading: "Ta'lim",
        links: [
          { label: "Ta'lim yo'nalishlari", to: '/talim-yonalishlari' },
          { label: "Ta'lim dasturlari",   to: '/talim-dasturlari' },
        ],
      },
      {
        heading: 'Qabul jarayoni',
        links: [
          { label: "Qabul ta'lablari",            to: '/qabul-talablari' },
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
    to: '/xalqaro',
    columns: [
      {
        heading: 'Hamkorlik',
        links: [
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
      desc: "Dunyo bo'ylab yetakchi musiqa institutlari bilan faol aloqalar.",
    },
  },

  /* ---------- 8. AXBOROT XIZMATI ---------- */
  {
    id: 'axborot',
    label: 'Axborot xizmati',
    to: '/yangiliklar',
    columns: [
      {
        heading: 'Yangiliklar',
        links: [
          { label: 'Yangiliklar',              to: '/yangiliklar' },
          { label: 'Online tur (360°)',        to: '/sayohat-360' },
          { label: 'Rektor tabrigi va nutqlari', to: '/rektor-tabrigi' },
        ],
      },
      {
        heading: 'Media',
        links: [
          { label: 'Videogalereya', to: '/videogalereya' },
          { label: 'Fotogalereya',  to: '/fotogalereya' },
          { label: 'Kontaktlar',    to: '/kontaktlar' },
        ],
      },
    ],
    featured: {
      label: "So'nggi Yangiliklar",
      desc: "Konservatoriya hayotidan so'nggi xabarlar, tadbirlar va afishalar.",
    },
  },
];
