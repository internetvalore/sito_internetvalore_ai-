import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedVideo() {
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
            Cinque domande a cui quasi nessuna agenzia sa rispondere
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-black aspect-video sm:h-[500px] md:h-[600px]"
        >
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube-nocookie.com/embed/KCdTSjGYR3Q?rel=0"
            title="Cinque domande a cui quasi nessuna agenzia sa rispondere"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
