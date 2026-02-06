# MoveIn-Media - Estate Agent Website Service Platform

A production-ready marketing website and admin dashboard for a service business that designs and builds websites exclusively for estate agents.

## 🎯 Project Overview

MoveIn-Media is a comprehensive platform that allows estate agents to:
- Browse and compare three website packages (Template One, Template Two, and Fully Customised)
- Submit enquiries with specific customization preferences
- Template packages have FIXED layouts with customization limited to: theme colour, logo, and font

Admin users can:
- Review and manage all enquiries through a secure dashboard
- Update enquiry status
- Add internal notes
- Download uploaded logos

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Validation**: Zod
- **Forms**: React Hook Form
- **Backend**: Supabase (Auth + Database + Storage)
- **Date Handling**: date-fns

### Key Features
- ✅ Three distinct enquiry flows (Template One, Template Two, Custom Quote)
- ✅ Template customisation LIMITED to colour, logo, and font
- ✅ Supabase Authentication with admin-only access
- ✅ Row Level Security (RLS) for data protection
- ✅ File upload for agency logos
- ✅ Admin dashboard with filtering and search
- ✅ Enquiry status management
- ✅ Internal admin notes system
- ✅ No email notifications (manual review process)
- ✅ No payment processing or invoicing
- ✅ Mobile-responsive design

## 📁 Project Structure

```
/src
├── app/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   └── App.tsx          # Main app with routing
├── components/
│   ├── PublicLayout.tsx
│   ├── AdminLayout.tsx
│   └── TemplateEnquiryForm.tsx
├── contexts/
│   └── AuthContext.tsx  # Authentication context & ProtectedRoute
├── lib/
│   ├── supabase.ts      # Supabase client setup
│   └── validation.ts    # Zod schemas
├── pages/
│   ├── Homepage.tsx
│   ├── PackagesPage.tsx
│   ├── TemplateOnePage.tsx
│   ├── TemplateTwoPage.tsx
│   ├── CustomQuotePage.tsx
│   ├── FAQPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   ├── AdminLoginPage.tsx
│   ├── AdminDashboardPage.tsx
│   └── EnquiryDetailPage.tsx
└── types/
    └── database.ts      # TypeScript types for Supabase
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)
- Git

### 1. Supabase Project Setup

1. Go to [https://supabase.com](https://supabase.com) and create a new project
2. Wait for the database to be provisioned
3. Go to Project Settings → API to get your:
   - Project URL
   - Anon (public) key

### 2. Database Setup

1. In your Supabase project, go to the SQL Editor
2. Copy the contents of `supabase-setup.sql` from this repository
3. Paste and run the SQL script
4. This will create:
   - `profiles`, `enquiries`, and `admin_notes` tables
   - Row Level Security policies
   - Storage bucket for logo uploads
   - Necessary indexes and triggers

### 3. Create Your First Admin User

1. In Supabase, go to Authentication → Users
2. Click "Add User" → "Create new user"
3. Enter an email and password
4. After the user is created, copy their UUID
5. Go to SQL Editor and run:

```sql
UPDATE public.profiles
SET is_admin = true
WHERE id = 'paste-your-user-uuid-here';
```

### 4. Configure Storage

1. In Supabase, go to Storage
2. The `enquiry-uploads` bucket should already be created by the SQL script
3. Verify the bucket exists and policies are applied

### 5. Local Development Setup

1. Clone this repository
2. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

3. Fill in your Supabase credentials in `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173)

## 📋 Package Offerings

### Template One - £5,000
- Up to 5 pages
- Property listing showcase
- Contact forms
- Mobile responsive
- Basic SEO
- **Customisation**: Theme colour, logo, font ONLY

### Template Two - £12,000
- Up to 10 pages
- Advanced property showcase
- Agent profiles
- Testimonials and blog sections
- Advanced SEO
- **Customisation**: Theme colour, logo, font ONLY

### Fully Customised - Contact for Quote
- Unlimited pages
- Complete custom design and layout
- All features from Template Two
- Bespoke functionality

## 🔒 Security Features

### Authentication
- Supabase Auth with secure session management
- Admin-only access controlled via `is_admin` flag in profiles table
- Protected routes using React Context

### Row Level Security (RLS)
- Public users can ONLY INSERT enquiries
- Only admins can SELECT, UPDATE, and DELETE enquiries
- Only admins can read/write admin notes
- Only admins can download uploaded files

### Data Protection
- All sensitive operations require authentication
- File uploads are stored securely in Supabase Storage
- No direct database access from client

### Spam Protection
- Client-side validation with Zod
- Honeypot field recommended (not implemented in this version)
- Rate limiting recommended at infrastructure level

## 🧪 Manual Test Plan

### Public Flow Testing

#### Test 1: Homepage Navigation
1. Visit `/`
2. Verify hero section displays correctly
3. Click "View Packages" → should navigate to `/packages`
4. Click "Custom Quote" → should navigate to `/custom`
5. Test mobile responsiveness

#### Test 2: Packages Page
1. Visit `/packages`
2. Verify all three packages display with correct pricing
3. Verify comparison table is visible
4. Verify template limitation notice is prominent
5. Click "Enquire Now" on Template One → navigate to `/templates/template-one`
6. Click "Enquire Now" on Template Two → navigate to `/templates/template-two`
7. Click "Request Quote" on Custom → navigate to `/custom`

#### Test 3: Template One Enquiry
1. Visit `/templates/template-one`
2. Verify limitation notice is displayed
3. Fill in all required fields:
   - Name: "John Smith"
   - Email: "john@test.com"
   - Phone: "07700900000"
   - Agency: "Test Estate Agents"
   - Theme Color: "#0066CC"
   - Font: Select "Inter"
4. Optionally upload a logo (PNG/JPG)
5. Fill optional fields
6. Click "Submit Enquiry"
7. Verify success message appears
8. Verify redirect to homepage after 5 seconds

#### Test 4: Template Two Enquiry
1. Visit `/templates/template-two`
2. Complete similar to Test 3
3. Verify submission works correctly

#### Test 5: Custom Quote Enquiry
1. Visit `/custom`
2. Fill in required fields including project requirements (min 20 chars)
3. Fill optional budget range and timeline
4. Submit enquiry
5. Verify success confirmation

#### Test 6: FAQ Page
1. Visit `/faq`
2. Verify all FAQ items display
3. Test accordion functionality
4. Verify template limitation FAQs are present

#### Test 7: Legal Pages
1. Visit `/privacy` → verify privacy policy displays
2. Visit `/terms` → verify terms of service displays
3. Verify template limitation clause is in terms

### Admin Flow Testing

#### Test 8: Admin Login
1. Visit `/admin/login`
2. Try logging in with incorrect credentials → verify error message
3. Log in with your admin credentials
4. Verify redirect to `/admin`
5. Verify you're not redirected if not admin

#### Test 9: Admin Dashboard
1. On `/admin`, verify:
   - Stats cards show correct counts
   - Enquiries table displays all enquiries
   - Package types are labeled correctly
   - Status badges display with correct colors
2. Test search functionality:
   - Search by name
   - Search by email
   - Search by agency name
3. Test filters:
   - Filter by status (New, In Review, etc.)
   - Filter by package type
   - Verify combined filters work
4. Click "View Details" on an enquiry

#### Test 10: Enquiry Detail Page
1. Verify all enquiry information displays:
   - Contact details
   - Package type
   - Template customisation (for template enquiries)
   - Project requirements (for custom quotes)
   - Additional information
2. Test status update:
   - Change status from dropdown
   - Verify status updates successfully
   - Verify updated_at timestamp changes
3. Test admin notes:
   - Add a note
   - Verify note appears in list
   - Verify timestamp is correct
4. If logo was uploaded:
   - Click "Download Logo"
   - Verify file downloads

#### Test 11: Logo Download
1. Find an enquiry with an uploaded logo
2. Click "Download Logo" button
3. Verify file downloads correctly
4. Verify admin-only access (non-admins cannot download)

#### Test 12: Admin Logout
1. Click "Sign Out" in admin header
2. Verify redirect to `/admin/login`
3. Try accessing `/admin` directly → verify redirect to login

### Data Validation Testing

#### Test 13: Form Validation
1. Try submitting Template One form with:
   - Missing required fields → verify error messages
   - Invalid email → verify email validation
   - Invalid hex color (e.g., "blue") → verify color validation
   - Short phone number → verify validation
2. Verify validation works for all forms

#### Test 14: Database Constraints
1. Via Supabase SQL Editor, try:
   - Inserting enquiry with invalid package_type → should fail
   - Inserting enquiry with invalid status → should fail
2. Verify RLS policies work:
   - Try querying enquiries without auth → should return empty
   - Try updating enquiry without admin status → should fail

### Security Testing

#### Test 15: Protected Routes
1. Log out of admin account
2. Try accessing `/admin` → verify redirect to login
3. Try accessing `/admin/enquiries/any-id` → verify redirect to login
4. Try accessing admin API endpoints directly → verify RLS prevents access

#### Test 16: RLS Policies
1. Create a non-admin user in Supabase
2. Try to query enquiries table → should return no results
3. Try to insert enquiry → should succeed
4. Verify admin user can see all enquiries

## 📊 Database Schema

### profiles
- `id` (UUID, PK) - References auth.users
- `full_name` (TEXT)
- `is_admin` (BOOLEAN) - Determines admin access
- `created_at` (TIMESTAMP)

### enquiries
- `id` (UUID, PK)
- `package_type` (TEXT) - 'template_one', 'template_two', or 'custom_quote'
- `status` (TEXT) - 'new', 'in_review', 'responded', 'won', 'lost', 'archived'
- `name`, `email`, `phone`, `agency_name` (TEXT, required)
- `locations`, `areas_served` (TEXT, optional)
- `requirements` (TEXT, for custom quotes)
- `template_theme_color`, `template_font`, `template_logo_path` (TEXT, for templates)
- `desired_domain`, `existing_website`, `notes` (TEXT, optional)
- `created_at`, `updated_at` (TIMESTAMP)

### admin_notes
- `id` (UUID, PK)
- `enquiry_id` (UUID, FK)
- `admin_user_id` (UUID, FK)
- `body` (TEXT)
- `created_at` (TIMESTAMP)

### Storage
- Bucket: `enquiry-uploads` - stores uploaded logos

## 🎨 Design Decisions

### Why React + Vite (not Next.js)?
This project was built in a Vite environment as specified, maintaining the same patterns and architecture principles that would be used in Next.js.

### Why No Email Notifications?
Per requirements, all enquiries are manually reviewed by admins. No automated emails are sent to reduce complexity and ensure personalized communication.

### Why Fixed Template Layouts?
To enable fixed pricing and fast delivery. Clients know exactly what they're getting and what customizations are allowed.

### Why Supabase?
- Built-in auth system
- Row Level Security for data protection
- File storage included
- Real-time capabilities (for future features)
- Easy to deploy and scale

## 🔧 Customization

### Adding New Template Fonts
Edit `/src/lib/validation.ts` and add to the `TEMPLATE_FONTS` array.

### Modifying Package Prices
Update prices in:
- `/src/pages/PackagesPage.tsx`
- `/src/pages/TemplateOnePage.tsx`
- `/src/pages/TemplateTwoPage.tsx`

### Adding New Enquiry Statuses
1. Update the type in `/src/types/database.ts`
2. Update validation in `/src/lib/validation.ts`
3. Update SQL enum in database
4. Add to status colors in admin pages

## 📝 Important Notes

### Template Limitations
**CRITICAL**: Template packages can ONLY be customized with:
1. Theme colour (hex code)
2. Logo upload
3. Font selection

No other changes to design or layout are permitted. This is enforced through:
- Prominent notices on all template pages
- FAQ entries
- Terms of Service
- Form validation

### No Payment Processing
This system does NOT handle payments. Clients are invoiced manually outside the system after project agreement.

### No Client Dashboard
There is NO client-facing dashboard. Only admin users can log in to manage enquiries.

## 🐛 Troubleshooting

### "Failed to fetch" errors
- Check your `.env` file has correct Supabase credentials
- Verify Supabase project is running
- Check browser console for CORS errors

### "Not authenticated" errors in admin
- Clear browser localStorage and cookies
- Re-login with admin credentials
- Verify user has `is_admin = true` in profiles table

### Logo upload fails
- Verify `enquiry-uploads` bucket exists in Supabase Storage
- Check storage policies are applied
- Verify file size is under 5MB
- Check file format is image/*

### RLS policy errors
- Re-run the SQL setup script
- Verify policies exist: `SELECT * FROM pg_policies WHERE schemaname = 'public';`
- Check user's is_admin status

## 📄 License

This is a production-ready application built for EstateWeb Pro. All rights reserved.

## 🤝 Support

For questions or issues with this codebase, please refer to the test plan above or check the inline code comments.

## ☁️ Deploy to Vercel (via GitHub)

This project is configured for a **Vite + React Router (SPA)** deployment on **Vercel**.

### 1) Push the project to GitHub

If your repo already exists at `CodeStar86/Move-In-Media`, from the project folder run:

```bash
git init
git add -A
git commit -m "Initial commit"

git branch -M main
git remote add origin https://github.com/CodeStar86/Move-In-Media.git
git push -u origin main
```

### 2) Import into Vercel

1. In Vercel, click **Add New → Project** and import the `Move-In-Media` repo.
2. Build settings should auto-detect. If prompted:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add environment variables in Vercel **Project Settings → Environment Variables** (see `.env` section below).
4. Deploy.

> Note: `vercel.json` includes a rewrite so React Router routes (e.g. `/packages`, `/admin`) work on refresh.

### Recommended environment variables

If you are using Supabase, set these in Vercel (and locally in `.env`):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

