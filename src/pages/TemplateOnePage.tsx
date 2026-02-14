import { TemplateEnquiryForm } from '@/components/TemplateEnquiryForm';
import { SEO } from '@/app/components/SEO';

export function TemplateOnePage() {
  return (
    <>
      <SEO title="Silver Template Site - £5,000" />
      <TemplateEnquiryForm
        templateType="template_one"
        templateName="Template One"
        price="£5,000"
      />
    </>
  );
}