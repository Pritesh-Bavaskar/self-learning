import React from "react";
import LearnTab from "./LearnTab";
import QuestionsTab from "./QuestionsTab";
import { FiBookOpen, FiHelpCircle } from "react-icons/fi";

const ContentSection = ({
  selectedTopic,
  activeView,
  onViewChange,
  onQuestionClick,
}) => {
  return (
    <div className="lg:w-3/4 space-y-6">
      {selectedTopic ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedTopic}
          </h2>

          {/* Learn/Questions Toggle */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => onViewChange("learn")}
              className={`py-2 px-4 font-medium ${
                activeView === "learn"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiBookOpen className="inline mr-2" />
              Learn
            </button>
            <button
              onClick={() => onViewChange("questions")}
              className={`py-2 px-4 font-medium ${
                activeView === "questions"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiHelpCircle className="inline mr-2" />
              Questions
            </button>
          </div>

          {activeView === "learn" ? (
            <LearnTab selectedTopic={selectedTopic} />
          ) : (
            <QuestionsTab
              selectedTopic={selectedTopic}
              onQuestionClick={onQuestionClick}
            />
          )}
        </div>
      ) : (
        <DefaultContent />
      )}
    </div>
  );
};

const DefaultContent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center py-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Select a topic to get started
      </h2>
      <p className="text-gray-600 mb-6">
        Choose a topic from the left sidebar to view learning materials and
        practice questions.
      </p>
    </div>
  );
};

export default ContentSection;
