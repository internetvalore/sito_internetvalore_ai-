import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

export default function Process() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const steps = [
    {
      icon: Search,
      title: isIt ? 'Prima misuriamo' : 'First we measure',
      description: isIt
        ? 'Fotografiamo la situazione di partenza: campagne, tracciamento e margini. Ogni risultato futuro si confronta con questo dato, non con una sensazione.'
        : 'We take a snapshot of the starting point: campaigns, tracking and margins. Every future result is compared against this figure, not against a feeling.'
    },
    {
      icon: PenTool,
      title: isIt ? 'Poi costruiamo gli annunci' : 'Then we build the ads',
      description: isIt
        ? 'Analizziamo cosa cercano davvero i tuoi clienti e cosa promettono i concorrenti. Poi scriviamo testi e immagini sui bisogni reali di chi compra.'
        : 'We analyze what your customers really search for and what competitors promise. Then we write copy and visuals around the real needs of the people who buy.'
    },
    {
      icon: Rocket,
      title: isIt ? 'Niente parte senza di te' : 'Nothing starts without you',
      description: isIt
        ? 'Ogni nuova campagna nasce in pausa e viene verificata in prova. La vedi, la approvi, e solo allora va online.'
        : 'Every new campaign is created paused and verified in a test run. You see it, you approve it, and only then does it go live.'
    },
    {
      icon: BarChart,
      title: isIt ? 'Ottimizziamo sul profitto' : 'We optimize on profit',
      description: isIt
        ? 'Confrontiamo ordini e contatti reali con quelli dichiarati dalle piattaforme, togliamo lo spam e ottimizziamo sul profitto netto (POAS), non sul fatturato.'
        : 'We compare real orders and leads with those reported by the platforms, remove spam and optimize on net profit (POAS), not on revenue.'
    }
  ];

  return (
    <div className="section section-quiet">
      <div className="shell">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="title-xl"
          >
            {isIt ? 'Come lavoriamo' : 'How we work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
            className="lede measure mt-4 mx-auto"
          >
            {isIt
              ? 'Quattro passaggi, sempre nello stesso ordine: prima la misura, poi le decisioni.'
              : 'Four steps, always in the same order: measurement first, decisions after.'}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-line -translate-y-1/2" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
                className={`relative card card-hover${index % 2 ? ' card-quiet' : ''}`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <p className="eyebrow">{index + 1}</p>
                  <span className="icon-tile">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div>
                  <h3 className="title-lg mb-3">{step.title}</h3>
                  <p className="text-[0.95rem] text-ink-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
