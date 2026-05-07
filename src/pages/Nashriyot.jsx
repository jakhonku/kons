import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan', to: '/ilm-fan' },
  { label: 'Nashriyot' },
];

export default function Nashriyot() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Konservatoriya"
      emphasis="nashriyoti"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriya nashriyoti darsliklar, monografiyalar, oʻquv qoʻllanmalari, partiturasi va musiqa toʻplamlarini chop etadi. Nashriyot Oʻzbekiston Vazirlar Mahkamasi qoshidagi Ta'lim sifatini nazorat qilish davlat inspektsiyasi tomonidan akkreditatsiyalangan."
      stats={[
        { value: '40+', label: 'Yillik nashr' },
        { value: '5', label: 'Nashr turi' },
        { value: '1948', label: 'Tashkil etilgan' },
      ]}
      sections={[
        {
          heading: "Nashr turlari",
          cards: [
            { tag: '01', title: 'Darsliklar va oʻquv qoʻllanmalari', desc: "Bakalavr va magistratura uchun fundamental oʻquv adabiyoti.", meta: '20+ nashr/yil' },
            { tag: '02', title: 'Monografiyalar', desc: "Mustaqil ilmiy tadqiqotlar nashrlari.", meta: '5–8 nashr/yil' },
            { tag: '03', title: 'Notali nashrlar', desc: "Bastakorlar asarlari, partituralar, klavirlar.", meta: '10+ nashr/yil' },
            { tag: '04', title: 'Ilmiy jurnallar', desc: '"Musiqa" jurnali, Eurasian Music Journal.', meta: 'Yiliga 8 son' },
            { tag: '05', title: 'Konferensiya toʻplamlari', desc: "Xalqaro va respublika konferensiyalari materiallari.", meta: '6–8 nashr/yil' },
            { tag: '06', title: 'Audio-video nashrlar', desc: "CD, DVD va raqamli formatdagi musiqa yozuvlari.", meta: '12+ nashr/yil' },
          ],
        },
        {
          heading: "Soʻnggi nashrlar (2025–2026)",
          table: {
            head: ['Yil', 'Nashr nomi', 'Muallif', 'Tur'],
            rows: [
              ['2026', "Maqom san'atining nazariy asoslari", "prof. Yusupov Davron", 'Monografiya'],
              ['2026', "Fortepiano texnikasi: tekshiruv va metodika", "prof. Rashidova Nargiza", "Oʻquv qoʻllanma"],
              ['2025', "20-asr oʻzbek simfonik musiqasi", "prof. Aliyeva Nigora", 'Monografiya'],
              ['2025', "Xalq cholgʻulari ansambli uchun partituralar", "Tahrir: prof. Qodirova Madina", 'Notali nashr'],
              ['2025', "Musiqa pedagogikasi: zamonaviy yondashuvlar", "doc. Karimova Sarvinoz", 'Darslik'],
            ],
          },
        },
        {
          heading: "Mualliflar uchun",
          items: [
            { title: 'Qoʻlyozma talablari', desc: "Maqola — 5000–8000 soʻz, monografiya — 8 b.t. dan kam emas." },
            { title: 'Format', desc: "Word fayli, Times New Roman 14, 1.5 interval, izlar 2–2.5 sm." },
            { title: 'Sitat va manbalar', desc: "Chicago yoki APA uslubi. DOI va ISBN koʻrsatilgan." },
            { title: 'Ekspertiza', desc: "Ilmiy kengash va 2 ta tashqi taqrizchi tomonidan baholanadi." },
            { title: 'Nashr muddati', desc: "Tasdiqlangandan soʻng 4–8 oy ichida nashr qilinadi." },
            { title: 'Mualliflik haqi', desc: "Davlat dasturi nashrlari uchun mualliflik haqi toʻlanadi." },
          ],
        },
      ]}
      contact={{
        title: "Nashriyot boʻlimi",
        responsible: "Tursunova Dilfuza Otabekovna",
        phone: '+998 71 234-56-88',
        email: 'nashr@konservatoriya.uz',
        address: "Bosh bino, 4-qavat, 405-xona",
        hours: 'Dushanba – Juma, 10:00 – 17:00',
      }}
    />
  );
}
