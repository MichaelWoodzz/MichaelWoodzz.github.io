import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date('2026-09-08'),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${siteUrl}/vantage-coastal-hero.webp`],
    },
  ];
}
