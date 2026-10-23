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
    <div className="section border-t border-line">
      <div className="shell">
        <h3 className="eyebrow eyebrow-quiet block text-center mb-8">
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
                className={`flex flex-col items-center justify-center gap-2 rounded-[14px] border border-line bg-white p-4 text-center transition-colors duration-220 ${
                  isActive
                    ? 'bg-paper border-line-strong text-accent-600 font-semibold'
                    : 'text-ink-600 hover:bg-paper'
                }`}
              >
                <Icon className={`h-5 w-5 text-ink-400 ${isActive ? 'text-accent-600' : ''}`} />
                <span className="text-[0.8rem] font-medium leading-tight">{p.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to={`/${activeLang}/solutions`}
            className="navlink inline-flex items-center gap-2 font-medium text-accent-600 hover:text-accent-700"
          >
            {isIt ? '← Torna alla Mappa dei Profili' : '← Back to Profile Map'}
          </Link>
        </div>
      </div>
    </div>
  );
}
