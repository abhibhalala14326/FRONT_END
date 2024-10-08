import React, { useState } from "react";
import Component1 from "../Condition/Componet1";
import Component2 from "../Condition/Componets2"; 

const Ifelse = () => {
  const [ConIF, setConIF] = useState(0);
  const [button, setButton] = useState("Sign Up");

  const handleClick = () => {
    setConIF(ConIF === 0 ? 1 : 0);
    setButton(ConIF === 0 ? "Login" : "Sign Up");
  };

  return (
    <div>
      {ConIF === 0 && <Component1 />}
      {ConIF === 1 && <Component2 />}

      <div className="w-full flex justify-center ">
        <button
          className="flex justify-center items-center bg-black text-white px-3 mb-10"
          onClick={handleClick}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Ifelse;
