import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Private Social Events and Hosting in Los Angeles | Vantage',
  description: 'Plan private dinners, parties, and gatherings that strengthen your social network. Vantage supports venues, atmosphere, hospitality, logistics, and confident hosting.',
  alternates: { canonical: '/private-events-los-angeles/' },
  openGraph: { title: 'Private Events and Social Hosting in Los Angeles | Vantage', description: 'Create memorable dinners and gatherings that bring the right people together.', url: '/private-events-los-angeles/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/private-events-los-angeles/"
    eyebrow="Private events and hosting"
    title="Create the room instead of waiting for an invitation."
    lead="Vantage helps clients plan and host private dinners, parties, and gatherings that deepen friendships, expand their social world, and create natural opportunities to meet people."
    serviceType="Private social event planning and hosting advisory"
    sections={[
      { title: 'Build the event around a purpose', paragraphs: ['A good event is more than a reservation and a guest list. We begin with the atmosphere you want, the relationships you want to strengthen, and the kind of experience guests will remember.', 'The format may be an intimate dinner, a larger celebration, a recurring gathering, or a night built around a shared interest.'] },
      { title: 'Handle the details well', paragraphs: ['Depending on the event, Vantage can help coordinate venue selection, invitations, timing, hospitality, atmosphere, guest flow, and logistics.', 'The goal is a polished experience that still feels relaxed and personal.'], points: ['Concept and format', 'Venue and hospitality', 'Guest experience', 'Hosting preparation and follow-up'] },
      { title: 'Become a confident host', paragraphs: ['Hosting places you at the center of connection. We help you welcome people, make introductions, manage the energy of the room, and ensure guests feel included.', 'Done consistently, events can strengthen your reputation, deepen your network, and give your social life momentum.'] },
    ]}
    questions={[
      { question: 'Does Vantage operate as an event-planning company?', answer: 'Event support is part of a broader private advisory engagement. The purpose is to improve the client’s social life and ability to host, rather than simply produce a standalone corporate event.' },
      { question: 'Can you provide guests?', answer: 'Vantage may help shape a guest strategy and facilitate appropriate organic connections, but it does not sell access to people or guarantee the attendance of any specific person.' },
      { question: 'Can events be kept discreet?', answer: 'Yes. Privacy and sound judgment guide venue, invitation, guest, photography, and communication decisions.' },
    ]}
    related={[
      { href: '/social-life-consulting-los-angeles/', label: 'Social life consulting' },
      { href: '/private-wingman-los-angeles/', label: 'Private wingman support' },
      { href: '/how-it-works/', label: 'How Vantage works' },
    ]}
  />;
}
