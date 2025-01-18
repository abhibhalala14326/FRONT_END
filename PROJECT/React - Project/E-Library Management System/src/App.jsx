import { createContext, useState } from "react";
import "./App.css";
import BookList from "./Componenets/BookList";
import BookForm from "./Componenets/BookForm";
import Latout from "./page/Latout";
import Navbar from "./Componenets/Navbar";
export const BooksObj = createContext();

function App() {
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



  console.log(books);
  

  const [BookObj, SetBookobj] = useState(books);
  

  return (
    
    <BooksObj.Provider value={{BookObj,SetBookobj}}>
      
      <Latout/>
    </BooksObj.Provider>
  );
}

export default App;
