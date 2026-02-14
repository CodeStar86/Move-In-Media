import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, Building2, Palette, Zap, Shield, ExternalLink } from 'lucide-react';
import silverTemplateImage from '@/assets/images/template-silver.png';
import goldTemplateImage from '@/assets/images/template-gold.png';
import developerImage from '@/assets/images/developer.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';
import { getPageSEO } from '@/lib/seo-data';

export function Homepage() {
  const seo = getPageSEO('home');
  const features = [
    {
      icon: Building2,
      title: 'Estate Agent Focused',
      description: 'Websites built exclusively for estate agents with industry-specific features.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTQ3NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Customisable Design',
      description: 'Choose your colors, fonts, and upload your logo to match your brand.',
      image: 'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGludGVyaW9yfGVufDF8fHx8MTc2OTU1NTE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your professional website up and running quickly.',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk0NzQzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-yellow-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'Fixed Pricing',
      description: 'No hidden costs. Know exactly what you\'re paying upfront.',
      image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NDc3Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-teal-500 to-cyan-600'
    },
  ];

  const benefits = [
    'Showcase your property listings beautifully',
    'Mobile-responsive design',
    'SEO-optimized structure',
    'Contact forms and enquiry management',
    'Professional and trustworthy appearance',
    'Easy to maintain and update',
  ];

  return (
    <PublicLayout>
      <SEO 
        title={seo.title} 
        description={seo.description}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-32 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                Websites Built Exclusively for
                <span className="text-yellow-300"> Estate Agents</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white drop-shadow-md">
                If you're an estate agent looking to showcase your properties professionally online, we build websites designed specifically for the property industry. Fixed pricing, fast delivery, no hidden costs.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Link to="/packages">
                  <Button size="lg" className="text-lg px-8 py-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                    View Packages
                  </Button>
                </Link>
                <Link to="/custom">
                  <Button size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
                    Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTczODUwOTYwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Estate Agent Website"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Help Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work exclusively with property professionals who need a strong online presence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Estate Agency Owners</h3>
              <p className="text-gray-600">
                Independent estate agents looking to establish or upgrade their online presence
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Estate Agency Branches</h3>
              <p className="text-gray-600">
                Branch offices needing their own dedicated website to serve local markets
              </p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Property Businesses</h3>
              <p className="text-gray-600">
                Property specialists, letting agents, and residential sales businesses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose MoveIn Media?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Built specifically for estate agents by web development professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-0">
                  <div className={`h-48 bg-gradient-to-br ${feature.color} relative`}>
                    <ImageWithFallback 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <Icon className="absolute bottom-4 right-4 h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Template Demos Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">See Our Templates in Action</h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore live examples of our professional estate agent websites
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Silver Template Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    £5,000 Package
                  </span>
                </div>
                <CardTitle className="text-2xl">Silver Template Site</CardTitle>
                <CardDescription>
                  A professional, clean design perfect for growing estate agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src={silverTemplateImage} 
                    alt="Silver Template Site Preview" 
                    className="aspect-video rounded-lg border-2 border-gray-200 object-cover w-full"
                  />
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-green-800">
                      Includes Free Management for 1 Month
                    </p>
                  </div>
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
                  <Link to="/templates/template-one" className="block">
                    <Button className="w-full">
                      Get This Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Gold Template Card */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-yellow-400">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    £12,000 Package
                  </span>
                </div>
                <CardTitle className="text-2xl">Gold Template Site</CardTitle>
                <CardDescription>
                  Premium features and enhanced design for established agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src={goldTemplateImage} 
                    alt="Gold Template Site Preview" 
                    className="aspect-video rounded-lg border-2 border-gray-200 object-cover w-full"
                  />
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-green-800">
                      Includes Free Management for 1 Month
                    </p>
                  </div>
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
                  <Link to="/templates/template-two" className="block">
                    <Button className="w-full">
                      Get This Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Developer Bio Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About MoveIn Media
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                MoveIn Media specializes in creating beautiful, high-performance websites exclusively for estate agents. We understand the property industry inside and out, and we know exactly what your business needs to stand out online.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Every website we build is crafted with attention to detail, focusing on user experience, mobile responsiveness, and search engine optimization. We're committed to delivering exceptional results that help your agency grow and attract more clients.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you need a quick-launch template site or a fully customized solution, we have the expertise and packages to match your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://gold-template-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    View Our Work
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/custom">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1650784853637-685e590ecb73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3Njk3NjU2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="MoveIn Media - Professional Estate Agent Websites"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Choose from our fixed-price templates or request a custom quote for a fully bespoke website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/packages">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                View Templates & Pricing
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