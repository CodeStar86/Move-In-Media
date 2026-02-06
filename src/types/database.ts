export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          is_admin: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          is_admin?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          is_admin?: boolean;
          created_at?: string;
        };
      };
      enquiries: {
        Row: {
          id: string;
          package_type: 'template_one' | 'template_two' | 'custom_quote';
          status: 'new' | 'in_review' | 'responded' | 'won' | 'lost' | 'archived';
          name: string;
          email: string;
          phone: string;
          agency_name: string;
          locations: string | null;
          areas_served: string | null;
          requirements: string | null;
          template_theme_color: string | null;
          template_font: string | null;
          template_logo_path: string | null;
          desired_domain: string | null;
          existing_website: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          package_type: 'template_one' | 'template_two' | 'custom_quote';
          status?: 'new' | 'in_review' | 'responded' | 'won' | 'lost' | 'archived';
          name: string;
          email: string;
          phone: string;
          agency_name: string;
          locations?: string | null;
          areas_served?: string | null;
          requirements?: string | null;
          template_theme_color?: string | null;
          template_font?: string | null;
          template_logo_path?: string | null;
          desired_domain?: string | null;
          existing_website?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          package_type?: 'template_one' | 'template_two' | 'custom_quote';
          status?: 'new' | 'in_review' | 'responded' | 'won' | 'lost' | 'archived';
          name?: string;
          email?: string;
          phone?: string;
          agency_name?: string;
          locations?: string | null;
          areas_served?: string | null;
          requirements?: string | null;
          template_theme_color?: string | null;
          template_font?: string | null;
          template_logo_path?: string | null;
          desired_domain?: string | null;
          existing_website?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_notes: {
        Row: {
          id: string;
          enquiry_id: string;
          admin_user_id: string;
          body: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          enquiry_id: string;
          admin_user_id: string;
          body: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          enquiry_id?: string;
          admin_user_id?: string;
          body?: string;
          created_at?: string;
        };
      };
    };
  };
}
