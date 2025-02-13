import React, { useContext, useEffect, useState } from "react";
import tracker from "../context/ExpenseContext";



const EditExpense = ({ expensesss, onBack }) => {
  const { state, dispatch } = useContext(tracker); 
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log(expensesss);
    
    if (expensesss) {
      setAmount(expensesss.amount);
      setCategory(expensesss.category);
      setDescription(expensesss.description);
    }
  }, [expensesss]);

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch({
      type: "EDIT_EXPENSE",
      payload: { category, amount, description },
    });

    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Update Expense
      </h2>
      <form className="space-y-4" onSubmit={handleEdit}>
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
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter the category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Expense
        </button>

        <button
          type="button"
          className="w-full bg-gray-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          onClick={onBack}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default EditExpense;
