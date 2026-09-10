import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Private Wingman and In-Person Social Support in Los Angeles | Vantage',
  description: 'A discreet private wingman for men in Los Angeles. Go out together, navigate introductions, build confidence, and receive practical real-time support.',
  alternates: { canonical: '/private-wingman-los-angeles/' },
  openGraph: { title: 'Private Wingman in Los Angeles | Vantage', description: 'Discreet, in-person social support that feels like going out with a capable friend.', url: '/private-wingman-los-angeles/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/private-wingman-los-angeles/"
    eyebrow="In-person social support"
    title="The ultimate private wingman for real life."
    lead="Vantage can accompany you to bars, dinners, parties, clubs, cultural events, and other social settings—offering discreet support before, during, and after the experience."
    serviceType="Private wingman and in-person social support"
    sections={[
      { title: 'Go out with someone in your corner', paragraphs: ['Advice can sound simple in a quiet room and feel completely different in a live social environment. In-person support closes that gap.', 'I can help choose the setting, arrive with you, make the evening feel natural, and help you participate confidently without turning the night into a lesson.'] },
      { title: 'Practical support in the moment', paragraphs: ['The work can include introductions, conversation, group dynamics, reading the room, moving between venues, and recognizing when to stay or leave.', 'Feedback is direct, private, and timed so it helps without disrupting the experience.'], points: ['Plan the right outing', 'Navigate introductions', 'Build comfort in groups', 'Review what worked afterward'] },
      { title: 'A friend, not a performance', paragraphs: ['There are no routines, costumes, or pickup-artist tactics. The aim is to help you become more relaxed, observant, social, and effective as yourself.', 'Over time, you should need less support because the confidence and judgment become your own.'] },
    ]}
    questions={[
      { question: 'Will it look like I am being coached?', answer: 'No. The experience is designed to feel like going out with a friend. Guidance is discreet and adapted to the environment.' },
      { question: 'What kinds of places can we go?', answer: 'Possibilities include bars, restaurants, private gatherings, clubs, cultural events, professional socials, and other environments that fit your interests and goals.' },
      { question: 'Is this pickup coaching?', answer: 'No. Vantage does not use pickup tactics or seduction scripts. The focus is confidence, social judgment, conversation, lifestyle, and genuine connection.' },
    ]}
    related={[
      { href: '/private-dating-advisor-los-angeles/', label: 'Private dating advisory' },
      { href: '/social-life-consulting-los-angeles/', label: 'Social life consulting' },
      { href: '/private-events-los-angeles/', label: 'Private events and hosting' },
    ]}
  />;
}
