import { Linkedin, Briefcase, Award, BarChart as ChartBar, Star, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';
import { formatSEOText } from '../utils/seo';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const { language } = useLanguage();
  const meta = metaContent.about[language];

  const features = language === 'it' ? [
    {
      title: 'Esperienza Decennale',
      description: 'Oltre 10 anni di successi nel marketing digitale con centinaia di clienti soddisfatti.'
    },
    {
      title: 'Approccio Innovativo',
      description: 'Utilizziamo le più recenti tecnologie e strategie per garantire risultati ottimali.'
    },
    {
      title: 'Risultati Misurabili',
      description: 'Monitoraggio costante e report dettagliati per dimostrare il ROI delle nostre strategie.'
    }
  ] : [
    {
      title: 'Decade of Experience',
      description: 'Over 10 years of success in digital marketing with hundreds of satisfied clients.'
    },
    {
      title: 'Innovative Approach',
      description: 'We use the latest technologies and strategies to ensure optimal results.'
    },
    {
      title: 'Measurable Results',
      description: 'Constant monitoring and detailed reports to demonstrate the ROI of our strategies.'
    }
  ];

  const methodologySteps = language === 'it' ? [
    {
      title: '**Analisi Iniziale** (Deep Search)',
      description: 'Scandagliamo la rete con l\'**IA generativa** per scoprire i veri bisogni e le **opportunità di mercato** nascoste.'
    },
    {
      title: 'Strategia Personalizzata',
      description: 'Sviluppo di un piano d\'azione su misura per i tuoi obiettivi di business.'
    },
    {
      title: 'Implementazione',
      description: 'Esecuzione precisa e monitoraggio costante delle performance per un alto **ROI**.'
    },
    {
      title: 'Ottimizzazione Continua',
      description: 'Analisi dei risultati e miglioramento costante per garantire **risultati misurabili**.'
    }
  ] : [
    {
      title: 'Initial Analysis (Deep Search)',
      description: 'We scour the web with Artificial Intelligence to discover the true needs and hidden market opportunities.'
    },
    {
      title: 'Custom Strategy',
      description: 'Development of a tailored action plan for your goals.'
    },
    {
      title: 'Implementation',
      description: 'Precise execution and constant performance monitoring.'
    },
    {
      title: 'Continuous Optimization',
      description: 'Results analysis and constant strategy improvement.'
    }
  ];

  const content = language === 'it' ? {
    title: 'Chi Siamo',
    subtitle: 'La Tua **Agenzia Marketing IA Milano**',
    description: 'Utilizziamo la **Deep Search** per trasformare **dati reali** in **opportunità di mercato** dominanti',
    reputation: {
      title: 'La Nostra **Reputazione**',
      description: 'Analizziamo il mercato con l\'AI prima di iniziare a lavorare con voi. Intercettiamo le reali opportunità e portiamo **innovazione digitale** nel tuo business.',
      approach: {
        title: 'La **Metodologia** Deep Search',
        description: 'Catturiamo ogni opportunità esplorando i bisogni inespressi dei clienti, fondando le nostre **business strategy** su evidenze concrete.'
      }
    },
    founder: {
      title: 'Il Nostro Fondatore',
      subtitle: '**Ingegneria**, Imprenditoria e Passione per la Tecnologia',
      description: 'Esperto di marketing digitale con una **leadership** ventennale nel settore',
      linkedin: 'Connettiti su LinkedIn'
    },
    methodology: {
      title: 'La Nostra **Metodologia**'
    }
  } : {
    title: 'About Us',
    subtitle: 'Your AI-Driven Agency',
    description: 'We use Deep Search to turn raw data into dominant market opportunities',
    reputation: {
      title: 'Our Reputation',
      description: 'We analyze your market with AI before starting to work with you. We intercept real opportunities and decline challenges without potential. Google reviews confirm this.',
      approach: {
        title: 'The Deep Search Approach',
        description: 'We capture every market opportunity by exploring unexpressed customer needs with generative AI, basing our strategies on real data.'
      }
    },
    founder: {
      title: 'Our Founder',
      subtitle: 'Engineer, Serial Entrepreneur, Technology Enthusiast',
      description: 'Digital marketing expert with over 15 years of industry experience',
      linkedin: 'Connect on LinkedIn'
    },
    methodology: {
      title: 'Our Methodology'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/about"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl shadow-xl p-8 sm:p-10 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6"
              >
                <Star className="h-8 w-8 text-yellow-300" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(content.reputation.title) }} />
              <p className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.reputation.description) }} />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                  ))}
                </motion.div>
                <span className="text-lg font-semibold">Google Verified Reviews</span>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 mr-2" />
                  <span className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: formatSEOText(content.reputation.approach.title) }} />
                </div>
                <p className="text-base" dangerouslySetInnerHTML={{ __html: formatSEOText(content.reputation.approach.description) }} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-blue-600 to-blue-400">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: formatSEOText(content.founder.title) }} />
                  <div className="mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="inline-block rounded-full p-1 bg-white/10 backdrop-blur-sm"
                    >
                      <img
                        className="h-32 w-32 rounded-full object-cover"
                        src="https://leprimescelte.com/wp-content/uploads/2025/02/AFimmagine.jpg"
                        alt="Andrea Falzin"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 sm:p-10">
                <div className="space-y-4 text-center">
                  <h4 className="text-xl font-semibold text-gray-900">Andrea Falzin</h4>
                  <p className="text-gray-600 font-medium" dangerouslySetInnerHTML={{ __html: formatSEOText(content.founder.subtitle) }} />
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: formatSEOText(content.founder.description) }} />
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/falzin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    {content.founder.linkedin}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-xl shadow-lg mb-4"
                  >
                    {index === 0 && <Briefcase className="h-6 w-6 text-white" />}
                    {index === 1 && <Award className="h-6 w-6 text-white" />}
                    {index === 2 && <ChartBar className="h-6 w-6 text-white" />}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                  <p className="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" dangerouslySetInnerHTML={{ __html: formatSEOText(content.methodology.title) }} />
            <div className="space-y-8">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(step.title) }} />
                    <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(step.description) }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}