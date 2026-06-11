import InfoPage from '../components/InfoPage';
import Seo from '../components/Seo';

export default function QabulKvotasi() {
  return (
    <>
    <Seo title="Qabul kvotasi" description="Oʻzbekiston Davlat Konservatoriyasiga qabul kvotasi — davlat granti va toʻlov-kontrakt asosidagi qabul rejalari." />
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
    </>
  );
}
