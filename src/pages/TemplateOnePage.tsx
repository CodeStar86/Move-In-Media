import { TemplateEnquiryForm } from '@/components/TemplateEnquiryForm';
import { SEO } from '@/app/components/SEO';

export function TemplateOnePage() {
  return (
    <>
      <SEO title="Template One" description="Preview our Template One: a modern, conversion-focused estate agent website template." canonicalPath="/templates/template-one" />
      <TemplateEnquiryForm
        templateType="template_one"
        templateName="Template One"
        price="£5,000"
      />
    </>
  );
}