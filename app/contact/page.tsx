import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kubaro Transfer Pricing Advisory. Schedule a consultation to discuss your transfer pricing needs.',
  openGraph: {
    title: 'Contact Us | Kubaro Transfer Pricing',
    description: 'Schedule a confidential consultation with our transfer pricing team.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
