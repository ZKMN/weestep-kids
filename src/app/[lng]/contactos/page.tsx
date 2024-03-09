/* eslint-disable max-len */
import { CorporateContactJsonLd, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

import { Contacts } from '@/pagesLayer/Contacts';

import { config } from '@/shared/lib/config';

const ContactsPage = () => (
  <>
    <CorporateContactJsonLd
      useAppDir
      url={String(config?.urls.site)}
      logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
      contactPoint={[
        {
          telephone: '+34611822584',
          contactType: 'atención al cliente',
          email: 'weestepkids@gmail.com',
          areaServed: 'ES',
          availableLanguage: ['Spanish'],
        },
      ]}
    />

    <SocialProfileJsonLd
      useAppDir
      type="Organization"
      name="Weestep Kids"
      url={String(config?.urls.site)}
      sameAs={[
        'https://www.instagram.com/weestep_kids_alicante/',
        'https://www.tiktok.com/@weestep_kids_alicante',
        'https://www.facebook.com/profile.php?id=61554203151592',
      ]}
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

    <Contacts />
  </>
);

export default ContactsPage;
