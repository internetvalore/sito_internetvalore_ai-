import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BUSINESS_INFO, VERIFIED_REVIEWS, CORE_SERVICES_IT, CORE_SERVICES_EN } from '../seo/schemaData';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  company?: string;
  rating: number;
  body: string;
  datePublished?: string;
}

export interface ServiceOfferItem {
  name: string;
  description: string;
  url?: string;
  serviceType?: string;
  priceRange?: string;
}

export interface VideoSchemaData {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  transcript?: string;
}

export interface SoftwareSchemaData {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
}

export interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  pageType?: 'website' | 'article' | 'about' | 'contact' | 'service';
  priceRange?: string;
  serviceType?: string;
  serviceDescription?: string;
  serviceOffers?: ServiceOfferItem[];
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  reviews?: ReviewItem[];
  includeLocalBusiness?: boolean;
  video?: VideoSchemaData;
  software?: SoftwareSchemaData;
}

export default function MetaTags({
  title,
  description,
  path,
  image = 'https://internetvalore.it/og-image.jpg',
  noIndex = false,
  pageType = 'website',
  priceRange,
  serviceType,
  serviceDescription,
  serviceOffers,
  breadcrumbs,
  faq,
  reviews,
  includeLocalBusiness = false,
  video,
  software
}: MetaTagsProps) {
  const { language } = useLanguage();
  const domain = 'https://internetvalore.it';

  // Normalize path without trailing slash (except root)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const isRoot = normalizedPath === '/' || normalizedPath === '';
  const cleanPath = isRoot ? '' : (normalizedPath.endsWith('/') ? normalizedPath.slice(0, -1) : normalizedPath);

  const italianUrl = isRoot ? `${domain}/it/` : `${domain}/it${cleanPath}`;
  const englishUrl = isRoot ? `${domain}/en/` : `${domain}/en${cleanPath}`;
  const defaultUrl = isRoot ? `${domain}/` : `${domain}${cleanPath}`;

  const canonicalUrl = language === 'it' ? italianUrl : englishUrl;

  useEffect(() => {
    // 1. Page Title & Meta Description
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 2. Open Graph Tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:image:alt', title, true);
    setMeta('og:type', pageType === 'article' ? 'article' : 'website', true);
    setMeta('og:site_name', 'Internet Valore', true);
    setMeta('og:locale', language === 'it' ? 'it_IT' : 'en_US', true);
    setMeta('og:locale:alternate', language === 'it' ? 'en_US' : 'it_IT', true);

    // 3. Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:image:alt', title);

    // 4. Canonical & Hreflang Link tags
    const setLink = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setLink('canonical', canonicalUrl);
    setLink('alternate', italianUrl, 'it');
    setLink('alternate', englishUrl, 'en');
    setLink('alternate', defaultUrl, 'x-default');

    // Schema injection helper
    const injectSchema = (id: string, schemaData: object | null) => {
      document.getElementById(id)?.remove();
      if (!schemaData) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    };

    // Shared Provider Object for Service schemas
    const localBusinessProvider = {
      "@type": "LocalBusiness",
      "@id": "https://internetvalore.it/#localbusiness",
      "name": BUSINESS_INFO.name,
      "legalName": BUSINESS_INFO.legalName,
      "url": BUSINESS_INFO.url,
      "logo": BUSINESS_INFO.logo,
      "image": BUSINESS_INFO.image,
      "telephone": BUSINESS_INFO.telephone,
      "email": BUSINESS_INFO.email,
      "priceRange": BUSINESS_INFO.priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.streetAddress,
        "addressLocality": BUSINESS_INFO.address.addressLocality,
        "addressRegion": BUSINESS_INFO.address.addressRegion,
        "postalCode": BUSINESS_INFO.address.postalCode,
        "addressCountry": BUSINESS_INFO.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_INFO.geo.latitude,
        "longitude": BUSINESS_INFO.geo.longitude
      }
    };

    // 5. LocalBusiness & Organization Schema (with AggregateRating & Reviews)
    const activeReviews = reviews || (isRoot || includeLocalBusiness ? VERIFIED_REVIEWS : undefined);
    
    if (includeLocalBusiness || isRoot || (activeReviews && activeReviews.length > 0)) {
      const reviewList = (activeReviews || VERIFIED_REVIEWS).map(item => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": item.author
        },
        "datePublished": item.datePublished || "2024-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": item.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": item.body,
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": BUSINESS_INFO.name,
          "image": BUSINESS_INFO.logo,
          "telephone": BUSINESS_INFO.telephone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.streetAddress,
            "addressLocality": BUSINESS_INFO.address.addressLocality,
            "addressRegion": BUSINESS_INFO.address.addressRegion,
            "postalCode": BUSINESS_INFO.address.postalCode,
            "addressCountry": BUSINESS_INFO.address.addressCountry
          }
        }
      }));

      const coreServices = language === 'it' ? CORE_SERVICES_IT : CORE_SERVICES_EN;

      injectSchema('localbusiness-schema', {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://internetvalore.it/#localbusiness",
        "name": BUSINESS_INFO.name,
        "legalName": BUSINESS_INFO.legalName,
        "url": canonicalUrl,
        "logo": BUSINESS_INFO.logo,
        "image": [BUSINESS_INFO.image, BUSINESS_INFO.logo],
        "telephone": BUSINESS_INFO.telephone,
        "email": BUSINESS_INFO.email,
        "priceRange": BUSINESS_INFO.priceRange,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_INFO.address.streetAddress,
          "addressLocality": BUSINESS_INFO.address.addressLocality,
          "addressRegion": BUSINESS_INFO.address.addressRegion,
          "postalCode": BUSINESS_INFO.address.postalCode,
          "addressCountry": BUSINESS_INFO.address.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_INFO.geo.latitude,
          "longitude": BUSINESS_INFO.geo.longitude
        },
        "openingHoursSpecification": BUSINESS_INFO.openingHours.map(spec => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": spec.dayOfWeek,
          "opens": spec.opens,
          "closes": spec.closes
        })),
        "areaServed": BUSINESS_INFO.areaServed,
        "sameAs": BUSINESS_INFO.sameAs,
        "founder": {
          "@type": "Person",
          "@id": "https://internetvalore.it/#person-andrea-falzin",
          "name": BUSINESS_INFO.founder.name,
          "jobTitle": BUSINESS_INFO.founder.jobTitle,
          "image": BUSINESS_INFO.founder.image,
          "sameAs": BUSINESS_INFO.founder.sameAs,
          "description": BUSINESS_INFO.founder.description
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": (activeReviews?.length || VERIFIED_REVIEWS.length).toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": reviewList,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": language === 'it' ? "Servizi di Marketing Digitale & Lead Generation" : "Digital Marketing & Lead Generation Services",
          "itemListElement": coreServices.map(srv => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": srv.id,
              "name": srv.name,
              "serviceType": srv.serviceType,
              "description": srv.description,
              "url": srv.url
            }
          }))
        }
      });
    } else {
      injectSchema('localbusiness-schema', null);
    }

    // 6. Service & OfferCatalog Schema (For Service Pages)
    if (serviceType || serviceDescription || (serviceOffers && serviceOffers.length > 0)) {
      const catalogOffers = serviceOffers ? serviceOffers.map((offer) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description,
          "url": offer.url || canonicalUrl,
          "serviceType": offer.serviceType || serviceType,
          "provider": localBusinessProvider
        }
      })) : undefined;

      injectSchema('service-schema', {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": serviceDescription || description,
        "url": canonicalUrl,
        "serviceType": serviceType || title,
        "provider": localBusinessProvider,
        "areaServed": language === 'it'
          ? ["Italia", "Lombardia", "Milano", "Monza", "Como", "Lecco", "Canton Ticino", "Svizzera"]
          : ["Italy", "Europe", "Switzerland"],
        "availableLanguage": ["Italian", "English"],
        ...(priceRange ? {
          "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": priceRange
            }
          }
        } : {}),
        ...(catalogOffers ? {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": title,
            "itemListElement": catalogOffers
          }
        } : {})
      });
    } else {
      injectSchema('service-schema', null);
    }

    // 7. BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectSchema('breadcrumb-schema', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => {
          const itemCleanPath = item.path === '/' ? '' : item.path;
          const fullItemUrl = isRoot && item.path === '/' 
            ? `${domain}/${language}/` 
            : `${domain}/${language}${itemCleanPath}`;
          return {
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": fullItemUrl
          };
        })
      });
    } else {
      injectSchema('breadcrumb-schema', null);
    }

    // 8. FAQPage Schema
    if (faq && faq.length > 0) {
      injectSchema('faq-schema', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    } else {
      injectSchema('faq-schema', null);
    }

    // 9. VideoObject Schema
    if (video) {
      injectSchema('video-schema', {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.name,
        "description": video.description,
        "thumbnailUrl": [video.thumbnailUrl],
        "uploadDate": video.uploadDate,
        "embedUrl": video.embedUrl,
        ...(video.transcript ? { "transcript": video.transcript } : {}),
        "publisher": {
          "@type": "Organization",
          "@id": "https://internetvalore.it/#organization",
          "name": BUSINESS_INFO.name,
          "logo": {
            "@type": "ImageObject",
            "url": BUSINESS_INFO.logo
          }
        }
      });
    } else {
      injectSchema('video-schema', null);
    }

    // 10. SoftwareApplication Schema
    if (software) {
      injectSchema('software-schema', {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": software.name,
        "description": software.description,
        "applicationCategory": software.applicationCategory,
        "operatingSystem": software.operatingSystem,
        "author": {
          "@type": "Organization",
          "@id": "https://internetvalore.it/#organization",
          "name": BUSINESS_INFO.name
        },
        "url": canonicalUrl
      });
    } else {
      injectSchema('software-schema', null);
    }

    // Cleanup on unmount
    return () => {
      const schemasToClean = [
        'localbusiness-schema',
        'service-schema',
        'breadcrumb-schema',
        'faq-schema',
        'video-schema',
        'software-schema'
      ];
      schemasToClean.forEach(id => document.getElementById(id)?.remove());
    };
  }, [
    title,
    description,
    canonicalUrl,
    image,
    noIndex,
    pageType,
    language,
    serviceType,
    serviceDescription,
    serviceOffers,
    priceRange,
    italianUrl,
    englishUrl,
    defaultUrl,
    breadcrumbs,
    faq,
    reviews,
    includeLocalBusiness,
    video,
    software
  ]);

  return null;
}
