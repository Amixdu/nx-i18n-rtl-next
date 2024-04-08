import { useTranslation } from '../../../i18n';
import { FooterBase } from './FooterBase';

export const Footer = async ({
  lang,
  path,
}: {
  lang: string;
  path: string;
}) => {
  const { t } = await useTranslation(lang, 'footer');
  return <FooterBase t={t} lang={lang} path={path} />;
};
