'use client';

import { FooterBase } from './FooterBase';
import { useTranslation } from '../../../i18n/client';

export const Footer = ({ lang, path }: { lang: string; path: string }) => {
  const { t } = useTranslation(lang, 'footer', {});
  return <FooterBase t={t} lang={lang} path={path} />;
};
