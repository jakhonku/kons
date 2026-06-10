import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: '"Musiqa" jurnali tahririyati' },
];

export default function MusiqaJurnaliTahririyati() {
  return (
    <InfoPage
      tag="Ilmiy nashr"
      title='"Musiqa" jurnali'
      emphasis="tahririyati"
      breadcrumbs={BREADCRUMBS}
      lead={`"Musiqa" jurnali tahririyati maqolalarni qabul qilish, ekspertiza va nashriyot jarayonini boshqaradi. Jurnal Oliy attestatsiya komissiyasi tomonidan tasdiqlangan ilmiy nashrlar roʻyxatiga kiritilgan.`}
      stats={[
        { value: '8', label: 'Yillik son' },
        { value: '40', label: 'Yillik maqola' },
        { value: '14', label: "Tahririyat aʼzolari" },
      ]}
      sections={[
        {
          heading: "Tahririyat tarkibi",
          cards: [
            { tag: 'Bosh muharrir', title: 'prof. Aliyeva Nigora Sherzodovna', desc: "Filologiya fanlari doktori. 18 yil tahririyat tajribasi." },
            { tag: "Bosh muharrir oʻrinbosari", title: 'prof. Tursunov Otabek Murodovich', desc: "Musiqa nazariyasi kafedrasi mudiri. Etnomusiqashunos." },
            { tag: "Masʼul kotib", title: 'doc. Yusupova Sevara Akbarovna', desc: "Musiqa tarixi mutaxassisi. Tahrir boʻlimi rahbari." },
          ],
        },
        {
          heading: "Maqolalarni qabul qilish jarayoni",
          items: [
            { title: "1. Qoʻlyozma yuborish", desc: "Maqola elektron pochtaga (musiqa@konservatoriya.uz) yoki online tizim orqali yuboriladi." },
            { title: '2. Texnik tekshiruv', desc: "Tahririyat 7 ish kuni ichida formatlash va texnik talablarga muvofiqligini tekshiradi." },
            { title: "3. Koʻr-koʻrsatma ekspertiza", desc: "2 ta mustaqil taqrizchi 30 ish kuni ichida tahlil qiladi." },
            { title: '4. Tahrir natijasi', desc: "3 ta yechim: qabul qilish / qayta ishlashni soʻrash / rad etish." },
          ],
        },
      ]}
      contact={{
        title: "Tahririyat",
        responsible: "doc. Yusupova Sevara (masʼul kotib)",
        phone: '+998 71 234-56-91',
        email: 'musiqa@konservatoriya.uz',
        address: "1-bino, 314-xona",
        hours: 'Seshanba va Payshanba, 14:00 – 17:00',
      }}
    />
  );
}
