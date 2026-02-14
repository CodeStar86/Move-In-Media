import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, Zap, TrendingUp, Clock, Search } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function EstateAgentWebsiteSpeedOptimisationPage() {
  const speedImprovements = [
    'Image optimization and lazy loading',
    'Code minification and compression',
    'Browser caching configuration',
    'Content delivery network (CDN) setup',
    'Database query optimization',
    'Remove render-blocking resources',
    'Mobile performance optimization',
    'Core Web Vitals improvements',
  ];

  const performanceMetrics = [
    {
      icon: Clock,
      metric: 'Load Time',
      before: '5-8 seconds',
      after: 'Under 2 seconds',
      color: 'text-blue-600',
    },
    {
      icon: TrendingUp,
      metric: 'Bounce Rate',
      before: '60-70%',
      after: '30-40%',
      color: 'text-green-600',
    },
    {
      icon: Search,
      metric: 'SEO Score',
      before: '60/100',
      after: '90+/100',
      color: 'text-purple-600',
    },
    {
      icon: Zap,
      metric: 'Conversions',
      before: 'Low',
      after: '+30-50%',
      color: 'text-yellow-600',
    },
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Estate Agent Website Speed Optimisation | Faster Property Websites"
        description="Speed up your estate agent website for better Google rankings and more enquiries. Professional speed optimisation reduces load times, improves SEO, and increases conversions."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Estate Agent Website Speed Optimisation
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Make your property website lightning-fast for better rankings and more enquiries
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
                Is Your Slow Website Costing You Sales?
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Website speed isn't just about user experience - it directly impacts your bottom line. A slow estate agent website means:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>53% of mobile users leave</strong> if a page takes over 3 seconds to load</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Lower Google rankings</strong> because speed is a major ranking factor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Frustrated buyers</strong> who can't quickly browse your properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Lost enquiries</strong> from impatient visitors going to competitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Poor mobile experience</strong> on phones where most buyers browse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span><strong>Unprofessional image</strong> that damages your agency's reputation</span>
                  </li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                  <p className="font-semibold text-red-800">
                    Every second of delay can reduce conversions by 7%. A 5-second load time could be costing you 35% of potential enquiries.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NDc3Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fast Estate Agent Website"
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
              Professional Speed Optimisation Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make your estate agent website lightning-fast with proven optimisation techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Faster Load Times</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reduce page load times from 5+ seconds to under 2 seconds for instant property browsing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Better SEO Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Improve Google rankings with better Core Web Vitals and page speed scores
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <CardTitle>Mobile Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimize for mobile devices where most property buyers browse listings
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <CardTitle>More Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Faster sites convert better - expect 30-50% more enquiries with optimized speed
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Speed Optimisation Techniques
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {speedImprovements.map((improvement, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Performance Improvements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic difference speed optimisation makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <Icon className={`h-10 w-10 ${item.color} mb-3`} />
                    <CardTitle className="text-xl">{item.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-red-600 line-through">
                        <span className="text-sm font-semibold">Before: </span>
                        <span>{item.before}</span>
                      </div>
                      <div className="text-green-600 text-lg font-bold">
                        <span className="text-sm font-semibold">After: </span>
                        <span>{item.after}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Speed Impact Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Website Speed Matters for Estate Agents
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Google Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  Google uses page speed as a major ranking factor. Faster sites rank higher in search results, bringing you more organic traffic and property enquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  Property buyers expect instant results. A fast, responsive website keeps them engaged and browsing your listings instead of leaving for competitors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">More Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  Studies show 1-second delay reduces conversions by 7%. Speed up your site and watch your enquiries increase by 30-50%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Speed Optimisation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speed Audit</h3>
              <p className="text-gray-600">
                We analyze your website to identify performance bottlenecks and issues
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                We implement proven speed improvements and technical optimizations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600">
                We thoroughly test speed improvements across all devices and connections
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring</h3>
              <p className="text-gray-600">
                We provide ongoing monitoring to maintain optimal performance
              </p>
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
            Ready to Speed Up Your Estate Agent Website?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Get a free speed audit and discover how much faster your website could be
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/custom">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Request Free Speed Audit
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
