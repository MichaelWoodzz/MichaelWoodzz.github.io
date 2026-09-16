import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Meet Women Through a Better Social Life in LA | Vantage",
  "description": "A sharper image, the right environments, and a well-connected friend making plans with you. Vantage helps create more natural opportunities to connect.",
  "alternates": {
    "canonical": "/private-dating-advisor-los-angeles/"
  },
  "openGraph": {
    "title": "Meet Women Through a Better Social Life in LA | Vantage",
    "description": "A sharper image, the right environments, and a well-connected friend making plans with you. Vantage helps create more natural opportunities to connect.",
    "url": "/private-dating-advisor-los-angeles/"
  }
};

const content = {
  "path": "/private-dating-advisor-los-angeles/",
  "eyebrow": "Your dating life, in real life",
  "title": "Meet women you are excited about.",
  "lead": "A sharper image, the right environments, and a well-connected friend making plans with you. Vantage helps create more natural opportunities to connect.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Build around your type",
      "paragraphs": [
        "Tell me about the women you want to meet: their age, interests, values, lifestyle, and the kind of connection you want.",
        "We use that to shape your presentation, the places we go, and the social experiences we create."
      ]
    },
    {
      "title": "Get the whole picture working",
      "paragraphs": [
        "Your look, photos, digital presence, confidence, and social calendar all shape who you meet. I help bring those pieces together.",
        "That can include grooming and style specialists, new photography, profile work, and a more active life outside the apps."
      ]
    },
    {
      "title": "Have someone beside you",
      "paragraphs": [
        "I can go out with you, help with introductions, and bring my network into the experience when the fit is natural. Private dinners and parties can be part of the plan too."
      ]
    }
  ],
  "questions": [
    {
      "question": "Do you arrange matches?",
      "answer": "There is no catalog of women or managed dating pipeline. Connections develop through the social life we build together."
    },
    {
      "question": "Can you promise a specific woman or relationship?",
      "answer": "No. We create opportunities and improve how you show up. Attraction and relationships depend on mutual interest."
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
