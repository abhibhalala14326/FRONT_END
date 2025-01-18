import React, { useContext, useEffect, useState } from "react";
import { BooksObj } from "../App";

const AddBook = () => {
    const { BookObj, SetBookobj } = useContext(BooksObj);

    const [ Data , SetData] = useState(false)


    useEffect(()=>
    {
         if (title == "" || description == "" || description == "") {
          SetData(false)
         }else{
          SetData(true)
         }
    })

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] =  useState("");

  const AddData = (e) => {
    e.preventDefault();
    // const newBook = {
    //   title,
    //   author,
    //   description,
    // };

 

    SetBookobj((prev) => [...prev, { title, author, description }]);


    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add a New Book
      </h2>
      <form className="space-y-4" onSubmit={AddData}>
        {/* Title Input */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* Author Input */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            placeholder="Enter the author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
