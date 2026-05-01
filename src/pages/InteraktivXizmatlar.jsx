import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Interaktiv xizmatlar' },
];

export default function InteraktivXizmatlar() {
  return (
    <InfoPage
      tag="Onlayn xizmatlar"
      title="Interaktiv"
      emphasis="xizmatlar"
      breadcrumbs={BREADCRUMBS}
      lead="Talabalar, o'qituvchilar, abituriyentlar va jamoatchilik uchun barcha onlayn xizmatlar yagona platforma orqali. Kech qolmasdan murojaat qiling, hujjatlarni topshiring va tezkor javob oling."
      sections={[
        {
          heading: 'Asosiy xizmatlar',
          cards: [
            { tag: '01', title: 'Online murojaat', desc: "Rasmiy taklif, shikoyat va so'rovlar uchun online tizim. 14 kun ichida javob.", meta: '/online-murojaat' },
            { tag: '02', title: 'Online kutubxona', desc: "Elektron kitoblar, partituralar, audio-video resurslar.", meta: '/kutubxona' },
            { tag: '03', title: 'HEMIS-talaba', desc: "Talabalar uchun shaxsiy kabinet — baholar, dars jadvali, hujjatlar.", meta: '/hemis-talaba' },
            { tag: '04', title: "HEMIS-o'qituvchi", desc: "O'qituvchilar uchun elektron jurnal va sillabuslar boshqaruvi.", meta: '/hemis-oquvchi' },
            { tag: '05', title: 'Registrator ofisi', desc: "Hujjatlar (transcript, diplom nusxasi, ma'lumotnomalar) uchun online buyurtma.", meta: '/registrator' },
            { tag: '06', title: 'Talabalar turar joyi', desc: "Yotoqxonaga ariza, joy taqsimoti va to'lovlar.", meta: '/yotoqxona' },
          ],
        },
        {
          heading: "Tizimga kirish",
          items: [
            { title: 'Talaba sifatida', desc: "Talaba ID va parol bilan HEMIS-talaba tizimiga kiring." },
            { title: "O'qituvchi sifatida", desc: "Xizmat parol va elektron raqamli imzo (ERI) orqali HEMIS-o'qituvchi." },
            { title: 'Abituriyent sifatida', desc: "Pasport raqami va telefon orqali ariza topshirish tizimi." },
            { title: 'Tashqi mijozlar', desc: "Online murojaat — ID majburiy emas, shaxsiy ma'lumotlar yetarli." },
          ],
        },
        {
          heading: 'Yordam va qo\'llab-quvvatlash',
          cards: [
            { tag: 'Telefon', title: 'Help-desk', desc: '+998 71 234-56-77 — har kuni 9:00–22:00', meta: 'Bepul qo\'ng\'iroq' },
            { tag: 'Telegram', title: '@konservatoriya_help', desc: "Tezkor savollar uchun bot.", meta: '24/7' },
            { tag: 'Email', title: 'help@konservatoriya.uz', desc: "Texnik muammolar va kirish masalalari.", meta: '4 soat ichida javob' },
          ],
        },
      ]}
      contact={{
        title: "Texnik yordam markazi",
        phone: '+998 71 234-56-77',
        email: 'help@konservatoriya.uz',
        hours: 'Har kuni, 09:00 – 22:00',
      }}
    />
  );
}
