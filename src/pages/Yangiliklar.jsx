import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot' },
  { label: 'Yangiliklar' },
];

const NEWS = [
  {
    id: 1,
    date: '12 APREL, 2026',
    title: 'Xalqaro Teatr Kuni munosabati bilan tantanali kecha',
    image: 'https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=2070',
  },
];

export default function Yangiliklar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="So'nggi"
        emphasis="Yangiliklar"
        breadcrumbs={BREADCRUMBS}
      />
      <section className="main-content">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {NEWS.map((item) => (
              <article
                key={item.id}
                style={{ background: 'white', border: '1px solid #eee', overflow: 'hidden', transition: '0.3s' }}
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>{item.date}</span>
                  <h3 style={{ margin: '10px 0', color: 'var(--primary-blue)' }}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
