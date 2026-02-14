import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Building2, LayoutDashboard, Mail, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Enquiries', href: '/admin', icon: Mail },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin header */}
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-auto min-h-16 py-3 sm:py-0 sm:h-16 justify-between items-center flex-wrap sm:flex-nowrap gap-3">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <Link to="/admin" className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <span className="text-lg sm:text-xl font-bold text-gray-900">Admin Panel</span>
              </Link>
              <nav className="hidden md:flex md:space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.href)
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
              <Link to="/" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
                View Site
              </Link>
              {user && (
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                  <div className="text-xs sm:text-sm text-gray-600 truncate max-w-[150px] sm:max-w-none">
                    <User className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="hidden sm:inline">{user.email}</span>
                    <span className="sm:hidden">{user.email?.split('@')[0]}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={async () => {
                      try {
                        await signOut();
                        toast.success('Successfully logged out');
                        navigate('/admin/login');
                      } catch (error) {
                        toast.error('Failed to log out');
                      }
                    }}
                  >
                    <LogOut className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Logout</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}