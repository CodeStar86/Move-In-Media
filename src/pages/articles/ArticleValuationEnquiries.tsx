import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleValuationEnquiries() {
  return (
    <PublicLayout>
      <SEO 
        title="Why Estate Agent Websites Lose Valuation Enquiries | MoveIn Media"
        description="Discover the 7 critical mistakes causing estate agents to lose valuable valuation enquiries and proven strategies to convert more website visitors into leads."
        keywords="estate agent valuation enquiries, property valuation leads, estate agent lead generation, valuation form optimization"
      />
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link to="/insights">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="font-medium text-blue-600">Lead Generation</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                14 February 2026
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                6 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Estate Agent Websites Lose Valuation Enquiries
            </h1>
            <p className="text-xl text-gray-600">
              Valuation enquiries are the lifeblood of your estate agency. Yet most websites are hemorrhaging leads through easily fixable mistakes. Here's what's going wrong—and how to fix it.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Every day, potential vendors land on your website ready to request a valuation. But according to industry data, <strong>over 65% of them leave without making contact</strong>. That's not just a statistic—that's lost revenue walking out the door.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              After analyzing hundreds of estate agent websites, we've identified the seven critical mistakes that cost agencies thousands in lost valuation enquiries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Hidden or Confusing Valuation Forms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The most common mistake? Your valuation form is buried three clicks deep under "Services" or "About Us." Potential vendors shouldn't need to hunt for it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Place a prominent "Book a Valuation" button in your header navigation, visible on every page. Make it a contrasting color that stands out. Add a floating button that stays visible as users scroll.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Asking for Too Much Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your valuation form asks for: full name, email, phone, mobile, property address, postcode, property type, bedrooms, tenure, reason for selling, preferred contact method, and best time to call.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              That's exhausting. Every additional field reduces conversion rates by an average of 11%.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Keep it simple. Name, phone, and postcode are enough to get started. You can gather additional details during the follow-up call. Test forms with just 3-4 fields against your current form—you'll be amazed at the difference.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. No Social Proof Near the Form
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vendors are making a significant decision. They're inviting you into their home and potentially trusting you to sell their biggest asset. Yet your valuation page offers no reassurance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Add trust signals immediately above or beside your valuation form:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>"Over 250 properties sold in [your area] in 2025"</li>
              <li>"Average sale price 4% over asking"</li>
              <li>Recent 5-star reviews from sellers</li>
              <li>"No obligation, free valuation"</li>
              <li>Professional accreditations (NAEA, Propertymark)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Mobile Form Disasters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Over 70% of property website visitors use mobile devices. Yet we regularly see valuation forms that are almost impossible to complete on a phone:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Text too small to read</li>
              <li>Input fields too close together (fat-finger syndrome)</li>
              <li>Submit button hidden below the fold</li>
              <li>Dropdown menus that don't work properly</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Test your valuation form on multiple mobile devices. Ensure input fields are large enough (minimum 44x44 pixels for tap targets), text is readable without zooming, and the form works perfectly on iPhone and Android.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. Slow Page Load Times
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If your valuation page takes more than 3 seconds to load, <strong>53% of mobile users will abandon it</strong>. That's before they even see your form.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Common culprits: massive uncompressed images, bloated JavaScript, too many third-party tracking scripts, and poor hosting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Use Google's PageSpeed Insights to identify specific issues. Compress images, enable browser caching, minimize JavaScript, and consider upgrading your hosting if necessary.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              6. No Instant Confirmation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A user submits your valuation form and... nothing happens. Or worse, they see a generic "Thank you, we'll be in touch" message. No confirmation email. No next steps. Just silence.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This creates anxiety. Did the form actually submit? Should they try again? Will anyone actually call them?
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Show an immediate, specific confirmation message: "Thanks [Name]! We've received your valuation request. [Agent Name] will call you within 2 hours (or by 10am tomorrow if it's after 6pm)." Send an instant confirmation email with the same message and your direct contact details.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              7. No Alternative Contact Methods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Some people simply don't want to fill out forms. They want to call, send a WhatsApp message, or use live chat. If you only offer a form, you're losing these leads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Offer multiple ways to request a valuation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Online form (primary option)</li>
              <li>Phone number (large, clickable on mobile)</li>
              <li>WhatsApp link ("Message us for an instant valuation")</li>
              <li>Live chat during business hours</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bottom Line
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fixing these seven issues can increase your valuation enquiries by 40-60% without spending a penny on additional marketing. Every enquiry that currently slips through the cracks is lost revenue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Most estate agents focus on driving more traffic to their website. But if your website is leaking leads, more traffic just means more wasted opportunity. Fix the leaks first.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Your Website Losing Valuation Enquiries?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free, no-obligation audit of your estate agent website. We'll identify exactly where you're losing leads and provide specific recommendations to fix it.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">
                  Get Your Free Website Audit
                </Button>
              </Link>
            </div>
          </div>

          {/* Author & Related */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Written by MoveIn Media</p>
                <p className="text-sm text-gray-500">Specialists in estate agent website design and optimization</p>
              </div>
              <Link to="/insights">
                <Button variant="outline">
                  More Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PublicLayout>
  );
}
