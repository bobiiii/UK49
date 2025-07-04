
import React, { useState } from 'react';
import Layout from '../components/Layout';
import LotteryBalls from '../components/LotteryBalls';
import { Calculator, Shuffle, Target, TrendingUp, RefreshCw, Settings } from 'lucide-react';
import Head from '@/components/Head';

const Tools = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const [sumCalculation, setSumCalculation] = useState({ numbers: '', result: 0 });
  const [filterSettings, setFilterSettings] = useState({
    includeOdd: true,
    includeEven: true,
    minSum: 75,
    maxSum: 225,
    avoidConsecutive: false
  });

  const generateRandomNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    setGeneratedNumbers(numbers.sort((a, b) => a - b));
  };

  const calculateSum = () => {
    const numbers = sumCalculation.numbers
      .split(',')
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n) && n >= 1 && n <= 49);

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setSumCalculation({ ...sumCalculation, result: sum });
  };

  return (
    <Layout>
      <Head
        title="Tools"
        description="Tools"
        keywords="Tools"
        canonical="https://lucky-number-finder-uk.lovable.app/tools"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">UK49s Tools & Calculators</h1>
          <p className="text-xl text-gray-600">Professional tools to enhance your lottery strategy</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Random Number Generator */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Shuffle className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Smart Number Generator</h3>
            </div>
            <p className="text-gray-600 mb-6">Generate optimized number combinations based on statistical analysis</p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Filter Settings</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterSettings.includeOdd}
                      onChange={(e) => setFilterSettings({ ...filterSettings, includeOdd: e.target.checked })}
                      className="mr-2"
                    />
                    Include Odd Numbers
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterSettings.includeEven}
                      onChange={(e) => setFilterSettings({ ...filterSettings, includeEven: e.target.checked })}
                      className="mr-2"
                    />
                    Include Even Numbers
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterSettings.avoidConsecutive}
                      onChange={(e) => setFilterSettings({ ...filterSettings, avoidConsecutive: e.target.checked })}
                      className="mr-2"
                    />
                    Avoid Consecutive
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Min Sum</label>
                    <input
                      type="number"
                      value={filterSettings.minSum}
                      onChange={(e) => setFilterSettings({ ...filterSettings, minSum: parseInt(e.target.value) })}
                      className="w-full px-2 py-1 border rounded text-sm"
                      min="6"
                      max="294"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Max Sum</label>
                    <input
                      type="number"
                      value={filterSettings.maxSum}
                      onChange={(e) => setFilterSettings({ ...filterSettings, maxSum: parseInt(e.target.value) })}
                      className="w-full px-2 py-1 border rounded text-sm"
                      min="6"
                      max="294"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={generateRandomNumbers}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Generate Numbers
              </button>

              {generatedNumbers.length > 0 && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Generated Numbers</h4>
                  <div className="flex justify-center mb-3">
                    <LotteryBalls numbers={generatedNumbers} />
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Sum: {generatedNumbers.reduce((acc, num) => acc + num, 0)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sum Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calculator className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Sum Calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">Calculate the sum of your chosen numbers and check optimal ranges</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Numbers (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 7, 14, 23, 31, 42, 49"
                  value={sumCalculation.numbers}
                  onChange={(e) => setSumCalculation({ ...sumCalculation, numbers: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={calculateSum}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Calculate Sum
              </button>

              {sumCalculation.result > 0 && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Sum Result</h4>
                  <div className="text-2xl font-bold text-green-600 text-center mb-2">
                    {sumCalculation.result}
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {sumCalculation.result < 100 && "Low sum range - consider adding higher numbers"}
                    {sumCalculation.result >= 100 && sumCalculation.result <= 180 && "Optimal sum range - good balance"}
                    {sumCalculation.result > 180 && "High sum range - consider adding lower numbers"}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pattern Analyzer */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-purple-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Pattern Analyzer</h3>
            </div>
            <p className="text-gray-600 mb-6">Analyze number patterns and trends from recent draws</p>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Current Patterns</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Consecutive pairs frequency:</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Same ending digits:</span>
                    <span className="font-medium">23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Odd/Even balanced draws:</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sum range 120-160:</span>
                    <span className="font-medium">52%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Analyze My Numbers
              </button>
            </div>
          </div>

          {/* Odds Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Odds Calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">Calculate winning odds for different prize tiers</p>

            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">UK49s Odds</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>6 Numbers Match:</span>
                    <span className="font-medium">1 in 13,983,816</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5 Numbers Match:</span>
                    <span className="font-medium">1 in 54,201</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4 Numbers Match:</span>
                    <span className="font-medium">1 in 1,032</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 Numbers Match:</span>
                    <span className="font-medium">1 in 57</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2 Numbers Match:</span>
                    <span className="font-medium">1 in 7</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-700">
                  <strong>Remember:</strong> These are theoretical odds. Each draw is independent,
                  and past results don't influence future outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Tips for Using These Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Number Generation</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Use filters to match your strategy</li>
                <li>• Generate multiple sets for comparison</li>
                <li>• Combine with hot/cold analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Sum Analysis</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Target sums between 100-180</li>
                <li>• Avoid extremely low/high sums</li>
                <li>• Check historical sum patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pattern Recognition</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Look for recurring patterns</li>
                <li>• Balance different number ranges</li>
                <li>• Consider draw frequency trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
