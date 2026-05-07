import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Actual window load event
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 800); // Small buffer for smooth exit
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
            scale: 1.1,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
        >
          <div className="preloader-content">
            <motion.div 
              className="preloader-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img src="/Konservatoriya_logo_white-05.png" alt="Logo" />
            </motion.div>

            <motion.div 
              className="preloader-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="preloader-eyebrow">EST. 1936</div>
              <h1>OʻZBEKISTON DAVLAT <span>KONSERVATORIYASI</span></h1>
            </motion.div>

            <div className="preloader-loader-wrap">
              <div className="preloader-bar-bg">
                <motion.div 
                  className="preloader-bar-fill" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="preloader-status">
                <span>Loading Harmony</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            <div className="preloader-musical-notes">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="note"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  ♪
                </motion.div>
              ))}
            </div>
          </div>

          <div className="preloader-curtain left" />
          <div className="preloader-curtain right" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
