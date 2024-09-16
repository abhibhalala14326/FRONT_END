import { data } from "../App.jsx";
import React from "react";
import { useContext } from "react";



const Con_4 = ({children}) => {
  const c = useContext(data);
  return (
    <>
      <h1 className="bg-black text-white text-3xl text-center">{c}</h1>
      {children}

      {/* <data.Consumer>
        {(val) =>
         (
          <h1 className="bg-black text-white text-3xl text-center">{val}</h1>
        

        
        )
        }
        
      </data.Consumer> */}
    </>
  );
};

export default Con_4;
