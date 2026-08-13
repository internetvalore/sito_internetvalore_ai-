import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Campagne in outsourcing per il tuo ecommerce: come lavoriamo — e le 6 domande per la tua agenzia
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-black aspect-video sm:h-[500px] md:h-[600px] group cursor-pointer"
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube-nocookie.com/embed/m7g6HcARV1w?autoplay=1&rel=0"
              title="Campagne in outsourcing per il tuo ecommerce: come lavoriamo — e le 6 domande per la tua agenzia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            ></iframe>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="https://img.youtube.com/vi/m7g6HcARV1w/maxresdefault.jpg"
                alt="Campagne in outsourcing per il tuo ecommerce: come lavoriamo — e le 6 domande per la tua agenzia"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <button
                type="button"
                aria-label="Riproduci video"
                className="absolute z-10 w-20 h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-200"
              >
                <svg className="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

