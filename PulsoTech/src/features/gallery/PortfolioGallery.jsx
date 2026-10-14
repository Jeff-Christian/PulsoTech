import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/ui/Header';
import './PortfolioGallery.css';

//IMAGENS
import pulsoLogo from '../../assets/Pulso_logo.png';
import colorful from '../../assets/colorful.jpg';
import device_concept from '../../assets/device_concept.jpg';
import digital from '../../assets/digital.jpg';
import Iluminação from '../../assets/Iluminação.jpg';
import Pulso from '../../assets/Pulso.jpg';
import Ciano_Neon from '../../assets/Ciano_Neon.jpg';
import Shades_Waves from '../../assets/Shades_Waves.jpg';
import Sound_Wave from '../../assets/Sound_Wave.jpg';
import Futuristic from '../../assets/Futuristic.jpg';

const PROJECTS = [
  {
    id: "01",
    title: "EcoPulse Tech",
    category: "Design de Marca & Experiência Digital",
    description: "Plataforma interativa desenvolvida para monitoramento ambiental em tempo real, combinando dados complexos com uma interface fluida e humana.",
    images: [
      { 
        id: 1, 
        url: colorful,
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: device_concept,
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: digital,
        sizeClass: "card-secondary-2",
        initialPos: { x: -220, y: 80, rotate: -6, zIndex: 1 }
      }
    ]
  },
  {
    id: "02",
    title: "Lumina Studio",
    category: "Arte Generativa & Front-end 3D",
    description: "Instalação imersiva e site interativo para estúdio de iluminação arquitetônica com navegação baseada em WebGL e física de partículas.",
    images: [
      { 
        id: 1, 
        url: Iluminação,
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: Pulso,
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: Ciano_Neon,
        sizeClass: "card-secondary-2",
        initialPos: { x: -220, y: 80, rotate: -6, zIndex: 1 }
      }
    ]
  },
  {
    id: "03",
    title: "Aura Robotics",
    category: "Interface HMI & Rebranding",
    description: "Redesign completo da identidade e dashboard de controle humano-máquina para robótica assistida de alta precisão.",
    images: [
      { 
        id: 1, 
        url: Shades_Waves, 
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: Sound_Wave, 
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: Futuristic, 
        sizeClass: "card-secondary-2",
        initialPos: { x: -220, y: 80, rotate: -6, zIndex: 1 }
      }
    ]
  }
];

export const PortfolioGallery = ({ onNavigate }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = PROJECTS[activeProjectIndex];

  return (
    <div className="gallery-container">
      <Header activeTab="inicial" onNavigate={onNavigate} />

      <main className="gallery-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="cards-grid-wrapper"
          >
            {currentProject.images.map((img) => (
              <motion.div
                key={img.id}
                initial={{ 
                  x: img.initialPos.x, 
                  y: img.initialPos.y, 
                  rotate: img.initialPos.rotate,
                  scale: 0.9,
                  opacity: 0 
                }}
                animate={{ 
                  x: img.initialPos.x, 
                  y: img.initialPos.y, 
                  rotate: img.initialPos.rotate,
                  scale: 1,
                  opacity: 1 
                }}
                whileHover={{ 
                  scale: 1.06, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { type: "spring", stiffness: 350, damping: 25 }
                }}
                style={{ zIndex: img.initialPos.zIndex }}
                className={`portfolio-card ${img.sizeClass}`}
              >
                <img src={img.url} alt={currentProject.title} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="gallery-footer">
        <div className="numbers-selector">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`number-btn ${idx === activeProjectIndex ? 'active' : ''}`}
            >
              <span>{proj.id}</span>
              {idx === activeProjectIndex && (
                <motion.div layoutId="activeUnderline" className="number-underline" />
              )}
            </button>
          ))}
        </div>

        <div className="project-info-block">
          <span className="project-category">{currentProject.category}</span>
          <p className="project-description">{currentProject.description}</p>
        </div>
      </footer>
    </div>
  );
};