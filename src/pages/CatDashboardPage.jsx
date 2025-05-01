import React, { useState } from "react";
import TopicSection from "../components/cat-dashboard/TopicSection";
import ContentSection from "../components/cat-dashboard/ContentSection";
import { useNavigate } from "react-router-dom";

const CatDashboardPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeView, setActiveView] = useState("learn");
  const navigate = useNavigate();

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setActiveView("learn");
  };

  const handleQuestionClick = (question) => {
    navigate("/courses/cat/problem-solving", {
      state: { question },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Welcome to Your CAT Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Today's Date: {new Date().toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <TopicSection 
            onTopicSelect={handleTopicSelect} 
            selectedTopic={selectedTopic}
          />
          <ContentSection
            selectedTopic={selectedTopic}
            activeView={activeView}
            onViewChange={setActiveView}
            onQuestionClick={handleQuestionClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CatDashboardPage;