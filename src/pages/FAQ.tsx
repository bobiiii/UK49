
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { HelpCircle, ChevronDown, ChevronUp, Search, Clock, PoundSterling, Target, Shield } from 'lucide-react';
import Head from '@/components/Head';

const FAQ = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqSections = [
    {
      id: 1,
      title: "Getting Started",
      icon: Target,
      questions: [
        {
          q: "What is UK49s lottery?",
          a: "UK49s is a popular lottery game where players choose 6 numbers from 1 to 49. There are two daily draws - Lunchtime at 12:49 PM and Teatime at 5:49 PM, every day of the year."
        },
        {
          q: "How do I play UK49s?",
          a: "To play UK49s, select 6 numbers from 1-49, choose your draw time (Lunchtime or Teatime), decide whether to include the Booster Ball, and place your bet with a licensed bookmaker or online operator."
        },
        {
          q: "What's the minimum age to play?",
          a: "You must be 18 years or older to play UK49s or any other lottery game in the UK."
        },
        {
          q: "Can I play online?",
          a: "Yes, UK49s can be played online through licensed operators and bookmakers. Always ensure you're using a reputable, licensed platform."
        }
      ]
    },
    {
      id: 2,
      title: "Draws & Results",
      icon: Clock,
      questions: [
        {
          q: "When are the UK49s draws?",
          a: "UK49s has two daily draws: Lunchtime at 12:49 PM and Teatime at 5:49 PM. Draws happen every day of the year, including weekends and holidays."
        },
        {
          q: "Where can I watch the live draws?",
          a: "Live draws can be watched on various online platforms and some television channels. Results are also immediately available on official lottery websites."
        },
        {
          q: "How quickly are results published?",
          a: "Results are usually published within minutes of each draw. Our website updates results as soon as they're officially confirmed."
        },
        {
          q: "What happens if I miss checking the results?",
          a: "Don't worry! All results are archived and remain available indefinitely. You can check historical results going back many years."
        }
      ]
    },
    {
      id: 3,
      title: "Betting & Prizes",
      icon: PoundSterling,
      questions: [
        {
          q: "What's the minimum bet amount?",
          a: "The minimum bet is typically £1, though this can vary depending on your chosen bookmaker or operator."
        },
        {
          q: "How are prize amounts calculated?",
          a: "Prize amounts depend on your stake, the number of matches, and the odds offered by your bookmaker. Different operators may offer different prize structures."
        },
        {
          q: "What are the odds of winning?",
          a: "The odds vary by prize tier: matching 6 numbers has odds of 1 in 13,983,816, while matching 2 numbers has odds of approximately 1 in 7."
        },
        {
          q: "How long do I have to claim prizes?",
          a: "Prize claim periods vary by operator, but typically range from 180 days to 1 year from the draw date. Check with your specific operator for exact terms."
        },
        {
          q: "Are winnings taxable?",
          a: "In the UK, lottery winnings are generally not subject to income tax. However, any interest earned on winnings may be taxable. Consult a tax advisor for specific advice."
        }
      ]
    },
    {
      id: 4,
      title: "Strategies & Tips",
      icon: Target,
      questions: [
        {
          q: "Are there any winning strategies?",
          a: "While UK49s is a game of chance, some players use statistical analysis, hot/cold numbers, or number patterns. Remember that each draw is independent and random."
        },
        {
          q: "Should I play the same numbers every time?",
          a: "This is a personal choice. Some players stick with the same numbers (consistency strategy), while others prefer random selections each time."
        },
        {
          q: "What's the difference between 6 and 7 ball draws?",
          a: "The 6-ball draw uses only the main numbers, while the 7-ball draw includes the Booster Ball, offering additional ways to win but at different odds."
        },
        {
          q: "Is it better to play Lunchtime or Teatime?",
          a: "Both draws are completely independent with the same odds. The choice is purely personal preference - many players enjoy playing both draws."
        }
      ]
    },
    {
      id: 5,
      title: "Safety & Security",
      icon: Shield,
      questions: [
        {
          q: "How do I know if an operator is legitimate?",
          a: "Always check that operators are licensed by the UK Gambling Commission. Look for license numbers and regulatory information on their websites."
        },
        {
          q: "What should I do if I have a gambling problem?",
          a: "If gambling becomes a problem, seek help immediately. Contact organizations like GamCare, Gamblers Anonymous, or the National Gambling Helpline for support."
        },
        {
          q: "How can I set spending limits?",
          a: "Most reputable operators offer tools to set daily, weekly, or monthly spending limits. You can also set time limits and self-exclusion periods."
        },
        {
          q: "Is my personal information secure?",
          a: "Licensed operators must follow strict data protection regulations. Always review privacy policies and only use operators with proper security measures."
        }
      ]
    }
  ];

  const toggleSection = (sectionId: number) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(
      qa =>
        qa.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <Layout>
      <Head
        title="faq"
        description="faq"
        keywords="faq"
        canonical="https://lucky-number-finder-uk.lovable.app/faq"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about UK49s lottery</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {filteredSections.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;

            return (
              <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Icon className="h-6 w-6 text-blue-500 mr-3" />
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    <span className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {section.questions.length}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="space-y-4">
                      {section.questions.map((qa, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                            <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {qa.q}
                          </h3>
                          <p className="text-gray-600 ml-7">{qa.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredSections.length === 0 && searchTerm && (
          <div className="text-center py-8">
            <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse the categories above.</p>
          </div>
        )}

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Draw Times</h3>
            <p className="text-gray-600 text-sm">Learn about UK49s draw schedules and timing</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Play</h3>
            <p className="text-gray-600 text-sm">Complete guide to playing UK49s lottery</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsible Gaming</h3>
            <p className="text-gray-600 text-sm">Information about safe and responsible play</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
