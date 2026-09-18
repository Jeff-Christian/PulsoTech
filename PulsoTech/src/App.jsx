import { useState } from 'react';
import { SplashScreen } from './features/splash/SplashScreen';
import { PortfolioGallery } from './features/gallery/PortfolioGallery';
import { ApproachSection } from './features/approach/ApproachSection';
import { WorksGallery } from './features/works/WorksGallery';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('inicial');

  return (
    <main className="bg-[#0A0F1D] min-h-screen text-white overflow-x-hidden">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : activeTab === 'inicial' ? (
        /* Página Inicial -> Os Cards Flutuantes */
        <PortfolioGallery onNavigate={(tab) => setActiveTab(tab)} />
      ) : activeTab === 'abordagem' ? (
        /* Página Abordagem -> Manifesto / Processos */
        <ApproachSection onNavigate={(tab) => setActiveTab(tab)} />
      ) : (
        /* Página Trabalhos -> Galeria Expandida / Índice */
        <WorksGallery onNavigate={(tab) => setActiveTab(tab)} />
      )}
    </main>
  );

}