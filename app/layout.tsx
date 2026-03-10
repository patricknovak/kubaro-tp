import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Kubaro | Transfer Pricing Advisory',
    template: '%s | Kubaro Transfer Pricing',
  },
  description:
    'Kubaro provides expert transfer pricing advisory services including documentation, benchmarking studies, dispute resolution, and strategic planning for multinational enterprises.',
  keywords: [
    'transfer pricing',
    'transfer pricing advisory',
    'benchmarking study',
    'transfer pricing documentation',
    'advance pricing agreement',
    'OECD transfer pricing',
    'intercompany transactions',
    'Kubaro',
  ],
  openGraph: {
    title: 'Kubaro | Transfer Pricing Advisory',
    description: 'Expert transfer pricing advisory for multinational enterprises.',
    siteName: 'Kubaro Transfer Pricing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
