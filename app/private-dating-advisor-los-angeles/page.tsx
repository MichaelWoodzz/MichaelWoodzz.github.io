import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Dating Coach for Successful Men in Los Angeles | Vantage',
  description: 'A private dating advisor and hands-on dating coach for successful men in Los Angeles. Improve confidence, profiles, conversation, social life, and real-world opportunities.',
  alternates: { canonical: '/private-dating-advisor-los-angeles/' },
  openGraph: { title: 'Dating Coach for Successful Men in Los Angeles | Vantage', description: 'Personal dating strategy and hands-on support for accomplished men across Los Angeles and Southern California.', url: '/private-dating-advisor-los-angeles/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/private-dating-advisor-los-angeles/"
    eyebrow="Private dating advisory"
    title="Dating advice for successful men, built around your actual life."
    lead="Vantage is a private dating advisor and hands-on dating coach for successful men who want to improve confidence, conversation, profiles, photos, social opportunities, and the choices that shape each experience."
    serviceType="Private dating advisory for men"
    sections={[
      { title: 'A personal dating strategy', paragraphs: ['There is no script or fixed course. We look at your experience, personality, schedule, goals, current opportunities, and the kind of relationship or dating life you want.', 'The result is a practical strategy for meeting people, presenting yourself well, communicating naturally, and making better decisions throughout the dating process.'], points: ['Confidence and social comfort', 'Conversation and flirting', 'Dating choices and follow-through', 'Dating apps, prompts, photos, and messaging'] },
      { title: 'Dating is connected to the rest of your life', paragraphs: ['A profile cannot compensate for weak photos, an empty calendar, or a lifestyle that creates few opportunities to meet people. Vantage can address appearance, social life, digital presence, and real-world access together.', 'That broader view is what separates private advisory from ordinary dating coaching.'] },
      { title: 'Local and hands-on', paragraphs: ['Los Angeles dating is shaped by geography, schedules, neighborhoods, and social circles. We build around those realities instead of giving generic advice.', 'When useful, support can extend into outings, introductions, event planning, and feedback based on what is happening in real life.'] },
    ]}
    questions={[
      { question: 'Is Vantage a matchmaking service?', answer: 'No. Vantage does not sell matches or arrange dates from a database. The work improves your presentation, confidence, social life, and access so connections can develop naturally.' },
      { question: 'Can you help with dating apps?', answer: 'Yes. Support can include photo selection, profile strategy, prompts, messaging, and deciding how apps should fit into a broader dating plan.' },
      { question: 'Do you guarantee dates or relationships?', answer: 'No. Attraction and relationships involve other people. Vantage provides strategy, honest feedback, coordination, and practical support without promising a specific romantic outcome.' },
      { question: 'Do you work with successful men whose personal life has fallen behind their career?', answer: 'Yes. Vantage is designed for accomplished men who want their appearance, confidence, dating life, friendships, and social calendar to match the level of the rest of their life.' },
    ]}
    related={[
      { href: '/private-wingman-los-angeles/', label: 'Private wingman support' },
      { href: '/mens-image-consulting-los-angeles/', label: 'Men’s image consulting' },
      { href: '/social-life-consulting-los-angeles/', label: 'Social life consulting' },
    ]}
  />;
}
