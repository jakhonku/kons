import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';

const TEXT = {
  uz: {
    tag: 'Vaqtinchalik',
    title: 'Bu sahifa',
    emphasis: 'tez kunda',
    desc: 'Ushbu boʻlim hozircha tayyorlanmoqda. Maʼlumotlar toʻldirilgach, sahifa ochiladi. Iltimos, birozdan soʻng qayta tashrif buyuring.',
    back: 'Bosh sahifaga qaytish',
  },
  ru: {
    tag: 'Временно',
    title: 'Эта страница',
    emphasis: 'скоро',
    desc: 'Раздел находится в стадии подготовки. Страница откроется после заполнения информации. Пожалуйста, зайдите немного позже.',
    back: 'Вернуться на главную',
  },
  en: {
    tag: 'Temporarily',
    title: 'This page is',
    emphasis: 'coming soon',
    desc: 'This section is currently being prepared. The page will open once the information is complete. Please check back a little later.',
    back: 'Back to home',
  },
};

export default function ComingSoon() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = TEXT[lang] || TEXT.uz;

  return (
    <section className="coming-soon">
      <Seo title={t.emphasis ? `${t.title} ${t.emphasis}` : undefined} description={t.desc} noindex />
      <div className="container">
        <div className="coming-soon-inner reveal">
          <span className="coming-soon-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <span className="section-tag">{t.tag}</span>
          <h1>
            {t.title} <span>{t.emphasis}</span>
          </h1>
          <p>{t.desc}</p>
          <button className="coming-soon-btn" onClick={() => navigate('/')}>
            {t.back}
          </button>
        </div>
      </div>
    </section>
  );
}
