import InfoPage from '../components/InfoPage';

export default function ImtihonNatijalari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Imtihon"
      emphasis="Natijalari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul' },
        { label: 'Imtihon natijalari' },
      ]}
      lead="Oʻtkazilgan kasbiy (ijodiy) imtihonlar boʻyicha qaydnomalar va yakuniy natijalar."
      sections={[
        {
          heading: "Natijalarni tekshirish",
          text: "Imtihon natijalari har bir bosqich yakunlangandan soʻng 24 soat ichida eʼlon qilinadi.",
        }
      ]}
    />
  );
}
