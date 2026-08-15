import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  reviews?: ReviewItem[];
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
  breadcrumbs,
  faq,
  reviews,
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

    // Schema helper
    const injectSchema = (id: string, schemaData: object | null) => {
      document.getElementById(id)?.remove();
      if (!schemaData) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    };

    // 5. Service Schema
    if (serviceType && serviceDescription) {
      injectSchema('service-schema', {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": serviceDescription,
        "url": canonicalUrl,
        "provider": {
          "@type": "Organization",
          "@id": "https://internetvalore.it/#organization",
          "name": "Internet Valore",
          "url": "https://internetvalore.it",
          "logo": "https://internetvalore.it/logo.svg",
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
          : ["Italy", "Europe", "Switzerland"],
        "availableLanguage": ["Italian", "English"],
        "serviceType": serviceType,
        ...(priceRange ? { "priceRange": priceRange } : {})
      });
    } else {
      injectSchema('service-schema', null);
    }

    // 6. BreadcrumbList Schema
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

    // 7. FAQPage Schema
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

    // 8. VideoObject Schema
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
          "name": "Internet Valore",
          "logo": {
            "@type": "ImageObject",
            "url": "https://internetvalore.it/logo.svg"
          }
        }
      });
    } else {
      injectSchema('video-schema', null);
    }

    // 9. SoftwareApplication Schema
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
          "name": "Internet Valore"
        },
        "url": canonicalUrl
      });
    } else {
      injectSchema('software-schema', null);
    }

    // 10. Reviews & AggregateRating Schema
    if (reviews && reviews.length > 0) {
      injectSchema('reviews-schema', {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://internetvalore.it/#localbusiness",
        "name": "Internet Valore",
        "url": "https://internetvalore.it",
        "image": "https://internetvalore.it/logo.svg",
        "telephone": "+39-800-940-213",
        "founder": {
          "@type": "Person",
          "@id": "https://internetvalore.it/#person-andrea-falzin",
          "name": "Andrea Falzin",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/falzin/"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Giovanni Battista Pergolesi 29",
          "addressLocality": "Milano",
          "postalCode": "20124",
          "addressCountry": "IT"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": reviews.length.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": reviews.map(item => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": item.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": item.rating.toString(),
            "bestRating": "5"
          },
          "reviewBody": item.body
        }))
      });
    } else {
      injectSchema('reviews-schema', null);
    }

    // Cleanup on unmount
    return () => {
      const schemasToClean = ['service-schema', 'breadcrumb-schema', 'faq-schema', 'video-schema', 'software-schema', 'reviews-schema'];
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
    priceRange,
    italianUrl,
    englishUrl,
    defaultUrl,
    breadcrumbs,
    faq,
    reviews,
    video,
    software
  ]);

  return null;
}
