import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from './google-analytics';
import { publicAsset, siteUrl } from '@/lib/site-config';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vantage | Your Private Wingman in Los Angeles',
  description: 'A real-life private wingman to help you look better, date better, go out more, meet the right people, and build an amazing social life across Southern California.',
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
    title: 'Vantage | Your Private Wingman in Los Angeles',
    description: 'Look better, go out more, meet the right people, and build an amazing social life with a well-connected friend in your corner.',
    images: [{ url: '/vantage-coastal-hero.png', width: 1536, height: 1024, alt: 'Vantage private dating and social advisory in Southern California' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantage | Your Private Wingman in Los Angeles',
    description: 'Look better, go out more, meet the right people, and build an amazing social life with a well-connected friend in your corner.',
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
