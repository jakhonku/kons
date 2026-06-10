import InfoPage from '../components/InfoPage';

export default function RektorTabrigi() {
  return (
    <InfoPage
      tag="Yangiliklar"
      title="Rektor tabrigi"
      emphasis="va Nutqlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Yangiliklar', to: '/yangiliklar' },
        { label: 'Rektor tabrigi' },
      ]}
      lead="Oʻzbekiston davlat konservatoriyasi rektorining tabriklari va maʼruzalari."
      sections={[
        {
          heading: "Yangi oʻquv yili munosabati bilan tabrik",
          text: "Aziz ustozlar va qadrli talabalar! Sizlarni yangi oʻquv yili boshlanishi bilan samimiy muborakbod etaman.",
        }
      ]}
    />
  );
}
