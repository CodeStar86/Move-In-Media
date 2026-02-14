import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, Search, Filter, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function PropertySearchWebsiteDevelopmentPage() {
  const searchFeatures = [
    'Advanced property filters (price, bedrooms, location, type)',
    'Interactive map-based property search',
    'Save searches and create property alerts',
    'Favourites and shortlist functionality',
    'Price range sliders and custom filters',
    'Instant search results as you type',
    'Mobile-optimized search interface',
    'Property comparison tools',
  ];

  const essentialFeatures = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Intelligent search that understands what buyers are looking for and delivers relevant results instantly',
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Multiple filter options including price, bedrooms, property type, location, and custom criteria',
    },
    {
      icon: MapPin,
      title: 'Map Integration',
      description: 'Interactive maps showing property locations with search by area functionality',
    },
    {
      icon: Star,
      title: 'Save & Alert',
      description: 'Let buyers save favourite properties and get alerts when new listings match their criteria',
    },
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Property Search Website Development | Advanced Estate Agent Search"
        description="Advanced property search website development for estate agents. Help buyers find their perfect property with intelligent search, filters, maps, and alerts. Built exclusively for property businesses."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Property Search Website Development
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Help buyers find their perfect property with advanced search functionality
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
                Why Property Search Matters
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Property buyers have high expectations. They're used to sophisticated search on Rightmove and Zoopla. If your website doesn't match up, you're losing them:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Basic search only</strong> makes it hard for buyers to find what they want</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>No filters</strong> means buyers scroll through irrelevant properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Poor mobile search</strong> frustrates buyers viewing on their phones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>No map view</strong> means buyers can't visualize property locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Slow search results</strong> cause buyers to leave in frustration</span>
                  </li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                  <p className="font-semibold text-red-800">
                    If buyers can't easily search your properties, they'll go straight to Rightmove or a competitor with better search.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGludGVyaW9yfGVufDF8fHx8MTc2OTU1NTE0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Advanced Property Search Development"
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
              Advanced Property Search That Converts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build sophisticated property search functionality that helps buyers find what they're looking for - and turns them into enquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {essentialFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Complete Property Search Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {searchFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Property Search Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless search experience that helps buyers find their perfect property
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enter Criteria</h3>
              <p className="text-gray-600 text-lg">
                Buyers enter their property requirements using intuitive search fields and filters
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Browse Results</h3>
              <p className="text-gray-600 text-lg">
                Instant results displayed with photos, key details, and map locations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Make Enquiry</h3>
              <p className="text-gray-600 text-lg">
                One-click enquiry forms turn interested buyers into valuable leads
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Benefits of Great Property Search
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">✓ For Your Agency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>• More website visitors stay longer</li>
                  <li>• Higher conversion to enquiries</li>
                  <li>• Better quality leads (pre-qualified)</li>
                  <li>• Reduced time wasted on wrong-fit buyers</li>
                  <li>• Professional image vs competitors</li>
                  <li>• Less reliance on portals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">✓ For Property Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>• Find relevant properties quickly</li>
                  <li>• Filter out unsuitable options</li>
                  <li>• Save time with smart search</li>
                  <li>• Get alerts for new properties</li>
                  <li>• Compare properties easily</li>
                  <li>• Better overall experience</li>
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
            Ready for Advanced Property Search?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Contact us to discuss your property search requirements and get a custom quote
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/custom">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                View Our Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
