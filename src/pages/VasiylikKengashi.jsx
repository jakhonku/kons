import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Vasiylik kengashi' },
];

export default function VasiylikKengashi() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Vasiylik"
      emphasis="kengashi"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻzbekiston davlat konservatoriyasi va uning Nukus filialining Vasiylik kengashi tarkibi quyida keltirilgan. Kengash madaniyat, taʼlim, moliya hamda musiqa sanʼati sohalaridagi rahbar va yetakchi mutaxassislardan tashkil topgan."
      sections={[
        {
          heading: 'Kengash raisligi',
          cards: [
            {
              tag: 'Kengash raisi',
              title: 'Axmedov Baxodir Madjitovich',
              desc: "Oʻzbekiston Respublikasi Madaniyat vazirining birinchi oʻrinbosari.",
            },
            {
              tag: 'Rais oʻrinbosari',
              title: 'Urinbayev Kamoliddin Turdimuratovich',
              desc: "Oʻzbekiston davlat konservatoriyasi rektori.",
            },
            {
              tag: 'Kengash kotibi',
              title: 'Sultanova Tatyana Akramovna',
              desc: "Oʻzbekiston davlat konservatoriyasining Reja-moliya boʻlimi boshligʻi.",
            },
          ],
        },
        {
          heading: 'Kengash aʼzolari',
          cards: [
            {
              tag: 'Aʼzo',
              title: 'Mirsoatov Alisher Kudratullayevich',
              desc: "Oʻzbekiston Respublikasi “Oʻzbekiston Respublikasi Tashqi iqtisodiy faoliyat milliy banki” aksiyadorlik jamiyati boshqaruvi raisi.",
            },
            {
              tag: 'Aʼzo',
              title: 'Abdullayev Rustam Abdullayevich',
              desc: "Oʻzbekiston kompozitorlar va bastakorlari uyushmasi raisi.",
            },
            {
              tag: 'Aʼzo',
              title: 'Ramiz Usmonov Beknazarovich',
              desc: "Alisher Navoiy nomidagi DAKT direktori.",
            },
            {
              tag: 'Aʼzo',
              title: 'Zairov Zair Kamildjanovich',
              desc: "V. Uspenskiy nomidagi RIMM direktori.",
            },
            {
              tag: 'Aʼzo',
              title: 'Azimov Ilhom Azimovich',
              desc: "Toshkent musiqa va sanʼat kolleji direktori.",
            },
          ],
        },
        {
          heading: 'Izoh',
          text: "Vasiylik kengashi aʼzolari boshqa ishga oʻtgan taqdirda Kengash tarkibiga ushbu lavozimga yangi tayinlangan yoki mazkur vazifalarni bajarishi yuklatilgan shaxslar kiritiladi.",
        },
      ]}
    />
  );
}
