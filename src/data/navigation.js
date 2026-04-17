/* ============================================================
   O'ZBEKISTON DAVLAT KONSERVATORIYASI
   Navigatsiya Ma'lumotlari — Yagona manba
   ============================================================ */

export const UTILITY_LINKS = [
  { label: 'Bizga tashrif buyuring', to: '/kontaktlar' },
  { label: 'HEMIS-talaba',           to: '/talabalar' },
  { label: 'Online murojaat',        to: '/kontaktlar' },
  { label: 'Xayriya',               to: '/kontaktlar' },
];

export const NAV_MENU = [
  {
    id: 'konservatoriya',
    label: 'Konservatoriya',
    to: '/tarix',
    columns: [
      {
        heading: 'Muassasa',
        links: [
          { label: 'Konservatoriya tarixi',  to: '/tarix' },
          { label: 'Muassasa tuzilmasi',     to: '/tuzilma' },
          { label: 'Rahbariyat',             to: '/rahbariyat' },
          { label: "Me'yoriy hujjatlar",     to: '/hujjatlar' },
        ],
      },
      {
        heading: 'Xizmatlar',
        links: [
          { label: 'Online murojaat',    to: '/kontaktlar' },
          { label: 'Yashil universitet', to: '/yashil-universitet' },
          { label: 'Kontaktlar',         to: '/kontaktlar' },
        ],
      },
    ],
    featured: {
      label: '1936 yildan buyon',
      desc: "Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa ta'lim maskani.",
    },
  },

  {
    id: 'talabalar',
    label: 'Talabalar uchun',
    to: '/talabalar',
    columns: [
      {
        heading: "O'quv jarayoni",
        links: [
          { label: 'Dars jadvallari',              to: '/dars-jadvali' },
          { label: "O'quv rejalar",                to: '/oquv-rejalar' },
          { label: "O'quv dasturlari (Sillabuslar)", to: '/sillabuslar' },
          { label: 'HEMIS-talaba',                 to: '/hemis-talaba' },
        ],
      },
      {
        heading: "Qo'llab-quvvatlash",
        links: [
          { label: 'Grantlar',                       to: '/grantlar' },
          { label: 'Kelajakka qadam',                to: '/kelajakka-qadam' },
          { label: 'Online kutubxona',               to: '/kutubxona' },
          { label: 'Registrator ofisiga murojaat',   to: '/registrator' },
        ],
      },
      {
        heading: 'Talabalar hayoti',
        links: [
          { label: "To'garaklar",       to: '/togaraklar' },
          { label: 'Talabalar turar joyi', to: '/yotoqxona' },
        ],
      },
    ],
    featured: {
      label: 'Talabalar Portali',
      desc: "Barcha resurslar va imkoniyatlar — HEMIS tizimi orqali yagona joyda.",
    },
  },

  {
    id: 'abituriyentlar',
    label: 'Abituriyentlar uchun',
    to: '/abituriyentlar',
    columns: [
      {
        heading: "Ta'lim",
        links: [
          { label: "Ta'lim yo'nalishlari", to: '/abituriyentlar' },
          { label: "Ta'lim dasturlari",    to: '/abituriyentlar' },
        ],
      },
      {
        heading: 'Qabul 2026',
        links: [
          { label: "Qabul ta'lablari",            to: '/abituriyentlar' },
          { label: 'Qabul kvotasi',               to: '/abituriyentlar' },
          { label: 'Kasbiy va ijodiy imtihonlar', to: '/abituriyentlar' },
          { label: 'Imtihon natijalari',          to: '/abituriyentlar' },
        ],
      },
    ],
    featured: {
      label: 'Qabul 2026',
      desc: '185 ta davlat kvotasi. Hujjat topshirish: 1–25 avgust 2026.',
    },
  },

  {
    id: 'xalqaro',
    label: 'Xalqaro aloqalar',
    to: '/xalqaro',
    columns: [
      {
        heading: 'Hamkorlik',
        links: [
          { label: 'Hamkor tashkilotlar',   to: '/xalqaro' },
          { label: 'Xorijiy dasturlar',     to: '/xalqaro' },
          { label: 'Xalqaro memorandumlar', to: '/xalqaro' },
        ],
      },
      {
        heading: 'Dasturlar',
        links: [
          { label: 'Erasmus+ dasturi',       to: '/xalqaro' },
          { label: "Xalqaro stipendiyalar",  to: '/xalqaro' },
          { label: "Qo'shma konsertlar",     to: '/xalqaro' },
        ],
      },
    ],
    featured: {
      label: '120+ Hamkor',
      desc: "Dunyo bo'ylab yetakchi musiqa institutlari bilan faol aloqalar.",
    },
  },

  {
    id: 'axborot',
    label: 'Axborot xizmati',
    to: '/yangiliklar',
    columns: [
      {
        heading: 'Yangiliklar va tadbirlar',
        links: [
          { label: 'Yangiliklar',           to: '/yangiliklar' },
          { label: 'Kutilayotgan tadbirlar', to: '/taqvim' },
        ],
      },
      {
        heading: 'Media',
        links: [
          { label: 'Videogalereya', to: '/videogalereya' },
          { label: 'Fotogalereya',  to: '/fotogalereya' },
        ],
      },
      {
        heading: "Bog'lanish",
        links: [
          { label: 'Kontaktlar',       to: '/kontaktlar' },
          { label: 'Yashil universitet', to: '/yashil-universitet' },
        ],
      },
    ],
    featured: {
      label: "So'nggi Yangiliklar",
      desc: "Konservatoriya hayotidan so'nggi xabarlar, tadbirlar va afishalar.",
    },
  },
];
