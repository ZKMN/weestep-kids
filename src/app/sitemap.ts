import { MetadataRoute } from 'next';

import { config } from '@/shared/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: String(config?.urls.site),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://weestep-kids.vercel.app/es/locations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
