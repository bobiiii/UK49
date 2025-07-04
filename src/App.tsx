
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';

// Core pages - loaded immediately
const Index = lazy(() => import("./pages/Index"));
const Results = lazy(() => import("./pages/Results"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Secondary pages - loaded when needed
const History = lazy(() => import("./pages/History"));
const Predictions = lazy(() => import("./pages/Predictions"));
const Statistics = lazy(() => import("./pages/Statistics"));
const Tools = lazy(() => import("./pages/Tools"));
const Guide = lazy(() => import("./pages/Guide"));
const News = lazy(() => import("./pages/News"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));

// Analysis pages - loaded when needed
const HotBalls = lazy(() => import("./pages/HotBalls"));
const ColdBalls = lazy(() => import("./pages/ColdBalls"));
const OverdueBalls = lazy(() => import("./pages/OverdueBalls"));

// Admin pages - loaded only when accessed
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const PredictionsAdmin = lazy(() => import("./pages/PredictionsAdmin"));
const AdsTxtManager = lazy(() => import("./pages/AdsTxtManager"));
const AdsTxt = lazy(() => import("./pages/AdsTxt"));
const GoogleVerificationManager = lazy(() => import("./pages/GoogleVerificationManager"));
const NewsManager = lazy(() => import("./pages/NewsManager"));

// Optimize QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Optimized loading component with minimal CSS
const PageLoader = () => (
  <div className="page-loader min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center space-y-4">
      <div className="spinner animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Load non-critical CSS asynchronously
const loadNonCriticalCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/styles/non-critical.css';
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};

const App = () => {
  useEffect(() => {
    // Load non-critical CSS after component mounts
    const timer = setTimeout(loadNonCriticalCSS, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/results" element={<Results />} />
                <Route path="/history" element={<History />} />
                <Route path="/predictions" element={<Predictions />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/hot-balls" element={<HotBalls />} />
                <Route path="/cold-balls" element={<ColdBalls />} />
                <Route path="/overdue-balls" element={<OverdueBalls />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:slug" element={<NewsArticle />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/predictions" element={<PredictionsAdmin />} />
                <Route path="/admin/ads-txt" element={<AdsTxtManager />} />
                <Route path="/admin/google-verification" element={<GoogleVerificationManager />} />
                <Route path="/admin/news" element={<NewsManager />} />
                <Route path="/ads.txt" element={<AdsTxt />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
