import React from "react";
import Button from "../../components/Button";

const QuestionsTab = ({ selectedTopic, onQuestionClick }) => {
  const topicQuestions = {
    "Number System": [
      "Find the remainder when 7^100 is divided by 5",
      "What is the last digit of 3^2023?",
      "Find the HCF of 36 and 48",
    ],
    Arithmetic: [
      "If the ratio of boys to girls is 3:2 and there are 30 girls, how many boys are there?",
      "A shopkeeper sells an item at 20% profit. If the cost price was $200, what's the selling price?",
      "Calculate the simple interest on $1000 at 5% for 3 years",
    ],
    Algebra: [
      "Solve for x: 2x + 5 = 15",
      "Find the roots of x² - 5x + 6 = 0",
      "Simplify (x + 3)(x - 2)",
    ],
  };

  const defaultQuestions = [
    "Q1: Simplify (2³ + 4²) / 8",
    "Q2: What is the main idea of the passage?",
    "Q3: Based on the given data, find the missing value.",
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Practice Questions</h3>
      <ul className="space-y-4">
        {(topicQuestions[selectedTopic] || defaultQuestions).map(
          (question, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer"
              onClick={() => onQuestionClick(question)}
            >
              {question}
            </li>
          )
        )}
      </ul>

      <div className="mt-6">
        <Button
          text="Generate More Questions"
          onClick={() => console.log("Generating more questions...")}
          variant="primary"
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default QuestionsTab;
