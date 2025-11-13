
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SearchProvider } from './components/SearchContext';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import MediathequeSection from './components/MediathequeSection';
import CampusFranceSection from './components/CampusFranceSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Institut Français de Madagascar - Cultivons la culture, partageons les idées</title>
        <meta name="description" content="Découvrez l'Institut Français de Madagascar : événements culturels, médiathèque, Campus France. Un espace de dialogue entre cultures française et malgache à Antananarivo." />
        <meta name="keywords" content="Institut Français Madagascar, culture française, événements culturels, médiathèque, Campus France, études en France, Antananarivo, Madagascar, échanges culturels" />
        <meta name="author" content="Institut Français de Madagascar" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="geo.region" content="MG" />
        <meta name="geo.placename" content="Antananarivo" />
        <meta name="geo.position" content="-18.8792;47.5079" />
        <meta name="ICBM" content="-18.8792, 47.5079" />
        <meta property="og:title" content="Institut Français de Madagascar - Cultivons la culture, partageons les idées" />
        <meta property="og:description" content="Événements culturels, médiathèque et accompagnement éducatif. Découvrez nos services à Antananarivo, Madagascar." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://ifmadagascar.org" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Institut Français de Madagascar" />
        <meta name="twitter:description" content="Événements culturels, médiathèque et Campus France à Madagascar." />
        <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
        <link rel="canonical" content="https://ifmadagascar.org" />
        <html lang="fr" />
      </Helmet>
      <ThemeProvider>
        <SearchProvider>
          <div className="bg-white dark:bg-gray-900 font-inter text-blue-nuit dark:text-white transition-colors duration-300">
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <TestimonialsSection />
              <EventsSection />
              <MediathequeSection />
              <CampusFranceSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
