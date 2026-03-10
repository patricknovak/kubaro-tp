import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

const heading = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'West Central Contracting | Aggregates, Trucking & Crushing | Hinton, AB',
    template: '%s | West Central Contracting',
  },
  description:
    'Family-owned since 1980. Aggregate sales, trucking, gravel crushing, equipment rental, landscaping supplies and concrete products serving Hinton, Edson, Jasper and western Alberta.',
  keywords: [
    'gravel Hinton AB',
    'aggregate delivery Edson',
    'gravel crushing western Alberta',
    'trucking contractor Jasper',
    'equipment rental Hinton',
    'landscaping supplies Alberta',
    'concrete blocks Hinton',
    'West Central Contracting',
  ],
  openGraph: {
    title: 'West Central Contracting LTD',
    description: 'Aggregates, Trucking & Crushing serving western Alberta since 1980.',
    url: 'https://wc-con.com',
    siteName: 'West Central Contracting',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
