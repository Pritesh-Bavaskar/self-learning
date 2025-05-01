import React from "react";

const GoalsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Goals</h2>
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
  );
};

export default GoalsSection;
