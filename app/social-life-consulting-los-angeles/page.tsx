import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Social Life Consultant for Men in Los Angeles | Vantage',
  description: 'Private social-life consulting for men. Build a stronger network, an active calendar, better friendships, and more natural ways to meet people in Los Angeles.',
  alternates: { canonical: '/social-life-consulting-los-angeles/' },
  openGraph: { title: 'Social Life Consulting for Men in Los Angeles | Vantage', description: 'Build a stronger circle, better calendar, and more connected lifestyle.', url: '/social-life-consulting-los-angeles/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/social-life-consulting-los-angeles/"
    eyebrow="Social life and network advisory"
    title="Build a social life that creates its own opportunities."
    lead="Vantage helps men develop stronger friendships, enter better environments, make plans consistently, and meet more people through real life instead of relying only on dating apps."
    serviceType="Social life and personal network consulting"
    sections={[
      { title: 'Turn an empty calendar into a connected life', paragraphs: ['Professional success can consume the time and attention that friendships need. The result is often a small circle, repetitive weekends, and too much dependence on dating apps.', 'We build a realistic weekly rhythm around places, interests, communities, invitations, and relationships that you can sustain.'], points: ['A stronger social circle', 'Better recurring environments', 'More plans, dinners, and activities', 'Natural opportunities to meet new people'] },
      { title: 'The right rooms for you', paragraphs: ['Los Angeles has no shortage of events, but random activity does not automatically create connection. We choose environments around your personality, interests, location, and the people you want in your life.', 'Vantage can organize outings and help you become comfortable contributing to the room rather than standing at its edge.'] },
      { title: 'A friend inside the process', paragraphs: ['This is personal and hands-on. I can make plans with you, go out with you, help with introductions, and give honest feedback like a trusted, socially capable friend.', 'As your confidence and network grow, the lifestyle becomes your own.'] },
    ]}
    questions={[
      { question: 'Is this networking for business?', answer: 'The focus is your personal and social life. Professional connections may happen naturally, but the goal is better friendships, experiences, community, and dating opportunities.' },
      { question: 'Can you help if I recently moved to Los Angeles?', answer: 'Yes. A new city is a common reason to need a deliberate social plan, local context, and help finding compatible environments.' },
      { question: 'Will you introduce me to people?', answer: 'Introductions may happen when they are natural and appropriate. Vantage does not sell access to specific people or promise introductions.' },
    ]}
    related={[
      { href: '/private-wingman-los-angeles/', label: 'Private wingman support' },
      { href: '/private-events-los-angeles/', label: 'Private events and hosting' },
      { href: '/southern-california-service-area/', label: 'Southern California service area' },
    ]}
  />;
}
