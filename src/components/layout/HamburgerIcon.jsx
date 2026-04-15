export default function HamburgerIcon({ isOpen, onClick }) {
  return (
    <button
      className={`hamburger${isOpen ? ' open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
      aria-expanded={isOpen}
    >
      <span className="ham-line line-1" />
      <span className="ham-line line-2" />
      <span className="ham-line line-3" />
    </button>
  );
}
