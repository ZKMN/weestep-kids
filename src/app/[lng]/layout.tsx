/* eslint-disable max-len */
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
      title: 'Todos los productos | Weestep - be bigger',
      description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
      metadataBase: new URL(String(config?.urls.site)),
      icons: config?.icons,
      openGraph: {
        url: config?.urls.site,
        type: 'website',
        title: 'Todos los productos | Weestep - be bigger',
        locale: lng,
        images: {
          url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
          width: 240,
          height: 240,
        },
      },
      twitter: {
        site: config?.urls.site,
        title: 'Todos los productos | Weestep - be bigger',
        description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
        images: {
          url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
          width: 240,
          height: 240,
        },
      },
    };
  }

  return {
    title: 'All products | Weestep - be bigger',
    description: 'Discover a wide selection of stylish and comfortable kids\' shoes at Weestep Kids. Our collection features trendy sneakers, durable sandals, and adorable boots, all crafted with quality materials. From toddler to pre-teen sizes, find the perfect fit for your little one. Shop affordable and on-trend children\'s footwear at Weestep Kids and ensure your child takes every step in style and comfort. Explore our range today!',
    metadataBase: new URL(String(config?.urls.site)),
    icons: config?.icons,
    openGraph: {
      url: config?.urls.site,
      type: 'website',
      title: 'All products | Weestep - be bigger',
      locale: lng,
      images: {
        url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        width: 240,
        height: 240,
      },
    },
    twitter: {
      site: config?.urls.site,
      title: 'All products | Weestep - be bigger',
      description: 'Discover a wide selection of stylish and comfortable kids\' shoes at Weestep Kids. Our collection features trendy sneakers, durable sandals, and adorable boots, all crafted with quality materials. From toddler to pre-teen sizes, find the perfect fit for your little one. Shop affordable and on-trend children\'s footwear at Weestep Kids and ensure your child takes every step in style and comfort. Explore our range today!',
      images: {
        url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        width: 240,
        height: 240,
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
    '@id': config?.urls.site,
    '@type': 'Zapatos',
    name: 'Weestep Kids!',
    description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
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
              if (correctURL && correctURL.startsWith("https://weestep-kids.es/")) {
                return encodeURIComponent(correctURL);
              }
      
              return "https://weestep-kids.es/";
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
