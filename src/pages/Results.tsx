import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LotteryBalls from '../components/LotteryBalls';
import { Calendar, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [displayCount, setDisplayCount] = useState(30);
  
  // Mock historical results data - only 30 recent results
  const results = [
    {
      id: 1,
      date: '2024-06-30',
      draw: 'Teatime',
      time: '17:49',
      numbers: [3, 15, 27, 34, 41, 46],
      boosterBall: 22
    },
    {
      id: 2,
      date: '2024-06-30',
      draw: 'Lunchtime',
      time: '12:49',
      numbers: [7, 14, 23, 31, 42, 49],
      boosterBall: 18
    },
    {
      id: 3,
      date: '2024-06-29',
      draw: 'Teatime',
      time: '17:49',
      numbers: [5, 19, 28, 35, 44, 47],
      boosterBall: 12
    },
    {
      id: 4,
      date: '2024-06-29',
      draw: 'Lunchtime',
      time: '12:49',
      numbers: [2, 11, 20, 33, 40, 48],
      boosterBall: 25
    },
    {
      id: 5,
      date: '2024-06-28',
      draw: 'Teatime',
      time: '17:49',
      numbers: [6, 16, 24, 36, 43, 45],
      boosterBall: 9
    },
    {
      id: 6,
      date: '2024-06-28',
      draw: 'Lunchtime',
      time: '12:49',
      numbers: [1, 13, 26, 32, 39, 44],
      boosterBall: 17
    },
    // Extended mock data for load more functionality
    ...Array.from({ length: 50 }, (_, index) => {
      const date = new Date('2024-06-27');
      date.setDate(date.getDate() - Math.floor(index / 2));
      const isLunchtime = index % 2 === 1;
      
      return {
        id: index + 7,
        date: date.toISOString().split('T')[0],
        draw: isLunchtime ? 'Lunchtime' : 'Teatime',
        time: isLunchtime ? '12:49' : '17:49',
        numbers: Array.from({ length: 6 }, () => Math.floor(Math.random() * 49) + 1).sort((a, b) => a - b),
        boosterBall: Math.floor(Math.random() * 49) + 1
      };
    })
  ];

  const filteredResults = results.filter(result => {
    if (selectedFilter === 'all') return true;
    return result.draw.toLowerCase() === selectedFilter;
  });

  const displayedResults = filteredResults.slice(0, displayCount);
  const hasMoreResults = displayCount < filteredResults.length;

  const loadMoreResults = () => {
    setDisplayCount(prev => Math.min(prev + 30, filteredResults.length));
  };

  const exportToCSV = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const websiteUrl = 'https://uk49sresults.com';
    
    const headers = ['Date', 'Draw', 'Time', 'Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5', 'Number 6', 'Bonus Ball'];
    const csvContent = [
      `UK49s Results Export - ${currentDate}`,
      `Website: ${websiteUrl}`,
      '',
      headers.join(','),
      ...displayedResults.map(result => [
        result.date,
        result.draw,
        result.time,
        ...result.numbers,
        result.boosterBall
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `uk49s-results-${currentDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <Head 
        title="Latest UK49s Results Today - Live Draw Numbers"
        description="View the latest UK49s lottery results for today's Lunchtime and Teatime draws. Get live winning numbers, prize breakdowns, and recent draw results updated daily."
        keywords="UK49s results today, latest UK49s results, UK49s winning numbers, lunchtime results, teatime results, UK49s live results, lottery results today"
        canonical="https://lucky-number-finder-uk.lovable.app/results"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Lunchtime & Teatime Results</h1>
          <p className="text-lg sm:text-xl text-gray-600">These are most recent 30 draws results of lunchtime and teatime. Here players can see the draw name, date, main numbers and booster balls of each draw. To find the <Link to="/" className="text-blue-600 hover:text-blue-800 underline">latest results</Link> visit homepage.</p>
          <Link 
            to="/statistics" 
            className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            View Statistics →
          </Link>
        </div>

        {/* Results Grid */}
        <div className="grid gap-4 sm:gap-6">
          {displayedResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col space-y-4">
                {/* Date and Draw Info - Centered */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.draw === 'Lunchtime' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {result.draw} Results
                  </div>
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center text-gray-900">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-bold text-lg">{result.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{result.time}</span>
                    </div>
                  </div>
                </div>

                {/* Lottery Balls - Centered */}
                <div className="flex justify-center">
                  <LotteryBalls 
                    numbers={result.numbers} 
                    boosterBall={result.boosterBall}
                    size="medium"
                    mobileLayout={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMoreResults && (
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={loadMoreResults}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Load More Results ({filteredResults.length - displayCount} remaining)
            </button>
          </div>
        )}

        {/* Results Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="text-center sm:text-left">
              <span className="font-medium text-gray-700 block sm:inline">Total Results Shown:</span>
              <span className="text-blue-600 font-bold block sm:inline sm:ml-2">{displayedResults.length}</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="font-medium text-gray-700 block sm:inline">Latest Draw:</span>
              <span className="text-purple-600 font-bold block sm:inline sm:ml-2">{results[0].date} {results[0].draw}</span>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <span className="font-medium text-gray-700 block sm:inline">Available Results:</span>
              <span className="text-green-600 font-bold block sm:inline sm:ml-2">{filteredResults.length} Total</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
