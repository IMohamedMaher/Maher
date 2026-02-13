
import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-medical-light-blue text-right">
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
