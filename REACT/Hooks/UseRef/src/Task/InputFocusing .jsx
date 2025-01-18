import React, { useRef, useState } from "react";

const InputFocusing = () => {
  const name = useRef(null);
  const update = (event) => {
    event.preventDefault();
    const Ref1 = name.current.focus();

    setFormData({ name: Ref1, email: Ref2 });
  };

  return (
    <>
      <div className="bg-black w-full flex flex-col justify-center text-white items-center h-screen">
        <form
          action=""
          className="flex flex-col items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg w-80"
        >
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="w-full p-2 rounded-lg border text-black capitalize border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none"
          />
        </form>
        <button
          onClick={update}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Focus
        </button>
      </div>
    </>
  );
};

export default InputFocusing;
