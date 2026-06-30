import { Briefcase, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Boʻsh ish oʻrinlari',
    tag: 'Tuzilma', title: 'Boʻsh ish', emphasis: 'oʻrinlari',
    lead: 'Oʻzbekiston davlat konservatoriyasidagi boʻsh ish oʻrinlari va kasbiy oʻsish imkoniyatlari shu sahifada eʼlon qilib boriladi. Barcha vakansiyalar Oʻzbekiston Respublikasi qonunchiligiga muvofiq tanlov asosida toʻldiriladi.',
    emptyTitle: 'Hozircha boʻsh ish oʻrinlari mavjud emas',
    emptyText: 'Yangi vakansiyalar tez orada shu sahifada eʼlon qilinadi. Iltimos, keyinroq qayta tashrif buyuring.',
    badge: 'Tez orada',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Вакансии',
    tag: 'Структура', title: 'Вакантные', emphasis: 'должности',
    lead: 'Вакансии и возможности профессионального роста в Государственной консерватории Узбекистана публикуются на этой странице. Все вакансии заполняются на конкурсной основе в соответствии с законодательством Республики Узбекистан.',
    emptyTitle: 'В настоящее время вакансий нет',
    emptyText: 'Новые вакансии будут опубликованы на этой странице в ближайшее время. Пожалуйста, зайдите позже.',
    badge: 'Скоро',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Vacancies',
    tag: 'Structure', title: 'Job', emphasis: 'vacancies',
    lead: 'Vacancies and career opportunities at the State Conservatory of Uzbekistan are announced on this page. All vacancies are filled on a competitive basis in accordance with the legislation of the Republic of Uzbekistan.',
    emptyTitle: 'There are currently no vacancies',
    emptyText: 'New vacancies will be published on this page soon. Please check back later.',
    badge: 'Coming soon',
  },
};

export default function Vakansiyalar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.tag}
        title={tr.title}
        emphasis={tr.emphasis}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '48px' }}>
            <p className="lead">{tr.lead}</p>
          </article>

          {/* Empty state — vakansiyalar tez orada */}
          <div style={{
            background: 'var(--cream)',
            border: '1px solid var(--light-border)',
            borderTop: '4px solid var(--gold)',
            padding: '64px 32px',
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              width: 84, height: 84, borderRadius: '50%',
              background: 'var(--white)', border: '1px solid var(--light-border)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold-dark)', marginBottom: '24px',
            }}>
              <Briefcase size={38} strokeWidth={1.4} />
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--gold-dark)',
              fontFamily: 'var(--font-sans)', marginBottom: '14px',
            }}>
              <Clock size={13} strokeWidth={2} /> {tr.badge}
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)', color: 'var(--navy)',
              fontSize: '1.7rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '14px',
            }}>
              {tr.emptyTitle}
            </h2>

            <p style={{
              fontSize: '0.95rem', color: '#666', lineHeight: 1.75,
              fontFamily: 'var(--font-serif)', maxWidth: '560px',
              margin: '0 auto',
            }}>
              {tr.emptyText}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

