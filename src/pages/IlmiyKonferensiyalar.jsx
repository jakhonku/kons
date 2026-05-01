import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan', to: '/ilm-fan' },
  { label: 'Ilmiy konferensiyalar' },
];

export default function IlmiyKonferensiyalar() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Ilmiy"
      emphasis="konferensiyalar"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyada yiliga 8 dan ortiq xalqaro va respublika miqyosidagi ilmiy konferensiyalar o'tkaziladi. Tadbirlarda dunyoning yetakchi musiqa universitetlari va tadqiqot markazlari mutaxassislari ishtirok etadi."
      stats={[
        { value: '8+', label: 'Yillik konferensiya' },
        { value: '15+', label: 'Mamlakat ishtiroki' },
        { value: '300+', label: 'Yillik ishtirokchi' },
      ]}
      sections={[
        {
          heading: "Kelgusi konferensiyalar",
          cards: [
            {
              tag: 'Xalqaro · 2026',
              title: 'Toshkent Music Forum 2026',
              desc: "Markaziy Osiyo musiqa madaniyati va xalqaro hamkorlikning bugungi tendensiyalariga bag'ishlangan asosiy yillik forum.",
              meta: '15–17 oktabr 2026 · Bosh zal',
            },
            {
              tag: 'Xalqaro',
              title: 'Maqom Studies Symposium',
              desc: "Maqom san'atining tarixiy tomirlari va bugungi ijro tendensiyalari bo'yicha simpozium.",
              meta: '20–22 noyabr 2026 · Ilmiy zal',
            },
            {
              tag: 'Respublika',
              title: 'Yosh musiqashunoslar konferensiyasi',
              desc: "Magistr va doktorantlar uchun ilmiy ishlar muhokamasi.",
              meta: '5–6 dekabr 2026',
            },
          ],
        },
        {
          heading: "O'tgan konferensiyalar (2024–2025)",
          table: {
            head: ['Sana', 'Konferensiya', 'Daraja', 'Ishtirokchilar'],
            rows: [
              ['12–14.10.2025', 'Music & AI: Future of Sound', 'Xalqaro', '180 nafar · 12 davlat'],
              ['18–19.05.2025', 'Etnomusiqashunoslik o\'qishlari', 'Respublika', '85 nafar'],
              ['22–24.11.2024', "20-asr o'zbek bastakorlari", 'Xalqaro', '140 nafar · 9 davlat'],
              ['08–09.04.2024', "Musiqa pedagogikasi forum", 'Respublika', '120 nafar'],
              ['15–17.10.2024', 'Silk Road Music Heritage', 'Xalqaro', '210 nafar · 15 davlat'],
            ],
          },
        },
        {
          heading: "Ishtirok etish va maqola yuborish",
          items: [
            { title: '1-bosqich: Tezislar yuborish', desc: "Konferensiyaga 2 oy qolganda 300–500 so'zli tezislar yuboriladi." },
            { title: '2-bosqich: Ekspertiza', desc: "Tashkiliy qo'mita va ilmiy kengash 14 ish kuni ichida ko'rib chiqadi." },
            { title: "3-bosqich: To'liq maqola", desc: "Tasdiqlangan tezislar uchun 5000–8000 so'zli to'liq maqola tayyorlanadi." },
            { title: "4-bosqich: Nashr", desc: "Konferensiya materiallari to'plami va xalqaro jurnallarda chop etiladi." },
          ],
        },
      ]}
      contact={{
        title: "Tashkiliy qo'mita",
        responsible: "Aliyeva Nigora Sherzodovna",
        phone: '+998 71 234-56-86',
        email: 'conf@konservatoriya.uz',
      }}
    />
  );
}
