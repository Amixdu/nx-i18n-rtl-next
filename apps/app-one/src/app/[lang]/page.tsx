import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'

export default async function Page({ params }: { params: { lang: string } }) {
  const { t } = await useTranslation(params.lang, 'main-page')
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${params.lang}/users`}>
        {t('to-second-page')}
      </Link>
      <br />
      <Link href={`/${params.lang}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Footer lang={params.lang} path=''/>
    </>
  )
}