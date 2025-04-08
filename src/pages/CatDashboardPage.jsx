import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const CatDashboardPage = () => {
  const topics = [
    'Algebra',
    'Quadratic Equations',
    'Linear Equations',
    'Inequalities',
    'Geometry',
    'Triangles',
    'Circles',
    'Coordinate Geometry',
    'Arithmetic',
    'Percentages',
    'Rates',
    'Time & Work'
  ];

  const todayQuestions = [
    'Q1: Simplify (2³ + 4²) / 8',
    'Q2: What is the main idea of the passage?',
    'Q3: Based on the given data, find the missing value.'
  ];

  const progressData = {
    quant: { completed: 150, total: 500 },
    lrdi: { completed: 80, total: 500 },
    varc: { completed: 100, total: 500 }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Welcome to Your CAT Dashboard</h1>
          <p className="text-gray-600">Today's Date: {getCurrentDate()}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Topics */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Topics</h2>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li key={index}>
                    <Link 
                      to={`/cat/${topic.toLowerCase().replace(/ /g, '-')}`}
                      className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition"
                    >
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Column - Main Content */}
          <div className="lg:w-2/4">
            {/* Today's Goals */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Goals</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  Finish 2 RC Passages
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  Solve 1 LRDI Set
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                  Attempt 20 Quant Questions
                </li>
              </ul>
            </div>

            {/* Today's Questions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Questions</h2>
              <ul className="space-y-4">
                {todayQuestions.map((question, index) => (
                  <li key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Progress */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Quant</span>
                    <span className="text-gray-700">
                      {progressData.quant.completed}/{progressData.quant.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${(progressData.quant.completed/progressData.quant.total)*100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">LRDI</span>
                    <span className="text-gray-700">
                      {progressData.lrdi.completed}/{progressData.lrdi.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${(progressData.lrdi.completed/progressData.lrdi.total)*100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">VARC</span>
                    <span className="text-gray-700">
                      {progressData.varc.completed}/{progressData.varc.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${(progressData.varc.completed/progressData.varc.total)*100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Watch Lectures */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Watch Lectures</h2>
              <div className="space-y-3">
                <Button 
                  text="Quantitative Aptitude"
                  link="/lectures/quant"
                  variant="secondary"
                  className="w-full"
                />
                <Button 
                  text="Verbal Ability"
                  link="/lectures/varc"
                  variant="secondary"
                  className="w-full"
                />
                <Button 
                  text="Logical Reasoning"
                  link="/lectures/lrdi"
                  variant="secondary"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDashboardPage;