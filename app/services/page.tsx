import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { siteUrl } from '@/lib/site-config';
import { SiteLink } from '@/components/SiteLink';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Private Wingman Services in Los Angeles | Vantage',
  description: 'Explore Vantage services for appearance, dating, social life, in-person wingman support, private events, and lifestyle improvement across Southern California.',
  alternates: { canonical: '/services/' },
  openGraph: { title: 'What Vantage Does | Private Wingman Services', description: 'Hands-on help with your look, dating life, social circle, outings, and private events.', url: '/services/' },
};

const services = [
  { number: '01', title: 'Look your best', text: 'Get the right help with physique, hair, skin, grooming, wardrobe, photos, and the way you present yourself.', href: '/mens-image-consulting-los-angeles/', link: 'Appearance and image' },
  { number: '02', title: 'Improve your dating life', text: 'Work on confidence, conversation, dating strategy, apps, photos, prompts, messaging, and follow-through.', href: '/private-dating-advisor-los-angeles/', link: 'Private dating advice' },
  { number: '03', title: 'Build a real social life', text: 'Create a stronger circle, a fuller calendar, better recurring environments, and more natural ways to meet people.', href: '/social-life-consulting-los-angeles/', link: 'Social life consulting' },
  { number: '04', title: 'Go out with a wingman', text: 'Have someone in your corner at bars, dinners, clubs, gatherings, and events—with private feedback that is actually useful.', href: '/private-wingman-los-angeles/', link: 'In-person wingman support' },
  { number: '05', title: 'Throw better parties', text: 'Plan dinners, parties, and gatherings that strengthen your friendships and make you the person who brings good people together.', href: '/private-events-los-angeles/', link: 'Private events and hosting' },
  { number: '06', title: 'Get positioned in the right places', text: 'Build around the neighborhoods, venues, communities, and people that fit the life you want across Southern California.', href: '/southern-california-service-area/', link: 'Where Vantage works' },
];

export default function ServicesPage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Vantage private wingman services', url: `${siteUrl}/services/`, itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${siteUrl}${service.href}` })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <SiteLink className="skip-link" href="#main">Skip to content</SiteLink>
    <header className="site-header detail-header"><SiteLink className="wordmark" href="/">vantage<span>.</span></SiteLink><nav aria-label="Main navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/" aria-current="page">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/#apply">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></SiteLink></nav></header>
    <main id="main" className="services-index">
      <header className="services-hero"><SiteLink className="back-link" href="/"><ArrowLeft size={15} aria-hidden="true" /> Vantage</SiteLink><p className="eyebrow">What I do</p><h1>One wingman.<br /><em>Every part of your social life.</em></h1><p>We start with whatever is holding you back most. Then we work outward—from how you look and date to where you go, who you know, and what your week actually feels like.</p></header>
      <section className="services-directory" aria-label="Vantage services">{services.map((service) => <article key={service.href}><span>{service.number}</span><div><h2>{service.title}</h2><p>{service.text}</p><SiteLink href={service.href}>{service.link} <ArrowUpRight size={16} aria-hidden="true" /></SiteLink></div></article>)}</section>
      <section className="services-callout"><p className="eyebrow">Every situation is different</p><h2>You do not need to know which service you need.</h2><p>Tell me what is happening and what you want to change. I will help identify the first move.</p><SiteLink className="primary-link" href="/#apply">Get Vantage in your corner <ArrowUpRight size={18} aria-hidden="true" /></SiteLink></section>
    </main>
    <SiteLink className="floating-apply" href="/#apply">Get a wingman <ArrowUpRight size={17} aria-hidden="true" /></SiteLink>
    <footer className="site-footer site-footer-expanded"><SiteLink className="wordmark" href="/">vantage<span>.</span></SiteLink><nav className="footer-links" aria-label="Footer navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/privacy/">Privacy</SiteLink><SiteLink href="/#apply">Let’s talk</SiteLink></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
  </>;
}
