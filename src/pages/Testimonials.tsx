import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, CheckCircle, ExternalLink } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const testimonialsFaqs = [
    {
      question: language === 'it'
        ? 'Le recensioni di Internet Valore sono verificate su Google Business Profile?'
        : 'Are Internet Valore customer reviews verified on Google Business Profile?',
      answer: language === 'it'
        ? 'Sì, tutte le recensioni mostrate in questa pagina sono authentic e pubblicate dai nostri clienti direttamente sulla nostra scheda ufficiale Google Business Profile.'
        : 'Yes, all reviews displayed on this page are authentic and published by our clients directly on our official Google Business Profile.'
    },
    {
      question: language === 'it'
        ? 'Qual è la valutazione media dei clienti di Internet Valore?'
        : 'What is the average customer rating for Internet Valore?',
      answer: language === 'it'
        ? 'Internet Valore vanta una valutazione media di 5.0 su 5 stelle basata su 17 recensioni trasparenti rilasciate da titolari d\'azienda, e-commerce manager e professionisti.'
        : 'Internet Valore holds an average customer rating of 5.0 out of 5 stars based on 17 transparent reviews from business owners, e-commerce managers, and professionals.'
    },
    {
      question: language === 'it'
        ? 'Perché i clienti valutano positivamente Andrea Falzin e Internet Valore?'
        : 'Why do clients rate Andrea Falzin and Internet Valore so highly?',
      answer: language === 'it'
        ? 'I clienti apprezzano particolarmente l\'elevata competenza tecnica, l\'uso di tracciamenti basati su dati reali con masterAnalyzer, la gentilezza e l\'approccio trasparente focalizzato sul profitto (POAS) netto.'
        : 'Clients highlight high technical expertise, real data-driven tracking with masterAnalyzer, accessibility, and a transparent approach focused strictly on net profit (POAS).'
    },
    {
      question: language === 'it'
        ? 'Posso richiedere referenze dirette prima di avviare una collaborazione?'
        : 'Can I request direct client references before starting a partnership?',
      answer: language === 'it'
        ? 'Assolutamente sì. Su richiesta forniamo contatti e casi studio dettagliati di clienti e-commerce e B2B che hanno ottenuto una crescita misurabile grazie ai nostri servizi.'
        : 'Absolutely. Upon request, we provide detailed case studies and direct client references for e-commerce and B2B businesses that achieved verified growth.'
    },
    {
      question: language === 'it'
        ? 'Come posso lasciare una recensione sulla scheda Google di Internet Valore?'
        : 'How can I post a review on Internet Valore\'s Google profile?',
      answer: language === 'it'
        ? 'Puoi lasciare una recensione cliccando direttamente sui link presenti in questa pagina che ti indirizzeranno alla nostra scheda ufficiale Google Business Profile.'
        : 'You can leave a review by clicking any review link on this page, which takes you directly to our official Google Business Profile.'
    }
  ];

  const content = language === 'it' ? {
    title: 'Testimonianze',
    subtitle: 'Cosa Dicono i Nostri Clienti',
    description: 'Scopri le storie di successo di chi ha sfruttato la nostra tecnologia ed il tracciamento su dati reali per dominare il proprio mercato',
    ratingBadge: 'Valutazione Media: 5.0 / 5.0 ★★★★★ su 17 Recensioni Verificate Google',
    viewAllGoogle: 'Vedi tutte le recensioni verificate su Google',
    faqTitle: 'Domande Frequenti su Recensioni e Referenze',
    faqSubtitle: 'Risposte dettagliate sull\'autenticità dei nostri risultati e sulla soddisfazione dei clienti'
  } : {
    title: 'Testimonials',
    subtitle: 'What Our Clients Say',
    description: 'Discover the success stories of those who leveraged our technology and real data tracking to dominate their market',
    ratingBadge: 'Average Rating: 5.0 / 5.0 ★★★★★ based on 17 Verified Google Reviews',
    viewAllGoogle: 'View all verified Google reviews',
    faqTitle: 'Frequently Asked Questions on Reviews & References',
    faqSubtitle: 'Detailed answers about the authenticity of our client results and satisfaction'
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
        path="/testimonials"
        faq={testimonialsFaqs}
        reviews={reviews}
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Rating Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-600 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <div>
                <h2 className="text-xl font-black">{content.ratingBadge}</h2>
                <p className="text-blue-100 text-sm flex items-center gap-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  Recensioni 100% autentiche da account trasparenti Google Business Profile
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition-colors duration-200 text-sm whitespace-nowrap"
            >
              {content.viewAllGoogle}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={containerRef}
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {reviews.map((review, index) => {
                const progress = useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [
                    initialStack[index],
                    {
                      x: 0,
                      y: 0,
                      scale: 1,
                      zIndex: reviews.length - index
                    },
                    {
                      x: 0,
                      y: 0,
                      scale: 1,
                      zIndex: reviews.length - index
                    }
                  ]
                );

                return (
                  <motion.a
                    key={index}
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      x: progress.x,
                      y: progress.y,
                      scale: progress.scale,
                      zIndex: progress.zIndex
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="transform-gpu"
                  >
                    <motion.div
                      className="h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
                      initial={{ opacity: 0, rotateY: 45 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.8 }}
                              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-md"
                            >
                              <Star className="h-6 w-6 text-white fill-current" />
                            </motion.div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-bold text-gray-900">{review.author}</h3>
                            {review.company && (
                              <p className="text-xs font-semibold text-blue-600">{review.company}</p>
                            )}
                            <div className="flex items-center mt-1">
                              {[...Array(review.rating)].map((_, i) => (
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
                          <p className="relative text-gray-700 z-10 pl-4 text-sm leading-relaxed">
                            {review.body}
                          </p>
                          <div className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 transform rotate-180">"</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                        <span>Recensione Google Verificata</span>
                        <ExternalLink className="h-3.5 w-3.5 text-blue-500" />
                      </div>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials FAQ Section */}
        <section id="testimonials-faq" className="bg-white py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {content.faqTitle}
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                {content.faqSubtitle}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {testimonialsFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                    className="w-full flex justify-between items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 border border-gray-200 text-left transition-all duration-200"
                  >
                    <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white border-x border-b border-gray-200 rounded-b-xl -mt-1 shadow-inner">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}