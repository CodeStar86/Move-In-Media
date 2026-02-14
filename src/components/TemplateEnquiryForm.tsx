import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { templateOneEnquirySchema, templateTwoEnquirySchema, TEMPLATE_FONTS, TemplateOneEnquiry, TemplateTwoEnquiry } from '@/lib/validation';
import { AlertCircle, Check, Info } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface TemplateEnquiryFormProps {
  templateType: 'template_one' | 'template_two';
  templateName: string;
  price: string;
}

export function TemplateEnquiryForm({ templateType, templateName, price }: TemplateEnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const schema = templateType === 'template_one' ? templateOneEnquirySchema : templateTwoEnquirySchema;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TemplateOneEnquiry | TemplateTwoEnquiry>({
    resolver: zodResolver(schema),
    defaultValues: {
      package_type: templateType,
    },
  });

  const selectedColor = watch('template_theme_color');
  const selectedFont = watch('template_font');

  const onSubmit = async (data: TemplateOneEnquiry | TemplateTwoEnquiry) => {
    try {
      setSubmitting(true);
      setError(null);

      // Prepare enquiry data for API
      const enquiryData = {
        type: templateType === 'template_one' ? 'Silver Template Site' : 'Gold Template Site',
        packageType: data.package_type,
        contactName: data.name,
        email: data.email,
        phone: data.phone,
        agencyName: data.agency_name,
        locations: data.locations || '',
        areasServed: data.areas_served || '',
        themeColor: data.template_theme_color,
        font: data.template_font,
        desiredDomain: data.desired_domain || '',
        existingWebsite: data.existing_website || '',
        message: data.notes || '',
        price: price,
      };

      // Submit to server API endpoint
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/package-enquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(enquiryData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Failed to submit enquiry');
      }

      await response.json();

      setSubmitted(true);
      setTimeout(() => navigate('/'), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PublicLayout>
        <div className="py-20">
          <div className="mx-auto max-w-2xl px-4">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Check className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-900">Enquiry Submitted Successfully!</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">
                  Thank you for your enquiry about {templateName}. We've received your details and will be in touch shortly to discuss your project.
                </p>
                <p className="text-green-700 mt-4 text-sm">
                  Redirecting to homepage in 5 seconds...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Enquire About {templateName}
            </h1>
            <p className="text-xl text-gray-600">
              Price: {price} (one-time payment, no hidden costs)
            </p>
          </div>

          {/* Important Information */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900">
              <strong>Template Customisation Limits:</strong> This template has a fixed layout. You can only customize the theme colour and font. No other design or layout changes are permitted.
            </AlertDescription>
          </Alert>

          {error && (
            <Alert className="mb-8 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-900">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>Your agency information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@estateagency.co.uk"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      placeholder="07700 900000"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="agency_name">Agency Name *</Label>
                    <Input
                      id="agency_name"
                      {...register('agency_name')}
                      placeholder="Smith Estate Agents"
                    />
                    {errors.agency_name && (
                      <p className="text-sm text-red-600 mt-1">{errors.agency_name.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="locations">Locations/Offices</Label>
                  <Input
                    id="locations"
                    {...register('locations')}
                    placeholder="London, Manchester, Birmingham"
                  />
                </div>
                <div>
                  <Label htmlFor="areas_served">Areas Served</Label>
                  <Textarea
                    id="areas_served"
                    {...register('areas_served')}
                    placeholder="North London, Islington, Camden..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Template Customisation */}
            <Card>
              <CardHeader>
                <CardTitle>Template Customisation</CardTitle>
                <CardDescription>
                  The ONLY changes allowed: theme colour and font
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="template_theme_color">Theme Colour (Hex Code) *</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="template_theme_color"
                      {...register('template_theme_color')}
                      placeholder="#0066CC"
                      className="flex-1"
                    />
                    <input
                      type="color"
                      value={selectedColor || '#000000'}
                      onChange={(e) => setValue('template_theme_color', e.target.value)}
                      className="sr-only"
                      id="color-picker-input"
                    />
                    <label
                      htmlFor="color-picker-input"
                      className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: selectedColor || '#ffffff' }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Enter a hex color code (e.g., #0066CC for blue) or click the square to pick a color
                  </p>
                  {errors.template_theme_color && (
                    <p className="text-sm text-red-600 mt-1">{errors.template_theme_color.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="template_font">Font *</Label>
                  <Select
                    value={selectedFont}
                    onValueChange={(value) => setValue('template_font', value as any)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {TEMPLATE_FONTS.map((font) => (
                        <SelectItem key={font} value={font}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.template_font && (
                    <p className="text-sm text-red-600 mt-1">{errors.template_font.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Optional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="desired_domain">Desired Domain Name</Label>
                  <Input
                    id="desired_domain"
                    {...register('desired_domain')}
                    placeholder="www.smithestateagents.co.uk"
                  />
                </div>
                <div>
                  <Label htmlFor="existing_website">Existing Website (if any)</Label>
                  <Input
                    id="existing_website"
                    {...register('existing_website')}
                    placeholder="https://currentwebsite.com"
                  />
                  {errors.existing_website && (
                    <p className="text-sm text-red-600 mt-1">{errors.existing_website.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    {...register('notes')}
                    placeholder="Any other information you'd like us to know..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/packages')}
              >
                Back to Packages
              </Button>
              <Button type="submit" disabled={submitting} size="lg">
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
}