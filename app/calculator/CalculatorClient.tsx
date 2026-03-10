'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Calculator } from 'lucide-react';

// Material density in tonnes per cubic yard
const MATERIAL_DENSITIES: Record<string, number> = {
  'Road Crush': 1.4,
  'Washed Rock': 1.35,
  'Pea Gravel': 1.4,
  'Drain Rock': 1.3,
  'Rainbow Rock': 1.35,
  'Sand': 1.5,
  'Topsoil': 1.1,
  'Mulch': 0.4,
};

interface CalculationResult {
  cubicYards: number;
  tonnage: number;
}

export default function CalculatorClient() {
  const [materialType, setMaterialType] = useState<string>('Road Crush');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateTonnage = (e: React.FormEvent) => {
    e.preventDefault();

    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    const depthNum = parseFloat(depth);

    if (!lengthNum || !widthNum || !depthNum) {
      alert('Please enter all measurements');
      return;
    }

    // Convert feet to yards (1 yard = 3 feet)
    const lengthYards = lengthNum / 3;
    const widthYards = widthNum / 3;
    const depthYards = depthNum / 3;

    // Calculate cubic yards
    const cubicYards = lengthYards * widthYards * depthYards;

    // Get density for selected material
    const density = MATERIAL_DENSITIES[materialType] || 1.4;

    // Calculate tonnage
    const tonnage = cubicYards * density;

    setResult({
      cubicYards: Math.round(cubicYards * 100) / 100,
      tonnage: Math.round(tonnage * 100) / 100,
    });
  };

  const getQuoteUrl = () => {
    if (!result) return '/quote';
    return `/quote?material=${encodeURIComponent(materialType)}&tonnage=${result.tonnage}`;
  };

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
            <span className="text-brand-charcoal font-semibold">Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-brand-charcoal to-gray-800 text-white">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-4">
            <Calculator className="w-12 h-12" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Material Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-200 max-w-2xl">
            Estimate the tonnage of materials needed for your project. Enter
            your dimensions and we'll calculate the approximate quantity.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Calculate Tonnage
              </h2>
              <form onSubmit={calculateTonnage} className="space-y-6">
                {/* Material Type */}
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Material Type
                  </label>
                  <select
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  >
                    {Object.keys(MATERIAL_DENSITIES).map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Length (feet)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

                {/* Width */}
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Width (feet)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="e.g., 50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

                {/* Depth */}
                <div>
                  <label className="block font-heading font-semibold text-brand-charcoal mb-2">
                    Depth (feet)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    placeholder="e.g., 0.5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>

                {/* Calculate Button */}
                <button
                  type="submit"
                  className="w-full btn-primary bg-brand-red text-white"
                >
                  Calculate
                </button>
              </form>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> These estimates are approximate and based on average
                  material densities. Actual tonnage may vary due to moisture
                  content, compaction, and material characteristics. We recommend
                  contacting us for precise project estimates.
                </p>
              </div>
            </div>

            {/* Results and Density Table */}
            <div>
              {/* Results */}
              {result && (
                <div className="bg-brand-red text-white rounded-lg p-8 mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Calculation Results
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-red-400">
                      <span>Material Type:</span>
                      <strong>{materialType}</strong>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-red-400">
                      <span>Cubic Yards:</span>
                      <strong className="text-2xl">
                        {result.cubicYards.toLocaleString()}
                      </strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Estimated Tonnage:</span>
                      <strong className="text-3xl">
                        {result.tonnage.toLocaleString()} tons
                      </strong>
                    </div>
                  </div>
                  <Link
                    href={getQuoteUrl()}
                    className="block w-full btn-primary bg-white text-brand-red hover:bg-gray-100 text-center"
                  >
                    Get a Quote for This
                  </Link>
                </div>
              )}

              {/* Material Density Reference Table */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-4">
                  Material Density Reference
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Density (tonnes per cubic yard):
                </p>
                <div className="space-y-2">
                  {Object.entries(MATERIAL_DENSITIES).map(([material, density]) => (
                    <div
                      key={material}
                      className="flex justify-between items-center py-2 px-3 bg-white rounded border border-gray-200"
                    >
                      <span className="text-gray-700">{material}</span>
                      <span className="font-semibold text-brand-charcoal">
                        {density} tons/yd³
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist with accurate project estimates. Contact
            us for more detailed calculations or project consulting.
          </p>
          <Link href="/contact" className="btn-primary bg-brand-red text-white">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
