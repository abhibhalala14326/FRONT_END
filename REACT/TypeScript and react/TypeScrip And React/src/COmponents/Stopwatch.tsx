import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState<>(0);
  const [isRun, setIsRun] = useState<>(true);
  const Ref = useRef(null);

  useEffect(() => {
    if (isRun) {
      Ref.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(Ref.current);
    }

    return () => clearInterval(Ref.current);
  }, [isRun]);

  const Stop = () => {
    setIsRun(!true);
  };

  const Start = () => {
    setIsRun(true);
  };

  const Reset = () => {
    setIsRun(!true);
    setTime(0);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Stopwatch</h1>
        <p className="text-6xl font-mono text-blue-600 mb-6">{time}</p>
        <div className="space-x-4">
          <button
            onClick={Stop}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
          >
            Stop
          </button>
          <button
            onClick={Start}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
          >
            Start
          </button>
          <button
            onClick={Reset}
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
