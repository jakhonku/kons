import InfoPage from '../components/InfoPage';

export default function TalimDasturlari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Taʼlim"
      emphasis="Dasturlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul' },
        { label: "Taʼlim dasturlari" },
      ]}
      lead="Magistratura va oliy oʻquv yurtidan keyingi taʼlim dasturlari boʻyicha maʼlumotlar."
      sections={[
        {
          heading: "Magistratura",
          text: "Magistratura mutaxassisliklari bakalavriat yoʻnalishlarining mantiqiy davomi boʻlib, chuqurlashtirilgan ilmiy-ijodiy tayyorgarlikni koʻzda tutadi.",
        }
      ]}
    />
  );
}
