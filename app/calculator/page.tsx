import { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Material Calculator',
  description:
    'Calculate aggregate tonnage needed for your project using our material calculator.',
  openGraph: {
    title: 'Material Calculator | West Central Contracting',
    description: 'Estimate aggregate tonnage for your construction project.',
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
