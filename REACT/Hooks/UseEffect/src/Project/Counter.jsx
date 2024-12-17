import React, { useEffect, useState } from "react";

const Counter = () => {
  const [Time, setTime] = useState(0);
  const [isRun, SetIsrun] = useState(false);
  const [Dark, SetDark] = useState(false);

  const Minite = Math.floor(Time / 60);
  const second = Math.floor(Time % 60);
  console.log("minite", Minite, "second", second);

  useEffect(() => {
    if (isRun && Time > 0) {
      let count = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(count);
    }
  }, [isRun, Time]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-all duration-500 ${
        Dark ? "bg-gray-900 text-black" : "bg-gray-100 text-black"
      }`}
    >
      <input
        type="text"
        onChange={(e) => setTime(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-4xl font-bold text-blue-600 mb-4">
        {Time > 0
          ? `${String(Minite).padStart(2, "0")} : ${String(second).padStart(
              2,
              "0"
            )}`
          : "TimeUp"}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            SetIsrun(!false);
            SetDark(!false);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={() => {
            SetIsrun(false);
            SetDark(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={() => {
            SetIsrun(false);
            setTime(0);
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
