import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import Logo from './Logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { t, language } = useLanguage();

  const isIt = language === 'it';

  type NavItem = { name: string; description: string; href: string; isOffer?: boolean };

  // Tendina "Servizi" divisa nei due percorsi del sito più la tecnologia.
  const serviceGroups: { label: string; items: NavItem[] }[] = [
    {
      label: isIt ? 'Per gli e-commerce' : 'For e-commerce',
      items: [
        {
          name: isIt ? 'Outsourcing Campagne Ads E-commerce' : 'E-commerce Campaign Outsourcing',
          description: isIt ? 'Google Ads e Facebook Ads ottimizzati sul margine reale (POAS).' : 'Google Ads and Facebook Ads optimized on real margin (POAS).',
          href: `/${language}/services/ecommerce`
        },
        {
          name: t('services.sections.ads.title'),
          description: isIt ? 'Modifiche sicure e controllo degli sprechi di budget.' : 'Safe changes and control of budget waste.',
          href: `/${language}/services/ads`
        },
        {
          name: t('services.sections.analytics.title'),
          description: isIt ? 'Tracciamento verificato e report che spiegano i numeri.' : 'Verified tracking and reports that explain the numbers.',
          href: `/${language}/services/analytics`
        },
        {
          name: isIt ? 'Analisi gratuita e-commerce' : 'Free e-commerce analysis',
          description: isIt ? 'Quanti ordini il tuo tracciamento non vede e dove lasci margine.' : 'How many orders your tracking misses and where you leave margin.',
          href: `/${language}/analisi-gratuita`,
          isOffer: true
        }
      ]
    },
    {
      label: isIt ? 'Per le PMI' : 'For SMEs',
      items: [
        {
          name: t('services.sections.leadGeneration.title'),
          description: isIt ? 'Contatti veri, senza spam e bot, per le PMI B2B.' : 'Real leads, without spam and bots, for B2B SMEs.',
          href: `/${language}/services/lead-generation`
        },
        {
          name: t('services.sections.landingPageProfessionali.title'),
          description: isIt ? 'Pagine pensate per trasformare i clic in contatti.' : 'Pages designed to turn clicks into leads.',
          href: `/${language}/landing-page-professionali`
        },
        {
          name: t('services.sections.instantWebsites.title'),
          description: isIt ? 'Il sito aziendale online in 7 giorni.' : 'Your business website online in 7 days.',
          href: `/${language}/instant-websites`
        },
        {
          name: t('services.sections.rispondiSubito.title'),
          description: isIt ? 'Centralino AI che risponde H24 e qualifica le chiamate.' : 'AI switchboard answering 24/7 and qualifying calls.',
          href: `/${language}/services/rispondi-subito`
        },
        {
          name: isIt ? 'Analisi gratuita dell’account' : 'Free account analysis',
          description: isIt ? 'Dove si spreca il budget del tuo Google Ads, in 3 giorni.' : 'Where your Google Ads budget is wasted, in 3 days.',
          href: `/${language}/lp/lead-generation`,
          isOffer: true
        }
      ]
    },
    {
      label: isIt ? 'Tecnologia e competenze' : 'Technology and expertise',
      items: [
        {
          name: isIt ? 'La Nostra AI (masterAnalyzer)' : 'Our AI (masterAnalyzer)',
          description: isIt ? 'La piattaforma proprietaria con cui gestiamo le tue campagne.' : 'The proprietary platform we use to manage your campaigns.',
          href: `/${language}/la-nostra-tecnologia-ai`
        },
        {
          name: isIt ? 'Funzionalità masterAnalyzer' : 'masterAnalyzer Capabilities',
          description: isIt ? 'Le capacità della piattaforma, tema per tema.' : 'The platform capabilities, topic by topic.',
          href: `/${language}/funzionalita`
        },
        {
          name: t('nav.specializations'),
          description: isIt ? 'Google Ads, Facebook Ads, SEO e Analytics.' : 'Google Ads, Facebook Ads, SEO and Analytics.',
          href: `/${language}/specializations`
        }
      ]
    }
  ];

  const renderItem = (item: NavItem, compact = false) => (
    <Link
      key={item.href}
      to={item.href}
      className={compact
        ? 'block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220'
        : 'block rounded-xl p-3 hover:bg-paper transition-colors duration-220'}
    >
      <p className={`text-[0.9rem] font-semibold ${item.isOffer ? 'text-accent-700' : 'text-ink-900'}`}>
        {item.name}{item.isOffer ? ' →' : ''}
      </p>
      <p className={`${compact ? 'mt-0.5' : 'mt-1'} text-[0.8rem] text-ink-500 leading-snug`}>{item.description}</p>
    </Link>
  );

  return (
    <Popover className="relative">
      <div className="iv-nav">
        <div className="shell">
          <div className="flex items-center justify-between gap-6 h-[68px]">
            <div className="flex items-center gap-4 min-w-0">
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <Logo className="w-8 h-8 shrink-0" />
                <span className="block">
                  <span className="block text-[0.95rem] font-semibold tracking-[-0.02em] text-ink-900 leading-tight whitespace-nowrap">
                    Internet Valore
                  </span>
                  <span className="hidden sm:block xl:hidden text-[0.78rem] text-ink-500 leading-tight mt-0.5 whitespace-nowrap">
                    {language === 'it' ? 'Outsourcing Campagne Ads E-commerce sul Margine Reale (POAS)' : 'E-commerce Campaign Outsourcing on Real Margin (POAS)'}
                  </span>
                </span>
              </Link>
              <a
                href="https://www.google.com/partners/agency?id=6948869441"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex shrink-0 items-center ml-1 px-3 py-1.5 rounded-full border border-line bg-white hover:bg-paper transition-colors duration-220"
                title={isIt ? 'Google Partner Certificato' : 'Certified Google Partner'}
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                  alt={isIt ? 'Badge Ufficiale Google Partner Certificato - Internet Valore S.r.l.' : 'Official Certified Google Partner badge - Internet Valore S.r.l.'}
                  className="h-7 w-auto"
                />
              </a>
            </div>

            <div className="hidden xl:flex items-center gap-6">
              <NavLink to={`/${language}/about`} className={({ isActive }) => classNames('navlink', isActive && 'text-ink-900')}>
                {t('nav.about')}
              </NavLink>

              <NavLink to={`/${language}/solutions`} className={({ isActive }) => classNames('navlink', isActive && 'text-ink-900')}>
                {language === 'it' ? 'Soluzioni per Ruolo' : 'Solutions by Role'}
              </NavLink>

              <NavLink to={`/${language}/manifesto`} className={({ isActive }) => classNames('navlink', isActive && 'text-ink-900')}>
                {language === 'it' ? 'Il Manifesto' : 'Our Manifesto'}
              </NavLink>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className={classNames('navlink inline-flex items-center gap-2', open && 'text-ink-900')}>
                      <span>{t('nav.services')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-ink-900 rotate-180' : 'text-ink-400',
                          'h-4 w-5 transition-transform duration-220'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    {/* unmount={false}: la tendina resta nel DOM anche da chiusa (nascosta), così i suoi
                        link — fra cui Funzionalità e Specializzazioni, che non hanno altri link nel
                        sito — esistono come <a href> in ogni pagina e non solo a tendina aperta. */}
                    <Transition
                      as={Fragment}
                      unmount={false}
                      enter="transition ease-out duration-220"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel unmount={false} className="absolute z-50 mt-3 left-1/2 -translate-x-1/2 w-screen max-w-[940px] px-4">
                        <div className="rounded-2xl border border-line bg-white shadow-lg overflow-hidden">
                          <div className="grid gap-4 p-4 grid-cols-3">
                            {serviceGroups.map((group) => (
                              <div key={group.label}>
                                <p className="px-3 pt-1 pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-ink-500">
                                  {group.label}
                                </p>
                                <div className="grid gap-1">
                                  {group.items.map((item) => renderItem(item))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:800940213"
                className="hidden lg:inline-flex items-center gap-2 mr-1 text-[0.9375rem] font-semibold text-ink-900 whitespace-nowrap hover:text-accent-600 transition-colors duration-220"
                title={language === 'it' ? 'Numero Verde 800 940 213' : 'Toll-free 800 940 213'}
              >
                <PhoneIcon className="h-4 w-4 text-accent-600" aria-hidden="true" />
                800 940 213
              </a>
              <Link to={`/${language}/analisi-gratuita`} className="hidden md:inline-flex btn btn-primary btn-sm whitespace-nowrap">
                {language === 'it' ? 'Analisi gratuita' : 'Free analysis'}
              </Link>
              <div className="hidden xl:block">
                <LanguageSelector />
              </div>
              <div className="xl:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-ink-600 hover:bg-paper transition-colors duration-220">
                  <span className="sr-only">{isIt ? 'Apri menu' : 'Open menu'}</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-220 ease-out"
          enterFrom="opacity-0 scale-[0.99]"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-[0.99]"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 md:left-auto md:w-[26rem] p-3 transition origin-top-right xl:hidden z-50">
            <div className="rounded-2xl border border-line bg-white shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Logo className="w-8 h-8" />
                  <div>
                    <p className="text-[0.95rem] font-semibold text-ink-900">Internet Valore</p>
                    <p className="text-[0.78rem] text-ink-500 leading-tight">
                      {language === 'it' ? 'Outsourcing Campagne Ads E-commerce (POAS)' : 'E-commerce Campaign Outsourcing (POAS)'}
                    </p>
                  </div>
                </div>
                <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-ink-600 hover:bg-paper transition-colors duration-220">
                  <span className="sr-only">{isIt ? 'Chiudi menu' : 'Close menu'}</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <nav className="mt-4 grid gap-y-2">
                <NavLink to={`/${language}/about`} className="block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220">
                  <span className="text-[0.9rem] font-semibold text-ink-900">{t('nav.about')}</span>
                </NavLink>
                <NavLink to={`/${language}/solutions`} className="block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220">
                  <span className="text-[0.9rem] font-semibold text-ink-900">
                    {language === 'it' ? 'Soluzioni per Ruolo' : 'Solutions by Role'}
                  </span>
                </NavLink>
                <NavLink to={`/${language}/manifesto`} className="block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220">
                  <span className="text-[0.9rem] font-semibold text-ink-900">
                    {language === 'it' ? 'Il Manifesto' : 'Our Manifesto'}
                  </span>
                </NavLink>

                {serviceGroups.map((group) => (
                  <div key={group.label} className="pt-3 mt-2 border-t border-line">
                    <p className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-500 mb-3">{group.label}</p>
                    <div className="grid gap-y-3">
                      {group.items.map((item) => renderItem(item, true))}
                    </div>
                  </div>
                ))}
              </nav>

              <div className="pt-4 mt-4 border-t border-line space-y-3">
                <Link to={`/${language}/analisi-gratuita`} className="btn btn-primary w-full">
                  {language === 'it' ? 'Richiedi l’analisi gratuita' : 'Request your free analysis'}
                </Link>
                <a href="tel:800940213" className="btn btn-ghost w-full">
                  {t('nav.call')} · 800 940 213
                </a>
                <p className="text-center text-[0.78rem] text-ink-500 leading-relaxed">
                  {language === 'it'
                    ? 'Numero Verde 800 940 213 (7x24): risponde Leonardo, assistente AI digitale che raccoglie le informazioni per farti richiamare da un consulente umano.'
                    : 'Toll-Free 800 940 213 (24/7): answered by Leonardo, digital AI assistant collecting info for a human consultant callback.'}
                </p>
                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}
