import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ChatBot } from '@/components/ChatBot';

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
    'transfer pricing consulting',
    'benchmarking study',
    'transfer pricing documentation',
    'advance pricing agreement',
    'APA',
    'OECD transfer pricing',
    'BEPS',
    'intercompany transactions',
    'IP valuation',
    'value chain analysis',
    'dispute resolution',
    'Kubaro',
  ],
  openGraph: {
    title: 'Kubaro | Transfer Pricing Advisory',
    description: 'Expert transfer pricing advisory for multinational enterprises.',
    siteName: 'Kubaro Transfer Pricing',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-site-verification': 'YOUR_VERIFICATION_CODE',
  },
};

// JSON-LD structured data for professional services
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kubaro Transfer Pricing Advisory',
  description:
    'Expert transfer pricing advisory services for multinational enterprises, including documentation, benchmarking, APAs, dispute resolution, and IP valuation.',
  url: 'https://kubaro.com',
  email: 'info@kubaro.com',
  serviceType: [
    'Transfer Pricing Documentation',
    'Benchmarking Studies',
    'Advance Pricing Agreements',
    'Dispute Resolution',
    'Value Chain Analysis',
    'IP Valuation',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  knowsAbout: [
    'OECD Transfer Pricing Guidelines',
    'BEPS Actions 8-10',
    'Country-by-Country Reporting',
    'Pillar One',
    'Pillar Two',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* TODO: Google Analytics 4 - Replace GA_MEASUREMENT_ID with your actual ID */}
        {/* Uncomment the lines below once you have a GA4 measurement ID:
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        */}
      </head>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
