import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Award,
  Shield,
  Users,
  Handshake,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about West Central Contracting, a family-owned aggregate, trucking, and construction company serving western Alberta since 1980.',
  openGraph: {
    title: 'About Us | West Central Contracting',
    description:
      'Family-owned since 1980. COR Certified, ISNetworld member, and award-winning contractor.',
  },
};

const coreValues = [
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and unwavering commitment to ethical business practices.',
    icon: Shield,
  },
  {
    title: 'Customer Focus',
    description: 'Every decision we make is guided by understanding and exceeding our clients\' needs.',
    icon: Handshake,
  },
  {
    title: 'Collaboration',
    description: 'We work together as a team and foster strong partnerships with our clients and suppliers.',
    icon: Users,
  },
  {
    title: 'Accountability',
    description: 'We take responsibility for our work and stand behind the quality of everything we deliver.',
    icon: Award,
  },
  {
    title: 'Diversity & Inclusion',
    description: 'We maintain 10%+ First Nations hiring and celebrate the diverse backgrounds of our team.',
    icon: Heart,
  },
];

const certifications = [
  {
    title: 'COR Certified',
    description: 'Certificate of Recognition for occupational health and safety excellence',
  },
  {
    title: 'ISNetworld Member',
    description: 'International safety & environmental compliance certification',
  },
  {
    title: 'ComplyWorks',
    description: 'Comprehensive compliance management system',
  },
  {
    title: 'ACSA Member',
    description: 'Alberta Construction Safety Association',
  },
];

const awards = [
  {
    year: 2013,
    title: 'Business of the Year',
    description: 'Recognized for excellence in business operations and community contribution',
  },
  {
    year: 2017,
    title: 'Business of the Year',
    description: 'Honored again for outstanding service and industry leadership',
  },
];

export default function AboutPage() {
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
            <span className="text-brand-charcoal font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About West Central Contracting
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Over 40 years of family-owned service excellence. Building relationships
            and delivering quality across western Alberta.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1980, West Central Contracting began as a small
                  family operation with a commitment to serving the Hinton
                  community and surrounding regions with quality aggregates and
                  trucking services.
                </p>
                <p>
                  What started with a single truck and crushing operation has
                  grown into a comprehensive service provider offering trucking,
                  aggregate sales, gravel crushing, equipment rental, landscaping
                  supplies, and concrete products.
                </p>
                <p>
                  Through decades of dedicated service, we've built our
                  reputation on reliability, quality, and a deep commitment to
                  our customers. We've remained family-owned because we believe
                  in long-term relationships and sustainable growth.
                </p>
                <p>
                  Today, West Central Contracting continues to serve construction
                  companies, landscapers, municipalities, and individual clients
                  across western Alberta with the same values that founded our
                  company: integrity, quality, and customer focus.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-red to-red-700 rounded-lg p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">
                By the Numbers
              </h3>
              <div className="space-y-6">
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">40+</div>
                  <p className="text-red-100">Years of Service</p>
                </div>
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">1980</div>
                  <p className="text-red-100">Founded</p>
                </div>
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">10%+</div>
                  <p className="text-red-100">First Nations Hiring</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">6</div>
                  <p className="text-red-100">Core Service Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-red shadow-md">
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional aggregate, trucking, and construction
                services that exceed customer expectations while maintaining the
                highest standards of safety, environmental responsibility, and
                ethical business practices. We are committed to being a trusted
                partner in building the future of western Alberta.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-red shadow-md">
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most respected and preferred contractor in western
                Alberta—a company known for reliability, quality products and
                services, innovative solutions, and an unwavering commitment to
                our people and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-red hover:shadow-lg transition-all"
                >
                  <IconComponent className="w-12 h-12 text-brand-red mb-4" />
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

      {/* Safety & Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Safety & Compliance
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Safety is fundamental to everything we do. We maintain rigorous
            standards and hold the certifications that matter most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white p-8 rounded-lg border-l-4 border-brand-red shadow-md flex items-start"
              >
                <Shield className="w-8 h-8 text-brand-red mr-4 mt-1 flex-shrink-0" />
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

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <div
                key={award.year}
                className="bg-gradient-to-br from-brand-red to-red-700 text-white p-8 rounded-lg shadow-lg text-center"
              >
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{award.year}</div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {award.title}
                </h3>
                <p className="text-red-100">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-2 text-center">
                Todd
              </h3>
              <p className="text-brand-red font-semibold text-center mb-4">
                Owner & Operator
              </p>
              <p className="text-gray-700 text-center">
                With decades of experience in the aggregates and construction
                industry, Todd leads West Central Contracting with a commitment
                to quality, integrity, and customer service.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-4">
                Meet Our Team
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  West Central Contracting is supported by a dedicated team of
                  professionals committed to excellence in every aspect of our
                  business.
                </p>
                <p>
                  Our team includes experienced operators, dispatchers, sales
                  professionals, and administrative staff who work together to
                  ensure every customer receives outstanding service.
                </p>
                <p>
                  We're proud to maintain strong diversity in our workplace,
                  including 10%+ First Nations hiring, reflecting our commitment
                  to community and inclusion.
                </p>
                <p className="font-semibold">
                  Our people are our greatest asset, and we invest in their
                  professional development and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Contact our team to learn more about our services or to discuss your
            project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:(780)865-3000"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              (780) 865-3000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
