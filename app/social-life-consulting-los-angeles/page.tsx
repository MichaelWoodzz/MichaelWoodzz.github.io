import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Social Connections & Private Social Concierge in LA | Vantage",
  "description": "Meet more people, spend time in better environments, and build a social calendar you actually look forward to.",
  "alternates": {
    "canonical": "/social-life-consulting-los-angeles/"
  },
  "openGraph": {
    "title": "Social Connections & Private Social Concierge in LA | Vantage",
    "description": "Meet more people, spend time in better environments, and build a social calendar you actually look forward to.",
    "url": "/social-life-consulting-los-angeles/"
  }
};

const content = {
  "path": "/social-life-consulting-los-angeles/",
  "eyebrow": "The right people",
  "title": "A better circle changes everything.",
  "lead": "Meet more people, spend time in better environments, and build a social calendar you actually look forward to.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Make your life more connected",
      "paragraphs": [
        "Whether you are new to LA, newly single, or tired of the same weekends, we start with the people and experiences you want more of.",
        "I help turn that into regular plans, dinners, outings, and relationships that continue beyond one event."
      ]
    },
    {
      "title": "Tap into my network",
      "paragraphs": [
        "My circle spans nightlife, hospitality, fashion, beauty, fitness, and entertainment. It can create opportunities to meet models, influencers, creatives, and other interesting people when the fit is natural.",
        "I bring people together through shared experiences. Introductions feel organic because we are actually doing something together."
      ]
    },
    {
      "title": "Go with a friend",
      "paragraphs": [
        "I can join you, help you get comfortable in the room, and make introductions. You have someone beside you who knows the scene and wants the night to go well."
      ]
    }
  ],
  "questions": [
    {
      "question": "Can you connect me with specific people?",
      "answer": "We discuss the social world you want to be part of. Connections depend on the fit and circumstances; specific people and attendance are never promised."
    },
    {
      "question": "Can you help if my circle is small?",
      "answer": "Yes. Building a stronger circle and a more active weekly life is a central part of Vantage."
    }
  ],
  "related": [
    {
      "href": "/mens-image-consulting-los-angeles/",
      "label": "Image & personal rebranding"
    },
    {
      "href": "/private-events-los-angeles/",
      "label": "Private dinners & parties"
    }
  ]
};

export default function Page() { return <AdvisoryDetailPage {...content} />; }
