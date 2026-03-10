import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aggregate Sales',
  description:
    'Buy quality aggregates including road crush, washed rock, pea gravel, drain rock, and more from West Central Contracting.',
  openGraph: {
    title: 'Aggregate Sales | West Central Contracting',
    description:
      'Wide selection of high-quality aggregates for construction and landscaping projects.',
  },
};

const products = [
  {
    name: 'Road Crush',
    sizeRange: '1/2" - 2.5"',
    commonUses: [
      'Road base and subgrade',
      'Driveway construction',
      'Parking lot applications',
      'Foundation preparation',
    ],
    description: 'Angular rock blend ideal for compacting base layers.',
  },
  {
    name: 'Washed Rock',
    sizeRange: 'Various sizes',
    commonUses: [
      'Landscaping accents',
      'Decorative drainage',
      'Aggregate finishing',
      'Premium appearance projects',
    ],
    description: 'Clean, washed aggregates with excellent appearance.',
  },
  {
    name: 'Fractured Rock',
    sizeRange: 'Multiple grades',
    commonUses: [
      'Base layer applications',
      'Concrete aggregates',
      'Industrial uses',
      'Drainage systems',
    ],
    description: 'Angular fractured material for maximum interlocking.',
  },
  {
    name: 'Natural Round Rock',
    sizeRange: 'Various sizes',
    commonUses: [
      'Decorative landscaping',
      'Accent features',
      'Riprap applications',
      'Aesthetic projects',
    ],
    description: 'Natural rounded stone for attractive finishes.',
  },
  {
    name: 'Pea Gravel',
    sizeRange: 'Uniform small stones',
    commonUses: [
      'Walkway surfaces',
      'Playground areas',
      'Decorative landscaping',
      'Comfort surfaces',
    ],
    description: 'Smooth, rounded pea-sized gravel for comfort and appearance.',
  },
  {
    name: 'Drain Rock',
    sizeRange: 'Specified grades',
    commonUses: [
      'Drainage layers',
      'Septic systems',
      'Foundation drainage',
      'Perimeter drains',
    ],
    description: 'Clean rock specifically for drainage applications.',
  },
  {
    name: 'Rainbow Rock',
    sizeRange: 'Decorative sizes',
    commonUses: [
      'Premium landscaping',
      'Accent features',
      'Color contrast elements',
      'Design focal points',
    ],
    description: 'Colorful decorative rock for premium landscape designs.',
  },
  {
    name: 'Sand Varieties',
    sizeRange: 'Multiple types',
    commonUses: [
      'Concrete production',
      'Mortar applications',
      'Fill material',
      'Landscaping base',
    ],
    description: 'Various sand types for construction and landscaping.',
  },
];

export default function AggregateSalesPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide section-padding py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/services" className="hover:text-brand-red">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-charcoal font-semibold">
              Aggregate Sales
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Aggregate Sales
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Premium quality aggregates for construction, landscaping, and
            industrial projects. Offering a wide selection of materials to meet
            your project specifications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12">
            Our Material Selection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-brand-red transition-colors hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-red font-semibold">
                    Size Range: {product.sizeRange}
                  </p>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-brand-charcoal mb-3">
                    Common Uses:
                  </h4>
                  <ul className="space-y-2">
                    {product.commonUses.map((use) => (
                      <li
                        key={use}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="text-brand-red mr-3 mt-1">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/quote?material=${encodeURIComponent(product.name)}`}
                  className="btn-primary"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Why Choose West Central Contracting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                Quality Materials
              </h3>
              <p className="text-gray-700">
                All our aggregates are sourced and processed to the highest
                standards for your project success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Reliable trucking services ensure your materials arrive on time
                and in perfect condition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-700">
                Family-owned since 1980, we offer fair pricing without
                compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Use our material calculator to estimate your aggregate needs, or
            contact us for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="btn-primary bg-white text-brand-red hover:bg-gray-100"
            >
              Material Calculator
            </Link>
            <Link
              href="/quote"
              className="btn-secondary border-white text-white hover:bg-red-700"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
