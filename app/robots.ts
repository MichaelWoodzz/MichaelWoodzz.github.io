import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://vantage.upgradevillage.chatgpt.site/sitemap.xml',
    host: 'https://vantage.upgradevillage.chatgpt.site',
  };
}
