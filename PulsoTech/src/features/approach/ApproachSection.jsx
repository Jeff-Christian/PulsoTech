import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/ui/Header';
import './ApproachSection.css';

// Mídias para o slider interativo controlado pelo scroll/hover
const SLIDE_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    title: "Sistemas & Interfaces HMI"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    title: "Experiências Imersivas 3D"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    title: "Branding & Identidade Fluida"
  }
];

export const ApproachSection = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Troca de imagem ao usar o Scroll do Mouse sobre a área de mídias
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // Scroll para baixo
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    } else {
      // Scroll para cima
      setCurrentSlide((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
    }
  };

  return (
    
    <section className="approach-container">
      {/* Header Reutilizável com a logo clicável */}
      <Header activeTab="abordagem" onNavigate={onNavigate} />

      {/* 1. INTRO */}
      <div className="approach-intro">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="approach-title"
        >
          Criamos soluções onde o código encontra a expressão humana. Sem fórmulas prontas, apenas execução de alto impacto.
        </motion.h2>


        <section className="approach-container">
        {/* 1. INTRO: Texto grande com imagens de produção abaixo */}
        <div className="approach-intro">
            <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="approach-title"
            >
            Criamos soluções onde o código encontra a expressão humana. Sem fórmulas prontas, apenas execução de alto impacto.
            </motion.h2>

            <div className="approach-production-grid">
            <div className="production-card">
                <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop" 
                alt="Produção de UI/UX" 
                />
                <span className="production-caption">01 / Prototipagem & Interface</span>
            </div>
            <div className="production-card">
                <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" 
                alt="Desenvolvimento de Código" 
                />
                <span className="production-caption">02 / Arquitetura & Código</span>
            </div>
            </div>
        </div>

        {/* 2. IDEA: Imagem da criação de branding/landing com legenda marcante */}
        <div className="approach-idea">
            <div className="idea-image-wrapper">
            <img 
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop" 
                alt="Criação de Branding e Landing" 
            />
            <div className="idea-overlay-badge">
                <p className="idea-quote">
                "Design não é apenas o que parece. É o ritmo contínuo como a tecnologia funciona."
                </p>
            </div>
            </div>
        </div>

        {/* 3. PROCESS: Texto em Flex dividido em Conteúdo e Descrição */}
        <div className="approach-process">
            <div className="process-header">
            <span className="process-tag">METODOLOGIA DE ENTREGA</span>
            <h3 className="process-main-heading">Nosso Processo de Construção</h3>
            </div>

            <div className="process-flex">
            <div className="process-item">
                <span className="process-number">01</span>
                <div className="process-content">
                <h4>Imersão & Diagnóstico</h4>
                <p>Analisamos a essência da marca e os objetivos do negócio para traçar a arquitetura visual e técnica mais eficiente.</p>
                </div>
            </div>

            <div className="process-item">
                <span className="process-number">02</span>
                <div className="process-content">
                <h4>Design & Prototipagem Fluida</h4>
                <p>Construímos interfaces vivas com foco em microinterações, direção de arte contemporânea e máxima usabilidade.</p>
                </div>
            </div>

            <div className="process-item">
                <span className="process-number">03</span>
                <div className="process-content">
                <h4>Engenharia & Performance</h4>
                <p>Desenvolvimento em React + Vite garantindo taxas de quadros fluidas (60FPS), tempos de carregamento instantâneos e código limpo.</p>
                </div>
            </div>
            </div>
        </div>

        {/* 4. IMAGES: Slide interativo em container absoluto trocado via Scroll */}
        <div className="approach-images-slider" onWheel={handleWheel} ref={sliderRef}>
            <div className="slider-container-box">
            <AnimatePresence mode="wait">
                <motion.div 
                key={SLIDE_IMAGES[currentSlide].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="custom-image-wrapper"
                >
                <img 
                    src={SLIDE_IMAGES[currentSlide].url} 
                    alt={SLIDE_IMAGES[currentSlide].title}
                    className="custom_image__img"
                />
                </motion.div>
            </AnimatePresence>

            <div className="slider-controls-info">
                <span className="slider-counter">0{currentSlide + 1} / 0{SLIDE_IMAGES.length}</span>
                <p className="slider-title">{SLIDE_IMAGES[currentSlide].title}</p>
                <span className="slider-hint">Use o scroll do mouse sobre a imagem</span>
            </div>
            </div>
        </div>

        {/* 5. CC: Frase de Impacto */}
        <div className="approach-impact-quote">
            <h3 className="impact-text">
            "The series is done. Your version of it isn't."
            </h3>
        </div>

        {/* 6. FOOTER: Links sociais, créditos e SVG do Ícone Wave */}
        <footer className="approach-footer">
            <div className="footer-top">
            <div className="footer-socials">
                <a href="#instagram" className="social-link">Instagram</a>
                <a href="#linkedin" className="social-link">LinkedIn</a>
                <a href="#github" className="social-link">GitHub</a>
            </div>
            <div className="footer-credits">
                <span>Designed & Developed By</span>
                <strong>Pulso Studio</strong>
            </div>
            </div>

            {/* Logo Icon SVG em destaque */}
            <div className="footer-logo-wrapper">
            <svg className="footer-svg-icon" viewBox="0 0 512 512" fill="none">
                <path d="M 125 235 A 132 132 0 1 1 387 235" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                <path d="M 387 277 A 132 132 0 0 1 125 277" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
                <path d="M 82 256 C 125 256, 140 256, 160 270 C 180 284, 190 298, 205 256 C 220 214, 235 152, 256 210 C 275 262, 290 310, 312 235 C 330 175, 345 220, 360 256 C 375 292, 385 256, 430 256" stroke="#00F5D4" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div>
        </footer>
        </section>
      </div>

    </section>
  );
};