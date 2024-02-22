import { MetadataRoute } from 'next';

import { config } from '@/shared/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'weestep kids',
    short_name: 'weestep',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: config?.urls.site,
    display: 'standalone',
    icons: [
      {
        src: '/images/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
