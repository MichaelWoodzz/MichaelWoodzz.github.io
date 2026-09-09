import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
      description: 'Personal, hands-on help from a well-connected advisor to look your best, date with confidence, build an exceptional social life, go out with support, and host private events.',
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
        <Link className="wordmark" href="/" aria-label="Vantage SoCal home">vantage socal<span>.</span></Link>
        <nav aria-label="Main navigation"><a href="#advisory">How it works</a><a href="#services">Services</a><a href="#apply">Apply <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> The ultimate private wingman</p>
            <h1 id="hero-title">Look your absolute best.<br /><em>Build an amazing social life.</em></h1>
            <p className="hero-description">I help you look your best, meet more people, build a great social life, and become more confident—with the support of a well-connected friend beside you.</p>
            <a className="primary-link" href="#apply">Apply for Private Advisory <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Selective · Discreet · Southern California</span><a href="#apply" aria-label="Go to the private advisory application"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <Image src={publicAsset('/vantage-coastal-hero.webp')} alt="An accomplished man overlooking the Southern California coast" width="1536" height="1024" priority />
            <figcaption><span>Look better. Go out. Live better.</span><span>V / 01</span></figcaption>
          </figure>
        </section>

        <section className="approach section-shell" id="advisory" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The difference</p>
          <div className="approach-copy">
            <h2 id="approach-title">A well-connected friend.<br /><span>Not a matchmaking service.</span></h2>
            <div className="approach-text"><p>You work directly with me. I get to know you, help you make the right changes, go out with you, organize plans, and become part of the process in a natural way. It feels more like having a trusted friend and ultimate wingman than hiring a coach.</p><p>I have a vast network across Los Angeles and Southern California, including the social, creative, hospitality, fitness, fashion, and entertainment worlds. When the fit and circumstances are right, that network can create organic opportunities to meet influencers, models, celebrities, and other interesting people.</p></div>
            <p className="mandate-line">This is not coaching or matchmaking. It is a category of its own: personal, organic, and built around your real life.</p>
          </div>
        </section>

        <section className="consulting section-shell" id="services" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / How we help</p><h2 id="consulting-title">Everything that makes<br /><em>your personal life better.</em></h2><p>Every client is different. We focus on the changes that will make the biggest difference for you.</p></div>
          <div className="services services-four">
            <article className="service"><span className="service-number">01</span><h3>Look your best</h3><p>We help you improve your physique, hair, skin, grooming, wardrobe, photos, and overall presentation—with excellent specialists from our private network.</p><span className="service-topics">Physique · Hair · Skin · Style · Photos</span></article>
            <article className="service"><span className="service-number">02</span><h3>Date better</h3><p>We improve your confidence, conversation, dating strategy, apps, photos, prompts, and messaging so you present yourself naturally and effectively.</p><span className="service-topics">Confidence · Strategy · Apps · Conversation</span></article>
            <article className="service"><span className="service-number">03</span><h3>Build your social life</h3><p>We help you make better friends, find the right places, fill your calendar, and create a lifestyle that makes meeting people a normal part of your week.</p><span className="service-topics">Friends · Places · Plans · Introductions</span></article>
            <article className="service"><span className="service-number">04</span><h3>Go out together</h3><p>We can join you at bars, dinners, clubs, and events, help with introductions, and give you useful feedback while the experience is still fresh.</p><span className="service-topics">Outings · Introductions · Support · Feedback</span></article>
          </div>
        </section>

        <section className="fieldwork section-shell" id="access" aria-labelledby="access-title">
          <div className="section-heading"><p className="eyebrow">03 / We go with you</p><h2 id="access-title">You do not have to<br /><em>figure it out alone.</em></h2><p>I can be there with you in the real world.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01 / Go out</span><h3>We join you.</h3><p>We can accompany you to bars, clubs, dinners, parties, and events selected around the kind of people you want to meet.</p></article>
            <article className="service"><span className="service-number">02 / Make it easier</span><h3>Support in the moment.</h3><p>We help with introductions, conversation, group dynamics, and the small decisions that make a night go well.</p></article>
            <article className="service"><span className="service-number">03 / Build confidence</span><h3>Honest, useful feedback.</h3><p>You get clear guidance before, during, and after an outing until social situations feel comfortable and natural.</p></article>
          </div>
        </section>

        <section className="positioning hosting section-shell" aria-labelledby="hosting-title">
          <p className="eyebrow section-label">04 / We create the party</p>
          <div><h2 id="hosting-title">Throw great events.<br /><em>Become the center of a better social life.</em></h2><p className="section-lead">I can create the social environment instead of waiting for the right invitation.</p><div className="approach-text"><p>I can plan and host private dinners, parties, and gatherings, handling the venue, atmosphere, guest experience, hospitality, and logistics.</p><p>You become a stronger host, meet more people naturally, deepen your friendships, and build a social circle that keeps growing.</p></div></div>
        </section>

        <section className="local section-shell" id="locations" aria-labelledby="local-title">
          <div className="local-intro"><p className="eyebrow">05 / Home ground</p><h2 id="local-title">Los Angeles.<br /><em>Orange County.<br />Ventura County.</em></h2><p>I know the region: the neighborhoods, venues, communities, specialists, and social opportunities.</p><span className="local-signature">VANTAGE SOCAL / PRIVATE ADVISORY</span></div>
          <div className="local-details"><p>I help position you around the adult women and social world you are genuinely interested in—from age and interests to values and lifestyle.</p><div className="local-areas" aria-label="Service areas"><span>Los Angeles County</span><span>Orange County</span><span>Ventura County</span><span>Selective travel</span></div><p>We turn that into a practical plan for where you go, how you present yourself, who you meet, and what you do each week.</p><p className="local-emphasis">The right places. The right people. A better social life.</p></div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">06 / Simply explained</p><h2 id="faq-title">Personal help<br /><em>that fits your real life.</em></h2><p>For accomplished men who want a better personal and social life.</p></div>
          <div className="faq-list">
            <article><h3>What exactly do you do?</h3><p>I help you look your best, improve your confidence, strengthen your dating profiles, build your social circle, find better places to go, join you on outings, and throw events that bring people together.</p></article>
            <article><h3>Is this matchmaking?</h3><p>No. I do not sell introductions or arrange dates from a database. I help you build a better life and social world, then use my network when a natural, appropriate opportunity arises.</p></article>
            <article><h3>What makes it different?</h3><p>The relationship is personal and hands-on. I act more like a trusted, well-connected friend than a conventional coach. There is no fixed course because every client needs something different.</p></article>
            <article><h3>Is it private?</h3><p>Yes. I work discreetly with a limited number of clients. Introductions, outings, specialists, and events are handled with care and good judgment.</p></article>
          </div>
        </section>

        <section className="application-section section-shell" id="apply" aria-labelledby="apply-title">
          <div className="application-intro">
            <p className="eyebrow">Apply for private advisory</p>
            <h2 id="apply-title">Tell me what you want<br /><em>your life to look like.</em></h2>
            <p>Every situation is different. This short application helps me understand where you are, what you want, and how involved you would like me to be.</p>
          </div>
          <InquiryForm />
        </section>
      </main>

      <a className="floating-apply" href="#apply">Apply for Private Advisory <ArrowUpRight size={17} aria-hidden="true" /></a>
      <footer className="site-footer"><Link className="wordmark" href="/" aria-label="Vantage SoCal home">vantage socal<span>.</span></Link><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage SoCal</span></footer>
    </>
  );
}
