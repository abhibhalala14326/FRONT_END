import React, { useRef, useState } from "react";

const Arrays = () => {
  const [arr, setArr] = useState(['Abhi']);
  const ref1 = useRef(null);

  const newArr = () => {
    const arrValue = ref1.current.value;
    setArr([...arr, arrValue]);
    ref1.current.value = ""; 
    console.log(arr);
    
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold mb-4">Array Input</h1>
      <input
        type="text"
        ref={ref1}
        className="p-2 border border-gray-300 rounded-lg mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a value"
      />
      <button
        onClick={newArr}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add to Array
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Array Values:</h2>
        <ul className=" bg-white p-4 rounded-lg shadow-md">
          {arr.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Arrays;
