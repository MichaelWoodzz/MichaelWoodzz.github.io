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
      description: 'The ultimate private wingman for accomplished men in Southern California.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Vantage SoCal',
      url: siteUrl,
      description: 'A discreet, hands-on private wingman for accomplished men across Los Angeles, Orange County, and Ventura County.',
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
      description: 'Hands-on help to look your best, date with confidence, build an exceptional social life, go out with support, and host private events.',
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
            <p className="eyebrow"><span className="small-rule" /> The ultimate private wingman</p>
            <h1 id="hero-title">Look your absolute best.<br /><em>Build an amazing social life.</em></h1>
            <p className="hero-description">We help you upgrade how you look, meet the right people, go out with confidence, and build a social life you are excited to live.</p>
            <a className="primary-link" href="#apply">Apply for Private Advisory <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Selective · Discreet · Southern California</span><a href="#advisory" aria-label="Explore the private advisory"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <img src={publicAsset('/vantage-coastal-hero.webp')} alt="An accomplished man overlooking the Southern California coast" width="1536" height="1024" fetchPriority="high" decoding="async" />
            <figcaption><span>Look better. Go out. Live better.</span><span>V / 01</span></figcaption>
          </figure>
        </section>

        <section className="approach section-shell" id="advisory" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / What we do</p>
          <div className="approach-copy">
            <h2 id="approach-title">Think of us as<br /><span>your ultimate wingman.</span></h2>
            <div className="approach-text"><p>You have built a successful career. We help your appearance, dating life, friendships, and social calendar catch up.</p><p>We make the plan, connect you with excellent specialists, go out with you, introduce you to better environments, and help you create a life where meeting great people happens naturally.</p></div>
            <p className="mandate-line">A private team focused on making your personal life exceptional.</p>
          </div>
        </section>

        <section className="consulting section-shell" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / How we help</p><h2 id="consulting-title">Everything that makes<br /><em>your personal life better.</em></h2><p>Every client is different. We focus on the changes that will make the biggest difference for you.</p></div>
          <div className="services services-four">
            <article className="service"><span className="service-number">01</span><h3>Look your best</h3><p>We help you improve your physique, hair, skin, grooming, wardrobe, photos, and overall presentation—with excellent specialists from our private network.</p><span className="service-topics">Physique · Hair · Skin · Style · Photos</span></article>
            <article className="service"><span className="service-number">02</span><h3>Date better</h3><p>We improve your confidence, conversation, dating strategy, apps, photos, prompts, and messaging so you present yourself naturally and effectively.</p><span className="service-topics">Confidence · Strategy · Apps · Conversation</span></article>
            <article className="service"><span className="service-number">03</span><h3>Build your social life</h3><p>We help you make better friends, find the right places, fill your calendar, and create a lifestyle that makes meeting people a normal part of your week.</p><span className="service-topics">Friends · Places · Plans · Introductions</span></article>
            <article className="service"><span className="service-number">04</span><h3>Go out together</h3><p>We can join you at bars, dinners, clubs, and events, help with introductions, and give you useful feedback while the experience is still fresh.</p><span className="service-topics">Outings · Introductions · Support · Feedback</span></article>
          </div>
        </section>

        <section className="expertise section-shell" aria-labelledby="system-title">
          <div className="section-heading"><p className="eyebrow">03 / The whole picture</p><h2 id="system-title">A better dating life starts<br /><em>with a better life.</em></h2><p>How you look, where you go, who you know, and how you show up all work together.</p></div>
          <div className="system-formula" aria-label="The Vantage SoCal advisory system">
            <span>Appearance</span><span>Confidence</span><span>Social skills</span><span>Social circle</span><span>Lifestyle</span><span>Digital presence</span><span>Access</span>
          </div>
          <p className="system-result">We improve all of it together, with a clear plan and a team beside you.</p>
        </section>

        <section className="fieldwork section-shell" id="access" aria-labelledby="access-title">
          <div className="section-heading"><p className="eyebrow">04 / We go with you</p><h2 id="access-title">You do not have to<br /><em>figure it out alone.</em></h2><p>Your advisor can be there with you in the real world.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01 / Go out</span><h3>We join you.</h3><p>We can accompany you to bars, clubs, dinners, parties, and events selected around the kind of people you want to meet.</p></article>
            <article className="service"><span className="service-number">02 / Make it easier</span><h3>Support in the moment.</h3><p>We help with introductions, conversation, group dynamics, and the small decisions that make a night go well.</p></article>
            <article className="service"><span className="service-number">03 / Build confidence</span><h3>Honest, useful feedback.</h3><p>You get clear guidance before, during, and after an outing until social situations feel comfortable and natural.</p></article>
          </div>
        </section>

        <section className="positioning hosting section-shell" aria-labelledby="hosting-title">
          <p className="eyebrow section-label">05 / We create the party</p>
          <div><h2 id="hosting-title">Throw great events.<br /><em>Become the center of a better social life.</em></h2><p className="section-lead">We can create the social environment instead of waiting for the right invitation.</p><div className="approach-text"><p>We plan and host private dinners, parties, and gatherings, handling the venue, atmosphere, guest experience, hospitality, and logistics.</p><p>You become a stronger host, meet more people naturally, deepen your friendships, and build a social circle that keeps growing.</p></div></div>
        </section>

        <section className="local section-shell" id="locations" aria-labelledby="local-title">
          <div className="local-intro"><p className="eyebrow">06 / Our home ground</p><h2 id="local-title">Los Angeles.<br /><em>Orange County.<br />Ventura County.</em></h2><p>Local knowledge lets us make the plan specific: the right neighborhoods, venues, communities, specialists, and social opportunities.</p><span className="local-signature">VANTAGE SOCAL / PRIVATE ADVISORY</span></div>
          <div className="local-details"><p>We position you around the adult women you are genuinely interested in meeting—from life stage and values to interests and lifestyle. That clarity shapes your presentation, your social calendar, and where you spend your time.</p><div className="local-areas" aria-label="Service areas"><span>Los Angeles County</span><span>Orange County</span><span>Ventura County</span><span>Selective travel</span></div><p>Your plan may center on your own neighborhood or span the region. We account for your routine, preferences, and desired social world, then connect the geography to a practical weekly strategy.</p><p className="local-emphasis">Broad regional access. Precise personal positioning.</p></div>
        </section>

        <section className="process section-shell" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">07 / How it works</p><h2 id="process-title">Simple plan.<br /><em>Hands-on help.</em></h2><p>We work with a limited number of clients so the support stays personal.</p></div>
          <div className="services"><article className="service"><span className="service-number">01 / Assess</span><h3>See what will help most.</h3><p>We look at your appearance, dating life, confidence, social circle, schedule, and goals.</p></article><article className="service"><span className="service-number">02 / Upgrade</span><h3>Make the right changes.</h3><p>We set priorities and connect you with the right experts, places, and people.</p></article><article className="service"><span className="service-number">03 / Live it</span><h3>Put it into action.</h3><p>We go out, make introductions, improve your profiles, create events, and keep building momentum.</p></article></div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">08 / Questions</p><h2 id="faq-title">A different kind<br /><em>of private advisory.</em></h2><p>Built for accomplished men who want capable support across their personal life.</p></div>
          <div className="faq-list">
            <article><h3>Is this dating coaching?</h3><p>It is much more hands-on. Think of Vantage SoCal as your private wingman: we help you look better, improve your dating life, go out with you, build your network, and create great events.</p></article>
            <article><h3>Is this matchmaking?</h3><p>Matchmaking may introduce two people. Our work improves the full system around you so you are consistently better positioned to meet and connect with people through apps, introductions, events, and everyday life.</p></article>
            <article><h3>How hands-on can the team be?</h3><p>Very. We can go out with you, help with introductions, coordinate appearance specialists, organize outings, and plan private gatherings.</p></article>
            <article><h3>Is the service discreet?</h3><p>Yes. Privacy, sound judgment, and personal attention are central to the engagement. We discuss the appropriate level of involvement before any introductions, outings, or specialist coordination.</p></article>
            <article><h3>Who is the service for?</h3><p>Accomplished adult men whose personal lives have not kept pace with their professional success—and who are prepared to invest attention, effort, and resources in changing that.</p></article>
            <article><h3>Do you guarantee specific outcomes?</h3><p>No. Attraction and relationships involve other people and cannot be guaranteed. We provide strategy, access, coordination, honest feedback, and practical support designed to improve how you show up and the opportunities around you.</p></article>
          </div>
        </section>
        <section className="closing section-shell" id="apply" aria-labelledby="apply-title">
          <div className="closing-intro"><p className="eyebrow">Private client applications</p><h2 id="apply-title">Look your best.<br /><em>Live a better life.</em></h2><p className="closing-copy">Tell us what you want to improve. We will show you how the right private wingman can help make it happen.</p></div>
          <InquiryForm />
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#" aria-label="Vantage SoCal home">vantage socal<span>.</span></a><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage SoCal</span></footer>
    </>
  );
}
