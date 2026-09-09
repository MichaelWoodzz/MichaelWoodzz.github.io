import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Vantage',
  description: 'Private personal and dating advisory for men in Los Angeles. Individual strategies, hair, skin and physique expertise, and access to a connected LA network.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} antialiased`}>{children}</body></html>;
}
