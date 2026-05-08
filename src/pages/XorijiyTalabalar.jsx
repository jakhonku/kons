import InfoPage from '../components/InfoPage';

export default function XorijiyTalabalar() {
  return (
    <InfoPage
      tag="Xalqaro"
      title="Xorijiy"
      emphasis="Talabalar uchun"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Xalqaro' },
        { label: 'Xorijiy talabalar uchun' },
      ]}
      lead="Xorijiy fuqarolarni konservatoriyaga qabul qilish va ularning oʻqish jarayoni boʻyicha ma'lumotlar."
      sections={[
        {
          heading: "Qabul tartibi",
          text: "Xorijiy fuqarolar suhbat asosida oʻqishga qabul qilinadi.",
        }
      ]}
    />
  );
}
