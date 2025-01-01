import React, { useState } from "react";

const Faq = () => {
  // Example FAQ data
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
    },
    {
      id: 2,
      question: "How do I style a React application?",
      answer:
        "You can style a React application using CSS, CSS frameworks like Tailwind CSS, or even libraries like styled-components.",
    },
    {
      id: 3,
      question: "What is the difference between props and state?",
      answer:
        "Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.",
    },
    {
      id: 4,
      question: "How does React handle state updates?",
      answer:
        "React updates state asynchronously, batching multiple updates together for better performance.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <span
                className={`text-xl font-bold ${
                  activeId === faq.id ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {activeId === faq.id ? "-" : "+"}
              </span>
            </div>
            {activeId === faq.id && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
