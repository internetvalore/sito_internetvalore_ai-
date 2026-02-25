import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Google reviews URL
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Internet%20Valore%20srl%20Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDG0NDAzMLc0NzAzsTA2MQESGxgZXzHKeeaVpBYlpZYohCXm5BelKhQX5SgEpSan5hVn5udlLmIloAAAalPXI10AAAA&rldimm=14190607970648344483&tbm=lcl&hl=it&sa=X&ved=0CCEQ9fQKKABqFwoTCLDmluTPnowDFQAAAAAdAAAAABAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews";

// Featured reviews for the slider (a subset of all reviews)
const featuredReviews = [
  {
    author: "Paradigma 900 S.r.l.",
    company: "",
    rating: 5,
    body: "Ottimo consulente, gentile e disponibile. Super consigliato!"
  },
  {
    author: "Simone Labianca",
    company: "",
    rating: 5,
    body: "Professionalità, competenza e gentilezza. Il tutto mixato con entusiasmo di chi ama quello che fa. Consigliatissimo"
  },
  {
    author: "Guido Avolio",
    company: "",
    rating: 5,
    body: "Un'agenzia di valore, di nome e di fatto, che utilizza gli strumenti più attuali per realizzare gli obiettivi del cliente. Eccellente!"
  },
  {
    author: "Matteo Cereda",
    company: "ortodacoltivare.it",
    rating: 5,
    body: "Ho trovato in Internet Valore e in Andrea Falzin un partner affidabile e competente per la gestione delle ads. Andrea ha la capacità di ottimizzare le campagne in modo davvero eccellente, per ottenere conversioni e per ridurre il CPC. Consigliatissimo."
  },
  {
    author: "Giovanni Lugli",
    company: "Immobiliare Milano",
    rating: 5,
    body: "Andrea Falzin è una persona molto gentile, molto preparato e molto paziente, infatti è riuscito a spiegarmi con calma alcuni aspetti del web che mi erano di difficile comprensione oltre a mettere in moto gli strumenti necessari per farmi vedere e farmi contattare dai clienti."
  },
  {
    author: "Hari-Om The Yoga Home",
    company: "",
    rating: 5,
    body: "Internet Valore nella persona di Andrea Falzin oltre a significare grande competenza tecnica è anche disponibilità e gentilezza. Il nostro sito, in particolare sul mercato estero, è passato dall'essere totalmente sconosciuto ad avere un visibilità mondiale negli ambiti per noi interessanti."
  }
];

export default function TestimonialsSlider() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const maxIndex = featuredReviews.length - itemsPerView;

  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.clientWidth;
        let itemsToShow = 3;
        
        // Adjust items per view based on screen width
        if (window.innerWidth < 640) { // Mobile
          itemsToShow = 1;
        } else if (window.innerWidth < 1024) { // Tablet
          itemsToShow = 2;
        }
        
        setItemsPerView(itemsToShow);
        setSliderWidth(containerWidth);
        setItemWidth(containerWidth / itemsToShow);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, featuredReviews.length - itemsPerView));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {language === 'it' ? 'Cosa dicono i nostri clienti' : 'What our clients are saying'}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {language === 'it' 
              ? 'Ecco alcune delle recensioni che i nostri clienti hanno condiviso sulla loro esperienza con noi.' 
              : 'These are some of the reviews our clients have shared about their experience working with us.'}
          </p>
        </div>

        <div className="relative">
          {/* Previous button */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          {/* Slider container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden mx-10"
          >
            <motion.div 
              className="flex"
              animate={{
                x: -currentIndex * itemWidth
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              style={{ width: `${featuredReviews.length * itemWidth}px` }}
            >
              {featuredReviews.map((review, index) => (
                <div 
                  key={index} 
                  style={{ width: `${itemWidth}px` }}
                  className="px-2"
                >
                  <a 
                    href={GOOGLE_REVIEWS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{review.author}</h3>
                          {review.company && (
                            <p className="text-sm text-gray-500">{review.company}</p>
                          )}
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-500 flex-grow">"{review.body}"</p>
                    </div>
                  </a>
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
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>

        {/* View all testimonials link */}
        <div className="mt-8 text-center">
          <a 
            href={`/${language}/testimonials`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            {language === 'it' ? 'Vedi tutte le recensioni' : 'View all testimonials'}
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}