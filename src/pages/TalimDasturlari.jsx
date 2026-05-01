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
      lead="Magistratura va oliy o'quv yurtidan keyingi ta'lim dasturlari bo'yicha ma'lumotlar."
      sections={[
        {
          heading: "Magistratura",
          text: "Magistratura mutaxassisliklari bakalavriat yo'nalishlarining mantiqiy davomi bo'lib, chuqurlashtirilgan ilmiy-ijodiy tayyorgarlikni ko'zda tutadi.",
        }
      ]}
    />
  );
}
