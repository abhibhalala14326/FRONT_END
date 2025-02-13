import { useEffect, useReducer, useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";
import AddExpense from "./Components/AddExpense";
import tracker from "./context/ExpenseContext";
import Layout from "./Page/Layout";
import { appRducer } from "./reducers/expenseReducer";
import ExpenseSummary from "./Components/ExpenseSummary";


const exoenseObj = [
  { description: "Grocery shopping", amount: 45.23, category: "Food" },
  { description: "Uber ride", amount: 12.5, category: "Transport" },
  {
    description: "Netflix subscription",
    amount: 15.99,
    category: "Entertainment",
  },
  { description: "Gas refill", amount: 37.8, category: "Transport" },
  { description: "Electricity bill", amount: 60.45, category: "Utilities" },
  { description: "Dinner at restaurant", amount: 85.0, category: "Food" },
  { description: "Gym membership", amount: 40.0, category: "Health" },
  { description: "Amazon purchase", amount: 29.99, category: "Shopping" },
  { description: "Movie tickets", amount: 20.0, category: "Entertainment" },
  { description: "Phone bill", amount: 55.2, category: "Utilities" },
  { description: "Coffee shop visit", amount: 7.5, category: "Food" },
  { description: "Parking fee", amount: 5.0, category: "Transport" },
  { description: "Hotel stay", amount: 150.0, category: "Travel" },
  { description: "Flight ticket", amount: 300.0, category: "Travel" },
  { description: "Donation", amount: 25.0, category: "Charity" },
  {
    description: "Bookstore purchase",
    amount: 18.75,
    category: "Shopping",
  },
  {
    description: "Spotify subscription",
    amount: 9.99,
    category: "Entertainment",
  },
  { description: "Car maintenance", amount: 250.0, category: "Transport" },
  { description: "Doctor's visit", amount: 75.0, category: "Health" },
  { description: "Online course", amount: 120.0, category: "Education" },
  { description: "Pet food", amount: 30.0, category: "Pets" },
  { description: "Taxi fare", amount: 15.4, category: "Transport" },
  {
    description: "Home cleaning service",
    amount: 80.0,
    category: "Services",
  },
  {
    description: "Streaming service",
    amount: 12.99,
    category: "Entertainment",
  },
  { description: "New shoes", amount: 85.0, category: "Shopping" },
  { description: "Water bill", amount: 30.2, category: "Utilities" },
  { description: "Yoga class", amount: 20.0, category: "Health" },
  {
    description: "Concert ticket",
    amount: 50.0,
    category: "Entertainment",
  },
  { description: "Groceries", amount: 90.1, category: "Food" },
  { description: "Laptop repair", amount: 200.0, category: "Services" },
];
function App() {
  const [state, dispatch] = useReducer(appRducer , exoenseObj);
  
  return (
    <>
      <tracker.Provider value={{ state, dispatch }}>
        {/* <ExpenseList /> */}
        {/* <AddExpense/> */}
        <Layout />
        {/* <ExpenseSummary/> */}
      </tracker.Provider>
    </>
  );
}

export default App;
