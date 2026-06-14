import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Text reveal animation with delay
  const textReveal = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6 // Delay text animation until after image animation
      }
    }
  };

  // Image animation from left with rotation
  const imageAnimation = {
    hidden: { opacity: 0, x: -100, rotateY: -90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 // Start image animation first
      }
    }
  };

  // Gradient animation for the highlight text
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // 3D flip animation
  const flipAnimation = {
    rotateY: isFlipped ? 360 : 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 animate-gradient-x"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-opacity-80 backdrop-blur-sm">
          <motion.main
            initial="hidden"
            animate="visible"
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1
                variants={textReveal}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <motion.span
                  className="block"
                  variants={textReveal}
                >
                  {t('hero.title')}
                </motion.span>
                <motion.span
                  className="block text-blue-600"
                  animate={gradientAnimation}
                  style={{
                    background: "linear-gradient(90deg, #3B82F6, #2563EB, #3B82F6)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {t('hero.highlight')}
                </motion.span>
              </motion.h1>
              <motion.p
                variants={textReveal}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {t('hero.description')}
              </motion.p>
              <motion.div
                variants={textReveal}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      {t('hero.cta.secondary')}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.main>

          {/* Decorative floating elements */}
          <div className="absolute top-0 right-0 -mr-40 w-80 h-80 opacity-30 pointer-events-none">
            <motion.div
              animate={floatingAnimation}
              className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 filter blur-3xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 -ml-20 w-60 h-60 opacity-20 pointer-events-none">
            <motion.div
              animate={floatingAnimation}
              className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 filter blur-3xl"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageAnimation}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 perspective-1000"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
          <motion.div
            className="absolute inset-0 cursor-pointer"
            animate={flipAnimation}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front side */}
            <img
              className="absolute inset-0 w-full h-full object-cover backface-hidden"
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
              alt={t('hero.title')}
            />

            {/* Back side */}
            <div
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 backface-hidden flex flex-col items-center justify-center text-white text-center p-8"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <h2 className="text-4xl font-bold mb-4">Deep Search</h2>
              <h3 className="text-2xl font-semibold mb-8">Dati reali, conversioni reali</h3>
              <p className="text-lg">Tocca per tornare all'immagine</p>
            </div>
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}