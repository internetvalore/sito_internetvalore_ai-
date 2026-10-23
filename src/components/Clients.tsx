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
    <div className="section">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="title-xl mb-4">
            {language === 'it' ? 'I Nostri Clienti' : 'Our Clients'}
          </h2>
          <p className="lede">
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full border border-line bg-white transition-colors duration-220 cursor-pointer ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper'
            }`}
            aria-label="Previous example"
          >
            <ChevronLeft className="h-5 w-5 text-accent-600" />
          </button>

          {/* Examples slider */}
          <div className="overflow-hidden mx-10">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: -currentIndex * (100 / itemsPerView) + '%'
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="card card-hover p-0 overflow-hidden h-full">
                    {client.textOnly ? (
                      // Text-only card
                      <div className="p-6 flex items-center justify-center h-full min-h-[170px]">
                        <h3 className="text-[1.2rem] font-semibold text-ink-900 text-center">{client.title}</h3>
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
                          alt={language === 'it' ? `Caso di Successo Cliente Internet Valore - ${client.title}` : `Internet Valore Client Success Story - ${client.title}`} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                          <h3 className="text-[1.05rem] font-semibold text-ink-900 mb-2">{client.title}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-accent-600 inline-flex items-center gap-1.5 font-semibold">
                              {language === 'it' ? 'Visita il sito' : 'Visit site'}
                              <ArrowRight className="h-4 w-4" />
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full border border-line bg-white transition-colors duration-220 cursor-pointer ${
              currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper'
            }`}
            aria-label="Next example"
          >
            <ChevronRight className="h-5 w-5 text-accent-600" />
          </button>
        </div>
      </div>
    </div>
  );
}