import { dir } from 'i18next';
import type { Metadata } from 'next';
import Script from 'next/script';

import { App } from '@/appLayer/App';

import { hendrixFont } from '@/shared/assets/font';
import { LANGUAGES } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  return {
    title: 'Weestep Kids Zapatos',
    description: 'Weestep Kids Zapatos',
    // metadataBase: new URL(String(config?.urls.imgCDN)),
    openGraph: {
      url: config?.urls.site,
      type: 'website',
      title: 'Weestep Kids Zapatos',
      locale: lng,
      images: {
        url: 'https://retailinsider.b-cdn.net/wp-content/uploads/2022/03/Screen-Shot-2022-03-16-at-6.09.19-PM.png',
        width: '50px',
        height: '50px',
      },
    },
    twitter: {
      site: config?.urls.site,
      title: 'Weestep Kids Zapatos',
      description: 'Weestep Kids Zapatos',
      images: {
        url: 'https://retailinsider.b-cdn.net/wp-content/uploads/2022/03/Screen-Shot-2022-03-16-at-6.09.19-PM.png',
        width: '50px',
        height: '50px',
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
      <body className={hendrixFont.className}>
        <App>
          {children}
        </App>

        <style
          id="clickjack"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: 'html { display: none }' }}
        />

        <Script
          id="jsonLd"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Clickjacking attack def */}
        <Script id="jack">
          {`if (self == top) {
            // Everything checks out, show the page.
            document.documentElement.style.display = 'block';
            } else {
            // Break out of the frame.
            top.location = self.location;
            }
          `}
        </Script>
      </body>
    </html>
  );
};
export default RootLayout;
