
import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, Clock, PoundSterling, Target, AlertCircle, CheckCircle, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Head from '@/components/Head';

const Guide = () => {
  return (
    <Layout>
      <Head
        title="guide"
        description="guide"
        keywords="guide"
        canonical="https://lucky-number-finder-uk.lovable.app/guide"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Play UK49s</h1>
          <p className="text-xl text-gray-600">Complete guide to playing the UK49s lottery</p>
        </div>

        {/* Quick Facts */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-3" />
                <span><strong>Draw Times:</strong> 12:49 PM & 5:49 PM daily</span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-3" />
                <span><strong>Numbers:</strong> Choose 6 from 1-49</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <PoundSterling className="h-5 w-5 text-purple-500 mr-3" />
                <span><strong>Minimum Bet:</strong> £1</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span><strong>Days:</strong> 7 days a week</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to Play */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Play</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Numbers</h3>
                <p className="text-gray-600">Select 6 numbers from 1 to 49. You can pick your own numbers or use Quick Pick for random selection.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Draw Time</h3>
                <p className="text-gray-600">Choose between Lunchtime (12:49 PM) or Teatime (5:49 PM) draw, or play both.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Number of Balls</h3>
                <p className="text-gray-600">Decide if you want to include the Booster Ball for additional winning opportunities.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Place Your Bet</h3>
                <p className="text-gray-600">Choose your stake amount (minimum £1) and confirm your ticket purchase.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Results</h3>
                <p className="text-gray-600">
                  Watch the live draw or <Link to="/" className="text-blue-600 hover:text-blue-800 underline">check results</Link> online after each draw time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booster Ball Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Play With or Without Booster Ball</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without Booster Ball */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Minus className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">6 Ball Draw (Without Booster)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How it Works:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Choose 6 numbers from 1-49</li>
                    <li>• 6 main numbers are drawn</li>
                    <li>• Match numbers to win prizes</li>
                    <li>• Simpler betting structure</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Lower minimum bet required
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Easier to understand for beginners
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Better odds for main prizes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Quick and straightforward
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* With Booster Ball */}
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Plus className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">7 Ball Draw (With Booster)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How it Works:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Choose 6 numbers from 1-49</li>
                    <li>• 6 main numbers + 1 booster ball drawn</li>
                    <li>• Extra winning combinations available</li>
                    <li>• Additional prize tiers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      More ways to win prizes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Higher potential payouts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Additional prize categories
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                      Better value for frequent players
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 border-b">Feature</th>
                    <th className="text-left py-3 px-4 border-b">6 Ball Draw</th>
                    <th className="text-left py-3 px-4 border-b">7 Ball Draw</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Numbers to Choose</td>
                    <td className="py-3 px-4">6 from 1-49</td>
                    <td className="py-3 px-4">6 from 1-49</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Balls Drawn</td>
                    <td className="py-3 px-4">6 main balls</td>
                    <td className="py-3 px-4">6 main + 1 booster</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Prize Levels</td>
                    <td className="py-3 px-4">5 levels</td>
                    <td className="py-3 px-4">7+ levels</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Minimum Bet</td>
                    <td className="py-3 px-4">£1</td>
                    <td className="py-3 px-4">£1</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best For</td>
                    <td className="py-3 px-4">Beginners, simple play</td>
                    <td className="py-3 px-4">Regular players, more chances</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> New players often start with the 6 ball draw to understand the game,
                  then move to the 7 ball draw for more winning opportunities. Both options are available
                  for lunchtime and teatime draws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Betting Options */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Betting Options</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6 Number Draw</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Match all 6 numbers to win the jackpot</li>
                <li>• Lower tier prizes for 2, 3, 4, or 5 matches</li>
                <li>• Most popular betting option</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7 Number Draw (with Booster)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Includes the Booster Ball for extra chances</li>
                <li>• Additional prize tiers available</li>
                <li>• Higher odds but better winning potential</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prize Structure */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prize Structure</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Match</th>
                  <th className="text-left py-2">6 Ball Draw</th>
                  <th className="text-left py-2">7 Ball Draw</th>
                  <th className="text-left py-2">Odds</th>
                </tr>
              </thead>
              <tbody className="space-y-1">
                <tr className="border-b">
                  <td className="py-2 font-medium">6 Numbers</td>
                  <td className="py-2">£1,000,000+</td>
                  <td className="py-2">£1,000,000+</td>
                  <td className="py-2">1 in 13,983,816</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">5 Numbers</td>
                  <td className="py-2">£1,000 - £10,000</td>
                  <td className="py-2">£1,500 - £15,000</td>
                  <td className="py-2">1 in 54,201</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">4 Numbers</td>
                  <td className="py-2">£50 - £500</td>
                  <td className="py-2">£75 - £750</td>
                  <td className="py-2">1 in 1,032</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">3 Numbers</td>
                  <td className="py-2">£10 - £100</td>
                  <td className="py-2">£15 - £150</td>
                  <td className="py-2">1 in 57</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">2 Numbers</td>
                  <td className="py-2">£2 - £20</td>
                  <td className="py-2">£3 - £30</td>
                  <td className="py-2">1 in 7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Prize amounts vary based on stake and bookmaker. Check with your chosen operator for exact prize structures.
          </p>
        </div>

        {/* Playing Tips */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Playing Tips</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-green-600">Do's</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Set a budget and stick to it
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Play consistently with the same numbers
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Use a mix of high and low numbers
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Check results regularly
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-red-600">Don'ts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  Don't chase losses with bigger bets
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  Avoid picking all numbers from same range
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  Don't rely solely on birthdays/dates
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                  Never bet more than you can afford
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsible Gaming</h3>
              <p className="text-gray-700 text-sm mb-3">
                Lottery games should be played for entertainment only. Remember that gambling can be addictive,
                and you should never bet more than you can afford to lose.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• You must be 18 or over to play</li>
                <li>• Set spending limits and time limits</li>
                <li>• Take regular breaks from playing</li>
                <li>• Seek help if gambling becomes a problem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
