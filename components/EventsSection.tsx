import React, { useState } from 'react';
import { useSearch } from './SearchContext';
import AnimatedSection from './AnimatedSection';
import EventCard from './EventCard';

const allEvents = [
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop',
    title: 'Expo "Regards de Tana"',
    date: '20 Nov 2025',
    time: '14h00 - 18h00',
    location: 'Salle d\'exposition',
    category: 'Exposition',
    description: 'Découvrez les œuvres photographiques contemporaines d\'artistes malgaches.',
  },
  {
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400&auto=format&fit=crop',
    title: 'Ciné-Club "Les Misérables"',
    date: '15 Nov 2025',
    time: '18h30',
    location: 'Auditorium',
    category: 'Cinéma',
    description: 'Projection du film de Ladj Ly avec débat animé par notre médiathèque.',
  },
  {
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop',
    title: 'Jazz à l\'IFM',
    date: '25 Nov 2025',
    time: '20h00',
    location: 'Jardin',
    category: 'Musique',
    description: 'Concert du quartet français "Les Quatre Saisons" - Entrée libre.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    title: 'Atelier Campus France',
    date: '12 Nov 2025',
    time: '09h00 - 12h00',
    location: 'Salle de conférence',
    category: 'Éducation',
    description: 'Session d\'information sur les bourses d\'études en France pour 2026.',
  },
  {
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop',
    title: 'Heure du Conte Francophone',
    date: '18 Nov 2025',
    time: '10h00',
    location: 'Médiathèque',
    category: 'Famille',
    description: 'Histoires et comptines pour les petits, animées par nos bibliothécaires.',
  },
  {
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400&auto=format&fit=crop',
    title: 'Conférence "France-Madagascar : Dialogues Culturels"',
    date: '28 Nov 2025',
    time: '16h00',
    location: 'Amphithéâtre',
    category: 'Conférence',
    description: 'Échange avec des intellectuels français et malgaches sur les liens culturels.',
  },
];

const categories = ['Tous', 'Exposition', 'Cinéma', 'Musique', 'Éducation', 'Famille', 'Conférence'];

const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const { searchQuery } = useSearch();

  const filteredEvents = allEvents
    .filter(event => selectedCategory === 'Tous' || event.category === selectedCategory)
    .filter(event =>
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section id="agenda" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit inline-block relative pb-2">
            Agenda Culturel
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-vif"></span>
            </h2>
            <p className="font-inter text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Découvrez notre programmation riche en événements culturels, éducatifs et artistiques.
              De l'exposition à la conférence, il y en a pour tous les goûts !
            </p>
        </AnimatedSection>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-poppins font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-vif text-white shadow-lg'
                  : 'bg-white text-blue-nuit hover:bg-red-vif hover:text-white shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up" style={{animationDelay: `${0.2 * (index + 1)}s`}}>
              <EventCard
                image={event.image}
                title={event.title}
                date={`${event.date} - ${event.time}`}
                category={event.category}
                location={event.location}
                description={event.description}
              />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-lg text-gray-500">Aucun événement dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;