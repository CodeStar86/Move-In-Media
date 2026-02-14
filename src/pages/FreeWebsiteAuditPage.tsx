import React from 'react';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Check, AlertTriangle, Search, Zap, TrendingUp, Shield, Clock, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';
import { getPageSEO } from '@/lib/seo-data';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function FreeWebsiteAuditPage() {
  const seo = getPageSEO('freeAudit');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    agencyName: '',
    contactName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    mainConcerns: '',
  });

  const auditChecks = [
    {
      icon: Search,
      title: 'SEO Analysis',
      description: 'We check your search engine rankings, meta tags, heading structure, and local SEO optimization',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Zap,
      title: 'Speed Performance',
      description: 'We measure page load times, Core Web Vitals, and identify what\'s slowing your website down',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
    },
    {
      icon: Eye,
      title: 'User Experience',
      description: 'We analyze navigation, property search functionality, mobile responsiveness, and conversion paths',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'We evaluate your contact forms, calls-to-action, and lead capture effectiveness',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'We check SSL certificates, GDPR compliance, and website security vulnerabilities',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'Technical Health',
      description: 'We identify broken links, missing images, outdated technology, and technical errors',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  const commonProblems = [
    'Poor Google rankings - not appearing for local estate agent searches',
    'Slow loading speeds (5+ seconds) causing high bounce rates',
    'Outdated design that looks unprofessional on modern devices',
    'Poor mobile experience losing 60%+ of potential buyers',
    'Difficult property search frustrating visitors',
    'No clear calls-to-action resulting in few enquiries',
    'Missing or poor SEO optimization',
    'Broken functionality and outdated technology',
    'Not mobile-responsive or mobile-friendly',
    'Security warnings or missing SSL certificates',
  ];

  const whatYouLearn = [
    {
      title: 'Exact SEO Issues',
      description: 'See exactly why you\'re not ranking on Google and what needs to be fixed',
    },
    {
      title: 'Speed Problems',
      description: 'Discover what\'s slowing your website down and costing you enquiries',
    },
    {
      title: 'Mobile Issues',
      description: 'Understand how your website performs on phones and tablets',
    },
    {
      title: 'Conversion Blockers',
      description: 'Find out why visitors aren\'t turning into leads and how to fix it',
    },
    {
      title: 'Competitor Comparison',
      description: 'See how your website stacks up against local competitor estate agents',
    },
    {
      title: 'Prioritized Action Plan',
      description: 'Get a clear roadmap of what to fix first for maximum impact',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.agencyName || !formData.contactName || !formData.email || !formData.websiteUrl) {
        toast.error('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      // Submit to server
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/enquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            type: 'Free Website Audit',
            agencyName: formData.agencyName,
            contactName: formData.contactName,
            email: formData.email,
            phone: formData.phone,
            websiteUrl: formData.websiteUrl,
            message: `Main concerns: ${formData.mainConcerns || 'Not specified'}`,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Failed to submit audit request');
      }

      toast.success('Audit request submitted! We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        agencyName: '',
        contactName: '',
        email: '',
        phone: '',
        websiteUrl: '',
        mainConcerns: '',
      });
    } catch (error) {
      toast.error('Failed to submit audit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PublicLayout>
      <SEO 
        title={seo.title}
        description={seo.description}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400 rounded-full mb-6">
              <span className="text-gray-900 font-bold text-sm">100% FREE - NO OBLIGATION</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Free Estate Agent Website Audit
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Discover exactly what's holding your website back from ranking on Google and generating more enquiries
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Detailed SEO Analysis</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Speed & Performance Check</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Actionable Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Check Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your Free Audit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We perform a comprehensive analysis of your estate agent website to identify every issue affecting your rankings and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditChecks.map((check, index) => {
              const Icon = check.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-14 h-14 ${check.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${check.color}`} />
                    </div>
                    <CardTitle className="text-xl">{check.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{check.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Common Problems Section */}
      <div className="bg-red-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Problems We Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the most frequent issues costing estate agents thousands in lost enquiries
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-red-200 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {commonProblems.map((problem, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-xs">✗</span>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-gray-900 mb-3">
                Does any of this sound familiar?
              </p>
              <p className="text-lg text-gray-600">
                Our free audit will identify exactly which issues are affecting your website and provide a clear plan to fix them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn From Your Audit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get specific, actionable insights you can use immediately - whether you work with us or not
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatYouLearn.map((item, index) => (
              <Card key={index} className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Audit Report Includes:
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                    <p className="text-gray-700 font-medium">Checks Performed</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                    <p className="text-gray-700 font-medium">Page Report</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-pink-600 mb-2">24hrs</div>
                    <p className="text-gray-700 font-medium">Delivery Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Request Form Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Request Your Free Website Audit
            </h2>
            <p className="text-xl text-white drop-shadow-md">
              Fill in the form below and we'll send you a comprehensive audit report within 24 hours
            </p>
            <div className="mt-6 inline-block px-6 py-3 bg-yellow-400 rounded-lg">
              <p className="text-gray-900 font-bold">
                🎁 100% Free • No Credit Card Required • No Obligation
              </p>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="agencyName">Estate Agency Name *</Label>
                    <Input
                      id="agencyName"
                      name="agencyName"
                      value={formData.agencyName}
                      onChange={handleChange}
                      placeholder="Your Agency Name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName">Your Name *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@youragency.co.uk"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="020 1234 5678"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="websiteUrl">Your Current Website URL *</Label>
                  <Input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="url"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://www.youragency.co.uk"
                    required
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter the full URL including https://
                  </p>
                </div>

                <div>
                  <Label htmlFor="mainConcerns">Main Concerns (Optional)</Label>
                  <Textarea
                    id="mainConcerns"
                    name="mainConcerns"
                    value={formData.mainConcerns}
                    onChange={handleChange}
                    placeholder="Tell us about any specific issues or concerns with your current website..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <div className="flex">
                    <Shield className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Your privacy matters:</strong> We'll only use your information to send you the audit report. No spam, ever.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-6"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Audit Report →'}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  * Required fields. By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Trust Signals */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">⚡</div>
              <p className="font-semibold">24-Hour Delivery</p>
              <p className="text-sm text-blue-100">Get your audit fast</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">✓</div>
              <p className="font-semibold">Expert Analysis</p>
              <p className="text-sm text-blue-100">From estate agent specialists</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📊</div>
              <p className="font-semibold">Actionable Insights</p>
              <p className="text-sm text-blue-100">Clear next steps included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Benefits Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Estate Agents Choose Our Audit
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Industry Specific</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We specialize in estate agent websites and understand your unique challenges and requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Results Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our recommendations focus on increasing rankings, traffic, and most importantly - enquiries
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>No Pressure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This is genuinely free advice. Use it yourself or work with us - the choice is yours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}