/* eslint-disable max-len */
import { Metadata } from 'next';

import { Catalogue } from '@/pagesLayer/Catalogue';

import { icons } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  if (lng === 'es') {
    return {
      title: 'Todos los productos | Weestep - be bigger',
      description: 'Descubre una amplia selección de zapatos elegantes y cómodos para niños en Weestep Kids. Nuestra colección incluye zapatillas de moda, sandalias duraderas y botas adorables, todas elaboradas con materiales de calidad. Desde tallas para niños pequeños hasta preadolescentes, encuentra el ajuste perfecto para tu pequeño. Compra calzado infantil asequible y de moda en Weestep Kids y asegúrate de que tu hijo dé cada paso con estilo y comodidad. ¡Explora nuestra gama hoy mismo!',
      metadataBase: new URL(String(config?.urls.site)),
      icons,
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
    icons,
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

const CataloguePage = () => <Catalogue />;

export default CataloguePage;
