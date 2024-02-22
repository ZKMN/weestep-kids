import { Metadata } from 'next';

import { Home } from '@/pagesLayer/Home';

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

const HomePage = () => <Home />;

export default HomePage;
