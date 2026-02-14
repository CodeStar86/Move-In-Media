import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleHiddenCost() {
  return (
    <PublicLayout>
      <SEO 
        title="The Hidden Cost of a Slow Estate Agent Website | MoveIn Media"
        description="Calculate exactly how much a slow website is costing your estate agency in lost leads and revenue. Every second counts."
        keywords="slow website cost, website speed impact, estate agent website performance, lost revenue slow website"
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
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />31 January 2026</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Hidden Cost of a Slow Estate Agent Website
            </h1>
            <p className="text-xl text-gray-600">
              Your slow website isn't just annoying users—it's costing you thousands in lost commissions every month. Here's how to calculate the real financial impact.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
              Let's Do the Maths
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Say your website currently takes 5 seconds to load. You get 2,000 visitors per month. Research shows that reducing load time from 5 seconds to 2 seconds can improve conversion rates by approximately 25%.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Current scenario:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>2,000 monthly visitors</li>
              <li>2% conversion rate (40 enquiries)</li>
              <li>10% of enquiries become instructions (4 instructions/month)</li>
              <li>Average commission: £3,000</li>
              <li><strong>Monthly revenue: £12,000</strong></li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              After speeding up to 2 seconds:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>2,000 monthly visitors</li>
              <li>2.5% conversion rate (50 enquiries)</li>
              <li>10% of enquiries become instructions (5 instructions/month)</li>
              <li>Average commission: £3,000</li>
              <li><strong>Monthly revenue: £15,000</strong></li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>That's £3,000 extra per month. £36,000 per year. Just from making your website faster.</strong>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bounce Rate Problem
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Google research found that 53% of mobile users abandon a site if it takes longer than 3 seconds to load. Think about that—over half your potential leads are gone before they even see your properties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If your site takes 6 seconds to load, you're potentially losing 1,000+ visitors per month who never see a single property listing. Those aren't just numbers—they're real people actively looking to buy, sell, or rent property.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Google Penalty
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Page speed is a Google ranking factor. Slow websites rank lower in search results. Lower rankings mean less organic traffic. Less traffic means fewer leads. It's a downward spiral that's costing you visibility and credibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Moving from page 2 to page 1 of Google search results can increase your organic traffic by 200-300%. But you'll never get there with a slow website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The User Experience Tax
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even users who don't immediately bounce suffer from slow speeds:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>They browse fewer properties (because each page load is painful)</li>
              <li>They're less likely to fill out forms (another slow page load)</li>
              <li>They're more likely to visit competitor websites</li>
              <li>They form negative opinions about your professionalism</li>
              <li>They're less likely to recommend you to friends</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Competitive Disadvantage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A buyer searches for "3 bed houses [your area]" on Google. They open the top 5 results in tabs. Your website takes 6 seconds to load. Your competitor's loads in 2 seconds. Which one do they browse first? Which one do they spend more time on?
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Speed is a competitive advantage. If your competitors are faster, they're winning leads that should be yours.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Calculate Your Own Hidden Cost
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use this simple formula:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li>Monthly website visitors: _______</li>
              <li>Current conversion rate (%): _______</li>
              <li>Expected improvement from faster site (25%): _______</li>
              <li>Additional monthly enquiries: _______</li>
              <li>Your instruction conversion rate (%): _______</li>
              <li>Additional monthly instructions: _______</li>
              <li>Average commission (£): _______</li>
              <li><strong>Annual lost revenue: _______</strong></li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-8">
              For most estate agents, the answer is tens of thousands of pounds per year.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Solution Isn't Expensive
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's the good news: fixing a slow website isn't expensive compared to the revenue you're losing. Basic optimizations—image compression, caching, better hosting—can often be implemented for under £1,000.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A complete rebuild focused on performance might cost £5,000-£12,000. But if you're losing £36,000 per year to slow speeds, that's a return on investment in just 2-4 months.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Time Is Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every month you wait is another month of lost revenue. Every slow page load is a potential customer you'll never get back. The hidden cost of a slow website isn't just theoretical—it's real money walking out the door every single day.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How Much Is Your Slow Website Costing You?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free speed audit with a detailed analysis of exactly how much revenue you're losing to slow page loads—and how to fix it.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">Get Your Free ROI Calculation</Button>
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
