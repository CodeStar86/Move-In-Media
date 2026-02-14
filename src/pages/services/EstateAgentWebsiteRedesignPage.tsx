import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, RefreshCw, Zap, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function EstateAgentWebsiteRedesignPage() {
  const modernizationFeatures = [
    'Modern, mobile-responsive design',
    'Improved property showcase functionality',
    'Faster loading speeds',
    'Better search engine optimization',
    'Updated contact forms and lead capture',
    'Enhanced user experience',
    'Professional brand presentation',
    'Integration with modern tools',
  ];

  const redesignProcess = [
    {
      step: '1',
      title: 'Website Audit',
      description: 'We analyze your current website to identify issues and opportunities for improvement',
    },
    {
      step: '2',
      title: 'Strategy & Planning',
      description: 'We create a redesign plan that addresses your specific needs and business goals',
    },
    {
      step: '3',
      title: 'Design & Build',
      description: 'We build your new website with modern technology and estate agent best practices',
    },
    {
      step: '4',
      title: 'Launch & Support',
      description: 'We launch your redesigned website and provide ongoing support to ensure success',
    },
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Estate Agent Website Redesign | Modernise Your Property Website"
        description="Redesign your outdated estate agent website with modern, mobile-responsive design. Improve property showcase, speed, and SEO to attract more clients. Fixed pricing, no hidden costs."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Estate Agent Website Redesign
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Modernise your outdated website and start attracting more property clients
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
                Is Your Website Costing You Clients?
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Your estate agent website might be actively driving potential clients away. Common problems we see:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Outdated design</strong> that makes your agency look unprofessional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Poor mobile experience</strong> losing you 60%+ of potential buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Slow loading speeds</strong> causing visitors to leave immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Difficult property search</strong> frustrating potential buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Poor Google rankings</strong> so clients can't even find you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Broken functionality</strong> and outdated technology</span>
                  </li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                  <p className="font-semibold text-red-800">
                    Every day you wait, you're losing potential clients to competitors with modern websites.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTQ3NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Estate Agent Website Redesign"
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
              Transform Your Estate Agent Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We redesign outdated estate agent websites with modern technology and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Complete Modernization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fresh, modern design that makes your agency look professional and trustworthy
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Performance Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lightning-fast loading speeds that keep visitors engaged and improve SEO
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <CardTitle>Mobile-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Beautiful, responsive design that works perfectly on phones, tablets, and desktops
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Better SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimized for search engines so more potential clients can find your agency
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What You Get with a Website Redesign
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {modernizationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Website Redesign Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process for modernising your estate agent website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redesignProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Before & After: What Changes?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">❌ Before Redesign</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Outdated design from 5+ years ago</li>
                  <li>• Doesn't work properly on mobile</li>
                  <li>• Slow loading speeds (5+ seconds)</li>
                  <li>• Poor search engine rankings</li>
                  <li>• Difficult property search</li>
                  <li>• High bounce rate</li>
                  <li>• Few enquiries or leads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">✓ After Redesign</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Modern, professional design</li>
                  <li>• Perfect mobile experience</li>
                  <li>• Lightning-fast loading (under 2 seconds)</li>
                  <li>• Improved Google rankings</li>
                  <li>• Easy, intuitive property search</li>
                  <li>• Lower bounce rate, higher engagement</li>
                  <li>• More enquiries and leads</li>
                </ul>
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
            Ready to Redesign Your Estate Agent Website?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Get a free website audit and discover how we can transform your online presence
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/custom">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Request Free Website Audit
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                View Redesign Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
