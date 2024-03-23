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
      url: `${config?.urls.site}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${config?.urls.site}/contactos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
