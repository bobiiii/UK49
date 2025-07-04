
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { Shield, Eye, Lock, FileText, Mail, Calendar } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <Head 
        title="Privacy Policy - UK49s Results"
        description="Learn how UK49s Results protects your privacy and handles your personal information. Read our comprehensive privacy policy and data protection practices."
        keywords="privacy policy, data protection, UK49s Results privacy, personal information, cookies, data collection"
        canonical="https://lucky-number-finder-uk.lovable.app/privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: June 30, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
          <p className="text-gray-700">
            At UK49s Results, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Eye className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or search terms used</li>
                <li>Device type and operating system</li>
                <li>Date and time of visits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact information when you reach out to us</li>
                <li>Feedback and suggestions you submit</li>
                <li>Newsletter subscription email addresses</li>
                <li>User preferences and settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>To provide and improve our UK49s results service</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send newsletters and updates (with your consent)</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700">
                We use essential cookies to ensure our website functions properly and to remember your preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700">
                We use analytics tools to understand how visitors interact with our website and to improve our services.
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Unauthorized access or disclosure</li>
              <li>Accidental loss or destruction</li>
              <li>Malicious attacks and data breaches</li>
              <li>Unlawful processing or use</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
          </div>
        </section>

        {/* Third Party Services */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Eye className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites or use third-party services. 
              We are not responsible for the privacy practices of these external services.
            </p>
            <p className="text-gray-700">
              We recommend reading the privacy policies of any third-party websites you visit.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@uk49sresults.com</p>
              <p><strong>Website:</strong> uk49sresults.com/contact</p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Policy Updates</h2>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated "Last modified" date. We encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice</h3>
          <p className="text-sm text-gray-700">
            This website is for informational purposes only. We are not affiliated with the official UK49s lottery. 
            Please gamble responsibly and only if you are 18 years or older.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
