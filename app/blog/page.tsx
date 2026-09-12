import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog';
import { SiteLink } from '@/components/SiteLink';
import { siteUrl } from '@/lib/site-config';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Dating, Social Life and Style Advice for Men | Vantage Field Notes',
  description: 'Practical advice on dating, social life, appearance, dating profiles, and meeting people in Los Angeles from Vantage.',
  alternates: { canonical: '/blog/' },
  openGraph: { title: 'Vantage Field Notes', description: 'Straightforward advice for building a better dating and social life.', url: '/blog/' },
};

export default function BlogIndex() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vantage Field Notes',
    description: metadata.description,
    url: `${siteUrl}/blog/`,
    publisher: { '@type': 'Organization', name: 'Vantage', url: siteUrl },
    blogPost: blogPosts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: `${siteUrl}/blog/${post.slug}/`, datePublished: post.publishedIso })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <SiteLink className="skip-link" href="#main">Skip to content</SiteLink>
    <header className="site-header detail-header"><SiteLink className="wordmark" href="/">vantage<span>.</span></SiteLink><nav aria-label="Main navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/" aria-current="page">Field Notes</SiteLink><SiteLink href="/#apply">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></SiteLink></nav></header>
    <main id="main" className="blog-index">
      <header className="blog-hero"><SiteLink className="back-link" href="/"><ArrowLeft size={15} /> Vantage</SiteLink><p className="eyebrow">Field Notes</p><h1>Straightforward advice for a better dating and social life.</h1><p>No pickup scripts. No vague motivation. Practical thinking about how you look, where you go, who you know, and how you show up.</p></header>
      <section className="blog-grid" aria-label="Vantage articles">{blogPosts.map((post, index) => <article key={post.slug}><p className="blog-card-meta"><span>{post.category}</span><span>{post.readingTime}</span></p><span className="blog-card-number">{String(index + 1).padStart(2, '0')}</span><h2><SiteLink href={`/blog/${post.slug}/`}>{post.title}</SiteLink></h2><p>{post.description}</p><SiteLink className="blog-read" href={`/blog/${post.slug}/`}>Read the guide <ArrowUpRight size={15} /></SiteLink></article>)}</section>
      <section className="blog-closing"><p className="eyebrow">Need more than an article?</p><h2>A guide can point you in the right direction. A wingman can go with you.</h2><SiteLink className="primary-link" href="/#apply">Get Vantage in your corner <ArrowUpRight size={18} /></SiteLink></section>
    </main>
    <SiteLink className="floating-apply" href="/#apply">Get a wingman <ArrowUpRight size={17} /></SiteLink>
    <footer className="site-footer site-footer-expanded"><SiteLink className="wordmark" href="/">vantage<span>.</span></SiteLink><nav className="footer-links" aria-label="Footer navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/privacy/">Privacy</SiteLink><SiteLink href="/#apply">Let’s talk</SiteLink></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
  </>;
}
