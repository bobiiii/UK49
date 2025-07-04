
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Save, Copy, LogOut, ExternalLink, CheckCircle } from 'lucide-react';

const GoogleVerificationManager = () => {
  const [verificationCode, setVerificationCode] = useState('');
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
    // Load verification code from localStorage
    const savedCode = localStorage.getItem('google_verification_code');
    if (savedCode) {
      setVerificationCode(savedCode);
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
    localStorage.setItem('google_verification_code', verificationCode);
    setIsEditing(false);
    toast({
      title: 'Verification Code Updated',
      description: 'Your Google verification code has been saved successfully',
    });
  };

  const handleCopyCode = () => {
    const fullMetaTag = `<meta name="google-site-verification" content="${verificationCode}" />`;
    navigator.clipboard.writeText(fullMetaTag);
    toast({
      title: 'Meta Tag Copied',
      description: 'The Google verification meta tag has been copied to clipboard',
    });
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Button onClick={handleBackToDashboard} variant="outline" size="sm">
                ← Back to Dashboard
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">Google Site Verification</h1>
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
                  <CardTitle>Google Site Verification Code</CardTitle>
                  <CardDescription>
                    Add your Google site verification meta tag content for Google Search Console verification.
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  {verificationCode && (
                    <Button variant="outline" size="sm" onClick={handleCopyCode}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Meta Tag
                    </Button>
                  )}
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
                  <div>
                    <Label htmlFor="verification-code">Verification Content</Label>
                    <Input
                      id="verification-code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter your Google verification code (content value only)"
                      className="mt-1"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Only enter the content value from the meta tag, not the full HTML tag.
                    </p>
                  </div>
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
                <div className="space-y-4">
                  {verificationCode ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800">Verification Code Active</span>
                      </div>
                      <div className="bg-white rounded p-3 border">
                        <code className="text-sm break-all">
                          &lt;meta name="google-site-verification" content="{verificationCode}" /&gt;
                        </code>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800">
                        No verification code added yet. Click Edit to add your Google verification code.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">How to Get Your Verification Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Step 1: Access Google Search Console</h4>
                  <p className="text-sm text-gray-600">
                    Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Search Console</a> and add your property.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Step 2: Choose HTML Tag Method</h4>
                  <p className="text-sm text-gray-600">
                    Select "HTML tag" as your verification method.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Step 3: Copy the Content Value</h4>
                  <p className="text-sm text-gray-600">
                    Google will provide a meta tag like: <code className="bg-gray-100 px-1 rounded">&lt;meta name="google-site-verification" content="YOUR_CODE_HERE" /&gt;</code>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Copy only the <strong>YOUR_CODE_HERE</strong> part and paste it above.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Step 4: Verify</h4>
                  <p className="text-sm text-gray-600">
                    After saving, go back to Google Search Console and click "Verify".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoogleVerificationManager;
