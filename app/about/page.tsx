import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Vantage | Private Dating, Social and Lifestyle Advisory',
  description: 'Vantage is a discreet, hands-on private advisory helping men improve their appearance, dating life, social network, lifestyle, and access.',
  alternates: { canonical: '/about/' },
  openGraph: { title: 'About Vantage Private Advisory', description: 'A well-connected friend and private advisor for men with high standards in Southern California.', url: '/about/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/about/"
    eyebrow="About Vantage"
    title="Private advisory that feels like having the right friend in your corner."
    lead="Vantage helps men close the gap between the personal life they have and the appearance, dating life, friendships, social calendar, and confidence they want."
    serviceType="Private dating, social, and lifestyle advisory"
    sections={[
      { title: 'Why Vantage exists', paragraphs: ['Dating problems are rarely only about dating. How you look, how you feel, who you know, where you spend time, and how active your life is all affect the people you meet.', 'Vantage brings those pieces together under one personal relationship instead of sending you through disconnected courses and services.'] },
      { title: 'A different working relationship', paragraphs: ['You work directly with an advisor who gets to know your life, tells you the truth, makes plans with you, and can join you in the real world.', 'The relationship is closer to a trusted, well-connected friend than a conventional coach or matchmaker.'] },
      { title: 'Network, discretion, and judgment', paragraphs: ['Vantage can draw from a broad Southern California network across social, creative, hospitality, fitness, fashion, beauty, and entertainment circles.', 'That network may create organic opportunities to meet interesting people when the fit is natural. Vantage does not sell access, promise celebrity introductions, or treat people as inventory. Privacy and sound judgment come first.'] },
    ]}
    questions={[
      { question: 'Is Vantage a company or a course?', answer: 'Vantage is a private advisory service. There is no prerecorded course or standard curriculum.' },
      { question: 'Is Vantage a matchmaking agency?', answer: 'No. Vantage improves the client’s broader life and may facilitate natural connections, but it does not provide a catalog of matches or sell introductions.' },
      { question: 'What does private mean?', answer: 'Vantage works with a limited number of clients and handles personal information, introductions, outings, specialists, and events discreetly.' },
    ]}
    related={[
      { href: '/how-it-works/', label: 'How Vantage works' },
      { href: '/private-dating-advisor-los-angeles/', label: 'Private dating advisory' },
      { href: '/mens-image-consulting-los-angeles/', label: 'Men’s image consulting' },
    ]}
  />;
}
