import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
}

export default function HeroSection({ title, subtitle, description, imageSrc = "https://leprimescelte.com/wp-content/uploads/2025/03/velocita_con_logo.png" }: HeroSectionProps) {
  const { language } = useLanguage();

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
        delay: 0.2
      }
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
        delay: 0.6
      }
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
                  {title}
                </motion.span>
                <motion.span 
                  className="block text-blue-600"
                  style={{
                    background: "linear-gradient(90deg, #3B82F6, #2563EB, #3B82F6)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {subtitle}
                </motion.span>
              </motion.h1>
              <motion.p 
                variants={textReveal}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {description}
              </motion.p>
            </div>
          </motion.main>
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
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imageSrc}
            alt={title}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}