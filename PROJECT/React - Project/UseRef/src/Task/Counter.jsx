import React, { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const Increment = () => {
    countRef.current += 1;
    setCount(countRef.current);
  };

  const Decrement = () => {
    if (countRef.current > -10) {
      countRef.current -= 1;
      setCount(countRef.current);
    }
  };
  return (
    <>
      <div className="w-full h-svh flex justify-center items-center flex-col gap-3 bg-black  text-sm text-white">
        <h1 className="text-2xl px-2">{count}</h1>
        <button
          className="px-4 py-4 bg-red-500/50 text-white"
          onClick={Increment}
        >
          Increment Count
        </button>
        <button
          className="px-4 py-4 bg-blue-500/50 text-white"
          onClick={Decrement}
        >
          Decrement Count
        </button>
      </div>
    </>
  );
};

export default Counter;
