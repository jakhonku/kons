/* ============================================================
   OʻZBEKISTON DAVLAT KONSERVATORIYASI
   Navigatsiya — Tilga bogʻliq (i18n)
   ============================================================ */

export const UTILITY_LINKS = [];

/**
 * Build the nav menu using a translation function `t`.
 * Routes (`to`) stay constant across languages; only labels translate.
 */
export function buildNavMenu(t) {
  return [
    /* ---------- 1. TUZILMA ---------- */
    {
      id: 'tuzilma',
      label: t('nav.tuzilma.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.management'),
          links: [

            { label: t('nav.items.rahbariyat'),          to: '/rahbariyat' },
            { label: t('nav.items.vasiylikKengashi'),    to: '/vasiylik-kengashi' },
            { label: t('nav.items.nukusFiliali'),        to: '/nukus-filiali' },
          ],
        },
        {
          heading: t('nav.headings.academic'),
          links: [
            { label: t('nav.items.fakultetlar'),         to: '/fakultetlar' },
            { label: t('nav.items.kafedralar'),          to: '/kafedralar' },
            { label: t('nav.items.bolimlar'),            to: '/bolimlar' },
            { label: t('nav.items.jamoatTashkilotlari'), to: '/jamoat-tashkilotlari' },
          ],
        },
        {
          heading: t('nav.headings.additional'),
          links: [
            { label: t('nav.items.yashilUniversitet'),   to: '/yashil-universitet' },
            { label: t('nav.items.vakansiyalar'),        to: '/vakansiyalar' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.tuzilma.label'),
        desc:  t('nav.featured.tuzilma.desc'),
      },
    },

    /* ---------- 2. TAʻLIM ---------- */
    {
      id: 'talim',
      label: t('nav.talim.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.educationProcess'),
          links: [
            { label: t('nav.items.darsJadvali'),  to: '/dars-jadvali' },
            { label: t('nav.items.oquvRejalar'),  to: '/oquv-rejalar' },
            { label: t('nav.items.sillabuslar'),  to: '/sillabuslar' },
            { label: t('nav.items.oquvUslubiy'),  to: '/oquv-uslubiy-kengash' },
          ],
        },
        {
          heading: t('nav.headings.forStudents'),
          links: [
            { label: t('nav.items.kelajakkaQadam'),         to: '/kelajakka-qadam' },
            { label: t('nav.items.togaraklar'),             to: '/togaraklar' },
            { label: t('nav.items.bitiruvchilarBandligi'),  to: '/bitiruvchilar-bandligi' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.talim.label'),
        desc:  t('nav.featured.talim.desc'),
      },
    },

    /* ---------- 3. ILM-FAN ---------- */
    {
      id: 'ilm-fan',
      label: t('nav.ilmFan.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.research'),
          links: [
            { label: t('nav.items.ilmiyKengash'),         to: '/ilmiy-kengash' },
            { label: t('nav.items.ilmiyLoyihalar'),       to: '/ilmiy-loyihalar' },
            { label: t('nav.items.doktorantura'),         to: '/doktorantura' },
            { label: t('nav.items.ilmiyKonferensiyalar'), to: '/ilmiy-konferensiyalar' },
            { label: t('nav.items.grantlar'),             to: '/grantlar' },
            { label: t('nav.items.musiqaCholgulariLab'),  to: '/musiqa-cholgulari-laboratoriyasi' },
          ],
        },
        {
          heading: t('nav.headings.publishing'),
          links: [
            { label: t('nav.items.nashriyot'),            to: '/nashriyot' },
            { label: t('nav.items.musiqaJurnali'),        to: '/musiqa-jurnali' },
            { label: t('nav.items.musiqaJurnaliTah'),     to: '/musiqa-jurnali-tahririyati' },
            { label: t('nav.items.eurasianMusicJournal'), to: '/eurasian-music-journal' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.ilmFan.label'),
        desc:  t('nav.featured.ilmFan.desc'),
      },
    },

    /* ---------- 4. INTERAKTIV XIZMATLAR ---------- */
    {
      id: 'interaktiv',
      label: t('nav.interaktiv.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.onlineServices'),
          links: [
            { label: t('nav.items.onlineMurojaat'),   to: '/online-murojaat' },
            { label: t('nav.items.onlineKutubxona'),  to: '/kutubxona' },
          ],
        },
        {
          heading: t('nav.headings.hemis'),
          links: [
            { label: t('nav.items.hemisTalaba'),     to: '/hemis-talaba' },
            { label: t('nav.items.hemisOqituvchi'),  to: '/hemis-oquvchi' },
          ],
        },
        {
          heading: t('nav.headings.forStudents'),
          links: [
            { label: t('nav.items.registrator'),     to: '/registrator' },
            { label: t('nav.items.yotoqxona'),       to: '/yotoqxona' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.interaktiv.label'),
        desc:  t('nav.featured.interaktiv.desc'),
      },
    },

    /* ---------- 5. IJODIY FAOLIYAT ---------- */
    {
      id: 'ijodiy',
      label: t('nav.ijodiy.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.events'),
          links: [
            { label: t('nav.items.musiqaliTeatr'), to: '/musiqali-teatr-studiyasi' },
            { label: t('nav.items.jonliEfir'),    to: '/jonli-efir' },
            { label: t('nav.items.afisha'),       to: '/taqvim' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.ijodiy.label'),
        desc:  t('nav.featured.ijodiy.desc'),
      },
    },

    /* ---------- 6. QABUL ---------- */
    {
      id: 'qabul',
      label: t('nav.qabul.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.education'),
          links: [
            { label: t('nav.items.talimDasturlari'),   to: '/talim-dasturlari' },
          ],
        },
        {
          heading: t('nav.headings.admissionProcess'),
          links: [
            { label: t('nav.items.qabulTalablari'),    to: '/qabul-talablari' },
            { label: t('nav.items.qabulKvotasi'),      to: '/qabul-kvotasi' },
            { label: t('nav.items.kasbiyImtihonlar'),  to: '/kasbiy-imtihonlar' },
            { label: t('nav.items.imtihonNatijalari'), to: '/imtihon-natijalari' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.qabul.label'),
        desc:  t('nav.featured.qabul.desc'),
      },
    },

    /* ---------- 7. XALQARO ALOQALAR ---------- */
    {
      id: 'xalqaro',
      label: t('nav.xalqaro.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.partnership'),
          links: [
            { label: t('nav.items.hamkorTashkilotlar'),   to: '/hamkor-tashkilotlar' },
            { label: t('nav.items.xalqaroMemorandumlar'), to: '/xalqaro-memorandumlar' },
            { label: t('nav.items.xorijiyTalabalar'),     to: '/xorijiy-talabalar' },
          ],
        },
        {
          heading: t('nav.headings.programs'),
          links: [
            { label: t('nav.items.studyInUzbekistan'), to: '/study-in-uzbekistan' },
            { label: t('nav.items.erasmus'),           to: '/erasmus' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.xalqaro.label'),
        desc:  t('nav.featured.xalqaro.desc'),
      },
    },

    /* ---------- 8. YANGILIKLAR ---------- */
    {
      id: 'axborot',
      label: t('nav.axborot.label'),
      to: '#',
      columns: [
        {
          heading: t('nav.headings.news'),
          links: [
            { label: t('nav.items.axborotXizmati'), to: '/yangiliklar' },
            { label: t('nav.items.sayohat360'),     to: '/sayohat-360' },
            { label: t('nav.items.rektorTabrigi'),  to: '/rektor-tabrigi' },
            { label: t('nav.items.videogalereya'),  to: '/videogalereya' },
            { label: t('nav.items.fotogalereya'),   to: '/fotogalereya' },
            { label: t('nav.items.kontaktlar'),     to: '/kontaktlar' },
          ],
        },
      ],
      featured: {
        label: t('nav.featured.axborot.label'),
        desc:  t('nav.featured.axborot.desc'),
      },
    },
  ];
}
