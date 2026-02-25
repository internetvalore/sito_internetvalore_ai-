import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: language === 'it' 
        ? 'Quali servizi offrite?'
        : 'What services do you offer?',
      answer: language === 'it'
        ? 'Offriamo servizi di lead generation, e-commerce, gestione ads, analytics e molto altro. Ogni servizio è personalizzato sulle esigenze del cliente.'
        : 'We offer lead generation, e-commerce, ads management, analytics, and more. Each service is customized to client needs.'
    },
    {
      question: language === 'it'
        ? 'Come iniziare a collaborare?'
        : 'How can we start working together?',
      answer: language === 'it'
        ? 'Il processo inizia con una consulenza gratuita dove analizziamo le tue esigenze e definiamo gli obiettivi da raggiungere.'
        : 'The process starts with a free consultation where we analyze your needs and define the goals to achieve.'
    },
    {
      question: language === 'it'
        ? 'Quali sono i tempi di attivazione?'
        : 'What are the activation times?',
      answer: language === 'it'
        ? 'I tempi variano in base al servizio, ma generalmente siamo operativi in 5-7 giorni lavorativi.'
        : 'Times vary depending on the service, but generally we are operational in 5-7 working days.'
    },
    {
      question: language === 'it'
        ? 'Come misurate i risultati?'
        : 'How do you measure results?',
      answer: language === 'it'
        ? 'Utilizziamo strumenti avanzati di analytics per monitorare ogni aspetto delle campagne e forniamo report dettagliati periodici.'
        : 'We use advanced analytics tools to monitor every aspect of campaigns and provide detailed periodic reports.'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {language === 'it' ? 'Domande Frequenti' : 'Frequently Asked Questions'}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {language === 'it' 
              ? 'Trova le risposte alle domande più comuni'
              : 'Find answers to common questions'}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}