import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#030305',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Logo with subtle breathing animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ marginBottom: '40px' }}
          >
            <img 
              src="/Konservatoriya_logo_white-05.png" 
              alt="O'zbekiston Davlat Konservatoriyasi" 
              style={{
                height: '70px',
                width: 'auto',
                opacity: 0.9,
                filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.05))'
              }}
            />
          </motion.div>

          {/* Minimalist Progress Line */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}>
              <motion.div 
                style={{ 
                  width: `${progress}%`,
                  height: '100%',
                  background: 'var(--gold, #C9A84C)'
                }}
              />
            </div>
            <motion.div 
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '0.6rem',
                letterSpacing: '4px',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase'
              }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
