import React from 'react';
import AnimatedSection from './AnimatedSection';
import Counter from './Counter';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Étudiante en Lettres",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&crop=face",
      content: "L'Institut Français m'a permis de découvrir une richesse culturelle incroyable. Les événements sont toujours de grande qualité et l'équipe est très accueillante.",
      rating: 5
    },
    {
      name: "Jean Rakoto",
      role: "Artiste peintre",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face",
      content: "La médiathèque est une mine d'or pour les créatifs. J'y trouve toujours l'inspiration et les ressources nécessaires pour mon travail artistique.",
      rating: 5
    },
    {
      name: "Sophie Martin",
      role: "Professeure de français",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&crop=face",
      content: "Campus France m'a accompagnée dans toutes les étapes de mon projet d'études en France. Leur expertise et leur soutien ont été précieux.",
      rating: 5
    }
  ];

  const stats = [
    {
      number: 2500,
      suffix: '+',
      label: 'Étudiants accompagnés',
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: 95,
      suffix: '%',
      label: 'Taux de réussite',
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 50,
      suffix: '+',
      label: 'Universités partenaires',
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: 15,
      label: 'Années d\'expérience',
      icon: (
        <svg className="w-8 h-8 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit dark:text-white mb-4">
            Chiffres Clés
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            L'Institut Français de Madagascar en quelques chiffres
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-red-vif/10 to-red-vif/5 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-poppins font-bold text-red-vif mb-1">
                    <Counter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm font-inter text-gray-600">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit dark:text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez les témoignages de notre communauté
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 200}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-blue-nuit dark:text-white">{testimonial.name}</h4>
                  <p className="font-inter text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="font-inter text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;