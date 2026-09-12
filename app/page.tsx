import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { publicAsset, siteUrl } from '@/lib/site-config';
import { InquiryForm } from '@/components/InquiryForm';
import { blogPosts } from '@/lib/blog';

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
        name: 'Talk to Vantage',
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
        <nav aria-label="Main navigation"><Link href="/about/">About</Link><Link href="/services/">Services</Link><Link href="/blog/">Field Notes</Link><a href="#apply">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Your wingman for real life</p>
            <p className="availability"><span aria-hidden="true" /> Taking on new clients now</p>
            <h1 id="hero-title">Look better. Go out more.<br /><em>Meet the right people.</em></h1>
            <p className="hero-description">I help you upgrade your look, get your dating life moving, find better places to go, meet more people, and build a social life you are actually excited about.</p>
            <div className="hero-actions"><a className="primary-link" href="#apply">Get Vantage in your corner <ArrowUpRight size={20} aria-hidden="true" /></a><a className="hero-text-link" href="#advisory">What does a private wingman do?</a></div>
            <div className="hero-bottom"><span>25+ men helped · LA-based · Completely private</span><a href="#apply" aria-label="Go to the private application"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <Image src={publicAsset('/vantage-coastal-hero.webp')} alt="A man overlooking the Southern California coast" width="1536" height="1024" priority />
            <figcaption><span>Someone in your corner changes everything.</span><span>V / LA</span></figcaption>
          </figure>
        </section>

        <section className="outcome-strip" aria-label="Vantage outcomes">
          <div><span>01</span><strong>I help you look your best</strong><small>Hair, skin, physique, grooming and style</small></div>
          <div><span>02</span><strong>I fix what is not working</strong><small>Profiles, photos, conversation and dating strategy</small></div>
          <div><span>03</span><strong>I get you out of the house</strong><small>Better places, plans, people and a real social circle</small></div>
          <div><span>04</span><strong>I can go with you</strong><small>Bars, dinners, parties, introductions and honest feedback</small></div>
        </section>

        <section className="approach section-shell" id="advisory" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / What this actually is</p>
          <div className="approach-copy">
            <h2 id="approach-title">Think of me as the friend<br /><span>you wish you already had.</span></h2>
            <div className="approach-text"><p>You work directly with me. I get to know you, tell you the truth, help you make the right changes, make plans with you, and go out with you. This is not a course. We work on your actual life together.</p><p>I know people across LA in nightlife, hospitality, fitness, fashion, beauty, entertainment, and creative circles. When it makes sense, that network can lead to natural opportunities to meet models, influencers, celebrities, and other interesting people.</p></div>
            <p className="mandate-line">A dating coach gives you advice. A matchmaker gives you introductions. A wingman is actually there with you.</p>
          </div>
        </section>

        <section className="fit section-shell" id="fit" aria-labelledby="fit-title">
          <div className="fit-heading"><p className="eyebrow">Does this sound like you?</p><h2 id="fit-title">You know your personal life could be a lot better. You just need help making it happen.</h2></div>
          <div className="fit-grid">
            <article><span>01</span><h3>You are tired of the same routine.</h3><p>Your weekends are too quiet, dating apps are going nowhere, your circle is too small, or you simply are not meeting the kind of people you want.</p></article>
            <article><span>02</span><h3>You do not want another “coach.”</h3><p>You want someone who can make plans, connect the right experts, go out with you, give honest feedback, and help you follow through in real life.</p></article>
            <article><span>03</span><h3>You are ready to change it.</h3><p>You have the time, means, and commitment to make meaningful changes. Your job title does not matter. Being open, serious, and ready to act does.</p></article>
          </div>
          <a className="primary-link fit-cta" href="#apply">Tell me what is not working <ArrowUpRight size={18} aria-hidden="true" /></a>
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
          <div className="section-heading"><p className="eyebrow">06 / How it starts</p><h2 id="process-title">Tell me what is going on.<br /><em>We will figure out the next move.</em></h2><p>No generic program. I need to understand you before deciding what would actually help.</p></div>
          <div className="process-steps">
            <article><span>01</span><div><h3>Tell me what is happening</h3><p>Where are you stuck? What is missing? What would a great dating and social life look like to you?</p></div></article>
            <article><span>02</span><div><h3>We talk privately</h3><p>I read every message myself. If I think I can help, we have a direct, confidential conversation about what is really going on.</p></div></article>
            <article><span>03</span><div><h3>We start with the biggest wins</h3><p>That might be your appearance, photos, social calendar, confidence, an outing together, or a complete plan. Every situation is different.</p></div></article>
          </div>
          <a className="primary-link" href="#apply">Tell me what you need <ArrowUpRight size={18} aria-hidden="true" /></a>
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

        <section className="home-blog section-shell" aria-labelledby="home-blog-title">
          <div className="section-heading"><p className="eyebrow">08 / Field notes</p><h2 id="home-blog-title">Useful advice.<br /><em>No pickup nonsense.</em></h2><p>Practical guides for improving your dating life, appearance, and social world in Los Angeles.</p></div>
          <div className="home-blog-grid">{blogPosts.slice(0, 3).map((post, index) => <article key={post.slug}><span>{String(index + 1).padStart(2, '0')} / {post.category}</span><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.description}</p><Link href={`/blog/${post.slug}/`}>Read the guide <ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}</div>
          <Link className="all-notes-link" href="/blog/">See all field notes <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>

        <section className="application-section section-shell" id="apply" aria-labelledby="apply-title">
          <div className="application-intro">
            <p className="eyebrow">Start a private conversation</p>
            <h2 id="apply-title">What is going on?<br /><em>What do you want to change?</em></h2>
            <p>Every situation is different. Give me the honest version. I will read it personally and let you know if I think Vantage can help.</p>
            <p className="application-availability">Applications are currently open for Los Angeles, Orange County, and Ventura County.</p>
          </div>
          <InquiryForm />
        </section>
      </main>

      <a className="floating-apply" href="#apply">Get a wingman <ArrowUpRight size={17} aria-hidden="true" /></a>
      <footer className="site-footer site-footer-expanded"><Link className="wordmark" href="/" aria-label="Vantage home">vantage<span>.</span></Link><nav className="footer-links" aria-label="Footer navigation"><Link href="/about/">About</Link><Link href="/services/">Services</Link><Link href="/blog/">Field Notes</Link><Link href="/how-it-works/">How it works</Link><Link href="/southern-california-service-area/">Service area</Link><Link href="/privacy/">Privacy</Link><a href="#apply">Let’s talk</a></nav><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
