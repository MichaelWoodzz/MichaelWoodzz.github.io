import type { Metadata } from 'next';
import { AdvisoryDetailPage } from '@/components/AdvisoryDetailPage';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  "title": "How Vantage Works | Image, Connections & Nights Out",
  "description": "Tell me what you want your life to look like. I help with the image, the people, and the plans to move it forward.",
  "alternates": {
    "canonical": "/how-it-works/"
  },
  "openGraph": {
    "title": "How Vantage Works | Image, Connections & Nights Out",
    "description": "Tell me what you want your life to look like. I help with the image, the people, and the plans to move it forward.",
    "url": "/how-it-works/"
  }
};

const content = {
  "path": "/how-it-works/",
  "eyebrow": "Simple, personal, hands-on",
  "title": "We talk. We plan. We get out there.",
  "lead": "Tell me what you want your life to look like. I help with the image, the people, and the plans to move it forward.",
  "serviceType": "Private image and social concierge",
  "sections": [
    {
      "title": "Tell me what you want",
      "paragraphs": [
        "We start with your look, dating life, social circle, and what your weeks actually feel like. What is missing? Who do you want to meet? What would make life better?"
      ]
    },
    {
      "title": "Make the first changes",
      "paragraphs": [
        "Every situation is different. We choose the changes that matter most—whether that means hair and wardrobe, better photos, finding your scene, or organizing a night out.",
        "I can connect the specialists and coordinate the details."
      ]
    },
    {
      "title": "Build momentum in real life",
      "paragraphs": [
        "We go out together, meet people, make introductions, and host dinners or parties when it fits. I stay involved as your image and circle develop.",
        "The goal is a better social life that keeps growing beyond a single night."
      ]
    }
  ],
  "questions": [
    {
      "question": "Is there a fixed program?",
      "answer": "No. We build around you, your schedule, your location, and the people you want in your life."
    },
    {
      "question": "Who is it for?",
      "answer": "Adult men with the means and commitment to invest in their image, dating life, and social world. Career status does not matter."
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
