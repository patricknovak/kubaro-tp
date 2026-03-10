import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule a Consultation',
  description:
    'Book a confidential consultation with Kubaro Transfer Pricing Advisory to discuss your transfer pricing needs.',
  openGraph: {
    title: 'Schedule a Consultation | Kubaro Transfer Pricing',
    description:
      'Book a confidential consultation with our transfer pricing experts.',
  },
};

export default function ConsultationPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide section-padding py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-teal">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-charcoal font-semibold">Schedule a Consultation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-navy to-brand-navy-light text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Book a confidential, no-obligation conversation with our transfer
            pricing experts. We&apos;ll discuss your needs and outline how we can help.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-1">30-Minute Session</h3>
                    <p className="text-gray-700 text-sm">A focused conversation to understand your transfer pricing situation and priorities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-1">Confidential</h3>
                    <p className="text-gray-700 text-sm">All discussions are strictly confidential and covered by professional privilege.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-1">No Obligation</h3>
                    <p className="text-gray-700 text-sm">Explore your options with no commitment. We&apos;ll provide honest guidance on next steps.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-brand-cream p-6 rounded-lg">
                <h3 className="font-heading font-bold text-brand-charcoal mb-3">
                  Common Discussion Topics
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'New TP documentation requirements',
                    'Upcoming audit or assessment',
                    'Restructuring or IP migration',
                    'APA strategy and feasibility',
                    'Cross-border pricing review',
                    'Pillar Two readiness assessment',
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-teal flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Booking Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                <Calendar className="w-16 h-16 text-brand-teal mb-6" />
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                  Online Booking Coming Soon
                </h3>
                <p className="text-gray-600 max-w-md mb-8">
                  We&apos;re setting up our online scheduling system. In the meantime,
                  please reach out directly to book your consultation.
                </p>
                {/* TODO: Replace this section with Calendly embed:
                  <div className="calendly-inline-widget"
                    data-url="https://calendly.com/YOUR_USERNAME/consultation"
                    style={{ minWidth: '320px', height: '630px' }}
                  />
                  <script src="https://assets.calendly.com/assets/external/widget.js" async />
                */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Contact Us to Book
                  </Link>
                  <a
                    href="mailto:info@kubaro.com?subject=Consultation Request"
                    className="btn-secondary"
                  >
                    Email Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
