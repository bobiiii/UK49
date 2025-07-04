import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, LogOut, User, ExternalLink, FileText, CheckCircle, Newspaper, Home, Archive, History, TrendingUp, BarChart3, Calculator, BookOpen, Info, HelpCircle, Phone, Shield, Settings, Type } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import UserProfileDialog from '../components/admin/UserProfileDialog';
import PageMetaDialog from '../components/admin/PageMetaDialog';
import TextLogoDialog from '../components/admin/TextLogoDialog';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [showMetaDialog, setShowMetaDialog] = useState(false);
  const [showTextLogoDialog, setShowTextLogoDialog] = useState(false);
  const [selectedPage, setSelectedPage] = useState<{ path: string; label: string } | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const sitePages = [
    { path: '/', label: 'Homepage', icon: Home },
    { path: '/results', label: 'Results', icon: Archive },
    { path: '/history', label: 'History', icon: History },
    { path: '/predictions', label: 'Predictions', icon: TrendingUp },
    { path: '/statistics', label: 'Statistics', icon: BarChart3 },
    { path: '/hot-balls', label: 'Hot Balls', icon: TrendingUp },
    { path: '/cold-balls', label: 'Cold Balls', icon: BarChart3 },
    { path: '/overdue-balls', label: 'Overdue Balls', icon: TrendingUp },
    { path: '/tools', label: 'Tools', icon: Calculator },
    { path: '/guide', label: 'How to Play', icon: BookOpen },
    { path: '/news', label: 'News', icon: Newspaper },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/privacy', label: 'Privacy Policy', icon: Shield },
  ];

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully',
    });
    navigate('/admin/login');
  };

  const handleVisitWebsite = () => {
    window.open('/', '_blank');
  };

  const handleManageAdsTxt = () => {
    navigate('/admin/ads-txt');
  };

  const handleManageGoogleVerification = () => {
    navigate('/admin/google-verification');
  };

  const handleManageNews = () => {
    navigate('/admin/news');
  };

  const handleManagePredictions = () => {
    navigate('/admin/predictions');
  };

  const handleManagePageMeta = (page: { path: string; label: string }) => {
    setSelectedPage(page);
    setShowMetaDialog(true);
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button onClick={handleVisitWebsite} variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
              <Button onClick={() => setShowProfileDialog(true)} variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access frequently used admin features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button onClick={handleManagePredictions} className="h-auto p-6 flex flex-col items-center gap-2">
                <TrendingUp className="h-8 w-8" />
                <span>Manage Predictions</span>
              </Button>
              <Button onClick={handleManageNews} variant="outline" className="h-auto p-6 flex flex-col items-center gap-2">
                <Newspaper className="h-8 w-8" />
                <span>Manage News</span>
              </Button>
              <Button onClick={handleManageAdsTxt} variant="outline" className="h-auto p-6 flex flex-col items-center gap-2">
                <FileText className="h-8 w-8" />
                <span>Ads.txt</span>
              </Button>
              <Button onClick={handleManageGoogleVerification} variant="outline" className="h-auto p-6 flex flex-col items-center gap-2">
                <CheckCircle className="h-8 w-8" />
                <span>Google Verification</span>
              </Button>
              <Button onClick={() => setShowTextLogoDialog(true)} variant="outline" className="h-auto p-6 flex flex-col items-center gap-2">
                <Type className="h-8 w-8" />
                <span>Text Logo</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Site Management Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Site Management</CardTitle>
            <CardDescription>Manage meta information for all website pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sitePages.map((page) => {
                const Icon = page.icon;
                return (
                  <div key={page.path} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center mb-3">
                      <Icon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-gray-900">{page.label}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleManagePageMeta(page)}
                      className="w-full"
                    >
                      <Settings className="h-3 w-3 mr-1" />
                      Meta Settings
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialogs */}
      <UserProfileDialog
        open={showProfileDialog}
        onOpenChange={setShowProfileDialog}
      />

      <PageMetaDialog
        open={showMetaDialog}
        onOpenChange={setShowMetaDialog}
        page={selectedPage}
      />

      <TextLogoDialog
        open={showTextLogoDialog}
        onOpenChange={setShowTextLogoDialog}
      />
    </div>
  );
};

export default AdminDashboard;
