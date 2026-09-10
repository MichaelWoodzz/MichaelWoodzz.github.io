import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Dating Coach vs Matchmaker in Los Angeles | Vantage',
  description: 'Compare a dating coach, matchmaker, and Vantage private advisory for men in Los Angeles. See which kind of help fits your dating and social life.',
  alternates: { canonical: '/dating-coach-vs-matchmaker-los-angeles/' },
  openGraph: {
    title: 'Dating Coach vs Matchmaker in Los Angeles | Vantage',
    description: 'A clear comparison for men deciding what kind of dating and social support they need.',
    url: '/dating-coach-vs-matchmaker-los-angeles/',
  },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/dating-coach-vs-matchmaker-los-angeles/"
    eyebrow="Choosing the right help"
    title="Dating coach, matchmaker, or private wingman?"
    lead="The right choice depends on the real problem. Vantage is built for men who need more than advice or introductions: they want a trusted person helping improve the whole system around their personal life."
    serviceType="Private dating and social advisory for men"
    sections={[
      {
        title: 'When a dating coach may be enough',
        paragraphs: ['A dating coach can be useful when your life is already active and well-positioned, but you want focused help with confidence, conversation, messaging, or dates.', 'Most coaching stops at advice and practice. It may not address your appearance, calendar, social circle, access to environments, or the practical work of building a stronger life around you.'],
        points: ['Conversation and confidence', 'Dating app feedback', 'Practice and accountability', 'Focused skill development'],
      },
      {
        title: 'When a matchmaker may be enough',
        paragraphs: ['A matchmaker can be useful when your main need is curated introductions and you are comfortable with the rest of your dating and social life.', 'The limitation is that introductions alone may not solve weak presentation, an isolated lifestyle, poor photos, limited confidence, or a social world that does not create natural opportunities.'],
        points: ['Curated introductions', 'Relationship preferences', 'A managed dating pipeline', 'Less focus on your broader social life'],
      },
      {
        title: 'When Vantage is the better fit',
        paragraphs: ['Vantage is for the man who wants one private advisor to look at everything: physique, hair, skin, style, photos, apps, confidence, friends, venues, outings, hosting, and the people he wants around him.', 'I can help make the plan, connect you with excellent specialists, go out with you, organize dinners and parties, and use a broad Southern California network when a connection fits naturally. The relationship feels closer to a capable, well-connected friend than a conventional service.'],
        points: ['Appearance and expert network', 'Dating strategy and digital presence', 'Social circle and weekly lifestyle', 'In-person outings, events, and hosting'],
      },
      {
        title: 'A practical decision',
        paragraphs: ['Choose coaching when you mainly need a skill. Choose matchmaking when you mainly need introductions. Choose Vantage when your personal life needs coordinated, hands-on improvement across several areas at once.', 'Every engagement is selective and designed around the individual. The application is the first step in deciding whether the fit is right.'],
      },
    ]}
    questions={[
      { question: 'Is Vantage a dating coach?', answer: 'Vantage can provide dating coaching, but the service is broader. It can also coordinate appearance specialists, improve your social circle, join you on outings, and create private events.' },
      { question: 'Is Vantage a matchmaker?', answer: 'No. Vantage does not sell matches from a database. Natural introductions may happen through the network when the fit and circumstances are appropriate.' },
      { question: 'Who is Vantage best for?', answer: 'Vantage is best for adult men with the means and commitment to invest in their appearance, confidence, dating life, friendships, and social calendar. Career status is not the test.' },
      { question: 'Where is the service available?', answer: 'Vantage serves Los Angeles County, Orange County, and Ventura County, with selective travel considered separately.' },
    ]}
    related={[
      { href: '/private-dating-advisor-los-angeles/', label: 'Private dating advisory for men' },
      { href: '/private-wingman-los-angeles/', label: 'Private wingman support' },
      { href: '/how-it-works/', label: 'How Vantage works' },
    ]}
  />;
}
