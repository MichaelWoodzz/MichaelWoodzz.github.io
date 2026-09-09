import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vantage.upgradevillage.chatgpt.site').replace(/\/$/, '');
const lastModified = new Date().toISOString();

await mkdir(outputDirectory, { recursive: true });
await writeFile(
  join(outputDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`,
);
await writeFile(
  join(outputDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n    <image:image>\n      <image:loc>${siteUrl}/vantage-coastal-hero.webp</image:loc>\n    </image:image>\n  </url>\n</urlset>\n`,
);
