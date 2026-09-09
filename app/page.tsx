import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#approach">The approach</a><a href="#consulting">Consulting <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-rule" /> Dating & personal consulting for men</p>
            <h1 id="hero-title">A better<br />perspective.<br /><em>A stronger you.</em></h1>
            <p className="hero-description">Show up with confidence. Connect with intention. Build a dating life that feels like you.</p>
            <a className="primary-link" href="#approach">Discover the approach <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="hero-bottom"><span>Confidence. Connection. Direction.</span><a href="#consulting" aria-label="Explore consulting services"><ArrowDown size={20} aria-hidden="true" /></a></div>
          </div>
          <figure className="hero-image">
            <img src="/vantage-coastal-hero.png" alt="A man looking out over the ocean from a quiet coastal terrace" width="1536" height="1024" fetchPriority="high" />
            <figcaption><span>A new point of view.</span><span>V / 01</span></figcaption>
          </figure>
        </section>
        <section className="approach section-shell" id="approach" aria-labelledby="approach-title">
          <p className="eyebrow section-label">01 / The approach</p>
          <div className="approach-copy">
            <h2 id="approach-title">Real confidence.<br /><span>Meaningful connection.</span></h2>
            <div className="approach-text"><p>Dating gets clearer when you understand yourself. Vantage brings a thoughtful, practical perspective to how you meet people, communicate, and carry yourself.</p><p>Honest feedback. Intentional action. A stronger sense of who you are and what you want—grounded in respect for yourself and the people you meet.</p></div>
          </div>
        </section>
        <section className="consulting section-shell" id="consulting" aria-labelledby="consulting-title">
          <div className="section-heading"><p className="eyebrow">02 / Consulting</p><h2 id="consulting-title">Move forward<br /><em>with intention.</em></h2><p>Practical guidance for the way you date,<br className="desktop-break" /> connect, and show up in the world.</p></div>
          <div className="services">
            <article className="service"><span className="service-number">01</span><h3>Dating & connection</h3><p>Bring more clarity to dating, from your profile and first conversation to understanding compatibility.</p><span className="service-topics">Profiles · Conversation · Dating direction</span></article>
            <article className="service"><span className="service-number">02</span><h3>Confidence & presence</h3><p>Develop the self-awareness, communication, and personal presence to feel more at ease being yourself.</p><span className="service-topics">Self-assurance · Communication · Style</span></article>
            <article className="service"><span className="service-number">03</span><h3>Personal direction</h3><p>Get clear on your standards, recognize patterns, and turn the person you want to be into everyday choices.</p><span className="service-topics">Values · Habits · Personal growth</span></article>
          </div>
        </section>
        <section className="closing section-shell" aria-labelledby="closing-title"><div><p className="eyebrow">Your next chapter</p><h2 id="closing-title">It starts with<br /><em>your point of view.</em></h2></div><div className="coming-soon"><span className="status-dot" /><p>Consultations coming soon.</p><span>Good things are taking shape.</span></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#" aria-label="Vantage home">vantage<span>.</span></a><p>Dating & personal consulting for men</p><span>© {new Date().getFullYear()} Vantage</span></footer>
    </>
  );
}
