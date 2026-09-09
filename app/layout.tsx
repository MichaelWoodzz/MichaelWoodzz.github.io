import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './google-analytics';
import { publicAsset, siteUrl } from '@/lib/site-config';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vantage SoCal | Private Dating Consultant for Men in Southern California',
  description: 'Private dating, social, and lifestyle advisory for accomplished men across Los Angeles, Orange County, and Ventura County. Appearance, confidence, network, digital presence, and hands-on real-world support.',
  applicationName: 'Vantage SoCal',
  category: 'Private personal and dating advisory',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vantage SoCal',
    title: 'Vantage SoCal | Private Dating Consultant for Men in Southern California',
    description: 'A discreet, high-touch advisory for accomplished men spanning appearance, dating, social life, digital presence, specialist access, and real-world support.',
  },
  twitter: {
    card: 'summary',
    title: 'Vantage SoCal | Private Dating Consultant for Men in Southern California',
    description: 'Private dating, social, and lifestyle advisory for accomplished men across Southern California.',
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
