import React, { useState } from 'react';
import { useSearch } from './SearchContext';
import Button from './Button';

// --- Icon Components ---
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-vif" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const FilmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-vif" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-vif" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
  </svg>
);

const iconMap = {
  Livre: <BookIcon />,
  Film: <FilmIcon />,
  Musique: <MusicIcon />,
};

// Extended catalog data
const catalogData = {
  Livre: [
    {
      title: 'Petit Pays',
      author: 'Gaël Faye',
      description: 'Un roman poignant sur l\'enfance et la guerre au Burundi.',
      year: '2016',
      genre: 'Roman',
      available: true,
    },
    {
      title: 'Le Gone du Chaâba',
      author: 'Azouz Begag',
      description: 'L\'histoire d\'un enfant algérien dans les bidonvilles lyonnais.',
      year: '1986',
      genre: 'Autobiographie',
      available: true,
    },
    {
      title: 'Un homme ordinaire',
      author: 'Mahi Binebine',
      description: 'Un récit sur la guerre civile marocaine.',
      year: '1995',
      genre: 'Roman',
      available: false,
    },
    {
      title: 'La Vie devant soi',
      author: 'Romain Gary (Émile Ajar)',
      description: 'Prix Goncourt 1975, l\'histoire de Momo et Madame Rosa.',
      year: '1975',
      genre: 'Roman',
      available: true,
    },
    {
      title: 'L\'Étranger',
      author: 'Albert Camus',
      description: 'Le classique existentialiste sur l\'absurdité de la vie.',
      year: '1942',
      genre: 'Philosophie',
      available: true,
    },
    {
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      description: 'Conte philosophique pour enfants et adultes.',
      year: '1943',
      genre: 'Conte',
      available: true,
    },
  ],
  Film: [
    {
      title: 'Portrait de la jeune fille en feu',
      director: 'Céline Sciamma',
      description: 'Une histoire d\'amour inoubliable entre Marianne et Héloïse.',
      year: '2019',
      genre: 'Drame',
      duration: '122 min',
      available: true,
    },
    {
      title: 'Les Misérables',
      director: 'Ladj Ly',
      description: 'Prix du Jury à Cannes 2019, la vie dans les banlieues françaises.',
      year: '2019',
      genre: 'Drame social',
      duration: '104 min',
      available: true,
    },
    {
      title: 'La Vie d\'Adèle',
      director: 'Abdellatif Kechiche',
      description: 'Palme d\'or 2013, l\'éveil sensuel et amoureux d\'une jeune femme.',
      year: '2013',
      genre: 'Drame',
      duration: '180 min',
      available: false,
    },
    {
      title: 'Portrait de la jeune fille en feu',
      director: 'Céline Sciamma',
      description: 'Une histoire d\'amour inoubliable entre Marianne et Héloïse.',
      year: '2019',
      genre: 'Drame',
      duration: '122 min',
      available: true,
    },
  ],
  Musique: [
    {
      title: 'Brol',
      artist: 'Angèle',
      description: 'La pop francophone réinventée par la jeune artiste belge.',
      year: '2021',
      genre: 'Pop',
      available: true,
    },
    {
      title: 'Question Mark',
      artist: 'XXX Tentacion',
      description: 'L\'album posthume du rappeur américain.',
      year: '2020',
      genre: 'Hip-hop',
      available: true,
    },
    {
      title: 'Random Access Memories',
      artist: 'Daft Punk',
      description: 'Album-concept électronique acclamé par la critique.',
      year: '2013',
      genre: 'Electro',
      available: true,
    },
    {
      title: 'Chanson Douce',
      artist: 'Camille',
      description: 'Album intimiste aux arrangements délicats.',
      year: '2020',
      genre: 'Chanson',
      available: false,
    },
  ],
};

const MediathequeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Livre' | 'Film' | 'Musique'>('Livre');
  const { searchQuery } = useSearch();

  const filteredItems = catalogData[activeTab].filter(item =>
    searchQuery === '' ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ('author' in item && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
    ('director' in item && item.director.toLowerCase().includes(searchQuery.toLowerCase())) ||
    ('artist' in item && item.artist.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="mediatheque" className="bg-beige-clair py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-nuit inline-block relative pb-2">
            Médiathèque
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-vif"></span>
          </h2>
          <p className="font-inter text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Découvrez un espace riche de savoirs et de cultures. Notre médiathèque vous ouvre ses portes avec plus de 25 000 documents : livres, DVD, CD, presse française et internationale.
          </p>
        </div>

        {/* Informations détaillées */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-vif/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-lg text-blue-nuit">Horaires d'ouverture</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Lundi - Vendredi :</strong> 8h00 - 17h00</p>
              <p><strong>Samedi :</strong> 8h00 - 12h00</p>
              <p><strong>Dimanche :</strong> Fermé</p>
              <p className="text-xs text-red-vif mt-3">* Horaires sujets à modification</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-vif/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-lg text-blue-nuit">Services</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Prêt de documents (gratuit)</li>
              <li>• Consultation sur place</li>
              <li>• Accès Internet et WiFi</li>
              <li>• Photocopies et impressions</li>
              <li>• Espace enfants dédié</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-vif/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m0 0l-2-2m2 2l2-2m6-6v6m0 0l2 2m-2-2l-2 2" />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-lg text-blue-nuit">Animations</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Heure du Conte (mercredi 10h)</li>
              <li>• Atelier d'écriture créative</li>
              <li>• Club de lecture français</li>
              <li>• Projections cinéma (mardi 18h)</li>
              <li>• Ateliers langues pour enfants</li>
            </ul>
          </div>
        </div>

        {/* Nouveautés */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="font-poppins font-bold text-2xl text-blue-nuit mb-6 text-center">Nouveautés de la semaine</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-vif/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookIcon />
              </div>
              <h4 className="font-poppins font-semibold text-blue-nuit mb-2">Le Testament des Solitudes</h4>
              <p className="text-sm text-gray-600">Évelyne Trouillot - Roman haïtien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-vif/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FilmIcon />
              </div>
              <h4 className="font-poppins font-semibold text-blue-nuit mb-2">Portrait de la jeune fille en feu</h4>
              <p className="text-sm text-gray-600">Céline Sciamma - DVD disponible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-vif/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MusicIcon />
              </div>
              <h4 className="font-poppins font-semibold text-blue-nuit mb-2">Chanson Douce</h4>
              <p className="text-sm text-gray-600">Camille - Album récent</p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          {Object.keys(catalogData).map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category as 'Livre' | 'Film' | 'Musique')}
              className={`px-6 py-3 mx-2 rounded-full font-poppins font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                activeTab === category
                  ? 'bg-red-vif text-white shadow-lg'
                  : 'bg-white text-blue-nuit hover:bg-red-vif hover:text-white shadow-md'
              }`}
            >
              {iconMap[category as keyof typeof iconMap]}
              <span>{category}s</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {iconMap[activeTab]}
                    <span className="text-xs font-poppins font-medium text-red-vif bg-red-vif/10 px-2 py-1 rounded-full">
                      {activeTab}
                    </span>
                  </div>
                  <span className={`text-xs font-poppins px-2 py-1 rounded-full ${
                    item.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.available ? 'Disponible' : 'Emprunté'}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-lg text-blue-nuit mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-gray-600 mb-2">
                  {'author' in item ? item.author : 'director' in item ? item.director : item.artist} • {item.year}
                </p>
                <p className="font-inter text-sm text-gray-700 mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{item.genre}</span>
                  {'duration' in item && <span className="text-xs text-gray-500">{item.duration}</span>}
                </div>
                <button className={`mt-4 w-full py-2 px-4 rounded-lg font-poppins font-medium text-sm transition-all duration-300 ${
                  item.available
                    ? 'bg-red-vif text-white hover:bg-red-vif-hover'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}>
                  {item.available ? 'Réserver' : 'Indisponible'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-lg text-gray-500">
              {searchQuery ? 'Aucun résultat trouvé pour votre recherche.' : 'Aucun élément dans cette catégorie.'}
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button>Voir tous les documents</Button>
        </div>
      </div>
    </section>
  );
};

export default MediathequeSection;
