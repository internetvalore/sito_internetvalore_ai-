import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { videoList } from './videoData';
import { 
  ArrowLeft, ArrowRight, Copy, Check, HelpCircle, 
  AlertTriangle, ShieldCheck, TrendingDown, ArrowUpRight, Play
} from 'lucide-react';

export default function VideoDetail() {
  const { videoId } = useParams<{ videoId: string }>();
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [copied, setCopied] = useState(false);

  // Find current video index
  const currentIndex = videoList.findIndex(v => v.id.toLowerCase() === videoId?.toLowerCase());
  const video = videoList[currentIndex];

  if (!video) {
    return (
      <div className="section-quiet min-h-screen font-sans pt-32 pb-16 flex items-center justify-center">
        <div className="card text-center max-w-md">
          <AlertTriangle className="w-6 h-6 text-ink-500 mx-auto mb-4" />
          <h1 className="title-lg mb-2">
            {isIt ? 'Pagina non trovata' : 'Page not found'}
          </h1>
          <p className="text-ink-600 mb-6">
            {isIt 
              ? 'La capacità pubblicitaria richiesta non esiste.' 
              : 'The requested advertising capability does not exist.'}
          </p>
          <Link to={`/${language}/manifesto`} className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" />
            {isIt ? 'Torna al Manifesto' : 'Back to Manifesto'}
          </Link>
        </div>
      </div>
    );
  }

  // Navigation handlers
  const prevVideo = currentIndex > 0 ? videoList[currentIndex - 1] : null;
  const nextVideo = currentIndex < videoList.length - 1 ? videoList[currentIndex + 1] : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(video.question);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customTitle = `${video.title.split(' — ')[1]} | Metodo Internet Valore`;
  const customDescription = `${isIt ? 'Analisi del problema' : 'Problem analysis'}: ${video.pain} - Scopri come la nostra suite AI protegge le tue performance.`;

  return (
    <div className="section-quiet min-h-screen font-sans pt-24 pb-16">
      <MetaTags 
        title={customTitle}
        description={customDescription}
        path={`/video/${video.id}`}
        image={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        pageType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Manifesto' : 'Manifesto', path: '/manifesto' },
          { name: video.title.split(' — ')[0], path: `/video/${video.id}` }
        ]}
        video={{
          name: video.title,
          description: `${video.pain} ${video.relief}`,
          thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
          uploadDate: '2026-07-09T08:00:00+02:00',
          embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
          transcript: video.script
        }}
      />

      <div className="shell">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
          <Link 
            to={`/${language}/manifesto`} 
            className="navlink inline-flex items-center gap-2 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isIt ? 'Torna all’Indice del Manifesto' : 'Back to Manifesto Index'}
          </Link>
          <span className="chip self-start sm:self-auto">
            {video.theme}
          </span>
        </div>

        {/* Video Title Header */}
        <div className="card card-quiet mb-8">
          <span className="eyebrow block mb-2">
            {isIt ? `Capacità della Suite #${video.id.toUpperCase()}` : `Suite Capability #${video.id.toUpperCase()}`}
          </span>
          <h1 className="title-xl">
            {video.title}
          </h1>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          
          {/* Left Column: Embed Player & CTA */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Embedded YouTube Player */}
            <div className="media aspect-video relative">
              {video.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-ink-500 bg-paper">
                  <Play className="w-6 h-6 text-ink-400 mb-3" />
                  <p className="text-sm font-semibold">{isIt ? 'Video in caricamento' : 'Video loading'}</p>
                </div>
              )}
            </div>

            {/* Inbound Question Box */}
            <div className="card card-quiet relative">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="eyebrow mb-1">
                    {isIt ? 'Metti alla prova la tua agenzia' : 'Test your agency'}
                  </h4>
                  <p className="text-ink-600 text-xs mt-0.5">
                    {isIt 
                      ? 'Usa questa domanda-firma in riunione per verificare se sanno operare a questo livello:'
                      : 'Ask this signature question in your next meeting to verify their capability:'}
                  </p>
                </div>
              </div>

              <blockquote className="text-base italic leading-relaxed text-ink-900 mb-6 border-l border-accent-600 pl-3">
                "{video.question}"
              </blockquote>

              <div className="hairline flex items-center justify-between">
                <span className="text-xs text-ink-600">
                  {isIt ? 'Clicca per copiare la domanda' : 'Click to copy question'}
                </span>
                <button
                  onClick={handleCopy}
                  className="btn btn-sm btn-primary"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{isIt ? 'Copiata!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isIt ? 'Copia negli appunti' : 'Copy question'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Audit CTA Card */}
            <div className="card flex flex-col items-center text-center">
              <h4 className="text-[1.05rem] font-semibold mb-2">
                {isIt ? 'Pensi di avere questo problema?' : 'Do you face this challenge?'}
              </h4>
              <p className="text-sm text-ink-600 mb-5 max-w-sm">
                {isIt 
                  ? 'Il nostro team di ingegneri può connettersi in sola lettura ed eseguire un dry-run gratuito sul tuo account per isolare le anomalie.'
                  : 'Our engineering team can connect in read-only mode and run a free dry-run on your account to isolate tracking gaps.'}
              </p>
              <Link 
                to={`/${language}/contact`} 
                className="btn btn-primary w-full"
              >
                <span>{isIt ? 'Richiedi un Audit Gratuito' : 'Request Free Audit'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Clean Marketing Copy (Pain-Agitate-Relief) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* The Pain Block */}
            <div className="card card-hover">
              <div className="flex items-center gap-3 mb-4 border-b border-line pb-3 text-ink-900">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="eyebrow mb-3">
                  {isIt ? 'Il Problema' : 'The Problem'}
                </h3>
              </div>
              <p className="text-ink-900 leading-relaxed font-medium text-[0.95rem]">
                {video.pain}
              </p>
            </div>

            {/* The Agitate Block */}
            <div className="card card-hover card-quiet">
              <div className="flex items-center gap-3 mb-4 border-b border-line pb-3 text-ink-900">
                <TrendingDown className="w-5 h-5 shrink-0" />
                <h3 className="eyebrow mb-3">
                  {isIt ? 'L’Impatto Economico' : 'The Financial Impact'}
                </h3>
              </div>
              <p className="text-ink-600 leading-relaxed text-sm">
                {video.agitate}
              </p>
            </div>

            {/* The Relief Block */}
            <div className="card card-hover card-quiet">
              <div className="flex items-center gap-3 mb-4 border-b border-line pb-3 text-ink-900">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="eyebrow mb-3">
                  {isIt ? 'Come lo Risolve la Suite' : 'How the Suite Solves It'}
                </h3>
              </div>
              <p className="text-ink-600 leading-relaxed text-sm">
                {video.relief}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Links */}
        <div className="hairline flex items-center justify-between mt-8">
          {prevVideo ? (
            <Link 
              to={`/${language}/video/${prevVideo.id}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors text-left max-w-[45%]"
            >
              <ArrowLeft className="w-4 h-4 text-ink-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-xs text-ink-500 font-medium uppercase block">{isIt ? 'PRECEDENTE' : 'PREVIOUS'}</span>
                <span className="text-sm font-medium text-ink-900 truncate block">{prevVideo.title.split(' — ')[1]}</span>
              </div>
            </Link>
          ) : (
            <div className="w-32" />
          )}

          <Link 
            to={`/${language}/manifesto`}
            className="btn btn-sm btn-ghost"
          >
            {isIt ? 'Indice' : 'Index'}
          </Link>

          {nextVideo ? (
            <Link 
              to={`/${language}/video/${nextVideo.id}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors text-right max-w-[45%]"
            >
              <div className="min-w-0">
                <span className="text-xs text-ink-500 font-medium uppercase block">{isIt ? 'SUCCESSIVO' : 'NEXT'}</span>
                <span className="text-sm font-medium text-ink-900 truncate block">{nextVideo.title.split(' — ')[1]}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-ink-500 shrink-0" />
            </Link>
          ) : (
            <div className="w-32" />
          )}
        </div>

      </div>
    </div>
  );
}
