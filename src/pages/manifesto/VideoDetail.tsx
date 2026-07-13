import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { videoList } from './videoData';
import { 
  ArrowLeft, ArrowRight, Copy, Check, HelpCircle, 
  AlertTriangle, ShieldCheck, TrendingDown, ArrowUpRight
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
      <div className="bg-gray-50 min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-md border">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {isIt ? 'Pagina non trovata' : 'Page not found'}
          </h1>
          <p className="text-slate-600 mb-6">
            {isIt 
              ? 'La capacità pubblicitaria richiesta non esiste.' 
              : 'The requested advertising capability does not exist.'}
          </p>
          <Link to={`/${language}/manifesto`} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
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
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <MetaTags 
        title={customTitle}
        description={customDescription}
        path={`/video/${video.id}`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
          <Link 
            to={`/${language}/manifesto`} 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isIt ? 'Torna all’Indice del Manifesto' : 'Back to Manifesto Index'}
          </Link>
          <span className="text-xs font-semibold text-slate-500 bg-slate-200/60 px-3 py-1 rounded-full uppercase self-start sm:self-auto">
            {video.theme}
          </span>
        </div>

        {/* Video Title Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
            {isIt ? `Capacità della Suite #${video.id.toUpperCase()}` : `Suite Capability #${video.id.toUpperCase()}`}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {video.title}
          </h1>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column: Embed Player & CTA */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Embedded YouTube Player */}
            <div className="bg-slate-950 rounded-2xl overflow-hidden aspect-video shadow-lg border border-slate-200 relative">
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
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-900">
                  <Play className="w-12 h-12 text-slate-600 mb-3" />
                  <p className="text-sm font-semibold">{isIt ? 'Video in caricamento' : 'Video loading'}</p>
                </div>
              )}
            </div>

            {/* Inbound Question Box */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl translate-x-8 -translate-y-8" />
              
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs tracking-wide uppercase text-blue-400">
                    {isIt ? 'Metti alla prova la tua agenzia' : 'Test your agency'}
                  </h4>
                  <p className="text-slate-300 text-xs mt-0.5">
                    {isIt 
                      ? 'Usa questa domanda-firma in riunione per verificare se sanno operare a questo livello:'
                      : 'Ask this signature question in your next meeting to verify their capability:'}
                  </p>
                </div>
              </div>

              <blockquote className="text-base italic leading-relaxed text-slate-100 mb-6 border-l-2 border-blue-500 pl-3">
                "{video.question}"
              </blockquote>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className="text-xs text-slate-400">
                  {isIt ? 'Clicca per copiare la domanda' : 'Click to copy question'}
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-300" />
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
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center text-center">
              <h4 className="font-bold text-slate-900 text-base mb-2">
                {isIt ? 'Pensi di avere questo problema?' : 'Do you face this challenge?'}
              </h4>
              <p className="text-slate-600 text-sm mb-5 max-w-sm">
                {isIt 
                  ? 'Il nostro team di ingegneri può connettersi in sola lettura ed eseguire un dry-run gratuito sul tuo account per isolare le anomalie.'
                  : 'Our engineering team can connect in read-only mode and run a free dry-run on your account to isolate tracking gaps.'}
              </p>
              <Link 
                to={`/${language}/contact`} 
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-colors shadow-sm w-full"
              >
                <span>{isIt ? 'Richiedi un Audit Gratuito' : 'Request Free Audit'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Clean Marketing Copy (Pain-Agitate-Relief) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* The Pain Block */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 border-b pb-3 text-red-600">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider">
                  {isIt ? 'Il Problema' : 'The Problem'}
                </h3>
              </div>
              <p className="text-slate-800 leading-relaxed font-medium text-base sm:text-lg">
                {video.pain}
              </p>
            </div>

            {/* The Agitate Block */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 border-b pb-3 text-amber-600">
                <TrendingDown className="w-5 h-5 shrink-0" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider">
                  {isIt ? 'L’Impatto Economico' : 'The Financial Impact'}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {video.agitate}
              </p>
            </div>

            {/* The Relief Block */}
            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 sm:p-8 bg-blue-50/20">
              <div className="flex items-center gap-3 mb-4 border-b border-blue-100 pb-3 text-green-600">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider">
                  {isIt ? 'Come lo Risolve la Suite' : 'How the Suite Solves It'}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {video.relief}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Links */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-8">
          {prevVideo ? (
            <Link 
              to={`/${language}/video/${prevVideo.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-all text-left max-w-[45%]"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">{isIt ? 'PRECEDENTE' : 'PREVIOUS'}</span>
                <span className="text-sm font-bold text-slate-800 truncate block">{prevVideo.title.split(' — ')[1]}</span>
              </div>
            </Link>
          ) : (
            <div className="w-32" />
          )}

          <Link 
            to={`/${language}/manifesto`}
            className="px-4 py-2 rounded-lg bg-slate-200/50 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
          >
            {isIt ? 'Indice' : 'Index'}
          </Link>

          {nextVideo ? (
            <Link 
              to={`/${language}/video/${nextVideo.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-all text-right max-w-[45%]"
            >
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">{isIt ? 'SUCCESSIVO' : 'NEXT'}</span>
                <span className="text-sm font-bold text-slate-800 truncate block">{nextVideo.title.split(' — ')[1]}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
            </Link>
          ) : (
            <div className="w-32" />
          )}
        </div>

      </div>
    </div>
  );
}
