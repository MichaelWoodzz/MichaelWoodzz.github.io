import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Men’s Image and Appearance Consulting in Los Angeles | Vantage',
  description: 'Private appearance consulting for men across Los Angeles, Orange County, and Ventura County: physique, hair, skin, grooming, wardrobe, photography, and presentation.',
  alternates: { canonical: '/mens-image-consulting-los-angeles/' },
  openGraph: { title: 'Men’s Image and Appearance Consulting | Vantage', description: 'A coordinated plan for physique, grooming, style, photography, and personal presentation.', url: '/mens-image-consulting-los-angeles/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/mens-image-consulting-los-angeles/"
    eyebrow="Appearance advisory for men"
    title="Look your absolute best—without becoming someone else."
    lead="Vantage coordinates the details that shape a first impression: physique, hair, skincare, grooming, wardrobe, photography, and the way you carry yourself."
    serviceType="Men's image and appearance consulting"
    sections={[
      { title: 'One coordinated appearance plan', paragraphs: ['Most men address appearance one piece at a time. A new haircut, a few shirts, or a gym program can help, but the strongest result comes when every decision supports the same direction.', 'We identify the changes with the greatest impact and sequence them around your schedule, budget, and goals.'], points: ['Physique and fitness direction', 'Hair, grooming, and skincare', 'Wardrobe and personal style', 'Photography and dating-profile presentation'] },
      { title: 'Access to the right specialists', paragraphs: ['Vantage can tap a Southern California network of trusted specialists rather than asking you to search blindly. Depending on the plan, that may include trainers, barbers, hairstylists, skincare professionals, photographers, and wardrobe resources.', 'Recommendations are based on fit. You only pursue the services that make sense for you.'] },
      { title: 'Designed for real life', paragraphs: ['The goal is to look sharper in the places you actually go—work, dates, dinners, events, weekends, and photographs. The plan should feel natural enough to maintain and strong enough to change how you are perceived.'] },
    ]}
    questions={[
      { question: 'Do I need to change everything?', answer: 'No. The first step is identifying what will create the greatest improvement. Some clients need a few focused changes; others benefit from a complete reset.' },
      { question: 'Do you provide the cosmetic services directly?', answer: 'Vantage advises, prioritizes, and coordinates. Specialized services are performed by appropriate independent professionals in the network.' },
      { question: 'Is appearance work only for dating?', answer: 'No. Better presentation can improve confidence and presence across professional, social, and dating environments.' },
    ]}
    related={[
      { href: '/private-dating-advisor-los-angeles/', label: 'Private dating advisory' },
      { href: '/social-life-consulting-los-angeles/', label: 'Social life consulting' },
      { href: '/how-it-works/', label: 'How Vantage works' },
    ]}
  />;
}
