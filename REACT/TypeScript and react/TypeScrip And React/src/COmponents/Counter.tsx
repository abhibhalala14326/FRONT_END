import  { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0)

  const Increments = () => {

    ref.current += 1 ;
    setCount(ref.current)

  }
  

   const Decrements = () => {
    if (ref.current > 0) {
      ref.current -= 1;
      setCount(ref.current);
    }
   };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={Decrements}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <span className="text-xl font-semibold text-gray-800">{count}</span>
        <button
          onClick={ Increments}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
