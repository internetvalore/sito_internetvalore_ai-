import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/internet-valore-s.r.l./',
      icon: Linkedin
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/internetvalore/',
      icon: Facebook
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ecommerceleadgeneration/',
      icon: Instagram
    }
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-gray-500">
            P.IVA 06767350967
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.iubenda.com/privacy-policy/77132692"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/77132692/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
