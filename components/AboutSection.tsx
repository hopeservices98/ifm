import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-beige-clair dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit dark:text-white">
            À propos de l'IFM
          </h2>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h3 className="text-2xl font-poppins font-bold text-blue-nuit dark:text-white mb-4">Notre Mission</h3>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                L'Institut Français de Madagascar est une institution culturelle française dédiée à la promotion des échanges culturels et éducatifs entre la France et Madagascar. Notre devise : "Cultivons la culture, partageons les idées".
              </p>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Nous agissons comme un espace de dialogue interculturel, offrant des services éducatifs et culturels pour renforcer les liens entre les communautés française et malgache.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={200}>
              <h3 className="text-2xl font-poppins font-bold text-blue-nuit mb-4">Nos Services</h3>
              <ul className="font-inter text-lg text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-vif mr-3">•</span>
                  <span><strong>Événements culturels</strong> : Expositions, cinéma, concerts et manifestations artistiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-vif mr-3">•</span>
                  <span><strong>Médiathèque</strong> : Bibliothèque avec des milliers de documents pour tous les âges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-vif mr-3">•</span>
                  <span><strong>Campus France</strong> : Accompagnement pour les études en France et mobilité internationale</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;