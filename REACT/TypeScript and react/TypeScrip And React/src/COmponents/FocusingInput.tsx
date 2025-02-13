import { useRef } from "react";

const FocusingInput = () => {
  const inputRef = useRef()

  const focusing = () => {
      inputRef.current.focus()
    
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name..."
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={focusing}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Focus
      </button>
    </div>
  );
};

export default FocusingInput;
