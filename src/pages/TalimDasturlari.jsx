import InfoPage from '../components/InfoPage';

export default function TalimDasturlari() {
  return (
    <InfoPage
      tag="Qabul"
      title="Ta'lim"
      emphasis="Dasturlari"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Qabul', to: '/abituriyentlar' },
        { label: "Ta'lim dasturlari" },
      ]}
      lead="Magistratura va oliy oʻquv yurtidan keyingi ta'lim dasturlari boʻyicha ma'lumotlar."
      sections={[
        {
          heading: "Magistratura",
          text: "Magistratura mutaxassisliklari bakalavriat yoʻnalishlarining mantiqiy davomi boʻlib, chuqurlashtirilgan ilmiy-ijodiy tayyorgarlikni koʻzda tutadi.",
        }
      ]}
    />
  );
}
