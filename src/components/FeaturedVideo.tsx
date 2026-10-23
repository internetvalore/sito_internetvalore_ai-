import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section">
      <div className="shell">
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h2 className="title-xl mb-4 text-ink-900">
            Campagne in outsourcing per il tuo ecommerce: come lavoriamo — e le 6 domande per la tua agenzia
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="media w-full max-w-5xl mx-auto bg-paper border border-line aspect-video sm:h-[500px] md:h-[600px] group cursor-pointer"
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
                className="w-full h-full object-cover transition-opacity duration-220 group-hover:opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-900/[0.06] pointer-events-none"></div>
              <button
                type="button"
                aria-label="Riproduci video"
                className="btn btn-dark absolute z-10 h-14 w-14 p-0 cursor-pointer"
              >
                <svg className="h-5 w-5 ml-0.5 fill-current" viewBox="0 0 24 24">
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

