import { TemplateEnquiryForm } from '@/components/TemplateEnquiryForm';
import { SEO } from '@/app/components/SEO';

export function TemplateTwoPage() {
  return (
    <>
      <SEO title="Template Two" description="Preview our Template Two: a premium estate agent website template built for speed and style." canonicalPath="/templates/template-two" />
      <TemplateEnquiryForm
        templateType="template_two"
        templateName="Template Two"
        price="£12,000"
      />
    </>
  );
}