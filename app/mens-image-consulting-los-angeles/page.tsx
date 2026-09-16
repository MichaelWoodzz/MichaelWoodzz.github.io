import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Personal Rebranding & Men’s Image in Los Angeles | Vantage",
  "description": "Hair. Skin. Physique. Style. Photos. I bring the details together and connect the specialists who can help you look your best.",
  "alternates": {
    "canonical": "/mens-image-consulting-los-angeles/"
  },
  "openGraph": {
    "title": "Personal Rebranding & Men’s Image in Los Angeles | Vantage",
    "description": "Hair. Skin. Physique. Style. Photos. I bring the details together and connect the specialists who can help you look your best.",
    "url": "/mens-image-consulting-los-angeles/"
  }
};

const content = {
  "path": "/mens-image-consulting-los-angeles/",
  "eyebrow": "Your personal rebrand",
  "title": "Look like the man you want to be.",
  "lead": "Hair. Skin. Physique. Style. Photos. I bring the details together and connect the specialists who can help you look your best.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Start with the biggest wins",
      "paragraphs": [
        "We look at what is working and what could be sharper. A few focused changes can make a difference; some men want a complete reset.",
        "The direction fits your features, personality, lifestyle, and the impression you want to make."
      ]
    },
    {
      "title": "Bring in the right experts",
      "paragraphs": [
        "My network includes resources across hair, grooming, skincare, cosmetics, fitness, wardrobe, and photography. I help choose the right fit and coordinate the plan.",
        "Specialist treatments and services are assessed and delivered by the appropriate independent professionals."
      ]
    },
    {
      "title": "Make the image work everywhere",
      "paragraphs": [
        "You should look good at dinner, on a date, at a party, and in your photos. We build a consistent presentation you can maintain in real life."
      ]
    }
  ],
  "questions": [
    {
      "question": "Do I have to change everything?",
      "answer": "No. We prioritize the improvements with the biggest impact for you."
    },
    {
      "question": "Can you help with photos and online presence?",
      "answer": "Yes. Photography, dating profiles, and Instagram can be part of the personal rebrand."
    }
  ],
  "related": [
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
