import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/ui/Header';
import './WorksGallery.css';

// Importação das imagens dos trabalhos
import work1 from '../../assets/works/CONCEITOSCONTABILIDADE.jpg';
import work2 from '../../assets/works/DANIELAGUEDESLIVE.jpg';
import work3 from '../../assets/works/ENERGIX.jpg';
import work4 from '../../assets/works/JBMORAESREFRIGERAÇÃO.jpg';
import work5 from '../../assets/works/LOJAOSAOJORGE.jpg';
import work6 from '../../assets/works/LUXPRODUÇÕES.jpg';
import work7 from '../../assets/works/MATHEUSINFORMATICA.jpg';
import work8 from '../../assets/works/MAXTATTO.jpg';
import work9 from '../../assets/works/NEWETONENGENHARIA.jpg';
import work10 from '../../assets/works/PANELADEBARRO.png';
import work11 from '../../assets/works/POTIGUARMOTOS.jpg';
import work12 from '../../assets/works/soundmr.jpg';
import work13 from '../../assets/works/TIGERPROMOCAODEVENDAS.jpg';
import work14 from '../../assets/works/BYOTEC.jpg';
import work15 from '../../assets/works/ARGOLONUTRI.jpg';
import work16 from '../../assets/works/VISAONEWS.jpg';
import work17 from '../../assets/works/L3HAMBURGUERIA.jpg';

// Array de Projetos com Títulos Reais
const BASE_PROJECTS = [
  { title: "Conceitos Contabilidade", category: "Branding & Interface Web", image: work1 },
  { title: "Daniela Guedes Live", category: "Identidade Visual & Mídia", image: work2 },
  { title: "Energix", category: "Design de Marca & Performance", image: work3 },
  { title: "JB Moraes Refrigeração", category: "Interface HMI & Web", image: work4 },
  { title: "Lojas São Jorge", category: "E-Commerce & Branding", image: work5 },
  { title: "Lux Produções", category: "Experiência Digital 3D", image: work6 },
  { title: "Matheus Informática", category: "Redesign & Identidade", image: work7 },
  { title: "Max Tattoo", category: "Branding & Mídia Digital", image: work8 },
  { title: "Newton Engenharia", category: "Plataforma Corporativa B2B", image: work9 },
  { title: "Panela de Barro", category: "Design de Marca & Gastronomia", image: work10 },
  { title: "Potiguar Motos", category: "Interface & E-Commerce", image: work11 },
  { title: "Sound MR", category: "Identidade Sonora & Web", image: work12 },
  { title: "Tiger Promoção de Vendas", category: "Campanha & Branding", image: work13 },
  { title: "ByoTec", category: "Design de Produto & Tecnologia", image: work14 },
  { title: "Argolo Nutri", category: "Branding & Alimentação", image: work15 },
  { title: "VISA One News", category: "Identidade Visual & Mídia", image: work16 },
  { title: "L3 Hambúrgueria", category: "Branding & Experiência do Cliente", image: work17 }
];

// Gera 20 itens no total utilizando os 13 projetos de base
export const ALL_WORKS = Array.from({ length: 17 }, (_, i) => {
  const base = BASE_PROJECTS[i % BASE_PROJECTS.length];
  return {
    id: `work-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: base.title,
    category: base.category,
    year: "2026",
    image: base.image
  };
});

export const WorksGallery = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCooldown = useRef(false);

  // Manipulador de Scroll do Mouse (Wheel)
  const handleWheel = (e) => {
    if (isCooldown.current) return;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev < ALL_WORKS.length - 1 ? prev + 1 : 0));
    } else if (e.deltaY < 0) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : ALL_WORKS.length - 1));
    }

    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 320);
  };

  const currentWork = ALL_WORKS[currentIndex];

  return (
    <div className="works-interactive-container" onWheel={handleWheel}>
      <Header activeTab="trabalhos" onNavigate={onNavigate} />

      {/* PALCO CENTRAL DE ANIMAÇÃO DO SCROLL */}
      <main className="works-scroll-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWork.id}
            initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -40, rotateX: -10 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="interactive-work-card"
          >
            <div className="card-media-wrapper">
              <img 
                src={currentWork.image} 
                alt={currentWork.title} 
                onError={(e) => {
                  console.error(`Erro ao carregar imagem do projeto: ${currentWork.title}`);
                }}
              />
              <div className="card-badge">{currentWork.number} / 20</div>
            </div>

            <div className="card-details">
              <div>
                <span className="card-category">{currentWork.category}</span>
                <h2 className="card-title">{currentWork.title}</h2>
              </div>
              <span className="card-year">{currentWork.year}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* RODAPÉ DE NAVEGAÇÃO / CONTROLE */}
      <footer className="works-scroll-footer">
        <div className="scroll-indicator-hint">
          <span className="scroll-mouse-icon" />
          <span>ROLE O MOUSE PARA NAVEGAR NOS PROJETOS</span>
        </div>

        {/* Mini Seletor por Grupos / Blocos */}
        <div className="works-quick-selector">
          {ALL_WORKS.slice(0, 5).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * 4)}
              className={`quick-step-btn ${Math.floor(currentIndex / 4) === idx ? 'active' : ''}`}
            >
              {`0${idx * 4 + 1} - 0${Math.min((idx + 1) * 4, 20)}`}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};