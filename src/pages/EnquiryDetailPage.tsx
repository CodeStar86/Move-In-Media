import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminLayout } from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { adminNoteSchema, AdminNoteData } from '@/lib/validation';
import { format } from 'date-fns';
import { ArrowLeft, Mail, Phone, Building2, FileText, ExternalLink, AlertCircle, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Enquiry {
  id: string;
  type: string;
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  websiteUrl?: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
  // Package enquiry fields
  packageType?: string;
  locations?: string;
  areasServed?: string;
  themeColor?: string;
  font?: string;
  desiredDomain?: string;
  existingWebsite?: string;
  price?: string;
  // Custom quote fields
  requirements?: string;
  budgetRange?: string;
  timeline?: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800',
  in_review: 'bg-yellow-100 text-yellow-800',
  responded: 'bg-purple-100 text-purple-800',
  won: 'bg-green-100 text-green-800',
  lost: 'bg-red-100 text-red-800',
  archived: 'bg-gray-100 text-gray-800',
};

export function EnquiryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdminNoteData>({
    resolver: zodResolver(adminNoteSchema),
  });

  useEffect(() => {
    if (id) {
      fetchEnquiryDetails();
    }
  }, [id]);

  const fetchEnquiryDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/enquiries/${id}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError('Enquiry not found');
          setEnquiry(null);
          return;
        }
        throw new Error('Failed to fetch enquiry');
      }

      const data = await response.json();
      setEnquiry(data.enquiry);
    } catch (error) {
      setError('Failed to load enquiry details');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      setUpdating(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/enquiries/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      toast.success('Status updated successfully');
      await fetchEnquiryDetails();
    } catch (error) {
      toast.error('Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const onSubmitNote = async (data: AdminNoteData) => {
    // Notes functionality can be implemented later if needed
    toast.info('Notes feature coming soon');
    reset();
  };

  const deleteEnquiry = async () => {
    if (!confirm('Are you sure you want to delete this enquiry?')) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7930e57f/enquiries/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete enquiry');
      }

      toast.success('Enquiry deleted successfully');
      navigate('/admin');
    } catch (error) {
      toast.error('Failed to delete enquiry');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading enquiry details...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!enquiry) {
    return (
      <AdminLayout>
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-900">
            Enquiry not found
          </AlertDescription>
        </Alert>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/admin')}
            className="self-start"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <Badge className={statusColors[enquiry.status]}>
            {enquiry.status.replace('_', ' ')}
          </Badge>
        </div>

        {error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-900">{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Agency Name</p>
                      <p className="font-medium break-words">{enquiry.agencyName || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Contact Name</p>
                      <p className="font-medium break-words">{enquiry.contactName}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${enquiry.email}`} className="font-medium text-blue-600 hover:underline break-all">
                        {enquiry.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${enquiry.phone}`} className="font-medium text-blue-600 hover:underline break-words">
                        {enquiry.phone || 'N/A'}
                      </a>
                    </div>
                  </div>
                </div>
                {enquiry.websiteUrl && (
                  <div className="flex items-start space-x-3 pt-2">
                    <ExternalLink className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Website URL</p>
                      <a 
                        href={enquiry.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium text-blue-600 hover:underline break-all"
                      >
                        {enquiry.websiteUrl}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Enquiry Details */}
            <Card>
              <CardHeader>
                <CardTitle>Enquiry Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-500">Enquiry Type</Label>
                  <p className="font-medium mt-1 break-words">{enquiry.type}</p>
                  {enquiry.price && (
                    <p className="text-sm text-gray-600 mt-1">Price: {enquiry.price}</p>
                  )}
                </div>

                {/* Package-specific fields */}
                {(enquiry.themeColor || enquiry.font) && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Template Customisation</Label>
                    <div className="mt-2 space-y-2">
                      {enquiry.themeColor && (
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-8 h-8 rounded border-2 border-gray-300" 
                            style={{ backgroundColor: enquiry.themeColor }}
                          ></div>
                          <span className="text-gray-700">{enquiry.themeColor}</span>
                        </div>
                      )}
                      {enquiry.font && (
                        <p className="text-gray-700"><span className="font-medium">Font:</span> {enquiry.font}</p>
                      )}
                    </div>
                  </div>
                )}

                {(enquiry.locations || enquiry.areasServed) && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Business Details</Label>
                    <div className="mt-2 space-y-2">
                      {enquiry.locations && (
                        <p className="text-gray-700"><span className="font-medium">Locations:</span> {enquiry.locations}</p>
                      )}
                      {enquiry.areasServed && (
                        <p className="text-gray-700"><span className="font-medium">Areas Served:</span> {enquiry.areasServed}</p>
                      )}
                    </div>
                  </div>
                )}

                {(enquiry.desiredDomain || enquiry.existingWebsite) && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Website Information</Label>
                    <div className="mt-2 space-y-2">
                      {enquiry.desiredDomain && (
                        <p className="text-gray-700 break-words"><span className="font-medium">Desired Domain:</span> {enquiry.desiredDomain}</p>
                      )}
                      {enquiry.existingWebsite && (
                        <p className="text-gray-700 break-words">
                          <span className="font-medium">Existing Website:</span>{' '}
                          <a href={enquiry.existingWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {enquiry.existingWebsite}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Custom quote fields */}
                {enquiry.requirements && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Project Requirements</Label>
                    <p className="mt-2 text-gray-700 whitespace-pre-wrap break-words">{enquiry.requirements}</p>
                  </div>
                )}

                {(enquiry.budgetRange || enquiry.timeline) && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Budget & Timeline</Label>
                    <div className="mt-2 space-y-2">
                      {enquiry.budgetRange && (
                        <p className="text-gray-700"><span className="font-medium">Budget Range:</span> {enquiry.budgetRange}</p>
                      )}
                      {enquiry.timeline && (
                        <p className="text-gray-700"><span className="font-medium">Timeline:</span> {enquiry.timeline}</p>
                      )}
                    </div>
                  </div>
                )}

                {enquiry.message && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Message / Additional Notes</Label>
                    <p className="mt-2 text-gray-700 whitespace-pre-wrap break-words">{enquiry.message}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Admin Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Internal Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">Internal notes feature coming soon</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Management */}
            <Card>
              <CardHeader>
                <CardTitle>Status Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Update Status</Label>
                  <Select
                    value={enquiry.status}
                    onValueChange={handleStatusUpdate}
                    disabled={updating}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in_review">In Review</SelectItem>
                      <SelectItem value="responded">Responded</SelectItem>
                      <SelectItem value="won">Won</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-gray-500 space-y-1 pt-2 border-t">
                  <p>
                    <span className="font-medium">Created:</span>{' '}
                    {format(new Date(enquiry.createdAt), 'dd MMM yyyy HH:mm')}
                  </p>
                  {enquiry.updatedAt && (
                    <p>
                      <span className="font-medium">Updated:</span>{' '}
                      {format(new Date(enquiry.updatedAt), 'dd MMM yyyy HH:mm')}
                    </p>
                  )}
                </div>
                <div className="pt-4 border-t">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={deleteEnquiry}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Enquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}