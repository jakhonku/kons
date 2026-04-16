import { motion } from 'framer-motion';

export default function HamburgerIcon({ isOpen, onClick }) {
  return (
    <button
      className="hamburger"
      onClick={onClick}
      aria-label={isOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
      aria-expanded={isOpen}
    >
      <svg
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round"
        style={{ overflow: 'visible' }}
      >
        {/* Yuqori chiziq */}
        <motion.line
          x1="3" y1="6" x2="21" y2="6"
          animate={isOpen
            ? { x1: 4, y1: 4, x2: 20, y2: 20 }
            : { x1: 3, y1: 6, x2: 21, y2: 6 }
          }
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* O'rta chiziq */}
        <motion.line
          x1="3" y1="12" x2="21" y2="12"
          animate={isOpen
            ? { opacity: 0, x1: 12, x2: 12 }
            : { opacity: 1, x1: 3, x2: 21 }
          }
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Pastki chiziq */}
        <motion.line
          x1="3" y1="18" x2="21" y2="18"
          animate={isOpen
            ? { x1: 4, y1: 20, x2: 20, y2: 4 }
            : { x1: 3, y1: 18, x2: 21, y2: 18 }
          }
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </svg>
    </button>
  );
}
