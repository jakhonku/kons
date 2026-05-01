import InfoPage from '../components/InfoPage';

export default function QabulKvotasi() {
  return (
    <InfoPage
      tag="Qabul"
      title="Qabul"
      emphasis="Kvotasi"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: 'Qabul kvotasi' },
      ]}
      lead="Joriy o'quv yili uchun belgilangan davlat granti va to'lov-kontrakt asosidagi qabul rejalari."
      sections={[
        {
          heading: "Kvotalar haqida",
          text: "Kvotalar har yili O'zbekiston Respublikasi Prezidenti qarori bilan tasdiqlanadi.",
        }
      ]}
    />
  );
}
