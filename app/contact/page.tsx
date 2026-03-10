import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with West Central Contracting. Call (780) 865-3000 or use our contact form.',
  openGraph: {
    title: 'Contact Us | West Central Contracting',
    description: 'Phone, email, address, and hours for West Central Contracting.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
