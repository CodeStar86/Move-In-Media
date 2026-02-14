import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Check, X } from 'lucide-react';
import silverTemplateImage from '@/assets/images/template-silver.png';
import goldTemplateImage from '@/assets/images/template-gold.png';
import { SEO } from '@/app/components/SEO';
import { getPageSEO } from '@/lib/seo-data';

export function PackagesPage() {
  const seo = getPageSEO('packages');

  const packages = [
    {
      name: 'Silver Template Site',
      price: '£5,000',
      description: 'A professional starter template perfect for smaller agencies',
      features: [
        'Property listing showcase',
        'Contact forms',
        'Mobile responsive',
        'Basic SEO setup',
        'Fixed layout design',
        'Free management for 1 month',
      ],
      limitations: [
        'No layout changes',
        'Limited to: theme colour, logo, and font customisation only',
      ],
      link: '/templates/template-one',
      popular: false,
      image: silverTemplateImage,
    },
    {
      name: 'Gold Template Site',
      price: '£12,000',
      description: 'Our premium template with advanced features for established agencies',
      features: [
        'Advanced property showcase',
        'Testimonials section',
        'Blog/news section',
        'Mortgage calculator',
        'Rent affordability calculator',
        'Stamp duty calculator',
        'Add team members',
        'Advertise a job',
        'Advanced SEO',
        'Contact forms',
        'Mobile responsive',
        'Fixed layout design',
        'Free management for 1 month',
      ],
      limitations: [
        'No layout changes',
        'Limited to: theme colour, logo, and font customisation only',
      ],
      link: '/templates/template-two',
      popular: true,
      image: goldTemplateImage,
    },
    {
      name: 'Fully Customised',
      price: 'Contact for Quote',
      description: 'A completely bespoke website tailored to your exact requirements',
      features: [
        'Unlimited pages',
        'Custom design & layout',
        'All features from Template Two',
        'Bespoke functionality',
        'Advanced integrations',
        'Priority support',
        'Free management for 1 month',
      ],
      limitations: [],
      link: '/custom',
      popular: false,
    },
  ];

  return (
    <PublicLayout>
      <SEO {...seo} />
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Package
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed pricing, no hidden costs. All templates come with professional estate agent-focused features.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Important: Template Customisation Limits
            </h3>
            <p className="text-blue-800">
              Template packages (One & Two) have a <strong>fixed layout</strong>. You can only customize:
            </p>
            <ul className="list-disc list-inside mt-2 text-blue-800">
              <li>Theme colour (your brand colour)</li>
              <li>Logo (upload your agency logo)</li>
              <li>Font (choose from our selection)</li>
            </ul>
            <p className="mt-2 text-blue-800">
              <strong>No other design or layout changes are permitted.</strong> For full design flexibility, choose our Fully Customised package.
            </p>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? 'border-2 border-blue-600 shadow-xl' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.price.includes('£') && <span className="text-gray-500"> one-time</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {pkg.limitations.length > 0 && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-sm text-gray-900 mb-3">Limitations:</h4>
                        <ul className="space-y-2">
                          {pkg.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={pkg.link} className="w-full">
                    <Button
                      className="w-full"
                      variant={pkg.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {pkg.price.includes('£') ? 'Enquire Now' : 'Request Quote'}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Detailed Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      Template One
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      Template Two
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      Fully Customised
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Property Listings</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Blog/News Section</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Mortgage Calculator</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Rent Affordability Calculator</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Stamp Duty Calculator</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Add Team Members</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Advertise a Job</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Custom Design & Layout</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Theme Colour Customisation</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Logo Upload</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Font Selection</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}