import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/ui/Header';
import './WorksGallery.css';

// Lista extensa de trabalhos/cases do estúdio
const ALL_WORKS = [
  {
    id: 1,
    title: "EcoPulse Tech",
    category: "Design de Marca & Experiência Digital",
    year: "2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Lumina Studio",
    category: "Arte Generativa & Front-end 3D",
    year: "2026",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Aura Robotics",
    category: "Interface HMI & Rebranding",
    year: "2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Vance & Partners",
    category: "Plataforma Corporativa B2B",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Café Origens",
    category: "E-Commerce Interativo & Identity",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Clínica Lumina",
    category: "Web App & Agendamento HMI",
    year: "2025",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  }
];

export const WorksGallery = ({ onNavigate }) => {
  return (
    <div className="works-container">
      {/* Header unificado indicando que a aba 'trabalhos' está ativa */}
      <Header activeTab="trabalhos" onNavigate={onNavigate} />

      <main className="works-main">
        <div className="works-header-title">
          <span className="works-tag">// ÍNDICE DE PROJETOS</span>
          <h1 className="works-headline">Trabalhos Selecionados</h1>
        </div>

        {/* Grid de Projetos Expandido */}
        <div className="works-grid">
          {ALL_WORKS.map((work) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="work-card"
            >
              <div className="work-image-box">
                <img src={work.image} alt={work.title} loading="lazy" />
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">{work.title}</h3>
                  <span className="work-category">{work.category}</span>
                </div>
                <span className="work-year">{work.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};