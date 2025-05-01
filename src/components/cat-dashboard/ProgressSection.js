import React from "react";

const ProgressSection = () => {
  const progressData = {
    quant: { completed: 150, total: 500 },
    lrdi: { completed: 80, total: 500 },
    varc: { completed: 100, total: 500 },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h2>
      <div className="space-y-4">
        {Object.entries(progressData).map(([subject, data]) => (
          <div key={subject}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 capitalize">{subject}</span>
              <span className="text-gray-700">
                {data.completed}/{data.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  subject === "quant"
                    ? "bg-blue-600"
                    : subject === "lrdi"
                    ? "bg-green-600"
                    : "bg-purple-600"
                }`}
                style={{
                  width: `${(data.completed / data.total) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
