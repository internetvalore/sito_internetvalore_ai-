import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Ingresso del percorso PMI in home, subito sotto l'hero e-commerce.
 * Offerta: analisi gratuita dell'account pubblicitario.
 */
export default function PmiEntry() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const points = isIt
    ? [
        'Contatti verificati sul tuo CRM, non contati sul modulo',
        'La spesa sotto gli occhi ogni mese',
        'L\'analisi del tuo account prima di firmare'
      ]
    : [
        'Leads verified against your CRM, not counted on the form',
        'Your spend in plain sight every month',
        'An analysis of your account before you sign'
      ];

  return (
    <section id="pmi" className="section-quiet border-y border-line py-14 lg:py-16 scroll-mt-20">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center"
        >
          <div>
            <p className="eyebrow mb-3">{isIt ? 'Per le PMI B2B' : 'For B2B SMEs'}</p>
            <h2 className="title-xl mb-4">
              {isIt
                ? 'Non vendi online? Ti portiamo contatti veri, non moduli compilati dai bot.'
                : 'Not selling online? We bring you real leads, not forms filled in by bots.'}
            </h2>
            <p className="lede measure mb-7">
              {isIt
                ? 'Per le PMI che cercano nuovi clienti gestiamo campagne di lead generation su Google Ads e Facebook Ads. Prima che le piattaforme imparino dai tuoi contatti, togliamo spam, bot e richieste false: il budget lavora solo su chi può diventare cliente.'
                : 'For SMEs looking for new customers we run lead generation campaigns on Google Ads and Facebook Ads. Before the platforms learn from your leads, we remove spam, bots and fake requests: your budget works only on people who can become customers.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={`/${language}/lp/lead-generation`} className="btn btn-primary">
                {isIt ? 'Richiedi l\'analisi gratuita del tuo account' : 'Request your free account analysis'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to={`/${language}/services/lead-generation`} className="btn btn-ghost">
                {isIt ? 'Come funziona la lead generation' : 'How lead generation works'}
              </Link>
            </div>
            <p className="mt-4 text-[0.875rem] text-ink-500 measure">
              {isIt
                ? 'Analizziamo il tuo account Google Ads e ti diciamo dove si spreca budget, in 3 giorni lavorativi.'
                : 'We analyze your Google Ads account and tell you where budget is being wasted, within 3 business days.'}
            </p>
          </div>

          <ul className="card space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.95rem] font-medium text-ink-900 leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
