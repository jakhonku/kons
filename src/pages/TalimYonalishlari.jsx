import InfoPage from '../components/InfoPage';

export default function TalimYonalishlari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Taʼlim"
      emphasis="Yoʻnalishlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul' },
        { label: "Taʼlim yoʻnalishlari" },
      ]}
      lead="Konservatoriyada bakalavriat bosqichi boʻyicha quyidagi taʼlim yoʻnalishlari mavjud."
      sections={[
        {
          heading: "Bakalavriat yoʻnalishlari",
          items: [
            "Cholgʻu ijrochiligi (turlari boʻyicha)",
            "Vokal sanʼati (turlari boʻyicha)",
            "Dirijyorlik (turlari boʻyicha)",
            "Bastakorlik sanʼati",
            "Musiqashunoslik",
            "Musiqa pedagogikasi"
          ]
        }
      ]}
    />
  );
}
