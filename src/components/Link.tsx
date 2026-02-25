import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Link({ to, ...props }: LinkProps) {
  const { getCurrentLanguagePath } = useLanguage();
  const languagePath = typeof to === 'string' ? getCurrentLanguagePath(to) : to;
  
  return <RouterLink to={languagePath} {...props} />;
}
