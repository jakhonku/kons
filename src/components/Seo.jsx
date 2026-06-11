import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* ============================================================
   Yengil SEO komponenti (kutubxonasiz).
   Har bir sahifada <Seo title description /> chaqiriladi va
   document.title, meta description, canonical, Open Graph va
   Twitter teglarini route oʻzgarishida yangilab turadi.
   ============================================================ */

const SITE_NAME = 'Oʻzbekiston Davlat Konservatoriyasi';
const SITE_URL = 'https://conservatory.uz';
const DEFAULT_IMAGE = `${SITE_URL}/image.png`;

function upsertMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({ title, description, image, noindex = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Rasmiy sayt`;
    const url = SITE_URL + (pathname === '/' ? '/' : pathname);
    const img = image || DEFAULT_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    if (description) upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', fullTitle);
    if (description) upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);

    upsertMeta('name', 'twitter:title', fullTitle);
    if (description) upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);
  }, [title, description, image, noindex, pathname]);

  return null;
}
