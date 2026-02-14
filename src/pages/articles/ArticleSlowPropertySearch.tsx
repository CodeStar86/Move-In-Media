import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleSlowPropertySearch() {
  return (
    <PublicLayout>
      <SEO 
        title="Slow Property Search Pages Are Killing Your Leads | MoveIn Media"
        description="Every second of load time costs you leads. Discover how slow property search pages are costing estate agents thousands in lost revenue."
        keywords="slow property search, website speed, estate agent website performance, page load time optimization"
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
              <span className="font-medium text-blue-600">Performance</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                10 February 2026
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                7 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Slow Property Search Pages Are Killing Your Leads
            </h1>
            <p className="text-xl text-gray-600">
              A 1-second delay in page load time can reduce conversions by 7%. For estate agents, that translates directly into lost viewing requests and valuation enquiries.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              You're paying for Google Ads. You're active on social media. You're driving traffic to your website. But if your property search page takes more than 3 seconds to load, <strong>you're wasting your marketing budget</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Here's the uncomfortable truth: 53% of mobile users abandon a site that takes longer than 3 seconds to load. That's over half your potential leads gone before they even see a single property.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Real Cost of Slow Property Search
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let's do some maths. Say your website gets 1,000 visitors per month. If your property search page takes 5 seconds to load instead of 2 seconds, you're losing approximately 210 visitors (21%) before they ever see your properties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If 2% of visitors normally request viewings, that's 4 lost viewing requests per month. If just one of those converts to a sale with an average commission of £3,000, you're losing £36,000 per year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>All because your property search page is too slow.</strong>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What's Slowing You Down?
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Unoptimized Property Images
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              This is the number one culprit. Estate agents upload high-resolution photos straight from their camera—images that are 4000x3000 pixels and 8MB each. Then they wonder why their search results page takes 30 seconds to load.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Compress images to under 150KB. Use modern formats like WebP. Serve appropriately-sized images (don't load a 4000px image to display at 400px). Implement lazy loading so images only load when scrolled into view.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Loading All Properties at Once
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your property search returns 237 results. Your website tries to load all 237 property cards, with images, at once. The browser chokes. The page becomes unresponsive. Users give up.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Implement pagination (show 12-20 properties per page) or infinite scroll (load more as users scroll down). Only load what's currently visible on screen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Slow Third-Party Portal Feeds
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your website fetches property data from Rightmove or Zoopla feeds in real-time. Their API is slow or temporarily down. Your entire property search page sits there spinning, waiting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Cache portal feed data locally. Update every hour or every few hours, not on every page load. Show cached results instantly while updating in the background.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Too Many JavaScript Libraries
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your website loads jQuery, several mapping libraries, analytics scripts, chat widgets, social media plugins, and more. Each one adds 100-500KB and 1-2 seconds of load time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Audit what scripts you actually need. Remove unused libraries. Use modern, lightweight alternatives. Defer non-critical scripts until after the page loads.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Cheap, Overloaded Hosting
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You're on a £5/month shared hosting plan with 500 other websites. When traffic spikes, your site slows to a crawl—or crashes entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Invest in proper hosting. For a business website generating leads worth thousands of pounds, spending £30-50/month on quality hosting is a no-brainer. Consider cloud hosting that scales automatically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Speed Benchmarks You Should Hit
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's what you should aim for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Homepage:</strong> Under 2 seconds to fully load on 4G</li>
              <li><strong>Property search results:</strong> Under 2.5 seconds</li>
              <li><strong>Individual property pages:</strong> Under 3 seconds</li>
              <li><strong>Mobile First Contentful Paint:</strong> Under 1.8 seconds</li>
              <li><strong>Google PageSpeed Score:</strong> 90+ for mobile</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Measure Your Speed
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use these free tools to test your property search performance:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Google PageSpeed Insights:</strong> Shows mobile and desktop scores with specific recommendations</li>
              <li><strong>GTmetrix:</strong> Detailed waterfall analysis showing what's loading and when</li>
              <li><strong>WebPageTest:</strong> Test from multiple locations on different connection speeds</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Test your property search page, not just your homepage. That's where most of your traffic lands.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Quick Wins for Immediate Improvement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These changes can improve your speed today:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Compress all property images</strong> using TinyPNG or Squoosh (can reduce file sizes by 70-80%)</li>
              <li><strong>Enable browser caching</strong> so returning visitors don't re-download everything</li>
              <li><strong>Implement lazy loading</strong> for images below the fold</li>
              <li><strong>Minify CSS and JavaScript</strong> to reduce file sizes</li>
              <li><strong>Use a CDN</strong> to serve images and assets faster</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Competitive Advantage of Speed
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's the good news: most estate agent websites are slow. If your property search loads in under 2 seconds while your competitors take 6-8 seconds, you have a massive advantage.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users will stick with your site. They'll browse more properties. They'll request more viewings. And Google will rank you higher in search results (page speed is a ranking factor).
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Speed isn't just about user experience. It's about revenue.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How Fast Is Your Property Search?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free speed audit of your estate agent website. We'll identify exactly what's slowing you down and how much it's costing you in lost leads.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">
                  Get Your Free Speed Audit
                </Button>
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
