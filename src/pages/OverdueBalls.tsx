
import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LotteryBalls from '../components/LotteryBalls';
import { Clock, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OverdueBalls = () => {
  // Mock data for overdue numbers
  const overdueNumbers = [
    { number: 13, daysSinceLastSeen: 45, lastSeen: '2024-05-16' },
    { number: 29, daysSinceLastSeen: 42, lastSeen: '2024-05-19' },
    { number: 6, daysSinceLastSeen: 38, lastSeen: '2024-05-23' },
    { number: 22, daysSinceLastSeen: 35, lastSeen: '2024-05-26' },
    { number: 37, daysSinceLastSeen: 33, lastSeen: '2024-05-28' },
    { number: 45, daysSinceLastSeen: 30, lastSeen: '2024-05-31' },
    { number: 4, daysSinceLastSeen: 28, lastSeen: '2024-06-02' },
    { number: 18, daysSinceLastSeen: 25, lastSeen: '2024-06-05' },
    { number: 34, daysSinceLastSeen: 23, lastSeen: '2024-06-07' },
    { number: 48, daysSinceLastSeen: 20, lastSeen: '2024-06-10' }
  ];

  const topOverdueNumbers = overdueNumbers.slice(0, 6).map(item => item.number);

  return (
    <Layout>
      <Head 
        title="Overdue Balls - Long Absent UK49s Numbers"
        description="Track overdue UK49s numbers that haven't appeared in recent draws. Analyze patterns and identify potential comeback numbers."
        keywords="UK49s overdue numbers, long absent numbers, lottery tracking, overdue balls, number analysis"
        canonical="https://lucky-number-finder-uk.lovable.app/overdue-balls"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-purple-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Overdue Balls</h1>
          </div>
          <p className="text-xl text-gray-600">Numbers that haven't appeared in recent UK49s draws</p>
        </div>

        {/* Top Overdue Numbers Display */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top 6 Overdue Numbers</h2>
          <div className="flex justify-center mb-6">
            <LotteryBalls numbers={topOverdueNumbers} size="large" />
          </div>
          <p className="text-center text-gray-600">
            These numbers haven't appeared for the longest time in recent draws
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Analysis Period</p>
                <p className="text-2xl font-bold text-gray-900">100 Draws</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Most Overdue</p>
                <p className="text-2xl font-bold text-gray-900">13</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Max Days Overdue</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overdue Numbers Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-purple-50 border-b">
            <h3 className="text-xl font-bold text-gray-900">Complete Overdue Numbers List</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Overdue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {overdueNumbers.map((item, index) => (
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
                      {item.daysSinceLastSeen} days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.lastSeen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.daysSinceLastSeen > 40 ? 'bg-red-100 text-red-800' :
                        item.daysSinceLastSeen > 30 ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.daysSinceLastSeen > 40 ? '🚨 Critical' :
                         item.daysSinceLastSeen > 30 ? '⚠️ High' : '⏰ Overdue'}
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
            to="/cold-balls"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Cold Balls
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

export default OverdueBalls;
