import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

export default function Process() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: language === 'it' ? 'Analisi' : 'Analysis',
      description: language === 'it' 
        ? 'Studio approfondito del tuo business e del mercato di riferimento'
        : 'In-depth study of your business and target market',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PenTool,
      title: language === 'it' ? 'Strategia' : 'Strategy',
      description: language === 'it'
        ? 'Sviluppo di un piano d\'azione personalizzato'
        : 'Development of a customized action plan',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      title: language === 'it' ? 'Implementazione' : 'Implementation',
      description: language === 'it'
        ? 'Messa in opera delle strategie definite'
        : 'Implementation of defined strategies',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart,
      title: language === 'it' ? 'Ottimizzazione' : 'Optimization',
      description: language === 'it'
        ? 'Monitoraggio continuo e miglioramento delle performance'
        : 'Continuous monitoring and performance improvement',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {language === 'it' ? 'Come Lavoriamo' : 'How We Work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-500"
          >
            {language === 'it' 
              ? 'Il nostro processo in quattro step per il tuo successo'
              : 'Our four-step process for your success'}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg`}
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                </div>

                <div className="pt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}