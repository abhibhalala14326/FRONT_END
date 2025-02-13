import React, { useContext, useState, useEffect } from "react";
import EditExpense from "./EditExpense";
import tracker from "../context/ExpenseContext";
const ExpenseList = () => {
  const { state, dispatch } = useContext(tracker);
  const [EditExpenses, SetEditExpenses] = useState();



  const handleDelete = (description) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: description,
    });
  };

  const handleEdit = (expense) => {
    SetEditExpenses();
  };

  return (
    <div>
      <h1 className="text-6xl text-center py-6 bg-fuchsia-400/50 font-bold">
        Expense List
      </h1>

      {EditExpenses ? (
        <EditExpense
          expensesss={EditExpenses}
          onBack={() => SetEditExpenses()}
        />
      ) : (
        <div className="grid grid-cols-4 gap-10 p-4 m-4">
          {state.map((list) => (
            <div
              key={list.description}
              className="bg-slate-300 p-4 rounded-lg shadow-md"
            >
              {/* Description */}
              <p className="mb-2">
                <span className="uppercase text-sm font-bold text-gray-700">
                  Description:
                </span>{" "}
                <span className="text-gray-800">{list.description}</span>
              </p>

              {/* Category */}
              <p className="mb-2">
                <span className="uppercase text-sm font-bold text-gray-700">
                  Category:
                </span>{" "}
                <span className="text-gray-800">{list.category}</span>
              </p>

              {/* Amount */}
              <p className="mb-4">
                <span className="uppercase text-sm font-bold text-gray-700">
                  Amount:
                </span>{" "}
                <span className="text-green-600 font-semibold">
                  ${list.amount}
                </span>
              </p>

              {/* Buttons edit and delete */}
              <div className="flex justify-between items-center">
                <button
                  className="p-2 text-white rounded-full bg-red-500 hover:bg-red-600 transition"
                  onClick={() => handleDelete(list.description)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-600 transition"
                  onClick={() => {
                    SetEditExpenses(list);
                    console.log(EditExpense);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
