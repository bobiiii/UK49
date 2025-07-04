
import React from 'react';
import Layout from '../components/Layout';
import LotteryBalls from '../components/LotteryBalls';
import Head from '../components/Head';
import { TrendingUp, BarChart3, Calendar, Target, TrendingDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Statistics = () => {
  // Mock data for statistics
  const mostFrequent = [7, 23, 31, 42, 14];
  const leastFrequent = [1, 8, 19, 25, 38];
  const hotNumbers = [7, 14, 23, 31, 42];
  const coldNumbers = [1, 8, 19, 25, 38];
  const overdueNumbers = [13, 29, 6, 22, 37];

  return (
    <Layout>
      <Head 
        title="Statistics - UK49s Number Analysis & Trends"
        description="Comprehensive UK49s lottery statistics including hot numbers, cold numbers, frequency analysis, and historical patterns to improve your winning chances."
        keywords="UK49s statistics, lottery analysis, hot numbers, cold numbers, frequency analysis, number patterns, lottery trends"
        canonical="https://lucky-number-finder-uk.lovable.app/statistics"
      />
      
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">UK49s Statistics</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of UK49s lottery numbers including frequency patterns, 
              hot and cold numbers, and statistical trends to help improve your chances.
            </p>
          </div>

          {/* Quick Analysis Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/hot-balls" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Hot Numbers</h3>
              </div>
              <p className="text-gray-600 mb-4">Most frequently drawn numbers</p>
              <div className="flex justify-center mb-4">
                <LotteryBalls numbers={hotNumbers} />
              </div>
              <div className="text-center">
                <span className="text-red-600 font-semibold">View Hot Balls →</span>
              </div>
            </Link>

            <Link to="/cold-balls" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <TrendingDown className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cold Numbers</h3>
              </div>
              <p className="text-gray-600 mb-4">Least frequently drawn numbers</p>
              <div className="flex justify-center mb-4">
                <LotteryBalls numbers={coldNumbers} />
              </div>
              <div className="text-center">
                <span className="text-blue-600 font-semibold">View Cold Balls →</span>
              </div>
            </Link>

            <Link to="/overdue-balls" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Overdue Numbers</h3>
              </div>
              <p className="text-gray-600 mb-4">Numbers due for appearance</p>
              <div className="flex justify-center mb-4">
                <LotteryBalls numbers={overdueNumbers} />
              </div>
              <div className="text-center">
                <span className="text-purple-600 font-semibold">View Overdue Balls →</span>
              </div>
            </Link>
          </div>

          {/* Detailed Statistics */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Number Frequency Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Number Frequency (Last 50 Draws)</h3>
              <div className="space-y-3">
                {[
                  { number: 7, count: 12, percentage: 24 },
                  { number: 23, count: 11, percentage: 22 },
                  { number: 31, count: 10, percentage: 20 },
                  { number: 42, count: 9, percentage: 18 },
                  { number: 14, count: 8, percentage: 16 }
                ].map((item) => (
                  <div key={item.number} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {item.number}
                      </div>
                      <span className="font-medium">Number {item.number}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{item.count}x</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Draw Patterns */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Draw Patterns</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Most Common Sum Range</span>
                  <span className="text-blue-600 font-bold">140-180</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Average Draw Sum</span>
                  <span className="text-blue-600 font-bold">147</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Consecutive Numbers</span>
                  <span className="text-blue-600 font-bold">2.3 avg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">High/Low Split</span>
                  <span className="text-blue-600 font-bold">3/3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Statistics */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Draws</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Most Drawn</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Least Drawn</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Odd/Even</p>
                <p className="text-2xl font-bold text-gray-900">52/48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
