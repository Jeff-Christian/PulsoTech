import React from 'react';
import pulsoLogo from '../../assets/Pulso_logo.png';
import './Header.css';

export const Header = ({ activeTab, onNavigate }) => {
  return (
    <header className="gallery-header">
      {/* Clique no Logo -> Abre a página Inicial (Cards) */}
      <div 
        className="gallery-brand cursor-pointer" 
        onClick={() => onNavigate('inicial')}
        title="Página Inicial - Pulso"
      >
        <img src={pulsoLogo} alt="Pulso Studio" className="brand-logo-img" />
      </div>

      {/* Navegação Superior */}
      <nav className="gallery-nav">
        <button 
          onClick={() => onNavigate('abordagem')} 
          className={`nav-link ${activeTab === 'abordagem' ? 'active' : ''}`}
        >
          Abordagem
        </button>
        <button 
          onClick={() => onNavigate('trabalhos')} 
          className={`nav-link ${activeTab === 'trabalhos' ? 'active' : ''}`}
        >
          Trabalhos
        </button>
      </nav>
    </header>
  );
};