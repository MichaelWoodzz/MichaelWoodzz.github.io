import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './google-analytics';
import { publicAsset, siteUrl } from '@/lib/site-config';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vantage | Image, Connections & Social Life in LA',
  description: 'Let me build your social life in LA. Private image and social concierge for men: personal rebranding, connections, nights out, dinners, and parties.',
  applicationName: 'Vantage',
  creator: 'Vantage',
  publisher: 'Vantage',
  category: 'Private image and social concierge',
  keywords: ['private social concierge Los Angeles', 'personal rebranding for men', 'private wingman Los Angeles', 'men’s image consultant Los Angeles', 'social connections Los Angeles', 'private parties Los Angeles'],
  alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vantage',
    title: 'Vantage | Image, Connections & Social Life in LA',
    description: 'I rebrand guys, connect them with the right people, and host events and nights out. Let me build your social life in LA.',
    images: [{ url: '/vantage-social-hero.webp', width: 1536, height: 1024, alt: 'A coastal evening gathering, reflecting the Vantage social lifestyle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantage | Image, Connections & Social Life in LA',
    description: 'Let me build your social life in LA. Image. Connections. Experiences.',
    images: ['/vantage-social-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: publicAsset('/favicon.svg') },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} antialiased`}>{children}<GoogleAnalytics /></body></html>;
}
