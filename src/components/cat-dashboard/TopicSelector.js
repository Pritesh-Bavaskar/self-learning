import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const TopicSelector = ({ onTopicSelect, selectedTopic }) => {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [expandedSubtopic, setExpandedSubtopic] = useState({});

  const topics = {
    Quant: {
      "Number System": [
        "Divisibility rules",
        "Factors and multiples",
        "LCM and HCF",
        "Base system (binary, octal conversions)",
        "Remainders (cyclicity, Euler's theorem, Chinese Remainder Theorem)",
        "Properties of integers (even/odd, prime/composite)",
        "Last digit, unit digit problems",
        "Digital sum, casting out nines",
        "Factorials and trailing zeroes",
        "Misc.",
      ],
      Arithmetic: [
        "Ratios and Proportions",
        "Averages",
        "Mixtures and Alligations",
        "Percentages",
        "Profit, Loss, and Discount",
        "Simple and Compound Interest",
      ],
      "Time, Speed, and Distance": [],
      "Time and Work": ["Work and Wages", "Pipes and Cisterns"],
      Algebra: [
        "Linear Equations",
        "Quadratic Equations",
        "Higher degree polynomials",
        "Inequalities (linear and quadratic)",
        "Absolute values",
        "Functions (definition, types, graphs)",
        "Graphs of functions (transformations)",
        "Sequences and Series (AP, GP, HP, special series)",
        "Logarithms",
        "Exponents",
        "Set Theory (Venn diagrams)",
      ],
      Geometry: [
        "Lines and Angles",
        "Triangles",
        "Quadrilaterals",
        "Circles",
        "Polygons",
        "Coordinate Geometry",
        "Mensuration (2D and 3D)",
      ],
      "Modern Mathematics": [
        "Permutations and Combinations",
        "Probability (CAT basics)",
        "Set Theory",
        "Binomial Theorem",
      ],
    },
    LRDI: {
      "Logical Reasoning": [
        "Arrangements (Linear, Circular, Matrix)",
        "Order and Ranking",
        "Selections and Grouping",
        "Puzzles (Scheduling, Blood Relations, Direction Sense)",
        "Venn Diagrams and Set Theory",
        "Games and Tournaments",
        "Binary Logic (Truth-tellers, Liars)",
        "Quantitative Reasoning",
      ],
      "Data Interpretation": [
        "Tables (Simple, Multi-variable, Missing Data)",
        "Graphs (Bar, Line, Pie, Radar)",
        "Mixed Graphs (Bar + Line, Pie + Table)",
        "Caselets (Paragraph-based DI)",
        "Data Sufficiency",
      ],
    },
    VARC: {
      "Reading Comprehension": [
        "Abstract / Philosophical Passages",
        "Business and Economics",
        "Science and Technology",
        "Environment and Ecology",
        "Sociology / Culture",
        "History and Politics",
        "Psychology / Education",
      ],
      "Verbal Ability": [
        "Para Summary",
        "Para Jumbles (TITA - Type In The Answer)",
        "Odd One Out",
      ],
    },
  };

  const toggleMainTopic = (topic) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const toggleSubtopic = (subtopic) => {
    setExpandedSubtopic((prev) => ({
      ...prev,
      [subtopic]: !prev[subtopic],
    }));
  };

  return (
    <div className="space-y-2">
      {Object.entries(topics).map(([mainTopic, subtopics]) => (
        <div key={mainTopic} className="rounded-lg overflow-hidden shadow-sm">
          {/* Main Topic Header */}
          <button
            onClick={() => toggleMainTopic(mainTopic)}
            className={`w-full p-4 text-left flex justify-between items-center transition-all duration-200 ${
              expandedTopics[mainTopic]
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
          >
            <span className="font-semibold text-lg">{mainTopic}</span>
            {expandedTopics[mainTopic] ? (
              <FiChevronDown className="w-5 h-5" />
            ) : (
              <FiChevronRight className="w-5 h-5" />
            )}
          </button>

          {/* Subtopic Content */}
          {expandedTopics[mainTopic] && (
            <div className="bg-white p-1 space-y-1">
              {Object.entries(subtopics).map(([subtopic, items]) => (
                <div key={subtopic} className="rounded-md overflow-hidden">
                  {/* Subtopic Header */}
                  <button
                    onClick={() => toggleSubtopic(subtopic)}
                    className={`w-full p-3 text-left flex justify-between items-center transition-colors duration-150 ${
                      expandedSubtopic[subtopic]
                        ? "bg-gray-900 text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    <span className="font-medium">{subtopic}</span>
                    {expandedSubtopic[subtopic] ? (
                      <FiChevronDown className="w-4 h-4" />
                    ) : (
                      <FiChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {/* Items List */}
                  {expandedSubtopic[subtopic] && (
                    <ul className="bg-white">
                      {items.map((item) => (
                        <li
                          key={item}
                          onClick={() => onTopicSelect(item)}
                          className={`p-3 pl-8 cursor-pointer transition-colors duration-100 ${
                            selectedTopic === item
                              ? "bg-gray-600 text-white"
                              : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicSelector;
