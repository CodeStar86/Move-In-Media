import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { SEO } from '@/app/components/SEO';
import { getPageSEO } from '@/lib/seo-data';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export function InsightsPage() {
  const seo = getPageSEO('insights');

  const articles: Article[] = [
    {
      slug: 'why-estate-agent-websites-lose-valuation-enquiries',
      title: 'Why Estate Agent Websites Lose Valuation Enquiries',
      description: 'Discover the 7 critical mistakes that cause estate agents to lose valuable valuation enquiries and how to fix them.',
      date: '14 February 2026',
      readTime: '6 min read',
      category: 'Lead Generation',
    },
    {
      slug: 'mobile-usability-property-search',
      title: 'Mobile Usability for Property Search: What Estate Agents Get Wrong',
      description: 'Over 70% of property searches happen on mobile. Learn why most estate agent websites fail mobile users.',
      date: '12 February 2026',
      readTime: '5 min read',
      category: 'User Experience',
    },
    {
      slug: 'slow-property-search-pages-killing-leads',
      title: 'Slow Property Search Pages Are Killing Your Leads',
      description: 'Every second of load time costs you leads. Find out how slow property search pages are costing you thousands.',
      date: '10 February 2026',
      readTime: '7 min read',
      category: 'Performance',
    },
    {
      slug: 'portal-feed-integration-issues',
      title: 'Portal Feed Integration Issues: The Silent Lead Killer',
      description: 'Broken feeds from Rightmove and Zoopla mean outdated listings. Learn how to avoid this costly mistake.',
      date: '8 February 2026',
      readTime: '6 min read',
      category: 'Technical',
    },
    {
      slug: 'first-impressions-estate-agent-website-design',
      title: 'First Impressions Matter: Why Your Estate Agent Website Design Fails',
      description: 'You have 3 seconds to make an impression. Learn why 94% of first impressions are design-related.',
      date: '6 February 2026',
      readTime: '5 min read',
      category: 'Design',
    },
    {
      slug: 'common-mistakes-estate-agents-websites',
      title: '10 Common Website Mistakes Costing Estate Agents Thousands',
      description: 'From missing contact details to broken forms, these mistakes are losing you money every single day.',
      date: '4 February 2026',
      readTime: '8 min read',
      category: 'Best Practices',
    },
    {
      slug: 'increase-property-viewings-website',
      title: 'How to Increase Property Viewings Through Better Website Design',
      description: 'Strategic website design can increase viewing requests by 40%. Here\'s exactly how to do it.',
      date: '2 February 2026',
      readTime: '7 min read',
      category: 'Conversion',
    },
    {
      slug: 'hidden-cost-slow-estate-agent-website',
      title: 'The Hidden Cost of a Slow Estate Agent Website',
      description: 'A 1-second delay in page load time can reduce conversions by 7%. Calculate what slow speed is costing you.',
      date: '31 January 2026',
      readTime: '6 min read',
      category: 'Performance',
    },
  ];

  return (
    <PublicLayout>
      <SEO {...seo} />
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Estate Agent Website Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice on improving your estate agent website performance, user experience, and lead generation.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link to={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <Link to={`/insights/${article.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Fix Your Estate Agent Website?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let website issues cost you leads. Get a professional estate agent website that converts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-website-audit">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Free Website Audit
                </Button>
              </Link>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Our Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
