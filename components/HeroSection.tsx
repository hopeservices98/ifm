import React, { useState, useEffect } from 'react';
import Button from './Button';

const scrollToAgenda = () => {
  const agendaSection = document.getElementById('agenda');
  if (agendaSection) {
    agendaSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const backgroundImages = [
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1920&auto=format&fit=crop"
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out"
        style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-nuit/80 via-blue-nuit/60 to-blue-nuit/80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop&blend=0D1B2A&blend-mode=multiply&sat=-100')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop&blend=0D1B2A&blend-mode=multiply&sat=-100')] bg-cover bg-center opacity-10" style={{backgroundImage: `url('${backgroundImages[(currentImageIndex + 1) % backgroundImages.length]}')`}}></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight opacity-0 animate-fade-in-up" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)', animationDelay: '0.2s'}}>
          Institut Français de Madagascar
        </h1>
        <p className="font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)', animationDelay: '0.4s'}}>
          Cultivons la culture, partageons les idées.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button onClick={scrollToAgenda}>Découvrir la programmation</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;