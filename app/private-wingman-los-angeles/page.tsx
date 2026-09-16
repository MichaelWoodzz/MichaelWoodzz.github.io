import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Private Nights Out & Wingman in Los Angeles | Vantage",
  "description": "Bars, dinners, clubs, parties, and events. A well-connected friend beside you, with the night built around what you enjoy and who you want to meet.",
  "alternates": {
    "canonical": "/private-wingman-los-angeles/"
  },
  "openGraph": {
    "title": "Private Nights Out & Wingman in Los Angeles | Vantage",
    "description": "Bars, dinners, clubs, parties, and events. A well-connected friend beside you, with the night built around what you enjoy and who you want to meet.",
    "url": "/private-wingman-los-angeles/"
  }
};

const content = {
  "path": "/private-wingman-los-angeles/",
  "eyebrow": "Nights out, together",
  "title": "I make the plans. I go with you.",
  "lead": "Bars, dinners, clubs, parties, and events. A well-connected friend beside you, with the night built around what you enjoy and who you want to meet.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Choose the right night",
      "paragraphs": [
        "We choose places and plans around your interests, location, and the social world you want to be part of. You do not have to figure out the scene alone."
      ]
    },
    {
      "title": "Make it feel natural",
      "paragraphs": [
        "I can arrive with you, navigate the room, and help with introductions and conversations. It feels like going out with a friend.",
        "Any feedback is private and useful, without making the evening feel like a lesson."
      ]
    },
    {
      "title": "Keep the connections going",
      "paragraphs": [
        "A good night should lead to more than a story. We follow through with plans, friendships, and experiences that give your social life momentum."
      ]
    }
  ],
  "questions": [
    {
      "question": "What kinds of places can we go?",
      "answer": "Restaurants, bars, clubs, private gatherings, cultural events, and other settings that fit your interests."
    },
    {
      "question": "Is this discreet?",
      "answer": "Yes. We plan and go out with privacy and good judgment."
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
