import InfoPage from '../components/InfoPage';

export default function ImtihonNatijalari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Imtihon"
      emphasis="Natijalari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: 'Imtihon natijalari' },
      ]}
      lead="O'tkazilgan kasbiy (ijodiy) imtihonlar bo'yicha qaydnomalar va yakuniy natijalar."
      sections={[
        {
          heading: "Natijalarni tekshirish",
          text: "Imtihon natijalari har bir bosqich yakunlangandan so'ng 24 soat ichida e'lon qilinadi.",
        }
      ]}
    />
  );
}
