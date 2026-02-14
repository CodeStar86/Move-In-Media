import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleIncreaseViewings() {
  return (
    <PublicLayout>
      <SEO 
        title="How to Increase Property Viewings Through Better Website Design | MoveIn Media"
        description="Strategic website design can increase viewing requests by 40%. Learn exactly how to optimize your estate agent website to convert browsers into viewers."
        keywords="increase property viewings, viewing requests, estate agent conversion optimization, website conversion rate"
      />
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <Link to="/insights">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="font-medium text-blue-600">Conversion</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />2 February 2026</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Increase Property Viewings Through Better Website Design
            </h1>
            <p className="text-xl text-gray-600">
              Traffic alone doesn't pay the bills. Converting website visitors into viewing requests does. Here's how to optimize your estate agent website for conversions.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Your website gets 2,000 visitors per month. But only 30 viewing requests. That's a 1.5% conversion rate. The best estate agent websites achieve 4-5%. That difference could mean an extra 70 viewing requests per month—and significantly more instructions and sales.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Make "Request a Viewing" Obvious
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The viewing request button should be impossible to miss. Use contrasting colors, make it large, place it prominently above the fold, and repeat it multiple times on property pages—at the top, after photos, and at the bottom. Consider a sticky button that follows as users scroll.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Show Properties at Their Best
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              High-quality, professional photography can increase viewing requests by 30-40%. Ensure every property has at least 15-20 professional photos, properly lit and expertly framed. Include floor plans, virtual tours, and video walkthroughs where possible. The better the presentation, the more viewings you'll book.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. Reduce Friction in the Viewing Request Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every additional field in your viewing request form reduces completion rates. Ask for the absolute minimum: name, phone or email, preferred date/time. You can gather more details during the viewing itself. Make the form work perfectly on mobile. Offer alternative contact methods like instant call buttons or WhatsApp.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Add Urgency and Scarcity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              "2 viewings booked today" or "High demand - 5 viewings this week" creates FOMO. Show how many times a property has been viewed on your website. Mention if a property is newly listed or recently reduced. These psychological triggers encourage immediate action rather than "I'll think about it."
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. Showcase Social Proof on Property Pages
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Add testimonials from recent buyers directly on property pages: "We helped Mr. & Mrs. Smith find their dream home in this area." Include your Google rating and review count. Show recently sold properties nearby with achieved prices. This builds trust and encourages action.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              6. Provide Comprehensive Property Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The more information you provide, the more qualified the viewing requests. Include detailed descriptions, floor plans, EPC ratings, council tax bands, local schools, transport links, and neighborhood information. When buyers have all the information they need, they're more likely to request a viewing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              7. Implement Smart Search and Filters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Help buyers find their perfect property quickly. Advanced filters (price, bedrooms, property type, features), saved searches with email alerts, and "similar properties" recommendations all increase engagement and viewing requests.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              8. Optimize for Mobile Conversions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              70% of viewing requests come from mobile devices. Ensure your property pages load instantly, images swipe smoothly, and the viewing request button is always easy to tap. Mobile users are often ready to act immediately—make it effortless.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              9. Follow Up Instantly
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When someone requests a viewing, respond within minutes, not hours. Send an instant confirmation email. Call them within 15-30 minutes to confirm details. Fast response rates dramatically increase the chances of that viewing actually happening—and converting to an offer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Conversion Optimization Framework
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Implement these strategies systematically:
            </p>
            <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-2">
              <li>Measure your current conversion rate</li>
              <li>Implement one improvement at a time</li>
              <li>Measure the impact over 2-4 weeks</li>
              <li>Keep what works, discard what doesn't</li>
              <li>Repeat with the next improvement</li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-8">
              A 1% improvement in conversion rate could mean an extra 20 viewings per month. If just 10% of those convert to instructions, that's 2 extra instructions per month—24 per year. At an average commission of £3,000, that's £72,000 in additional revenue.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Want to Double Your Viewing Requests?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free conversion audit. We'll analyze your website and show you exactly where you're losing viewing requests—and how to fix it.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">Get Your Free Conversion Audit</Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Written by MoveIn Media</p>
                <p className="text-sm text-gray-500">Specialists in estate agent website design and optimization</p>
              </div>
              <Link to="/insights">
                <Button variant="outline">More Insights</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PublicLayout>
  );
}
