import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/catalogue', '/about-us', '/brand-of-the-year', '/contacts'],
        disallow: ['/basket'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/catalogue', '/about-us', '/brand-of-the-year', '/contacts'],
        disallow: ['/basket'],
      },
    ],
  };
}
