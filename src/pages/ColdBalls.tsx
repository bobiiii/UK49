import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LotteryBalls from '../components/LotteryBalls';
import { TrendingDown, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ColdBalls = () => {
  // Mock data for cold numbers
  const coldNumbers = [
    { number: 1, frequency: 3, lastSeen: '2024-06-15' },
    { number: 8, frequency: 4, lastSeen: '2024-06-18' },
    { number: 19, frequency: 5, lastSeen: '2024-06-20' },
    { number: 25, frequency: 6, lastSeen: '2024-06-22' },
    { number: 38, frequency: 6, lastSeen: '2024-06-16' },
    { number: 44, frequency: 7, lastSeen: '2024-06-24' },
    { number: 2, frequency: 8, lastSeen: '2024-06-25' },
    { number: 33, frequency: 8, lastSeen: '2024-06-19' },
    { number: 47, frequency: 9, lastSeen: '2024-06-26' },
    { number: 11, frequency: 10, lastSeen: '2024-06-27' }
  ];

  const topColdNumbers = coldNumbers.slice(0, 6).map(item => item.number);

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
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <TrendingDown className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Cold Balls</h1>
          </div>
          <p className="text-xl text-gray-600">Least frequently drawn numbers in recent UK49s draws</p>
        </div>

        {/* Top Cold Numbers Display */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-8 border-2 border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top 6 Cold Numbers</h2>
          <div className="flex justify-center mb-6">
            <LotteryBalls numbers={topColdNumbers} size="large" />
          </div>
          <p className="text-center text-gray-600">
            These numbers have appeared least frequently in the last 100 draws
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Analysis Period</p>
                <p className="text-2xl font-bold text-gray-900">100 Draws</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Coldest Number</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Min Frequency</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cold Numbers Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-blue-50 border-b">
            <h3 className="text-xl font-bold text-gray-900">Complete Cold Numbers List</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coldNumbers.map((item, index) => (
                  <tr key={item.number} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <LotteryBalls numbers={[item.number]} size="small" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.frequency} times
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.lastSeen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ❄️ Cold
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/hot-balls"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            View Hot Balls
          </Link>
          <Link
            to="/overdue-balls"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View Overdue Balls
          </Link>
          <Link
            to="/statistics"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Back to Statistics
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ColdBalls;
