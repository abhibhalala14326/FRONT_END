import { useState } from "react";
import BookDetails from "./BookDetails";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel set in the 1920s, exploring themes of wealth, society, and the American Dream.",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A story of racial injustice and moral growth in the American South.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance.",
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    description:
      "The epic tale of Captain Ahab's obsession with the white whale, Moby Dick.",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic novel about love, class, and society in 19th-century England.",
  },
];
const BookList = () => {
  const [selectedBook, setSelectedBook] = useState();
  console.log(selectedBook);

  const onBack = () => {
    setSelectedBook();
  };

  return (
    <div className="bg-gray-100 w-full p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        {selectedBook ? "Book Details" : "Book List"}
      </h1>
      <div className=" mx-auto">
        {selectedBook ? (
          <BookDetails book={selectedBook} onBack={onBack} />
        ) : (
          <div className="bg-white  rounded-lg p-6">
            {books.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {books.map((book) => (
                  <li
                    key={book.id}
                    className="py-4 flex justify-between items-center "
                    onClick={() => setSelectedBook(book)}
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {book.title}
                      </h2>
                      <p className="text-gray-600">by {book.author}</p>
                    </div>
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={(e) => {
                        setSelectedBook([book]);
                      }}
                    >
                      View Details
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No books available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
