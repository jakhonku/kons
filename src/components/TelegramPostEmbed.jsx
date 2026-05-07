import { useEffect, useRef } from 'react';

export function parseTelegramUrl(url) {
  if (!url) return null;
  const m = String(url).match(/t\.me\/(?:s\/)?([A-Za-z0-9_]+)\/(\d+)/);
  if (!m) return null;
  return { channel: m[1], postId: m[2], path: `${m[1]}/${m[2]}` };
}

export default function TelegramPostEmbed({ url, caption }) {
  const ref = useRef(null);
  const parsed = parseTelegramUrl(url);

  useEffect(() => {
    if (!ref.current || !parsed) return;
    const container = ref.current;
    container.innerHTML = '';
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', parsed.path);
    script.setAttribute('data-width', '100%');
    container.appendChild(script);
    return () => {
      container.innerHTML = '';
    };
  }, [parsed?.path]);

  if (!parsed) {
    return (
      <div className="telegram-embed-error">
        Notoʻgʻri Telegram havolasi: {url}
      </div>
    );
  }

  return (
    <div className="telegram-embed-card">
      {caption && <div className="telegram-embed-caption">{caption}</div>}
      <div ref={ref} className="telegram-embed-mount" />
    </div>
  );
}
