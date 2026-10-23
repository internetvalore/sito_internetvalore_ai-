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

  // Quiet reveal: opacity + small y only (no 3D flip, no infinite motion)
  const imageAnimation = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15
      }
    }
  };

  // Text reveal with delay
  const textReveal = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  };

  return (
    <div className="section-quiet relative">
      <div className="shell relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-14 lg:py-20">
        <motion.main
          initial="hidden"
          animate="visible"
          className="mx-auto lg:mx-0"
        >
          <div className="text-center lg:text-left">
            <motion.h1
              variants={textReveal}
              className="title-xl hero-title mb-4"
            >
              <motion.span
                className="block"
                variants={textReveal}
              >
                {title}
              </motion.span>
              <motion.span
                className="block text-accent-600"
                variants={textReveal}
              >
                {subtitle}
              </motion.span>
            </motion.h1>
            <motion.p
              variants={textReveal}
              className="lede measure"
            >
              {description}
            </motion.p>
          </div>
        </motion.main>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          className="media relative h-56 w-full sm:h-72 md:h-96 lg:h-[420px]"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imageSrc}
            alt={`${title} - Internet Valore Marketing Digitale`}
          />
        </motion.div>
      </div>
    </div>
  );
}
