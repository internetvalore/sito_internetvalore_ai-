export interface SchemaReview {
  author: string;
  company?: string;
  rating: number;
  body: string;
  datePublished?: string;
}

export interface SchemaServiceItem {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  url: string;
  priceRange?: string;
}

export interface SchemaFAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'Internet Valore',
  legalName: 'Internet Valore S.r.l.',
  url: 'https://internetvalore.it',
  logo: 'https://internetvalore.it/logo.svg',
  image: 'https://internetvalore.it/og-image.jpg',
  telephone: '+39-800-940-213',
  email: 'info@internetvalore.it',
  vatId: 'IT09055410967',
  taxID: '09055410967',
  priceRange: '€€€',
  address: {
    streetAddress: 'Via Giovanni Battista Pergolesi 29',
    addressLocality: 'Milano',
    addressRegion: 'MI',
    postalCode: '20124',
    addressCountry: 'IT'
  },
  geo: {
    latitude: 45.4787,
    longitude: 9.2139
  },
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: [
    'Milano',
    'Monza',
    'Como',
    'Lecco',
    'Lombardia',
    'Italia',
    'Canton Ticino',
    'Svizzera'
  ],
  sameAs: [
    'https://www.linkedin.com/company/internet-valore-s.r.l./',
    'https://www.facebook.com/internetvalore/',
    'https://www.instagram.com/ecommerceleadgeneration/'
  ],
  founder: {
    name: 'Andrea Falzin',
    jobTitle: 'Founder & CEO',
    image: 'https://leprimescelte.com/wp-content/uploads/2025/02/AFimmagine.jpg',
    sameAs: [
      'https://www.linkedin.com/in/falzin/',
      'https://www.facebook.com/internetvalore/'
    ],
    description: 'Founder & CEO di Internet Valore, specialista in marketing digitale, lead generation, e-commerce e sviluppatore della suite masterAnalyzer.'
  }
};

export const VERIFIED_REVIEWS: SchemaReview[] = [
  {
    author: "Paradigma 900 S.r.l.",
    company: "Paradigma 900",
    rating: 5,
    body: "Ottimo consulente, gentile e disponibile. Super consigliato!",
    datePublished: "2024-01-15"
  },
  {
    author: "Simone Labianca",
    company: "",
    rating: 5,
    body: "Professionalità, competenza e gentilezza. Il tutto mixato con entusiasmo di chi ama quello che fa. Consigliatissimo",
    datePublished: "2024-02-10"
  },
  {
    author: "Guido Avolio",
    company: "",
    rating: 5,
    body: "Un'agenzia di valore, di nome e di fatto, che utilizza gli strumenti più attuali per realizzare gli obiettivi del cliente. Eccellente!",
    datePublished: "2024-02-28"
  },
  {
    author: "Camerette Web",
    company: "Camerette Web",
    rating: 5,
    body: "Gentilezza, competenza e disponibilità nell'accontentare il cliente in tutte le sue richieste. Andrea super Top!",
    datePublished: "2024-03-05"
  },
  {
    author: "Nicola Testa",
    company: "",
    rating: 5,
    body: "Grande professionalità e competenza.",
    datePublished: "2024-03-12"
  },
  {
    author: "Emanuela Pasolini",
    company: "",
    rating: 5,
    body: "Andrea super professionista mi ha risolto un grande problema. Sempre grazie",
    datePublished: "2024-03-20"
  },
  {
    author: "Raffaele Visconti",
    company: "",
    rating: 5,
    body: "Collaboro con Andrea da diversi anni! Specialista nel migliorare le vendite dei tuoi prodotto, servizi e le visite al tuo sito.",
    datePublished: "2024-04-02"
  },
  {
    author: "Leandro Diana",
    company: "",
    rating: 5,
    body: "Agenzia guidata dal bravissimo Andrea Falzin, talento del marketing e dell'ecommerce",
    datePublished: "2024-04-18"
  },
  {
    author: "Dott. Loredana Leonforte",
    company: "",
    rating: 5,
    body: "Professionista preparato, disponibile nel comprendere le diverse esigenze. Consigliatissimo",
    datePublished: "2024-05-10"
  },
  {
    author: "Vittorio Orefice",
    company: "",
    rating: 5,
    body: "Andrea è quel tipo di persona che vuoi aver vicino quando hai un problema tecnico. Ma va benissimo anche per dividere della buona cucina!",
    datePublished: "2024-05-22"
  },
  {
    author: "Alessandro Tettamanti",
    company: "",
    rating: 5,
    body: "Ottimo servizio.",
    datePublished: "2024-06-05"
  },
  {
    author: "Matteo Cereda",
    company: "ortodacoltivare.it",
    rating: 5,
    body: "Ho trovato in Internet Valore e in Andrea Falzin un partner affidabile e competente per la gestione delle ads. Andrea ha la capacità di ottimizzare le campagne in modo davvero eccellente, per ottenere conversioni e per ridurre il CPC. Consigliatissimo.",
    datePublished: "2024-06-18"
  },
  {
    author: "Giovanni Lugli",
    company: "Immobiliare Milano",
    rating: 5,
    body: "Andrea Falzin è una persona molto gentile, molto preparato e molto paziente, infatti è riuscito a spiegarmi con calma alcuni aspetti del web che mi erano di difficile comprensione oltre a mettere in moto gli strumenti necessari per farmi vedere e farmi contattare dai clienti.",
    datePublished: "2024-07-01"
  },
  {
    author: "Francesco Acefnors",
    company: "",
    rating: 5,
    body: "Persona seria, disponibile e competente!! Consigliatissimo",
    datePublished: "2024-07-15"
  },
  {
    author: "Stefano Cocconcelli",
    company: "",
    rating: 5,
    body: "Sono grandi professionisti al servizio della comunicazione. Preparati e professionali",
    datePublished: "2024-08-03"
  },
  {
    author: "Andrea Vandoni",
    company: "",
    rating: 5,
    body: "Ho trovato in Internet Valore disponibilità e professionalità. I servizi proposti sono molto validi e permettono di stabilire un piano di marketing strategico che porta ogni cliente ad una crescita costante.",
    datePublished: "2024-08-20"
  },
  {
    author: "Hari-Om The Yoga Home",
    company: "Hari-Om",
    rating: 5,
    body: "Internet Valore nella persona di Andrea Falzin oltre a significare grande competenza tecnica è anche disponibilità e gentilezza. Il nostro sito, in particolare sul mercato estero, è passato dall'essere totalmente sconosciuto ad avere un visibilità mondiale negli ambiti per noi interessanti.",
    datePublished: "2024-09-02"
  }
];

export const CORE_SERVICES_IT: SchemaServiceItem[] = [
  {
    id: "https://internetvalore.it/#service-lead-generation",
    name: "Lead Generation B2B Riconciliata",
    serviceType: "Lead Generation B2B",
    description: "Servizi di lead generation per acquisire contatti qualificati B2B e PMI con filtraggio preventivo bot e spam dal CRM.",
    url: "https://internetvalore.it/it/services/lead-generation",
    priceRange: "€1000 - €5000"
  },
  {
    id: "https://internetvalore.it/#service-ecommerce",
    name: "E-commerce Marketing & POAS",
    serviceType: "E-commerce Marketing",
    description: "Promozione e-commerce orientata al profitto netto reale (POAS) con riconciliazione ordini Shopify vs GA4.",
    url: "https://internetvalore.it/it/services/ecommerce",
    priceRange: "€1500 - €7000"
  },
  {
    id: "https://internetvalore.it/#service-ads",
    name: "Gestione Google Ads & Meta Ads",
    serviceType: "Ads Management",
    description: "Gestione professionale campagne Google Ads e Meta Ads con modifiche protette in staging e blocco cannibalizzazione brand.",
    url: "https://internetvalore.it/it/services/ads",
    priceRange: "€800 - €4000"
  },
  {
    id: "https://internetvalore.it/#service-analytics",
    name: "Analytics & Decomposizione LMDI",
    serviceType: "Analytics & Reporting",
    description: "Analisi dati avanzata, audit tracciamento e scomposizione algebrica LMDI delle variazioni di performance marketing.",
    url: "https://internetvalore.it/it/services/analytics",
    priceRange: "€500 - €3000"
  },
  {
    id: "https://internetvalore.it/#service-rispondi-subito",
    name: "RispondiSubito Centralino AI H24",
    serviceType: "Virtual Reception & AI Assistant",
    description: "Centralino intelligente H24 per qualificare i contatti telefonici e riconciliare le conversioni con gli algoritmi pubblicitari.",
    url: "https://internetvalore.it/it/services/rispondi-subito",
    priceRange: "€300 - €1500"
  },
  {
    id: "https://internetvalore.it/#service-landing-page",
    name: "Landing Page Professionali in 5 Giorni",
    serviceType: "Landing Page Design",
    description: "Creazione rapida di landing page ad alta conversione basate su Deep Search e copy psicologico in 5 giorni lavorativi.",
    url: "https://internetvalore.it/it/landing-page-professionali",
    priceRange: "€500 - €2000"
  },
  {
    id: "https://internetvalore.it/#service-instant-websites",
    name: "Siti Web Istantanei per Imprese in 7 Giorni",
    serviceType: "Website Development",
    description: "Siti web aziendali completi, responsive e veloci con SEO di base e assistenza tecnica continua inclusa.",
    url: "https://internetvalore.it/it/instant-websites",
    priceRange: "€1000 - €3000"
  }
];

export const CORE_SERVICES_EN: SchemaServiceItem[] = [
  {
    id: "https://internetvalore.it/#service-lead-generation-en",
    name: "CRM-Reconciled B2B Lead Generation",
    serviceType: "B2B Lead Generation",
    description: "B2B lead generation services for SMBs with CRM spam and bot filtering before feeding smart bidding algorithms.",
    url: "https://internetvalore.it/en/services/lead-generation",
    priceRange: "€1000 - €5000"
  },
  {
    id: "https://internetvalore.it/#service-ecommerce-en",
    name: "E-commerce Marketing & POAS Optimization",
    serviceType: "E-commerce Marketing",
    description: "E-commerce ad campaigns optimized for real net profit (POAS) with verified Shopify vs GA4 order reconciliation.",
    url: "https://internetvalore.it/en/services/ecommerce",
    priceRange: "€1500 - €7000"
  },
  {
    id: "https://internetvalore.it/#service-ads-en",
    name: "Google Ads & Meta Ads Management",
    serviceType: "Ads Management",
    description: "Professional advertising campaign management with staged dry-runs and brand cannibalization protection.",
    url: "https://internetvalore.it/en/services/ads",
    priceRange: "€800 - €4000"
  },
  {
    id: "https://internetvalore.it/#service-analytics-en",
    name: "Web Analytics & LMDI Decomposition",
    serviceType: "Analytics & Reporting",
    description: "Advanced analytics, tracking audit and algebraic LMDI decomposition of marketing performance shifts.",
    url: "https://internetvalore.it/en/services/analytics",
    priceRange: "€500 - €3000"
  },
  {
    id: "https://internetvalore.it/#service-rispondi-subito-en",
    name: "RispondiSubito 24/7 AI Smart Call Center",
    serviceType: "Virtual Reception & AI Assistant",
    description: "24/7 smart phone switchboard qualifying leads and reconciling phone call conversions with Google Ads bidding.",
    url: "https://internetvalore.it/en/services/rispondi-subito",
    priceRange: "€300 - €1500"
  },
  {
    id: "https://internetvalore.it/#service-landing-page-en",
    name: "High-Converting Landing Pages in 5 Days",
    serviceType: "Landing Page Design",
    description: "Rapid creation of high-converting landing pages tailored to search demand with psychological copywriting.",
    url: "https://internetvalore.it/en/landing-page-professionali",
    priceRange: "€500 - €2000"
  },
  {
    id: "https://internetvalore.it/#service-instant-websites-en",
    name: "Instant Business Websites in 7 Days",
    serviceType: "Website Development",
    description: "Turnkey business websites online in 7 business days with fast hosting, SEO and ongoing technical support.",
    url: "https://internetvalore.it/en/instant-websites",
    priceRange: "€1000 - €3000"
  }
];

export const HOMEPAGE_FAQS: SchemaFAQItem[] = [
  {
    question: "Cos'è la Lead Generation Riconciliata con il CRM?",
    answer: "È la nostra strategia avanzata di acquisizione contatti che integra il tuo CRM con masterAnalyzer. Prima di addestrare gli algoritmi di Smart Bidding di Google Ads e Meta Ads, filtriamo bot, spam e lead fasulli, ottimizzando le campagne solo sui contatti reali e qualificati."
  },
  {
    question: "Cosa significa ottimizzare sul profitto (POAS) rispetto al ROAS?",
    answer: "Il ROAS (Return on Ad Spend) misura solo il fatturato lordo generato, ignorando i margini reali, i resi e i costi aziendali. Il POAS (Profit on Ad Spend) calcola il profitto netto effettivo, garantendo che ogni euro investito in pubblicità generi un vero utile aziendale."
  },
  {
    question: "Cos'è la tecnologia proprietaria masterAnalyzer?",
    answer: "masterAnalyzer è la nostra suite software proprietaria composta da oltre 160.000 righe di codice. Riconcilia in tempo reale gli ordini e-commerce (Shopify vs GA4) ed i lead del CRM, blocca la cannibalizzazione delle ricerche brand ed esegue analisi algebriche della variazione dei dati."
  },
  {
    question: "Come funziona la consulenza gratuita iniziale?",
    answer: "La consulenza gratuita è un audit strategico in cui analizziamo le tue campagne pubblicitarie attive, la qualità del tracciamento dati ed i margini di profitto. Identifichiamo dove avvengono gli sprechi e definiamo un piano d'azione su misura per il tuo business."
  },
  {
    question: "Quali sono i tempi di attivazione ed il modello di lavoro?",
    answer: "I tempi di configurazione tecnica e pubblicazione delle campagne sono generalmente di 5-7 giorni lavorativi. Lavoriamo in outsourcing trasparente senza vincoli di lungo termine, con un modello Win-Win basato sulle performance reali."
  },
  {
    question: "Gestite campagne sia per E-commerce che per aziende B2B?",
    answer: "Sì, gestiamo campagne su Google Ads, Meta Ads e canali adiacenti sia per e-commerce che desiderano massimizzare il POAS netto, sia per aziende B2B che necessitano di un flusso costante di lead qualificati e verificati."
  }
];

export const HOMEPAGE_FAQS_EN: SchemaFAQItem[] = [
  {
    question: "What is CRM-Reconciled Lead Generation?",
    answer: "It is our advanced lead acquisition strategy integrating your CRM with masterAnalyzer. Before training Google Ads and Meta Ads Smart Bidding algorithms, we filter out bots, spam, and fake leads, optimizing campaigns exclusively on real, qualified contacts."
  },
  {
    question: "What does optimizing for profit (POAS) over ROAS mean?",
    answer: "ROAS (Return on Ad Spend) measures only gross revenue generated, ignoring real margins, returns, and business costs. POAS (Profit on Ad Spend) calculates actual net profit, ensuring every euro invested in advertising yields genuine net profit."
  },
  {
    question: "What is the proprietary masterAnalyzer technology?",
    answer: "masterAnalyzer is our proprietary software suite of over 160,000 lines of code. It reconciles e-commerce orders (Shopify vs GA4) and CRM leads in real time, blocks brand search cannibalization, and performs algebraic performance variance analysis."
  },
  {
    question: "How does the initial free consultation work?",
    answer: "The free consultation is a strategic audit where we analyze your active ad campaigns, tracking data quality, and profit margins. We identify where budget waste occurs and define a tailored action plan for your business."
  },
  {
    question: "What are the setup timelines and working model?",
    answer: "Technical setup and campaign launch timelines are typically 5-7 business days. We operate as transparent outsourced managers with no long-term trap contracts, utilizing a Win-Win model based on real performance."
  },
  {
    question: "Do you manage campaigns for both E-commerce and B2B companies?",
    answer: "Yes, we manage Google Ads, Meta Ads, and adjacent channels for both e-commerce businesses seeking net POAS maximization and B2B companies requiring a steady pipeline of qualified, verified leads."
  }
];
