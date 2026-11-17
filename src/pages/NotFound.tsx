import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';

/**
 * Pagina «non trovata» per gli indirizzi che non esistono.
 *
 * Il sito è una single-page app: il server risponde 200 a qualunque indirizzo. Il `noindex`
 * dice ai motori di ricerca di non indicizzare questa pagina (è l'indicazione di Google per le
 * single-page app), mentre al visitatore restano tre uscite utili.
 */
export default function NotFound() {
  const { language } = useLanguage();
  const location = useLocation();
  const isIt = language === 'it';
  // L'indirizzo richiesto senza il prefisso di lingua: la canonical resta su di lui, non sulla home.
  const path = location.pathname.replace(/^\/(it|en)(?=\/|$)/, '') || '/';

  return (
    <>
      <MetaTags
        title={isIt ? 'Pagina non trovata | Internet Valore' : 'Page not found | Internet Valore'}
        description={isIt
          ? 'L’indirizzo che hai aperto non esiste o è stato spostato.'
          : 'The address you opened does not exist or has been moved.'}
        path={path}
        noIndex={true}
        structuredData={false}
      />

      <div className="section section-quiet" data-pagina="non-trovata">
        <div className="shell">
          <div className="card max-w-3xl mx-auto text-center p-8 sm:p-10">
            <p className="eyebrow mb-4">{isIt ? 'Errore 404' : 'Error 404'}</p>

            <h1 className="title-xl mb-5">{isIt ? 'Questa pagina non esiste' : 'This page does not exist'}</h1>

            <p className="lede measure mx-auto mb-8">
              {isIt
                ? 'L’indirizzo che hai aperto non esiste o è stato spostato. Da qui puoi ripartire.'
                : 'The address you opened does not exist or has been moved. You can start again from here.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to={`/${language}/`} className="btn btn-primary">
                {isIt ? 'Torna alla home' : 'Back to the home page'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to={`/${language}/services`} className="btn btn-ghost">
                {isIt ? 'Vedi i servizi' : 'See the services'}
              </Link>
              <Link to={`/${language}/contact`} className="btn btn-ghost">
                {isIt ? 'Contatti' : 'Contact us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
