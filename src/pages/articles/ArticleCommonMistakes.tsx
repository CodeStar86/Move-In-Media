import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleCommonMistakes() {
  return (
    <PublicLayout>
      <SEO 
        title="10 Common Website Mistakes Costing Estate Agents Thousands | MoveIn Media"
        description="From missing contact details to broken forms, these common estate agent website mistakes are losing you money every single day. Here's how to fix them."
        keywords="estate agent website mistakes, common website errors, website best practices, estate agent web design"
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
              <span className="font-medium text-blue-600">Best Practices</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />4 February 2026</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              10 Common Website Mistakes Costing Estate Agents Thousands
            </h1>
            <p className="text-xl text-gray-600">
              After auditing hundreds of estate agent websites, we see the same preventable mistakes again and again. Each one is silently costing you leads and commissions.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              1. Hidden Phone Number
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your phone number is in the footer, in tiny gray text. Some users can't find it at all. <strong>The fix:</strong> Display your phone number prominently in the header of every page. Make it clickable on mobile. Consider a sticky "Call Us" button.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              2. No Clear Call-to-Action
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visitors land on your homepage and... what should they do? Browse properties? Request a valuation? Sign up for alerts? Without a clear primary action, many do nothing. <strong>The fix:</strong> Choose one primary action (usually "Book a Valuation") and make it the most prominent button on your site.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              3. Broken or Complicated Forms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your contact form doesn't work, shows error messages that don't make sense, or asks for 15 fields of information. <strong>The fix:</strong> Test your forms weekly. Keep them simple (3-5 fields maximum). Show clear error messages. Send confirmation emails immediately.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              4. Missing Property Address Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your property listings show price and bedrooms but no indication of specific location beyond a vague "North London." Buyers want to know exact streets or at least specific neighborhoods. <strong>The fix:</strong> Show property postcodes (first part) or street names. Add a map. Include neighborhood information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              5. No Sold Prices or Testimonials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You've sold hundreds of properties, but your website doesn't showcase any success stories. Vendors want proof you can deliver. <strong>The fix:</strong> Add a "Recently Sold" section showing achieved prices (with permission). Display testimonials from happy vendors prominently. Include specific results: "Sold £15k over asking in 3 weeks."
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              6. Invisible Team Pages
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your "Meet the Team" page is buried under "About" and shows tiny photos with no information about experience or expertise. People want to know who they're dealing with. <strong>The fix:</strong> Create prominent team profiles with professional photos, experience, areas of expertise, and direct contact details. Let clients choose their preferred agent.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              7. Missing Opening Hours
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nowhere on your website does it say when you're open. Users don't know if they should call now or wait until tomorrow. <strong>The fix:</strong> Display opening hours clearly on every page. Add "Open Now" or "Closed - Opens at 9am" status. Include emergency contact information for existing clients.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              8. No Local Area Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Buyers researching areas find nothing helpful on your website. No school information, no transport links, no local amenities. They go elsewhere for this information—and might not come back. <strong>The fix:</strong> Create detailed area guides for neighborhoods you cover. Include schools, transport, shops, restaurants. This content also helps SEO.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              9. Impossible Property Search
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your search function doesn't work properly: typos return no results, filters don't combine correctly, or there's no way to sort by price or date. <strong>The fix:</strong> Implement autocomplete for location search. Allow multiple filter combinations. Add sorting options. Show result counts. Test thoroughly with real search terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              10. No Mobile Optimization
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We covered this in another article, but it bears repeating: 70%+ of traffic is mobile. If your site isn't mobile-optimized, you're turning away most visitors. <strong>The fix:</strong> Make mobile your priority. Test on real devices. Ensure everything works perfectly on iPhone and Android.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Quick Audit Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Go through this checklist right now:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>☐ Phone number visible in header on every page</li>
              <li>☐ Clear primary call-to-action button</li>
              <li>☐ Contact forms tested and working</li>
              <li>☐ Property locations clearly shown</li>
              <li>☐ Sold properties and testimonials displayed</li>
              <li>☐ Team profiles with photos and contact details</li>
              <li>☐ Opening hours clearly displayed</li>
              <li>☐ Local area guides for your neighborhoods</li>
              <li>☐ Property search works with filters and sorting</li>
              <li>☐ Perfect mobile experience on real devices</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Cost of Doing Nothing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every one of these mistakes costs you leads every single day. Fixing them isn't complicated or expensive. It just requires awareness and action. The question is: how much longer can you afford to wait?
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How Many of These Mistakes Is Your Website Making?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free, comprehensive audit of your estate agent website. We'll identify every issue costing you leads and provide specific fixes.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">Get Your Free Website Audit</Button>
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
