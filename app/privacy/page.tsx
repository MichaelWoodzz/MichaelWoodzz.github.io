import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiteLink } from '@/components/SiteLink';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy | Vantage',
  description: 'How Vantage handles private advisory applications, website analytics, and personal information.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteLink className="skip-link" href="#main">Skip to content</SiteLink>
      <header className="site-header detail-header">
        <SiteLink className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></SiteLink>
        <nav aria-label="Main navigation"><SiteLink href="/about/">About</SiteLink><SiteLink href="/services/">Services</SiteLink><SiteLink href="/blog/">Field Notes</SiteLink><SiteLink href="/#apply">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></SiteLink></nav>
      </header>
      <main id="main" className="detail-page policy-page">
        <section className="detail-hero policy-hero">
          <div>
            <SiteLink className="back-link" href="/"><ArrowLeft size={15} aria-hidden="true" /> Vantage</SiteLink>
            <p className="eyebrow">Privacy</p>
            <h1>Your information is personal.</h1>
            <p className="detail-lead">Vantage is designed around discreet, individual service. This page explains what the website collects and how that information is used.</p>
          </div>
        </section>
        <div className="detail-content policy-content">
          <section className="detail-section"><p className="detail-number">01</p><div><h2>Private applications</h2><p>The application form collects the information you choose to provide, including your name, email address, location, interests, goals, and description of your dating or social life.</p><p>Submitting the form opens your own email application with the answers prepared in a message to Vantage. Your information is transmitted only when you choose to send that email.</p></div></section>
          <section className="detail-section"><p className="detail-number">02</p><div><h2>How information is used</h2><p>Application information is used to review fit, respond to your inquiry, understand the support you are seeking, and discuss a possible advisory relationship.</p><p>Vantage does not sell application information. Personal details are shared with specialists, venues, or other people only when appropriate to an agreed service and with consideration for your privacy.</p></div></section>
          <section className="detail-section"><p className="detail-number">03</p><div><h2>Website analytics</h2><p>The site asks for permission before starting Google Analytics. If you allow analytics, it may collect information about visits, pages viewed, referral sources, device type, and general location. Advertising personalization is disabled.</p><p>You can decline analytics or reopen Cookie preferences from the bottom of the site.</p></div></section>
          <section className="detail-section"><p className="detail-number">04</p><div><h2>Your choices</h2><p>You may ask Vantage to correct or delete personal information you previously sent by contacting <SiteLink className="inline-link" href="mailto:michael@vantagesocal.com">michael@vantagesocal.com</SiteLink>.</p><p>This notice may be updated as the site or service changes. The current version was published September 9, 2026.</p></div></section>
        </div>
      </main>
      <footer className="site-footer"><SiteLink className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></SiteLink><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
