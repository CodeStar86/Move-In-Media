import { TemplateEnquiryForm } from '@/components/TemplateEnquiryForm';
import { SEO } from '@/app/components/SEO';

export function TemplateTwoPage() {
  return (
    <>
      <SEO title="Gold Template Site - £12,000" />
      <TemplateEnquiryForm
        templateType="template_two"
        templateName="Template Two"
        price="£12,000"
      />
    </>
  );
}