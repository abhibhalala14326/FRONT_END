import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blogData, setBlogData] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const PerPage = 10;
  const totalPages = Math.ceil(blogData.length / PerPage);


  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/blogposts")
      .then((res) => {
        setBlogData(res.data);
      })
    
  }, []);

  const indexOfLastPost = currentPage * PerPage; // 6
  const indexOfFirstPost = indexOfLastPost - PerPage; // 0
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);  // 0,6

 const renderPageNumbers = () => {
   return Array.from({ length: totalPages }, (_, index) => index + 1).map(
     (page) => (
       <button
         key={page}
         disabled={page === currentPage}
         onClick={()=>setCurrentPage(page)}
         className={`px-4 py-2 rounded-md ${
           page === currentPage
             ? "bg-blue-500 text-white cursor-not-allowed"
             : "bg-gray-300 hover:bg-gray-400"
         }`}
       >
         {page}
       </button>
     )
   );
 };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
        Blog
      </h1>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {post.title}
            </h2>
            <p className="text-gray-700 line-clamp-3">
              {post.body || "No description available."}
            </p>
            <a
              href={`/blog/${post.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {"<"} Previous
        </button>
        {/* <span className="text-lg font-medium">{currentPage}</span> */}
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md `}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default Blog;
