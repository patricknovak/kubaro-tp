import Link from 'next/link';
import { FileText, BarChart3, Scale, Globe, Layers, Landmark, ArrowRight, Shield, Award, Users, Building2 } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const services = [
  {
    title: 'TP Documentation',
    description: 'Comprehensive transfer pricing documentation aligned with OECD Guidelines, including local files, master files, and Country-by-Country Reports.',
    icon: FileText,
    href: '/services#documentation',
  },
  {
    title: 'Benchmarking Studies',
    description: 'Rigorous comparable analyses using leading databases to establish arm\'s length pricing for intercompany transactions.',
    icon: BarChart3,
    href: '/services#benchmarking',
  },
  {
    title: 'Advance Pricing Agreements',
    description: 'Strategic guidance through unilateral, bilateral, and multilateral APA processes to achieve certainty on transfer pricing positions.',
    icon: Scale,
    href: '/services#apa',
  },
  {
    title: 'Dispute Resolution',
    description: 'Expert representation in transfer pricing audits, competent authority proceedings, and MAP cases across jurisdictions.',
    icon: Landmark,
    href: '/services#disputes',
  },
  {
    title: 'Value Chain Analysis',
    description: 'End-to-end analysis of your global value chain to optimize intercompany structures and align profits with economic substance.',
    icon: Layers,
    href: '/services#value-chain',
  },
  {
    title: 'IP Valuation',
    description: 'Sophisticated valuation of intangible property for licensing arrangements, cost-sharing agreements, and business restructurings.',
    icon: Globe,
    href: '/services#ip-valuation',
  },
];

const stats = [
  { value: '50+', label: 'Countries Covered', icon: Globe },
  { value: '200+', label: 'Engagements Completed', icon: FileText },
  { value: '95%', label: 'Audit Success Rate', icon: Shield },
  { value: '15+', label: 'Years of Experience', icon: Award },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/hero-global.jpg`}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light/90 to-brand-navy" />
        </div>
        <div className="relative container-wide section-padding py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-brand-teal-light font-semibold text-sm uppercase tracking-wider mb-4">
              Transfer Pricing Advisory
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Navigate Global Tax{' '}
              <span className="text-brand-teal-light">With Confidence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              Kubaro helps multinational enterprises manage transfer pricing risk,
              achieve compliance across jurisdictions, and defend intercompany pricing
              with robust, defensible positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-navy">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-teal text-white">
        <div className="container-wide px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <p className="font-heading text-3xl sm:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-90 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-brand-gray-mid text-lg max-w-2xl mx-auto">
              Comprehensive transfer pricing solutions tailored to your business,
              from documentation and planning to defense and dispute resolution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 rounded-xl border border-brand-gray-light hover:border-brand-teal hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-brand-teal mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-gray-mid leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center mt-4 text-brand-teal font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kubaro */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <Building2 className="h-12 w-12 text-brand-teal mb-6" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-charcoal mb-6">
                Why Kubaro?
              </h2>
              <p className="text-brand-gray-mid text-lg leading-relaxed">
                We combine deep technical expertise with practical business insight.
                Our team has advised on transfer pricing matters across industries
                including technology, pharmaceuticals, financial services, manufacturing,
                and natural resources. We deliver work that stands up to scrutiny from
                tax authorities worldwide.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${basePath}/images/team-meeting.jpg`}
                alt="Professional team collaborating on transfer pricing strategy"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6">
              <Shield className="h-10 w-10 text-brand-teal mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-2">Defensible Positions</h3>
              <p className="text-brand-gray-mid text-sm">Every analysis we deliver is built to withstand audit and litigation.</p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-10 w-10 text-brand-teal mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-2">Global Reach</h3>
              <p className="text-brand-gray-mid text-sm">Deep knowledge of TP regulations across 50+ jurisdictions worldwide.</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-10 w-10 text-brand-teal mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-2">Senior-Led Teams</h3>
              <p className="text-brand-gray-mid text-sm">Your engagement is led by experienced practitioners, not juniors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-charcoal mb-4">
                Industry Expertise
              </h2>
              <p className="text-brand-gray-mid text-lg mb-6">
                We bring specialized knowledge to the unique transfer pricing
                challenges faced by companies across a wide range of sectors.
              </p>
              <ul className="space-y-3">
                {['Technology & Software', 'Pharmaceuticals & Life Sciences', 'Financial Services', 'Manufacturing & Industrial', 'Natural Resources & Energy', 'Consumer Products & Retail'].map(
                  (area) => (
                    <li key={area} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-teal" />
                      <span className="text-brand-charcoal font-medium">{area}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={`${basePath}/images/industry-office.jpg`}
                alt="Modern business environment"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/70 flex flex-col items-center justify-center p-8 text-center text-white">
                <Scale className="h-16 w-16 text-brand-teal-light mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">OECD Aligned</h3>
                <p className="text-gray-200 mb-6">
                  Our methodologies follow the latest OECD Transfer Pricing Guidelines
                  and BEPS Actions 8-10, ensuring global consistency and compliance.
                </p>
                <Link href="/services" className="btn-primary">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-brand-navy text-white section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/handshake.jpg`}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>
        <div className="relative container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to Strengthen Your TP Position?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Whether you need a benchmarking study, documentation review, or strategic
            advice on a restructuring, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get in Touch
            </Link>
            <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-4">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
