import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

const NewsArticle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = () => {
      const savedArticles = localStorage.getItem('newsArticles');
      if (savedArticles && slug) {
        const articles = JSON.parse(savedArticles);
        // First try to find by slug, fallback to id for backward compatibility
        const foundArticle = articles.find((a: NewsArticle) =>
          (a.slug === slug || a.id === slug) && a.status === 'published'
        );
        setArticle(foundArticle || null);
      }
      setLoading(false);
    };

    loadArticle();
  }, [slug]);

  const handleShare = () => {
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <Layout>
        <Head
          title={`${article.title} - UK49s News`}
          description={article.excerpt}
          keywords={`${article.category}, UK49s, lottery news`}
          canonical={`https://lucky-number-finder-uk.lovable.app/news/${article?.slug || "not-found"} `}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/news">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            to="/news"
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to News
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4">
              {article.category}
            </Badge>
            {article.featured && (
              <Badge variant="destructive" className="mr-4">
                Featured
              </Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.time}</span>
            </div>
          </div>

          {/* Share Actions */}
          <div className="flex items-center gap-3 pb-6 border-b">
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Bookmark
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Published on {new Date(article.date).toLocaleDateString('en-GB')} at {article.time}
            </div>
            <Link to="/news">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                More News
              </Button>
            </Link>
          </div>
        </footer>
      </article>

      <style>{`
        .article-content {
          line-height: 1.8;
        }
        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4,
        .article-content h5,
        .article-content h6 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #1f2937;
        }
        .article-content h1 {
          font-size: 2rem;
        }
        .article-content h2 {
          font-size: 1.75rem;
        }
        .article-content h3 {
          font-size: 1.5rem;
        }
        .article-content p {
          margin-bottom: 1.5rem;
          color: #374151;
        }
        .article-content ul,
        .article-content ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          color: #374151;
        }
        .article-content strong {
          font-weight: 600;
          color: #1f2937;
        }
        .article-content em {
          font-style: italic;
        }
        .article-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 2rem 0;
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
    </Layout>
  );
};

export default NewsArticle;