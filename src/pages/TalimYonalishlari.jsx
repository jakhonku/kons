import InfoPage from '../components/InfoPage';

export default function TalimYonalishlari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Ta'lim"
      emphasis="Yo'nalishlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: "Ta'lim yo'nalishlari" },
      ]}
      lead="Konservatoriyada bakalavriat bosqichi bo'yicha quyidagi ta'lim yo'nalishlari mavjud."
      sections={[
        {
          heading: "Bakalavriat yo'nalishlari",
          items: [
            "Cholg'u ijrochiligi (turlari bo'yicha)",
            "Vokal san'ati (turlari bo'yicha)",
            "Dirijyorlik (turlari bo'yicha)",
            "Bastakorlik san'ati",
            "Musiqashunoslik",
            "Musiqa pedagogikasi"
          ]
        }
      ]}
    />
  );
}
