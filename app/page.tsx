import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#approach">The approach</a><a href="#los-angeles">Los Angeles</a><a href="#consulting">The offer <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Private advisory for men · Los Angeles</p>
            <h1 id="hero-title">A better<br />perspective.<br /><em>A stronger you.</em></h1>
            <p className="hero-description">Your appearance. Your social circle. Your dating life. A personal strategy, specialist expertise, and a connected LA network—built around you and the women you want to meet.</p>
            <a className="primary-link" href="#consulting">Explore the Vantage offer <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Based in Los Angeles. Built around you.</span><a href="#consulting" aria-label="Explore consulting services"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <img src="/vantage-coastal-hero.png" alt="A man looking out over the ocean from a quiet coastal terrace" width="1536" height="1024" fetchPriority="high" />
            <figcaption><span>A new point of view.</span><span>V / 01</span></figcaption>
          </figure>
        </section>
        <section className="approach section-shell" id="approach" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The approach</p>
          <div className="approach-copy">
            <h2 id="approach-title">Every situation is different.<br /><span>Your strategy should be, too.</span></h2>
            <div className="approach-text"><p>You may be successful in your career and want that same intentionality in your personal life. You may be newly single, new to Los Angeles, or ready to change a dating pattern that isn’t working. We start with your actual situation: your strengths, your challenges, your lifestyle, and what you want next.</p><p>For one client, the priority is hair, skin, physique, and presentation. For another, it’s confidence, conversation, or access to a different social circle. We bring the relevant expertise together into a personal plan, with priorities shaped by your goals, schedule, and starting point.</p></div>
          </div>
        </section>
        <section className="consulting section-shell" id="consulting" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / The Vantage offer</p><h2 id="consulting-title">The whole picture.<br /><em>A plan that connects it.</em></h2><p>Personal advisory that brings together how you look, how you connect, and where you spend your time.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01</span><h3>Appearance & presence</h3><p>Work with our network of cosmetic, grooming, and physique experts to refine your presentation. Hair, skin, fitness, wardrobe, and the way you carry yourself all become part of one considered direction.</p><span className="service-topics">Hair · Skin · Physique · Personal style</span></article>
            <article className="service"><span className="service-number">02</span><h3>Dating & social strategy</h3><p>Align your photos, profile, communication, and social life with the women you’re interested in meeting. Get honest feedback on first impressions, conversation, and how you build a connection beyond the first date.</p><span className="service-topics">Positioning · Profiles · Conversation</span></article>
            <article className="service"><span className="service-number">03</span><h3>Network & access</h3><p>Tap into an excellent Los Angeles network. We connect clients with relevant specialists and social opportunities, helping you build relationships and spend time in circles that fit your interests and dating goals.</p><span className="service-topics">Specialists · Social circles · Opportunities</span></article>
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
          <div className="local-intro"><p className="eyebrow">05 / Our home ground</p><h2 id="local-title">Los Angeles.<br /><em>Down to your<br />part of the city.</em></h2><p>We’re based in LA. Your strategy can be as geographically focused as your life needs it to be.</p><span className="local-signature">VANTAGE / LOS ANGELES, CA</span></div>
          <div className="local-details"><p>Where you live, work, and socialize matters. We narrow the focus to the neighborhoods, communities, and social settings that fit the women you want to meet—and the life you actually lead.</p><div className="local-areas" aria-label="Los Angeles areas"><span>Santa Monica & Venice</span><span>Brentwood & Beverly Hills</span><span>West Hollywood & Hollywood</span><span>Los Feliz & Silver Lake</span></div><p>Your plan might center on the Westside, a few nearby neighborhoods, or a wider LA social circle. We combine that geographic focus with our local network to identify relevant events, activities, and opportunities to connect.</p><p className="local-emphasis">A clear plan for your part of Los Angeles, with the people and places that make sense for you.</p></div>
        </section>
        <section className="process section-shell" aria-labelledby="process-title">
          <div className="section-heading"><p className="eyebrow">06 / Working together</p><h2 id="process-title">Individual attention.<br /><em>Practical direction.</em></h2><p>The mix of support is personal. We focus on what will make the most meaningful difference in your situation.</p></div>
          <div className="services"><article className="service"><span className="service-number">01 / Understand</span><h3>Start with your situation.</h3><p>Look at your current dating life, appearance, confidence, social circle, and preferences. Define the women you want to meet and where in LA you want to focus.</p></article><article className="service"><span className="service-number">02 / Coordinate</span><h3>Bring the right people in.</h3><p>Set clear priorities and connect you with the relevant experts and network. Build a practical direction for your presentation, dating approach, and social life.</p></article><article className="service"><span className="service-number">03 / Refine</span><h3>Put the plan into practice.</h3><p>Use real experiences and honest feedback to refine your approach. As your confidence, circumstances, and goals evolve, your strategy evolves with them.</p></article></div>
        </section>
        <section className="closing section-shell" aria-labelledby="closing-title"><div><p className="eyebrow">Your next chapter</p><h2 id="closing-title">It starts with<br /><em>your point of view.</em></h2></div><div className="coming-soon"><span className="status-dot" /><p>Consultations coming soon.</p><span>Good things are taking shape.</span></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a><p>Private personal & dating advisory · Los Angeles</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
