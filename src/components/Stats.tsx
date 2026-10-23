import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

type StatsProps = { tone?: 'dark' | 'quiet' };

export default function Stats({ tone = 'quiet' }: StatsProps) {
  const { language } = useLanguage();
  const dark = tone === 'dark';

  const stats = [
    {
      id: 1,
      name: language === 'it' ? 'Clienti Soddisfatti' : 'Happy Clients',
      value: '120+',
      icon: Users,
    },
    {
      id: 2,
      name: language === 'it' ? 'Campagne Gestite' : 'Managed Campaigns',
      value: '1000+',
      icon: Target,
    },
    {
      id: 3,
      name: language === 'it' ? 'Righe di Codice (482 Tool LLM)' : 'Lines of Code (482 LLM Tools)',
      value: '1M+',
      icon: TrendingUp,
    },
    {
      id: 4,
      name: language === 'it' ? 'Anni di Esperienza' : 'Years of Experience',
      value: '15+',
      icon: Award,
    }
  ];

  return (
    <div className={`section ${dark ? 'section-dark' : 'section-quiet'}`}>
      <div className="shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
              className={`pt-7 border-t ${dark ? 'border-white/10' : 'border-line'}`}
            >
              <div className={`icon-tile mb-5 ${dark ? 'bg-white/[0.04] border-white/10' : ''}`}>
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 + 0.05 }}
                className="stat-figure"
              >
                {stat.value}
              </motion.p>
              <p className={`mt-2 text-[0.95rem] ${dark ? 'text-paper/70' : 'text-ink-600'}`}>
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
