import React, { useContext, useEffect, useState } from "react";
import ExpenseSummary from "./ExpenseSummary";
import tracker from "../context/ExpenseContext";


const AddExpense = () => {
  const { state, dispatch } = useContext(tracker);


  

  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const AddData = (e) => {
    e.preventDefault();
  

dispatch({ type: "ADD_EXPENSE"  , payload:{amount , category , description}});
   setamount('')
   setcategory('')
   setdescription('')
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add Expense
      </h2>
      <form className="space-y-4" onSubmit={AddData}>
        {/* category Input */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter the book title"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* amount Input */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            amount
          </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter the amount name"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter a short description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add expense
        </button>
      </form>
      <ExpenseSummary />
    </div>
  );
};

export default AddExpense;

