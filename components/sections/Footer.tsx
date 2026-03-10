import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'TP Documentation', href: '/services#documentation' },
    { name: 'Benchmarking Studies', href: '/services#benchmarking' },
    { name: 'Advance Pricing Agreements', href: '/services#apa' },
    { name: 'Dispute Resolution', href: '/services#disputes' },
    { name: 'Value Chain Analysis', href: '/services#value-chain' },
    { name: 'IP Valuation', href: '/services#ip-valuation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/about#approach' },
    { name: 'Resources', href: '/resources' },
    { name: 'Voice Consultation', href: '/voice-consultation' },
    { name: 'Schedule a Consultation', href: '/consultation' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">K</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-tight">Kubaro</p>
                <p className="text-xs text-gray-400 leading-tight">Transfer Pricing</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Expert transfer pricing advisory helping multinational enterprises
              navigate intercompany transactions with confidence and compliance.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@kubaro.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-brand-teal" /> info@kubaro.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-teal" /> Global Advisory Services
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>OECD Guidelines</li>
              <li>BEPS Actions 8-10</li>
              <li>Country-by-Country Reporting</li>
              <li>Arm&apos;s Length Principle</li>
              <li>Comparable Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kubaro Transfer Pricing Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
