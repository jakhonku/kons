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
      lead="Abituriyentlar uchun qoʻyiladigan umumiy va maxsus talablar bilan tanishing."
      sections={[
        {
          heading: "Hujjatlar roʻyxati",
          items: [
            "Pasport (ID karta) nusxasi",
            "Diplom yoki attestat (asli)",
            "3.5x4.5 oʻlchamdagi rasm",
            "Tibbiy ma'lumotnoma"
          ]
        }
      ]}
    />
  );
}
