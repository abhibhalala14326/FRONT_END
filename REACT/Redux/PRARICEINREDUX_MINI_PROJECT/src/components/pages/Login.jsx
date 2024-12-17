import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-500 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-teal-600 text-white text-2xl font-semibold flex justify-center items-center h-28">
          Login Form
        </div>
        <form className="p-6">
          {/* Email or Phone Input */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center bg-teal-600 text-white px-4 rounded-l-md">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Email or Phone"
              required
              className="w-full pl-14 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-600"
            />
          </div>
          {/* Password Input */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center bg-teal-600 text-white px-4 rounded-l-md">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-14 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-teal-600"
            />
          </div>
          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-teal-600 hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition"
            >
              Login
            </button>
          </div>
          {/* Signup Link */}
          <div className="text-center text-sm">
            Not a member?{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Signup now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
