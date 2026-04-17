import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PAGES } from '../../data/searchData';

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchPanel({ isOpen, onClose }) {
  const [query, setQuery]       = useState('');
  const [results, setResults]   = useState([]);
  const [active, setActive]     = useState(0);
  const inputRef                = useRef(null);
  const navigate                = useNavigate();

  /* Ochilganda input ga focus */
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  /* Qidiruv */
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResults([]); setActive(0); return; }
    const found = SEARCH_PAGES.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(found);
    setActive(0);
  }, [query]);

  /* Escape yopadi */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') setActive((p) => Math.min(p + 1, results.length - 1));
      if (e.key === 'ArrowUp')   setActive((p) => Math.max(p - 1, 0));
      if (e.key === 'Enter' && results[active]) {
        navigate(results[active].path);
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, active, navigate, onClose]);

  const go = useCallback((path) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>

        {/* Input */}
        <div className="search-input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            className="search-input-icon">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Sahifa yoki mavzu qidiring..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')} aria-label="Tozalash">
              ×
            </button>
          )}
        </div>

        {/* Natijalar */}
        {results.length > 0 && (
          <ul className="search-results">
            {results.map((r, i) => (
              <li
                key={r.path}
                className={`search-result-item${i === active ? ' search-result-active' : ''}`}
                onClick={() => go(r.path)}
                onMouseEnter={() => setActive(i)}
              >
                <div className="search-result-title">{highlight(r.title, query)}</div>
                <div className="search-result-desc">{r.desc}</div>
                <span className="search-result-path">{r.path}</span>
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <div className="search-empty">
            <span>«{query}»</span> bo'yicha natija topilmadi
          </div>
        )}

        {!query && (
          <div className="search-hint">
            Qidirish uchun yozing &nbsp;·&nbsp; <kbd>↑</kbd><kbd>↓</kbd> tanlash &nbsp;·&nbsp; <kbd>Enter</kbd> o'tish &nbsp;·&nbsp; <kbd>Esc</kbd> yopish
          </div>
        )}

      </div>
    </div>
  );
}
