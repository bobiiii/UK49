import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { Users, Target, Award, Shield, TrendingUp, Clock, Heart, Star } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lottery Analyst",
      bio: "10+ years analyzing lottery patterns and statistics",
      image: null
    },
    {
      name: "Mike Thompson",
      role: "Data Scientist",
      bio: "Expert in statistical modeling and prediction algorithms",
      image: null
    },
    {
      name: "Emma Davies",
      role: "Content Manager",
      bio: "Specialist in lottery news and winner stories",
      image: null
    }
  ];

  const milestones = [
    { year: "2020", event: "Website launched with basic results service" },
    { year: "2021", event: "Added advanced statistical analysis tools" },
    { year: "2022", event: "Reached 100,000 monthly users" },
    { year: "2023", event: "Introduced AI-powered predictions" },
    { year: "2024", event: "Became UK's leading UK49s information hub" }
  ];

  return (
    <Layout>
      <Head
        title="About UK49s Results - Your Trusted Lottery Information Hub"
        description="Learn about UK49s Results, your trusted source for accurate lottery information, analysis, and predictions since 2020. Meet our team and discover our mission."
        keywords="about UK49s Results, lottery information, team, mission, UK49s analysis, lottery statistics"
        canonical="https://lucky-number-finder-uk.lovable.app/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About UK49s Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted companion for UK49s lottery results, predictions, and analysis.
            We've been helping lottery enthusiasts make informed decisions since 2020.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="text-center">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              To provide accurate, timely, and comprehensive UK49s lottery information while promoting
              responsible gaming. We believe in empowering players with data-driven insights and
              maintaining the highest standards of integrity and transparency.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We provide accurate, unbiased information and never compromise on truthfulness.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously improve our tools and analysis methods using latest technology.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Responsibility</h3>
              <p className="text-gray-600 text-sm">
                We promote responsible gaming and provide resources for those who need help.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We build a supportive community of lottery enthusiasts who help each other.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Results</h3>
              <p className="text-gray-600">
                Get the latest UK49s results within minutes of each draw, both lunchtime and teatime.
              </p>
            </div>

            <div>
              <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Statistical Analysis</h3>
              <p className="text-gray-600">
                Comprehensive analysis of number patterns, frequency charts, and historical trends.
              </p>
            </div>

            <div>
              <Target className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Predictions</h3>
              <p className="text-gray-600">
                AI-powered predictions based on advanced algorithms and statistical modeling.
              </p>
            </div>

            <div>
              <Award className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Tools</h3>
              <p className="text-gray-600">
                Advanced calculators, pattern analyzers, and number generators for serious players.
              </p>
            </div>

            <div>
              <Star className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Content</h3>
              <p className="text-gray-600">
                Complete guides, strategies, and tips to help you understand the game better.
              </p>
            </div>

            <div>
              <Heart className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responsible Gaming</h3>
              <p className="text-gray-600">
                Resources and support for maintaining healthy gaming habits and seeking help when needed.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6">
                    {milestone.year}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <p className="text-blue-100">Monthly Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <p className="text-blue-100">Results Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Service Availability</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Disclaimer</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              UK49s Results is an independent information website. We are not affiliated with or endorsed by
              the official UK49s lottery operators or any betting companies.
            </p>
            <p>
              All information provided is for entertainment and educational purposes only.
              Gambling can be addictive - please play responsibly and within your means.
            </p>
            <p>
              You must be 18 years or older to participate in lottery games.
              If you have a gambling problem, please seek professional help.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
