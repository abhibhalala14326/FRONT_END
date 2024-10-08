import React, { useState } from "react";

const Tonggle = () => {
  const [color, setColor] = useState("bg-black"); 

  const colorChange = () => {
    setColor((Color) =>
      Color === "bg-black" ? "bg-white" : "bg-black"
    ); 
  };

  return (
    <div className={`${color} h-screen flex justify-center items-center`}>
      <button
        onClick={colorChange}
        className="text-blue-200 bg-zinc-500/50 px-3 py-2"
      >
        Toggle Background Color
      </button>
    </div>
  );
};

export default Tonggle;
