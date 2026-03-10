import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MapPin } from 'lucide-react';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description:
    'View our completed projects showcasing our expertise in construction, landscaping, and aggregate delivery.',
  openGraph: {
    title: 'Projects & Portfolio | West Central Contracting',
    description:
      'Gallery of completed projects across western Alberta.',
  },
};

const categories = [
  'All Projects',
  'Commercial',
  'Residential',
  'Industrial',
  'Municipal',
];

const projects = [
  {
    id: 1,
    title: 'Highway Foundation Project',
    category: 'Commercial',
    location: 'Highway 16, Alberta',
    year: 2023,
  },
  {
    id: 2,
    title: 'Residential Driveway Installation',
    category: 'Residential',
    location: 'Hinton, AB',
    year: 2023,
  },
  {
    id: 3,
    title: 'Industrial Site Preparation',
    category: 'Industrial',
    location: 'Edson, AB',
    year: 2023,
  },
  {
    id: 4,
    title: 'Municipal Road Expansion',
    category: 'Municipal',
    location: 'Jasper County, AB',
    year: 2022,
  },
  {
    id: 5,
    title: 'Commercial Parking Lot',
    category: 'Commercial',
    location: 'Grande Cache, AB',
    year: 2022,
  },
  {
    id: 6,
    title: 'Residential Landscaping Project',
    category: 'Residential',
    location: 'Hinton, AB',
    year: 2022,
  },
];

export default function ProjectsPage() {
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
            <span className="text-brand-charcoal font-semibold">Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Projects & Portfolio
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore our completed projects showcasing our expertise in
            construction, landscaping, and materials delivery across western
            Alberta.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-brand-red hover:text-brand-red transition-colors font-semibold text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group h-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-red hover:shadow-lg transition-all"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center overflow-hidden relative">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">🏗️</div>
                    <p className="text-sm text-red-100">Project Image</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-brand-charcoal text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-gray-700 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-brand-red mr-2 flex-shrink-0" />
                      {project.location}
                    </div>
                    <div className="text-gray-500 text-xs">
                      Completed {project.year}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="inline-flex items-center text-brand-red font-semibold group-hover:translate-x-2 transition-transform">
                    View Project
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-12 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">100+</div>
              <p className="font-heading font-semibold text-brand-charcoal">
                Projects Completed
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">40+</div>
              <p className="font-heading font-semibold text-brand-charcoal">
                Years Experience
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">95%</div>
              <p className="font-heading font-semibold text-brand-charcoal">
                Client Satisfaction
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">5</div>
              <p className="font-heading font-semibold text-brand-charcoal">
                Regions Served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Let's discuss your next project. Contact us for a consultation or
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
