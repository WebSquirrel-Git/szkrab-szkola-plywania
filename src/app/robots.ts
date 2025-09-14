import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/assets/statues/Polityka_prywatności.pdf','/assets/statues/Regulamin Szkoła Pływania Szkrab.pdf'],
      },
    ],
    sitemap: 'https://szkolaplywaniaszkrab.pl/sitemap.xml',
  };
}
