import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  BarChart3,
  Scale,
  Landmark,
  Layers,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Kubaro offers transfer pricing documentation, benchmarking studies, APAs, dispute resolution, value chain analysis, and IP valuation services.',
  openGraph: {
    title: 'Services | Kubaro Transfer Pricing',
    description:
      'Comprehensive transfer pricing advisory services for multinational enterprises.',
  },
};

const services = [
  {
    id: 'documentation',
    title: 'Transfer Pricing Documentation',
    description:
      'We prepare comprehensive transfer pricing documentation that meets local filing requirements and OECD standards.',
    details: [
      'Master File and Local File preparation',
      'Country-by-Country Reporting (CbCR)',
      'Functional analysis and characterization',
      'Policy documentation and intercompany agreements',
      'Multi-jurisdictional coordination',
    ],
    icon: FileText,
  },
  {
    id: 'benchmarking',
    title: 'Benchmarking Studies',
    description:
      'Rigorous economic analyses to establish and defend arm\'s length pricing for all types of intercompany transactions.',
    details: [
      'Comparable company and transaction searches',
      'Database analysis (Bureau van Dijk, S&P Capital IQ)',
      'Selection of appropriate TP methods (CUP, TNMM, Profit Split, etc.)',
      'Statistical analysis and arm\'s length range determination',
      'Annual benchmarking updates',
    ],
    icon: BarChart3,
  },
  {
    id: 'apa',
    title: 'Advance Pricing Agreements',
    description:
      'Strategic guidance through the APA process to achieve long-term certainty on your transfer pricing positions.',
    details: [
      'Pre-filing strategy and feasibility assessment',
      'Unilateral, bilateral, and multilateral APAs',
      'Economic analysis and position papers',
      'Negotiation support with tax authorities',
      'APA renewals and compliance monitoring',
    ],
    icon: Scale,
  },
  {
    id: 'disputes',
    title: 'Dispute Resolution',
    description:
      'Effective representation and defense in transfer pricing audits, adjustments, and competent authority proceedings.',
    details: [
      'Audit defense and response preparation',
      'Mutual Agreement Procedure (MAP) support',
      'Competent authority negotiations',
      'Litigation support and expert testimony',
      'Penalty protection analysis',
    ],
    icon: Landmark,
  },
  {
    id: 'value-chain',
    title: 'Value Chain Analysis',
    description:
      'End-to-end analysis of your global operations to align intercompany pricing with economic substance and value creation.',
    details: [
      'Global value chain mapping',
      'Functional and risk analysis across entities',
      'Supply chain restructuring advisory',
      'Profit attribution modeling',
      'DEMPE analysis for intangibles',
    ],
    icon: Layers,
  },
  {
    id: 'ip-valuation',
    title: 'IP Valuation',
    description:
      'Sophisticated valuation of intangible property for licensing, cost-sharing agreements, and business restructurings.',
    details: [
      'Income, market, and cost approach valuations',
      'Royalty rate benchmarking',
      'Cost-sharing and buy-in payment analysis',
      'Hard-to-value intangibles (HTVI) assessment',
      'Migration and restructuring valuations',
    ],
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-navy to-brand-navy-light text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            End-to-end transfer pricing advisory for multinational enterprises.
            From documentation and planning to defense and dispute resolution.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-wide space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent className="w-10 h-10 text-brand-teal flex-shrink-0" />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-charcoal">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className={`bg-brand-cream rounded-lg p-8 ${!isEven ? 'lg:order-1' : ''}`}>
                  <h3 className="font-heading font-bold text-brand-charcoal mb-4">
                    What We Deliver
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Let&apos;s Discuss Your Transfer Pricing Needs
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Every engagement starts with understanding your business. Reach out
            to schedule a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-brand-teal hover:bg-gray-100">
              Schedule a Consultation
            </Link>
            <Link
              href="/about"
              className="btn-secondary border-white text-white hover:bg-teal-700"
            >
              About Kubaro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
