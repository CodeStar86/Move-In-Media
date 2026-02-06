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
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { adminNoteSchema, AdminNoteData } from '@/lib/validation';
import { format } from 'date-fns';
import { ArrowLeft, Mail, Phone, Building2, MapPin, Palette, FileText, ExternalLink, AlertCircle, Download, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

type Enquiry = Database['public']['Tables']['enquiries']['Row'];
type AdminNote = Database['public']['Tables']['admin_notes']['Row'];

const statusColors = {
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
  const [notes, setNotes] = useState<AdminNote[]>([]);
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
      fetchNotes();
    }
  }, [id]);

  const fetchEnquiryDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setEnquiry(data);
    } catch (error) {
      console.error('Error fetching enquiry:', error);
      setError('Failed to load enquiry details');
    } finally {
      setLoading(false);
    }
  };

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_notes')
        .select('*')
        .eq('enquiry_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      setUpdating(true);
      const { error } = await supabase
        .from('enquiries')
        .update({ status: newStatus as any, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchEnquiryDetails();
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const onSubmitNote = async (data: AdminNoteData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('You must be logged in to add notes');
        return;
      }

      const { error } = await supabase.from('admin_notes').insert({
        enquiry_id: id!,
        admin_user_id: user.id,
        body: data.body,
      });

      if (error) throw error;
      await fetchNotes();
      reset();
      toast.success('Note added successfully');
    } catch (error) {
      console.error('Error adding note:', error);
      toast.error('Failed to add note');
    }
  };

  const downloadLogo = async (logoPath: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('enquiry-uploads')
        .download(logoPath);

      if (error) {
        console.error('Storage download error:', error);
        toast.error('Failed to download logo. The file may not exist.');
        return;
      }

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = logoPath.split('/').pop() || 'logo';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Logo downloaded successfully');
    } catch (error) {
      console.error('Error downloading logo:', error);
      toast.error('Failed to download logo');
    }
  };

  const deleteEnquiry = async () => {
    try {
      const { error } = await supabase
        .from('enquiries')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Enquiry deleted successfully');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting enquiry:', error);
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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
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
                    <Building2 className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Agency Name</p>
                      <p className="font-medium">{enquiry.agency_name}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Name</p>
                      <p className="font-medium">{enquiry.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${enquiry.email}`} className="font-medium text-blue-600 hover:underline">
                        {enquiry.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${enquiry.phone}`} className="font-medium text-blue-600 hover:underline">
                        {enquiry.phone}
                      </a>
                    </div>
                  </div>
                </div>
                {enquiry.locations && (
                  <div className="flex items-start space-x-3 pt-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Locations</p>
                      <p className="font-medium">{enquiry.locations}</p>
                    </div>
                  </div>
                )}
                {enquiry.areas_served && (
                  <div className="flex items-start space-x-3 pt-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Areas Served</p>
                      <p className="font-medium">{enquiry.areas_served}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Package Details */}
            <Card>
              <CardHeader>
                <CardTitle>Package Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-500">Package Type</Label>
                  <p className="font-medium mt-1">
                    {enquiry.package_type === 'template_one' && 'Template One (£5,000)'}
                    {enquiry.package_type === 'template_two' && 'Template Two (£12,000)'}
                    {enquiry.package_type === 'custom_quote' && 'Custom Quote'}
                  </p>
                </div>

                {/* Template Customisation */}
                {(enquiry.package_type === 'template_one' || enquiry.package_type === 'template_two') && (
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-semibold">Template Customisation</h4>
                    {enquiry.template_theme_color && (
                      <div className="flex items-center space-x-3">
                        <Palette className="h-5 w-5 text-gray-400" />
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">Theme Color:</span>
                          <div className="flex items-center space-x-2">
                            <div
                              className="w-8 h-8 rounded border-2 border-gray-300"
                              style={{ backgroundColor: enquiry.template_theme_color }}
                            />
                            <span className="font-mono text-sm">{enquiry.template_theme_color}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {enquiry.template_font && (
                      <div>
                        <Label className="text-gray-500">Selected Font</Label>
                        <p className="font-medium mt-1">{enquiry.template_font}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Custom Requirements */}
                {enquiry.package_type === 'custom_quote' && enquiry.requirements && (
                  <div className="pt-4 border-t">
                    <Label className="text-gray-500">Project Requirements</Label>
                    <p className="mt-2 text-gray-700 whitespace-pre-wrap">{enquiry.requirements}</p>
                  </div>
                )}

                {/* Additional Information */}
                {(enquiry.desired_domain || enquiry.existing_website || enquiry.notes) && (
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold">Additional Information</h4>
                    {enquiry.desired_domain && (
                      <div>
                        <Label className="text-gray-500">Desired Domain</Label>
                        <p className="font-medium mt-1">{enquiry.desired_domain}</p>
                      </div>
                    )}
                    {enquiry.existing_website && (
                      <div>
                        <Label className="text-gray-500">Existing Website</Label>
                        <a
                          href={enquiry.existing_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline flex items-center space-x-1 mt-1"
                        >
                          <span>{enquiry.existing_website}</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                    {enquiry.notes && (
                      <div>
                        <Label className="text-gray-500">Notes</Label>
                        <p className="mt-2 text-gray-700 whitespace-pre-wrap">{enquiry.notes}</p>
                      </div>
                    )}
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
                <form onSubmit={handleSubmit(onSubmitNote)} className="space-y-3">
                  <div>
                    <Label htmlFor="note">Add Note</Label>
                    <Textarea
                      id="note"
                      {...register('body')}
                      placeholder="Add an internal note about this enquiry..."
                      rows={3}
                    />
                    {errors.body && (
                      <p className="text-sm text-red-600 mt-1">{errors.body.message}</p>
                    )}
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Note'}
                  </Button>
                </form>

                {notes.length > 0 && (
                  <div className="space-y-3 pt-4 border-t">
                    {notes.map((note) => (
                      <div key={note.id} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{note.body}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {format(new Date(note.created_at), 'dd MMM yyyy HH:mm')}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
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
                    {format(new Date(enquiry.created_at), 'dd MMM yyyy HH:mm')}
                  </p>
                  <p>
                    <span className="font-medium">Updated:</span>{' '}
                    {format(new Date(enquiry.updated_at), 'dd MMM yyyy HH:mm')}
                  </p>
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