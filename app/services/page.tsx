import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Truck,
  Hammer,
  Pickaxe,
  Wrench,
  Trees,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'West Central Contracting offers trucking, aggregate sales, gravel crushing, equipment rental, landscaping supplies, and concrete products.',
  openGraph: {
    title: 'Services | West Central Contracting',
    description:
      'Trucking, aggregate sales, gravel crushing, equipment rental, landscaping supplies, and concrete products.',
  },
};

const services = [
  {
    title: 'Trucking Services',
    description:
      'Professional trucking solutions for aggregates, materials, and equipment transport across western Alberta.',
    icon: Truck,
    href: '/services/trucking',
    color: 'text-red-600',
  },
  {
    title: 'Aggregate Sales',
    description:
      'Wide selection of high-quality aggregates including road crush, washed rock, pea gravel, and specialty materials.',
    icon: Pickaxe,
    href: '/services/aggregate-sales',
    color: 'text-red-600',
  },
  {
    title: 'Gravel Crushing',
    description:
      'State-of-the-art gravel crushing services producing custom aggregate sizes for your specific project needs.',
    icon: Hammer,
    href: '/services/gravel-crushing',
    color: 'text-red-600',
  },
  {
    title: 'Equipment Rental',
    description:
      'Rent quality equipment and machinery for your construction, landscaping, or industrial projects.',
    icon: Wrench,
    href: '/services/equipment-rental',
    color: 'text-red-600',
  },
  {
    title: 'Landscaping Supplies',
    description:
      'Premium landscaping materials including topsoil, mulch, decorative stone, and landscaping rocks.',
    icon: Trees,
    href: '/services/landscaping-supplies',
    color: 'text-red-600',
  },
  {
    title: 'Concrete Products',
    description:
      'Wide range of concrete products including lego blocks, barriers, and decorative concrete solutions.',
    icon: Zap,
    href: '/services/concrete-products',
    color: 'text-red-600',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Comprehensive solutions for all your construction, landscaping, and
            material needs. Family-owned since 1980, serving western Alberta with
            reliability and expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group h-full"
                >
                  <div className="h-full bg-gray-50 hover:bg-gray-100 rounded-lg p-8 transition-colors duration-200 border border-gray-200 hover:border-brand-red">
                    <IconComponent className={`${service.color} w-12 h-12 mb-4 group-hover:scale-110 transition-transform`} />
                    <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-brand-red font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Contact us today to discuss your project needs or request a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary bg-white text-brand-red hover:bg-gray-100">
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-red-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
