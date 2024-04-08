import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../../i18n/settings';
import { TFunction } from 'i18next';

export const FooterBase = async ({ lang, t, path }: { lang: string; t: TFunction, path: string }) => {
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        {{ lang }}
      </Trans>
      {languages
        .filter((l) => lang !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}/${path}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
