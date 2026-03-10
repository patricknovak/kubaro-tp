import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read helpful articles and guides about aggregates, gravel, construction, and landscaping.',
  openGraph: {
    title: 'Blog | West Central Contracting',
    description: 'Articles and guides about aggregates and construction.',
  },
};

const posts = [
  {
    id: 1,
    title: 'How to Choose the Right Gravel for Your Driveway',
    excerpt:
      'Selecting the right gravel is crucial for a durable, attractive driveway. Learn about different sizes, compaction, and maintenance tips.',
    date: 'March 8, 2024',
    slug: 'choose-right-gravel-driveway',
    category: 'Landscaping',
  },
  {
    id: 2,
    title: 'Understanding Aggregate Sizes: A Complete Guide',
    excerpt:
      'Confused about aggregate sizing? This comprehensive guide explains the difference between crushed stone, gravel, and other aggregate types.',
    date: 'February 28, 2024',
    slug: 'understanding-aggregate-sizes',
    category: 'Materials',
  },
  {
    id: 3,
    title: 'Gravel Crushing Process Explained',
    excerpt:
      'Ever wonder how gravel is crushed? Discover the process behind creating uniform aggregate sizes for your construction projects.',
    date: 'February 15, 2024',
    slug: 'gravel-crushing-process-explained',
    category: 'Production',
  },
  {
    id: 4,
    title: 'Concrete Aggregates: What You Need to Know',
    excerpt:
      'Selecting the right aggregate for concrete is essential for strength and durability. Learn what makes quality concrete aggregate.',
    date: 'January 30, 2024',
    slug: 'concrete-aggregates-guide',
    category: 'Concrete',
  },
  {
    id: 5,
    title: 'Landscaping Tips: Creating Beautiful Outdoor Spaces',
    excerpt:
      'Transform your property with these professional landscaping tips. From material selection to design principles, we cover it all.',
    date: 'January 15, 2024',
    slug: 'landscaping-tips',
    category: 'Landscaping',
  },
  {
    id: 6,
    title: 'Seasonal Maintenance: Preparing Your Project for Winter',
    excerpt:
      'Get your construction and landscaping projects ready for winter weather. Learn about proper drainage, compaction, and maintenance.',
    date: 'December 20, 2023',
    slug: 'winter-project-maintenance',
    category: 'Maintenance',
  },
];

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogPage() {
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
            <span className="text-brand-charcoal font-semibold">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Blog & Resources
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Read helpful articles and guides about aggregates, construction,
            landscaping, and best practices from industry experts.
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

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="h-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-red hover:shadow-lg transition-all">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-brand-charcoal to-gray-700 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📝</div>
                      <p className="text-sm text-gray-300">Article</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center text-gray-500 text-xs mb-4 pt-4 border-t border-gray-200">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>

                    {/* Read More Link */}
                    <div className="inline-flex items-center text-brand-red font-semibold group-hover:translate-x-2 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Subscribe to our newsletter for the latest articles, tips, and
            updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-charcoal text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
