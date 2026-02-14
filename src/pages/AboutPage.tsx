import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/SEO';

export function AboutPage() {
  return (
    <PublicLayout>
      <SEO 
        title="About Us" 
        description="Learn about MoveIn Media - specialists in creating professional websites exclusively for estate agents across the UK."
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              About MoveIn Media
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
              Your trusted partner for professional estate agent websites
            </p>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why We Specialize in Estate Agents
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Estate agent websites have unique requirements that generic web designers simply don't understand. Your website isn't just a digital brochure - it's your most powerful sales tool, working 24/7 to attract buyers, generate leads, and showcase properties.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We've spent years perfecting estate agent websites. We understand the property search functionality buyers expect, the trust signals that convert visitors into enquiries, and the local SEO strategies that get you ranking for "[your town] estate agents". We know that 70% of property searches now start on mobile devices, and we build accordingly.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By focusing exclusively on estate agents, we've created proven templates, optimized conversion paths, and integrated with the exact tools you use daily - Rightmove, Zoopla, OnTheMarket, and major CRM systems.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                <strong>The result?</strong> Websites that don't just look professional - they generate enquiries, rank on Google, and help you compete with the big corporate agencies in your area.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758520144587-3ac9072573c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTc3NDkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="MoveIn Media - Professional Estate Agent Websites"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Estate Agent Challenge Section */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Estate Agent Website Challenge
              </h2>
              <p className="text-xl text-gray-600">
                We understand the specific problems you face
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Generic Templates Don't Work</h3>
                <p className="text-gray-600">
                  WordPress themes and generic builders lack property search, portal integration, and estate agent-specific features.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Poor Local SEO</h3>
                <p className="text-gray-600">
                  You're invisible on Google for "estate agents [your town]" - losing leads to competitors every single day.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Slow, Outdated Sites</h3>
                <p className="text-gray-600">
                  Your current website takes 5+ seconds to load, looks unprofessional on mobile, and drives buyers away.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Clear Path to Enquiries</h3>
                <p className="text-gray-600">
                  Visitors can't easily contact you, book valuations, or find property details - so they leave.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                We Solve These Problems
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Every website we build is designed specifically for estate agents, with proven features that generate enquiries and rank on Google. No generic templates. No guesswork. Just results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer three carefully designed packages to suit estate agents at every stage of growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  £5,000
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Silver Template</h3>
                <p className="text-gray-600 mb-6">
                  A professional, clean design perfect for growing estate agencies looking to establish their online presence.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-400">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-800 mb-4">
                  £12,000
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gold Template</h3>
                <p className="text-gray-600 mb-6">
                  Premium features and enhanced design for established agencies wanting to make a lasting impression.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-4">
                  Custom Quote
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Customised</h3>
                <p className="text-gray-600 mb-6">
                  A completely bespoke website tailored to your exact requirements and brand vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MoveIn Media?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just web developers - we're estate agent website specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                We specialize exclusively in estate agent websites, so we understand your unique needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Get your professional website launched quickly without compromising on quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fixed Pricing</h3>
              <p className="text-gray-600">
                No hidden costs or surprises - you know exactly what you're paying upfront.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Optimized</h3>
              <p className="text-gray-600">
                Every website is fully responsive and looks perfect on all devices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">
                Built with search engine optimization in mind to help you rank better.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-600">
                Personalize your site with your colors, fonts, and branding.
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white mb-10 drop-shadow-md">
            Let's create a stunning website that helps your estate agency thrive online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://gold-template-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                View Our Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400 font-semibold">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}