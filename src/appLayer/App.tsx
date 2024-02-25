'use client';

/* eslint-disable max-len */
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { BrandJsonLd, LocalBusinessJsonLd, NextSeo } from 'next-seo';

import { MUIThemeProvider } from '@/appLayer/providers';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { config } from '@/shared/lib/config';

import { NotifyContainer } from './components';

import './styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <NextSeo
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
    />

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
      name="Weestep Kids!"
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
            description: 'Сreamos calzado infantil ortopédico, cómodo, de alta calidad y con estilo.',
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

    <MUIThemeProvider>

      <NotifyContainer />

      <Header />

      <main>{children}</main>

      <Footer />
    </MUIThemeProvider>
  </AppRouterCacheProvider>
);
