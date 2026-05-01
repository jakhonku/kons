import InfoPage from '../components/InfoPage';

export default function QabulTalablari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Qabul"
      emphasis="Talablari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: "Qabul talablari" },
      ]}
      lead="Abituriyentlar uchun qo'yiladigan umumiy va maxsus talablar bilan tanishing."
      sections={[
        {
          heading: "Hujjatlar ro'yxati",
          items: [
            "Pasport (ID karta) nusxasi",
            "Diplom yoki attestat (asli)",
            "3.5x4.5 o'lchamdagi rasm",
            "Tibbiy ma'lumotnoma"
          ]
        }
      ]}
    />
  );
}
