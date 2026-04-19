import { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS_UZ = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr',
];
const WEEKDAYS = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; // Monday = 0
}

export default function DatePicker({ value, onChange, placeholder = 'Sanani tanlang' }) {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const ref = useRef(null);

  // Parse value or use today for calendar view
  const selected = value ? new Date(value + 'T00:00:00') : null;
  const [viewYear, setViewYear] = useState(selected?.getFullYear() || today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth());

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const selectDay = (day) => {
    const m = String(viewMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    onChange(`${viewYear}-${m}-${d}`);
    setIsOpen(false);
  };

  const clearDate = () => {
    onChange('');
    setIsOpen(false);
  };

  const goToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    selectDay(today.getDate());
  };

  const isToday = (day) =>
    day === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear();

  const isSelected = (day) =>
    selected &&
    day === selected.getDate() &&
    viewMonth === selected.getMonth() &&
    viewYear === selected.getFullYear();

  // Format display value
  const displayValue = selected
    ? `${String(selected.getDate()).padStart(2, '0')}.${String(selected.getMonth() + 1).padStart(2, '0')}.${selected.getFullYear()}`
    : '';

  // Build calendar grid cells
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger Input */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${isOpen ? 'var(--gold)' : 'var(--border-gold)'}`,
          borderRadius: '4px',
          padding: '12px 14px',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          boxShadow: isOpen ? '0 0 0 3px rgba(201,168,76,0.12)' : 'none',
        }}
      >
        <Calendar size={18} style={{ color: 'var(--gold)', flexShrink: 0, opacity: 0.8 }} />
        <span style={{
          flex: 1,
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          color: displayValue ? 'white' : 'rgba(255,255,255,0.35)',
          fontStyle: 'normal',
        }}>
          {displayValue || placeholder}
        </span>
        {displayValue && (
          <span
            onClick={(e) => { e.stopPropagation(); clearDate(); }}
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '1rem',
              cursor: 'pointer',
              lineHeight: 1,
              transition: '0.2s',
              fontStyle: 'normal',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            ✕
          </span>
        )}
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          width: '320px',
          background: '#0e0e24',
          border: '1px solid var(--border-gold)',
          borderRadius: '6px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1)',
          zIndex: 9999,
          overflow: 'hidden',
          animation: 'calendarFadeIn 0.2s ease-out',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 18px',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.04)',
          }}>
            <button onClick={prevMonth} style={navBtnStyle}>
              <ChevronLeft size={16} />
            </button>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: 'var(--gold-light)',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}>
              {MONTHS_UZ[viewMonth]} {viewYear}
            </span>
            <button onClick={nextMonth} style={navBtnStyle}>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Weekday headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            padding: '12px 14px 6px',
          }}>
            {WEEKDAYS.map((wd) => (
              <div key={wd} style={{
                textAlign: 'center',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontFamily: 'var(--font-sans)',
                padding: '4px 0',
                fontStyle: 'normal',
              }}>
                {wd}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            padding: '4px 14px 14px',
            gap: '2px',
          }}>
            {cells.map((day, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                {day ? (
                  <button
                    onClick={() => selectDay(day)}
                    style={{
                      width: '38px',
                      height: '38px',
                      border: isToday(day) ? '1px solid var(--gold)' : '1px solid transparent',
                      borderRadius: '50%',
                      background: isSelected(day)
                        ? 'var(--gold)'
                        : isToday(day)
                          ? 'rgba(201,168,76,0.1)'
                          : 'transparent',
                      color: isSelected(day)
                        ? 'var(--bg-deep)'
                        : isToday(day)
                          ? 'var(--gold-light)'
                          : 'rgba(240,237,232,0.7)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: isSelected(day) || isToday(day) ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontStyle: 'normal',
                    }}
                    onMouseOver={(e) => {
                      if (!isSelected(day)) {
                        e.currentTarget.style.background = 'rgba(201,168,76,0.15)';
                        e.currentTarget.style.color = 'var(--gold-light)';
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isSelected(day)) {
                        e.currentTarget.style.background = isToday(day) ? 'rgba(201,168,76,0.1)' : 'transparent';
                        e.currentTarget.style.color = isToday(day) ? 'var(--gold-light)' : 'rgba(240,237,232,0.7)';
                        e.currentTarget.style.borderColor = isToday(day) ? 'var(--gold)' : 'transparent';
                      }
                    }}
                  >
                    {day}
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 18px',
            borderTop: '1px solid rgba(201,168,76,0.12)',
            background: 'rgba(0,0,0,0.2)',
          }}>
            <button onClick={clearDate} style={footerBtnStyle}>
              Tozalash
            </button>
            <button onClick={goToday} style={{ ...footerBtnStyle, color: 'var(--gold-light)' }}>
              Bugun
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const navBtnStyle = {
  background: 'none',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: '4px',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'var(--gold-light)',
  transition: '0.25s',
};

const footerBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'rgba(255,255,255,0.45)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: '0.25s',
  padding: '4px 8px',
};
