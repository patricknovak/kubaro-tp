import type { Metadata } from 'next';
import VoiceConsultationClient from './VoiceConsultationClient';

export const metadata: Metadata = {
  title: 'AI Voice Consultation',
  description:
    'Speak with our AI transfer pricing advisor to discuss your needs. Your information is reviewed personally by James Crow, our lead advisor.',
};

export default function VoiceConsultationPage() {
  return <VoiceConsultationClient />;
}
