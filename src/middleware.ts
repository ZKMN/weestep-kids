import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import { FALLBACK_LNG, I18N_COOKIE_NAME, LANGUAGES } from './shared/consts';

acceptLanguage.languages(LANGUAGES);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(I18N_COOKIE_NAME)) lng = acceptLanguage.get(req.cookies.get(I18N_COOKIE_NAME)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = FALLBACK_LNG;

  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return undefined;
  }

  // Redirect if lng in path is not supported
  if (!LANGUAGES.some((lng) => req.nextUrl.pathname.startsWith(`/${lng}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(String(req.headers.get('referer')));
    const lngInReferer = LANGUAGES.find((lng) => refererUrl.pathname.startsWith(`/${lng}`));
    const response = NextResponse.next();

    if (lngInReferer) {
      response.cookies.set(I18N_COOKIE_NAME, lngInReferer);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
