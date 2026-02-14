import React from 'react';
import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { 
  MessageSquare, 
  ClipboardCheck, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  FileText
} from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ProcessPage() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Discovery Call',
      duration: '30-60 minutes',
      description: 'We start with a detailed discussion about your estate agency, your goals, target audience, and what you need from your website.',
      deliverables: [
        'Understanding of your business and target market',
        'Clear picture of your requirements',
        'Package recommendation',
        'Project timeline and quote'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: 'Requirements & Planning',
      duration: '3-5 days',
      description: 'We document everything - your brand guidelines, content requirements, features needed, and integrations with Rightmove, Zoopla, or your CRM.',
      deliverables: [
        'Detailed project specification',
        'Content collection checklist',
        'Technical requirements document',
        'Access to project management system'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      number: 3,
      icon: Palette,
      title: 'Design & Branding',
      duration: '1-2 weeks',
      description: 'We apply your brand colors, fonts, and logo to your chosen template, or create a completely custom design for bespoke projects.',
      deliverables: [
        'Branded design mockups',
        'Mobile and desktop previews',
        '2 rounds of design revisions',
        'Sign-off before development'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      number: 4,
      icon: Code,
      title: 'Development',
      duration: '2-4 weeks',
      description: 'Our developers build your website with clean code, fast performance, SEO optimization, and all the estate agent features you need.',
      deliverables: [
        'Fully functional website',
        'Property search integration',
        'Portal feeds (Rightmove/Zoopla)',
        'Contact forms and enquiry system',
        'Mobile-responsive design'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      number: 5,
      icon: TestTube,
      title: 'Testing & Review',
      duration: '3-5 days',
      description: 'Rigorous testing on all devices and browsers. You review the staging site and we make any final adjustments before launch.',
      deliverables: [
        'Staging site for your review',
        'Final revisions and tweaks',
        'Performance optimization',
        'SEO audit completion'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      number: 6,
      icon: Rocket,
      title: 'Launch & Handover',
      duration: '1-2 days',
      description: 'We launch your new website, set up analytics, provide training, and ensure everything is running perfectly.',
      deliverables: [
        'Live website launch',
        'Training session (1 hour)',
        'Admin access and documentation',
        '30 days post-launch support'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ];

  const timelines = [
    {
      package: 'Silver Template Site',
      timeline: '3-4 weeks',
      price: '£5,000',
      description: 'Fast-track launch for growing agencies',
      features: ['Pre-designed template', 'Brand customization', 'Standard features']
    },
    {
      package: 'Gold Template Site',
      timeline: '4-6 weeks',
      price: '£12,000',
      description: 'Enhanced features and premium design',
      features: ['Premium template', 'Advanced features', 'Priority support']
    },
    {
      package: 'Fully Customised',
      timeline: '8-12 weeks',
      price: 'Custom quote',
      description: 'Completely bespoke solution',
      features: ['Unique design', 'Custom functionality', 'Unlimited revisions']
    }
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Our Process | How We Build Estate Agent Websites"
        description="See exactly how we design and build professional estate agent websites. From discovery to launch, we guide you through every step with transparency and expertise."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Our Website Build Process
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              A proven, transparent approach to creating estate agent websites that generate enquiries and rank on Google
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Simple, Transparent, Effective
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We've perfected a 6-step process that takes you from initial consultation to a live, high-performing website. No surprises, no confusion - just clear milestones and regular communication.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Clear Timelines</p>
                    <p className="text-sm text-gray-600">Know exactly when to expect each stage</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Collaborative</p>
                    <p className="text-sm text-gray-600">Your input at every key decision point</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <FileText className="h-8 w-8 text-pink-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Documented</p>
                    <p className="text-sm text-gray-600">Everything recorded and accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The 6-Step Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first contact to successful launch, here's exactly what happens
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Step Number and Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="mt-3 text-center">
                          <span className="text-2xl font-bold text-gray-900">#{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full ${step.bgColor} mt-2 md:mt-0`}>
                            <Clock className={`h-4 w-4 ${step.textColor} mr-2`} />
                            <span className={`text-sm font-semibold ${step.textColor}`}>
                              {step.duration}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 text-lg">
                          {step.description}
                        </p>

                        <div className={`${step.bgColor} rounded-lg p-4`}>
                          <h4 className={`text-sm font-bold ${step.textColor} mb-3 uppercase tracking-wide`}>
                            Deliverables:
                          </h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle2 className={`h-5 w-5 ${step.textColor} mr-2 flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-700">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Comparison */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Timelines by Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that matches your timeline and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {timelines.map((item, index) => (
              <Card key={index} className={`border-2 ${index === 1 ? 'border-yellow-400 shadow-xl' : 'border-gray-200 shadow-lg'} hover:shadow-2xl transition-shadow`}>
                <CardHeader>
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-center pt-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{item.timeline}</div>
                    <CardTitle className="text-2xl mb-2">{item.package}</CardTitle>
                    <p className="text-3xl font-bold text-indigo-600 mb-2">{item.price}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What You Need to Provide */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Need From You
              </h2>
              <p className="text-xl text-gray-600">
                To ensure a smooth project, here's what we'll ask you to provide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    Brand Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Logo files (vector format preferred)</li>
                    <li>• Brand colors (hex codes)</li>
                    <li>• Font preferences</li>
                    <li>• Any existing brand guidelines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Company description and about text</li>
                    <li>• Staff photos and bios</li>
                    <li>• Service descriptions</li>
                    <li>• Testimonials (if available)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 font-bold">3</span>
                    </div>
                    Technical Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Domain name (or we can help register)</li>
                    <li>• Rightmove/Zoopla feed details</li>
                    <li>• CRM system information</li>
                    <li>• Google Analytics account</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    Feedback & Approvals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Timely feedback on designs</li>
                    <li>• Sign-off at key milestones</li>
                    <li>• Testing the staging site</li>
                    <li>• Final launch approval</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Don't worry if you're missing something!</h3>
                  <p className="text-gray-700">
                    We'll guide you through everything you need and can help source content, images, or recommend copywriters if needed. Many agencies don't have everything ready at the start - that's completely normal.
                  </p>
                </div>
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
            Let's discuss your project and create a timeline that works for you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/free-website-audit">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Get Free Audit
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 border-white font-semibold">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}