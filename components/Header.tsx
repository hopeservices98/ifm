import React, { useState, useEffect } from 'react';
import { useSearch } from './SearchContext';
import { useTheme } from './ThemeContext';

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "Agenda", href: "#agenda" },
  { name: "Médiathèque", href: "#mediatheque" },
  { name: "Campus France", href: "#campus-france" },
  { name: "Contact", href: "#contact-section" }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Institut Français de Madagascar" className="h-10 w-auto mr-3" />
          <span className="text-xl font-poppins font-bold text-blue-nuit hidden sm:block">IFM</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            {navItems.map(item => (
              <a key={item.name} href={item.href} className={`relative font-poppins font-medium text-base ${isScrolled ? 'text-blue-nuit' : 'text-white'} hover:text-red-vif transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-red-vif after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-64 px-4 py-2 pl-10 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-vif/50 ${
                  isScrolled
                    ? 'bg-white border-gray-300 text-blue-nuit placeholder-gray-500'
                    : 'bg-white/10 border-white/30 text-white placeholder-white/70 backdrop-blur-sm'
                }`}
              />
              <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-blue-nuit'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label={`Passer en mode ${theme === 'light' ? 'sombre' : 'clair'}`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-blue-nuit' : 'text-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map(item => (
              <a key={item.name} href={item.href} className="font-poppins font-medium text-base text-blue-nuit hover:text-red-vif transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;