import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { customQuoteEnquirySchema, CustomQuoteEnquiry } from '@/lib/validation';
import { AlertCircle, Check } from 'lucide-react';
import { SEO } from '@/app/components/SEO';
import { getPageSEO } from '@/lib/seo-data';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function CustomQuotePage() {
  const seo = getPageSEO('custom');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomQuoteEnquiry>({
    resolver: zodResolver(customQuoteEnquirySchema),
    defaultValues: {
      package_type: 'custom_quote',
    },
  });

  const onSubmit = async (data: CustomQuoteEnquiry) => {
    try {
      setSubmitting(true);
      setError(null);

      // Prepare custom quote data for API
      const enquiryData = {
        type: 'Fully Customised Website',
        packageType: data.package_type,
        contactName: data.name,
        email: data.email,
        phone: data.phone,
        agencyName: data.agency_name,
        locations: data.locations || '',
        areasServed: data.areas_served || '',
        requirements: data.requirements,
        desiredDomain: data.desired_domain || '',
        existingWebsite: data.existing_website || '',
        budgetRange: data.budget_range || '',
        timeline: data.timeline || '',
        message: data.notes || '',
      };

      // Submit to server API endpoint
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/custom-enquiries`,
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
                  <CardTitle className="text-green-900">Quote Request Submitted!</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">
                  Thank you for your custom quote request. We've received your requirements and will review them carefully. We'll be in touch within 1-2 business days to discuss your project and provide a detailed quote.
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
      <SEO title={seo.title} description={seo.description} />
      <div className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your requirements and we'll provide a tailored quote
            </p>
          </div>

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

            {/* Project Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Project Requirements</CardTitle>
                <CardDescription>Tell us what you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="requirements">Project Requirements *</Label>
                  <Textarea
                    id="requirements"
                    {...register('requirements')}
                    placeholder="Please describe your website requirements in detail. What features do you need? What functionality is important? What are your goals?"
                    rows={6}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum 20 characters
                  </p>
                  {errors.requirements && (
                    <p className="text-sm text-red-600 mt-1">{errors.requirements.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="budget_range">Budget Range (Optional)</Label>
                  <Input
                    id="budget_range"
                    {...register('budget_range')}
                    placeholder="£15,000 - £25,000"
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Desired Timeline (Optional)</Label>
                  <Input
                    id="timeline"
                    {...register('timeline')}
                    placeholder="Launch in 3 months"
                  />
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
                {submitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
}