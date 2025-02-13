import React, { useContext, useEffect, useReducer, useState } from 'react';
import { summaryReducer } from '../reducers/expenseReducer';
import tracker from '../context/ExpenseContext';

const ExpenseSummary = () => {
  const { state } = useContext(tracker); 
  const [summary, dispatch] = useReducer(summaryReducer, {});

  useEffect(() => {
    const categories = [
      'Food',
      'Transport',
      'Entertainment',
      'Utilities',
      'Health',
      'Shopping',
      'Travel',
      'Charity',
      'Services',
      'Pets',
    ];

    const categorySummary = categories.reduce((acc, category) => {
      const filteredItems = state.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      acc[category] = filteredItems.length;
      return acc;
    }, {});

   dispatch({ type: "SET_SUMMARY", payload: categorySummary });
  }, [state]); 

  console.log(Object.entries(summary));
  
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Expense Summary</h2>
      <ul className="space-y-2">
        {Object.entries(summary).map(([category, count]) => (
          <li key={category} className="flex justify-between">
            <span className="font-medium">{category}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;  