import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-config';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1 },
    { path: '/about/', priority: 0.8 },
    { path: '/services/', priority: 0.9 },
    { path: '/how-it-works/', priority: 0.85 },
    { path: '/private-dating-advisor-los-angeles/', priority: 0.9 },
    { path: '/dating-coach-vs-matchmaker-los-angeles/', priority: 0.85 },
    { path: '/mens-image-consulting-los-angeles/', priority: 0.85 },
    { path: '/social-life-consulting-los-angeles/', priority: 0.9 },
    { path: '/private-wingman-los-angeles/', priority: 0.9 },
    { path: '/private-events-los-angeles/', priority: 0.8 },
    { path: '/southern-california-service-area/', priority: 0.8 },
    { path: '/blog/', priority: 0.85 },
    ...blogPosts.map((post) => ({ path: `/blog/${post.slug}/`, priority: 0.75 })),
    { path: '/privacy/', priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date('2026-09-11'),
    changeFrequency: 'monthly' as const,
    priority,
    ...(path === '/' ? { images: [`${siteUrl}/vantage-coastal-hero.webp`] } : {}),
  }));
}
