import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CatDashboardPage = () => {
  const topics = [
    "Algebra",
    "Quadratic Equations",
    "Linear Equations",
    "Inequalities",
    "Geometry",
    "Triangles",
    "Circles",
    "Coordinate Geometry",
    "Arithmetic",
    "Percentages",
    "Rates",
    "Time & Work",
  ];

  const todayQuestions = [
    "Q1: Simplify (2³ + 4²) / 8",
    "Q2: What is the main idea of the passage?",
    "Q3: Based on the given data, find the missing value.",
  ];

  const progressData = {
    quant: { completed: 150, total: 500 },
    lrdi: { completed: 80, total: 500 },
    varc: { completed: 100, total: 500 },
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative py-32 md:py-40 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Welcome to Your CAT Dashboard
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 `}>
              Today's Date: {getCurrentDate()}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Topics (1/4 width) */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Topics</h2>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li key={index}>
                    <Link
                      to={`/cat/${topic.toLowerCase().replace(/ /g, "-")}`}
                      className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition"
                    >
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Main Content (3/4 width) */}
          <div className="lg:w-3/4 space-y-6">
            {/* First Row - Today's Goals and Your Progress */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Today's Goals (1/2 width) */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Today's Goals
                  </h2>
                  <ul className="space-y-4">
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
              </div>

              {/* Your Progress (1/2 width) */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Your Progress
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Quant</span>
                        <span className="text-gray-700">
                          {progressData.quant.completed}/
                          {progressData.quant.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${
                              (progressData.quant.completed /
                                progressData.quant.total) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">LRDI</span>
                        <span className="text-gray-700">
                          {progressData.lrdi.completed}/
                          {progressData.lrdi.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{
                            width: `${
                              (progressData.lrdi.completed /
                                progressData.lrdi.total) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">VARC</span>
                        <span className="text-gray-700">
                          {progressData.varc.completed}/
                          {progressData.varc.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-purple-600 h-2.5 rounded-full"
                          style={{
                            width: `${
                              (progressData.varc.completed /
                                progressData.varc.total) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Watch Lectures (full width) */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Watch Lectures
              </h2>

              {/* Embedded YouTube video */}
              <div
                className="mb-4 relative w-full"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Lecture Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button
                  text="Quantitative Aptitude"
                  link="/lectures/quant"
                  variant="dark"
                  className="w-full"
                />
                <Button
                  text="Verbal Ability"
                  link="/lectures/varc"
                  variant="dark"
                  className="w-full"
                />
                <Button
                  text="Logical Reasoning"
                  link="/lectures/lrdi"
                  variant="dark"
                  className="w-full"
                />
              </div>
            </div>

            {/* Third Row - Today's Questions (full width) */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Today's Questions
              </h2>
              <ul className="space-y-4">
                {todayQuestions.map((question, index) => (
                  <li
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDashboardPage;
