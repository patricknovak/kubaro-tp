import { Suspense } from 'react';
import { Metadata } from 'next';
import QuoteClient from './QuoteClient';

export const metadata: Metadata = {
  title: 'Request a Quote | West Central Contracting',
  description: 'Get a free quote for aggregates, trucking, gravel crushing, equipment rental, and more from West Central Contracting in Hinton, AB.',
};

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
      <QuoteClient />
    </Suspense>
  );
}
