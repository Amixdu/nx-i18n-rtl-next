import { useTranslations } from 'next-intl';
import Switch from '../components/Switch';
import Expandable from '../components/ClientComponent';

export default function Page() {
  const t = useTranslations('ClientPage');
  return (
    <>
      <Expandable title={t("title")}>
        <p>{t("data")}</p>
      </Expandable>
      <Switch path="client-page" />
    </>
  );
}
