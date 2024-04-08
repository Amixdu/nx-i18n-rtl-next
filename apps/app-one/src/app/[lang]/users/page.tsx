import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Footer } from '../components/Footer'

export default async function Page({ params }: { params: { lang: string } }) {
  const { t } = await useTranslation(params.lang, 'users-page')
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${params.lang}`}>
        {t('back-to-home')}
      </Link>
      <Footer lang={params.lang} path='users'/>
    </>
  )
}