import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { CookieConsent } from '@/components/CookieConsent';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Packages', href: '/packages' },
    { name: 'Insights', href: '/insights' },
    { name: 'FAQ', href: '/faq' },
  ];

  const services = [
    { name: 'Website Design', href: '/services/estate-agent-website-design' },
    { name: 'Website Redesign', href: '/services/estate-agent-website-redesign' },
    { name: 'Property Search Development', href: '/services/property-search-website-development' },
    { name: 'Speed Optimisation', href: '/services/estate-agent-website-speed-optimisation' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => location.pathname.startsWith('/services/');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-md bg-white/70">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="MoveIn Media" className="h-20 sm:h-22" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                    isServicesActive()
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Free Audit CTA Button */}
              <Link to="/free-website-audit" className="ml-3">
                <button className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors shadow-sm">
                  Free Audit
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors relative z-[60]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Slide-in menu */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="relative flex items-center justify-center px-5 py-4 border-b border-gray-100">
                <img src={logo} alt="MoveIn Media" className="h-22" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-0.5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                        isActive(item.href)
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Services Section */}
                  <div className="pt-4 pb-1">
                    <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                      Services
                    </div>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-[14px] transition-all ${
                        location.pathname === service.href
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Footer with CTA */}
              <div className="px-4 py-4 border-t border-gray-100 bg-gray-50/50">
                <Link 
                  to="/free-website-audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <button className="w-full px-4 py-3 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-colors shadow-sm text-[15px]">
                    Get Free Website Audit
                  </button>
                </Link>
                <p className="text-[11px] text-gray-500 text-center mt-2.5 leading-tight">
                  Professional websites for estate agents
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Mobile: Single column layout */}
          <div className="md:hidden space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src={logo} alt="MoveIn Media" className="h-16" />
              </div>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Professional websites designed exclusively for estate agents
              </p>
            </div>

            <div className="border-t pt-8 text-center space-y-6">
              <div className="space-y-3">
                <Link to="/packages" className="block text-sm text-gray-600 hover:text-blue-600">
                  Packages
                </Link>
                <Link to="/faq" className="block text-sm text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
                <Link to="/privacy" className="block text-sm text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-sm text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
                <Link to="/admin/login" className="block text-sm text-gray-400 hover:text-gray-600">
                  Admin
                </Link>
              </div>
            </div>

            <div className="border-t pt-6 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} MoveIn Media. All rights reserved.
              </p>
            </div>
          </div>

          {/* Desktop: Three column layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={logo} alt="MoveIn Media" className="h-20" />
                </div>
                <p className="text-sm text-gray-600">
                  Professional websites designed exclusively for estate agents
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link to={service.href} className="text-sm text-gray-600 hover:text-blue-600">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/packages" className="text-sm text-gray-600 hover:text-blue-600">
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm text-gray-600 hover:text-blue-600">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/login" className="text-sm text-gray-400 hover:text-gray-600">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} MoveIn Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}