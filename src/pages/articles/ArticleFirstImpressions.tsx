import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleFirstImpressions() {
  return (
    <PublicLayout>
      <SEO 
        title="First Impressions Matter: Why Your Estate Agent Website Design Fails | MoveIn Media"
        description="94% of first impressions are design-related. Learn why estate agents have just 3 seconds to make an impression and how to get it right."
        keywords="estate agent website design, first impressions, website credibility, professional website design"
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
              <span className="font-medium text-blue-600">Design</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />6 February 2026</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              First Impressions Matter: Why Your Estate Agent Website Design Fails
            </h1>
            <p className="text-xl text-gray-600">
              You have 3 seconds. That's how long visitors take to judge your website—and your entire business. 94% of first impressions are design-related.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              A potential vendor lands on your website. Within 3 seconds, they've decided whether you're professional, trustworthy, and competent—or outdated, amateur, and unreliable. They haven't read a single word. They haven't looked at your sold prices or testimonials. <strong>They've judged you entirely on design.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Research from Stanford University found that 75% of users admit making judgments about a company's credibility based solely on website design. For estate agents dealing with six-figure transactions, this is devastating.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The 7 Design Mistakes That Destroy Trust
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Outdated Design</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your website looks like it was built in 2010. Gradient buttons, stock photo sliders, Flash elements, tiny text. Users instantly think: "If they haven't updated their website in 15 years, how can they sell my property in today's market?"
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Generic Stock Photos</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hero image: a couple holding house keys, beaming at the camera. We've all seen this exact photo on 500 other websites. It screams "template." Use real photos of your team, your office, and properties you've actually sold.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cluttered Layout</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your homepage tries to show everything at once: latest properties, sold properties, testimonials, calculators, area guides, news, partner logos. Users don't know where to look. Clean, focused design converts better than cluttered chaos.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Poor Typography</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Text is too small, line spacing is too tight, and you're using five different fonts. Reading your website gives users a headache. Professional typography builds trust. Use clear, readable fonts at 16px minimum.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Inconsistent Branding</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your logo is one color, buttons are another, headings are a third. Different pages look like they're from different companies. Consistent branding across every page signals professionalism.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Mobile Disaster</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              On desktop, your site looks acceptable. On mobile, text overlaps, images are cut off, buttons don't work. 70% of your visitors are on mobile. If your mobile design is broken, you've lost them.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Amateur Photography</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Property photos are dark, poorly framed, or taken on a phone with no editing. You're selling properties based on visual appeal, yet your own marketing looks amateur. Invest in professional photography—for your website and your listings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Good Design Looks Like
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Professional estate agent websites share these characteristics:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Clean, modern layout:</strong> Plenty of white space, clear visual hierarchy</li>
              <li><strong>Professional photography:</strong> Real images of your team and sold properties</li>
              <li><strong>Consistent branding:</strong> Same colors, fonts, and style throughout</li>
              <li><strong>Clear calls-to-action:</strong> Obvious buttons for booking valuations</li>
              <li><strong>Mobile-first design:</strong> Looks beautiful on phones, not just desktop</li>
              <li><strong>Fast loading:</strong> No waiting, no spinning loaders</li>
              <li><strong>Trust signals:</strong> Accreditations, reviews, testimonials visible</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Psychology of Design Trust
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Why does design matter so much? Because our brains make instant judgments based on visual cues. We can't help it. Clean, professional design triggers associations with competence, reliability, and success.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outdated, cluttered design triggers associations with being behind the times, disorganized, and unprofessional. Even if your service is excellent, your website is telling a different story.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Design Is a Business Decision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Investing in professional website design isn't about aesthetics. It's about conversion rates, lead generation, and revenue. A well-designed website that converts 3% of visitors instead of 1% can triple your online leads without spending more on advertising.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What First Impression Does Your Website Make?
              </h3>
              <p className="text-gray-700 mb-4">
                Get an honest, professional assessment of your estate agent website design. We'll show you exactly what's working and what's costing you leads.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">Get Your Free Design Audit</Button>
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
