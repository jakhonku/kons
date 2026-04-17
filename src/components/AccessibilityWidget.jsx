import { useState, useEffect } from 'react';
import { Accessibility, X, Type, Sun, Eye, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';

const COLORBLIND_MODES = [
  { id: 'none',         label: 'Oddiy ko\'rinish' },
  { id: 'deuteranopia', label: 'Yashil-qizil (D)' },
  { id: 'protanopia',   label: 'Qizil-yashil (P)' },
  { id: 'tritanopia',   label: 'Ko\'k-sariq (T)' },
  { id: 'grayscale',    label: 'Kulrang rejim' },
];

const CONTRAST_MODES = [
  { id: 'normal', label: 'Oddiy' },
  { id: 'high',   label: 'Yuqori kontrast' },
  { id: 'dark',   label: 'Qoʻyuq qora' },
];

const DEFAULT = { fontSize: 0, contrast: 'normal', colorblind: 'none' };

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT);

  // Load saved settings on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('a11y') || '{}');
      if (saved && Object.keys(saved).length) {
        setSettings({ ...DEFAULT, ...saved });
      }
    } catch {}
  }, []);

  // Apply settings to <html> element
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-a11y-font', settings.fontSize);
    html.setAttribute('data-a11y-contrast', settings.contrast);
    html.setAttribute('data-a11y-colorblind', settings.colorblind);
    localStorage.setItem('a11y', JSON.stringify(settings));
  }, [settings]);

  const set = (key, val) => setSettings(prev => ({ ...prev, [key]: val }));
  const reset = () => setSettings(DEFAULT);

  const isDefault = settings.fontSize === 0 && settings.contrast === 'normal' && settings.colorblind === 'none';

  return (
    <>
      {/* SVG colorblind filters — hidden, just needs to be in DOM */}
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="cb-deuteranopia">
            <feColorMatrix type="matrix" values="0.367 0.861 -0.228 0 0  0.280 0.673 0.047 0 0  -0.012 0.043 0.969 0 0  0 0 0 1 0" />
          </filter>
          <filter id="cb-protanopia">
            <feColorMatrix type="matrix" values="0.152 1.053 -0.205 0 0  0.115 0.786 0.099 0 0  -0.004 -0.048 1.052 0 0  0 0 0 1 0" />
          </filter>
          <filter id="cb-tritanopia">
            <feColorMatrix type="matrix" values="1.256 -0.077 -0.179 0 0  -0.078 0.931 0.148 0 0  0.005 0.691 0.304 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      {/* Utility bar trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        className={`a11y-trigger${open ? ' active' : ''}${!isDefault ? ' a11y-trigger--on' : ''}`}
        aria-label="Maxsus imkoniyatlar"
        title="Maxsus imkoniyatlar"
      >
        <Accessibility size={14} strokeWidth={1.8} />
        <span>Imkoniyatlar</span>
        {!isDefault && <span className="a11y-trigger-dot" aria-hidden="true" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="a11y-panel" role="dialog" aria-label="Maxsus imkoniyatlar panel">

          <div className="a11y-panel-header">
            <Accessibility size={15} strokeWidth={2} />
            <span>Maxsus imkoniyatlar</span>
            <button className="a11y-close" onClick={() => setOpen(false)} aria-label="Yopish">
              <X size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Font size */}
          <div className="a11y-section">
            <div className="a11y-section-label">
              <Type size={13} strokeWidth={2} /> Matn hajmi
            </div>
            <div className="a11y-font-row">
              <button
                className="a11y-icon-btn"
                onClick={() => set('fontSize', Math.max(-1, settings.fontSize - 1))}
                disabled={settings.fontSize <= -1}
                aria-label="Kichikroq"
              >
                <ChevronDown size={14} strokeWidth={2.5} />
              </button>
              <div className="a11y-font-preview">
                {settings.fontSize === -1 && 'Kichik'}
                {settings.fontSize === 0  && 'Oddiy'}
                {settings.fontSize === 1  && 'Katta'}
                {settings.fontSize === 2  && 'Juda katta'}
              </div>
              <button
                className="a11y-icon-btn"
                onClick={() => set('fontSize', Math.min(2, settings.fontSize + 1))}
                disabled={settings.fontSize >= 2}
                aria-label="Kattaroq"
              >
                <ChevronUp size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Contrast */}
          <div className="a11y-section">
            <div className="a11y-section-label">
              <Sun size={13} strokeWidth={2} /> Kontrast
            </div>
            <div className="a11y-btn-group">
              {CONTRAST_MODES.map(m => (
                <button
                  key={m.id}
                  className={`a11y-chip${settings.contrast === m.id ? ' active' : ''}`}
                  onClick={() => set('contrast', m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Colorblind */}
          <div className="a11y-section">
            <div className="a11y-section-label">
              <Eye size={13} strokeWidth={2} /> Daltonizm filtri
            </div>
            <div className="a11y-btn-group">
              {COLORBLIND_MODES.map(m => (
                <button
                  key={m.id}
                  className={`a11y-chip${settings.colorblind === m.id ? ' active' : ''}`}
                  onClick={() => set('colorblind', m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          {!isDefault && (
            <button className="a11y-reset" onClick={reset}>
              <RotateCcw size={12} strokeWidth={2} /> Standartga qaytarish
            </button>
          )}

        </div>
      )}
    </>
  );
}
