import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Tuzilma' },
];

export default function Tuzilma() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Muassasa"
        emphasis="Tuzilmasi"
        breadcrumbs={BREADCRUMBS}
      />
      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              Konservatoriya tuzilmasi o'quv, ilmiy va ijodiy jarayonlarni samarali boshqarishga xizmat
              qiladi.
            </p>
            <h2>Fakultetlar va kafedralar</h2>
            <p>
              Hozirgi kunda konservatoriya tarkibida 5 ta fakultet va 30 dan ortiq kafedralar faoliyat
              yuritmoqda. Har bir fakultet o'z yo'nalishi bo'yicha yuqori malakali mutaxassislarni
              tayyorlashga ixtisoslashgan.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
