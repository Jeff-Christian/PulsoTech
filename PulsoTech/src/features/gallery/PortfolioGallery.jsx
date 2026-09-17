import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortfolioGallery.css';

//IMAGENS
import pulsoLogo from '../../assets/Pulso_logo.png';

const PROJECTS = [
  {
    id: "01",
    title: "EcoPulse Tech",
    category: "Design de Marca & Experiência Digital",
    description: "Plataforma interativa desenvolvida para monitoramento ambiental em tempo real, combinando dados complexos com uma interface fluida e humana.",
    images: [
      { 
        id: 1, 
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", 
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", 
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", 
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
        url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop", 
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop", 
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", 
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
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", 
        sizeClass: "card-main",
        initialPos: { x: -30, y: 0, rotate: -2, zIndex: 3 }
      },
      { 
        id: 2, 
        url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop", 
        sizeClass: "card-secondary-1",
        initialPos: { x: 180, y: -60, rotate: 4, zIndex: 2 }
      },
      { 
        id: 3, 
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop", 
        sizeClass: "card-secondary-2",
        initialPos: { x: -220, y: 80, rotate: -6, zIndex: 1 }
      }
    ]
  }
];

export const PortfolioGallery = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = PROJECTS[activeProjectIndex];

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <div className="gallery-brand">
            <img src={pulsoLogo} alt="Pulso" className="brand-logo-img" />
        </div>
        <nav className="gallery-nav">
          <button className="nav-link">Abordagem</button>
          <button className="nav-link active">Trabalhos</button>
        </nav>
      </header>

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