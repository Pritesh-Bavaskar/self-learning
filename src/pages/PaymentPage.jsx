import React from 'react';
import Payment from '../components/Payment';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Flexible Payment Plans
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              Choose the perfect plan tailored for your learning journey
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
                <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                  Starter
                </span>
              </div>
              <p className="mt-3 text-gray-600">Perfect for getting started with the basics</p>
              <div className="mt-6">
                <p className="text-5xl font-extrabold text-gray-900">₹499</p>
                <p className="text-lg font-medium text-gray-500">per month</p>
              </div>
              <div className="mt-8">
                <Payment 
                  amount={499} 
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                />
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 border-t border-gray-100">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Access to basic courses</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Community support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Weekly Q&A sessions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standard Plan - Featured */}
          <div className="relative bg-white rounded-xl shadow-lg overflow transform scale-105 z-10 border-4 border-indigo-500">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
              Popular
            </div>
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Standard</h3>
                <span className="px-3 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full">
                  Best Value
                </span>
              </div>
              <p className="mt-3 text-gray-600">Everything in Basic plus more features</p>
              <div className="mt-6">
                <p className="text-5xl font-extrabold text-gray-900">₹999</p>
                <p className="text-lg font-medium text-gray-500">per month</p>
              </div>
              <div className="mt-8">
                <Payment 
                  amount={999} 
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
                />
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 border-t border-gray-100">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">All Basic features</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Advanced courses</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Monthly 1:1 sessions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Premium</h3>
                <span className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">
                  Pro
                </span>
              </div>
              <p className="mt-3 text-gray-600">For serious learners who want everything</p>
              <div className="mt-6">
                <p className="text-5xl font-extrabold text-gray-900">₹1999</p>
                <p className="text-lg font-medium text-gray-500">per month</p>
              </div>
              <div className="mt-8">
                <Payment 
                  amount={1999} 
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
                />
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 border-t border-gray-100">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">All Standard features</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Premium courses</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">24/7 VIP support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Weekly 1:1 coaching</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;