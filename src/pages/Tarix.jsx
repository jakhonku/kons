import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Tarixi' },
];

export default function Tarix() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Konservatoriya"
        emphasis="Tarixi"
        breadcrumbs={BREADCRUMBS}
      />
      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              O'zbekiston davlat konservatoriyasi Markaziy Osiyodagi eng qadimgi va nufuzli oliy musiqa
              ta'lim muassasalaridan biri hisoblanadi.
            </p>
            <p>
              1936-yilda asos solingan ushbu dargoh musiqiy ilm-fan va ijrochilik san'atining o'chog'i
              bo'lib kelmoqda. O'zbekistonning eng taniqli san'atkorlari va bastakorlari aynan shu yerda
              tahsil olgan.
            </p>
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
              alt="Konservatoriya tarixi"
              className="content-img"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
