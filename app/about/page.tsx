import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Award,
  Shield,
  Users,
  Handshake,
  Target,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kubaro Transfer Pricing Advisory — a specialized firm helping multinational enterprises navigate transfer pricing challenges worldwide.',
  openGraph: {
    title: 'About Us | Kubaro Transfer Pricing',
    description:
      'Expert transfer pricing advisory built on technical rigor, practical insight, and deep industry experience.',
  },
};

const coreValues = [
  {
    title: 'Technical Rigor',
    description: 'Every analysis is grounded in sound economics and the latest regulatory guidance.',
    icon: Shield,
  },
  {
    title: 'Client Partnership',
    description: 'We work alongside your tax and finance teams as an integrated extension of your organization.',
    icon: Handshake,
  },
  {
    title: 'Global Perspective',
    description: 'Deep understanding of TP regulations across 50+ jurisdictions ensures consistent global positions.',
    icon: Globe,
  },
  {
    title: 'Practical Solutions',
    description: 'We deliver actionable recommendations that balance compliance requirements with business objectives.',
    icon: Target,
  },
  {
    title: 'Senior Engagement',
    description: 'Experienced practitioners lead every engagement, ensuring quality and continuity throughout.',
    icon: Users,
  },
];

export default function AboutPage() {
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
            <span className="text-brand-charcoal font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-navy to-brand-navy-light text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About Kubaro
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            A specialized transfer pricing advisory firm built on the belief
            that rigorous analysis and practical thinking deliver the best outcomes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kubaro was founded with a clear purpose: to provide multinational
                  enterprises with transfer pricing advisory that combines deep
                  technical expertise with genuine business understanding.
                </p>
                <p>
                  Our team has advised on some of the most complex transfer pricing
                  matters across industries — from technology licensing structures
                  to pharmaceutical supply chains, from financial services
                  intercompany arrangements to natural resource royalty agreements.
                </p>
                <p>
                  We believe that great transfer pricing work starts with
                  understanding the business. Only then can we develop positions
                  that are both compliant and commercially sensible — positions
                  that stand up under the scrutiny of tax authorities worldwide.
                </p>
                <p>
                  Today, Kubaro serves clients ranging from mid-market companies
                  entering new jurisdictions to Fortune 500 multinationals managing
                  complex global structures.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-lg p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">
                By the Numbers
              </h3>
              <div className="space-y-6">
                <div className="border-b border-teal-400 pb-4">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-teal-100">Jurisdictions Covered</p>
                </div>
                <div className="border-b border-teal-400 pb-4">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <p className="text-teal-100">Engagements Completed</p>
                </div>
                <div className="border-b border-teal-400 pb-4">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-teal-100">Audit Success Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">6</div>
                  <p className="text-teal-100">Core Service Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="section-padding bg-gray-50 scroll-mt-32">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-teal shadow-md">
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                Business First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We start every engagement by understanding your business operations,
                value drivers, and strategic objectives. This ensures our transfer
                pricing recommendations are grounded in commercial reality and
                aligned with how your business actually operates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-teal shadow-md">
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                Defensible by Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every position we develop is built with potential challenges in
                mind. We document our analyses thoroughly, apply robust economic
                methodologies, and ensure alignment with OECD Guidelines and local
                regulations so your positions hold up under scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all"
                >
                  <IconComponent className="w-12 h-12 text-brand-teal mb-4" />
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Regulatory Expertise
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            We stay at the forefront of global transfer pricing developments
            to ensure our clients are always well-positioned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'OECD Transfer Pricing Guidelines',
                description: 'Deep expertise in the full OECD framework including the latest guidance on financial transactions and intangibles.',
              },
              {
                title: 'BEPS Actions 8-10 & 13',
                description: 'Comprehensive understanding of BEPS implementation and its impact on intercompany pricing and documentation.',
              },
              {
                title: 'Pillar One & Pillar Two',
                description: 'Forward-looking advisory on the evolving global tax landscape and its implications for transfer pricing.',
              },
              {
                title: 'Local Country Regulations',
                description: 'Practical knowledge of transfer pricing rules, thresholds, and enforcement practices across 50+ jurisdictions.',
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="bg-white p-8 rounded-lg border-l-4 border-brand-teal shadow-md flex items-start"
              >
                <Award className="w-8 h-8 text-brand-teal mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team to discuss how we can help you manage transfer
            pricing risk and achieve compliance across your global operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
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
