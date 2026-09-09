import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Vantage Service Area | Los Angeles, Orange County and Ventura County',
  description: 'Vantage provides private dating, social, appearance, and lifestyle advisory across Los Angeles County, Orange County, and Ventura County.',
  alternates: { canonical: '/southern-california-service-area/' },
  openGraph: { title: 'Vantage Service Area in Southern California', description: 'Local, hands-on private advisory across Los Angeles, Orange County, and Ventura County.', url: '/southern-california-service-area/' },
};

export default function Page() {
  return <AdvisoryDetailPage
    path="/southern-california-service-area/"
    eyebrow="Southern California service area"
    title="Local knowledge across Los Angeles, Orange County, and Ventura County."
    lead="Vantage uses local context to choose the right specialists, neighborhoods, venues, communities, activities, and social environments for each client."
    serviceType="Southern California private dating and social advisory"
    sections={[
      { title: 'Los Angeles County', paragraphs: ['Los Angeles is not one dating market or social scene. Geography, traffic, industry, neighborhood culture, and routine all shape who you meet and how often you can participate.', 'Vantage builds around the client’s actual life, with support available across the broader county.'] },
      { title: 'Orange County', paragraphs: ['Orange County clients can receive the same coordinated support across appearance, dating, social planning, outings, and events.', 'The plan accounts for the different pace, communities, venues, and travel patterns of coastal and inland Orange County.'] },
      { title: 'Ventura County and selective travel', paragraphs: ['Vantage also serves Ventura County and can consider selective travel when the engagement requires it.', 'The objective remains the same in every location: spend time in environments that fit your interests and introduce you to the social world you actually want.'] },
    ]}
    questions={[
      { question: 'Do I need to live in Los Angeles?', answer: 'No. Vantage serves clients across Los Angeles County, Orange County, and Ventura County, with selective travel considered separately.' },
      { question: 'Can we work across multiple areas?', answer: 'Yes. Some plans center on one neighborhood, while others span the region based on work, home, interests, and social goals.' },
      { question: 'Is remote advisory available?', answer: 'Some strategy, profile, planning, and coordination work can be handled remotely. In-person outings, appointments, and events are arranged based on location and scope.' },
    ]}
    related={[
      { href: '/how-it-works/', label: 'How Vantage works' },
      { href: '/social-life-consulting-los-angeles/', label: 'Social life consulting' },
      { href: '/private-events-los-angeles/', label: 'Private events and hosting' },
    ]}
  />;
}
