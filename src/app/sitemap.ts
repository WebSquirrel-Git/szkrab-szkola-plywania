import {MetadataRoute} from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://szkolaplywaniaszkrab.pl/',
    },
    {
      url: 'https://szkolaplywaniaszkrab.pl/nauka-plywania/',
    },
    {
      url: 'https://szkolaplywaniaszkrab.pl/baseny/wolbrom/',
    },
   
  ];
}
