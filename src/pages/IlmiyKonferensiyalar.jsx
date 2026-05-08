import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: 'Ilmiy konferensiyalar' },
];

export default function IlmiyKonferensiyalar() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Ilmiy"
      emphasis="konferensiyalar"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyada yiliga 8 dan ortiq xalqaro va respublika miqyosidagi ilmiy konferensiyalar oʻtkaziladi. Tadbirlarda dunyoning yetakchi musiqa universitetlari va tadqiqot markazlari mutaxassislari ishtirok etadi."
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
              desc: "Markaziy Osiyo musiqa madaniyati va xalqaro hamkorlikning bugungi tendensiyalariga bagʻishlangan asosiy yillik forum.",
              meta: '15–17 oktabr 2026 · Bosh zal',
            },
            {
              tag: 'Xalqaro',
              title: 'Maqom Studies Symposium',
              desc: "Maqom san'atining tarixiy tomirlari va bugungi ijro tendensiyalari boʻyicha simpozium.",
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
          heading: "Oʻtgan konferensiyalar (2024–2025)",
          table: {
            head: ['Sana', 'Konferensiya', 'Daraja', 'Ishtirokchilar'],
            rows: [
              ['12–14.10.2025', 'Music & AI: Future of Sound', 'Xalqaro', '180 nafar · 12 davlat'],
              ['18–19.05.2025', 'Etnomusiqashunoslik oʻqishlari', 'Respublika', '85 nafar'],
              ['22–24.11.2024', "20-asr oʻzbek bastakorlari", 'Xalqaro', '140 nafar · 9 davlat'],
              ['08–09.04.2024', "Musiqa pedagogikasi forum", 'Respublika', '120 nafar'],
              ['15–17.10.2024', 'Silk Road Music Heritage', 'Xalqaro', '210 nafar · 15 davlat'],
            ],
          },
        },
        {
          heading: "Ishtirok etish va maqola yuborish",
          items: [
            { title: '1-bosqich: Tezislar yuborish', desc: "Konferensiyaga 2 oy qolganda 300–500 soʻzli tezislar yuboriladi." },
            { title: '2-bosqich: Ekspertiza', desc: "Tashkiliy qoʻmita va ilmiy kengash 14 ish kuni ichida koʻrib chiqadi." },
            { title: "3-bosqich: Toʻliq maqola", desc: "Tasdiqlangan tezislar uchun 5000–8000 soʻzli toʻliq maqola tayyorlanadi." },
            { title: "4-bosqich: Nashr", desc: "Konferensiya materiallari toʻplami va xalqaro jurnallarda chop etiladi." },
          ],
        },
      ]}
      contact={{
        title: "Tashkiliy qoʻmita",
        responsible: "Aliyeva Nigora Sherzodovna",
        phone: '+998 71 234-56-86',
        email: 'conf@konservatoriya.uz',
      }}
    />
  );
}
