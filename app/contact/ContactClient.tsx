'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Mail, MapPin, Clock } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactClient() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // For static site, show success message
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className="text-brand-charcoal font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-navy to-brand-navy-light text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Get in touch to discuss your transfer pricing needs. Every
            engagement starts with a confidential conversation.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-8">
                Get In Touch
              </h2>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <Mail className="w-6 h-6 text-brand-teal mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="mailto:info@kubaro.com"
                        className="hover:text-brand-teal"
                      >
                        info@kubaro.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-brand-teal mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">
                      Global Advisory Services
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <Clock className="w-6 h-6 text-brand-teal mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-charcoal mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-700 text-sm">
                      We typically respond within one business day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="bg-brand-cream p-6 rounded-lg">
                <h3 className="font-heading font-bold text-brand-charcoal mb-3">
                  Common Inquiries
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Transfer pricing documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Benchmarking study requests
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Audit defense support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Restructuring advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    APA and MAP assistance
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Send Us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <p className="font-semibold">Message received!</p>
                    <p className="text-sm">
                      We&apos;ll be in touch within one business day.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@company.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    >
                      <option value="">Select a topic...</option>
                      <option value="documentation">TP Documentation</option>
                      <option value="benchmarking">Benchmarking Study</option>
                      <option value="apa">Advance Pricing Agreement</option>
                      <option value="dispute">Audit / Dispute Resolution</option>
                      <option value="restructuring">Value Chain / Restructuring</option>
                      <option value="ip">IP Valuation</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your transfer pricing needs..."
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
