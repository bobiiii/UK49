
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface HeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
}

const Head = ({ title, description, keywords, canonical }: HeadProps) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [metaData, setMetaData] = useState({
    title,
    description,
    keywords
  });
  const location = useLocation();

  const baseUrl = 'https://abc.com/';

  // Generate canonical URL based on current path

  const getCanonicalUrl = () => {
    if (canonical) {

      return canonical;
    }

    const path = location.pathname;

    // For root path, return just the base URL
    if (path === '/') {
      return baseUrl;
    }

    // For all other paths, append to base URL (remove trailing slash if exists)
    // const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    // return `${baseUrl}${cleanPath}`;
  };

  const currentUrl = getCanonicalUrl();

  useEffect(() => {
    // Load Google verification code from localStorage
    const savedCode = localStorage.getItem('google_verification_code');
    if (savedCode) {
      setVerificationCode(savedCode);
    }

    // Load custom meta data for current page
    const currentPath = location.pathname;
    const savedMeta = localStorage.getItem(`page_meta_${currentPath}`);
    if (savedMeta) {
      try {
        const customMeta = JSON.parse(savedMeta);
        setMetaData({
          title: customMeta.title || title,
          description: customMeta.description || description,
          keywords: customMeta.keywords || keywords
        });
      } catch (error) {
        console.error('Error parsing saved meta data:', error);
        setMetaData({ title, description, keywords });
      }
    } else {
      setMetaData({ title, description, keywords });
    }
  }, [title, description, keywords, location.pathname]);

  // Ensure title doesn't duplicate "UK49s Results"
  const getFullTitle = () => {
    if (metaData.title.includes('UK49s Results')) {
      return metaData.title;
    }
    return `${metaData.title} | UK49s Results`;
  };

  const fullTitle = getFullTitle();
  console.log("currentUrl", currentUrl);


  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Google Site Verification */}
      {verificationCode && (
        <meta name="google-site-verification" content={verificationCode} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:site_name" content="UK49s Results" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaData.description} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="UK49s Results" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default Head;
