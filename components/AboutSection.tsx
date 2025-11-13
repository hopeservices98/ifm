import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Culture & Créativité',
      description: 'Promouvoir l\'excellence artistique et culturelle française à Madagascar'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Échanges & Dialogue',
      description: 'Favoriser les rencontres interculturelles et le partage d\'idées'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Éducation & Savoir',
      description: 'Soutenir l\'éducation et la mobilité étudiante internationale'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Diversité & Inclusion',
      description: 'Célébrer la richesse culturelle malgache et française'
    }
  ];

  const timeline = [
    { year: '1960', event: 'Création de l\'Institut Français à Madagascar' },
    { year: '1980', event: 'Développement des programmes éducatifs' },
    { year: '2000', event: 'Modernisation des équipements culturels' },
    { year: '2024', event: 'Lancement de la médiathèque digitale' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beige-clair to-beige-clair/80 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit dark:text-white mb-4">
            À propos de l'Institut Français de Madagascar
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Depuis plus de 60 ans, l'Institut Français de Madagascar cultive l'excellence culturelle
            et éducative, créant des ponts entre deux cultures riches et complémentaires.
          </p>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection animation="fadeInLeft" className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-vif/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-blue-nuit dark:text-white">Notre Mission</h3>
              </div>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                L'Institut Français de Madagascar est une institution culturelle française dédiée à la promotion
                des échanges culturels et éducatifs entre la France et Madagascar.
              </p>
              <blockquote className="border-l-4 border-red-vif pl-6 italic text-gray-600 dark:text-gray-400">
                "Cultivons la culture, partageons les idées"
              </blockquote>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-vif/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-blue-nuit dark:text-white">Notre Vision</h3>
              </div>
              <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Devenir le carrefour privilégié des échanges culturels et éducatifs entre l'Europe et l'Afrique,
                en valorisant la diversité culturelle comme moteur d'innovation et de progrès.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={200} className="space-y-6">
            {/* Timeline */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-poppins font-bold text-blue-nuit dark:text-white mb-6 text-center">
                Notre Histoire
              </h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-vif rounded-full flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <p className="font-inter text-gray-700 dark:text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-poppins font-bold text-blue-nuit dark:text-white mb-6 text-center">
                Impact & Chiffres
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-vif">60+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années de présence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-vif">25k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Documents en médiathèque</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-vif">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Événements par an</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-vif">10k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Visiteurs annuels</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-blue-nuit dark:text-white text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="font-poppins font-bold text-blue-nuit dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="font-inter text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center">
          <div className="bg-gradient-to-r from-red-vif to-red-vif-hover rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Rejoignez Notre Communauté
            </h3>
            <p className="font-inter text-lg mb-6 opacity-90">
              Découvrez nos événements, empruntez nos ouvrages, participez à nos ateliers.
              L'Institut Français de Madagascar vous ouvre ses portes !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-vif px-8 py-3 rounded-lg font-poppins font-medium hover:bg-gray-100 transition-colors">
                Découvrir nos événements
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-poppins font-medium hover:bg-white hover:text-red-vif transition-colors">
                Visiter la médiathèque
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;