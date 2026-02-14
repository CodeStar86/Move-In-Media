import React from 'react';
import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { 
  TrendingUp, 
  Search, 
  Clock, 
  Star,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Users,
  Target,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      agencyName: 'Heritage Properties',
      location: 'Winchester, Hampshire',
      package: 'Gold Template Site',
      challenge: 'Heritage Properties had an outdated website that was slow, not mobile-friendly, and ranking poorly on Google. They were losing enquiries to larger corporate agencies in their area and needed a modern solution quickly.',
      solution: 'We implemented our Gold Template package with a premium design, integrated their Rightmove feed, optimized for "estate agents Winchester" and surrounding areas, and ensured lightning-fast mobile performance.',
      results: [
        { metric: '285%', description: 'Increase in organic traffic within 3 months' },
        { metric: '#1', description: 'Google ranking for "estate agents Winchester"' },
        { metric: '3.2s', description: 'Page load time (down from 8.7s)' },
        { metric: '67%', description: 'More contact form submissions' },
      ],
      testimonial: {
        quote: 'The difference is night and day. We\'re now appearing above the big chains on Google, and our phone is ringing more than ever. Best investment we\'ve made in years.',
        author: 'Sarah Mitchell',
        role: 'Director, Heritage Properties'
      },
      features: [
        'Advanced property search with filters',
        'Rightmove and OnTheMarket integration',
        'Instant valuation calculator',
        'Mobile-first responsive design',
        'Local SEO optimization',
        'Staff profiles and testimonials section'
      ],
      timeline: '5 weeks',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 2,
      agencyName: 'Urban Keys Estate Agents',
      location: 'Bristol City Centre',
      package: 'Fully Customised Website',
      challenge: 'Urban Keys wanted to stand out in a competitive Bristol market with a unique brand identity. They needed custom functionality including a sophisticated property matching system and integration with their custom CRM.',
      solution: 'We created a fully bespoke website with a bold, modern design that reflected their urban brand. Custom property matching algorithm, CRM integration, and advanced analytics to track lead sources.',
      results: [
        { metric: '420%', description: 'ROI in first 6 months' },
        { metric: '189', description: 'New enquiries per month (up from 71)' },
        { metric: '4.8/5', description: 'Average user satisfaction score' },
        { metric: '52%', description: 'Improvement in time on site' },
      ],
      testimonial: {
        quote: 'We needed something special to compete with the established agencies. MoveIn Media delivered beyond our expectations. The custom property matching has become our unique selling point.',
        author: 'James Chen',
        role: 'Founder, Urban Keys'
      },
      features: [
        'Completely custom design and UX',
        'Intelligent property matching algorithm',
        'Custom CRM integration (Alto)',
        'Advanced lead tracking and analytics',
        'Video property tours integration',
        'Multi-office management system',
        'Automated email marketing integration'
      ],
      timeline: '10 weeks',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const keyMetrics = [
    {
      icon: TrendingUp,
      stat: '285%',
      label: 'Average Traffic Increase',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Search,
      stat: '#1-3',
      label: 'Average Google Rankings',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      stat: '3.5s',
      label: 'Average Load Time',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Star,
      stat: '4.9/5',
      label: 'Client Satisfaction',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Case Studies | Real Results for Estate Agents"
        description="See real examples of estate agent websites we've built and the results they've achieved. Increased traffic, better rankings, and more enquiries."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Case Studies
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Real estate agents, real websites, real results - see how we've helped agencies like yours succeed online
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results That Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the average results our estate agent clients achieve
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.stat}</div>
                    <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="max-w-6xl mx-auto">
                {/* Study Header */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                    <span className="text-blue-800 font-bold text-sm">{study.package}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    {study.agencyName}
                  </h2>
                  <p className="text-xl text-gray-600">{study.location}</p>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
                  <ImageWithFallback 
                    src={study.imageUrl}
                    alt={`${study.agencyName} website`}
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Challenge */}
                  <Card className="bg-white border-2 border-red-100 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-600">
                        <Target className="h-5 w-5 mr-2" />
                        The Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{study.challenge}</p>
                    </CardContent>
                  </Card>

                  {/* Solution */}
                  <Card className="bg-white border-2 border-blue-100 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-600">
                        <Zap className="h-5 w-5 mr-2" />
                        Our Solution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{study.solution}</p>
                    </CardContent>
                  </Card>

                  {/* Timeline */}
                  <Card className="bg-white border-2 border-green-100 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-600">
                        <Clock className="h-5 w-5 mr-2" />
                        Project Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-6">
                        <div className="text-5xl font-bold text-gray-900 mb-2">
                          {study.timeline}
                        </div>
                        <p className="text-gray-600">From kickoff to launch</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-12">
                  <h3 className="text-3xl font-bold text-white text-center mb-8">
                    The Results
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          {result.metric}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {result.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Implemented */}
                <Card className="bg-white shadow-lg mb-12">
                  <CardHeader>
                    <CardTitle className="text-2xl">Features Implemented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-gray-700 italic mb-6">
                        "{study.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-bold text-gray-900">{study.testimonial.author}</p>
                        <p className="text-gray-600">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between case studies */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-20 border-t-2 border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Success Factors */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Makes These Projects Successful?
              </h2>
              <p className="text-xl text-gray-600">
                The common factors behind every successful estate agent website we build
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    Industry Specialization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We only build websites for estate agents, so we understand exactly what features you need and what converts visitors into enquiries.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    Local SEO Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Every site is optimized for local search from day one. We target "[your town] estate agents" and related terms that actually bring in buyers and sellers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    Mobile-First Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    70%+ of property searches happen on mobile. We design for mobile first, ensuring perfect experiences on every device.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">4</span>
                    </div>
                    Speed Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Fast websites rank better and convert better. Every site is optimized for lightning-fast load times on all connections.
                  </p>
                </CardContent>
              </Card>
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
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Let's create a website that generates results like these for your estate agency
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/free-website-audit">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Get Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 border-white font-semibold">
                View Packages
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">✓</div>
              <p className="font-semibold">Proven Process</p>
              <p className="text-sm text-blue-100">From discovery to launch</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">✓</div>
              <p className="font-semibold">Real Results</p>
              <p className="text-sm text-blue-100">More traffic and enquiries</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">✓</div>
              <p className="font-semibold">Industry Experts</p>
              <p className="text-sm text-blue-100">Estate agents only</p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
