import InfoPage from '../components/InfoPage';

export default function KasbiyImtihonlar() {
  return (
    <InfoPage
      tag="Qabul"
      title="Kasbiy va Ijodiy"
      emphasis="Imtihonlar"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul' },
        { label: 'Kasbiy va ijodiy imtihonlar' },
      ]}
      lead="Kasbiy (ijodiy) imtihonlar dasturi va baholash mezonlari bilan tanishing."
      sections={[
        {
          heading: "Imtihon bosqichlari",
          items: [
            "Ixtisoslik (ijro yoki ijod)",
            "Solfejio va musiqa nazariyasi",
            "Garmoniya (ba'zi yoʻnalishlar uchun)",
            "Suhbat"
          ]
        }
      ]}
    />
  );
}
