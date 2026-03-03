import { Bot, Cpu, Zap, Brain, LayoutDashboard, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';
import { formatSEOText } from '../../utils/seo';

export default function AIAgentsMilano() {
    const { language } = useLanguage();
    const meta = (metaContent as any).aiAgentsMilano[language];

    const content = language === 'it' ? {
        title: 'Sviluppo Agenti AI Milano',
        subtitle: "L'evoluzione dell'automazione per le imprese",
        description: "Nel cuore dell'ecosistema **Milano innovazione**, lo **Sviluppo agenti AI Milano** rappresenta la nuova frontiera per le aziende che puntano a una **Digital Transformation** concreta. Non parliamo più di semplici **assistenti virtuali**, ma di soluzioni di **Agentic AI** capaci di agire autonomamente all'interno di **workflow operativi** complessi.",
        intro: "Affidarsi a una **consulenza AI** specializzata a Milano significa oggi trasformare i propri processi operativi integrando tecnologie di **machine learning** e **modelli LLM** che ridefiniscono il concetto stesso di **produttività**.",
        whyMilano: {
            title: "Perché scegliere lo sviluppo di agenti AI a Milano",
            description: "Milano si conferma il polo principale per l'innovazione in Italia. Una **software house** di alto livello in questa metropoli progetta soluzioni su misura per l'**efficienza aziendale**.",
            features: [
                {
                    title: "Analizzare dati in tempo reale",
                    description: "Monitoraggio costante e analisi istantanea dei flussi informativi aziendali.",
                    icon: BarChart3
                },
                {
                    title: "Prendere decisioni di business",
                    description: "Decisioni strategiche basate su obiettivi e dati storici.",
                    icon: Brain
                },
                {
                    title: "Eseguire task complessi",
                    description: "Operatività autonoma senza necessità di supervisione costante.",
                    icon: Zap
                }
            ]
        },
        importance: {
            title: "L'importanza dell'Agentic AI nell'ecosistema milanese",
            description: "In un mercato competitivo, l'**automazione processi** è una necessità. Gli agenti AI agiscono come collaboratori digitali attraverso una profonda **integrazione sistemi** (CRM, ERP, database)."
        },
        applications: {
            title: "Applicazioni pratiche e vantaggi per il business",
            description: "Lo sviluppo di agenti verticali garantisce risultati tangibili in svariati settori industriali e di servizi.",
            items: [
                {
                    title: "Automazione e gestione dei dati",
                    description: "Gli agenti AI estraggono informazioni e sintetizzano report, riducendo errori umani e tempi morti.",
                    icon: LayoutDashboard
                },
                {
                    title: "Customer Service e Operatività 24/7",
                    description: "Il servizio clienti evolve: l'agente può avviare procedure e prenotare appuntamenti direttamente sui software aziendali.",
                    icon: Bot
                }
            ]
        },
        process: {
            title: "Come avviene lo sviluppo di un Agente AI professionale",
            steps: [
                {
                    title: "Analisi dei requisiti",
                    description: "Identificazione dei task che l'agente dovrà svolgere."
                },
                {
                    title: "Scelta del modello",
                    description: "Selezione del miglior LLM (GPT-4, Claude, Llama 3) in base a privacy e potenza."
                },
                {
                    title: "Addestramento e Fine-tuning",
                    description: "Personalizzazione del modello con i dati specifici dell'azienda cliente."
                },
                {
                    title: "Integrazione e Testing",
                    description: "Connessione con gli strumenti digitali e test di affidabilità."
                }
            ]
        },
        future: {
            title: "Il futuro dell'Intelligenza Artificiale a Milano",
            description: "Guardando al 2026, lo sviluppo si sposterà sempre più verso **sistemi multi-agente**, dove diverse entità AI collaborano tra loro per risolvere problemi multi-dominio. Milano è il terreno fertile ideale per queste sperimentazioni. Investire oggi significa assicurarsi una posizione di leadership nel mercato di domani."
        },
        cta: {
            title: "Pronto a innovare con l'Agentic AI?",
            description: "Trasforma i tuoi processi aziendali con agenti AI intelligenti e autonomi.",
            button: "Richiedi una Consulenza AI"
        }
    } : {
        title: 'AI Agent Development Milan',
        subtitle: 'The evolution of automation for business',
        description: "In Italy's technological heart, AI Agent Development Milan represents the new frontier for companies aiming for concrete, results-oriented Digital Transformation. We're no longer talking about simple text assistants, but agentic Artificial Intelligence systems capable of acting autonomously within complex operational workflows.",
        intro: "Relying on specialized AI Consulting in Milan today means transforming your internal processes from reactive to proactive, integrating Agentic AI technologies that redefine the very concept of productivity.",
        whyMilano: {
            title: "Why choose AI agent development in Milan",
            description: "Milan confirms itself as the main hub for innovation in Italy. A high-level software house in this metropolis doesn't just provide code, but designs tailor-made solutions integrating the best of Machine Learning and the latest LLMs.",
            features: [
                {
                    title: "Real-time data analysis",
                    description: "Constant monitoring and instant analysis of company information flows.",
                    icon: BarChart3
                },
                {
                    title: "Business decision making",
                    description: "Decisions based on data and predefined strategic goals.",
                    icon: Brain
                },
                {
                    title: "Execute complex tasks",
                    description: "Autonomous operations without the need for constant supervision.",
                    icon: Zap
                }
            ]
        },
        importance: {
            title: "The importance of Agentic AI in the Milanese ecosystem",
            description: "Milanese companies operate in a highly competitive global market. In this scenario, process automation is no longer a luxury, but a necessity to maintain competitiveness. AI agents act as true digital collaborators, capable of interfacing with existing infrastructure through deep systems integration (CRM, ERP, proprietary databases).",
        },
        applications: {
            title: "Practical applications and business advantages",
            description: "The development of vertical agents finds application in various sectors, from manufacturing to finance and professional services. The primary goal remains business efficiency.",
            items: [
                {
                    title: "Data automation and management",
                    description: "AI agents can act as an intelligent interface for thousands of documents, extracting information, synthesizing reports, and suggesting actions based on historical evidence.",
                    icon: LayoutDashboard
                },
                {
                    title: "Customer Service and 24/7 Operations",
                    description: "Customer service evolves into a problem-solving center. The agent doesn't just 'talk' to the user; it can start return procedures, check shipping status, or book appointments directly in company software.",
                    icon: Bot
                }
            ]
        },
        process: {
            title: "How professional AI Agent development happens",
            steps: [
                {
                    title: "Requirements Analysis",
                    description: "Identification of the tasks the agent will need to perform."
                },
                {
                    title: "Model Selection",
                    description: "Selecting the best LLM (GPT-4, Claude, Llama 3) based on privacy and power needs."
                },
                {
                    title: "Training and Fine-tuning",
                    description: "Customizing the model with specific customer data."
                },
                {
                    title: "Integration and Testing",
                    description: "Connecting with digital tools and reliability testing."
                }
            ]
        },
        future: {
            title: "The future of Artificial Intelligence in Milan",
            description: "Looking towards 2026, development will increasingly move towards multi-agent systems, where different AI entities collaborate to solve multi-domain problems. Milan is the ideal fertile ground for these experiments, thanks to a network of cutting-edge professionals and infrastructures. Investing in AI agent development today means securing a leadership position in tomorrow's market."
        },
        cta: {
            title: "Ready to innovate with Agentic AI?",
            description: "Transform your business processes with intelligent and autonomous AI agents.",
            button: "Request AI Consultation"
        }
    };

    return (
        <>
            <MetaTags
                title={meta.title}
                description={meta.description}
                path={language === 'it' ? "/services/sviluppo-agenti-ai-milano" : "/services/ai-agent-development-milan"}
            />
            <div className="bg-white text-gray-900">
                <HeroSection
                    title={content.title}
                    subtitle={content.subtitle}
                    description={content.description}
                    imageSrc="/images/ai_agents_milano_hero.png"
                />

                {/* Intro Section */}
                <section className="py-16 bg-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl text-blue-900 font-medium leading-relaxed italic" dangerouslySetInnerHTML={{ __html: formatSEOText(content.intro) }} />
                        </div>
                    </div>
                </section>

                {/* Why Milano Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{ __html: formatSEOText(content.whyMilano.title) }} />
                            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: formatSEOText(content.whyMilano.description) }} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {content.whyMilano.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Importance Section */}
                <section className="py-20 bg-gray-900 text-white overflow-hidden relative border-y border-gray-800">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-extrabold sm:text-4xl mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.importance.title) }} />
                                <p className="text-xl text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatSEOText(content.importance.description) }} />
                                <div className="mt-8 flex flex-wrap gap-4">
                                    {['CRM', 'ERP', 'Database', 'Cloud AI'].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-full text-blue-200 text-sm font-semibold">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12 lg:mt-0 lg:w-5/12">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30 animate-pulse"></div>
                                    <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                                                <Bot className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
                                            <div className="h-3 w-full bg-gray-700 rounded"></div>
                                            <div className="h-3 w-4/5 bg-gray-700 rounded"></div>
                                            <div className="flex justify-between pt-4">
                                                <div className="h-8 w-24 bg-blue-600/20 rounded border border-blue-600/30"></div>
                                                <div className="h-8 w-32 bg-cyan-600/20 rounded border border-cyan-600/30"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{ __html: formatSEOText(content.applications.title) }} />
                            <p className="mt-4 text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: formatSEOText(content.applications.description) }} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {content.applications.items.map((item, index) => (
                                <div key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={index === 0 ? "/images/data_management_ai.png" : "/images/ai_customer_service.png"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-300" />
                                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(item.title) }} />
                                        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatSEOText(item.description) }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16" dangerouslySetInnerHTML={{ __html: formatSEOText(content.process.title) }} />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {content.process.steps.map((step, index) => (
                                <div key={index} className="relative">
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-100 -z-10" />
                                    )}
                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-blue-200 mb-6">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 text-center mb-2" dangerouslySetInnerHTML={{ __html: formatSEOText(step.title) }} />
                                        <p className="text-gray-600 text-center text-sm" dangerouslySetInnerHTML={{ __html: formatSEOText(step.description) }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Future Section */}
                <section className="py-20 bg-blue-900 text-white rounded-t-[4rem] relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/milan_ai_future.png"
                            alt="Milan AI Future"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-900/80 to-blue-900" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <Cpu className="w-16 h-16 text-blue-400 mx-auto mb-8 animate-spin-slow" />
                        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8" dangerouslySetInnerHTML={{ __html: formatSEOText(content.future.title) }} />
                        <p className="text-xl text-blue-100 leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: formatSEOText(content.future.description) }} />
                        <div className="grid grid-cols-3 gap-8 border-t border-blue-800 pt-12">
                            <div>
                                <div className="text-4xl font-bold text-blue-400 mb-2">2026</div>
                                <div className="text-sm text-blue-200 uppercase tracking-widest">Next-Gen AI</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-400 mb-2">Multi</div>
                                <div className="text-sm text-blue-200 uppercase tracking-widest">Agent Systems</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-400 mb-2">Milano</div>
                                <div className="text-sm text-blue-200 uppercase tracking-widest">Innovation Hub</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 relative z-10" dangerouslySetInnerHTML={{ __html: formatSEOText(content.cta.title) }} />
                            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10" dangerouslySetInnerHTML={{ __html: formatSEOText(content.cta.description) }} />
                            <Link
                                to={`/${language}/contact`}
                                className="inline-flex items-center px-10 py-5 bg-white text-blue-700 text-lg font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl relative z-10"
                            >
                                {content.cta.button}
                                <ArrowRight className="ml-3 w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
