import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How Vantage Private Advisory Works',
  description: 'Learn how Vantage assesses your appearance, dating life, social circle, lifestyle, and goals, then provides a personal plan and hands-on support.',
  alternates: { canonical: '/how-it-works/' },
  openGraph: { title: 'How Vantage Private Advisory Works', description: 'A personal assessment, focused plan, trusted specialists, and hands-on real-world support.', url: '/how-it-works/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/how-it-works/"
    eyebrow="The Vantage engagement"
    title="A personal plan, followed by real-world action."
    lead="Every engagement is different. Vantage identifies what will make the greatest difference, connects the right resources, and stays involved while you put the plan into practice."
    serviceType="Private dating, social, appearance, and lifestyle advisory"
    sections={[
      { title: 'Understand the full situation', paragraphs: ['The first step is a candid assessment of your appearance, confidence, dating patterns, profiles, friendships, schedule, interests, geography, and goals.', 'We identify the few issues creating the largest gap between your current life and the one you want.'] },
      { title: 'Build the right plan and team', paragraphs: ['Priorities are turned into a practical sequence. When specialist help is useful, Vantage can connect and coordinate appropriate resources across fitness, hair, skin, grooming, wardrobe, photography, hospitality, and other areas.', 'You do not need every service. The plan is based on your circumstances.'] },
      { title: 'Put it into real life', paragraphs: ['Execution may include appointments, new photographs, profile work, outings, introductions, social planning, private events, and ongoing feedback.', 'Vantage stays close enough to see what is working and adjust the plan as your confidence, network, and lifestyle change.'] },
    ]}
    questions={[
      { question: 'How involved is Vantage?', answer: 'The level of involvement depends on the engagement. It can range from strategy and coordination to outings, introductions, specialist appointments, and private events.' },
      { question: 'Is there a standard program?', answer: 'No. There is no fixed course because clients have different strengths, schedules, locations, and goals.' },
      { question: 'Who is the service designed for?', answer: 'Vantage is designed for adult men with the means and commitment to invest seriously in their appearance, dating life, social circle, and lifestyle. A particular career title or background is not required.' },
    ]}
    related={[
      { href: '/about/', label: 'About Vantage' },
      { href: '/private-dating-advisor-los-angeles/', label: 'Private dating advisory' },
      { href: '/southern-california-service-area/', label: 'Southern California service area' },
    ]}
  />;
}
