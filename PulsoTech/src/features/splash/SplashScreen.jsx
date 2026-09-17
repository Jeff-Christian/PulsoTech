import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const MANIFESTO_PHRASES = [
  {
    id: 1,
    text: "Tecnologia não é apenas código. É o ritmo que move ideias.",
    alignClass: "splash-phrase-top-left",
    delay: 0.2
  },
  {
    id: 2,
    text: "Desafiando limites para redefinir o impacto visual.",
    alignClass: "splash-phrase-top-right",
    delay: 1.1
  },
  {
    id: 3,
    text: "Somos a Pulso. Estúdio de Tecnologia Criativa.",
    alignClass: "splash-phrase-bottom-left",
    delay: 2.0
  },
  {
    id: 4,
    text: "Conectando o código à essência humana.",
    alignClass: "splash-phrase-bottom-right",
    delay: 2.9
  }
];

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSkip();
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={handleSkip}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -30, 
            scale: 0.98,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="splash-container"
        >
          {/* Accent Line da Pulso Wave */}
          <div className="splash-accent-line" />

          {/* Grid de Frases Assimétricas */}
          <div className="splash-content-wrapper">
            {MANIFESTO_PHRASES.map((item) => (
              <motion.h2
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: item.delay,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`splash-phrase ${item.alignClass}`}
              >
                {item.text}
              </motion.h2>
            ))}
          </div>

          {/* Botão TAP TO SKIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="splash-skip-indicator"
          >
            <span className="splash-skip-dot" />
            TAP TO SKIP
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};