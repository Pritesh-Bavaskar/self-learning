import React, { useState, useEffect, useRef } from "react";

const QAPage = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let timerId;
    if (!submitted) {
      timerId = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [submitted]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
      setUserInput("");
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-10px)] pt-20 overflow-hidden bg-gray-900">
      {/* Left side */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
        {/* Card container */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col flex-grow">
          {/* Timer */}
          <div className="text-right mb-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded text-lg font-semibold">
              {formatTime(timeElapsed)}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold mb-6">
            What is the capital of France?
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {["Paris", "London", "Berlin", "Madrid"].map((option, index) => (
              <label
                key={index}
                className={`block px-4 py-3 border rounded-lg cursor-pointer transition hover:bg-gray-100 ${
                  selectedOption === option
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  className="hidden"
                  onChange={() => setSelectedOption(option)}
                  disabled={submitted}
                />
                {option}
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleSubmit}
              disabled={submitted || selectedOption === null}
              className={`w-full px-6 py-3 font-medium uppercase tracking-wider text-sm transition-all duration-300 rounded-lg ${
                submitted || selectedOption === null
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-black text-white hover:opacity-90"
              }`}
            >
              Submit
            </button>

            <button
              onClick={handleShowSolution}
              disabled={!submitted}
              className={`w-full px-6 py-3 font-medium uppercase tracking-wider text-sm transition-all duration-300 rounded-lg ${
                submitted
                  ? "bg-black text-white hover:opacity-90"
                  : "bg-gray-400 cursor-not-allowed text-white"
              }`}
            >
              Show Solution
            </button>
          </div>

          {/* Solution */}
          {showSolution && (
            <div className="mt-8 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800">
              <p>
                Solution: Paris is the capital city of France, known for its art,
                gastronomy, and culture.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Chat UI */}
      <div className="w-full md:w-1/2 bg-white shadow-inner flex flex-col rounded-tl-3xl overflow-hidden">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center mt-20">Ask your doubt here...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl max-w-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input box */}
        <div className="p-4 border-t flex items-center gap-3 bg-gray-50">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 font-medium uppercase tracking-wider text-sm transition-all duration-300 bg-black text-white rounded-lg hover:opacity-90"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default QAPage;
