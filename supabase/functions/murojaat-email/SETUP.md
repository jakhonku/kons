# Murojaat email tizimi — sozlash yo'riqnomasi (Gmail SMTP)

Murojaat yuborilganda **tasdiq xati**, admin javob yozganda **javob xati** fuqaroning
emailiga avtomatik yuboriladi. Email **Gmail SMTP** orqali ketadi
(`jakhongirbakhtiyarov0130@gmail.com` hisobidan).

Quyidagi qadamlarni **bir marta** bajaring.

---

## 1. Bazani tayyorlash
`011_murojaat_reply.sql` migratsiyasini Supabase Dashboard → SQL Editor da ishga tushiring
(`reply_text`, `replied_at` ustunlarini qo'shadi). `008`–`010` ni ham kiritgan bo'lishingiz kerak.

## 2. Gmail "App Password" yaratish  ⚠️ MUHIM
Gmail oddiy parolni SMTP uchun qabul qilmaydi — maxsus "App Password" kerak.
1. Google hisobingizda **2-bosqichli tasdiqlash (2-Step Verification)** yoqilgan bo'lishi shart:
   https://myaccount.google.com/security
2. So'ngra **App Passwords** sahifasiga o'ting:
   https://myaccount.google.com/apppasswords
3. "App" nomini yozing (masalan `konservatoriya`) → **Create**.
4. Google **16 belgili parol** beradi (masalan `abcd efgh ijkl mnop`). Uni nusxalang —
   **bo'shliqlarsiz** ishlatasiz: `abcdefghijklmnop`.

> Bu App Password faqat shu yerda ishlatiladi, hech qaerga commit qilinmaydi.

## 3. Edge Function'ni deploy qilish (Dashboard orqali)
1. **Dashboard → Edge Functions → Deploy a new function** (Via Editor).
2. Nomi: **`murojaat-email`**.
3. `supabase/functions/murojaat-email/index.ts` faylining butun mazmunini joylang.
4. **Verify JWT** sozlamasini **OFF** qiling (webhook JWT'siz chaqiradi; himoya `WEBHOOK_SECRET`).
5. **Deploy**.

## 4. Maxfiy sozlamalar (Secrets)
Dashboard → **Edge Functions → murojaat-email → Secrets**:

| Kalit | Qiymat |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `jakhongirbakhtiyarov0130@gmail.com` |
| `SMTP_PASS` | *(2-qadamdagi 16 belgili App Password, bo'shliqsiz)* |
| `MUROJAAT_FROM_EMAIL` | `O'zbekiston Davlat Konservatoriyasi <jakhongirbakhtiyarov0130@gmail.com>` |
| `WEBHOOK_SECRET` | `ff6f223b3d22822b1db61f0ec63ed0950b6321013500e124ffc4c2ed736c8876` |
| `REPLY_TO_EMAIL` | *(ixtiyoriy, masalan murojaat@konservatoriya.uz)* |

## 5. Database Webhook sozlash
Dashboard → **Database → Webhooks → Create a new hook**:
- **Name:** `murojaat-email-hook`
- **Table:** `public.messages`
- **Events:** ☑ Insert  ☑ Update
- **Type:** Supabase Edge Functions → `murojaat-email`
- **HTTP Headers:** `x-webhook-secret` = `ff6f223b3d22822b1db61f0ec63ed0950b6321013500e124ffc4c2ed736c8876`
- Saqlang.

## 6. Sinov
1. Saytda `/online-murojaat` formasini **o'z (boshqa) emailingiz** bilan to'ldirib yuboring →
   pochtaga **"Murojaatingiz qabul qilindi — OK-000XXX"** xati kelishi kerak.
2. Admin panel → Murojaatlar → murojaatni oching → javob yozing → **"Javobni yuborish"** →
   fuqaro pochtasiga **"Murojaatingizga javob — OK-000XXX"** xati kelishi kerak.

---

## Gmail cheklovlari va diagnostika
- **Gmail kunlik limit:** ~500 email/kun. Davlat sayti hajmi oshsa, keyinchalik
  tasdiqlangan domen (Resend/SendGrid) ga o'tish tavsiya etiladi.
- Email **Spam** papkasiga tushishi mumkin (gmail.com'dan "nomidan" jo'natilgani uchun).
  Professional ko'rinish uchun kelajakda `konservatoriya.uz` domeni afzal.
- Email kelmasa: Dashboard → Edge Functions → `murojaat-email` → **Logs** ni ko'ring:
  - `Invalid login` / `535` → App Password noto'g'ri yoki 2FA yoqilmagan.
  - `401 Unauthorized` → webhook header'idagi `x-webhook-secret` Secrets bilan mos emas.
  - `Timeout` → SMTP_PORT noto'g'ri (465 va tls:true bo'lishi kerak).
