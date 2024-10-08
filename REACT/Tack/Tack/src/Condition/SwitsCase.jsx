import React, { useState } from "react";
import Component1 from "../Condition/Componet1";
import Component2 from "../Condition/Componets2"; 

const Ifelse = () => {
  const [ConIF, setConIF] = useState(0);
  const [button, setButton] = useState("Sign Up");

  const handleClick = () => {
    switch (ConIF) {
      case 0:
        setConIF(1);
        setButton("Login");
        break;
      case 1:
        setConIF(0);
        setButton("Sign Up");
        break;
      default:
        setConIF(0);
        setButton("Sign Up");
    }
  };

  return (
    <div>
      {ConIF === 0 ? <Component1 /> : <Component2 />}

      <div className="w-full flex justify-center ">
        <button
          className="flex justify-center items-center bg-black text-white px-3 mb-10 "
          onClick={handleClick}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Ifelse;
