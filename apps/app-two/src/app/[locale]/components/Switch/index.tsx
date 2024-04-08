import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Switch({ path }: { path: string }) {
  const t = useTranslations('Switch');
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/en/${path}`} style={{ marginRight: 5 }}>
        en
      </Link>
      {" | "}
      <Link href={`/ar/${path}`}>ar</Link>
    </>
  );
}
