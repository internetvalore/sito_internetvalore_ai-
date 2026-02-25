import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

export default function Stats() {
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();

  const stats = [
    {
      id: 1,
      name: language === 'it' ? 'Clienti Soddisfatti' : 'Happy Clients',
      value: '120+',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: language === 'it' ? 'Campagne Gestite' : 'Managed Campaigns',
      value: '1000+',
      icon: Target,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: language === 'it' ? 'ROI Medio' : 'Average ROI',
      value: '300%',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: language === 'it' ? 'Anni di Esperienza' : 'Years of Experience',
      value: '15+',
      icon: Award,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="relative bg-white p-6 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stat.color}`} />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                  className="text-4xl font-bold text-gray-900"
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-lg text-gray-600">{stat.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}