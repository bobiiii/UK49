
import React, { useState, useEffect } from 'react';

const AdsTxt = () => {
  const [adsContent, setAdsContent] = useState('');

  useEffect(() => {
    // Load ads.txt content from localStorage
    const savedContent = localStorage.getItem('ads_txt_content');
    if (savedContent) {
      setAdsContent(savedContent);
    }
  }, []);

  return (
    <div style={{ 
      margin: 0, 
      padding: '10px', 
      fontFamily: 'monospace',
      fontSize: '14px',
      backgroundColor: 'white',
      color: 'black',
      minHeight: '100vh',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      lineHeight: '1.4'
    }}>
      {adsContent}
    </div>
  );
};

export default AdsTxt;
