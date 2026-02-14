import { PublicLayout } from '@/components/PublicLayout';
import { SEO } from '@/app/components/SEO';

export function PrivacyPage() {
  return (
    <PublicLayout>
      <SEO title="Privacy Policy" />
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: 27 January 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                MoveIn Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              <p>When you submit an enquiry through our website, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and contact information (email address, phone number)</li>
                <li>Agency name and business details</li>
                <li>Project requirements and preferences</li>
                <li>Any additional information you choose to provide in your enquiry</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use your information solely for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To review and respond to your enquiry</li>
                <li>To provide quotes and project proposals</li>
                <li>To deliver our website development services</li>
                <li>To communicate with you about your project</li>
              </ul>
              <p className="mt-4">
                <strong>We do NOT:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send marketing emails or newsletters</li>
                <li>Share your information with third parties</li>
                <li>Sell your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Storage and Security</h2>
              <p>
                Your information is stored securely using Supabase, a secure cloud database service. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
              <p>
                We retain your enquiry information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Enquiries may be archived but not deleted for business record keeping.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
              <p>
                Our website uses essential cookies for authentication and session management in the admin area. We do not use tracking or marketing cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}