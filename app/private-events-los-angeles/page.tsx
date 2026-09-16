import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "Private Parties, Dinners & Social Events in LA | Vantage",
  "description": "Private dinners, parties, and gatherings that put you at the center of a better social life. I help create the night and handle the details.",
  "alternates": {
    "canonical": "/private-events-los-angeles/"
  },
  "openGraph": {
    "title": "Private Parties, Dinners & Social Events in LA | Vantage",
    "description": "Private dinners, parties, and gatherings that put you at the center of a better social life. I help create the night and handle the details.",
    "url": "/private-events-los-angeles/"
  }
};

const content = {
  "path": "/private-events-los-angeles/",
  "eyebrow": "Bring the right people together",
  "title": "Be the person throwing the party.",
  "lead": "Private dinners, parties, and gatherings that put you at the center of a better social life. I help create the night and handle the details.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Build a night people want to be part of",
      "paragraphs": [
        "An intimate dinner. A house party. A bigger celebration. We choose the format around you, your circle, and the atmosphere you want."
      ]
    },
    {
      "title": "Let me handle the moving parts",
      "paragraphs": [
        "I can coordinate venues, hospitality, invitations, timing, guest experience, and logistics. We make it feel personal and relaxed.",
        "The guest strategy can draw on your existing relationships and appropriate connections from my network."
      ]
    },
    {
      "title": "Turn hosting into a social advantage",
      "paragraphs": [
        "Bringing people together strengthens your circle and creates natural opportunities to meet new people. I help with introductions and the flow of the room so you can enjoy hosting."
      ]
    }
  ],
  "questions": [
    {
      "question": "Can your network be part of the event?",
      "answer": "Yes, when it makes sense. Guest invitations depend on fit and availability; attendance by specific people is never guaranteed."
    },
    {
      "question": "Can we keep it private?",
      "answer": "Yes. Venue, invitations, photography, and communication can be planned around discretion."
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
    }
  ]
};

export default function Page() { return <AdvisoryDetailPage {...content} />; }
