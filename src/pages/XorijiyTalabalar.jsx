import InfoPage from '../components/InfoPage';

export default function XorijiyTalabalar() {
  return (
    <InfoPage
      tag="Xalqaro"
      title="Xorijiy"
      emphasis="Talabalar uchun"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Xalqaro', to: '/xalqaro' },
        { label: 'Xorijiy talabalar uchun' },
      ]}
      lead="Xorijiy fuqarolarni konservatoriyaga qabul qilish va ularning o'qish jarayoni bo'yicha ma'lumotlar."
      sections={[
        {
          heading: "Qabul tartibi",
          text: "Xorijiy fuqarolar suhbat asosida o'qishga qabul qilinadi.",
        }
      ]}
    />
  );
}
