import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [stop, Setstop] = useState(true);

  const ref = useRef(0);
  console.log(ref);

  useEffect(() => {
    if (stop) {
      ref.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(ref.current);
    }

    return () => clearInterval(ref.current);
  });

  const Reset = () => {
    Setstop(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-4xl font-bold text-blue-600 mb-6">{time} seconds</p>
      <div className="space-x-4">
        <button
          onClick={() => Setstop(false)}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
        >
          Stop
        </button>
        <button
          onClick={() => Setstop(!false)}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={Reset}
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
