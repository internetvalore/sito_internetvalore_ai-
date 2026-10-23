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
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, transitionChildren: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
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

  const currentMeta = metaContent.manifesto[language];

  return (
    <div className="section-quiet min-h-screen font-sans pt-24 pb-16">
      <MetaTags 
        title={currentMeta.title}
        description={currentMeta.description}
        path="/manifesto"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Manifesto' : 'Manifesto', path: '/manifesto' }
        ]}
      />

      {/* Hero Section */}
      <section className="section hero-premium relative text-center border-b border-line">
        <div className="shell relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow inline-block mb-6"
          >
            {isIt ? 'IL MANIFESTO DI METODO' : 'OUR METHOD MANIFESTO'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="title-xl hero-title mb-6 text-ink-900"
          >
            {isIt ? 'Prima gli occhi, poi le gambe' : 'Eyes first, then legs'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-ink-600"
          >
            {isIt 
              ? 'La misura viene prima delle decisioni. 35 risposte concrete alle inefficienze più comuni delle campagne digitali, raccontate una capacità alla volta.'
              : 'Measurement comes before decisions. 35 concrete answers to the most common inefficiencies in digital campaigns, explained one capability at a time.'}
          </motion.p>
        </div>
      </section>

      {/* Manifesto Text */}
      <section className="shell section">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="card"
        >
          <motion.h2 variants={fadeInUp} className="title-xl mb-8 border-b border-line pb-4">
            {isIt ? 'La nostra promessa di metodo' : 'Our promise of method'}
          </motion.h2>

          <div className="space-y-6 text-ink-600 leading-relaxed text-[0.95rem]">
            <motion.p variants={fadeInUp}>
              {isIt 
                ? "C'è un momento che ogni imprenditore conosce: guardi i report della pubblicità e i numeri non tornano. Una piattaforma dice una cosa, l'altra ne dice un'altra, e in mezzo ci sono i tuoi soldi. Questa sezione raccoglie la nostra promessa di metodo, e da qui puoi accedere alla spiegazione di ciascuna delle 35 capacità della nostra suite."
                : "There is a moment that every business owner knows: you look at the advertising reports and the numbers do not add up. One platform says one thing, another says another, and your money is in the middle. This section collects our promise of method, and from here you can access the explanation of each of the 35 capabilities of our suite."}
            </motion.p>

            {/* The 5 Pillars */}
            <div className="grid gap-4 mt-10">
              <motion.div variants={fadeInUp} className="card card-quiet flex gap-4">
                <div className="icon-tile shrink-0">1</div>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-1">{isIt ? 'La misura prima delle decisioni' : 'Measurement before decisions'}</h3>
                  <p className="text-sm text-ink-600">
                    {isIt 
                      ? 'Prima di giudicare una campagna o decidere un budget, verifichiamo che i dati su cui stiamo decidendo siano sani. Ripariamo la vista prima di muovere i capitali.'
                      : 'Before judging a campaign or deciding on a budget, we verify that the data we are deciding on is healthy. We repair our sight before moving capital.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card card-quiet flex gap-4">
                <div className="icon-tile shrink-0">2</div>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-1">{isIt ? 'Parliamo di soldi veri' : 'We talk about real money'}</h3>
                  <p className="text-sm text-ink-600">
                    {isIt 
                      ? 'Il fatturato lordo non paga gli stipendi, li paga il margine reale. Analizziamo profitto vero, resi e rimborsi inclusi, escludendo le metriche di pura vanità.'
                      : 'Gross turnover does not pay salaries, real margin does. We analyze true profit, returns and refunds included, excluding pure vanity metrics.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card card-quiet flex gap-4">
                <div className="icon-tile shrink-0">3</div>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-1">{isIt ? 'Spiegazioni matematiche, non scuse' : 'Mathematical explanations, not excuses'}</h3>
                  <p className="text-sm text-ink-600">
                    {isIt 
                      ? 'Se le vendite calano, scomponiamo l’effetto matematicamente: quanto pesa il traffico, quanto lo scontrino medio, quanto il prezzo del catalogo, senza alzate di spalle.'
                      : 'If sales drop, we break down the effect mathematically: how much traffic weighs, how much the average receipt, how much the catalog price, without excuses.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card card-quiet flex gap-4">
                <div className="icon-tile shrink-0">4</div>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-1">{isIt ? 'Prove incrementali, non promesse' : 'Incremental proofs, not promises'}</h3>
                  <p className="text-sm text-ink-600">
                    {isIt 
                      ? 'Misuriamo il valore effettivo della pubblicità anche senza cookie tramite esperimenti geografici controllati (controfattuali) e modelli econometrici trasparenti.'
                      : 'We measure the actual value of advertising even without cookies through controlled geographic experiments (counterfactuals) and transparent econometric models.'}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card card-quiet flex gap-4">
                <div className="icon-tile shrink-0">5</div>
                <div>
                  <h3 className="text-[1.05rem] font-semibold mb-1">{isIt ? 'Niente si muove senza la tua firma' : 'Nothing moves without your signature'}</h3>
                  <p className="text-sm text-ink-600">
                    {isIt 
                      ? 'Ogni manovra viene preparata in staging e richiede la tua validazione. Le campagne nascono sempre in pausa e non ci sono modifiche a sorpresa.'
                      : 'Every maneuver is prepared in staging and requires your validation. Campaigns always start in pause, and there are no surprise edits.'}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.p variants={fadeInUp} className="mt-8 pt-6 border-t border-line text-sm text-ink-600 italic">
              {isIt 
                ? "Ogni scheda video qui sotto racconta una capacità in meno di due minuti: il dolore che conosci, la soluzione della suite, e una domanda-firma da fare alla tua agenzia per verificare se sanno operare a questo livello."
                : "Each video tab below explains a capability in less than two minutes: the pain you know, the suite's solution, and a signature question to ask your agency to verify if they can operate at this level."}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Video Collection Index */}
      <section className="shell section">
        <h2 className="title-xl text-center mb-4">
          {isIt ? 'L’Indice delle 35 Capacità della Suite' : 'Index of the 35 Suite Capabilities'}
        </h2>
        <p className="lede text-center mb-10 max-w-2xl mx-auto">
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: themeIdx * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="card card-hover overflow-hidden"
              >
                <div className="card-quiet flex gap-4 p-5">
                  <div className="icon-tile shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="eyebrow eyebrow-quiet">
                      {isIt ? `TEMA ${themeIdx + 1}` : `THEME ${themeIdx + 1}`}
                    </span>
                    <h3 className="text-[1.05rem] font-semibold">{isIt ? themeName : themeName}</h3>
                  </div>
                </div>

                <div className="divide-y divide-line">
                  {themeVideos.map((video) => (
                    <Link 
                      key={video.id}
                      to={`/${language}/video/${video.id}`}
                      className="group flex items-center justify-between p-5 hover:bg-paper transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-5 h-5 text-ink-500 group-hover:text-accent-600 transition-colors" />
                        <div>
                          <h4 className="font-semibold text-ink-900 transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-xs text-ink-600 mt-0.5">
                            <span className="font-semibold">{isIt ? 'Pain SEO: ' : 'SEO Pain: '}</span>
                            {video.seoPain}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-accent-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
