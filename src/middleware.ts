import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['id', 'en'],

//   // Used when no locale matches
//   defaultLocale: 'id',

//   // The directory where the translation files are located
//   // localePrefix: 'as-needed', // Set the locale prefix to 'as-needed'
//   localePrefix: 'never', // Set the locale prefix to 'never'
// });

const internationalizationMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],

  // The default locale that will be used when the locale is not specified
  defaultLocale: 'id',

  // Specify the directory where the translation files are located (relative to the root of the project)
  // translationDirectory: 'public/locales',

  // Set the locale prefix to 'as-needed'
  localePrefix: 'never', // Set the locale prefix to 'never'

  // Disable locale detection
  localeDetection: true,

  pathnames: {
    '/': '/',

    '/about': {
      en: '/about',
      id: '/tentang',
    },

    '/project': {
      en: '/project',
      id: '/proyek',
    },
  },
});

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  // Add a excludeLocale to the request object
  if (
    !request.nextUrl.pathname.startsWith('/api') &&
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.includes('.')
  ) {
    return internationalizationMiddleware(request);
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(id|en)/:path*'],
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(id|en)/:path*'], // Exclude specific paths

  // Match all pathnames except the ones that start with /api, /_next, and have a file extension
  // matcher: ['/((?!api|_next|.*\\..*).*)', '/(id|en)/:path*'],
};
