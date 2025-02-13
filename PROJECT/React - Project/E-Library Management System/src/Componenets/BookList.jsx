import { useContext, useEffect, useReducer, useState } from "react";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import { BooksObj } from "../App";
import { MdDeleteOutline } from "react-icons/md";
import Edit from "./Edit";


const BookReducer = (state,action) => {
  switch (action.type) {
    case "SET_BOOK":
      return { ...state, Book: action.payload };

    case "SET_EDIT_BOOK":
      return { ...state, EditBook: action.payload };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "RESET_BOOK":
      return { ...state, Book: null, EditBook: null };
    default:
      return state;
  }
};

const BookList = () => {
  // const [Book, setBook] = useState(null);
  // const [EditBook, setEditBook] = useState(null);
  // const [search, setSearch] = useState("");

  const { BookObj, SetBookobj } = useContext(BooksObj);

  const initialState = {
    Book: null,
    EditBook: null,
    search: "",
  };

  const  [state, dispatch]  = useReducer(BookReducer, initialState);

  const { Book, EditBook, search } = state;



  const filtered = BookObj.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 w-full p-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">
        {EditBook ? "Edit Book " : Book ? "Book Details" : "Book List"}
      </h1>
      {EditBook ? (
        // update book
        <Edit book={EditBook} onBack={() => dispatch({ type: "RESET_BOOK" })} />
      ) : (
        <div>
          <div className="mx-auto">
            {Book ? (
              // book details
              <BookDetails
                book={Book}
                Back={() => dispatch({ type: "RESET_BOOK" })}
              />
            ) : (
              <div className="bg-white rounded-lg p-6">
                {filtered.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {filtered.map((book) => (
                      <li
                        key={book.id}
                        className="py-4 flex justify-between items-center"
                      >
                        <div
                          onClick={() =>
                            dispatch({ type: "SET_BOOK", payload: book })
                          }
                          className="cursor-pointer"
                        >
                          <h2 className="text-lg font-semibold text-gray-800">
                            {book.title}
                          </h2>
                          <p className="text-gray-600">by {book.author}</p>
                        </div>
                        <div className=" flex gap-3">
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() =>
                              dispatch({ type: "SET_BOOK", payload: book })
                            }
                          >
                            View Details
                          </button>
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => {
                              SetBookobj(
                                BookObj.filter((id) => id.title !== book.title)
                              );
                            }}
                          >
                            <MdDeleteOutline className="text-3xl" />
                          </button>

                          <button
                            onClick={() => dispatch({ type: "SET_EDIT_BOOK" ,payload:book})}
                          >
                            Edit
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-center">
                    No books available.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
