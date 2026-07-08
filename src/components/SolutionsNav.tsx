import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Users, FileText, Search, TrendingUp, BarChart2, Database, Globe, ShieldAlert, Cpu
} from 'lucide-react';

export default function SolutionsNav() {
  const { lang } = useParams<{ lang: string }>();
  const { language } = useLanguage();
  const activeLang = lang || language || 'it';
  const isIt = activeLang === 'it';

  const currentPath = window.location.pathname;

  const profiles = [
    {
      path: `/${activeLang}/solutions/titolare-pmi`,
      title: isIt ? 'Titolare PMI' : 'SME Owner',
      icon: Users
    },
    {
      path: `/${activeLang}/solutions/account-manager`,
      title: isIt ? 'Account Manager' : 'Account Manager',
      icon: FileText
    },
    {
      path: `/${activeLang}/solutions/media-buyer-google-ads`,
      title: isIt ? 'Google Ads Buyer' : 'Google Ads Buyer',
      icon: Search
    },
    {
      path: `/${activeLang}/solutions/media-buyer-meta`,
      title: isIt ? 'Meta Ads Buyer' : 'Meta Ads Buyer',
      icon: TrendingUp
    },
    {
      path: `/${activeLang}/solutions/specialista-seo`,
      title: isIt ? 'SEO Specialist' : 'SEO Specialist',
      icon: BarChart2
    },
    {
      path: `/${activeLang}/solutions/measurement-engineer`,
      title: isIt ? 'Measurement Eng.' : 'Measurement Eng.',
      icon: Database
    },
    {
      path: `/${activeLang}/solutions/operatore-ecommerce`,
      title: isIt ? 'E-com Multimercato' : 'Multi-Market E-com',
      icon: Globe
    },
    {
      path: `/${activeLang}/solutions/advertiser-senza-tracking`,
      title: isIt ? 'Advertiser No Pixel' : 'No Pixel Advertiser',
      icon: ShieldAlert
    },
    {
      path: `/${activeLang}/solutions/costruttore-sistema`,
      title: isIt ? 'Costruttore Sistema' : 'System Builder',
      icon: Cpu
    }
  ];

  return (
    <div className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          {isIt ? 'Esplora le guide degli altri ruoli' : 'Explore the guides for other roles'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            const isActive = currentPath.endsWith(p.path.split('/').pop() || '');
            return (
              <Link
                key={i}
                to={p.path}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all text-center ${
                  isActive
                    ? 'bg-blue-50 border-blue-200 text-blue-600 font-semibold shadow-sm'
                    : 'bg-gray-50 border-gray-100 hover:bg-gray-100 hover:border-gray-200 text-gray-600'
                }`}
              >
                <Icon className={`h-5 w-5 mb-2 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="text-xs leading-tight">{p.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to={`/${activeLang}/solutions`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {isIt ? '← Torna alla Mappa dei Profili' : '← Back to Profile Map'}
          </Link>
        </div>
      </div>
    </div>
  );
}
