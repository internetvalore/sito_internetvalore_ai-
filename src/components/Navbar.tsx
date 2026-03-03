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
  const { t } = useLanguage();

  const services = [
    {
      name: t('services.sections.leadGeneration.title'),
      description: t('services.sections.leadGeneration.description'),
      href: '/services/lead-generation'
    },
    {
      name: t('services.sections.ecommerce.title'),
      description: t('services.sections.ecommerce.description'),
      href: '/services/ecommerce'
    },
    {
      name: t('services.sections.ads.title'),
      description: t('services.sections.ads.description'),
      href: '/services/ads'
    },
    {
      name: t('services.sections.analytics.title'),
      description: t('services.sections.analytics.description'),
      href: '/services/analytics'
    },
    {
      name: t('services.sections.instantWebsites.title'),
      description: t('services.sections.instantWebsites.description'),
      href: '/instant-websites'
    },
    {
      name: t('services.sections.landingPageProfessionali.title'),
      description: t('services.sections.landingPageProfessionali.description'),
      href: '/landing-page-professionali'
    },
    {
      name: t('services.sections.rispondiSubito.title'),
      description: t('services.sections.rispondiSubito.description'),
      href: '/services/rispondi-subito'
    },
    {
      name: t('services.sections.aiAgentsMilano.title'),
      description: t('services.sections.aiAgentsMilano.description'),
      href: '/services/sviluppo-agenti-ai-milano'
    }
  ];

  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">Internet Valore</span>
              <Logo />
              <div className="ml-3">
                <p className="text-base font-medium text-gray-900">Internet Valore</p>
                <p className="text-sm text-gray-500 leading-tight">Non lasciarli alla concorrenza. Sito in 7gg e prospect in 14</p>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex space-x-10">
            <NavLink to="/it/about" className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {t('nav.about')}
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
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-150"
                            >
                              <div className="ml-4">
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
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <NavLink to="/it/specializations" className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {t('nav.specializations')}
            </NavLink>
            <NavLink to="/it/testimonials" className={({ isActive }) => classNames(
              isActive ? 'text-blue-500' : 'text-gray-500',
              'text-base font-medium hover:text-gray-900 transition-colors'
            )}>
              {t('nav.testimonials')}
            </NavLink>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="tel:800940213" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mr-4">
              {t('nav.call')}
            </a>
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Logo />
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Internet Valore</p>
                    <p className="text-xs text-gray-500 leading-tight">Non lasciarli alla concorrenza. Sito in 7gg e prospect in 14</p>
                  </div>
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
                  <NavLink to="/it/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">{t('nav.about')}</span>
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

                  <NavLink to="/it/specializations" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">{t('nav.specializations')}</span>
                  </NavLink>
                  <NavLink to="/it/testimonials" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">{t('nav.testimonials')}</span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a href="tel:800940213" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  {t('nav.call')}
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  {t('nav.callUs')}
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