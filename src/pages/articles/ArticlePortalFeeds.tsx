import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticlePortalFeeds() {
  return (
    <PublicLayout>
      <SEO 
        title="Portal Feed Integration Issues: The Silent Lead Killer | MoveIn Media"
        description="Broken feeds from Rightmove and Zoopla mean outdated listings and lost leads. Learn how to avoid this costly estate agent website mistake."
        keywords="portal feed integration, Rightmove feed, Zoopla feed, property feed issues, estate agent portal sync"
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
              <span className="font-medium text-blue-600">Technical</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                8 February 2026
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                6 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portal Feed Integration Issues: The Silent Lead Killer
            </h1>
            <p className="text-xl text-gray-600">
              Your website is showing properties that sold three weeks ago. Buyers are calling about them. You're wasting time and damaging your reputation. Portal feed issues are a silent epidemic.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              A buyer finds their dream home on your website. They call immediately, excited to book a viewing. You have to tell them it's already sold—two weeks ago. They feel deceived. They won't trust your website again.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This scenario plays out hundreds of times per day across UK estate agent websites. And it's completely avoidable.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Are Portal Feeds?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most estate agents advertise properties on Rightmove, Zoopla, OnTheMarket, and their own website. Rather than manually updating four places, you use automated "feeds" that sync property data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              When working correctly, feeds ensure your website always shows current, accurate listings. When broken, you're showing outdated information that frustrates buyers and wastes your team's time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Most Common Portal Feed Problems
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Sold Properties Still Showing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The most damaging issue: properties marked as "Sold STC" or "Let Agreed" in your CRM are still showing as available on your website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Why it happens:</strong> Your feed doesn't update property status changes, or there's a delay between your CRM updating and your website reflecting the change.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Implement near-real-time feed updates (every 15-30 minutes, not daily). Ensure status changes are included in the feed, not just new listings. Test the entire workflow from CRM to website.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Missing New Instructions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You win a new instruction on Monday. You upload it to your CRM and it appears on Rightmove within an hour. But Thursday arrives and it's still not on your website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              New instructions are your hottest leads. People searching your website want to see them immediately.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Why it happens:</strong> Feeds only run once per day, or new properties aren't triggering a feed update.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Set feeds to update multiple times per day. Implement a "publish now" option that immediately pushes a property to your website.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Wrong Prices or Details
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You reduce a property's price from £450,000 to £425,000. Rightmove updates immediately. Your website still shows £450,000 three days later.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Or worse: bedroom counts are wrong, property types are incorrect, or descriptions don't match.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Ensure all property fields are included in your feed, not just basics like price and description. Validate feed data before displaying it. Implement change detection that triggers immediate updates.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Missing or Broken Images
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Properties appear on your website with broken image links, or with only 2 of the 25 photos you uploaded. Images are 80% of what sells properties online.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Why it happens:</strong> Image URLs change, images are stored on servers that go down, or the feed has image quantity limits.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Download and store images locally rather than linking to external URLs. Implement image validation that alerts you to broken images. Test image feeds regularly.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Feed Failures You Don't Know About
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your feed has been failing for two weeks. Properties aren't updating. New listings aren't appearing. But nobody noticed because there's no alert system.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Implement feed monitoring that emails you immediately when a feed fails. Set up daily checks that compare your CRM to your website and flag discrepancies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Business Impact of Broken Feeds
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Portal feed issues don't just annoy buyers. They cost you money:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Wasted staff time:</strong> Fielding calls about sold or unavailable properties</li>
              <li><strong>Damaged reputation:</strong> Buyers think you're incompetent or deliberately misleading them</li>
              <li><strong>Lost leads:</strong> Buyers don't see your newest, hottest listings</li>
              <li><strong>Missed opportunities:</strong> Price reductions don't reach buyers searching your site</li>
              <li><strong>SEO damage:</strong> Google penalizes sites with outdated or incorrect information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Best Practices for Portal Feeds
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's how professional estate agent websites handle portal feeds:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Update frequently:</strong> Every 15-30 minutes, not once per day</li>
              <li><strong>Monitor constantly:</strong> Automated alerts when feeds fail</li>
              <li><strong>Validate data:</strong> Check feeds for completeness and accuracy</li>
              <li><strong>Store locally:</strong> Download images and data rather than linking</li>
              <li><strong>Cache intelligently:</strong> Show cached data if live feed fails</li>
              <li><strong>Test regularly:</strong> Weekly checks that feeds are working correctly</li>
              <li><strong>Document everything:</strong> Clear process for troubleshooting feed issues</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Questions to Ask Your Web Developer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're not confident in your portal feeds, ask these questions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>How often do our property feeds update?</li>
              <li>What happens if a feed fails?</li>
              <li>How quickly do new instructions appear on our website?</li>
              <li>How quickly do status changes (like Sold STC) reflect on our website?</li>
              <li>Where are images stored?</li>
              <li>What monitoring is in place to detect feed problems?</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              If your developer can't answer these confidently, you have a problem.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Competitive Advantage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Most estate agent websites have feed issues they don't even know about. If your website consistently shows accurate, up-to-date properties while competitors show outdated listings, you'll win more leads and viewings. It's that simple.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are Your Portal Feeds Working Correctly?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free feed audit. We'll check whether your website is accurately reflecting your current property portfolio and identify any sync issues.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">
                  Get Your Free Feed Audit
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
