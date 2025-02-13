import React from "react";

const Blog = () => {
  // Example blog data
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "Dec 31, 2024",
      excerpt:
        "React Hooks revolutionized the way we build components. Learn the basics of useState, useEffect, and custom hooks.",
    },
    {
      id: 2,
      title: "A Guide to Tailwind CSS",
      author: "Jane Smith",
      date: "Nov 15, 2024",
      excerpt:
        "Tailwind CSS is a utility-first CSS framework that makes styling your applications a breeze. Here’s how to get started.",
    },
    {
      id: 3,
      title: "State Management in React",
      author: "Alice Johnson",
      date: "Oct 5, 2024",
      excerpt:
        "Managing state in React can be challenging. Explore the best practices for using Context API, Redux, and Zustand.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              By {blog.author} • {blog.date}
            </p>
            <p className="text-gray-700 mb-4">{blog.excerpt}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
