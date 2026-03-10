import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Trucking & Hauling', href: '/services/trucking-hauling' },
    { name: 'Aggregate Sales', href: '/services/aggregate-sales' },
    { name: 'Gravel Crushing', href: '/services/gravel-crushing' },
    { name: 'Equipment Rental', href: '/services/equipment-rental' },
    { name: 'Landscaping Supplies', href: '/services/landscaping-supplies' },
    { name: 'Pre-Cast Concrete', href: '/services/concrete' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Safety', href: '/about#safety' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  tools: [
    { name: 'Material Calculator', href: '/calculator' },
    { name: 'Request a Quote', href: '/quote' },
    { name: 'Business Hub', href: '/hub' },
    { name: 'Opportunities', href: '/opportunities' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-300">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">WC</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-tight">West Central</p>
                <p className="text-xs text-gray-400 leading-tight">Contracting LTD</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Family-owned and operated since 1980. Delivering quality aggregates,
              trucking, and construction services across western Alberta.
            </p>
            <div className="space-y-3">
              <a href="tel:7808653000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-red" /> (780) 865-3000
              </a>
              <a href="tel:7808650068" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-red" /> (780) 865-0068 (Dispatch)
              </a>
              <a href="mailto:admin@wc-con.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-brand-red" /> admin@wc-con.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-red" /> 450 East River Road, Hinton, AB T7V 2G3
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

          {/* Tools */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-brand-gray-dark rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-brand-red" />
                <span className="text-white font-semibold text-sm">Hours</span>
              </div>
              <p className="text-sm text-gray-400">Mon-Fri: 7:00 AM - 5:00 PM</p>
              <p className="text-sm text-gray-400">Sat: By Appointment</p>
              <p className="text-sm text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} West Central Contracting LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600 flex items-center gap-2">
              <ShieldIcon className="h-3 w-3" /> COR Certified
            </span>
            <span className="text-xs text-gray-600">ISNetworld</span>
            <span className="text-xs text-gray-600">ComplyWorks</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
