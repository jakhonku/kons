import InfoPage from '../components/InfoPage';

export default function QabulKvotasi() {
  return (
    <InfoPage
      tag="Qabul"
      title="Qabul"
      emphasis="Kvotasi"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul' },
        { label: 'Qabul kvotasi' },
      ]}
      lead="Joriy oʻquv yili uchun belgilangan davlat granti va toʻlov-kontrakt asosidagi qabul rejalari."
      sections={[
        {
          heading: "Kvotalar haqida",
          text: "Kvotalar har yili Oʻzbekiston Respublikasi Prezidenti qarori bilan tasdiqlanadi.",
        }
      ]}
    />
  );
}
