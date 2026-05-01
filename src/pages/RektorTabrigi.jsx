import InfoPage from '../components/InfoPage';

export default function RektorTabrigi() {
  return (
    <InfoPage
      tag="Axborot xizmati"
      title="Rektor tabrigi"
      emphasis="va Nutqlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Axborot xizmati', to: '/yangiliklar' },
        { label: 'Rektor tabrigi' },
      ]}
      lead="O'zbekiston davlat konservatoriyasi rektorining tabriklari va ma'ruzalari."
      sections={[
        {
          heading: "Yangi o'quv yili munosabati bilan tabrik",
          text: "Aziz ustozlar va qadrli talabalar! Sizlarni yangi o'quv yili boshlanishi bilan samimiy muborakbod etaman.",
        }
      ]}
    />
  );
}
