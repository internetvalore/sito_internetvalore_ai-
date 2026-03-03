import React, { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import { formatSEOText } from '../../utils/seo';

const LandingPage = () => {
  const { language } = useLanguage();
  const meta = metaContent.landingPageProfessionali[language];

  // Create refs for scrolling to sections
  const processRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = language === 'it' ? {
    title: 'La Tua **Landing Page Professionale** ad **Alta Conversione** in 5 Giorni',
    description: 'Aumenta le conversioni con una **Landing Page Professionale** ottimizzata che risponde ai reali bisogni del mercato emersi tramite la **Deep Search**. Ci occupiamo di tutto noi, dal **copywriting persuasivo** alla **pubblicazione rapida** per garantirti un **vantaggio competitivo** e un alto **ROI marketing**.',
    requestQuote: 'Richiedi Preventivo',
    learnMore: 'Scopri Come Funziona',
    features: [
      '**Pubblicazione rapida** in 5 giorni',
      '**Hosting Incluso**',
      'Ottimizzata per l\'**Alta Conversione**',
      '**Analisi di Mercato** inclusa'
    ],
    processTitle: 'La Tua Landing Page in Soli 5 Giorni Lavorativi',
    processDescription: 'Non perdere tempo prezioso con sviluppatori che impiegano settimane. Il nostro processo ottimizzato ti garantisce una landing page professionale in tempi record.',
    processSteps: [
      {
        title: 'Giorno 1: Intervista e Briefing',
        description: 'Una semplice telefonata di intervista per capire il tuo business e i tuoi obiettivi. Noi genereremo tutti i contenuti necessari in base alle tue risposte.'
      },
      {
        title: 'Giorno 2-3: Design e Sviluppo',
        description: 'Creiamo la struttura e il design della tua landing page, ottimizzata per le conversioni e perfettamente responsive.'
      },
      {
        title: 'Giorno 4: Revisione e Modifiche',
        description: 'Ti presentiamo la pagina completa per la tua approvazione e apportiamo eventuali modifiche richieste.'
      },
      {
        title: 'Giorno 5: Pubblicazione',
        description: 'Mettiamo online la tua landing page, pronta a convertire i visitatori in clienti!'
      }
    ],
    startNow: 'Inizia Ora',
    discoverPrices: 'Scopri i Prezzi',
    allInclusiveTitle: 'Tutto Incluso, Senza Sorprese',
    allInclusiveDescription: 'Un servizio completo che include tutto ciò di cui hai bisogno',
    allInclusiveItems: [
      {
        title: 'Design Professionale',
        description: 'Layout moderno e accattivante, ottimizzato per massimizzare le conversioni e adattarsi perfettamente a qualsiasi dispositivo.'
      },
      {
        title: 'Hosting Incluso',
        description: 'La tua landing page sarà ospitata su un server di terzo livello (es. tuonome.leprimescelte.com). Servizio hosting incluso.'
      },
      {
        title: 'Prestazioni Ottimizzate',
        description: 'Tempi di caricamento rapidissimi e implementazione SEO di base per migliorare il posizionamento sui motori di ricerca.'
      },
      {
        title: 'Responsive Design',
        description: 'Visualizzazione perfetta su tutti i dispositivi (desktop, tablet e smartphone) per non perdere nessun potenziale cliente.'
      },
      {
        title: 'Analytics Integrato',
        description: 'Monitoraggio delle visite e delle conversioni con Google Analytics, per tenere traccia delle performance della landing page.'
      },
      {
        title: 'Certificato SSL',
        description: 'Connessione sicura con certificato SSL incluso, per garantire la massima sicurezza dei tuoi visitatori e migliorare il posizionamento SEO.'
      }
    ],
    readyInFiveDays: 'Tutto questo in soli 5 giorni lavorativi!',
    simplicityTitle: 'Gestione Semplice e Senza Stress',
    simplicityDescription: 'Ci occupiamo di tutti gli aspetti tecnici, tu dovrai solo sostenere una telefonata di intervista e noi genereremo tutti i contenuti necessari in base alle tue risposte.',
    noTechnicalSkillsRequired: 'Nessuna competenza tecnica richiesta',
    updatesIncludedTitle: 'Aggiornamenti Inclusi',
    updatesIncludedItems: [
      'Modifiche di testi, immagini e contenuti incluse nel canone mensile, senza costi aggiuntivi.',
      'La tua landing page sarà ospitata su un dominio di terzo livello (es. tuonome.leprimescelte.com /es. tuomarchio.leprimescelte.com). Non dovrai preoccuparti di rinnovi o configurazioni tecniche.',
      'Backup regolari, aggiornamenti di sicurezza e monitoraggio costante per prevenire problemi.',
      'Assistenza rapida via email o WhatsApp per qualsiasi necessità e richiesta di modifica.'
    ],
    designedToConvertTitle: 'Progettata per Convertire',
    designedToConvertDescription: 'Ogni elemento della tua landing page è ottimizzato per trasformare i visitatori in clienti.',
    conversionItems: [
      {
        title: 'Messaggi Mirati',
        description: 'Contenuti creati su misura per il tuo pubblico target, basati sulle informazioni raccolte durante l\'intervista telefonica iniziale.'
      },
      {
        title: 'Design Persuasivo',
        description: 'Layout studiato per guidare l\'utente verso l\'azione desiderata, con elementi visivi che catturano l\'attenzione.'
      },
      {
        title: 'Velocità Ottimizzata',
        description: 'Tempi di caricamento rapidissimi per ridurre l\'abbandono e migliorare l\'esperienza utente.'
      },
      {
        title: 'Perfetta su Mobile',
        description: 'Esperienza impeccabile su smartphone e tablet, dove avviene la maggior parte delle conversioni.'
      },
      {
        title: 'Analisi e Ottimizzazione',
        description: 'Monitoraggio costante della performance per migliorare continuamente i risultati.'
      }
    ],
    pricingTitle: 'TRY ADS / TRE MESI / UN ANNO',
    pricingOptions: [
      {
        title: 'TRY ADS',
        price: '€1000 + IVA',
        features: [
          'Creazione della pagina',
          'Impostazione campagne pubblicitarie',
          '€700 in spazi pubblicitari (Google Ads e FB Ads)',
          'Pagina live per 2 mesi',
          'Mostra i risultati'
        ],
        buttonText: 'Scegli TRY ADS'
      },
      {
        title: 'TRE MESI',
        price: '€400 + IVA',
        features: [
          'Creazione e mantenimento della pagina',
          'Periodo di 3 mesi'
        ],
        buttonText: 'Scegli TRE MESI'
      },
      {
        title: 'UN ANNO',
        price: '€1000 + IVA',
        features: [
          'Creazione e mantenimento della pagina',
          'Pagina attiva per un anno'
        ],
        buttonText: 'Scegli UN ANNO'
      }
    ],
    rechargeTitle: 'Ricarica Pubblicitaria',
    rechargeItems: [
      'Disponibile in multipli di 500 € + IVA',
      '70% destinati agli spazi pubblicitari',
      '30% alla gestione',
      'Nessuna fee di impostazione',
      'Nessun minimo mensile',
      'Il ritmo è deciso dal cliente'
    ],
    rechargeButtonText: 'Richiedi Ricarica',
    contactUsNow: 'Contattaci Ora',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Scrivici subito per una risposta immediata',
    callUs: 'Telefono',
    callUsNow: 'Chiama Ora'
  } : {
    title: 'Your Professional Deep Search-Based Landing Page in 5 Business Days',
    description: 'Increase conversions with an optimized landing page that responds to real market needs uncovered through AI. We take care of everything, from content creation to publication.',
    requestQuote: 'Request a Quote',
    learnMore: 'Learn More',
    features: [
      'Ready in 5 business days',
      'Hosting Included',
      'Optimized for conversions',
      'Content created for you'
    ],
    processTitle: 'Your Landing Page in Just 5 Business Days',
    processDescription: 'Don\'t waste valuable time with developers who take weeks. Our optimized process guarantees you a professional landing page in record time.',
    processSteps: [
      {
        title: 'Day 1: Interview and Briefing',
        description: 'A simple interview call to understand your business and your goals. We will generate all the necessary content based on your answers.'
      },
      {
        title: 'Day 2-3: Design and Development',
        description: 'We create the structure and design of your landing page, optimized for conversions and perfectly responsive.'
      },
      {
        title: 'Day 4: Review and Modifications',
        description: 'We present the complete page for your approval and make any requested changes.'
      },
      {
        title: 'Day 5: Publication',
        description: 'We put your landing page online, ready to convert visitors into customers!'
      }
    ],
    startNow: 'Start Now',
    discoverPrices: 'Discover Prices',
    allInclusiveTitle: 'All Inclusive, No Surprises',
    allInclusiveDescription: 'A complete service that includes everything you need',
    allInclusiveItems: [
      {
        title: 'Professional Design',
        description: 'Modern and captivating layout, optimized to maximize conversions and perfectly adapt to any device.'
      },
      {
        title: 'Hosting Included',
        description: 'Your landing page will be hosted on a third-level server (e.g. yourname.leprimescelte.com). Hosting service included.'
      },
      {
        title: 'Optimized Performance',
        description: 'Very fast loading times and basic SEO implementation to improve positioning on search engines.'
      },
      {
        title: 'Responsive Design',
        description: 'Perfect display on all devices (desktop, tablet and smartphone) to avoid losing any potential customer.'
      },
      {
        title: 'Integrated Analytics',
        description: 'Monitoring of visits and conversions with Google Analytics, to track the performance of the landing page.'
      },
      {
        title: 'SSL Certificate',
        description: 'Secure connection with included SSL certificate, to guarantee maximum security for your visitors and improve SEO positioning.'
      }
    ],
    readyInFiveDays: 'All this in just 5 business days!',
    simplicityTitle: 'Simple and Stress-Free Management',
    simplicityDescription: 'We take care of all the technical aspects, you only have to support an interview call and we will generate all the necessary content based on your answers.',
    noTechnicalSkillsRequired: 'No technical skills required',
    updatesIncludedTitle: 'Updates Included',
    updatesIncludedItems: [
      'Changes to texts, images and content included in the monthly fee, without additional costs.',
      'Your landing page will be hosted on a third-level domain (e.g. yourname.leprimescelte.com / e.g. yourbrand.leprimescelte.com). You won\'t have to worry about renewals or technical configurations.',
      'Regular backups, security updates and constant monitoring to prevent problems.',
      'Quick assistance via email or WhatsApp for any need and modification request.'
    ],
    designedToConvertTitle: 'Designed to Convert',
    designedToConvertDescription: 'Every element of your landing page is optimized to transform visitors into customers.',
    conversionItems: [
      {
        title: 'Targeted Messages',
        description: 'Content created specifically for your target audience, based on the information gathered during the initial telephone interview.'
      },
      {
        title: 'Persuasive Design',
        description: 'Layout designed to guide the user towards the desired action, with visual elements that capture attention.'
      },
      {
        title: 'Optimized Speed',
        description: 'Very fast loading times to reduce abandonment and improve user experience.'
      },
      {
        title: 'Perfect on Mobile',
        description: 'Impeccable experience on smartphones and tablets, where most conversions take place.'
      },
      {
        title: 'Analysis and Optimization',
        description: 'Constant monitoring of performance to continuously improve results.'
      }
    ],
    pricingTitle: 'TRY ADS / THREE MONTHS / ONE YEAR',
    pricingOptions: [
      {
        title: 'TRY ADS',
        price: '€1000 + VAT',
        features: [
          'Page creation',
          'Advertising campaign setup',
          '€700 in advertising space (Google Ads and FB Ads)',
          'Page live for 2 months',
          'Show results'
        ],
        buttonText: 'Choose TRY ADS'
      },
      {
        title: 'THREE MONTHS',
        price: '€400 + VAT',
        features: [
          'Page creation and maintenance',
          '3 month period'
        ],
        buttonText: 'Choose THREE MONTHS'
      },
      {
        title: 'ONE YEAR',
        price: '€1000 + VAT',
        features: [
          'Page creation and maintenance',
          'Page active for one year'
        ],
        buttonText: 'Choose ONE YEAR'
      }
    ],
    rechargeTitle: 'Advertising Recharge',
    rechargeItems: [
      'Available in multiples of €500 + VAT',
      '70% allocated to advertising space',
      '30% for management',
      'No setup fee',
      'No monthly minimum',
      'The pace is decided by the customer'
    ],
    rechargeButtonText: 'Request Recharge',
    contactUsNow: 'Contact Us Now',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Write to us now for an immediate response',
    callUs: 'Phone',
    callUsNow: 'Call Now'
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 landing-page-container">
      <MetaTags
        title={meta.title}
        description={meta.description}
        path={meta.path}
      />
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 landing-page-header relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: formatSEOText(content.title) }} />
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: formatSEOText(content.description) }} />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {content.requestQuote}
            </button>
            <button
              onClick={() => scrollToSection(processRef)}
              className="bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg border border-blue-400"
            >
              {content.learnMore}
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 landing-page-features">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-center bg-blue-700 bg-opacity-30 px-6 py-3 rounded-full">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                <span className="text-blue-100 font-medium" dangerouslySetInnerHTML={{ __html: formatSEOText(feature) }} />
              </div>
            ))}
          </div>
        </div>
      </header>

      <section ref={processRef} className="py-24 landing-page-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.processTitle) }} />
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: formatSEOText(content.processDescription) }} />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 landing-page-process-steps">
            {content.processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(step.title) }} />
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: formatSEOText(step.description) }} />
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {content.startNow}
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {content.discoverPrices}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-24 landing-page-section landing-page-all-inclusive">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.allInclusiveTitle) }} />
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: formatSEOText(content.allInclusiveDescription) }} />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.allInclusiveItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500 flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  {getIconForItem(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(item.title) }} />
                <p className="text-gray-600 flex-grow" dangerouslySetInnerHTML={{ __html: formatSEOText(item.description) }} />
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl text-blue-600 font-bold bg-blue-50 py-4 px-8 rounded-full inline-block shadow-md">{content.readyInFiveDays}</p>
        </div>
      </section>

      <section className="py-24 landing-page-section bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.simplicityTitle) }} />
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: formatSEOText(content.simplicityDescription) }} />
          <div className="mt-12 bg-blue-50 py-6 px-8 rounded-xl inline-block">
            <p className="text-xl text-blue-600 font-bold">{content.noTechnicalSkillsRequired}</p>
          </div>
          <div className="mt-16 flex justify-center">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Simple management" className="rounded-xl shadow-xl max-w-full h-auto" style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-24 landing-page-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">{content.updatesIncludedTitle}</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ul className="mt-8 space-y-6 list-none">
              {content.updatesIncludedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">✓</div>
                  <p className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: formatSEOText(item) }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 landing-page-section bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.designedToConvertTitle) }} />
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: formatSEOText(content.designedToConvertDescription) }} />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.conversionItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  {getConversionIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(item.title) }} />
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: formatSEOText(item.description) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={pricingRef} className="py-24 landing-page-section bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">{content.pricingTitle}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pricingOptions.map((option, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-8 ${index === 1 ? 'border-blue-600 transform scale-105' : 'border-blue-400'}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{option.title}</h3>
                <p className="text-3xl font-extrabold text-blue-600 mb-6">{option.price}</p>
                <ul className="space-y-4 mb-8 text-left">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className={`w-full ${index === 1 ? 'bg-blue-600' : 'bg-blue-500'} text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                >
                  {option.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 landing-page-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">{content.rechargeTitle}</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <ul className="space-y-4 text-left">
              {content.rechargeItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {content.rechargeButtonText}
            </button>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 landing-page-section landing-page-contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">{content.contactUsNow}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a href={`https://wa.me/${'+39 347 5012682'}`} className="flex items-center bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-300 text-lg">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712..227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24 24M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.647 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.476-8.414z" />
              </svg>
              {content.whatsappMessage}
            </a>
            <a href={`tel:${'800 940 213'}`} className="flex items-center bg-blue-900 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-950 transform hover:-translate-y-1 transition-all duration-300 text-lg">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
              </svg>
              {content.callUsNow}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get icons for all-inclusive items
function getIconForItem(index: number) {
  const icons = ['🎨', '🌐', '⚡', '📱', '📊', '🔒'];
  return icons[index % icons.length];
}

// Helper function to get icons for conversion items
function getConversionIcon(index: number) {
  const icons = ['🎯', '🧲', '🚀', '📱', '📈'];
  return icons[index % icons.length];
}

export default LandingPage;
