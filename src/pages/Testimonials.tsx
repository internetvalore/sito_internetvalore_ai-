import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, CheckCircle, ExternalLink } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';
import QualifiedDossierSection from '../components/QualifiedDossierSection';

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
    x: 0,
    y: 12,
    scale: 1,
    zIndex: i
  }));

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/testimonials"
        includeLocalBusiness={true}
        faq={testimonialsFaqs}
        reviews={reviews}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Testimonianze' : 'Testimonials', path: '/testimonials' }
        ]}
      />
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Rating Banner */}
        <div className="section shell">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card card-hover flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex text-ink-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink-900">{content.ratingBadge}</h2>
                <p className="text-[0.9rem] text-ink-600 flex items-center gap-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Recensioni 100% autentiche da account trasparenti Google Business Profile
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm whitespace-nowrap"
            >
              {content.viewAllGoogle}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="section">
          <div className="shell">
            <div
              ref={containerRef}
              className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
                    className="block h-full"
                  >
                    <motion.div
                      className="card card-hover h-full flex flex-col justify-between"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.04
                      }}
                    >
                      <div>
                        <div className="flex items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="icon-tile rounded-full">
                              <Star className="h-5 w-5 fill-current" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-base font-semibold text-ink-900">{review.author}</h3>
                            {review.company && (
                              <p className="text-[0.8rem] font-semibold text-accent-600 mt-1">{review.company}</p>
                            )}
                            <div className="flex items-center mt-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-ink-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-2 -top-2 text-3xl text-ink-300">"</div>
                          <p className="relative text-ink-600 z-10 pl-4 text-[0.95rem] leading-relaxed">
                            {review.body}
                          </p>
                          <div className="absolute -bottom-4 -right-2 text-3xl text-ink-300 transform rotate-180">"</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 hairline flex justify-between items-center text-xs text-ink-500">
                        <span>Recensione Google Verificata</span>
                        <ExternalLink className="h-3.5 w-3.5 text-accent-600" />
                      </div>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sezione Riservatezza & Casi Studio Qualificati */}
        <QualifiedDossierSection />

        {/* Testimonials FAQ Section */}
        <section id="testimonials-faq" className="section hairline">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-14"
            >
              <h2 className="title-lg">
                {content.faqTitle}
              </h2>
              <p className="mt-4 lede measure mx-auto">
                {content.faqSubtitle}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {testimonialsFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                    className="card card-hover w-full flex justify-between items-center text-left"
                  >
                    <span className="text-base font-semibold text-ink-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-ink-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 hairline">
                          <p className="text-[0.95rem] text-ink-600 leading-relaxed">{faq.answer}</p>
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