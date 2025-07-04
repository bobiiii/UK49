import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LotteryBalls from '../components/LotteryBalls';
import { Calendar, Clock, TrendingUp, Users, Award, BarChart3, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Mock data for latest results
  const latestResults = {
    lunchtime: {
      date: '2024-06-30',
      time: '12:49',
      numbers: [7, 14, 23, 31, 42, 49],
      boosterBall: 18
    },
    teatime: {
      date: '2024-06-30',
      time: '17:49',
      numbers: [3, 15, 27, 34, 41, 46],
      boosterBall: 22
    }
  };

  const hotNumbers = [7, 14, 23, 31, 42];
  const coldNumbers = [1, 8, 19, 25, 38];
  const overdueNumbers = [13, 29, 6, 22, 37];

  return (
    <>
      <Head
        title="Home - Latest UK49s Results & Predictions"
        description="Get the latest UK49s lottery results, expert predictions, and winning strategies. View today's Lunchtime and Teatime draws with comprehensive analysis."
        keywords="UK49s, lottery results, predictions, lunchtime draw, teatime draw, winning numbers, lottery analysis"
        canonical="https://lucky-number-finder-uk.lovable.app/"
      />
      <Layout>


        {/* Latest Results Section */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Latest UK49's Results</h2>
              <p className="text-lg sm:text-xl text-gray-600">Here player can see the latest results of uk 49s lottery draw. Each draw numbers are 100% verfied from the official results. Get more information scroll the page below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* Lunchtime Draw */}
              <div className="card-gradient-blue rounded-xl p-4 sm:p-8 border-2 border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Lunchtime Results</h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm font-medium">{latestResults.lunchtime.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">{latestResults.lunchtime.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <LotteryBalls
                    numbers={latestResults.lunchtime.numbers}
                    boosterBall={latestResults.lunchtime.boosterBall}
                    size="medium"
                    mobileLayout={true}
                  />
                </div>
                <Link
                  to="/results"
                  className="block text-center bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  View Full Results
                </Link>
              </div>

              {/* Teatime Draw */}
              <div className="card-gradient-purple rounded-xl p-4 sm:p-8 border-2 border-purple-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Teatime Results</h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm font-medium">{latestResults.teatime.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">{latestResults.teatime.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <LotteryBalls
                    numbers={latestResults.teatime.numbers}
                    boosterBall={latestResults.teatime.boosterBall}
                    size="medium"
                    mobileLayout={true}
                  />
                </div>
                <Link
                  to="/results"
                  className="block text-center bg-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm sm:text-base"
                >
                  View Full Results
                </Link>
              </div>
            </div>

            {/* Get Prediction Button - Outside of the draws */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/history"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                View & Export History Results
              </Link>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg sm:text-xl text-gray-600">For useful tips, you can check the <Link to="/predictions" className="text-blue-600 hover:text-blue-800 underline">next draw predictions</Link> by Albertisto. They are completely free and updated before each draw. These predictions are based on recent results to help you make better number choices.</p>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">49's Results Number Analysis</h2>
              <p className="text-xl text-gray-600">It shows a simple number analysis based on the last 30 49s draws. The goal is to help players understand which numbers appear more often and which ones do not. This information may help you make better number choices for future games.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hot Numbers */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Hot Numbers</h3>
                </div>
                <p className="text-gray-600 mb-6">Most frequently drawn numbers in the last 30 days</p>
                <div className="flex justify-center mb-6">
                  <LotteryBalls numbers={hotNumbers} />
                </div>
                <Link
                  to="/hot-balls"
                  className="block text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  View Hot Balls
                </Link>
              </div>

              {/* Cold Numbers */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingDown className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cold Numbers</h3>
                </div>
                <p className="text-gray-600 mb-6">Least frequently drawn numbers in the last 30 days</p>
                <div className="flex justify-center mb-6">
                  <LotteryBalls numbers={coldNumbers} />
                </div>
                <Link
                  to="/cold-balls"
                  className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Cold Balls
                </Link>
              </div>

              {/* Overdue Numbers */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-purple-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Overdue Numbers</h3>
                </div>
                <p className="text-gray-600 mb-6">Numbers that haven't appeared recently in the last 30 days</p>
                <div className="flex justify-center mb-6">
                  <LotteryBalls numbers={overdueNumbers} />
                </div>
                <Link
                  to="/overdue-balls"
                  className="block text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  View Overdue Balls
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Strategies for Choosing UK49s Numbers</h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Choosing winning numbers for UK lottery requires a strategic approach that combines statistical analysis with smart number selection techniques. While lottery draws are random, understanding patterns and trends can help improve your number selection strategy.
                </p>

                <p>
                  <strong>Hot and Cold Number Analysis:</strong> Study the frequency of numbers drawn over the past 30-50 draws. Hot numbers appear frequently and might continue their streak, while cold numbers haven't appeared recently and may be due for selection. Balance your picks between both categories to maximize coverage.
                </p>

                <p>
                  <strong>Overdue Number Strategy:</strong> Numbers that haven't appeared for extended periods statistically have higher chances of being drawn. Monitor overdue balls and consider including 1-2 in your selection, but don't rely solely on this method.
                </p>

                <p>
                  <strong>Number Range Distribution:</strong> Spread your numbers across the entire range (1-49). Avoid clustering all picks in low (1-16), mid (17-33), or high (34-49) ranges. A balanced distribution typically includes numbers from each range.
                </p>

                <p>
                  <strong>Avoid Common Patterns:</strong> Many players choose birthdays (limiting to 1-31), consecutive numbers, or geometric patterns on play slips.These methods reduce number variety and may lead to more people choosing the same set, which lowers your chances of win.
                </p>

                <p>
                  <strong>Statistical Combinations:</strong> Consider using a mix of even and odd numbers (3:3 or 4:2 ratio works well), and combine high-frequency numbers with some less common picks. Remember, each draw is independent, but historical data can guide informed decisions for better long-term results.
                </p>
                <p>
                  We aim to provide all the information you need. If you still have questions or feel unsure, please read <Link to="/faq" className="text-blue-600 hover:text-blue-800 underline">Frequently Asked Questions (FAQ)</Link> for more help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Insights</h3>
                <p className="text-gray-600">
                  Stay updated with expert tips, number trends, and game strategies on our <Link to="/guide" className="text-blue-600 hover:text-blue-800 underline">blog section</Link>. We share helpful posts to guide UK 49 players.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learn the Rules</h3>
                <p className="text-gray-600">
                  Want to understand the game better? Visit our <Link to="/guide" className="text-blue-600 hover:text-blue-800 underline">playing guide</Link> to learn about number selection, draws, and winning chances.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Trusted</h3>
                <p className="text-gray-600">
                  Join thousands of lottery players who use our platform to stay informed with stats like hot and cold numbers, overdue balls, and more, visit our <Link to="/statistics" className="text-blue-600 hover:text-blue-800 underline">statistics page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
