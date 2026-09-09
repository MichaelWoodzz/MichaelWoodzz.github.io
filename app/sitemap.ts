import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vantage.upgradevillage.chatgpt.site/',
      lastModified: new Date('2026-09-08'),
      changeFrequency: 'monthly',
      priority: 1,
      images: ['https://vantage.upgradevillage.chatgpt.site/vantage-coastal-hero.webp'],
    },
  ];
}
