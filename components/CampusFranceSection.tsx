import React from 'react';
import Button from './Button';

const CampusFranceSection: React.FC = () => {
    const bgPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230D1B2A' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;

    const services = [
      {
        icon: (
          <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        title: 'Orientation Académique',
        description: 'Conseils personnalisés pour choisir votre formation en France',
        details: 'Plus de 3 500 établissements d\'enseignement supérieur'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: 'Préparation aux Examens',
        description: 'Cours intensifs TCF, TEF et préparation Campus France',
        details: 'Sessions collectives et cours particuliers'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Aide à la Mobilité',
        description: 'Accompagnement pour visas, logement et intégration',
        details: 'Partenariats avec OFII et CROUS'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4" />
          </svg>
        ),
        title: 'Stages et Emploi',
        description: 'Opportunités de stages et contrats professionnels',
        details: 'Réseau de 200 entreprises partenaires'
      }
    ];

    const stats = [
      { number: '2500+', label: 'Étudiants accompagnés' },
      { number: '95%', label: 'Taux de réussite' },
      { number: '50+', label: 'Universités partenaires' },
      { number: '15', label: 'Années d\'expérience' }
    ];

  return (
    <section
        id="campus-france"
        className="bg-white py-20"
        style={{ backgroundImage: bgPattern }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit inline-block relative pb-2">
            Campus France Madagascar
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-vif"></span>
          </h2>
          <p className="font-inter text-lg max-w-3xl mx-auto text-gray-700 mt-4 leading-relaxed">
            L'agence pour la promotion de l'enseignement supérieur, l'accueil et la mobilité internationale.
            Préparez votre projet d'études en France avec notre accompagnement personnalisé.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-poppins font-bold text-red-vif mb-2">{stat.number}</div>
              <div className="text-sm font-inter text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-vif/10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-xl text-blue-nuit mb-3">{service.title}</h3>
                  <p className="font-inter text-gray-700 mb-3">{service.description}</p>
                  <p className="font-inter text-sm text-red-vif font-medium">{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="font-poppins font-bold text-2xl text-blue-nuit mb-4">Prêt à étudier en France ?</h3>
          <p className="font-inter text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Notre équipe vous accompagne à chaque étape de votre projet : de l'orientation académique
            à l'obtention de votre visa étudiant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Rendez-vous conseil</Button>
            <button className="px-8 py-3 border-2 border-red-vif text-red-vif font-poppins font-medium rounded-lg hover:bg-red-vif hover:text-white transition-all duration-300">
              Télécharger le guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusFranceSection;