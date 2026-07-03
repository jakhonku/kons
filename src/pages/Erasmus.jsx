import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar' },
  { label: 'Erasmus+ dasturi' },
];

export default function Erasmus() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Erasmus+"
        emphasis="Dasturi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <article className="article-body" style={{ marginBottom: '60px' }}>
            <p className="lead">
              Erasmus+ Yevropa Ittifoqining ta’lim, o‘qitish, yoshlar va sport sohalarida loyihalar, hamkorlik, tadbirlar va mobillikni qo‘llab-quvvatlash dasturidir. U Yevropaning 33 ta davlati (a’zo davlatlar va bog‘langan davlatlar) o‘rtasida ushbu sohalarning barchasida hamkorlikni moliyalashtirish imkoniyatlarini taqdim etadi.
            </p>
            <p>
              O‘zbekiston davlat konservatoriyasi Erasmus+ dasturi doirasida qator xalqaro loyihalarda ishtirok etib kelmoqda. Jumladan, 2023-yilda Belgiyaning Antverpen Qirollik konservatoriyasi bilan hamkorlikda MUSAE loyihasi amalga oshirildi.
            </p>
            <p>
              2025-yilda Italiyaning Alfredo Kazella nomidagi L’Akvila konservatoriyasi bilan hamkorlikda “ItARTS: The Debut” xalqaro loyihasi tashkil etildi. Loyiha doirasida professor-o‘qituvchilar va talabalar uchun akademik almashinuv dasturlari hamda Toshkentda Italiya musiqa festivali o‘tkazildi.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
