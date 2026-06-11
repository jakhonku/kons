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
  '/qabul-talablari',      // Qabul — qabul talablari (Call-center)
  '/qabul-kvotasi',        // Qabul — qabul kvotasi
]);

// Prefiks boʻyicha ochiq yoʻllar (dinamik sahifalar uchun)
const OPEN_PREFIX = [
  '/yangiliklar/',         // Yangilik batafsil sahifasi
  '/taqvim/',              // Tadbir batafsil sahifasi
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
