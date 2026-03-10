import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText, BookOpen, CheckSquare, BarChart3, Globe, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Transfer pricing guides, checklists, and insights from Kubaro. Free resources to help you manage TP compliance and risk.',
  openGraph: {
    title: 'Resources | Kubaro Transfer Pricing',
    description:
      'Free transfer pricing guides, checklists, and expert insights for multinational enterprises.',
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const resources = [
  {
    title: 'TP Documentation Checklist',
    description:
      'A comprehensive checklist covering all elements of OECD-compliant transfer pricing documentation, including Master File and Local File requirements.',
    icon: CheckSquare,
    category: 'Checklist',
    topics: ['Master File', 'Local File', 'CbCR', 'Functional Analysis'],
  },
  {
    title: 'BEPS Transfer Pricing Guide',
    description:
      'An overview of BEPS Actions 8-10 and 13 and their practical impact on transfer pricing policies, documentation, and risk management.',
    icon: BookOpen,
    category: 'Guide',
    topics: ['BEPS Actions 8-10', 'Action 13', 'CbCR', 'Risk Assessment'],
  },
  {
    title: 'Benchmarking Best Practices',
    description:
      'Key considerations for conducting defensible benchmarking studies, from comparable selection to statistical analysis.',
    icon: BarChart3,
    category: 'Guide',
    topics: ['Comparable Selection', 'TP Methods', 'Statistical Analysis', 'Databases'],
  },
  {
    title: 'Cross-Border Restructuring Playbook',
    description:
      'Essential transfer pricing considerations when restructuring cross-border operations, IP migration, or supply chain changes.',
    icon: Globe,
    category: 'Playbook',
    topics: ['IP Migration', 'Supply Chain', 'Exit Charges', 'DEMPE'],
  },
  {
    title: 'Audit Defense Preparation Kit',
    description:
      'A practical guide to preparing for transfer pricing audits, including documentation strategies, common audit triggers, and defense tactics.',
    icon: Shield,
    category: 'Kit',
    topics: ['Audit Triggers', 'Defense Strategy', 'Documentation', 'Penalties'],
  },
  {
    title: 'Pillar Two Readiness Assessment',
    description:
      'Understanding the impact of the global minimum tax on your transfer pricing structures and what steps to take now.',
    icon: FileText,
    category: 'Assessment',
    topics: ['GloBE Rules', 'Qualified Domestic Minimum Top-up Tax', 'Safe Harbors', 'Data Requirements'],
  },
];

export default function ResourcesPage() {
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
            <span className="text-brand-charcoal font-semibold">Resources</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-r from-brand-navy to-brand-navy-light text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/resources-hero.jpg`}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Resources & Insights
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Practical guides, checklists, and expert insights to help you navigate
            transfer pricing compliance and manage risk across jurisdictions.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-brand-teal hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8 text-brand-teal flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-brand-teal font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Request Access <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Capture Section */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-brand-teal mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">
              Stay Updated on TP Developments
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest transfer pricing regulatory updates, OECD guidance changes,
              and practical insights delivered to your inbox.
            </p>
            {/* TODO: Replace with newsletter service embed (Buttondown, ConvertKit, Mailchimp) */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm mb-4">Newsletter signup coming soon.</p>
              <Link href="/contact" className="btn-primary">
                Contact Us for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Need Tailored Advice?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our resources provide general guidance. For specific advice on your
            transfer pricing situation, speak with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
