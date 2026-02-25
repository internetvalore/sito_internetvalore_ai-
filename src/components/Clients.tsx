import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Clients() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Client list
  const clients = [
    {
      title: "Mister Occhiali",
      url: "https://misterocchiali.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2025/03/misterocchiali-twenty.jpg"
    },
    {
      title: "Noleggio Studio Fotografico",
      url: "https://noleggiostudiofotografico.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2024/06/872c25a5-fdec-48d6-8390-4aebec1364be.png"
    },
    {
      title: "Acentro Services",
      url: "https://acentroservices.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2024/06/burocrazia.png"
    },
    {
      title: "Traduttore Milano",
      url: "https://traduttoremilano.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-27-at-12.21.21-1024x1024.jpeg"
    },
    {
      title: "Restauro Mobili Antichi",
      url: "https://restauromobiliantichi.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2025/02/madonnaprimaedopo.png"
    },
    {
      title: "Fumagalli Letti",
      url: "https://fumagalliletti.leprimescelte.com/",
      image: "https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-5.jpeg"
    },
    // Text-only clients at the end
    {
      title: "Metalsistem Lombardia",
      textOnly: true
    },
    {
      title: "Fabbrica Camerette",
      textOnly: true
    },
    {
      title: "Domus Clinica Rigenerativa",
      textOnly: true
    },
    {
      title: "Paradigma 900 srl",
      textOnly: true
    },
    {
      title: "Milano Viti srl",
      textOnly: true
    }
  ];

  const itemsPerView = window.innerWidth < 768 ? 1 : 3;
  const maxIndex = clients.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {language === 'it' ? 'I Nostri Clienti' : 'Our Clients'}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {language === 'it' 
              ? 'Alcuni dei nostri clienti di successo'
              : 'Some of our successful clients'}
          </p>
        </motion.div>

        <div className="relative">
          {/* Previous button */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="Previous example"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          {/* Examples slider */}
          <div className="overflow-hidden mx-10">
            <motion.div 
              className="flex gap-4"
              animate={{
                x: -currentIndex * (100 / itemsPerView) + '%'
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    {client.textOnly ? (
                      // Text-only card
                      <div className="p-8 flex items-center justify-center h-full">
                        <h3 className="text-2xl font-bold text-gray-900 text-center">{client.title}</h3>
                      </div>
                    ) : (
                      // Image card with link
                      <a 
                        href={client.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img 
                          src={client.image} 
                          alt={client.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{client.title}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-600 inline-flex items-center">
                              {language === 'it' ? 'Visita il sito' : 'Visit site'}
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next button */}
          <button 
            onClick={nextSlide} 
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
              currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="Next example"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}