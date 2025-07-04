
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, BarChart3, TrendingUp, Calculator, HelpCircle, Phone, Newspaper, BookOpen, Home, Archive, Menu, X, History, Info } from 'lucide-react';
import PredictionsMenu from './PredictionsMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState('UK49s Results');
  const [logoFontSize, setLogoFontSize] = useState('24');
  const [logoColor, setLogoColor] = useState('#000000');
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/results', label: 'Results', icon: Archive },
    { path: '/history', label: 'History', icon: History },
    { path: '/predictions', label: 'Predictions', icon: TrendingUp },
    { path: '/statistics', label: 'Statistics', icon: BarChart3 },
    { path: '/tools', label: 'Tools', icon: Calculator },
    { path: '/guide', label: 'How to Play', icon: BookOpen },
    { path: '/news', label: 'News', icon: Newspaper },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  useEffect(() => {
    // Load text logo settings from localStorage
    const savedLogoText = localStorage.getItem('siteLogoText');
    const savedFontSize = localStorage.getItem('siteLogoFontSize');
    const savedColor = localStorage.getItem('siteLogoColor');

    if (savedLogoText) setLogoText(savedLogoText);
    if (savedFontSize) setLogoFontSize(savedFontSize);
    if (savedColor) setLogoColor(savedColor);

    // Listen for storage changes to update in real-time
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'siteLogoText' && e.newValue) {
        setLogoText(e.newValue);
      } else if (e.key === 'siteLogoFontSize' && e.newValue) {
        setLogoFontSize(e.newValue);
      } else if (e.key === 'siteLogoColor' && e.newValue) {
        setLogoColor(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen page-gradient">
      {/* Header - Optimized styles */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-full">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h1 
                  style={{ 
                    fontSize: `${logoFontSize}px`, 
                    color: logoColor,
                    fontWeight: 'bold'
                  }}
                  className="text-lg sm:text-2xl font-bold text-gray-900"
                >
                  {logoText}
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Your trusted lottery companion</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Predictions Menu */}
              <PredictionsMenu />
              
              {navItems.slice(4, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Secondary Navigation - Hidden on Mobile */}
      <div className="hidden md:block bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 py-2 overflow-x-auto">
            {navItems.slice(6).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-2 sm:px-0">
        {children}
      </main>

      {/* Footer - Optimized styles */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">UK49s Results</h3>
              <p className="text-gray-400 text-sm">
                The most comprehensive UK49s lottery results and predictions platform.
                Stay updated with the latest draws and improve your chances.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:contents">
              <div>
                <h4 className="text-md font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/results" className="text-gray-400 hover:text-white">Latest Results</Link></li>
                  <li><Link to="/history" className="text-gray-400 hover:text-white">History</Link></li>
                  <li><Link to="/predictions" className="text-gray-400 hover:text-white">Predictions</Link></li>
                  <li><Link to="/statistics" className="text-gray-400 hover:text-white">Statistics</Link></li>
                  <li><Link to="/guide" className="text-gray-400 hover:text-white">How to Play</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/tools" className="text-gray-400 hover:text-white">Tools</Link></li>
                  <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="text-md font-semibold mb-4">Disclaimer</h4>
              <p className="text-gray-400 text-xs">
                This website is for informational purposes only. 
                Gambling can be addictive. Please play responsibly.
                You must be 18+ to participate in lottery games.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 UK49s Results. All rights reserved. | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link> | Responsible Gaming</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
