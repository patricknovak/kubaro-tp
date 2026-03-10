'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Step = 'service' | 'details' | 'location' | 'contact';

interface FormData {
  serviceType: string;
  material: string;
  quantity: string;
  unit: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryProvince: string;
  deliveryPostal: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

export default function QuoteClient() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<Step>('service');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    material: searchParams.get('material') || '',
    quantity: searchParams.get('tonnage') || '',
    unit: 'tons',
    deliveryAddress: '',
    deliveryCity: '',
    deliveryProvince: 'AB',
    deliveryPostal: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const services = [
    { id: 'aggregate-sales', label: 'Aggregate Sales' },
    { id: 'trucking', label: 'Trucking Services' },
    { id: 'gravel-crushing', label: 'Gravel Crushing' },
    { id: 'equipment-rental', label: 'Equipment Rental' },
    { id: 'landscaping-supplies', label: 'Landscaping Supplies' },
    { id: 'concrete-products', label: 'Concrete Products' },
  ];

  const steps: Step[] = ['service', 'details', 'location', 'contact'];
  const stepIndex = steps.indexOf(currentStep);

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

  const canProceedToNext = () => {
    switch (currentStep) {
      case 'service':
        return formData.serviceType !== '';
      case 'details':
        return formData.material !== '' && formData.quantity !== '';
      case 'location':
        return (
          formData.deliveryAddress !== '' &&
          formData.deliveryCity !== '' &&
          formData.deliveryPostal !== ''
        );
      case 'contact':
        return (
          formData.name !== '' &&
          formData.email !== '' &&
          formData.phone !== ''
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNext()) {
      const nextStepIndex = stepIndex + 1;
      if (nextStepIndex < steps.length) {
        setCurrentStep(steps[nextStepIndex]);
      }
    }
  };

  const handlePrevious = () => {
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canProceedToNext()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          serviceType: '',
          material: '',
          quantity: '',
          unit: 'tons',
          deliveryAddress: '',
          deliveryCity: '',
          deliveryProvince: 'AB',
          deliveryPostal: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          notes: '',
        });
      } else {
        alert('Failed to submit quote request. Please try again.');
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
              <span className="text-brand-charcoal font-semibold">Quote</span>
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
                Quote Request Submitted!
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                Thank you for requesting a quote from West Central Contracting.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will review your request and contact you within 24
                hours to provide a detailed estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary bg-brand-red text-white">
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary border-2 border-brand-charcoal"
                >
                  Contact Us Directly
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
            <span className="text-brand-charcoal font-semibold">Quote</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Get a detailed quote for your project. Our team will follow up with
            you promptly.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      index <= stepIndex
                        ? 'bg-brand-red text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        index < stepIndex ? 'bg-brand-red' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Service</span>
              <span>Details</span>
              <span>Location</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {currentStep === 'service' && (
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  What service are you interested in?
                </h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-brand-red transition-colors"
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={formData.serviceType === service.id}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-red"
                      />
                      <span className="ml-3 text-gray-700 font-semibold">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Material & Quantity Details */}
            {currentStep === 'details' && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Tell us about your materials
                </h2>
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Material Type
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    placeholder="e.g., Road Crush, Washed Rock, Pea Gravel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 50"
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Unit
                    </label>
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    >
                      <option value="tons">Tons</option>
                      <option value="cubic-yards">Cubic Yards</option>
                      <option value="cubic-meters">Cubic Meters</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Delivery Location */}
            {currentStep === 'location' && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Where should we deliver?
                </h2>
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      City / Town
                    </label>
                    <input
                      type="text"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleInputChange}
                      placeholder="Hinton"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="deliveryPostal"
                      value={formData.deliveryPostal}
                      onChange={handleInputChange}
                      placeholder="T7V 2G3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 'contact' && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Contact information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                      Email
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
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(780) 865-3000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requirements or questions..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8">
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="btn-secondary border-2 border-brand-charcoal"
                >
                  Back
                </button>
              )}
              {stepIndex < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceedToNext()}
                  className="btn-primary bg-brand-red text-white disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !canProceedToNext()}
                  className="btn-primary bg-brand-red text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
