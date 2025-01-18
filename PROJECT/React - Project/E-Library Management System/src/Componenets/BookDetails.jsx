// Import necessary dependencies
import React from "react";
import { useState } from "react";

// Example book data


const BookDetails = ({ book, Back }) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h2>
      <p className="text-lg text-gray-600 mb-2">by {book.author}</p>
      <p className="text-gray-700 mb-4">{book.description}</p>
      <button
        onClick={Back}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to List
      </button>
    </div>
  );
};



export default BookDetails;
