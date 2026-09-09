import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './google-analytics';
import { publicAsset, siteUrl } from '@/lib/site-config';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vantage | The Ultimate Private Wingman in Los Angeles',
  description: 'Look your best, date with confidence, build an amazing social life, go out with hands-on support, and host private events across Los Angeles, Orange County, and Ventura County.',
  applicationName: 'Vantage',
  creator: 'Vantage',
  publisher: 'Vantage',
  category: 'Private personal and dating advisory',
  keywords: ['private dating advisor Los Angeles', 'dating coach for successful men', 'private wingman Los Angeles', 'men’s image consultant Los Angeles', 'social life consultant Los Angeles', 'dating profile consultant Los Angeles'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vantage',
    title: 'Vantage | The Ultimate Private Wingman in Los Angeles',
    description: 'A discreet, hands-on private wingman helping accomplished men look their best, date better, expand their social lives, and host memorable events.',
    images: [{ url: '/vantage-coastal-hero.png', width: 1536, height: 1024, alt: 'Vantage private dating and social advisory in Southern California' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantage | The Ultimate Private Wingman in Los Angeles',
    description: 'Look your best, date better, build an amazing social life, and get hands-on support across Southern California.',
    images: ['/vantage-coastal-hero.png'],
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
