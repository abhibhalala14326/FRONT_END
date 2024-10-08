import React from "react";

const From1 = () => {
   let from = {
    fullname:'',
    Password:'',
    Email:''
   }

   const fun = (e) =>
   {
    e.preventDefault;

   }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Simple Form
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            from = { ...from, fullname: e.target.value };
            console.log(from);
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            from = { ...from, Email: e.target.value };
            console.log(from);
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            from = { ...from, Password: e.target.value };
            console.log(from);
          }}
        />

        <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200" onClick={fun}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default From1;
