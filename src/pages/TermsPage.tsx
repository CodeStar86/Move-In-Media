import { PublicLayout } from '@/components/PublicLayout';
import { SEO } from '@/app/components/SEO';

export function TermsPage() {
  return (
    <PublicLayout>
      <SEO title="Terms of Service" />
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: 27 January 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the MoveIn Media website and services, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
              <p>
                MoveIn Media provides website design and development services exclusively for estate agents. We offer three package types:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Template One</strong> - Fixed layout template at £5,000</li>
                <li><strong>Template Two</strong> - Premium fixed layout template at £12,000</li>
                <li><strong>Fully Customised</strong> - Bespoke website at a quoted price</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Template Limitations</h2>
              <p>
                <strong>Important:</strong> Template packages (One and Two) have fixed layouts. Customisation is LIMITED to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Theme colour selection</li>
                <li>Logo upload</li>
                <li>Font selection from our provided list</li>
              </ul>
              <p className="mt-4">
                <strong>No other design or layout changes are permitted</strong> for template packages. Clients requesting additional design changes will be quoted for custom development work separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Enquiry Process</h2>
              <p>
                Submitting an enquiry through our website does not constitute a binding contract. We will review your enquiry and contact you to discuss your requirements. A formal contract will be established before work commences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Pricing and Payment</h2>
              <p>
                All prices displayed are in GBP (£) and are exclusive of VAT where applicable. Payment terms will be outlined in your project contract. We reserve the right to update our pricing at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing all necessary content, images, and materials</li>
                <li>Timely feedback and approvals</li>
                <li>Domain registration and hosting arrangements (unless otherwise agreed)</li>
                <li>Ensuring they have rights to use all provided materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                Upon full payment, clients own the content they provided. The website code and design become the client's property. Template frameworks and reusable components may be used for other projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. No Email Notifications</h2>
              <p>
                We do NOT send automated email notifications. All enquiries are reviewed manually by our team, and we will contact you directly via phone or email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                MoveIn Media shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us through our enquiry form or email.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}