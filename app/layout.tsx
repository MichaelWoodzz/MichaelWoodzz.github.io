import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './google-analytics';
import { publicAsset, siteUrl } from '@/lib/site-config';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vantage LA | Private Dating Consultant for Men in Los Angeles',
  description: 'Private dating and personal advisory for men across Los Angeles, Orange County, and Ventura County. Improve your appearance, confidence, social life, and dating strategy with a plan built around you.',
  applicationName: 'Vantage LA',
  category: 'Private personal and dating advisory',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vantage LA',
    title: 'Vantage LA | Private Dating Consultant for Men in Los Angeles',
    description: 'Personal dating strategy, appearance and confidence guidance, and specialist access across Los Angeles, Orange County, and Ventura County.',
  },
  twitter: {
    card: 'summary',
    title: 'Vantage LA | Private Dating Consultant for Men in Los Angeles',
    description: 'Private dating and personal advisory for men across Los Angeles, Orange County, and Ventura County.',
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
