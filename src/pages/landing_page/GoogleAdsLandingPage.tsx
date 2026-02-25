import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown, CheckCircle, HelpCircle, TrendingUp, Clock, BarChart2, DollarSign } from 'lucide-react';
import TestimonialsSlider from '../../components/TestimonialsSlider';

const GoogleAdsLandingPage = () => {
  const { language } = useLanguage();

  const content = language === 'it' ? {
    title: 'Stanco di Campagne Pubblicitarie che Non Portano Risultati Concreti?',
    subtitle: 'Sfrutta la potenza della Deep Search e dell\'IA per dominare il tuo mercato online. Scopri la Soluzione Definitiva per Far Crescere la Tua Attività, Senza Sprechi e con Massima Trasparenza.',
    description: 'La gestione delle campagne pubblicitarie tradizionali su Google e Facebook è ormai superata e spesso frustrante. Tra budget che si esauriscono senza conversioni, algoritmi in continua evoluzione e la difficoltà di interpretare i dati, spesso ci si sente persi in un labirinto digitale.',
    question: 'E se ti dicessimo che con l\'Intelligenza Artificiale e la Deep Search possiamo intercettare esattamente cosa cercano i tuoi clienti, convertendo i loro bisogni in risultati reali?',
    ctaPrimary: 'Richiedi una Consulenza Gratuita',
    ctaSecondary: 'Scopri di Più sulla Nostra Offerta "Win-Win"',
    problemTitle: 'Riconosci Queste Sfide?',
    problems: [
      { icon: <TrendingUp />, text: 'Budget Pubblicitario Inefficace: Spendi tanto ma vedi pochi risultati?' },
      { icon: <HelpCircle />, text: 'Complessità delle Piattaforme: Google Ads e Facebook Ads ti sembrano troppo complicati?' },
      { icon: <Clock />, text: 'Mancanza di Tempo: Non hai tempo per gestire e ottimizzare le tue campagne?' },
      { icon: <BarChart2 />, text: 'Difficoltà nell\'Analisi dei Dati: Non sai quali metriche contano davvero?' },
      { icon: <DollarSign />, text: 'Costi Nascosti: Ti preoccupano le sorprese in fattura?' }
    ],
    problemNote: 'Secondo le analisi dei commenti degli utenti italiani, le principali frustrazioni riguardano proprio la mancanza di risultati tangibili, la complessità delle piattaforme e la percezione di costi elevati senza un ritorno adeguato.',
    philosophyTitle: 'La Nostra Filosofia: Il Tuo Successo È il Nostro Successo',
    philosophy: 'Noi crediamo in una partnership basata sulla trasparenza e sui risultati concreti. La nostra filosofia è semplice: se tu cresci, cresciamo anche noi. Per questo, abbiamo strutturato i nostri servizi in modo da essere allineati al 100% con i tuoi obiettivi di business.',
    servicesTitle: 'I Nostri Servizi di Gestione Campagne Pubblicitarie',
    servicesIntro: 'Ti offriamo una gestione completa e professionale delle tue campagne pubblicitarie su Google e Facebook, pensata per massimizzare il tuo ROI (Ritorno sull\'Investimento).',
    servicesSubtitle: 'Ecco cosa include il nostro servizio standard:',
    services: [
      {
        title: 'Setup Campagna Professionale',
        items: [
          'Analisi approfondita del tuo business e dei tuoi obiettivi.',
          'Definizione della strategia di campagna più efficace per il tuo target.',
          'Configurazione tecnica avanzata su Google Ads e/o Facebook Ads.',
          'Costo di setup una tantum: 300€ + IVA a canale.'
        ]
      },
      {
        title: 'Gestione e Ottimizzazione Mensile Continua',
        items: [
          'Monitoraggio costante delle performance delle campagne.',
          'Ottimizzazione continua per migliorare i risultati (test A/B, aggiustamento delle offerte, targeting, ecc.).',
          'Creazione e gestione di annunci efficaci e pertinenti.',
          'Reportistica chiara e trasparente sull\'andamento delle campagne.',
          'Costo mensile: 30% della spesa pubblicitaria mensile (con una fee minima di 300€ + IVA).'
        ]
      },
      {
        title: 'Durata Minima e Flessibilità',
        items: [
          'Durata minima iniziale di 3 mesi (pagamento anticipato). Questo ci permette di impostare e ottimizzare le campagne per ottenere risultati significativi.',
          'Successivamente, il contratto è disdicibile di mese in mese con un preavviso di un mese.'
        ]
      },
      {
        title: 'Spese Pubblicitarie Sotto Controllo',
        items: [
          'Le spese pubblicitarie per Google e Facebook sono pagate direttamente da te. Questo ti garantisce il pieno controllo del tuo budget pubblicitario.'
        ]
      }
    ],
    proposalTitle: 'La Nostra Proposta "Win-Win" Basata sui Risultati',
    proposalSubtitle: 'Vuoi Eliminare Ogni Rischio Iniziale e Focalizzarti Solo sui Risultati?',
    proposal: 'Abbiamo una variante unica che dimostra quanto crediamo nella nostra capacità di generare risultati per te:',
    proposalHighlight: 'Scegli di fare pubblicità sulle nostre landing page ottimizzate e noi:',
    proposalPoints: [
      'Gestiamo per te il pagamento del budget pubblicitario su Google e Facebook, che avrai precedentemente versato. Non dovrai più preoccuparti di gestire le fatture da Google e Facebook in Irlanda.',
      'Azzeriamo completamente i costi di setup della campagna. Utilizzeremo il nostro account pubblicitario attivo sul dominio delle nostre landing page.'
    ],
    proposalWhy: 'Perché possiamo offrirti questo?',
    proposalWhyAnswer: 'Perché siamo così sicuri della performance delle nostre landing page e della nostra gestione che siamo disposti a investire in prima persona nel tuo successo.',
    proposalMeaning: 'Cosa significa questo per te?',
    proposalMeaningPoints: [
      'Nessun costo iniziale di setup.',
      'Nessuna gestione di fatture complesse.',
      'Massima focalizzazione sui risultati.'
    ],
    proposalBest: 'E la parte migliore? Anche con questa opzione, la gestione mensile è sempre legata al 30% della spesa pubblicitaria, con la stessa fee minima di 300€ + IVA. Questo significa che il nostro guadagno dipende direttamente dai risultati che otteniamo per te.',
    proposalRenewal: 'Ogni mese, il tuo rinnovo è a rischio. Se non sei soddisfatto dei risultati, sei libero di interrompere la collaborazione con un preavviso di un mese. Questo ci spinge costantemente a dare il massimo per la tua crescita.',
    whyUsTitle: 'Perché Scegliere Noi?',
    whyUsSubtitle: 'La Tua Crescita Online È la Nostra Priorità.',
    whyUsPoints: [
      'Esperienza Comprovata: Abbiamo anni di esperienza nella gestione di campagne pubblicitarie di successo per aziende come la tua.',
      'Approccio Personalizzato: Ogni business è unico. Creiamo strategie su misura per i tuoi obiettivi specifici.',
      'Focus sui Risultati: Siamo ossessionati dal raggiungimento dei tuoi KPI (Key Performance Indicators).',
      'Comunicazione Trasparente: Ti teniamo sempre aggiornato sull\'andamento delle tue campagne con report chiari e regolari.',
      'Supporto Dedicato: Avrai un team di esperti a tua disposizione per rispondere a tutte le tue domande e supportarti in ogni fase.'
    ],
    testimonialsTitle: 'Cosa Dicono i Nostri Clienti:',
    testimonials: [  // This was the section causing issues.  Replaced with TestimonialsSlider
      // {
      //   quote: 'Grazie alla loro gestione delle campagne, abbiamo visto un aumento significativo delle nostre vendite online. Il team è sempre disponibile e proattivo.',
      //   author: 'Marco Rossi, CEO di Digital Solutions'
      // },
      // {
      //   quote: 'Finalmente una gestione delle campagne trasparente e orientata ai risultati. Consigliatissimi!',
      //   author: 'Laura Bianchi, Marketing Manager di Tech Innovations'
      // }
    ],
    faqTitle: 'Hai Ancora Dubbi? Ecco le Risposte alle Domande Più Frequenti:',
    faqs: [
      {
        question: 'Qual è il costo totale iniziale?',
        answer: 'Il costo iniziale è di 300€ + IVA per canale (Google Ads o Facebook Ads) come setup una tantum, più il primo trimestre di gestione (minimo 900€ + IVA). Scegliendo l\'opzione "Win-Win", il costo di setup è azzerato.'
      },
      {
        question: 'Come vengono monitorati i risultati?',
        answer: 'Utilizziamo dashboard personalizzate e report settimanali dettagliati che ti permettono di vedere in tempo reale l\'andamento delle tue campagne, con focus sui KPI più rilevanti per il tuo business.'
      },
      {
        question: 'Posso avere un controllo sulle spese pubblicitarie?',
        answer: 'Assolutamente sì. Con l\'opzione standard, paghi direttamente le piattaforme pubblicitarie, mantenendo il pieno controllo. Con l\'opzione "Win-Win", concordiamo insieme un budget mensile che non verrà mai superato senza la tua approvazione.'
      },
      {
        question: 'Cosa succede dopo i primi 3 mesi?',
        answer: 'Dopo i primi 3 mesi, il contratto diventa mensile e puoi decidere di continuare o interrompere la collaborazione con un preavviso di un mese. La maggior parte dei nostri clienti sceglie di continuare vedendo i risultati positivi.'
      },
      {
        question: 'Quali sono i tempi di attivazione di una campagna?',
        answer: 'Dall\'approvazione del progetto, siamo in grado di attivare le tue campagne in 5-7 giorni lavorativi. Questo include l\'analisi iniziale, la strategia e la configurazione tecnica.'
      }
    ],
    finalCta: 'È Ora di Ottenere Risultati Concreti con le Tue Campagne Pubblicitarie!',
    finalCtaSubtitle: 'Scegli l\'opzione che fa per te:',
    contactUs: 'Hai domande? Contattaci subito!',
    whatsappText: 'Contattaci su WhatsApp',
    callText: 'Chiamaci Ora',
    whatsappNumber: '+393475012682',
    phoneNumber: '800 940 213'
  } : {
    title: 'Tired of Advertising Campaigns That Don\'t Deliver Real Results?',
    subtitle: 'Harness the power of Deep Search and AI to dominate your online market. Discover the Ultimate Solution to Grow Your Business, Without Waste and with Maximum Transparency.',
    description: 'Managing traditional advertising campaigns on Google and Facebook is now outdated and often frustrating. Between budgets that run out without conversions, constantly evolving algorithms, and the difficulty of interpreting data, you often feel lost in a digital maze.',
    question: 'What if we told you that with Artificial Intelligence and Deep Search we can intercept exactly what your customers are looking for, converting their needs into real results?',
    ctaPrimary: 'Request a Free Consultation',
    ctaSecondary: 'Learn More About Our "Win-Win" Offer',
    problemTitle: 'Do You Recognize These Challenges?',
    problems: [
      { icon: <TrendingUp />, text: 'Ineffective Advertising Budget: Spending a lot but seeing few results?' },
      { icon: <HelpCircle />, text: 'Platform Complexity: Do Google Ads and Facebook Ads seem too complicated?' },
      { icon: <Clock />, text: 'Lack of Time: Don\'t have time to manage and optimize your campaigns?' },
      { icon: <BarChart2 />, text: 'Difficulty in Data Analysis: Don\'t know which metrics really matter?' },
      { icon: <DollarSign />, text: 'Hidden Costs: Worried about surprises in your bill?' }
    ],
    problemNote: 'According to analysis of Italian user comments, the main frustrations concern precisely the lack of tangible results, the complexity of the platforms, and the perception of high costs without an adequate return.',
    philosophyTitle: 'Our Philosophy: Your Success Is Our Success',
    philosophy: 'We believe in a partnership based on transparency and concrete results. Our philosophy is simple: if you grow, we grow too. That\'s why we\'ve structured our services to be 100% aligned with your business goals.',
    servicesTitle: 'Our Advertising Campaign Management Services',
    servicesIntro: 'We offer complete and professional management of your advertising campaigns on Google and Facebook, designed to maximize your ROI (Return on Investment).',
    servicesSubtitle: 'Here\'s what our standard service includes:',
    services: [
      {
        title: 'Professional Campaign Setup',
        items: [
          'In-depth analysis of your business and your goals.',
          'Definition of the most effective campaign strategy for your target.',
          'Advanced technical configuration on Google Ads and/or Facebook Ads.',
          'One-time setup cost: €300 + VAT per channel.'
        ]
      },
      {
        title: 'Continuous Monthly Management and Optimization',
        items: [
          'Constant monitoring of campaign performance.',
          'Continuous optimization to improve results (A/B testing, bid adjustment, targeting, etc.).',
          'Creation and management of effective and relevant ads.',
          'Clear and transparent reporting on campaign performance.',
          'Monthly cost: 30% of monthly advertising spend (with a minimum fee of €300 + VAT).'
        ]
      },
      {
        title: 'Minimum Duration and Flexibility',
        items: [
          'Initial minimum duration of 3 months (advance payment). This allows us to set up and optimize campaigns to achieve significant results.',
          'Subsequently, the contract can be cancelled month by month with one month\'s notice.'
        ]
      },
      {
        title: 'Advertising Expenses Under Control',
        items: [
          'Advertising expenses for Google and Facebook are paid directly by you. This guarantees you full control of your advertising budget.'
        ]
      }
    ],
    proposalTitle: 'Our "Win-Win" Results-Based Proposal',
    proposalSubtitle: 'Want to Eliminate All Initial Risk and Focus Only on Results?',
    proposal: 'We have a unique variant that demonstrates how much we believe in our ability to generate results for you:',
    proposalHighlight: 'Choose to advertise on our optimized landing pages and we:',
    proposalPoints: [
      'We manage the payment of the advertising budget on Google and Facebook for you, which you will have previously paid. You no longer have to worry about managing invoices from Google and Facebook in Ireland.',
      'We completely eliminate campaign setup costs. We will use our active advertising account on the domain of our landing pages.'
    ],
    proposalWhy: 'Why can we offer you this?',
    proposalWhyAnswer: 'Because we are so confident in the performance of our landing pages and our management that we are willing to invest personally in your success.',
    proposalMeaning: 'What does this mean for you?',
    proposalMeaningPoints: [
      'No initial setup cost.',
      'No management of complex invoices.',
      'Maximum focus on results.'
    ],
    proposalBest: 'And the best part? Even with this option, monthly management is still tied to 30% of advertising spend, with the same minimum fee of €300 + VAT. This means that our earnings depend directly on the results we get for you.',
    proposalRenewal: 'Every month, your renewal is at risk. If you are not satisfied with the results, you are free to terminate the collaboration with one month\'s notice. This constantly pushes us to give our best for your growth.',
    whyUsTitle: 'Why Choose Us?',
    whyUsSubtitle: 'Your Online Growth Is Our Priority.',
    whyUsPoints: [
      'Proven Experience: We have years of experience in managing successful advertising campaigns for companies like yours.',
      'Personalized Approach: Every business is unique. We create tailored strategies for your specific goals.',
      'Focus on Results: We are obsessed with achieving your KPIs (Key Performance Indicators).',
      'Transparent Communication: We keep you always updated on the progress of your campaigns with clear and regular reports.',
      'Dedicated Support: You will have a team of experts at your disposal to answer all your questions and support you at every stage.'
    ],
    testimonialsTitle: 'What Our Clients Say:', // Replaced section
    testimonials: [],
    faqTitle: 'Still Have Doubts? Here Are the Answers to the Most Frequently Asked Questions:',
    faqs: [
      {
        question: 'What is the total initial cost?',
        answer: 'The initial cost is €300 + VAT per channel (Google Ads or Facebook Ads) as a one-time setup, plus the first quarter of management (minimum €900 + VAT). By choosing the "Win-Win" option, the setup cost is zeroed.'
      },
      {
        question: 'How are results monitored?',
        answer: 'We use customized dashboards and detailed weekly reports that allow you to see the progress of your campaigns in real time, focusing on the most relevant KPIs for your business.'
      },
      {
        question: 'Can I have control over advertising expenses?',
        answer: 'Absolutely yes. With the standard option, you pay the advertising platforms directly, maintaining full control. With the "Win-Win" option, we agree together on a monthly budget that will never be exceeded without your approval.'
      },
      {
        question: 'What happens after the first 3 months?',
        answer: 'After the first 3 months, the contract becomes monthly and you can decide to continue or terminate the collaboration with one month\'s notice. Most of our clients choose to continue seeing the positive results.'
      },
      {
        question: 'What are the activation times for a campaign?',
        answer: 'From project approval, we are able to activate your campaigns in 5-7 working days. This includes initial analysis, strategy, and technical configuration.'
      }
    ],
    finalCta: 'It\'s Time to Get Concrete Results with Your Advertising Campaigns!',
    finalCtaSubtitle: 'Choose the option that\'s right for you:',
    contactUs: 'Have questions? Contact us now!',
    whatsappText: 'Contact us on WhatsApp',
    callText: 'Call Us Now',
    whatsappNumber: '+393475012682',
    phoneNumber: '800 940 213'
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${content.whatsappNumber.replace(/\+/g, '')}`, '_blank');
  };

  const callPhone = () => {
    window.location.href = `tel:${content.phoneNumber.replace(/\s/g, '')}`;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {content.title}
              </motion.h1>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {content.subtitle}
              </motion.p>
              <motion.p
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {content.description}
              </motion.p>
              <motion.p
                className="text-lg font-semibold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {content.question}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {/* Removed the first button here */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openWhatsApp}
                    className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {content.whatsappText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={callPhone}
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {content.callText}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Digital Marketing Team"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-white rounded-full p-3 shadow-lg cursor-pointer"
              onClick={() => {
                const problemsSection = document.getElementById('problems');
                if (problemsSection) {
                  problemsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ChevronDown className="h-6 w-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Problems Section */}
      <div id="problems" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.problemTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.problems.map((problem, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-blue-600 mb-4">
                  {React.cloneElement(problem.icon, { className: "h-10 w-10" })}
                </div>
                <p className="text-gray-700">{problem.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-10 text-center text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.problemNote}
          </motion.p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.philosophyTitle}
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.philosophy}
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.servicesTitle}
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.servicesIntro}
          </motion.p>
          <motion.p
            className="text-center text-gray-800 max-w-3xl mx-auto mb-12 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.servicesSubtitle}
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Win-Win Proposal Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.proposalTitle}
          </motion.h2>
          <motion.h3
            className="text-2xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.proposalSubtitle}
          </motion.h3>
          <motion.p
            className="text-center text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.proposal}
          </motion.p>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg font-bold text-blue-700 mb-4">{content.proposalHighlight}</p>
            <ul className="space-y-4 mb-6">
              {content.proposalPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-gray-800 mb-2">{content.proposalWhy}</p>
            <p className="text-gray-700 mb-6">{content.proposalWhyAnswer}</p>
            <p className="font-bold text-gray-800 mb-2">{content.proposalMeaning}</p>
            <ul className="space-y-2 mb-6">
              {content.proposalMeaningPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}            </ul>
            <p className="text-gray-700 mb-4">{content.proposalBest}</p>
            <p className="text-gray-700 font-medium">{content.proposalRenewal}</p>
          </motion.div>
          {/* Removed the second button and its wrapping div here */}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.whyUsTitle}
          </motion.h2>
          <motion.h3
            className="text-2xl font-medium text-center mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.whyUsSubtitle}
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center text-gray-700"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.testimonialsTitle}
          </motion.h2>
          <TestimonialsSlider />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.faqTitle}
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {content.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.finalCta}
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.finalCtaSubtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Removed buttons in the final CTA section */}
          </motion.div>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {content.contactUs}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {content.whatsappText}: {content.whatsappNumber}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={callPhone}
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              {content.callText}: {content.phoneNumber}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsLandingPage;
