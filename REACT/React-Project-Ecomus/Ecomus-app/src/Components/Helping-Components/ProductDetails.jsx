import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductDetails = () => {
  const tabs = [
    { name: "Description", path: "description" },
    { name: "Return Policies", path: "ReturnPolicies" },
    { name: "Shipping", path: "Shipping" },
    { name: "Review", path: "review" },
  ];

  return (
    <div className="w-full m-auto p-6 bg-white shadow-md rounded-lg">
      {/* Tabs Section */}
      <div className="border-b mb-6">
        <nav className="flex space-x-4 max-sm:text-sm text-xl font-bold">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-blue-500 pb-2"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Content Section */}
      <Outlet />
    </div>
  );
};

export default ProductDetails;
