import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiteLink } from '@/components/SiteLink';
import { siteUrl } from '@/lib/site-config';

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

type BlogPostPageProps = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  published: string;
  publishedIso: string;
  intro: string[];
  sections: ArticleSection[];
};

export function BlogPostPage(props: BlogPostPageProps) {
  const pageUrl = `${siteUrl}/blog/${props.slug}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        headline: props.title,
        description: props.description,
        datePublished: props.publishedIso,
        dateModified: props.publishedIso,
        mainEntityOfPage: pageUrl,
        author: { '@type': 'Organization', name: 'Vantage', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'Vantage', url: siteUrl },
        about: ['Dating', 'Social life', 'Men’s lifestyle', 'Los Angeles'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Vantage', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Field Notes', item: `${siteUrl}/blog/` },
          { '@type': 'ListItem', position: 3, name: props.title, item: pageUrl },
        ],
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <SiteLink className="skip-link" href="#main">Skip to content</SiteLink>
    <header className="site-header detail-header">
      <SiteLink className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></SiteLink>
      <nav aria-label="Main navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/#apply">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></SiteLink></nav>
    </header>
    <main id="main" className="article-page">
      <article>
        <header className="article-hero">
          <SiteLink className="back-link" href="/blog/"><ArrowLeft size={15} aria-hidden="true" /> All field notes</SiteLink>
          <p className="eyebrow">{props.category}</p>
          <h1>{props.title}</h1>
          <p className="article-description">{props.description}</p>
          <div className="article-meta"><span>By Vantage</span><time dateTime={props.publishedIso}>{props.published}</time><span>{props.readingTime}</span></div>
        </header>
        <div className="article-layout">
          <aside><p>In this guide</p><ol>{props.sections.map((section, index) => <li key={section.heading}><SiteLink href={`#article-${index}`}>{section.heading}</SiteLink></li>)}</ol></aside>
          <div className="article-body">
            <div className="article-intro">{props.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {props.sections.map((section, index) => <section id={`article-${index}`} key={section.heading}><span className="article-number">{String(index + 1).padStart(2, '0')}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}
            <nav className="article-related" aria-label="Related Vantage services"><p>Related Vantage services</p><SiteLink href="/social-life-consulting-los-angeles/">Social life consulting</SiteLink><SiteLink href="/private-dating-advisor-los-angeles/">Private dating advisory</SiteLink><SiteLink href="/mens-image-consulting-los-angeles/">Men’s image consulting</SiteLink><SiteLink href="/private-wingman-los-angeles/">Private wingman support</SiteLink></nav>
            <aside className="article-cta"><p className="eyebrow">Want help doing this in real life?</p><h2>Get a wingman in your corner.</h2><p>Vantage can help with the plan, the people, the places, and the follow-through—privately and hands-on across Southern California.</p><SiteLink className="primary-link" href="/#apply">Tell me what you need <ArrowUpRight size={18} aria-hidden="true" /></SiteLink></aside>
          </div>
        </div>
      </article>
    </main>
    <SiteLink className="floating-apply" href="/#apply">Get a wingman <ArrowUpRight size={17} aria-hidden="true" /></SiteLink>
    <footer className="site-footer site-footer-expanded"><SiteLink className="wordmark" href="/">vantage<span>.</span></SiteLink><nav className="footer-links" aria-label="Footer navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/privacy/">Privacy</SiteLink><SiteLink href="/#apply">Let’s talk</SiteLink></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
  </>;
}
