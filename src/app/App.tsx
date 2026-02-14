import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/app/components/ui/sonner';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute, ErrorBoundary } from '@/components';

// Public pages
import {
  Homepage,
  AboutPage,
  PackagesPage,
  TemplateOnePage,
  TemplateTwoPage,
  CustomQuotePage,
  FAQPage,
  TermsPage,
  PrivacyPage,
  FreeWebsiteAuditPage,
  ProcessPage,
  CaseStudiesPage,
  InsightsPage,
  AdminLoginPage,
  AdminDashboardPage,
  EnquiryDetailPage,
} from '@/pages';

// Article pages
import { 
  ArticleValuationEnquiries,
  ArticleMobileUsability,
  ArticleSlowPropertySearch,
  ArticlePortalFeeds,
  ArticleFirstImpressions,
  ArticleCommonMistakes,
  ArticleIncreaseViewings,
  ArticleHiddenCost
} from '@/pages/articles';

// Service pages
import {
  EstateAgentWebsiteDesignPage,
  EstateAgentWebsiteRedesignPage,
  PropertySearchWebsiteDevelopmentPage,
  EstateAgentWebsiteSpeedOptimisationPage,
} from '@/pages/services';

function AppRoutes() {
  return (
    <>
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
        <Route path="/free-website-audit" element={<FreeWebsiteAuditPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/insights" element={<InsightsPage />} />

        {/* Article Routes */}
        <Route path="/insights/why-estate-agent-websites-lose-valuation-enquiries" element={<ArticleValuationEnquiries />} />
        <Route path="/insights/mobile-usability-property-search" element={<ArticleMobileUsability />} />
        <Route path="/insights/slow-property-search-pages-killing-leads" element={<ArticleSlowPropertySearch />} />
        <Route path="/insights/portal-feed-integration-issues" element={<ArticlePortalFeeds />} />
        <Route path="/insights/first-impressions-estate-agent-website-design" element={<ArticleFirstImpressions />} />
        <Route path="/insights/common-mistakes-estate-agents-websites" element={<ArticleCommonMistakes />} />
        <Route path="/insights/increase-property-viewings-website" element={<ArticleIncreaseViewings />} />
        <Route path="/insights/hidden-cost-slow-estate-agent-website" element={<ArticleHiddenCost />} />

        {/* Service Routes */}
        <Route path="/services/estate-agent-website-design" element={<EstateAgentWebsiteDesignPage />} />
        <Route path="/services/estate-agent-website-redesign" element={<EstateAgentWebsiteRedesignPage />} />
        <Route path="/services/property-search-website-development" element={<PropertySearchWebsiteDevelopmentPage />} />
        <Route path="/services/estate-agent-website-speed-optimisation" element={<EstateAgentWebsiteSpeedOptimisationPage />} />

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
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}