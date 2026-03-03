import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';
import { formatSEOText } from '../utils/seo';

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Internet%20Valore%20srl%20Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDG0NDAzMLc0NzAzsTA2MQESGxgZXzHKeeaVpBYlpZYohCXm5BelKhQX5SgEpSan5hVn5udlLmIloAAAalPXI10AAAA&rldimm=14190607970648344483&tbm=lcl&hl=it&sa=X&ved=0CCEQ9fQKKABqFwoTCLDmluTPnowDFQAAAAAdAAAAABAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews";

const reviews = [
  {
    author: "Paradigma 900 S.r.l.",
    company: "",
    rating: 5,
    body: "Ottimo consulente, gentile e disponibile. Super consigliato!"
  },
  {
    author: "Simone Labianca",
    company: "",
    rating: 5,
    body: "Professionalità, competenza e gentilezza. Il tutto mixato con entusiasmo di chi ama quello che fa. Consigliatissimo"
  },
  {
    author: "Guido Avolio",
    company: "",
    rating: 5,
    body: "Un'agenzia di valore, di nome e di fatto, che utilizza gli strumenti più attuali per realizzare gli obiettivi del cliente. Eccellente!"
  },
  {
    author: "Camerette Web",
    company: "",
    rating: 5,
    body: "Gentilezza, competenza e disponibilità nell'accontentare il cliente in tutte le sue richieste. Andrea super Top!"
  },
  {
    author: "Nicola Testa",
    company: "",
    rating: 5,
    body: "Grande professionalità e competenza."
  },
  {
    author: "Emanuela Pasolini",
    company: "",
    rating: 5,
    body: "Andrea super professionista mi ha risolto un grande problema. Sempre grazie"
  },
  {
    author: "Raffaele Visconti",
    company: "",
    rating: 5,
    body: "Collaboro con Andrea da diversi anni! Specialista nel migliorare le vendite dei tuoi prodotto, servizi e le visite al tuo sito."
  },
  {
    author: "Leandro Diana",
    company: "",
    rating: 5,
    body: "Agenzia guidata dal bravissimo Andrea Falzin, talento del marketing e dell'ecommerce"
  },
  {
    author: "Dott. Loredana Leonforte",
    company: "",
    rating: 5,
    body: "Professionista preparato, disponibile nel comprendere le diverse esigenze. Consigliatissimo"
  },
  {
    author: "Vittorio Orefice",
    company: "",
    rating: 5,
    body: "Andrea è quel tipo di persona che vuoi aver vicino quando hai un problema tecnico. Ma va benissimo anche per dividere della buona cucina!"
  },
  {
    author: "Alessandro Tettamanti",
    company: "",
    rating: 5,
    body: "Ottimo servizio."
  },
  {
    author: "Matteo Cereda",
    company: "ortodacoltivare.it",
    rating: 5,
    body: "Ho trovato in Internet Valore e in Andrea Falzin un partner affidabile e competente per la gestione delle ads. Andrea ha la capacità di ottimizzare le campagne in modo davvero eccellente, per ottenere conversioni e per ridurre il CPC. Consigliatissimo."
  },
  {
    author: "Giovanni Lugli",
    company: "Immobiliare Milano",
    rating: 5,
    body: "Andrea Falzin è una persona molto gentile, molto preparato e molto paziente, infatti è riuscito a spiegarmi con calma alcuni aspetti del web che mi erano di difficile comprensione oltre a mettere in moto gli strumenti necessari per farmi vedere e farmi contattare dai clienti."
  },
  {
    author: "Francesco Acefnors",
    company: "",
    rating: 5,
    body: "Persona seria, disponibile e competente!! Consigliatissimo"
  },
  {
    author: "Stefano Cocconcelli",
    company: "",
    rating: 5,
    body: "Sono grandi professionisti al servizio della comunicazione. Preparati e professionali"
  },
  {
    author: "Andrea Vandoni",
    company: "",
    rating: 5,
    body: "Ho trovato in Internet Valore disponibilità e professionalità. I servizi proposti sono molto validi e permettono di stabilire un piano di marketing strategico che porta ogni cliente ad una crescita costante."
  },
  {
    author: "Hari-Om The Yoga Home",
    company: "",
    rating: 5,
    body: "Internet Valore nella persona di Andrea Falzin oltre a significare grande competenza tecnica è anche disponibilità e gentilezza. Il nostro sito, in particolare sul mercato estero, è passato dall'essere totalmente sconosciuto ad avere un visibilità mondiale negli ambiti per noi interessanti."
  }
];

export default function Testimonials() {
  const { language } = useLanguage();
  const meta = metaContent.testimonials[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const content = language === 'it' ? {
    title: 'Recensioni Internet Valore',
    subtitle: 'La Nostra **Riprova Sociale**',
    description: 'Scopri i **casi studio** e le **opinioni clienti** di chi ha sfruttato la **Deep Search** per intercettare e dominare il proprio mercato con **risultati reali**.',
  } : {
    title: 'Internet Valore Reviews',
    subtitle: 'Our Social Proof',
    description: 'Discover the case studies and customer reviews of those who leveraged Deep Search to intercept and dominate their market with real results',
  };

  const initialStack = reviews.map((_, i) => ({
    x: i % 2 === 0 ? -100 : 100,
    y: -10 * (reviews.length - i),
    scale: 1 - (0.05 * (reviews.length - i)),
    zIndex: i
  }));

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path={meta.path}
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={containerRef}
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {reviews.map((review, index) => {
                const x = useTransform(scrollYProgress, [0, 0.5], [initialStack[index].x, 0]);
                const y = useTransform(scrollYProgress, [0, 0.5], [initialStack[index].y, 0]);
                const scale = useTransform(scrollYProgress, [0, 0.5], [initialStack[index].scale, 1]);

                return (
                  <motion.a
                    key={index}
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      x,
                      y,
                      scale,
                      zIndex: reviews.length - index
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="transform-gpu"
                  >
                    <motion.div
                      className="h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, rotateY: 45 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                          >
                            <Star className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{review.author}</h3>
                          {review.company && (
                            <p className="text-sm text-gray-500">{review.company}</p>
                          )}
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 text-4xl text-blue-200 opacity-50">"</div>
                        <p className="relative text-gray-600 z-10 pl-4" dangerouslySetInnerHTML={{ __html: formatSEOText(review.body) }}>
                        </p>
                        <div className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 transform rotate-180">"</div>
                      </div>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}