import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Vantage',
  description: 'Dating and personal consulting for men. Build confidence, connect with intention, and find a clearer personal direction with Vantage.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} antialiased`}>{children}</body></html>;
}
