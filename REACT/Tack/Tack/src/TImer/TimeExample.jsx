import React, { useState , useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  // Start  timer

  const startTimer = () => {
    if (intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  // Stop  timer

  const stopTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = null;
  };

  // reset  timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Timer: <span className="text-blue-600">{time}</span> seconds
        </h1>
        <div className="space-x-4">
          <button
            onClick={startTimer}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
