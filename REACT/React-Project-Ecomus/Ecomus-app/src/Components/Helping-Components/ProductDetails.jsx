import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

// Components section
const Description = () => (
  <div>
    <p className="text-gray-700 mb-6">Description content goes here.</p>
  </div>
);

const Review = () => (
  <div>
    <table className="w-full">
      <thead>
        <tr className=" ">
          <th className="p-2 border">Attribute</th>
          <th className="p-2 border">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" ">
          <td className="p-2 border">Color</td>
          <td className="p-2 border">White, Pink, Black</td>
        </tr>
        <tr className=" ">
          <td className="p-2 border">Size</td>
          <td className="p-2 border">S, M, L, XL</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Shipping = () => (
  <div>
    <p className="text-xl py-4">The Company Private Limited Policy</p>
    <div className="text-[14px] flex flex-col gap-3">
      <p>Your privacy policy content goes here.</p>
      {/* Other shipping text ... */}
    </div>
  </div>
);

const ReturnPolicies = () => <div>Return policies will be displayed here.</div>;

const NotFound = () => (
  <div className="text-center">
    <h2 className="text-2xl font-bold">404 - Not Found</h2>
    <p className="text-gray-500">
      Oops! The page you're looking for doesn't exist.
    </p>
  </div>
);

// Route objects
const routes = [
  { path: "/description", name: "Description", component: <Description /> },
  { path: "/review", name: "Review", component: <Review /> },
  { path: "/shipping", name: "Shipping", component: <Shipping /> },
  {
    path: "/return-policies",
    name: "Return Policies",
    component: <ReturnPolicies />,
  },
];

const ProductDetails = () => {
  return (
    <div className="w-full m-auto p-6 bg-white shadow-md rounded-lg">
      {/* Tabs Section */}
      <div className="border-b mb-6">
        <nav className="flex space-x-4 max-sm:text-sm">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-900"
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Route Rendering Section */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        {/* Catch-all Route for Undefined Paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ProductDetails;
