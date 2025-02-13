import { useDispatch, useSelector } from "react-redux";
import { BLACK_COLOR , WHITE_COLOR } from "./redux/consonant/themsConsonat"; 
import "./App.css";
import { useState } from "react";

function App() {
  const black = useSelector((state) => state.bColore);
  const white = useSelector((state) => state.wColore);
  const [state , setState] = useState(false)

  const toggleTheme = () => {
   state ? setState(false) : setState(true)
  };

  return (
    <>
      <div
        className={` h-screen flex items-center justify-cente ${
          state ? "bg-black text-white " : "bg-white text-black"
        }  `}
      >
        <button className="px-4 py-2 border rounded" onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default App;
