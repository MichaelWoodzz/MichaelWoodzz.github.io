import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vantagesocal.com').replace(/\/$/, '');
const lastModified = new Date().toISOString();
const pages = [
  ['/', '1.0'],
  ['/about/', '0.8'],
  ['/how-it-works/', '0.85'],
  ['/private-dating-advisor-los-angeles/', '0.9'],
  ['/mens-image-consulting-los-angeles/', '0.85'],
  ['/social-life-consulting-los-angeles/', '0.9'],
  ['/private-wingman-los-angeles/', '0.9'],
  ['/private-events-los-angeles/', '0.8'],
  ['/southern-california-service-area/', '0.8'],
  ['/privacy/', '0.3'],
];

await mkdir(outputDirectory, { recursive: true });
for (const [pagePath] of pages) {
  if (pagePath === '/') continue;
  const slug = pagePath.replace(/^\//, '').replace(/\/$/, '');
  const routeDirectory = join(outputDirectory, slug);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(join(outputDirectory, `${slug}.html`), join(routeDirectory, 'index.html'));
}
await writeFile(
  join(outputDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`,
);
const sitemapEntries = pages.map(([path, priority]) => {
  const image = path === '/' ? `\n    <image:image>\n      <image:loc>${siteUrl}/vantage-coastal-hero.webp</image:loc>\n    </image:image>` : '';
  return `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>${image}\n  </url>`;
}).join('\n');
await writeFile(
  join(outputDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemapEntries}\n</urlset>\n`,
);
await writeFile(
  join(outputDirectory, 'llms.txt'),
  `# Vantage\n\n> Vantage is a private dating, social, appearance, and lifestyle advisory for accomplished adult men in Southern California.\n\nVantage helps clients improve appearance, confidence, dating strategy, digital presence, social circles, real-world social access, and private hosting. It is not a matchmaking database, pickup course, or seller of guaranteed introductions. The working relationship is personal, discreet, and hands-on.\n\n## Service area\n\nLos Angeles County, Orange County, and Ventura County, with selective travel.\n\n## Key pages\n\n${pages.map(([path]) => `- ${siteUrl}${path}`).join('\n')}\n\n## Contact\n\nPrivate client applications: ${siteUrl}/#apply\nEmail: michael@vantagesocal.com\n`,
);
