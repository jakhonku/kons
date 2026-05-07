import InfoPage from '../components/InfoPage';

export default function TalimYonalishlari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Ta'lim"
      emphasis="Yoʻnalishlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: "Ta'lim yoʻnalishlari" },
      ]}
      lead="Konservatoriyada bakalavriat bosqichi boʻyicha quyidagi ta'lim yoʻnalishlari mavjud."
      sections={[
        {
          heading: "Bakalavriat yoʻnalishlari",
          items: [
            "Cholgʻu ijrochiligi (turlari boʻyicha)",
            "Vokal san'ati (turlari boʻyicha)",
            "Dirijyorlik (turlari boʻyicha)",
            "Bastakorlik san'ati",
            "Musiqashunoslik",
            "Musiqa pedagogikasi"
          ]
        }
      ]}
    />
  );
}
