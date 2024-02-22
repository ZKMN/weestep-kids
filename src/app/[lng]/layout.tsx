import { dir } from 'i18next';
import type { Metadata } from 'next';
import Script from 'next/script';

import { App } from '@/appLayer/App';

import { hendrixFont } from '@/shared/assets/font';
import { LANGUAGES } from '@/shared/consts';

export const metadata: Metadata = {
  title: 'Weestep Kids Zapatos',
  description: 'Weestep Kids Zapatos',
};

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
