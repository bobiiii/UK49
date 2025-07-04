import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LotteryBalls from '../components/LotteryBalls';
import { Calendar, Clock, User, TrendingUp, Award, AlertCircle, Loader2 } from 'lucide-react';
import Head from '@/components/Head';

interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  time: string;
  author: string;
  category: string;
  featured: boolean;
  status: 'published' | 'draft';
  createdAt: string;
}

const News = () => {
  const [allArticles, setAllArticles] = useState<NewsArticle[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<NewsArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const articlesPerPage = 3;

  useEffect(() => {
    const loadArticles = () => {
      // Load articles from localStorage
      const savedArticles = localStorage.getItem('newsArticles');
      if (savedArticles) {
        const articles = JSON.parse(savedArticles);
        // Only show published articles
        const publishedArticles = articles.filter((article: NewsArticle) => article.status === 'published');
        setAllArticles(publishedArticles);
        // Show first page of articles
        setDisplayedArticles(publishedArticles.slice(0, articlesPerPage));
      } else {
        // Keep default articles if no saved articles
        const defaultArticles: NewsArticle[] = [
          {
            id: '1',
            slug: 'record-breaking-uk49s-jackpot-reached-this-week',
            title: "Record-Breaking UK49s Jackpot Reached This Week",
            excerpt: "The UK49s lottery sees its highest jackpot in months as rollover continues to build excitement among players nationwide.",
            date: "2024-06-30",
            time: "09:30",
            author: "Sarah Johnson",
            category: "Jackpot News",
            featured: true,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '2',
            slug: 'hot-numbers-analysis-june-2024-statistics',
            title: "Hot Numbers Analysis: June 2024 Statistics",
            excerpt: "Our monthly analysis reveals surprising trends in number frequency, with some unexpected changes in the most drawn numbers.",
            date: "2024-06-29",
            time: "14:15",
            author: "Mike Thompson",
            category: "Analysis",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '3',
            slug: 'local-syndicate-wins-50000-with-strategic-play',
            title: "Local Syndicate Wins £50,000 with Strategic Play",
            excerpt: "A group of 12 work colleagues from Manchester share their winning strategy that led to their recent teatime draw success.",
            date: "2024-06-28",
            time: "16:45",
            author: "Emma Davies",
            category: "Winner Stories",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '4',
            slug: 'new-mobile-app-features-for-uk49s-players',
            title: "New Mobile App Features for UK49s Players",
            excerpt: "Enhanced prediction algorithms and real-time notifications now available to help players stay updated with the latest draws.",
            date: "2024-06-27",
            time: "11:20",
            author: "Tech Team",
            category: "Technology",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '5',
            slug: 'summer-playing-patterns-what-to-expect',
            title: "Summer Playing Patterns: What to Expect",
            excerpt: "Historical data shows interesting seasonal variations in UK49s draws. Learn how summer months typically affect number patterns.",
            date: "2024-06-26",
            time: "13:30",
            author: "Dr. Patricia Mills",
            category: "Analysis",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '6',
            slug: 'weekly-draw-results-show-surprising-patterns',
            title: "Weekly Draw Results Show Surprising Patterns",
            excerpt: "This week's UK49s draws revealed some interesting number combinations that statisticians are analyzing for future predictions.",
            date: "2024-06-25",
            time: "10:15",
            author: "Statistical Team",
            category: "Analysis",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '7',
            slug: 'player-tips-maximizing-your-winning-chances',
            title: "Player Tips: Maximizing Your Winning Chances",
            excerpt: "Expert advice on how to approach UK49s betting strategies, including syndicate play and number selection techniques.",
            date: "2024-06-24",
            time: "15:30",
            author: "Gaming Expert",
            category: "Tips",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          },
          {
            id: '8',
            slug: 'monthly-winners-spotlight-june-2024',
            title: "Monthly Winners Spotlight: June 2024",
            excerpt: "Meet this month's biggest winners and learn about their winning strategies and lucky number choices.",
            date: "2024-06-23",
            time: "12:45",
            author: "Winner Stories Team",
            category: "Winner Stories",
            featured: false,
            status: 'published',
            content: '',
            createdAt: ''
          }
        ];
        setAllArticles(defaultArticles);
        setDisplayedArticles(defaultArticles.slice(0, articlesPerPage));
      }
    };

    loadArticles();

    // Listen for localStorage changes (when new articles are added from admin)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'newsArticles') {
        loadArticles();
        setCurrentPage(1); // Reset to first page
      }
    };

    // Listen for manual refresh trigger
    const handleManualRefresh = () => {
      loadArticles();
      setCurrentPage(1);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('newsArticlesUpdated', handleManualRefresh);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('newsArticlesUpdated', handleManualRefresh);
    };
  }, []);

  const loadMoreArticles = () => {
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const nextPageStart = currentPage * articlesPerPage;
      const nextPageEnd = nextPageStart + articlesPerPage;
      const nextArticles = allArticles.slice(nextPageStart, nextPageEnd);

      setDisplayedArticles(prev => [...prev, ...nextArticles]);
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    }, 800);
  };

  const hasMoreArticles = currentPage * articlesPerPage < allArticles.length;

  const handleReadMore = (article: NewsArticle) => {
    // Open article in new tab using slug
    window.open(`/news/${article.slug || article.id}`, '_blank');
  };
  const latestResults = [23, 31, 38, 42, 45, 49];

  return (
    <Layout>
      <Head
        title="Cold Balls - Least Frequent UK49s Numbers"
        description="Explore the coldest UK49s numbers that appear least frequently in recent draws. Find patterns and opportunities in number selection."
        keywords="UK49s cold numbers, rare numbers, lottery analysis, cold balls, number patterns"
        canonical="https://lucky-number-finder-uk.lovable.app/cold-balls"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">UK49s News & Updates</h1>
          <p className="text-xl text-gray-600">Stay informed with the latest lottery news, winner stories, and analysis</p>
        </div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {displayedArticles.filter(article => article.featured).map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Featured Story</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>By {article.author}</span>
                    </div>
                    <button
                      onClick={() => handleReadMore(article)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Regular Articles */}
            <div className="space-y-6">
              {displayedArticles.filter(article => !article.featured).map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${article.category === 'Analysis' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'Winner Stories' ? 'bg-green-100 text-green-800' :
                        article.category === 'Technology' ? 'bg-purple-100 text-purple-800' :
                          article.category === 'Tips' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                      }`}>
                      {article.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>By {article.author}</span>
                    </div>
                    <button
                      onClick={() => handleReadMore(article)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMoreArticles && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMoreArticles}
                  disabled={loading}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    `Load More Articles (${Math.min(articlesPerPage, allArticles.length - displayedArticles.length)} more)`
                  )}
                </button>
              </div>
            )}

            {!hasMoreArticles && displayedArticles.length > articlesPerPage && (
              <div className="text-center mt-8 text-gray-500">
                <p>No more articles to load</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest UK49s news, results, and analysis delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white py-2 px-3 rounded text-sm hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
                <button className="bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700 transition-colors">
                  YouTube
                </button>
                <button className="bg-purple-600 text-white py-2 px-3 rounded text-sm hover:bg-purple-700 transition-colors">
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
