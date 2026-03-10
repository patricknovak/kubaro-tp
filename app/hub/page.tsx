import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Business Hub',
  description:
    'Connect with trusted contractors and service providers in the Hinton and western Alberta region.',
  openGraph: {
    title: 'Business Hub | West Central Contracting',
    description:
      'Community directory of trusted contractors and service providers.',
  },
};

const categories = [
  'Excavation',
  'Plumbing & HVAC',
  'Electrical',
  'Concrete & Paving',
  'Landscaping',
  'Surveying',
  'Waste Management',
  'Building Supplies',
  'Safety Training',
];

const sampleBusinesses = [
  {
    id: 1,
    name: 'Alpine Excavation Ltd',
    category: 'Excavation',
    location: 'Hinton, AB',
    phone: '(780) 865-1234',
    website: 'alpineexcavation.com',
    description: 'Professional excavation services for construction projects.',
    serviceAreas: ['Hinton', 'Edson', 'Jasper'],
  },
  {
    id: 2,
    name: 'Clear Drainage Solutions',
    category: 'Plumbing & HVAC',
    location: 'Edson, AB',
    phone: '(780) 723-4567',
    website: 'cleardrainage.com',
    description: 'Plumbing and HVAC services for commercial and residential.',
    serviceAreas: ['Edson', 'Hinton', 'Grande Cache'],
  },
  {
    id: 3,
    name: 'Power Up Electrical',
    category: 'Electrical',
    location: 'Hinton, AB',
    phone: '(780) 865-5678',
    website: 'powerupelectric.com',
    description: 'Licensed electrical contractors serving all of western Alberta.',
    serviceAreas: ['Hinton', 'Edson', 'Jasper', 'Grande Cache'],
  },
  {
    id: 4,
    name: 'Solid Ground Concrete',
    category: 'Concrete & Paving',
    location: 'Jasper, AB',
    phone: '(780) 852-3210',
    website: 'solidgroundconcrete.com',
    description: 'Quality concrete and paving for residential and commercial projects.',
    serviceAreas: ['Jasper', 'Hinton', 'Robb'],
  },
  {
    id: 5,
    name: 'Green Thumb Landscaping',
    category: 'Landscaping',
    location: 'Hinton, AB',
    phone: '(780) 865-9999',
    website: 'greenthumbbiz.com',
    description: 'Landscape design and installation services.',
    serviceAreas: ['Hinton', 'Edson'],
  },
  {
    id: 6,
    name: 'Precision Surveys Inc',
    category: 'Surveying',
    location: 'Edson, AB',
    phone: '(780) 723-8888',
    website: 'precisionsurveysab.com',
    description: 'Professional land and construction surveying services.',
    serviceAreas: ['Hinton', 'Edson', 'Jasper', 'Grande Cache', 'Cadomin'],
  },
];

export default function HubPage() {
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
            <span className="text-brand-charcoal font-semibold">Business Hub</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Business Hub
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-6">
            Connect with trusted contractors and service providers in the Hinton
            and western Alberta region. Find the right partner for your next
            project.
          </p>
          <Link
            href="/hub/submit"
            className="inline-flex items-center px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Submit Your Business
          </Link>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-brand-red hover:text-brand-red transition-colors font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-8">
            Featured Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBusinesses.map((business) => (
              <div
                key={business.id}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-red hover:shadow-lg transition-all"
              >
                {/* Header with Category */}
                <div className="bg-gradient-to-r from-brand-charcoal to-gray-700 px-6 py-4">
                  <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {business.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">
                    {business.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {business.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6 border-y border-gray-200 py-4">
                    <div className="flex items-center text-gray-700 text-sm">
                      <MapPin className="w-4 h-4 text-brand-red mr-3 flex-shrink-0" />
                      {business.location}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <Phone className="w-4 h-4 text-brand-red mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${business.phone}`}
                        className="hover:text-brand-red"
                      >
                        {business.phone}
                      </a>
                    </div>
                    {business.website && (
                      <div className="flex items-center text-gray-700 text-sm">
                        <Globe className="w-4 h-4 text-brand-red mr-3 flex-shrink-0" />
                        <a
                          href={`https://${business.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-red"
                        >
                          {business.website}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Service Areas */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      Service Areas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {business.serviceAreas.map((area) => (
                        <span
                          key={area}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <a
                    href={`tel:${business.phone}`}
                    className="w-full inline-block text-center px-4 py-2 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Is Your Business Listed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Join the Business Hub and connect with thousands of potential
            clients. Submit your business information today.
          </p>
          <Link
            href="/hub/submit"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Submit Your Business
          </Link>
        </div>
      </section>
    </div>
  );
}
