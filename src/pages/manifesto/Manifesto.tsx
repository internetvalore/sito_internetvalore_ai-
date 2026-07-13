import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import { videoList } from './videoData';
import { 
  Eye, DollarSign, HelpCircle, ShieldCheck, ShoppingBag, 
  Search, Palette, Zap, ArrowRight, PlayCircle
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const themeIcons: Record<string, any> = {
  "Gli occhi prima delle gambe": Eye,
  "I soldi veri": DollarSign,
  "Il perché, non le scuse": HelpCircle,
  "Prove, non promesse": ShieldCheck,
  "Tu firmi, noi rispondiamo": ShieldCheck,
  "Dentro la vetrina": ShoppingBag,
  "La domanda che non vedi": Search,
  "Creatività col giudice severo": Palette,
  "Dal giorno zero al mondo": Zap
};

export default function Manifesto() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Group videos by theme
  const themes = Array.from(new Set(videoList.map(v => v.theme)));

  const metaKey = 'manifesto';
  const currentMeta = metaContent[language]?.[metaKey] || {
    title: isIt ? 'Manifesto & Video-Spot | Internet Valore' : 'Manifesto & Video-Spot | Internet Valore',
    description: isIt ? 'Scopri il manifesto di Internet Valore e la nostra collana di 35 video-spot sulle capacità della nostra suite.' : 'Discover the Internet Valore manifesto and our series of 35 video-spots on the capabilities of our suite.'
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <MetaTags 
        title={currentMeta.title}
        description={currentMeta.description}
        path="/manifesto"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 border border-blue-500/30"
          >
            {isIt ? 'IL MANIFESTO DI METODO' : 'OUR METHOD MANIFESTO'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            {isIt ? 'Prima gli occhi, poi le gambe' : 'Eyes first, then legs'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            {isIt 
              ? 'La misura viene prima delle decisioni. 35 risposte concrete alle inefficienze più comuni delle campagne digitali, raccontate una capacità alla volta.'
              : 'Measurement comes before decisions. 35 concrete answers to the most common inefficiencies in digital campaigns, explained one capability at a time.'}
          </motion.p>
        </div>
      </section>

      {/* Manifesto Text */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">
            {isIt ? 'La nostra promessa di metodo' : 'Our promise of method'}
          </motion.h2>

          <div className="space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            <motion.p variants={fadeInUp}>
              {isIt 
                ? "C'è un momento che ogni imprenditore conosce: guardi i report della pubblicità e i numeri non tornano. Una piattaforma dice una cosa, l'altra ne dice un'altra, e in mezzo ci sono i tuoi soldi. Questa sezione raccoglie la nostra promessa di metodo, e da qui puoi accedere alla spiegazione di ciascuna delle 35 capacità della nostra suite."
                : "There is a moment that every business owner knows: you look at the advertising reports and the numbers do not add up. One platform says one thing, another says another, and your money is in the middle. This section collects our promise of method, and from here you can access the explanation of each of the 35 capabilities of our suite."}
            </motion.p>

            {/* The 5 Pillars */}
            <div className="grid gap-6 mt-12">
              <motion.div variants={fadeInUp} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{isIt ? 'La misura prima delle decisioni' : 'Measurement before decisions'}</h3>
                  <p className="text-slate-600 text-sm">
                    {isIt 
                      ? 'Prima di giudicare una campagna o decidere un budget, verifichiamo che i dati su cui stiamo decidendo siano sani. Ripariamo la vista prima di muovere i capitali.'
                      : 'Before judging a campaign or deciding on a budget, we verify that the data we are deciding on is healthy. We repair our sight before moving capital.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{isIt ? 'Parliamo di soldi veri' : 'We talk about real money'}</h3>
                  <p className="text-slate-600 text-sm">
                    {isIt 
                      ? 'Il fatturato lordo non paga gli stipendi, li paga il margine reale. Analizziamo profitto vero, resi e rimborsi inclusi, escludendo le metriche di pura vanità.'
                      : 'Gross turnover does not pay salaries, real margin does. We analyze true profit, returns and refunds included, excluding pure vanity metrics.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{isIt ? 'Spiegazioni matematiche, non scuse' : 'Mathematical explanations, not excuses'}</h3>
                  <p className="text-slate-600 text-sm">
                    {isIt 
                      ? 'Se le vendite calano, scomponiamo l’effetto matematicamente: quanto pesa il traffico, quanto lo scontrino medio, quanto il prezzo del catalogo, senza alzate di spalle.'
                      : 'If sales drop, we break down the effect mathematically: how much traffic weighs, how much the average receipt, how much the catalog price, without excuses.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xl">4</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{isIt ? 'Prove incrementali, non promesse' : 'Incremental proofs, not promises'}</h3>
                  <p className="text-slate-600 text-sm">
                    {isIt 
                      ? 'Misuriamo il valore effettivo della pubblicità anche senza cookie tramite esperimenti geografici controllati (controfattuali) e modelli econometrici trasparenti.'
                      : 'We measure the actual value of advertising even without cookies through controlled geographic experiments (counterfactuals) and transparent econometric models.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xl">5</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{isIt ? 'Niente si muove senza la tua firma' : 'Nothing moves without your signature'}</h3>
                  <p className="text-slate-600 text-sm">
                    {isIt 
                      ? 'Ogni manovra viene preparata in staging e richiede la tua validazione. Le campagne nascono sempre in pausa e non ci sono modifiche a sorpresa.'
                      : 'Every maneuver is prepared in staging and requires your validation. Campaigns always start in pause, and there are no surprise edits.'}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.p variants={fadeInUp} className="mt-8 pt-6 border-t text-slate-600 text-sm italic">
              {isIt 
                ? "Ogni scheda video qui sotto racconta una capacità in meno di due minuti: il dolore che conosci, la soluzione della suite, e una domanda-firma da fare alla tua agenzia per verificare se sanno operare a questo livello."
                : "Each video tab below explains a capability in less than two minutes: the pain you know, the suite's solution, and a signature question to ask your agency to verify if they can operate at this level."}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Video Collection Index */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">
          {isIt ? 'L’Indice delle 35 Capacità della Suite' : 'Index of the 35 Suite Capabilities'}
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          {isIt 
            ? 'Seleziona un tema per esplorare i video-spot, le schede di copywriting PAR (Pain-Agitate-Relief) ed i materiali di inbound.'
            : 'Select a theme to explore the video-spots, the PAR (Pain-Agitate-Relief) copywriting sheets, and the inbound materials.'}
        </p>

        <div className="space-y-12">
          {themes.map((themeName, themeIdx) => {
            const IconComponent = themeIcons[themeName] || HelpCircle;
            const themeVideos = videoList.filter(v => v.theme === themeName);

            return (
              <motion.div 
                key={themeName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: themeIdx * 0.05 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="bg-slate-900 text-white p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                      {isIt ? `TEMA ${themeIdx + 1}` : `THEME ${themeIdx + 1}`}
                    </span>
                    <h3 className="text-xl font-bold">{isIt ? themeName : themeName}</h3>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {themeVideos.map((video) => (
                    <Link 
                      key={video.id}
                      to={`/${language}/video/${video.id}`}
                      className="group flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <div>
                          <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            <span className="font-semibold">{isIt ? 'Pain SEO: ' : 'SEO Pain: '}</span>
                            {video.seoPain}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>{isIt ? 'Leggi la scheda' : 'View sheet'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
