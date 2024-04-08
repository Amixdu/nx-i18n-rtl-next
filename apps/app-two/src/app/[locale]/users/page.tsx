import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Switch from '../components/Switch';

export default function Page({ params }: { params: { locale: string } }) {
  const t = useTranslations('Users');
  return (
    <>
      <h1 style={{ fontWeight: 900 }}>{t('title')}</h1>
      <div>
        <Link href={`/${params.locale}`}>{t('main-link')}</Link>
      </div>
      <br />
      <Switch path="users" />
    </>
  );
}
