import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { publicAsset, siteUrl } from '@/lib/site-config';
import { InquiryForm } from '@/components/InquiryForm';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Vantage SoCal',
      description: 'Private dating, social, and lifestyle advisory for accomplished men in Southern California.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Vantage SoCal',
      url: siteUrl,
      description: 'A discreet, high-touch private advisory for accomplished men across Los Angeles, Orange County, and Ventura County.',
      email: 'michael@vantagesocal.com',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
        { '@type': 'AdministrativeArea', name: 'Orange County, California' },
        { '@type': 'AdministrativeArea', name: 'Ventura County, California' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Private Dating, Social, and Lifestyle Advisory for Men',
      provider: { '@id': `${siteUrl}/#organization` },
      url: siteUrl,
      serviceType: 'Private dating, social, appearance, and lifestyle advisory for accomplished men',
      description: 'Personal strategy and hands-on support spanning appearance, confidence, dating, digital presence, social network, real-world access, and private events.',
      audience: { '@type': 'Audience', audienceType: 'Accomplished adult men seeking private personal advisory' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
        { '@type': 'AdministrativeArea', name: 'Orange County, California' },
        { '@type': 'AdministrativeArea', name: 'Ventura County, California' },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Vantage SoCal home">vantage socal<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#advisory">The advisory</a><a href="#access">Real-world access</a><a href="#apply">Apply <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Private dating, social &amp; lifestyle advisory</p>
            <h1 id="hero-title">Your career is optimized.<br /><em>Your personal life should be too.</em></h1>
            <p className="hero-description">Build the appearance, confidence, social network, lifestyle, and dating presence to match the rest of your life—with a private team beside you.</p>
            <a className="primary-link" href="#apply">Apply for Private Advisory <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Selective · Discreet · Southern California</span><a href="#advisory" aria-label="Explore the private advisory"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <img src={publicAsset('/vantage-coastal-hero.webp')} alt="An accomplished man overlooking the Southern California coast" width="1536" height="1024" fetchPriority="high" decoding="async" />
            <figcaption><span>Private advisory. Personal execution.</span><span>V / 01</span></figcaption>
          </figure>
        </section>

        <section className="approach section-shell" id="advisory" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The mandate</p>
          <div className="approach-copy">
            <h2 id="approach-title">Success should not stop<br /><span>at the office.</span></h2>
            <div className="approach-text"><p>You may be professionally or financially successful while your dating life, appearance, social circle, or overall presence has not kept pace. That gap is rarely solved by one new profile, one stylist, or one piece of advice.</p><p>Vantage SoCal manages the full system around you. We identify what is holding you back, assemble the right specialists, create a personal strategy, and help you execute it in the real world.</p></div>
            <p className="mandate-line">Private wealth management for your social and dating life.</p>
          </div>
        </section>

        <section className="consulting section-shell" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / The private advisory</p><h2 id="consulting-title">One team.<br /><em>The whole picture.</em></h2><p>Your priorities determine the plan. Every engagement is selective, personal, and built around your actual life.</p></div>
          <div className="services services-four">
            <article className="service"><span className="service-number">01</span><h3>Appearance</h3><p>Refine how you look and how you carry yourself through coordinated expertise in physique, fitness, hair, grooming, skincare, wardrobe, photography, and presentation.</p><span className="service-topics">Physique · Grooming · Style · Photography</span></article>
            <article className="service"><span className="service-number">02</span><h3>Dating</h3><p>Build confidence, conversation, flirting, and a dating strategy that fits who you are. Improve your profiles, photos, prompts, messaging, and experiences beyond the first date.</p><span className="service-topics">Confidence · Strategy · Apps · Communication</span></article>
            <article className="service"><span className="service-number">03</span><h3>Social life</h3><p>Strengthen your circle, enter better environments, and build a more active and attractive lifestyle—so meeting people organically becomes part of your week.</p><span className="service-topics">Network · Environments · Lifestyle · Access</span></article>
            <article className="service"><span className="service-number">04</span><h3>Digital presence</h3><p>Bring your online presence into alignment with the man people meet in person. We shape your dating apps, Instagram, photography, and overall digital first impression.</p><span className="service-topics">Instagram · Profiles · Photos · Positioning</span></article>
          </div>
        </section>

        <section className="expertise section-shell" aria-labelledby="system-title">
          <div className="section-heading"><p className="eyebrow">03 / The whole system</p><h2 id="system-title">Most dating problems<br /><em>are not only dating problems.</em></h2><p>They are a combination of appearance, confidence, social skills, network, lifestyle, digital presence, and access.</p></div>
          <div className="system-formula" aria-label="The Vantage SoCal advisory system">
            <span>Appearance</span><span>Confidence</span><span>Social skills</span><span>Social circle</span><span>Lifestyle</span><span>Digital presence</span><span>Access</span>
          </div>
          <p className="system-result">We address these elements together—so the result feels coherent, natural, and built to last.</p>
        </section>

        <section className="fieldwork section-shell" id="access" aria-labelledby="access-title">
          <div className="section-heading"><p className="eyebrow">04 / Real-world access</p><h2 id="access-title">Advice is useful.<br /><em>Execution changes things.</em></h2><p>Our team can be hands-on when the moment calls for it.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01 / Accompany</span><h3>We can go with you.</h3><p>Work alongside our team at bars, clubs, dinners, cultural events, and other social environments selected around your goals.</p></article>
            <article className="service"><span className="service-number">02 / Coach</span><h3>Feedback in real time.</h3><p>Navigate introductions, conversation, group dynamics, and social situations with discreet guidance before, during, and after an outing.</p></article>
            <article className="service"><span className="service-number">03 / Curate</span><h3>The right rooms matter.</h3><p>Organize outings around the environments and people you want to meet, then build the comfort and judgment to move through those rooms naturally.</p></article>
          </div>
        </section>

        <section className="positioning hosting section-shell" aria-labelledby="hosting-title">
          <p className="eyebrow section-label">05 / Private events &amp; hosting</p>
          <div><h2 id="hosting-title">Create the social environment.<br /><em>Become the person who brings it together.</em></h2><p className="section-lead">Sometimes the strongest move is to build the room instead of waiting to be invited into one.</p><div className="approach-text"><p>We can plan and host private dinners, parties, and gatherings—coordinating venues, guest experience, hospitality, and logistics with discretion.</p><p>We help you become a confident host, deepen your existing relationships, expand your broader network, and create natural opportunities to meet new people.</p></div></div>
        </section>

        <section className="local section-shell" id="locations" aria-labelledby="local-title">
          <div className="local-intro"><p className="eyebrow">06 / Our home ground</p><h2 id="local-title">Los Angeles.<br /><em>Orange County.<br />Ventura County.</em></h2><p>Local knowledge lets us make the plan specific: the right neighborhoods, venues, communities, specialists, and social opportunities.</p><span className="local-signature">VANTAGE SOCAL / PRIVATE ADVISORY</span></div>
          <div className="local-details"><p>We position you around the adult women you are genuinely interested in meeting—from life stage and values to interests and lifestyle. That clarity shapes your presentation, your social calendar, and where you spend your time.</p><div className="local-areas" aria-label="Service areas"><span>Los Angeles County</span><span>Orange County</span><span>Ventura County</span><span>Selective travel</span></div><p>Your plan may center on your own neighborhood or span the region. We account for your routine, preferences, and desired social world, then connect the geography to a practical weekly strategy.</p><p className="local-emphasis">Broad regional access. Precise personal positioning.</p></div>
        </section>

        <section className="process section-shell" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">07 / The engagement</p><h2 id="process-title">Private. Personal.<br /><em>Highly involved.</em></h2><p>We work with a limited number of clients so the strategy, coordination, and support stay personal.</p></div>
          <div className="services"><article className="service"><span className="service-number">01 / Diagnose</span><h3>See the full situation clearly.</h3><p>Assess your appearance, dating patterns, confidence, digital presence, social circle, lifestyle, schedule, and ambitions.</p></article><article className="service"><span className="service-number">02 / Build</span><h3>Assemble your private team.</h3><p>Set priorities, bring in the right specialists and partners, and create a coordinated plan around the changes that matter most.</p></article><article className="service"><span className="service-number">03 / Execute</span><h3>Put the strategy into real life.</h3><p>Work through introductions, outings, events, profiles, appointments, and feedback with ongoing refinement as your life changes.</p></article></div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">08 / Questions</p><h2 id="faq-title">A different kind<br /><em>of private advisory.</em></h2><p>Built for accomplished men who want capable support across their personal life.</p></div>
          <div className="faq-list">
            <article><h3>Is this dating coaching?</h3><p>Vantage SoCal is broader and more involved than a course or coaching program. We advise and coordinate across appearance, dating, social life, digital presence, lifestyle, specialist access, and real-world execution.</p></article>
            <article><h3>Is this matchmaking?</h3><p>Matchmaking may introduce two people. Our work improves the full system around you so you are consistently better positioned to meet and connect with people through apps, introductions, events, and everyday life.</p></article>
            <article><h3>How hands-on can the team be?</h3><p>Depending on the engagement, we can accompany you into social environments, provide real-time coaching, coordinate specialists, organize outings, and help plan private gatherings.</p></article>
            <article><h3>Is the service discreet?</h3><p>Yes. Privacy, sound judgment, and personal attention are central to the engagement. We discuss the appropriate level of involvement before any introductions, outings, or specialist coordination.</p></article>
            <article><h3>Who is the service for?</h3><p>Accomplished adult men whose personal lives have not kept pace with their professional success—and who are prepared to invest attention, effort, and resources in changing that.</p></article>
            <article><h3>Do you guarantee specific outcomes?</h3><p>No. Attraction and relationships involve other people and cannot be guaranteed. We provide strategy, access, coordination, honest feedback, and practical support designed to improve how you show up and the opportunities around you.</p></article>
          </div>
        </section>
        <section className="closing section-shell" id="apply" aria-labelledby="apply-title">
          <div className="closing-intro"><p className="eyebrow">Private client applications</p><h2 id="apply-title">Build a personal life<br /><em>that matches your success.</em></h2><p className="closing-copy">Tell us where you are now, what you want to change, and the level of support you are looking for. Every inquiry is handled discreetly.</p></div>
          <InquiryForm />
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#" aria-label="Vantage SoCal home">vantage socal<span>.</span></a><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage SoCal</span></footer>
    </>
  );
}
