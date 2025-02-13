import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AboutUs = () => {
    const teamMembers = [
      {
        id: 1,
        name: "John Doe",
        position: "CEO & Founder",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Head of Marketing",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Alice Johnson",
        position: "Lead Developer",
        image: "https://via.placeholder.com/150",
      },
    ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <nav className="flex justify-center gap-8 bg-white p-4 rounded-lg shadow-md mb-6">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive ? "text-blue-500 underline" : "text-gray-700"
            } hover:text-blue-400`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="faq"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive ? "text-blue-500 underline" : "text-gray-700"
            } hover:text-blue-400`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="product"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive ? "text-blue-500 underline" : "text-gray-700"
            } hover:text-blue-400`
          }
        >
          Product
        </NavLink>
      </nav>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Outlet />
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We are a passionate team dedicated to providing the best services
            and solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to create innovative and user-friendly solutions that
            empower businesses and individuals to reach their full potential. We
            aim to foster creativity, collaboration, and excellence in
            everything we do.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
