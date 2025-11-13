import React, { useState } from 'react';
import Lightbox from './Lightbox';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  category: string;
  location?: string;
  description?: string;
  images?: string[]; // For lightbox gallery
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  category,
  location,
  description,
  images = [image]
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = () => {
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full group cursor-pointer">
        <div className="relative overflow-hidden" onClick={openLightbox}>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <span className="absolute top-3 right-3 bg-red-vif text-white text-xs font-poppins font-medium px-3 py-1 rounded-full shadow-sm">{category}</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-poppins font-bold text-xl mb-2 text-blue-nuit">{title}</h3>
          <p className="font-inter text-base text-gray-500 mb-2">{date}</p>
          {location && <p className="font-inter text-sm text-gray-400 mb-3">📍 {location}</p>}
          {description && <p className="font-inter text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>}
          <div className="mt-auto pt-4 border-t border-gray-100">
             <a href="#" className="group font-poppins font-medium text-red-vif hover:text-red-vif-hover transition-colors inline-flex items-center">
              Réserver <span className="transform transition-transform duration-300 group-hover:translate-x-2 ml-2">&rarr;</span>
             </a>
          </div>
        </div>
      </div>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default EventCard;