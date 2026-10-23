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
    <div className="section">
      <div className="shell">
        <div className="text-center mb-12 rise">
          <h2 className="eyebrow">Testimonials</h2>
          <p className="title-xl mt-2">
            {language === 'it' ? 'Cosa dicono i nostri clienti' : 'What our clients are saying'}
          </p>
          <p className="lede measure mx-auto mt-4">
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white transition-colors duration-220 ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 text-ink-600" />
          </button>

          {/* Slider container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden mx-12"
          >
            <motion.div 
              className="flex"
              animate={{
                x: -currentIndex * itemWidth
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                    <div className="card card-hover h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0">
                          <div className="icon-tile">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[1rem] font-semibold text-ink-900 leading-snug">{review.author}</h3>
                          {review.company && (
                            <p className="text-[0.85rem] text-ink-600 mt-0.5">{review.company}</p>
                          )}
                          <div className="flex items-center gap-0.5 mt-1.5">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[0.95rem] text-ink-600 leading-relaxed flex-grow">"{review.body}"</p>
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white transition-colors duration-220 ${
              currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed' : 'hover:bg-paper'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 text-ink-600" />
          </button>
        </div>

        {/* View all testimonials link */}
        <div className="mt-10 text-center">
          <a 
            href={`/${language}/testimonials`}
            className="btn btn-ghost btn-sm inline-flex items-center"
          >
            {language === 'it' ? 'Vedi tutte le recensioni' : 'View all testimonials'}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}