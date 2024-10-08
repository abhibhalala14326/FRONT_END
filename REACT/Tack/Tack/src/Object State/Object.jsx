import React, { useState, useRef } from "react";

const ObjectComponent = () => {
  const [object, setObject] = useState([{ Name: "", Email: "" }]);
  const ref1 = useRef(null);
  const ref2 = useRef(null); 

  const Creaat = () => {
    const email = ref1.current.value;
    const name = ref2.current.value;

      setObject([...object, { Name: name, Email: email }]);
      ref1.current.value = ""; 
      ref2.current.value = "";

      console.log(object);
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[50%]">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Object</h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            ref={ref2}
            placeholder="Enter Name"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            ref={ref1}
            placeholder="Enter Email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={Creaat}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Object
          </button>
        </div>

        {/* Display added objects */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Objects List</h2>
          <ul className="space-y-2">
            {object.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-gray-200 rounded-lg flex justify-between"
              >
                <span>{item.Name}</span>
                <span>{item.Email}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ObjectComponent;
