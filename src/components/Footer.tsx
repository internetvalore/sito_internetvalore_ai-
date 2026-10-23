import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/internet-valore-s.r.l./',
      icon: Linkedin
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/internetvalore/',
      icon: Facebook
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ecommerceleadgeneration/',
      icon: Instagram
    }
  ];

  return (
    <footer className="footer-premium">
      <div className="shell py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a
            href="https://www.google.com/partners/agency?id=6948869441"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-4 py-2 transition-colors duration-220 hover:bg-paper"
            title="Google Partner Certificato"
          >
            <img
              src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
              alt="Badge Ufficiale Google Partner Certificato - Internet Valore S.r.l."
              className="h-8 w-auto"
            />
            <span className="text-[0.8rem] font-semibold text-ink-600">Google Partner Certificato</span>
          </a>

          <div className="text-[0.875rem] text-ink-500">
            P.IVA 06767350967
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-ink-900 transition-colors duration-220"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.iubenda.com/privacy-policy/77132692"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-ink-500 hover:text-ink-900 transition-colors duration-220"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/77132692/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] text-ink-500 hover:text-ink-900 transition-colors duration-220"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
