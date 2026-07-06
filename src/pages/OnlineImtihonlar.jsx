import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Video, ExternalLink, Loader2 } from 'lucide-react';

const CONTENT = {
  uz: {
    tag: 'Qabul',
    title: 'Online',
    emphasis: 'imtihonlar',
    breadcrumbs: [
      { label: 'Bosh sahifa', to: '/' },
      { label: 'Qabul' },
      { label: 'Online imtihonlar' },
    ],
    lead: "Qabul jarayonidagi online imtihonlarni real vaqtda kuzating. Imtihon nomini tanlang va Zoom tugmasini bosib kiring.",
    empty: "Hozircha online imtihonlar ro'yxati bo'sh.",
    loading: "Yuklanmoqda…",
    joinZoom: "Zoom orqali kirish",
    note: "Imtihonga kirishdan oldin Zoom ilovasini yuklab olishingiz yoki brauzerda ochishingiz tavsiya etiladi.",
  },
  ru: {
    tag: 'Приём',
    title: 'Онлайн',
    emphasis: 'экзамены',
    breadcrumbs: [
      { label: 'Главная', to: '/' },
      { label: 'Приём' },
      { label: 'Онлайн экзамены' },
    ],
    lead: "Следите за онлайн-экзаменами в режиме реального времени. Выберите экзамен и войдите через Zoom.",
    empty: "Список онлайн-экзаменов пуст.",
    loading: "Загрузка…",
    joinZoom: "Войти через Zoom",
    note: "Перед входом рекомендуется скачать приложение Zoom или открыть его в браузере.",
  },
  en: {
    tag: 'Admissions',
    title: 'Online',
    emphasis: 'exams',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Admissions' },
      { label: 'Online exams' },
    ],
    lead: "Follow online admission exams in real time. Select an exam and join via Zoom.",
    empty: "No online exams available at the moment.",
    loading: "Loading…",
    joinZoom: "Join via Zoom",
    note: "Before joining, it is recommended to download the Zoom app or open it in your browser.",
  },
};

export default function OnlineImtihonlar() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  const [items, setItems]       = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const { data } = await supabase
        .from('online_imtihonlar')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });
      if (!cancelled) {
        setItems(data || []);
        setLoading(false);
      }
    }
    load();

    const channel = supabase
      .channel('public-online-imtihonlar-simple')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'online_imtihonlar' }, () => {
        load();
      })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const getName = (item) =>
    (lang === 'ru' && item.nomi_ru) ||
    (lang === 'en' && item.nomi_en) ||
    item.nomi || '—';

  return (
    <>
      <Seo
        title="Online imtihonlar — Qabul"
        description="Qabul jarayonidagi online imtihonlarni Zoom orqali kuzating. O'zbekiston Davlat Konservatoriyasi."
      />
      <main className="content-wrapper">
        <PageHero tag={c.tag} title={c.title} emphasis={c.emphasis} breadcrumbs={c.breadcrumbs} />

        <section className="main-content">
          <div className="container">

            {/* Lead */}
            <article className="article-body" style={{ marginBottom: 40 }}>
              <p className="lead">{c.lead}</p>
            </article>

            {/* Content */}
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#888', padding: '40px 0', fontFamily: 'var(--font-serif)' }}>
                <Loader2 size={22} style={{ animation: 'spin 1s linear infinite' }} />
                {c.loading}
              </div>
            ) : items.length === 0 ? (
              <div style={{
                textAlign: 'center', padding: '64px 24px',
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderRadius: 8, color: '#888',
              }}>
                <Video size={40} strokeWidth={1.2} style={{ marginBottom: 12, color: '#ccc' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{c.empty}</p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 20,
                marginBottom: 48,
              }}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'var(--white)',
                      border: '1.5px solid var(--light-border)',
                      borderRadius: 10,
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease-in-out',
                      position: 'relative',
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      color: 'var(--navy)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      {getName(item)}
                    </h3>

                    <div style={{ marginTop: 'auto' }}>
                      <a
                        href={item.zoom_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '10px 22px',
                          borderRadius: 6,
                          background: 'var(--gold)',
                          color: '#fff',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          transition: 'background-color 0.2s',
                        }}
                      >
                        <ZoomIcon size={16} />
                        {c.joinZoom}
                        <ExternalLink size={13} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Note */}
            <div style={{
              background: 'var(--cream)',
              border: '1px solid var(--light-border)',
              borderLeft: '4px solid var(--gold)',
              padding: '20px 28px',
              marginBottom: 60,
              borderRadius: 4,
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.85rem',
                color: '#555',
                lineHeight: 1.7,
                margin: 0,
              }}>
                💡 {c.note}
              </p>
            </div>

          </div>
        </section>
      </main>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}

function ZoomIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2.586l4.293 4.293A1 1 0 0 0 22 17V7a1 1 0 0 0-1.707-.707L16 10.586V8a2 2 0 0 0-2-2H4z" />
    </svg>
  );
}
