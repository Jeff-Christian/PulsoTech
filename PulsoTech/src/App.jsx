import { useState } from 'react';
import { SplashScreen } from './features/splash/SplashScreen';
import { PortfolioGallery } from './features/gallery/PortfolioGallery';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="bg-[#0A0F1D] min-h-screen text-white overflow-hidden">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <PortfolioGallery />
      )}
    </main>
  );
}