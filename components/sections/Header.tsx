'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Trucking & Hauling', href: '/services/trucking-hauling' },
      { name: 'Aggregate Sales', href: '/services/aggregate-sales' },
      { name: 'Gravel Crushing', href: '/services/gravel-crushing' },
      { name: 'Equipment Rental', href: '/services/equipment-rental' },
      { name: 'Landscaping Supplies', href: '/services/landscaping-supplies' },
      { name: 'Pre-Cast Concrete', href: '/services/concrete' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'Business Hub', href: '/hub' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-gray-light shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-charcoal text-white text-sm">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <p className="hidden sm:block">Family-Owned &amp; Operated Since 1980 | Hinton, AB</p>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:7808653000" className="flex items-center gap-1 hover:text-brand-red transition-colors">
              <Phone className="h-3 w-3" />
              Office: (780) 865-3000
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a href="tel:7808650068" className="hidden sm:flex items-center gap-1 hover:text-brand-red transition-colors">
              Dispatch: (780) 865-0068
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">WC</span>
            </div>
            <div>
              <p className="font-heading font-bold text-brand-charcoal text-lg leading-tight">West Central</p>
              <p className="text-xs text-brand-gray-mid leading-tight">Contracting LTD</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-red transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-brand-gray-light py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-cream hover:text-brand-red transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-red transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href="/quote" className="ml-4 btn-primary text-sm px-5 py-2">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-charcoal"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-brand-gray-light py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-brand-charcoal"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-brand-gray-mid hover:text-brand-red"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-brand-charcoal hover:text-brand-red"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 px-3">
              <Link href="/quote" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
