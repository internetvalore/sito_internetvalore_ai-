import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import Logo from './Logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { t, language } = useLanguage();

  const services = [
    {
      name: language === 'it' ? 'Outsourcing Campagne E-commerce' : 'E-commerce Campaign Outsourcing',
      description: language === 'it' ? 'Ottimizzazione sul margine reale (POAS), riconciliazione carrello e zero cannibalizzazione.' : 'Real margin optimization (POAS), cart reconciliation and zero brand cannibalization.',
      href: `/${language}/services/ecommerce`,
      isPrimary: true
    },
    {
      name: language === 'it' ? 'Funzionalità masterAnalyzer' : 'masterAnalyzer Capabilities',
      description: language === 'it' ? 'I cluster tecnologici e le capacità di audit deterministico.' : 'Technological clusters and deterministic audit capabilities.',
      href: `/${language}/funzionalita`
    },
    {
      name: language === 'it' ? 'La Nostra AI (masterAnalyzer)' : 'Our AI (masterAnalyzer)',
      description: language === 'it' ? '1M+ di righe di codice proprietario, 482 tool LLM e 293 playbook.' : '1M+ lines of proprietary code, 482 LLM tools and 293 playbooks.',
      href: `/${language}/la-nostra-tecnologia-ai`
    },
    {
      name: language === 'it' ? 'Audit & Riconciliazione (Riservato)' : 'Audit & Reconciliation (Private)',
      description: language === 'it' ? 'Verifica discrepanze carrello vs GA4 protetta da accordo NDA.' : 'Cart vs GA4 discrepancy audit protected by mutual NDA.',
      href: `/${language}/casi-e-audit`
    },
    {
      name: t('services.sections.leadGeneration.title'),
      description: t('services.sections.leadGeneration.description'),
      href: `/${language}/services/lead-generation`
    },
    {
      name: t('services.sections.ads.title'),
      description: t('services.sections.ads.description'),
      href: `/${language}/services/ads`
    },
    {
      name: t('services.sections.analytics.title'),
      description: t('services.sections.analytics.description'),
      href: `/${language}/services/analytics`
    },
    {
      name: t('services.sections.instantWebsites.title'),
      description: t('services.sections.instantWebsites.description'),
      href: `/${language}/instant-websites`
    },
    {
      name: t('services.sections.rispondiSubito.title'),
      description: t('services.sections.rispondiSubito.description'),
      href: `/${language}/services/rispondi-subito`
    }
  ];

  return (
    <Popover className="relative">
      <div className="iv-nav">
        <div className="shell">
          <div className="flex items-center justify-between gap-6 h-[68px]">
            <div className="flex items-center gap-4 min-w-0">
              <Link to="/" className="flex items-center gap-3">
                <span className="sr-only">Internet Valore</span>
                <Logo className="w-8 h-8 shrink-0" />
                <span className="hidden sm:block">
                  <span className="block text-[0.95rem] font-semibold tracking-[-0.02em] text-ink-900 leading-tight">
                    Internet Valore
                  </span>
                  <span className="block text-[0.78rem] text-ink-500 leading-tight mt-0.5">
                    {language === 'it' ? 'Outsourcing Campagne E-commerce sul Margine Reale (POAS)' : 'E-commerce Campaign Outsourcing on Real Margin (POAS)'}
                  </span>
                </span>
              </Link>
              <a
                href="https://www.google.com/partners/agency?id=6948869441"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center ml-1 px-3 py-1.5 rounded-full border border-line bg-white hover:bg-paper transition-colors duration-220"
                title="Google Partner Certificato"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                  alt="Badge Ufficiale Google Partner Certificato - Internet Valore S.r.l."
                  className="h-7 w-auto"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-7">
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

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-220"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 mt-3 left-1/2 -translate-x-1/2 w-screen max-w-[720px] px-4">
                        <div className="rounded-2xl border border-line bg-white shadow-lg overflow-hidden">
                          <div className="grid gap-1 p-4 sm:grid-cols-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block rounded-xl p-3 hover:bg-paper transition-colors duration-220"
                              >
                                <div className="flex items-center gap-2">
                                  <p className="text-[0.9rem] font-semibold text-ink-900">{service.name}</p>
                                  {(service as any).isPrimary && (
                                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full bg-accent-50 text-accent-700">
                                      Core
                                    </span>
                                  )}
                                </div>
                                <p className="mt-1 text-[0.8rem] text-ink-500 leading-snug">
                                  {service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <NavLink to={`/${language}/specializations`} className={({ isActive }) => classNames('navlink', isActive && 'text-ink-900')}>
                {t('nav.specializations')}
              </NavLink>

              <NavLink
                to={`/${language}/casi-e-audit`}
                className={({ isActive }) => classNames('navlink inline-flex items-center gap-2', isActive && 'text-ink-900')}
              >
                <span>{language === 'it' ? 'Casi & Audit' : 'Cases & Audit'}</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full border border-line text-ink-500">
                  {language === 'it' ? 'Riservati' : 'Private'}
                </span>
              </NavLink>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:800940213" className="navlink whitespace-nowrap">
                {t('nav.call')}
              </a>
              <Link to={`/${language}/casi-e-audit`} className="btn btn-primary btn-sm">
                {language === 'it' ? 'Audit E-commerce' : 'E-commerce Audit'}
              </Link>
              <LanguageSelector />
            </div>

            <div className="md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-ink-600 hover:bg-paper transition-colors duration-220">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
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
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-3 transition origin-top-right md:hidden z-50">
            <div className="rounded-2xl border border-line bg-white shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Logo className="w-8 h-8" />
                  <div>
                    <p className="text-[0.95rem] font-semibold text-ink-900">Internet Valore</p>
                    <p className="text-[0.78rem] text-ink-500 leading-tight">
                      {language === 'it' ? 'Outsourcing Campagne E-commerce (POAS)' : 'E-commerce Campaign Outsourcing (POAS)'}
                    </p>
                  </div>
                </div>
                <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-ink-600 hover:bg-paper transition-colors duration-220">
                  <span className="sr-only">Close menu</span>
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

                <div className="pt-3 mt-2 border-t border-line">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-500 mb-2">{t('nav.services')}</p>
                  <div className="grid gap-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220"
                      >
                        <p className="text-[0.9rem] font-semibold text-ink-900">{service.name}</p>
                        <p className="mt-0.5 text-[0.8rem] text-ink-500 leading-snug">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <NavLink to={`/${language}/specializations`} className="block -m-2 p-2 rounded-xl hover:bg-paper transition-colors duration-220">
                  <span className="text-[0.9rem] font-semibold text-ink-900">{t('nav.specializations')}</span>
                </NavLink>
                <NavLink
                  to={`/${language}/casi-e-audit`}
                  className="block -m-2 p-2 rounded-xl flex items-center justify-between hover:bg-paper transition-colors duration-220"
                >
                  <span className="text-[0.9rem] font-semibold text-ink-900">
                    {language === 'it' ? 'Casi & Audit' : 'Cases & Audit'}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full border border-line text-ink-500">
                    {language === 'it' ? 'Riservati' : 'Private'}
                  </span>
                </NavLink>
              </nav>

              <div className="pt-4 mt-4 border-t border-line space-y-3">
                <Link to={`/${language}/casi-e-audit`} className="btn btn-primary w-full">
                  {language === 'it' ? 'Richiedi Audit E-commerce' : 'Request E-commerce Audit'}
                </Link>
                <a href="tel:800940213" className="btn btn-ghost w-full">
                  {t('nav.call')}
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
