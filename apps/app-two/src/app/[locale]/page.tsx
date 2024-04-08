import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Switch from './components/Switch';

export default function Index({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');
  return (
    <>
      <h1 style={{ fontWeight: 900 }}>{t('title')}</h1>
      <div style={{ marginTop: 25 }}>
        <Link href={`/${params.locale}/users`}>{t('users-link')}</Link>
      </div>
      <div style={{ marginBottom: 25 }}>
        <Link href={`/${params.locale}/client-page`}>{t('client-link')}</Link>
      </div>
      <Switch path="" />
    </>
  );
}
