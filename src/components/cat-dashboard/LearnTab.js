import React from "react";

const LearnTab = ({ selectedTopic }) => {
  const videoContent = {
    "Number System": "https://www.youtube.com/embed/PQBc5V1vI6k",
    Arithmetic: "https://www.youtube.com/embed/arj7oStGLkU",
    Algebra: "https://www.youtube.com/embed/LwCRRUa8yTU",
    Geometry: "https://www.youtube.com/embed/5uIeG0T7p9I",
    "Logical Reasoning": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Data Interpretation": "https://www.youtube.com/embed/6Z9vOk8Xk6E",
    "Reading Comprehension": "https://www.youtube.com/embed/7tB7uWEFX4g",
    "Verbal Ability": "https://www.youtube.com/embed/3tmd-ClpJxA",
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Video Lecture</h3>
      <div className="mb-6 relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src={
            videoContent[selectedTopic] ||
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
          }
          title={`${selectedTopic} Lecture`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Study Notes</h3>
        <p className="text-gray-700">
          {selectedTopic === "Number System" &&
            "The number system includes natural numbers, whole numbers, integers, rational numbers, and real numbers. Key concepts include divisibility rules, prime factorization, and modular arithmetic."}
          {selectedTopic === "Arithmetic" &&
            "Arithmetic covers basic operations and their properties, ratios, percentages, profit and loss, simple and compound interest, averages, and mixtures."}
          {selectedTopic === "Algebra" &&
            "Algebra involves solving equations, working with polynomials, understanding functions, and manipulating algebraic expressions."}
          {!["Number System", "Arithmetic", "Algebra"].includes(
            selectedTopic
          ) &&
            "Select a topic to view detailed study notes and video lectures."}
        </p>
      </div>
    </div>
  );
};

export default LearnTab;
