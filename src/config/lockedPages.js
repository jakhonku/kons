/* ============================================================
   VAQTINCHALIK SAHIFA QULFI (soft-launch)
   ------------------------------------------------------------
   Hosting'ga joylashda baʼzi sahifalarda maʼlumot toʻliq emas.
   Quyidagi sahifalar OCHIQ qoladi, qolganlari navigatsiyada
   koʻrinadi, lekin ochilmaydi (ComingSoon koʻrsatiladi).

   Sahifalarni qayta ochish kerak boʻlsa — shu roʻyxatga qoʻshing
   yoki butun qulfni oʻchirish uchun LOCK_ENABLED = false qiling.
   ============================================================ */

export const LOCK_ENABLED = true;

// Aniq mos keladigan ochiq yoʻllar
const OPEN_EXACT = new Set([
  '/',                     // Bosh sahifa
  '/rahbariyat',           // Rahbariyat
  '/rahbariyat/rektor',    // Rektor biografiyasi
  '/yangiliklar',          // Yangiliklar
  '/taqvim',               // Afisha — tadbirlar taqvimi
  '/qabul-talablari',      // Qabul — qabul dasturlari va baholash mezonlari (PDF)
  '/imtihon-jadvali',      // Qabul — imtihon jadvali (PDF)
  '/online-imtihonlar',     // Qabul — online imtihon kuzatish (Zoom)
  '/call-center',          // Qabul — «Call-center» (aloqa maʼlumotlari)
  '/qabul-kvotasi',        // Qabul — qabul kvotasi
  '/online-murojaat',      // Interaktiv — online murojaat (forma ishlaydi)
  '/nukus-filiali',        // Tuzilma — Nukus filiali (rasmiy maʼlumot bilan toʻldirilgan)
  '/vasiylik-kengashi',    // Tuzilma — Vasiylik kengashi (rasmiy maʼlumot bilan toʻldirilgan)
  '/hemis-talaba',         // Talabalar — HEMIS-talaba (student.konservatoriya.uz)
  '/hemis-oquvchi',        // Konservatoriya — HEMIS-oʻqituvchi (hemis.konservatoriya.uz)
  '/musiqa-jurnali',       // Konservatoriya — "Musiqa" jurnali (PDF sonlar bilan toʻldirilgan)
  '/musiqali-teatr-studiyasi', // Ijodiy faoliyat — Musiqali teatr studiyasi
  '/jonli-efir',           // Ijodiy faoliyat — Jonli efir
  '/registrator',          // Tuzilma — Registrator ofisi boʻlimi (toʻliq maʼlumot + hodimlar)
  '/registrator-murojaat', // Interaktiv — Registrator ofisiga murojaat (Telegram bot)
  '/oquv-rejalar',         // Talabalar — Ishchi oʻquv rejalar (2025-2026 PDF bilan toʻldirilgan)
  '/talim-dasturlari',     // (eski) → /sillabuslar ga redirect
  '/sillabuslar',          // Talabalar — Fanning oʻquv dasturlari (fan dasturlari PDF bilan toʻldirilgan)
  '/bolimlar',
  '/fakultetlar',
  // '/kafedralar',

  '/kasbiy-imtihonlar',    // (eski) → /qabul-talablari ga redirect (birlashtirildi)
  '/xalqaro-memorandumlar',// Xalqaro aloqalar — Xalqaro memorandumlar (50 ta muassasa roʻyxati)
  '/erasmus',              // Xalqaro aloqalar — Erasmus+ dasturi
  '/jamoat-tashkilotlari', // Tuzilma — Jamoat tashkilotlari (rasmiy maʼlumot bilan toʻldirilgan)
  '/fotogalereya',         // Yangiliklar — Fotogalereya (admin albomlari + binosi/zal rasmlari)
  '/videogalereya',        // Yangiliklar — Videogalereya (admin paneldan boshqariladi)
  '/kontaktlar',           // Aloqa maʼlumotlari (Kontaktlar)
  '/yashil-universitet',   // Konservatoriya — Yashil Universitet (ekologik raqamlar bilan toʻldirilgan)
  '/bitiruvchilar-bandligi', // Talabalar — Bitiruvchilar bandligi
  '/togaraklar',           // Talabalar — Toʻgaraklar (rasmiy roʻyxat bilan toʻldirilgan)
  '/kelajakka-qadam',      // Talabalar — «Kelajakka qadam» karyera markazi (rasmiy maʼlumot)
  '/musiqa-cholgulari-laboratoriyasi', // Ilm-fan — «Milliy cholgʻu» laboratoriyasi (rasmiy maʼlumot)
  '/hamkor-tashkilotlar',  // Xalqaro — Hamkor tashkilotlar / Xalqaro aloqalar boʻlimi (rasmiy maʼlumot)
  '/vakansiyalar',         // Tuzilma — Boʻsh ish oʻrinlari (hozircha boʻsh, «tez orada» holati)
]);

// Prefiks boʻyicha ochiq yoʻllar (dinamik sahifalar uchun)
const OPEN_PREFIX = [
  '/yangiliklar/',         // Yangilik batafsil sahifasi
  '/taqvim/',              // Tadbir batafsil sahifasi
  '/jamoat-tashkilotlari/', // Jamoat tashkilotlari — batafsil sahifalar (rahbar maʼlumoti bilan)
  '/bolimlar/',            // Boʻlimlar — batafsil sahifalar (Devonxona, ARM, Yoshlar boʻlimi)
  '/fakultetlar/',         // Fakultetlar — batafsil sahifalar
];

export function isPathOpen(pathname) {
  if (!LOCK_ENABLED) return true;
  const p =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
  if (OPEN_EXACT.has(p)) return true;
  return OPEN_PREFIX.some((pre) => p.startsWith(pre));
}
