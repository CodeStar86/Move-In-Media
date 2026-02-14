import { PublicLayout } from '@/components/PublicLayout';
import { Card, CardContent } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { SEO } from '@/app/components/SEO';

export function FAQPage() {
  const faqs = [
    {
      question: 'What is the difference between Template One and Template Two?',
      answer: 'Template One is our starter package with up to 5 pages, ideal for smaller agencies. Template Two is our premium package with up to 10 pages, including additional features like agent profiles, testimonials section, and a blog/news section. Both templates have fixed layouts and can only be customised with your theme colour, logo, and font choice.',
    },
    {
      question: 'Can I customize the layout of the templates?',
      answer: 'No. Template packages have a fixed layout that cannot be changed. You can ONLY customize: (1) Theme colour, (2) Logo, and (3) Font selection. These limitations ensure we can deliver quickly at a fixed price. If you need custom design and layout, please choose our Fully Customised package.',
    },
    {
      question: 'What can I customize in the template packages?',
      answer: 'For Template One and Template Two, you can customize THREE things only: (1) Theme colour (your brand colour in hex format), (2) Your agency logo, and (3) Font selection from our curated list. No other design or layout changes are permitted.',
    },
    {
      question: 'How long does it take to build my website?',
      answer: 'Template websites typically take 2-3 weeks from receiving all your content and design preferences. Fully customised websites vary depending on complexity, but typically 6-12 weeks. We\'ll provide a more accurate timeline during our consultation.',
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You\'ll need to provide: your agency logo, brand colour, preferred font, property listings content, agency information, team member details (for Template Two and Custom), and any other text content you want on the site. We\'ll guide you through everything needed after you submit your enquiry.',
    },
    {
      question: 'Do you handle domain registration?',
      answer: 'We can advise on domain registration and help with the setup, but domain purchases are handled separately. You can either purchase your own domain or we can recommend domain registrars.',
    },
    {
      question: 'Are there any ongoing costs?',
      answer: 'The package prices are one-time payments for website development. You\'ll need to arrange your own hosting and domain registration, which typically costs £5-15/month depending on your provider. We can recommend hosting providers suitable for estate agent websites.',
    },
    {
      question: 'Can I update the website content myself after launch?',
      answer: 'Yes! We build websites that you can update. We\'ll provide training on how to update your property listings, add news items, and make content changes. For major design changes or new features, you can contact us for a quote.',
    },
    {
      question: 'Do the websites work on mobile phones?',
      answer: 'Yes, all our websites are fully responsive and work perfectly on all devices including mobile phones, tablets, and desktop computers.',
    },
    {
      question: 'Is SEO included?',
      answer: 'Yes, all packages include basic SEO setup including proper page titles, meta descriptions, and structured data. Template Two and Fully Customised packages include more advanced SEO optimization.',
    },
    {
      question: 'What happens after I submit an enquiry?',
      answer: 'After you submit an enquiry, we\'ll review your details and contact you within 1-2 business days to discuss your project, answer any questions, and confirm next steps. For custom quotes, we\'ll schedule a consultation to understand your requirements in detail before providing a quotation.',
    },
    {
      question: 'Do you send email notifications?',
      answer: 'No, we do not send automated emails. After you submit an enquiry, we review it in our admin dashboard and will contact you directly via phone or email to discuss your project.',
    },
    {
      question: 'Can I see examples of your work?',
      answer: 'Yes! Please contact us and we\'ll be happy to share examples of websites we\'ve built for other estate agencies (with their permission).',
    },
  ];

  return (
    <PublicLayout>
      <SEO title="Frequently Asked Questions" />
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our estate agent website packages
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Submit an enquiry and we'll be happy to help.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}