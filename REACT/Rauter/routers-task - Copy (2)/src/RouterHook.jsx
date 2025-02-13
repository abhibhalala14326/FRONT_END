import React from "react";
import { useNavigate } from "react-router-dom";

const RouterHook = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => navigate("/login")}
        className="font-bold text-lg bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Login
      </button>
    </div>
  );
};

export default RouterHook;
