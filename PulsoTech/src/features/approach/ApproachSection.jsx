import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/ui/Header';
import './ApproachSection.css';

// Importação das imagens
import prototipagem from '../../assets/Prototipagem_Interface.jpg';
import arquitetura from '../../assets/Arquitetura_Codigo.jpg';
import design from '../../assets/Design.jpg';
import interfaces from '../../assets/Interfaces.jpg';
import Conceito from '../../assets/Conceito.jpg';
import Branding from '../../assets/Branding.jpg';
import emblem from '../../assets/Pulso_emblem.png'; // Ícone do logo


// Mídias para o slider interativo controlado pelo scroll/hover
const SLIDE_IMAGES = [
  {
    id: 1,
    url: interfaces,
    title: "Interfaces Vivas & Fluidez"
  },
  {
    id: 2,
    url: Conceito,
    title: "Conceito & Ideia"
  },
  {
    id: 3,
    url: Branding,
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
          Sua marca não precisa de mais do mesmo. Precisa de execução de alto nível.
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
            Eliminamos o excesso e focamos no que realmente importa: tecnologia limpa, visual marcante e uma experiência que prende a atenção do seu cliente.
            </motion.h2>

            <div className="approach-production-grid">
            <div className="production-card">
                <img 
                src={prototipagem} 
                alt="Produção de UI/UX" 
                />
                <span className="production-caption">01 / Prototipagem & Interface</span>
            </div>
            <div className="production-card">
                <img 
                src={arquitetura}
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
                src={design} 
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
            "A estrutura tá pronta. Qual projeto vamos tirar do papel hoje?"
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
            <img src={emblem} className='footer-svg-icon' alt="Emblema da Pulso" />
            </div>
        </footer>
        </section>
      </div>

    </section>
  );
};