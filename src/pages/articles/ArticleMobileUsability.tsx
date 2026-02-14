import { Link } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function ArticleMobileUsability() {
  return (
    <PublicLayout>
      <SEO 
        title="Mobile Usability for Property Search: What Estate Agents Get Wrong | MoveIn Media"
        description="Over 70% of property searches happen on mobile. Discover why most estate agent websites fail mobile users and how to fix critical usability issues."
        keywords="mobile property search, estate agent mobile website, mobile usability, property website mobile optimization"
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
              <span className="font-medium text-blue-600">User Experience</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                12 February 2026
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                5 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Usability for Property Search: What Estate Agents Get Wrong
            </h1>
            <p className="text-xl text-gray-600">
              Over 70% of property searches now happen on mobile devices. Yet most estate agent websites provide a frustrating mobile experience that drives potential buyers away.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Picture this: A potential buyer is sitting on the train, scrolling through properties on your website. They find one they love. They try to tap the "Request Viewing" button. They miss. They try again. Miss again. Frustrated, they close your site and open Rightmove instead.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              You just lost a lead. And it's happening dozens of times every single day.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Mobile Property Search Crisis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              According to Google, <strong>73% of property-related searches happen on mobile devices</strong>. Yet when we audit estate agent websites, we find that over 80% have critical mobile usability issues.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's what's going wrong—and costing you viewing requests and enquiries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Tiny, Impossible-to-Tap Buttons
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The most common mistake we see: buttons and links that are too small to accurately tap with a finger. Apple's Human Interface Guidelines recommend a minimum tap target of 44x44 pixels. Most estate agent websites use buttons half that size.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The result? Users accidentally tap the wrong property, close images when they mean to swipe, or miss the "Request Viewing" button entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Make all clickable elements at least 44x44 pixels. Add generous spacing between tap targets. Test on a real device—not just in Chrome's mobile emulator.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Search Filters That Don't Work on Mobile
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Property search filters are crucial. Buyers want to filter by price, bedrooms, property type, and location. But on mobile, we often see:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Dropdown menus that extend beyond the screen</li>
              <li>Filter options you have to pinch-zoom to read</li>
              <li>Multi-select checkboxes too close together</li>
              <li>Price sliders that don't respond to touch properly</li>
              <li>"Advanced filters" hidden in a poorly-labeled menu</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Use mobile-native filter interfaces. Large, clearly labeled filter buttons. Native iOS and Android select menus. Simple toggle switches instead of tiny checkboxes. Test every filter option on a phone.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. Image Galleries That Fight You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Property photos are the most important part of any listing. Buyers want to swipe through every image. Yet mobile image galleries on estate agent sites often:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Don't support swipe gestures (requiring tiny arrow taps)</li>
              <li>Load slowly or not at all on 4G</li>
              <li>Show low-resolution thumbnails that look terrible</li>
              <li>Include a "zoom" feature that doesn't work properly</li>
              <li>Lose your position when you go back to the listing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Implement a proper mobile image gallery with swipe support, pinch-to-zoom, full-screen viewing, and image preloading. Show image numbers (e.g., "5 / 24") so users know how many photos they're viewing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Too Much Information, Too Little Hierarchy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              On desktop, you can show property details, descriptions, floor plans, EPCs, and location maps all at once. On mobile, that becomes an overwhelming wall of text and images.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users scroll endlessly looking for the one piece of information they need right now.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Use tabbed interfaces or accordion sections on mobile. Let users tap to see "Description," "Floor Plan," "Location," or "Energy Performance." Put the most important information first: price, bedrooms, location, key features.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. Forms Designed for Desktop
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your viewing request form might work fine on desktop. But on mobile, users face:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Keyboard covering the input field they're trying to fill</li>
              <li>Wrong keyboard type (text keyboard for phone numbers)</li>
              <li>No autocomplete for common fields</li>
              <li>Submit button hidden below the fold</li>
              <li>Validation errors that appear off-screen</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Use proper HTML5 input types (tel for phone, email for email). Enable autocomplete. Show clear, visible validation errors. Make the submit button large and always visible. Test the entire form flow on mobile.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              6. Map Integration Nightmares
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Location matters hugely to property buyers. But mobile maps on estate agent sites often:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Intercept all touch gestures (can't scroll past the map)</li>
              <li>Load slowly and block page rendering</li>
              <li>Show an unhelpful default zoom level</li>
              <li>Don't open in the native maps app when tapped</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Show a static map preview that opens the interactive map on tap. Include a "Get Directions" button that opens in Google Maps or Apple Maps. Don't embed an interactive map that hijacks scrolling.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              7. Search Results That Load Forever
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users enter their search criteria and... wait. And wait. The page is loading. They're on 4G. It should be instant. But your property search results take 8+ seconds to load.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Why? Uncompressed images, no lazy loading, no caching, and trying to load 100 properties at once.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The fix:</strong> Show results instantly. Load 10-15 properties at a time. Implement infinite scroll or "Load More." Compress and lazy-load images. Cache search results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Mobile-First Mindset
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The fundamental problem? Most estate agent websites were designed for desktop first, then "made responsive" as an afterthought. Mobile wasn't the priority.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              But with over 70% of your traffic on mobile, <strong>mobile should be your primary design target</strong>, not an afterthought.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Test It Yourself
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Right now, open your website on your phone. Try to search for a property. Try to request a viewing. Try to request a valuation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you find yourself getting frustrated, imagine how your potential customers feel. Every point of friction is a lost lead.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How Mobile-Friendly Is Your Estate Agent Website?
              </h3>
              <p className="text-gray-700 mb-4">
                Get a free mobile usability audit. We'll test your website on real devices and show you exactly where you're losing mobile leads.
              </p>
              <Link to="/free-website-audit">
                <Button size="lg">
                  Get Your Free Mobile Audit
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
