import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'weestep kids',
    short_name: 'weestep',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: 'https://weestep-kids.es/',
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
