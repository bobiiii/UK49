
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, Eye, Copy, LogOut, ExternalLink, User } from 'lucide-react';

const AdsTxtManager = () => {
  const [adsContent, setAdsContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    // Load ads.txt content from localStorage
    const savedContent = localStorage.getItem('ads_txt_content');
    if (savedContent) {
      setAdsContent(savedContent);
    } else {
      // Default content with example
      setAdsContent('# Add your Google AdSense publisher ID here\n# Example: google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n\n');
    }
  }, []);

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

  const handleBackToDashboard = () => {
    navigate('/admin');
  };

  const handleSave = () => {
    localStorage.setItem('ads_txt_content', adsContent);
    setIsEditing(false);
    toast({
      title: 'Ads.txt Updated',
      description: 'Your ads.txt file has been saved successfully',
    });
  };

  const handlePreview = () => {
    window.open('/ads.txt', '_blank');
  };

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/ads.txt`;
    navigator.clipboard.writeText(url);
    toast({
      title: 'URL Copied',
      description: 'The ads.txt URL has been copied to clipboard',
    });
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      {/* Set page title manually without Head component to avoid helmet error */}
      <div className="min-h-screen bg-gray-100">
        {/* Admin Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <Button onClick={handleBackToDashboard} variant="outline" size="sm">
                  ← Back to Dashboard
                </Button>
                <h1 className="text-xl font-semibold text-gray-900">Ads.txt Manager</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={handleVisitWebsite} variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
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
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Ads.txt Content</CardTitle>
                    <CardDescription>
                      Edit your ads.txt file content. This will be available at /ads.txt for ad network verification.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopyUrl}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy URL
                    </Button>
                    <Button variant="outline" size="sm" onClick={handlePreview}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    {!isEditing ? (
                      <Button onClick={() => setIsEditing(true)}>
                        Edit
                      </Button>
                    ) : (
                      <Button onClick={handleSave}>
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <Textarea
                      value={adsContent}
                      onChange={(e) => setAdsContent(e.target.value)}
                      placeholder="Enter your ads.txt content here..."
                      className="min-h-[400px] font-mono text-sm"
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSave}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {adsContent || 'No content added yet. Click Edit to add your ads.txt content.'}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">How to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">For Google AdSense:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Add this line (replace with your actual publisher ID):
                  </p>
                  <code className="bg-gray-100 p-2 rounded text-sm block">
                    google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
                  </code>
                </div>
                <div>
                  <h4 className="font-medium mb-2">File Location:</h4>
                  <p className="text-sm text-gray-600">
                    Your ads.txt file will be accessible at: <strong>{window.location.origin}/ads.txt</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Verification:</h4>
                  <p className="text-sm text-gray-600">
                    After saving, you can verify your ads.txt file by visiting the URL above or clicking the Preview button.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsTxtManager;
