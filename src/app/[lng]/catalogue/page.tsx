import { Metadata } from 'next';

import { Catalogue } from '@/pagesLayer/Catalogue';

import { config } from '@/shared/lib/config';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  if (lng === 'es') {
    return {
      title: 'Todos los productos | Weestep - be bigger',
      description: 'Todos los productos | Weestep - be bigger',
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

const CataloguePage = () => <Catalogue />;

export default CataloguePage;
