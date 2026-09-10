import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { siteUrl } from '@/lib/site-config';

type ContentSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

type Question = {
  question: string;
  answer: string;
};

type RelatedPage = {
  href: string;
  label: string;
};

type AdvisoryDetailPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  lead: string;
  serviceType: string;
  sections: ContentSection[];
  questions: Question[];
  related: RelatedPage[];
};

export function AdvisoryDetailPage({
  path,
  eyebrow,
  title,
  lead,
  serviceType,
  sections,
  questions,
  related,
}: AdvisoryDetailPageProps) {
  const pageUrl = `${siteUrl}${path}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: title,
        serviceType,
        description: lead,
        url: pageUrl,
        provider: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Vantage', url: siteUrl },
        audience: { '@type': 'Audience', audienceType: 'Adult men seeking discreet, high-touch personal advisory' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
          { '@type': 'AdministrativeArea', name: 'Orange County, California' },
          { '@type': 'AdministrativeArea', name: 'Ventura County, California' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Vantage', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: title, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: questions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header detail-header">
        <Link className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></Link>
        <nav aria-label="Main navigation"><Link href="/about/">About</Link><Link href="/#services">Services</Link><Link href="/#apply">Apply <ArrowUpRight size={15} aria-hidden="true" /></Link></nav>
      </header>

      <main id="main" className="detail-page">
        <section className="detail-hero">
          <div>
            <Link className="back-link" href="/"><ArrowLeft size={15} aria-hidden="true" /> Vantage</Link>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="detail-lead">{lead}</p>
            <Link className="primary-link" href="/#apply">Apply for Private Advisory <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>

        <div className="detail-content">
          {sections.map((section, index) => (
            <section className="detail-section" key={section.title} aria-labelledby={`section-${index}`}>
              <p className="detail-number">{String(index + 1).padStart(2, '0')}</p>
              <div>
                <h2 id={`section-${index}`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </div>
            </section>
          ))}

          <section className="detail-faq" aria-labelledby="questions-title">
            <p className="eyebrow">Common questions</p>
            <h2 id="questions-title">Straight answers.</h2>
            <div className="detail-faq-list">
              {questions.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
            </div>
          </section>

          <section className="related-pages" aria-labelledby="related-title">
            <p className="eyebrow">Explore Vantage</p>
            <h2 id="related-title">Related private advisory services</h2>
            <div>{related.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowUpRight size={15} aria-hidden="true" /></Link>)}</div>
          </section>
        </div>
      </main>

      <Link className="floating-apply" href="/#apply">Apply for Private Advisory <ArrowUpRight size={17} aria-hidden="true" /></Link>
      <footer className="site-footer site-footer-expanded"><Link className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></Link><nav className="footer-links" aria-label="Footer navigation"><Link href="/about/">About</Link><Link href="/how-it-works/">How it works</Link><Link href="/southern-california-service-area/">Service area</Link><Link href="/privacy/">Privacy</Link><Link href="/#apply">Apply</Link></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
