/* eslint-disable max-len */
import { dir } from 'i18next';
import { Metadata } from 'next';
import Script from 'next/script';
import { BrandJsonLd, LocalBusinessJsonLd } from 'next-seo';

import { App } from '@/appLayer/App';

import { weestepFont } from '@/shared/assets/font';
import { ICONS, LANGUAGES } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  if (lng === 'es') {
    return {
      title: 'Todos los productos | Weestep - be bigger',
      description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
      metadataBase: new URL(String(config?.urls.site)),
      category: 'Zapatos',
      applicationName: 'Weestep kids',
      alternates: {
        canonical: String(config?.urls.site),
        languages: {
          es: `${config?.urls.site}/es`,
          en: `${config?.urls.site}/en`,
        },
      },
      keywords: [
        'Zapatos para niños',
        'Calzado infantil',
        'Zapatos para bebés',
        'Zapatos lindos y cómodos',
        'Calzado moderno para niños',
        'Zapatos elegantes para niños',
        'Zapatos asequibles para niños',
        'Calzado de alta calidad para niños',
        'Tienda de zapatos para niños en línea',
        'Marcas de calzado infantil',
        'Mejores zapatos para niños',
        'Tallas de zapatos para niños',
        'Zapatos de moda para niños',
        'Venta de zapatos para niños',
        'Tendencias de calzado infantil',
        'Zapatos para niños varones',
        'Zapatos para niñas',
        'Zapatillas para niños',
        'Sandalias para niños',
        'Zapatos escolares para niños',
        'Zapatos deportivos para niños',
        'Zapatos casuales para niños',
        'Accesorios para zapatos infantiles',
        'Zapatos ecológicos para niños',
        'Descuentos en zapatos para niños',
        'Reseñas de zapatos infantiles',
        'Guía de compra de zapatos para niños',
        'Liquidación de zapatos para niños',
        'Tendencias de moda en zapatos para niños',
        'Zapatos ortopédicos para niños',
        'Calzado infantil de soporte',
        'Sandalias ortopédicas para niños',
        'Zapatos con soporte para el arco para niños',
      ],
      icons: ICONS,
      robots: {
        index: false,
        follow: false,
        nosnippet: false,
        notranslate: false,
        noimageindex: false,
        noarchive: false,
        'max-snippet': -1,
        'max-image-preview': 'standard',
        'max-video-preview': -1,
        googleBot: {
          index: false,
          follow: false,
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: false,
          'max-snippet': -1,
          'max-image-preview': 'standard',
          'max-video-preview': -1,
        },
      },
      openGraph: {
        url: config?.urls.site,
        type: 'website',
        title: 'Todos los productos | Weestep - be bigger',
        locale: lng,
        images: {
          url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
          width: 200,
          height: 200,
        },
      },
      twitter: {
        site: config?.urls.site,
        title: 'Todos los productos | Weestep - be bigger',
        description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
        images: {
          url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
          width: 200,
          height: 200,
        },
      },
    };
  }

  return {
    title: 'All products | Weestep - be bigger',
    description: 'Discover a wide selection of stylish and comfortable kids\' shoes at Weestep Kids. Our collection features trendy sneakers, durable sandals, and adorable boots, all crafted with quality materials. From toddler to pre-teen sizes, find the perfect fit for your little one. Shop affordable and on-trend children\'s footwear at Weestep Kids and ensure your child takes every step in style and comfort. Explore our range today!',
    metadataBase: new URL(String(config?.urls.site)),
    category: 'Shoes',
    applicationName: 'Weestep kids',
    alternates: {
      canonical: String(config?.urls.site),
      languages: {
        es: `${config?.urls.site}/es`,
        en: `${config?.urls.site}/en`,
      },
    },
    keywords: [
      'Kids shoes',
      "Children's footwear",
      'Toddler shoes',
      'Baby shoes',
      'Cute and comfortable shoes',
      "Trendy kids' footwear",
      "Stylish children's shoes",
      'Affordable kids shoes',
      "High-quality children's footwear",
      'Kids shoe store online',
      "Children's shoe brands",
      'Best shoes for kids',
      "Children's shoe sizes",
      'Fashionable kids shoes',
      'Kids shoe sale',
      "Children's shoe trends",
      "Boys' shoes",
      "Girls' shoes",
      'Kids sneakers',
      "Children's sandals",
      'School shoes for kids',
      "Kids' sports shoes",
      'Casual kids shoes',
      "Children's shoe accessories",
      'Eco-friendly kids shoes',
      'Kids shoe discounts',
      "Children's shoe reviews",
      'Kids shoe shopping guide',
      'Kids shoe clearance',
      "Children's shoe fashion trends",
      'Orthopedic kids shoes',
      "Supportive children's footwear",
      'Orthopedic sandals for kids',
      'Arch support shoes for children',
    ],
    icons: ICONS,
    robots: {
      index: false,
      follow: false,
      nosnippet: false,
      notranslate: false,
      noimageindex: false,
      noarchive: false,
      'max-snippet': -1,
      'max-image-preview': 'standard',
      'max-video-preview': -1,
      googleBot: {
        index: false,
        follow: false,
        nosnippet: false,
        notranslate: false,
        noimageindex: false,
        noarchive: false,
        'max-snippet': -1,
        'max-image-preview': 'standard',
        'max-video-preview': -1,
      },
    },
    openGraph: {
      url: config?.urls.site,
      type: 'website',
      title: 'All products | Weestep - be bigger',
      locale: lng,
      images: {
        url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        width: 200,
        height: 200,
      },
    },
    twitter: {
      site: config?.urls.site,
      card: 'summary_large_image',
      title: 'All products | Weestep - be bigger',
      description: 'Discover a wide selection of stylish and comfortable kids\' shoes at Weestep Kids. Our collection features trendy sneakers, durable sandals, and adorable boots, all crafted with quality materials. From toddler to pre-teen sizes, find the perfect fit for your little one. Shop affordable and on-trend children\'s footwear at Weestep Kids and ensure your child takes every step in style and comfort. Explore our range today!',
      images: {
        url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        width: 200,
        height: 200,
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
}: React.PropsWithChildren<{ params: { lng: string; }; }>) => (
  <html lang={lng} dir={dir(lng)}>
    <body className={weestepFont.className}>
      <BrandJsonLd
        useAppDir
        id={String(config?.urls.site)}
        type="Zapatería infantil"
        slogan="Weestep, ser más grande!"
        logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
        aggregateRating={{
          ratingValue: '5',
          ratingCount: '600',
        }}
      />
      <LocalBusinessJsonLd
        useAppDir
        type="Zapatería infantil"
        id={String(config?.urls.site)}
        name="Weestep Kids"
        description="Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!"
        url="https://www.google.com/maps/place/Weestep+Kids/@38.3451796,-0.4872723,17z/data=!3m1!4b1!4m6!3m5!1s0xd623756defcf3f7:0x78e330b29a88f2f8!8m2!3d38.3451796!4d-0.4872723!16s%2Fg%2F11vjdvrb87?entry=ttu"
        telephone="+34611822584"
        address={{
          streetAddress: 'Carrer Jerusalem, 24',
          addressLocality: 'Alicante',
          addressRegion: 'Alacant',
          postalCode: '03001',
          addressCountry: 'ES',
        }}
        geo={{
          latitude: '38.3451796',
          longitude: '-0.4872723',
        }}
        images={[
          'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        ]}
        sameAs={[
          'https://weestep.eu/',
          'https://weestep.es/',
        ]}
        openingHours={[
          {
            opens: '11:00',
            closes: '20:00',
            dayOfWeek: [
              'Lunes',
              'Martes',
              'Miércoles',
              'Jueves',
              'Viernes',
              'Sábado',
            ],
            validFrom: '2024-02-01',
          },
        ]}
        rating={{
          ratingValue: '5',
          ratingCount: '600',
        }}
        makesOffer={[
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'EUR',
              price: '10-75',
            },
            itemOffered: {
              name: 'Zapatos para niños',
              description: 'Creamos calzado infantil ortopédico, cómodo, de alta calidad y con estilo.',
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '38.3451796',
              longitude: '-0.4872723',
            },
            geoRadius: '2000',
          },
        ]}
      />

      <App>
        {children}
      </App>

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

export default RootLayout;
