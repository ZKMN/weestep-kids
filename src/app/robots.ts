import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/catalogo', '/contactos', '/encuentra-tu-ajuste'],
        disallow: ['/checkout'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/catalogo', '/contactos', '/encuentra-tu-ajuste'],
        disallow: ['/checkout'],
      },
    ],
  };
}
