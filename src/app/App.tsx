import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/app/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';

// Public pages
import { Homepage } from '@/pages/Homepage';
import { AboutPage } from '@/pages/AboutPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { TemplateOnePage } from '@/pages/TemplateOnePage';
import { TemplateTwoPage } from '@/pages/TemplateTwoPage';
import { CustomQuotePage } from '@/pages/CustomQuotePage';
import { FAQPage } from '@/pages/FAQPage';
import { TermsPage } from '@/pages/TermsPage';
import { PrivacyPage } from '@/pages/PrivacyPage';

// Admin pages
import { AdminLoginPage } from '@/pages/AdminLoginPage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';
import { EnquiryDetailPage } from '@/pages/EnquiryDetailPage';

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/templates/template-one" element={<TemplateOnePage />} />
            <Route path="/templates/template-two" element={<TemplateTwoPage />} />
            <Route path="/custom" element={<CustomQuotePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* Admin Login Route */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/enquiries/:id"
              element={
                <ProtectedRoute>
                  <EnquiryDetailPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback - redirect to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Global Toast Notifications */}
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}