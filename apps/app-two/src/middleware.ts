import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  // Ignoring internal paths
  matcher: ['/((?!_next).*)']
}