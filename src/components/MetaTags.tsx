import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  priceRange?: string;
  serviceType?: string;
  serviceDescription?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
}

export default function MetaTags({
  title,
  description,
  path,
  image = 'https://internetvalore.it/og-image.jpg',
  priceRange,
  serviceType,
  serviceDescription,
  breadcrumbs,
  faq
}: MetaTagsProps) {
  const { language } = useLanguage();
  const domain = 'https://internetvalore.it';

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const trimmedPath = normalizedPath.endsWith('/') ? normalizedPath.slice(0, -1) : normalizedPath;

  const italianUrl = `${domain}/it${trimmedPath}`;
  const englishUrl = `${domain}/en${trimmedPath}`;
  const defaultUrl = `${domain}${trimmedPath}`;

  const canonicalUrl = language === 'it' ? italianUrl : englishUrl;

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'website');
    document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', 'Internet Valore');
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'it' ? 'it_IT' : 'en_US');
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', language === 'it' ? 'en_US' : 'it_IT');

    document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', 'summary_large_image');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let alternateItLink = document.querySelector('link[hreflang="it"]');
    let alternateEnLink = document.querySelector('link[hreflang="en"]');
    let alternateXDefaultLink = document.querySelector('link[hreflang="x-default"]');

    if (!alternateItLink) {
      alternateItLink = document.createElement('link');
      alternateItLink.setAttribute('rel', 'alternate');
      alternateItLink.setAttribute('hreflang', 'it');
      document.head.appendChild(alternateItLink);
    }
    if (!alternateEnLink) {
      alternateEnLink = document.createElement('link');
      alternateEnLink.setAttribute('rel', 'alternate');
      alternateEnLink.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateEnLink);
    }
    if (!alternateXDefaultLink) {
      alternateXDefaultLink = document.createElement('link');
      alternateXDefaultLink.setAttribute('rel', 'alternate');
      alternateXDefaultLink.setAttribute('hreflang', 'x-default');
      document.head.appendChild(alternateXDefaultLink);
    }

    alternateItLink.setAttribute('href', italianUrl);
    alternateEnLink.setAttribute('href', englishUrl);
    alternateXDefaultLink.setAttribute('href', defaultUrl);

    // Service schema
    if (serviceType && serviceDescription) {
      const serviceScriptId = 'service-schema';
      document.getElementById(serviceScriptId)?.remove();
      const serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.id = serviceScriptId;
      serviceScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": serviceDescription,
        "url": canonicalUrl,
        "provider": {
          "@type": "Organization",
          "name": "Internet Valore",
          "url": "https://internetvalore.it",
          "logo": "https://internetvalore.it/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Giovanni Battista Pergolesi 29",
            "addressLocality": "Milano",
            "postalCode": "20124",
            "addressCountry": "IT"
          },
          "telephone": "+39-800-940-213"
        },
        "areaServed": language === 'it'
          ? ["Italia", "Lombardia", "Milano", "Monza-Lecco-Como", "Canton Ticino"]
          : ["Italy", "Europe"],
        "availableLanguage": ["Italian", "English"],
        "serviceType": serviceType,
        ...(priceRange && { "priceRange": priceRange })
      });
      document.head.appendChild(serviceScript);
    } else {
      document.getElementById('service-schema')?.remove();
    }

    // BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbScriptId = 'breadcrumb-schema';
      document.getElementById(breadcrumbScriptId)?.remove();
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.id = breadcrumbScriptId;
      breadcrumbScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${domain}/${language}${item.path}`
        }))
      });
      document.head.appendChild(breadcrumbScript);
    } else {
      document.getElementById('breadcrumb-schema')?.remove();
    }

    // FAQ schema
    if (faq && faq.length > 0) {
      const faqScriptId = 'faq-schema';
      document.getElementById(faqScriptId)?.remove();
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = faqScriptId;
      faqScript.text = JSON.stringify({
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
      document.head.appendChild(faqScript);
    } else {
      document.getElementById('faq-schema')?.remove();
    }
  }, [title, description, canonicalUrl, image, language, serviceType, serviceDescription, priceRange, italianUrl, englishUrl, defaultUrl, breadcrumbs, faq]);

  return null;
}
