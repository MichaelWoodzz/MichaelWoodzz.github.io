import { ArrowDown, ArrowUpRight } from 'lucide-react';

const siteUrl = 'https://vantage.upgradevillage.chatgpt.site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Vantage',
      description: 'Private dating and personal advisory for men in Southern California.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Vantage',
      url: siteUrl,
      description: 'Private personal and dating advisory for men across Los Angeles, Orange County, and Ventura County.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
        { '@type': 'AdministrativeArea', name: 'Orange County, California' },
        { '@type': 'AdministrativeArea', name: 'Ventura County, California' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Private Dating and Personal Advisory for Men',
      provider: { '@id': `${siteUrl}/#organization` },
      url: siteUrl,
      serviceType: 'Dating consulting and personal advisory for men',
      description: 'Individual dating strategy, confidence and communication guidance, appearance consulting, and access to hair, skin, cosmetic, physique, and social specialists.',
      audience: { '@type': 'Audience', audienceType: 'Adult men seeking private dating and personal advisory' },
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
        <a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#approach">The approach</a><a href="#los-angeles">Our locations</a><a href="#consulting">The offer <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Private dating consultant for men · Southern California</p>
            <h1 id="hero-title">A better<br />perspective.<br /><em>A stronger you.</em></h1>
            <p className="hero-description">Your appearance. Your social circle. Your dating life. A personal strategy, specialist expertise, and a connected local network—built around you and the women you want to meet.</p>
            <a className="primary-link" href="#consulting">Explore the Vantage offer <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Los Angeles · Orange County · Ventura County</span><a href="#consulting" aria-label="Explore consulting services"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <img src="/vantage-coastal-hero.webp" alt="A man looking over the Southern California coast, representing Vantage private dating consulting" width="1536" height="1024" fetchPriority="high" decoding="async" />
            <figcaption><span>A new point of view.</span><span>V / 01</span></figcaption>
          </figure>
        </section>
        <section className="approach section-shell" id="approach" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The approach</p>
          <div className="approach-copy">
            <h2 id="approach-title">Every situation is different.<br /><span>Your strategy should be, too.</span></h2>
            <div className="approach-text"><p>You may be successful in your career and want that same intentionality in your personal life. You may be newly single, new to the area, or ready to change a dating pattern that isn’t working. We start with your actual situation: your strengths, your challenges, your lifestyle, and what you want next.</p><p>For one client, the priority is hair, skin, physique, and presentation. For another, it’s confidence, conversation, or access to a different social circle. We bring the relevant expertise together into a personal plan, with priorities shaped by your goals, schedule, and starting point.</p></div>
          </div>
        </section>
        <section className="consulting section-shell" id="consulting" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / The Vantage offer</p><h2 id="consulting-title">The whole picture.<br /><em>A plan that connects it.</em></h2><p>Personal advisory that brings together how you look, how you connect, and where you spend your time.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01</span><h3>Appearance & presence</h3><p>Work with our network of cosmetic, grooming, and physique experts to refine your presentation. Hair, skin, fitness, wardrobe, and the way you carry yourself all become part of one considered direction.</p><span className="service-topics">Hair · Skin · Physique · Personal style</span></article>
            <article className="service"><span className="service-number">02</span><h3>Dating & social strategy</h3><p>Align your photos, profile, communication, and social life with the women you’re interested in meeting. Get honest feedback on first impressions, conversation, and how you build a connection beyond the first date.</p><span className="service-topics">Positioning · Profiles · Conversation</span></article>
            <article className="service"><span className="service-number">03</span><h3>Network & access</h3><p>Tap into our excellent network, with support for clients across Los Angeles, Orange County, and Ventura County. We connect clients with relevant specialists and social opportunities, helping you build relationships and spend time in circles that fit your interests and dating goals.</p><span className="service-topics">Specialists · Social circles · Opportunities</span></article>
          </div>
        </section>
        <section className="expertise section-shell" aria-labelledby="expertise-title">
          <div className="section-heading"><p className="eyebrow">03 / Specialist expertise</p><h2 id="expertise-title">Invest in how<br /><em>you show up.</em></h2><p>Our network includes experts in cosmetics, hair, skin, and physique. Your needs determine who we bring into the picture.</p></div>
          <div className="expertise-list">
            <article><span>01 / Hair</span><div><h3>A look that works for you.</h3><p>Hair and grooming expertise to refine your cut, styling, and overall presentation around your features and the image you want to project.</p></div></article>
            <article><span>02 / Skin</span><div><h3>Specialist attention to the details.</h3><p>Access to skin and cosmetic experts who can assess your concerns and discuss suitable options directly with you.</p></div></article>
            <article><span>03 / Physique</span><div><h3>Build a presence you feel good in.</h3><p>Connections to physique and fitness specialists, with your goals and routine informing the direction. Bring your training, personal style, and confidence into alignment.</p></div></article>
          </div>
        </section>
        <section className="positioning section-shell" aria-labelledby="positioning-title">
          <p className="eyebrow section-label">04 / Personal positioning</p>
          <div><h2 id="positioning-title">The women you want to meet.<br /><em>The places you belong.</em></h2><p className="section-lead">Be specific about what you want. We’ll be specific about your strategy.</p><div className="approach-text"><p>We can position you around the specific demographic of adult women you’re interested in—from age range and life stage to interests, values, and lifestyle. That clarity shapes your presentation, your dating profile, and the environments where you focus your time.</p><p>We help you find the overlap between the women you’re drawn to and the communities you can authentically belong to. Our network opens up relevant connections and social opportunities, giving you more ways to meet people through shared interests and mutual attraction.</p></div></div>
        </section>
        <section className="local section-shell" id="los-angeles" aria-labelledby="local-title">
          <div className="local-intro"><p className="eyebrow">05 / Our home ground</p><h2 id="local-title">All of Los Angeles.<br /><em>Orange County.<br />Ventura County.</em></h2><p>Based in Los Angeles, we serve clients throughout LA, Orange County, and Ventura County. Your strategy stays focused on the places that fit your life.</p><span className="local-signature">VANTAGE / SOUTHERN CALIFORNIA</span></div>
          <div className="local-details"><p>Where you live, work, and socialize matters. We narrow the focus to the neighborhoods, communities, and social settings that fit the women you want to meet—and the life you actually lead.</p><div className="local-areas" aria-label="Service areas"><span>All of Los Angeles</span><span>Orange County</span><span>Ventura County</span></div><p>Your plan might center on your own neighborhood, social opportunities elsewhere in your county, or connections across the region. We account for your routine and how far you want to travel, then combine that geographic focus with our network to identify relevant events, activities, and opportunities to connect.</p><p className="local-emphasis">Broad regional coverage. A personal plan for the people and places that make sense for you.</p></div>
        </section>
        <section className="process section-shell" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">06 / Working together</p><h2 id="process-title">Individual attention.<br /><em>Practical direction.</em></h2><p>The mix of support is personal. We focus on what will make the most meaningful difference in your situation.</p></div>
          <div className="services"><article className="service"><span className="service-number">01 / Understand</span><h3>Start with your situation.</h3><p>Look at your current dating life, appearance, confidence, social circle, and preferences. Define the women you want to meet and where across Los Angeles, Orange County, or Ventura County you want to focus.</p></article><article className="service"><span className="service-number">02 / Coordinate</span><h3>Bring the right people in.</h3><p>Set clear priorities and connect you with the relevant experts and network. Build a practical direction for your presentation, dating approach, and social life.</p></article><article className="service"><span className="service-number">03 / Refine</span><h3>Put the plan into practice.</h3><p>Use real experiences and honest feedback to refine your approach. As your confidence, circumstances, and goals evolve, your strategy evolves with them.</p></article></div>
        </section>
        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="section-heading"><p className="eyebrow">07 / Questions</p><h2 id="faq-title">What to know<br /><em>about Vantage.</em></h2><p>Clear answers about our private dating and personal advisory service for men.</p></div>
          <div className="faq-list">
            <article><h3>What does a private dating consultant help with?</h3><p>Vantage looks at the full picture: dating strategy, profiles and photos, communication, confidence, social opportunities, and personal presentation. When relevant, we also coordinate expertise in hair, skin, cosmetics, physique, and style.</p></article>
            <article><h3>Is every Vantage plan personalized?</h3><p>Yes. Every client begins with a different situation, lifestyle, dating history, and goal. We identify the changes most likely to matter for you and bring in the right specialists and opportunities for that plan.</p></article>
            <article><h3>Where does Vantage work with clients?</h3><p>We serve men throughout Los Angeles County, Orange County, and Ventura County. Your strategy can focus on a particular neighborhood, county, or wider Southern California social circle.</p></article>
            <article><h3>Can Vantage help me meet the kind of women I’m interested in?</h3><p>We clarify the adult women you hope to meet by life stage, interests, values, and lifestyle. That understanding guides your positioning and the communities, settings, and social opportunities where you are most likely to make an authentic connection.</p></article>
            <article><h3>Does Vantage provide cosmetic or fitness services?</h3><p>Vantage provides strategy and coordination. Our network includes professionals in cosmetics, hair, skin, grooming, fitness, and physique. Any specialist assesses and delivers services within their own professional scope.</p></article>
            <article><h3>Is Vantage a matchmaking service?</h3><p>Vantage is a private advisory service. We help you become better positioned to date and connect, and we can tap our network for relevant social opportunities and specialist support. We do not promise a particular match or another person’s interest.</p></article>
          </div>
        </section>
        <section className="closing section-shell" aria-labelledby="closing-title"><div><p className="eyebrow">Your next chapter</p><h2 id="closing-title">It starts with<br /><em>your point of view.</em></h2></div><div className="coming-soon"><span className="status-dot" /><p>Consultations coming soon.</p><span>Good things are taking shape.</span></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a><p>Los Angeles · Orange County · Ventura County</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
