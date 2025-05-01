import React from "react";
import TopicSelector from "./TopicSelector";
import GoalsSection from "./GoalsSection";
import ProgressSection from "./ProgressSection";

const TopicSection = ({ onTopicSelect, selectedTopic }) => {
  return (
    <div className="lg:w-1/4 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Topics</h2>
        <TopicSelector 
          onTopicSelect={onTopicSelect} 
          selectedTopic={selectedTopic} 
        />
      </div>

      <GoalsSection />
      <ProgressSection />
    </div>
  );
};

export default TopicSection;