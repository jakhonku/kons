import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Video, Calendar, Clock, ExternalLink, CheckCircle, Clock3, AlertCircle, Loader2 } from 'lucide-react';

const HOLAT_OPTIONS = {
  kutilmoqda: { label: { uz: 'Kutilmoqda', ru: 'Ожидается',   en: 'Upcoming'    }, color: '#f59e0b', Icon: Clock3 },
  faol:       { label: { uz: 'Hozir faol', ru: 'Идёт сейчас', en: 'Live now'    }, color: '#22c55e', Icon: CheckCircle },
  yakunlangan:{ label: { uz: 'Yakunlangan',ru: 'Завершён',    en: 'Completed'   }, color: '#94a3b8', Icon: AlertCircle },
};

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
    lead: "Qabul jarayonidagi online imtihonlarni real vaqtda kuzating. Imtihon nomini tanlang va Zoom tugmasini bosib kirshingiz mumkin.",
    empty: "Hozircha online imtihon mavjud emas.",
    loading: "Yuklanmoqda…",
    joinZoom: "Zoom orqali kirish",
    date: "Sana",
    time: "Vaqt",
    filter_all: 'Barchasi',
    filter_faol: 'Faol',
    filter_kutilmoqda: 'Kutilmoqda',
    filter_yakunlangan: 'Yakunlangan',
    note: "Imtihonga kirishdan oldin Zoom ilovasini yuklab oling yoki brauzerda ochish tugmasini tanlang.",
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
    lead: "Следите за онлайн-экзаменами в режиме реального времени. Выберите экзамен и нажмите кнопку Zoom для входа.",
    empty: "Онлайн экзаменов пока нет.",
    loading: "Загрузка…",
    joinZoom: "Войти через Zoom",
    date: "Дата",
    time: "Время",
    filter_all: 'Все',
    filter_faol: 'Активные',
    filter_kutilmoqda: 'Ожидаются',
    filter_yakunlangan: 'Завершённые',
    note: "Перед входом на экзамен загрузите приложение Zoom или выберите открытие в браузере.",
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
    lead: "Follow online admission exams in real time. Select an exam and click the Zoom button to join.",
    empty: "No online exams available at the moment.",
    loading: "Loading…",
    joinZoom: "Join via Zoom",
    date: "Date",
    time: "Time",
    filter_all: 'All',
    filter_faol: 'Live',
    filter_kutilmoqda: 'Upcoming',
    filter_yakunlangan: 'Completed',
    note: "Before joining the exam, download the Zoom app or choose to open it in your browser.",
  },
};

function HolatBadge({ holat, lang }) {
  const opt = HOLAT_OPTIONS[holat] || HOLAT_OPTIONS.kutilmoqda;
  const { Icon } = opt;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 12px', borderRadius: 99,
      fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.03em',
      background: opt.color + '18', color: opt.color,
      border: `1px solid ${opt.color}35`,
    }}>
      <Icon size={13} strokeWidth={2.2} />
      {opt.label[lang] || opt.label.uz}
    </span>
  );
}

export default function OnlineImtihonlar() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  const [items, setItems]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [filter, setFilter]     = useState('all');

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

    // realtime
    const channel = supabase
      .channel('public-online-imtihonlar')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'online_imtihonlar' }, () => {
        load();
      })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const filtered = items.filter((item) =>
    filter === 'all' ? true : item.holat === filter
  );

  const getName = (item) =>
    (lang === 'ru' && item.nomi_ru) ||
    (lang === 'en' && item.nomi_en) ||
    item.nomi || '—';

  const getDesc = (item) =>
    (lang === 'ru' && item.tavsif_ru) ||
    (lang === 'en' && item.tavsif_en) ||
    item.tavsif || null;

  const filters = [
    { key: 'all',         label: c.filter_all },
    { key: 'faol',        label: c.filter_faol },
    { key: 'kutilmoqda',  label: c.filter_kutilmoqda },
    { key: 'yakunlangan', label: c.filter_yakunlangan },
  ];

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
            <article className="article-body" style={{ marginBottom: 32 }}>
              <p className="lead">{c.lead}</p>
            </article>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  style={{
                    padding: '7px 18px',
                    borderRadius: 99,
                    border: filter === f.key
                      ? '1.5px solid var(--gold)'
                      : '1.5px solid var(--light-border)',
                    background: filter === f.key ? 'var(--gold)' : 'transparent',
                    color: filter === f.key ? '#fff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Content */}
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#888', padding: '40px 0' }}>
                <Loader2 size={22} style={{ animation: 'spin 1s linear infinite' }} />
                {c.loading}
              </div>
            ) : filtered.length === 0 ? (
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
                {filtered.map((item) => {
                  const isLive = item.holat === 'faol';
                  const isDone = item.holat === 'yakunlangan';
                  return (
                    <div
                      key={item.id}
                      style={{
                        background: 'var(--white)',
                        border: isLive
                          ? '2px solid #22c55e'
                          : '1px solid var(--light-border)',
                        borderRadius: 10,
                        padding: '24px 24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        boxShadow: isLive
                          ? '0 0 0 4px #22c55e15'
                          : '0 2px 8px rgba(0,0,0,0.04)',
                        transition: 'box-shadow 0.2s',
                        opacity: isDone ? 0.7 : 1,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* live pulse */}
                      {isLive && (
                        <span style={{
                          position: 'absolute', top: 14, right: 14,
                          display: 'flex', alignItems: 'center', gap: 5,
                          fontSize: '0.7rem', fontWeight: 700, color: '#22c55e',
                          animation: 'none',
                        }}>
                          <span style={{
                            display: 'inline-block', width: 8, height: 8,
                            borderRadius: '50%', background: '#22c55e',
                            boxShadow: '0 0 0 3px #22c55e30',
                          }} />
                          LIVE
                        </span>
                      )}

                      {/* badge */}
                      <div>
                        <HolatBadge holat={item.holat} lang={lang} />
                      </div>

                      {/* name */}
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        color: 'var(--navy)',
                        margin: 0,
                        lineHeight: 1.4,
                        paddingRight: isLive ? 48 : 0,
                      }}>
                        {getName(item)}
                      </h3>

                      {/* description */}
                      {getDesc(item) && (
                        <p style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.86rem',
                          color: '#666',
                          margin: 0,
                          lineHeight: 1.6,
                        }}>
                          {getDesc(item)}
                        </p>
                      )}

                      {/* date & time */}
                      {(item.sana || item.vaqt) && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 2 }}>
                          {item.sana && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: '#666' }}>
                              <Calendar size={14} strokeWidth={1.8} style={{ color: 'var(--gold-dark)' }} />
                              {new Date(item.sana).toLocaleDateString(
                                lang === 'ru' ? 'ru-RU' : lang === 'en' ? 'en-US' : 'uz-UZ',
                                { year: 'numeric', month: 'long', day: 'numeric' }
                              )}
                            </span>
                          )}
                          {item.vaqt && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: '#666' }}>
                              <Clock size={14} strokeWidth={1.8} style={{ color: 'var(--gold-dark)' }} />
                              {item.vaqt}
                            </span>
                          )}
                        </div>
                      )}

                      {/* zoom button */}
                      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
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
                            background: isDone
                              ? 'var(--light-border)'
                              : isLive
                              ? '#22c55e'
                              : 'var(--gold)',
                            color: isDone ? '#999' : '#fff',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            transition: 'opacity 0.15s',
                            pointerEvents: isDone ? 'none' : 'auto',
                            opacity: isDone ? 0.6 : 1,
                          }}
                          onClick={(e) => isDone && e.preventDefault()}
                        >
                          <ZoomIcon size={16} />
                          {c.joinZoom}
                          <ExternalLink size={13} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  );
                })}
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
