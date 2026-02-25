import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  priceRange?: string;
  serviceType?: string;
  serviceDescription?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  path, 
  image = 'https://internetvalore.it/og-image.jpg',
  priceRange,
  serviceType,
  serviceDescription
}: MetaTagsProps) {
  const { language } = useLanguage();
  const domain = 'https://internetvalore.it';
  
  // Normalize path to ensure it starts with a slash but doesn't end with one
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const trimmedPath = normalizedPath.endsWith('/') ? normalizedPath.slice(0, -1) : normalizedPath;
  
  // Generate language-specific URLs
  const italianUrl = `${domain}/it${trimmedPath}`;
  const englishUrl = `${domain}/en${trimmedPath}`;
  const defaultUrl = `${domain}${trimmedPath}`;
  
  // Set the canonical URL based on the current language
  const canonicalUrl = language === 'it' ? italianUrl : englishUrl;

  useEffect(() => {
    // Basic meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'website');
    document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', 'Internet Valore');
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'it' ? 'it_IT' : 'en_US');
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', language === 'it' ? 'en_US' : 'it_IT');

    // Twitter Card tags
    document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', 'summary_large_image');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);

    // Canonical and alternate links
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Handle hreflang tags
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

    // Set proper URLs for hreflang tags
    alternateItLink.setAttribute('href', italianUrl);
    alternateEnLink.setAttribute('href', englishUrl);
    alternateXDefaultLink.setAttribute('href', defaultUrl);

    // Service schema for service pages
    if (serviceType && serviceDescription) {
      const serviceScriptId = 'service-schema';
      let serviceScript = document.getElementById(serviceScriptId);
      if (serviceScript) {
        serviceScript.remove();
      }
      serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.id = serviceScriptId;
      serviceScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": serviceDescription,
        "provider": {
          "@type": "Organization",
          "name": "Internet Valore",
          "url": "https://internetvalore.it",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Giovanni Battista Pergolesi 29",
            "addressLocality": "Milano",
            "postalCode": "20124",
            "addressCountry": "IT"
          }
        },
        "areaServed": language === 'it' 
          ? ["Italia", "Lombardia", "Milano", "Monza-Lecco-Como", "Canton Ticino"]
          : ["Europe"],
        "availableLanguage": [language === 'it' ? "Italian" : "English"],
        "serviceType": serviceType,
        "priceRange": priceRange || "€€€"
      });
      document.head.appendChild(serviceScript);

      // Add FAQ schema for service pages
      const faqScriptId = 'faq-schema';
      let faqScript = document.getElementById(faqScriptId);
      if (faqScript) {
        faqScript.remove();
      }
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = faqScriptId;
      faqScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": language === 'it' ? "Quali sono i tempi di attivazione?" : "What are the activation times?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": language === 'it' 
                ? "I tempi di attivazione variano in base al servizio, ma generalmente siamo operativi in 5-7 giorni lavorativi."
                : "Activation times vary depending on the service, but generally we are operational in 5-7 working days."
            }
          },
          {
            "@type": "Question",
            "name": language === 'it' ? "Come vengono misurati i risultati?" : "How are results measured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": language === 'it'
                ? "Utilizziamo strumenti avanzati di analytics per monitorare ogni aspetto e forniamo report dettagliati periodici."
                : "We use advanced analytics tools to monitor every aspect and provide detailed periodic reports."
            }
          }
        ]
      });
      document.head.appendChild(faqScript);
    } else {
      document.getElementById('service-schema')?.remove();
      document.getElementById('faq-schema')?.remove();
    }
  }, [title, description, canonicalUrl, image, language, serviceType, serviceDescription, priceRange, italianUrl, englishUrl, defaultUrl]);

  return null;
}