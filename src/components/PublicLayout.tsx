import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { CookieConsent } from '@/components/CookieConsent';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isActive = (href: string) => location.pathname === href;

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
            <div className="hidden md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive(item.href)
                      ? 'text-gray-900 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Full screen menu */}
          <div className="h-full w-full bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-end p-6 border-b border-gray-200">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation links - centered */}
              <nav className="flex-1 flex items-center justify-center px-6">
                <div className="w-full max-w-md space-y-4">
                  {/* Logo centered above navigation */}
                  <div className="flex justify-center mb-8">
                    <img src={logo} alt="MoveIn Media" className="h40" />
                  </div>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl text-xl font-medium text-center transition-all ${
                        isActive(item.href)
                          ? 'bg-indigo-600 text-white shadow-xl scale-105'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Footer text */}
              <div className="p-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Professional websites for estate agents
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  © {new Date().getFullYear()} MoveIn Media
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
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={logo} alt="MoveIn Media" className="h-20" />
                </div>
                <p className="text-sm text-gray-600">
                  Professional websites designed exclusively for estate agents
                </p>
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