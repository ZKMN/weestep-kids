import { dir } from 'i18next';
import type { Metadata } from 'next';
import Script from 'next/script';

import { App } from '@/appLayer/App';

import { weestepFont } from '@/shared/assets/font';
import { LANGUAGES } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  if (lng === 'es') {
    return {
      title: 'Todos los productos  | Weestep - be bigger',
      description: 'Todos los productos  | Weestep - be bigger',
      metadataBase: new URL(String(config?.urls.site)),
      icons: config?.icons,
      openGraph: {
        url: config?.urls.site,
        type: 'website',
        title: 'Todos los productos  | Weestep - be bigger',
        locale: lng,
        images: {
          url: '/images/logo.svg',
          width: '420px',
          height: '40px',
        },
      },
      twitter: {
        site: config?.urls.site,
        title: 'Todos los productos  | Weestep - be bigger',
        description: 'Todos los productos  | Weestep - be bigger',
        images: {
          url: '/images/logo.svg',
          width: '420px',
          height: '40px',
        },
      },
    };
  }

  return {
    title: 'All products | Weestep - be bigger',
    description: 'All products | Weestep - be bigger',
    metadataBase: new URL(String(config?.urls.site)),
    icons: config?.icons,
    openGraph: {
      url: config?.urls.site,
      type: 'website',
      title: 'All products | Weestep - be bigger',
      locale: lng,
      images: {
        url: '/images/logo.svg',
        width: '420px',
        height: '40px',
      },
    },
    twitter: {
      site: config?.urls.site,
      title: 'All products | Weestep - be bigger',
      description: 'All products | Weestep - be bigger',
      images: {
        url: '/images/logo.svg',
        width: '420px',
        height: '40px',
      },
    },
  };
}

export async function generateStaticParams() {
  return LANGUAGES.map((lng) => ({ lng }));
}

const RootLayout = ({
  children,
  params: { lng },
}: React.PropsWithChildren<{ params: { lng: string; }; }>) => {
  const jsonLd = {
    '@id': 'https://weestep-kids.vercel.app/es',
    '@type': 'Zapatos',
    name: 'Weestep Kids!',
    description: 'Weestep Kids',
  };

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={weestepFont.className}>
        <App>
          {children}
        </App>

        <Script
          id="jsonLd"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Clickjacking attack def */}
        <Script id="clickjack">
          {`
          function isInFrame() {
            try {
              return window.self !== window.top;
            } catch (e) {
              return true;
            }
          }
          
          // Sanitize the href value to prevent open redirection attacks
          function isCorrectURL(url) {
            const regex = /^(https?):\\/\\/[^\\s$.?#].[^\\s]*$/i;
            const correctURL = regex.test(url) ? url : null;
    
            // Encode any untrusted data in the URL
            if (correctURL && correctURL.startsWith("https://weestep-kids.vercel.app")) {
              return encodeURIComponent(correctURL);
            }
    
            return "https://weestep-kids.vercel.app";
          }
          
          // If the current window is in a frame, redirect to the sanitized URL
          if (isInFrame()) {
            const href = document.querySelector("a").getAttribute("href");
            const correctURL = isCorrectURL(href);
    
            window.top.location.replace(correctURL);
          }
    
          // Framebusting script to prevent clickjacking attacks
          if (window.self !== window.top) {
            const correctURL = isCorrectURL(window.location.href);
            
            window.top.location.replace(correctURL);
          }
          `}
        </Script>
      </body>
    </html>
  );
};
export default RootLayout;
