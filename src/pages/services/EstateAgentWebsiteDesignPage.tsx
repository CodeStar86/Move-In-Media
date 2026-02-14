import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, ExternalLink, Building2, Palette, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function EstateAgentWebsiteDesignPage() {
  const features = [
    'Property listing showcase with advanced filters',
    'Mobile-responsive design that works on all devices',
    'Contact forms and enquiry management',
    'Mortgage calculator integration',
    'SEO-optimized structure for local search',
    'Professional brand presentation',
    'Fast loading speeds',
    'GDPR compliant contact forms',
  ];

  const packages = [
    {
      name: 'Silver Template Site',
      price: '£5,000',
      description: 'Perfect for growing estate agencies',
      features: [
        'Pre-designed professional template',
        'Customise colors and fonts to match your brand',
        'Property listing pages',
        'Contact forms',
        'Mobile responsive',
        'Free management for 1 month',
      ],
    },
    {
      name: 'Gold Template Site',
      price: '£12,000',
      description: 'Enhanced features for established agencies',
      features: [
        'Premium template design',
        'Advanced customisation options',
        'Enhanced property search functionality',
        'Interactive maps',
        'Newsletter integration',
        'Free management for 1 month',
      ],
      featured: true,
    },
    {
      name: 'Fully Customised',
      price: 'Custom Quote',
      description: 'Bespoke solution tailored to your needs',
      features: [
        'Completely unique design',
        'Custom functionality',
        'Unlimited pages',
        'Advanced integrations',
        'Ongoing support options',
        'Your vision brought to life',
      ],
    },
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Estate Agent Website Design | Professional Websites for Estate Agents"
        description="Professional website design for estate agents. Showcase your properties beautifully with our fixed-price packages. Mobile-responsive, SEO-optimized, and built exclusively for the property industry."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Estate Agent Website Design
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Professional website design built exclusively for estate agents
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Problem Estate Agents Face
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Your website is often the first impression potential clients have of your agency. But many estate agents struggle with:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Generic website templates that don't showcase properties properly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Websites that look unprofessional or outdated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Poor mobile experience losing you potential buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Web designers who don't understand the property industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Unclear pricing and hidden costs that blow your budget</span>
                  </li>
                </ul>
                <p className="font-semibold text-gray-900 pt-4">
                  Without a professional website, you're losing potential clients to competitors every single day.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTczODUwOTYwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Estate Agent Website Design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Solution: Professional Estate Agent Website Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design websites exclusively for estate agents, with everything you need to showcase properties and win more clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Estate Agent Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built specifically for the property industry with features estate agents actually need
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Your Brand, Your Way</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Customise colors, fonts, and upload your logo to match your agency branding
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get your professional website up and running quickly without long delays
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Fixed Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No hidden costs or surprises - you know exactly what you're paying upfront
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What's Included in Every Website
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Website Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed pricing with no hidden costs - select the package that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`${pkg.featured ? 'border-2 border-yellow-400 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-shadow`}
              >
                <CardHeader>
                  {pkg.featured && (
                    <div className="text-center mb-2">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-2xl text-center">{pkg.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <CardDescription className="text-center text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={pkg.price === 'Custom Quote' ? '/custom' : '/packages'} className="block">
                    <Button className="w-full" variant={pkg.featured ? 'default' : 'outline'}>
                      {pkg.price === 'Custom Quote' ? 'Get Custom Quote' : 'View Details'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Live Examples Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Estate Agent Websites in Action
            </h2>
            <p className="text-xl text-gray-600">
              View live examples of our professional estate agent website designs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Silver Template Example</CardTitle>
                <CardDescription>Clean, professional design for growing agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://silver-template-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" variant="outline">
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Gold Template Example</CardTitle>
                <CardDescription>Premium design for established agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://gold-template-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" variant="outline">
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Get a Professional Estate Agent Website?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Get a fixed-price quote today and start attracting more property clients online
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/packages">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                View Packages & Pricing
              </Button>
            </Link>
            <Link to="/custom">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}