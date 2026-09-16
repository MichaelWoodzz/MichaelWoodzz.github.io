import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Vantage | Los Angeles, Orange County & Ventura County",
  "description": "Based in Los Angeles, with personal support throughout LA County, Orange County, and Ventura County.",
  "alternates": {
    "canonical": "/southern-california-service-area/"
  },
  "openGraph": {
    "title": "Vantage | Los Angeles, Orange County & Ventura County",
    "description": "Based in Los Angeles, with personal support throughout LA County, Orange County, and Ventura County.",
    "url": "/southern-california-service-area/"
  }
};

const content = {
  "path": "/southern-california-service-area/",
  "eyebrow": "LA and beyond",
  "title": "Your social life. Your home ground.",
  "lead": "Based in Los Angeles, with personal support throughout LA County, Orange County, and Ventura County.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Los Angeles",
      "paragraphs": [
        "We build around the neighborhoods, venues, and social circles that fit your life. Home, traffic, schedule, interests, and the people you want to meet all matter."
      ]
    },
    {
      "title": "Orange County",
      "paragraphs": [
        "The same personal approach to image, connections, nights out, and private hosting—with plans that account for the communities and pace of Orange County."
      ]
    },
    {
      "title": "Ventura County",
      "paragraphs": [
        "Vantage also works with clients across Ventura County. We can plan locally or across the region, depending on what you want and how far you want to go."
      ]
    }
  ],
  "questions": [
    {
      "question": "Can we work across different areas?",
      "answer": "Yes. We build a realistic plan around your home, schedule, and social goals."
    },
    {
      "question": "What about travel?",
      "answer": "Selective travel can be discussed as part of your engagement."
    }
  ],
  "related": [
    {
      "href": "/mens-image-consulting-los-angeles/",
      "label": "Image & personal rebranding"
    },
    {
      "href": "/social-life-consulting-los-angeles/",
      "label": "Connections & social life"
    },
    {
      "href": "/private-events-los-angeles/",
      "label": "Private dinners & parties"
    }
  ]
};

export default function Page() { return <AdvisoryDetailPage {...content} />; }
