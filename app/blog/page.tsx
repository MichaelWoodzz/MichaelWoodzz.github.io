import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog';
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
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header detail-header"><Link className="wordmark" href="/">vantage<span>.</span></Link><nav><Link href="/about/">About</Link><Link href="/#services">What I do</Link><Link href="/#apply">Let’s talk <ArrowUpRight size={15} /></Link></nav></header>
    <main id="main" className="blog-index">
      <header className="blog-hero"><Link className="back-link" href="/"><ArrowLeft size={15} /> Vantage</Link><p className="eyebrow">Field Notes</p><h1>Straightforward advice for a better dating and social life.</h1><p>No pickup scripts. No vague motivation. Practical thinking about how you look, where you go, who you know, and how you show up.</p></header>
      <section className="blog-grid" aria-label="Vantage articles">{blogPosts.map((post, index) => <article key={post.slug}><p className="blog-card-meta"><span>{post.category}</span><span>{post.readingTime}</span></p><span className="blog-card-number">{String(index + 1).padStart(2, '0')}</span><h2><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h2><p>{post.description}</p><Link className="blog-read" href={`/blog/${post.slug}/`}>Read the guide <ArrowUpRight size={15} /></Link></article>)}</section>
      <section className="blog-closing"><p className="eyebrow">Need more than an article?</p><h2>A guide can point you in the right direction. A wingman can go with you.</h2><Link className="primary-link" href="/#apply">Get Vantage in your corner <ArrowUpRight size={18} /></Link></section>
    </main>
    <Link className="floating-apply" href="/#apply">Get a wingman <ArrowUpRight size={17} /></Link>
    <footer className="site-footer site-footer-expanded"><Link className="wordmark" href="/">vantage<span>.</span></Link><nav className="footer-links"><Link href="/about/">About</Link><Link href="/how-it-works/">How it works</Link><Link href="/privacy/">Privacy</Link><Link href="/#apply">Let’s talk</Link></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
  </>;
}
