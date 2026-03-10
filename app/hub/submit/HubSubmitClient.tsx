'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Upload } from 'lucide-react';

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  description: string;
  category: string;
  serviceAreas: string[];
  logoFile: File | null;
}

export default function HubSubmitClient() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    category: '',
    serviceAreas: [],
    logoFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

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
    'Other',
  ];

  const serviceAreas = [
    'Hinton',
    'Edson',
    'Jasper',
    'Grande Cache',
    'Robb',
    'Cadomin',
    'Other',
  ];

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

  const handleServiceAreaChange = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceAreas: prev.serviceAreas.includes(area)
        ? prev.serviceAreas.filter((a) => a !== area)
        : [...prev.serviceAreas, area],
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        logoFile: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.businessName ||
      !formData.contactName ||
      !formData.email ||
      !formData.phone ||
      !formData.category ||
      formData.serviceAreas.length === 0
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('businessName', formData.businessName);
      data.append('contactName', formData.contactName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('website', formData.website);
      data.append('description', formData.description);
      data.append('category', formData.category);
      data.append('serviceAreas', JSON.stringify(formData.serviceAreas));
      if (formData.logoFile) {
        data.append('logo', formData.logoFile);
      }

      const response = await fetch('/api/hub/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          description: '',
          category: '',
          serviceAreas: [],
          logoFile: null,
        });
        setLogoPreview(null);
      } else {
        alert('Failed to submit business. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container-wide section-padding py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-brand-red">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/hub" className="hover:text-brand-red">
                Business Hub
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-brand-charcoal font-semibold">Submit</span>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-200 rounded-lg p-12 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="font-heading text-3xl font-bold text-green-700 mb-4">
                Business Submitted!
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                Thank you for submitting your business to the West Central
                Contracting Business Hub.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will review your submission and contact you within 2-3
                business days to confirm your listing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hub" className="btn-primary bg-brand-red text-white">
                  View Hub
                </Link>
                <Link
                  href="/"
                  className="btn-secondary border-2 border-brand-charcoal"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
            <Link href="/hub" className="hover:text-brand-red">
              Business Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-charcoal font-semibold">Submit</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Submit Your Business
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Join the West Central Contracting Business Hub and reach thousands
            of potential clients in the region.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-wide max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Business Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your Business Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Business Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your business services and specialties..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="www.yourbusiness.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

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
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(780) 555-0000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Service Areas *
              </h2>
              <div className="space-y-3">
                {serviceAreas.map((area) => (
                  <label key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.serviceAreas.includes(area)}
                      onChange={() => handleServiceAreaChange(area)}
                      className="w-4 h-4 text-brand-red rounded"
                    />
                    <span className="ml-3 text-gray-700 font-semibold">
                      {area}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Logo Upload */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Business Logo (Optional)
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand-red transition-colors bg-white">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Click to upload logo
                    </span>
                    <span className="text-xs text-gray-500">
                      PNG, JPG up to 5MB
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </label>
                {logoPreview && (
                  <div className="flex justify-center">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="max-h-32 max-w-32 rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-primary bg-brand-red text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Business'}
              </button>
              <Link
                href="/hub"
                className="btn-secondary border-2 border-brand-charcoal"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
