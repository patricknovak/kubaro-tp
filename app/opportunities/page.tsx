import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Building2, DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Opportunities',
  description:
    'Explore current tenders, RFPs, and business opportunities from West Central Contracting and partners.',
  openGraph: {
    title: 'Opportunities | West Central Contracting',
    description: 'Current tenders and RFPs for contractors and suppliers.',
  },
};

const opportunities = [
  {
    id: 1,
    title: 'Gravel Supply and Delivery - Highway 16 Project',
    source: 'Alberta Transportation',
    deadline: '2024-04-15',
    estimatedValue: '$250,000 - $350,000',
    description:
      'Seeking qualified suppliers for gravel and aggregate delivery for highway maintenance project along Highway 16.',
    type: 'RFQ',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Equipment Rental Services - Municipal Project',
    source: 'Hinton County',
    deadline: '2024-03-28',
    estimatedValue: '$50,000 - $100,000',
    description:
      'Request for equipment rental services including trucks, loaders, and crushing equipment for municipal infrastructure project.',
    type: 'RFP',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Landscape Materials Supply - Commercial Development',
    source: 'Edson Development Corp',
    deadline: '2024-04-30',
    estimatedValue: '$75,000 - $150,000',
    description:
      'Landscaping materials supplier needed for commercial retail development including topsoil, mulch, stone, and custom materials.',
    type: 'RFQ',
    status: 'Active',
  },
];

export default function OpportunitiesPage() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  const daysUntilDeadline = (deadlineString: string) => {
    const deadline = new Date(deadlineString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide section-padding py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-red">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-charcoal font-semibold">
              Opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Opportunities
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore current tenders, RFPs, and business opportunities. We're
            always looking for new projects and partnerships.
          </p>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-8">
            Current Opportunities
          </h2>

          <div className="space-y-6">
            {opportunities.map((opp) => {
              const days = daysUntilDeadline(opp.deadline);
              const isUrgent = days <= 14;

              return (
                <div
                  key={opp.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-brand-red hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-2 hover:text-brand-red transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-gray-600 font-semibold">
                        {opp.source}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="inline-block bg-brand-charcoal text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {opp.type}
                      </span>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          isUrgent
                            ? 'bg-red-100 text-brand-red'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {isUrgent ? 'Closing Soon' : 'Open'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6">{opp.description}</p>

                  {/* Meta Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 py-6 border-t border-b border-gray-200">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">
                          DEADLINE
                        </p>
                        <p className="font-heading font-bold text-brand-charcoal">
                          {formatDate(opp.deadline)}
                        </p>
                        <p className="text-xs text-gray-600">
                          {days > 0
                            ? `${days} days left`
                            : 'Deadline passed'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">
                          ESTIMATED VALUE
                        </p>
                        <p className="font-heading font-bold text-brand-charcoal">
                          {opp.estimatedValue}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">
                          STATUS
                        </p>
                        <p className="font-heading font-bold text-brand-charcoal">
                          {opp.status}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <Link
                    href={`/quote?opportunity=${encodeURIComponent(opp.title)}`}
                    className="inline-flex items-center text-brand-red font-semibold hover:translate-x-2 transition-transform"
                  >
                    Submit Response
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* No Opportunities Message - Commented out for now since we have opportunities */}
          {/*
          <div className="text-center py-12">
            <p className="text-gray-700 mb-4">No active opportunities at this time.</p>
            <p className="text-gray-600">Check back soon or contact us for partnership inquiries.</p>
          </div>
          */}
        </div>
      </section>

      {/* Looking for Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">
            We're Always Looking for New Projects
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            If you have a project, tender, or partnership opportunity that you
            think would be a good fit for West Central Contracting, we'd love to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact Us About Your Project
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Subscribe to get notified about new opportunities as soon as they're
            posted.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
