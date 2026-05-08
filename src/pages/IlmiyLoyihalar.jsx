import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: 'Ilmiy loyihalar' },
];

export default function IlmiyLoyihalar() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Joriy"
      emphasis="ilmiy loyihalar"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriya doirasida davlat va xalqaro grantlar asosida amalga oshirilayotgan ilmiy loyihalar. Tadqiqotlar musiqa madaniyati, etnomusiqashunoslik, ijro nazariyasi va musiqa pedagogikasi yoʻnalishlarida olib boriladi."
      stats={[
        { value: '12', label: 'Faol loyiha' },
        { value: '4', label: 'Xalqaro grant' },
        { value: '450M', label: "Soʻmlik moliyalashuv" },
      ]}
      sections={[
        {
          heading: 'Davlat granti loyihalari',
          cards: [
            {
              tag: 'OT-A1',
              title: "Maqom san'atining zamonaviy interpretatsiyalari",
              desc: "Maqom an'analarining bugungi kun ijrochiligida saqlanishi va oʻzgarishini tadqiq qiluvchi 3 yillik loyiha.",
              meta: 'Rahbar: prof. Yusupov Davron Murodovich · 2024–2027',
            },
            {
              tag: 'OT-A2',
              title: "Oʻzbek folklor musiqasining digital arxivi",
              desc: 'Etnografik yozuvlarni raqamlashtirish, kataloglash va xalqaro arxivlar bilan integratsiya.',
              meta: "Rahbar: dots. Mirzayeva Nargiza Otabekovna · 2025–2027",
            },
            {
              tag: 'F-2',
              title: "20-asr oʻzbek bastakorlari ijodi",
              desc: "Mukhtor Ashrafiy, Suleyman Yudakov va Sayfi Jalil ijodining nazariy tahlili.",
              meta: "Rahbar: prof. Aliyeva Nigora Sherzodovna · 2024–2026",
            },
          ],
        },
        {
          heading: "Xalqaro hamkorlikdagi loyihalar",
          cards: [
            { tag: 'DAAD', title: 'Silk Road Music Heritage', desc: "Germaniyaning Berlin University of the Arts bilan birgalikda.", meta: 'Hamkor: Berlin UdK · 2024–2026' },
            { tag: 'Erasmus+', title: 'Music Pedagogy 4.0', desc: "Italiya, Polsha va Qozogʻiston OTMlari bilan oʻqituvchilar mobilligi.", meta: '4 universitet · 2025–2028' },
            { tag: 'UNESCO', title: 'Intangible Cultural Heritage', desc: "Markaziy Osiyo nomoddiy madaniy merosini saqlash boʻyicha xalqaro tadqiqot.", meta: '2025–2027' },
            { tag: 'KOICA', title: 'East-West Music Dialog', desc: "Janubiy Koreyaning Hanyang Universiteti bilan musiqa madaniyati almashinuvi.", meta: '2026–2028' },
          ],
        },
        {
          heading: "Loyihada ishtirok etish",
          items: [
            { title: 'Talaba-tadqiqotchilar', desc: "Magistr va doktorantlar uchun loyiha guruhlariga qoʻshilish imkoniyati." },
            { title: 'Yosh olimlar grantlari', desc: "30 yoshgacha boʻlgan tadqiqotchilar uchun maxsus grant dasturlari." },
            { title: "Ilmiy konferensiya nashrlari", desc: "Loyiha natijalari xalqaro nashrlarda chop etiladi." },
            { title: "Ekspertiza va konsultatsiyalar", desc: "Tashqi tashkilotlar uchun ilmiy maslahatchi xizmatlari." },
          ],
        },
      ]}
      contact={{
        title: "Ilmiy-tadqiqot markazi",
        responsible: "Toshmatov Behruz Aliyevich",
        phone: '+998 71 234-56-82',
        email: 'tadqiqot@konservatoriya.uz',
      }}
    />
  );
}
