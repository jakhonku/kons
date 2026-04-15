export const UTILITY_LINKS = [
  { label: "Bog'lanish",       to: '/kontaktlar' },
  { label: 'Abituriyentlar',   to: '/abituriyentlar' },
  { label: 'Talabalar portali', to: '#' },
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
        heading: 'Muhit',
        links: [
          { label: 'Online murojaat',  to: '/kontaktlar' },
          { label: 'Yashil universitet', to: '#' },
          { label: 'Kontaktlar',       to: '/kontaktlar' },
        ],
      },
    ],
    featured: {
      label: '1936 yildan buyon',
      desc: "Markaziy Osiyoning eng qadimgi va nufuzli oliy musiqa ta'lim maskani",
    },
  },
  {
    id: 'talabalar',
    label: 'Talabalar',
    to: '#',
    columns: [
      {
        heading: "O'quv jarayoni",
        links: [
          { label: 'Dars jadvallari',   to: '#' },
          { label: "O'quv rejalar",     to: '#' },
          { label: 'Online kutubxona',  to: '#' },
          { label: 'HEMIS-talaba',      to: '#' },
        ],
      },
      {
        heading: 'Imkoniyatlar',
        links: [
          { label: 'Grantlar',          to: '#' },
          { label: 'Kelajakka qadam',   to: '#' },
          { label: "To'garaklar",       to: '#' },
          { label: 'Turar joy',         to: '#' },
        ],
      },
    ],
    featured: {
      label: 'Talabalar Portali',
      desc: 'Barcha resurslar va imkoniyatlar yagona joyda',
    },
  },
  {
    id: 'abituriyentlar',
    label: 'Abituriyentlar',
    to: '/abituriyentlar',
    columns: [
      {
        heading: 'Qabul 2026',
        links: [
          { label: "Ta'lim yo'nalishlari",     to: '/abituriyentlar' },
          { label: "Qabul ta'lablari",         to: '/abituriyentlar' },
          { label: "Ta'lim dasturlari",        to: '/abituriyentlar' },
          { label: 'Qabul kvotasi',            to: '/abituriyentlar' },
        ],
      },
      {
        heading: 'Imtihonlar',
        links: [
          { label: 'Kasbiy-ijodiy imtihon', to: '/abituriyentlar' },
          { label: 'DTM natijalari',        to: '/abituriyentlar' },
          { label: 'Kerakli hujjatlar',     to: '/abituriyentlar' },
        ],
      },
    ],
    featured: {
      label: 'Qabul 2026',
      desc: '185 ta davlat kvotasi — Hujjat topshirish: 1–25 avgust',
    },
  },
  {
    id: 'xalqaro',
    label: 'Xalqaro',
    to: '#',
    columns: [
      {
        heading: 'Hamkorlik',
        links: [
          { label: 'Hamkor tashkilotlar',   to: '#' },
          { label: 'Xorijiy dasturlar',     to: '#' },
          { label: 'Xalqaro memorandumlar', to: '#' },
        ],
      },
      {
        heading: 'Loyihalar',
        links: [
          { label: 'Erasmus+ dasturi',     to: '#' },
          { label: "Xalqaro stipendiyalar", to: '#' },
          { label: 'Qo\'shma konsertlar',  to: '#' },
        ],
      },
    ],
    featured: {
      label: '120+ Hamkor',
      desc: "Dunyo bo'ylab yetakchi musiqa institutlari bilan aloqalar",
    },
  },
  {
    id: 'axborot',
    label: 'Axborot',
    to: '/yangiliklar',
    columns: [
      {
        heading: 'Media',
        links: [
          { label: 'Yangiliklar',       to: '/yangiliklar' },
          { label: 'Tadbirlar taqvimi', to: '/taqvim' },
          { label: 'Fotogalereya',      to: '#' },
          { label: 'Videogalereya',     to: '#' },
        ],
      },
      {
        heading: "Bog'lanish",
        links: [
          { label: 'Kontaktlar',      to: '/kontaktlar' },
          { label: 'Online murojaat', to: '/kontaktlar' },
        ],
      },
    ],
    featured: {
      label: "So'nggi Yangiliklar",
      desc: "Konservatoriya hayotidan so'nggi xabarlar va tadbirlar",
    },
  },
];
