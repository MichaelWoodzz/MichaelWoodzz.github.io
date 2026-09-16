import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "About Vantage | Private Image & Social Concierge in LA",
  "description": "I rebrand guys, connect them with the right people, and host events and nights out. Image. Connections. Experiences.",
  "alternates": {
    "canonical": "/about/"
  },
  "openGraph": {
    "title": "About Vantage | Private Image & Social Concierge in LA",
    "description": "I rebrand guys, connect them with the right people, and host events and nights out. Image. Connections. Experiences.",
    "url": "/about/"
  }
};

const content = {
  "path": "/about/",
  "eyebrow": "The person in your corner",
  "title": "Let me build your social life in LA.",
  "lead": "I rebrand guys, connect them with the right people, and host events and nights out. Image. Connections. Experiences.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Personal, from the start",
      "paragraphs": [
        "You work with me directly. I get to know the life you have, the women you want to meet, and the social world you want to be part of.",
        "Then we make it happen: a sharper image, a stronger circle, and plans you actually want to say yes to."
      ]
    },
    {
      "title": "A network that becomes part of your world",
      "paragraphs": [
        "I know people across LA in nightlife, hospitality, fashion, beauty, fitness, entertainment, and creative circles. That can create natural opportunities to meet models, influencers, celebrities, and other interesting people.",
        "Introductions happen through real experiences and a natural fit. The relationship feels like having a well-connected friend beside you."
      ]
    },
    {
      "title": "For men who want more from life",
      "paragraphs": [
        "You do not need a particular career or title. You need the means, time, and willingness to invest in a better personal life.",
        "Vantage is private and personal. I keep the work discreet and tailor it to each client."
      ]
    }
  ],
  "questions": [
    {
      "question": "Is this matchmaking?",
      "answer": "There is no database of matches. We build your image, circle, and social life so you meet people through real experiences."
    },
    {
      "question": "Where do you work?",
      "answer": "Los Angeles, Orange County, and Ventura County. Selective travel can be discussed."
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
