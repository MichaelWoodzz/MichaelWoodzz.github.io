import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vantagesocal.com').replace(/\/$/, '');
const lastModified = new Date().toISOString();
const blogPosts = [
  ['how-to-build-a-social-circle-in-los-angeles', 'How to Build a Social Circle in Los Angeles From Scratch', 'A practical guide for men who want better friends, a fuller calendar, and a social life that creates natural opportunities to meet people in Los Angeles.'],
  ['how-to-meet-people-in-los-angeles-without-dating-apps', 'How to Meet People in Los Angeles Without Dating Apps', 'How to choose the right environments, become a familiar face, start natural conversations, and build an offline dating life in Los Angeles.'],
  ['dating-profile-photo-guide-for-men', 'Dating Profile Photos for Men: A Complete, Honest Guide', 'Build a dating-profile photo set that looks current, confident, social, and unmistakably like you.'],
  ['how-to-improve-your-appearance-for-dating', 'How to Improve Your Appearance for Dating Without Becoming Someone Else', 'A practical order of operations for improving hair, skin, physique, grooming, clothes, and presentation.'],
];
const pages = [
  ['/', '1.0'],
  ['/about/', '0.8'],
  ['/how-it-works/', '0.85'],
  ['/private-dating-advisor-los-angeles/', '0.9'],
  ['/dating-coach-vs-matchmaker-los-angeles/', '0.85'],
  ['/mens-image-consulting-los-angeles/', '0.85'],
  ['/social-life-consulting-los-angeles/', '0.9'],
  ['/private-wingman-los-angeles/', '0.9'],
  ['/private-events-los-angeles/', '0.8'],
  ['/southern-california-service-area/', '0.8'],
  ['/blog/', '0.85'],
  ...blogPosts.map(([slug]) => [`/blog/${slug}/`, '0.75']),
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
  `# Vantage\n\n> Vantage is a private dating, social, appearance, and lifestyle advisory for adult men in Southern California who want discreet, hands-on support.\n\nVantage helps clients improve appearance, confidence, dating strategy, digital presence, social circles, real-world social access, and private hosting. Clients do not need a particular career title or professional background. The service is intended for men with the means and commitment to invest seriously in their personal lives. It is not a matchmaking database, pickup course, or seller of guaranteed introductions. The working relationship is personal, discreet, and hands-on.\n\n## Service area\n\nLos Angeles County, Orange County, and Ventura County, with selective travel.\n\n## Key pages and field notes\n\n${pages.map(([path]) => `- ${siteUrl}${path}`).join('\n')}\n\n## Contact\n\nPrivate client applications: ${siteUrl}/#apply\nEmail: michael@vantagesocal.com\n`,
);
const feedItems = blogPosts.map(([slug, title, description]) => `    <item>\n      <title>${title}</title>\n      <link>${siteUrl}/blog/${slug}/</link>\n      <guid>${siteUrl}/blog/${slug}/</guid>\n      <pubDate>Fri, 11 Sep 2026 12:00:00 GMT</pubDate>\n      <description>${description}</description>\n    </item>`).join('\n');
await writeFile(
  join(outputDirectory, 'feed.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n    <title>Vantage Field Notes</title>\n    <link>${siteUrl}/blog/</link>\n    <description>Straightforward advice for a better dating and social life.</description>\n    <language>en-us</language>\n${feedItems}\n  </channel></rss>\n`,
);
