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
      name: 'Vantage',
      alternateName: 'Vantage Private Dating and Social Advisory',
      description: 'The ultimate private wingman for discerning men in Southern California.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Vantage',
      url: siteUrl,
      description: 'A discreet, hands-on private wingman for men who want more from their personal lives across Los Angeles, Orange County, and Ventura County.',
      email: 'michael@vantagesocal.com',
      logo: `${siteUrl}/favicon.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'michael@vantagesocal.com',
        contactType: 'private client applications',
        areaServed: 'US-CA',
        availableLanguage: 'English',
      },
      knowsAbout: ['Dating strategy', 'Men’s image consulting', 'Social confidence', 'Personal networking', 'Private social events', 'Dating profile consulting'],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
        { '@type': 'AdministrativeArea', name: 'Orange County, California' },
        { '@type': 'AdministrativeArea', name: 'Ventura County, California' },
      ],
      potentialAction: {
        '@type': 'ApplyAction',
        name: 'Apply for Private Advisory',
        target: `${siteUrl}/#apply`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        { '@type': 'Question', name: 'What exactly does Vantage do?', acceptedAnswer: { '@type': 'Answer', text: 'Vantage helps private clients improve appearance, confidence, dating profiles, social circles, real-world social access, and private hosting through personal, hands-on advisory.' } },
        { '@type': 'Question', name: 'Is Vantage a matchmaking service?', acceptedAnswer: { '@type': 'Answer', text: 'No. Vantage does not arrange dates from a database or sell introductions. It helps clients build a better life and social world, then facilitates natural connections when appropriate.' } },
        { '@type': 'Question', name: 'Where does Vantage work?', acceptedAnswer: { '@type': 'Answer', text: 'Vantage serves Los Angeles County, Orange County, and Ventura County, with selective travel considered separately.' } },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Private Dating, Social, and Lifestyle Advisory for Men',
      provider: { '@id': `${siteUrl}/#organization` },
      url: siteUrl,
      serviceType: 'Private dating, social, appearance, and lifestyle advisory for men',
      description: 'Personal, hands-on help from a well-connected advisor to look your best, date with confidence, build an exceptional social life, go out with support, and host private events.',
      audience: { '@type': 'Audience', audienceType: 'Adult men seeking discreet, high-touch personal advisory' },
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
        <Link className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></Link>
        <nav aria-label="Main navigation"><a href="#fit">Who it is for</a><a href="#services">What changes</a><a href="#process">How it works</a><a href="#apply">Apply <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Private dating, social & image advisory</p>
            <p className="availability"><span aria-hidden="true" /> Now accepting private client applications</p>
            <h1 id="hero-title">Look better. Meet more people.<br /><em>Build the life you want.</em></h1>
            <p className="hero-description">One private advisor to improve how you look, how you date, where you go, who you know, and how your social life actually feels.</p>
            <div className="hero-actions"><a className="primary-link" href="#apply">Apply for Private Advisory <ArrowUpRight size={20} aria-hidden="true" /></a><a className="hero-text-link" href="#advisory">See how Vantage works</a></div>
            <div className="hero-bottom"><span>Selective · Discreet · Southern California</span><a href="#apply" aria-label="Go to the private advisory application"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <Image src={publicAsset('/vantage-coastal-hero.webp')} alt="A man overlooking the Southern California coast" width="1536" height="1024" priority />
            <figcaption><span>Look better. Go out. Live better.</span><span>V / 01</span></figcaption>
          </figure>
        </section>

        <section className="outcome-strip" aria-label="Vantage outcomes">
          <div><span>01</span><strong>Look your best</strong><small>Hair, skin, physique, grooming and style</small></div>
          <div><span>02</span><strong>Date with confidence</strong><small>Profiles, conversation, strategy and feedback</small></div>
          <div><span>03</span><strong>Build a real social life</strong><small>Better friends, places, plans and access</small></div>
          <div><span>04</span><strong>Have someone beside you</strong><small>Outings, introductions, dinners and events</small></div>
        </section>

        <section className="approach section-shell" id="advisory" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The difference</p>
          <div className="approach-copy">
            <h2 id="approach-title">A well-connected friend.<br /><span>Not a matchmaking service.</span></h2>
            <div className="approach-text"><p>You work directly with me. I get to know you, help you make the right changes, go out with you, organize plans, and become part of the process in a natural way. It feels more like having a trusted friend and ultimate wingman than hiring a coach.</p><p>I have a vast network across Los Angeles and Southern California, including the social, creative, hospitality, fitness, fashion, and entertainment worlds. When the fit and circumstances are right, that network can create organic opportunities to meet influencers, models, celebrities, and other interesting people.</p></div>
            <p className="mandate-line">This is not coaching or matchmaking. It is a category of its own: personal, organic, and built around your real life.</p>
          </div>
        </section>

        <section className="fit section-shell" id="fit" aria-labelledby="fit-title">
          <div className="fit-heading"><p className="eyebrow">Is Vantage for you?</p><h2 id="fit-title">Your personal life should feel as considered as everything else.</h2></div>
          <div className="fit-grid">
            <article><span>01</span><h3>You know something is missing.</h3><p>You may have money, freedom, taste, or ambition, but your appearance, dating life, friendships, or calendar do not reflect the life you want.</p></article>
            <article><span>02</span><h3>You want real involvement.</h3><p>You are looking for someone who can make plans, coordinate experts, go out with you, give honest feedback, and help execute—not another course to complete alone.</p></article>
            <article><span>03</span><h3>You are ready to act.</h3><p>You have the means and commitment to make meaningful changes. Your job title and background do not matter; discretion, openness, and follow-through do.</p></article>
          </div>
          <a className="primary-link fit-cta" href="#apply">Tell me what you want to change <ArrowUpRight size={18} aria-hidden="true" /></a>
        </section>

        <section className="consulting section-shell" id="services" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / How we help</p><h2 id="consulting-title">Everything that makes<br /><em>your personal life better.</em></h2><p>Every client is different. We focus on the changes that will make the biggest difference for you.</p></div>
          <div className="services services-four">
            <article className="service"><span className="service-number">01</span><h3>Look your best</h3><p>We help you improve your physique, hair, skin, grooming, wardrobe, photos, and overall presentation—with excellent specialists from our private network.</p><span className="service-topics">Physique · Hair · Skin · Style · Photos</span><Link className="service-detail-link" href="/mens-image-consulting-los-angeles/">Explore appearance advisory <ArrowUpRight size={14} aria-hidden="true" /></Link></article>
            <article className="service"><span className="service-number">02</span><h3>Date better</h3><p>We improve your confidence, conversation, dating strategy, apps, photos, prompts, and messaging so you present yourself naturally and effectively.</p><span className="service-topics">Confidence · Strategy · Apps · Conversation</span><Link className="service-detail-link" href="/private-dating-advisor-los-angeles/">Explore dating advisory <ArrowUpRight size={14} aria-hidden="true" /></Link></article>
            <article className="service"><span className="service-number">03</span><h3>Build your social life</h3><p>We help you make better friends, find the right places, fill your calendar, and create a lifestyle that makes meeting people a normal part of your week.</p><span className="service-topics">Friends · Places · Plans · Introductions</span><Link className="service-detail-link" href="/social-life-consulting-los-angeles/">Explore social advisory <ArrowUpRight size={14} aria-hidden="true" /></Link></article>
            <article className="service"><span className="service-number">04</span><h3>Go out together</h3><p>We can join you at bars, dinners, clubs, and events, help with introductions, and give you useful feedback while the experience is still fresh.</p><span className="service-topics">Outings · Introductions · Support · Feedback</span><Link className="service-detail-link" href="/private-wingman-los-angeles/">Explore in-person support <ArrowUpRight size={14} aria-hidden="true" /></Link></article>
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
          <div><h2 id="hosting-title">Throw great events.<br /><em>Become the center of a better social life.</em></h2><p className="section-lead">I can create the social environment instead of waiting for the right invitation.</p><div className="approach-text"><p>I can plan and host private dinners, parties, and gatherings, handling the venue, atmosphere, guest experience, hospitality, and logistics.</p><p>You become a stronger host, meet more people naturally, deepen your friendships, and build a social circle that keeps growing.</p></div><Link className="text-link-dark" href="/private-events-los-angeles/">Learn about private events and hosting <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        </section>

        <section className="local section-shell" id="locations" aria-labelledby="local-title">
          <div className="local-intro"><p className="eyebrow">05 / Home ground</p><h2 id="local-title">Los Angeles.<br /><em>Orange County.<br />Ventura County.</em></h2><p>I know the region: the neighborhoods, venues, communities, specialists, and social opportunities.</p><span className="local-signature">VANTAGE / PRIVATE ADVISORY</span></div>
          <div className="local-details"><p>I help position you around the adult women and social world you are genuinely interested in—from age and interests to values and lifestyle.</p><div className="local-areas" aria-label="Service areas"><span>Los Angeles County</span><span>Orange County</span><span>Ventura County</span><span>Selective travel</span></div><p>We turn that into a practical plan for where you go, how you present yourself, who you meet, and what you do each week.</p><p className="local-emphasis">The right places. The right people. A better social life.</p></div>
        </section>

        <section className="process-conversion section-shell" id="process" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">06 / How it starts</p><h2 id="process-title">A private conversation.<br /><em>Then a plan built around you.</em></h2><p>No generic curriculum. No pressure to fit a package before we understand the problem.</p></div>
          <div className="process-steps">
            <article><span>01</span><div><h3>Send a private application</h3><p>Tell me where you are now, what feels missing, and what you want your dating and social life to become.</p></div></article>
            <article><span>02</span><div><h3>We decide whether the fit is right</h3><p>I personally review the application. If Vantage can materially help, we arrange a confidential conversation.</p></div></article>
            <article><span>03</span><div><h3>We identify the first moves</h3><p>We determine the highest-impact changes and the right level of hands-on support, specialists, outings, and social planning.</p></div></article>
          </div>
          <a className="primary-link" href="#apply">Start your application <ArrowUpRight size={18} aria-hidden="true" /></a>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">07 / Straight answers</p><h2 id="faq-title">Personal help<br /><em>that fits your real life.</em></h2><p>For men with high standards who want a better personal and social life.</p></div>
          <div className="faq-list">
            <article><h3>What exactly do you do?</h3><p>I help you look your best, improve your confidence, strengthen your dating profiles, build your social circle, find better places to go, join you on outings, and throw events that bring people together.</p></article>
            <article><h3>Is this matchmaking?</h3><p>No. I do not sell introductions or arrange dates from a database. I help you build a better life and social world, then use my network when a natural, appropriate opportunity arises.</p></article>
            <article><h3>What makes it different?</h3><p>The relationship is personal and hands-on. I act more like a trusted, well-connected friend than a conventional coach. There is no fixed course because every client needs something different.</p></article>
            <article><h3>Do I need to be professionally successful?</h3><p>No. Career status is not the test. Vantage is for men who have the means and commitment to invest in their personal life. We identify the changes with the highest impact, then help execute them across appearance, dating, friendships, venues, events, and your weekly life.</p></article>
            <article><h3>Should I hire a dating coach, a matchmaker, or Vantage?</h3><p>A coach usually focuses on skills, while a matchmaker focuses on introductions. Vantage works on the full picture and can be beside you in real life. <Link className="inline-link" href="/dating-coach-vs-matchmaker-los-angeles/">Compare the options</Link>.</p></article>
            <article><h3>Is it private?</h3><p>Yes. I work discreetly with a limited number of clients. Introductions, outings, specialists, and events are handled with care and good judgment.</p></article>
          </div>
        </section>

        <section className="application-section section-shell" id="apply" aria-labelledby="apply-title">
          <div className="application-intro">
            <p className="eyebrow">Apply for private advisory</p>
            <h2 id="apply-title">Tell me what you want<br /><em>your life to look like.</em></h2>
            <p>Every situation is different. This short application helps me understand where you are, what you want, and how involved you would like me to be.</p>
            <p className="application-availability">Applications are currently open for Los Angeles, Orange County, and Ventura County.</p>
          </div>
          <InquiryForm />
        </section>
      </main>

      <a className="floating-apply" href="#apply">Apply for Private Advisory <ArrowUpRight size={17} aria-hidden="true" /></a>
      <footer className="site-footer site-footer-expanded"><Link className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></Link><nav className="footer-links" aria-label="Footer navigation"><Link href="/about/">About</Link><Link href="/how-it-works/">How it works</Link><Link href="/southern-california-service-area/">Service area</Link><Link href="/privacy/">Privacy</Link><a href="#apply">Apply</a></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
