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
    <Popover className="relative bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">Internet Valore</span>
              <Logo />
              <div className="ml-3">
                <p className="text-base font-medium text-gray-900">Internet Valore</p>
                <p className="text-sm text-gray-500 leading-tight">
                  {language === 'it' ? 'Outsourcing Campagne E-commerce sul Margine Reale (POAS)' : 'E-commerce Campaign Outsourcing on Real Margin (POAS)'}
                </p>
              </div>
            </Link>
            <a
              href="https://www.google.com/partners/agency?id=6948869441"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 hidden sm:block"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                alt="Badge Ufficiale Google Partner Certificato - Internet Valore S.r.l."
                className="h-10"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex space-x-10">
            <NavLink to={`/${language}/about`} className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {t('nav.about')}
            </NavLink>

            <NavLink to={`/${language}/solutions`} className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {language === 'it' ? 'Soluzioni per Ruolo' : 'Solutions by Role'}
            </NavLink>

            <NavLink to={`/${language}/manifesto`} className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {language === 'it' ? 'Il Manifesto' : 'Our Manifesto'}
            </NavLink>

            {/* Services Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-500' : 'text-gray-500',
                      'group inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0'
                    )}
                  >
                    <span>{t('nav.services')}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-blue-500 rotate-180' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500 transition-transform duration-200'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className={`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-150 ${(service as any).isPrimary ? 'bg-blue-50/70 border border-blue-200/60' : ''}`}
                            >
                              <div className="ml-4">
                                <div className="flex items-center gap-2">
                                  <p className="text-base font-medium text-gray-900">
                                    {service.name}
                                  </p>
                                  {(service as any).isPrimary && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-600 text-white">
                                      Core
                                    </span>
                                  )}
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <NavLink to={`/${language}/specializations`} className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {t('nav.specializations')}
            </NavLink>
            <NavLink to={`/${language}/casi-e-audit`} className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors inline-flex items-center gap-1.5'
            )}>
              <span>{language === 'it' ? 'Casi & Audit' : 'Cases & Audit'}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                {language === 'it' ? 'Riservati' : 'Private'}
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="tel:800940213" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mr-4">
              {t('nav.call')}
            </a>
            <Link
              to={`/${language}/casi-e-audit`}
              className="mr-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-150 hover:shadow-md"
            >
              {language === 'it' ? 'Audit E-commerce' : 'E-commerce Audit'}
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Logo />
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Internet Valore</p>
                    <p className="text-xs text-gray-500 leading-tight">
                      {language === 'it' ? 'Outsourcing Campagne E-commerce (POAS)' : 'E-commerce Campaign Outsourcing (POAS)'}
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/partners/agency?id=6948869441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3"
                  >
                    <img
                      src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                      alt="Badge Ufficiale Google Partner Certificato - Internet Valore S.r.l."
                      className="h-8"
                    />
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink to={`/${language}/about`} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">{t('nav.about')}</span>
                  </NavLink>

                  <NavLink to={`/${language}/solutions`} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {language === 'it' ? 'Soluzioni per Ruolo' : 'Solutions by Role'}
                    </span>
                  </NavLink>

                  <NavLink to={`/${language}/manifesto`} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {language === 'it' ? 'Il Manifesto' : 'Our Manifesto'}
                    </span>
                  </NavLink>

                  {/* Mobile Services Menu */}
                  <div className="space-y-4">
                    <p className="text-base font-medium text-gray-900">{t('nav.services')}</p>
                    <div className="grid gap-y-4 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {service.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <NavLink to={`/${language}/specializations`} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">{t('nav.specializations')}</span>
                  </NavLink>
                  <NavLink to={`/${language}/casi-e-audit`} className="-m-3 p-3 flex items-center justify-between rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {language === 'it' ? 'Casi & Audit' : 'Cases & Audit'}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 mr-2">
                      {language === 'it' ? 'Riservati' : 'Private'}
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-4">
              <div className="space-y-3">
                <Link
                  to={`/${language}/casi-e-audit`}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700"
                >
                  {language === 'it' ? 'Richiedi Audit E-commerce' : 'Request E-commerce Audit'}
                </Link>
                <a href="tel:800940213" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  {t('nav.call')}
                </a>
                <p className="mt-4 text-center text-xs text-gray-500">
                  {language === 'it' 
                    ? 'Numero Verde 800 940 213 (7x24): risponde Leonardo, assistente AI digitale che raccoglie le informazioni per farti richiamare da un consulente umano.' 
                    : 'Toll-Free 800 940 213 (24/7): answered by Leonardo, digital AI assistant collecting info for a human consultant callback.'}
                </p>
              </div>
              <LanguageSelector />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}