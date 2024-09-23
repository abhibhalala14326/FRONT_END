import React, { useEffect, useState } from "react";
import SherhFood from "./SherhFood";

const Fooditem = () => {
  const [data, setData] = useState([]);

  console.log("data", data);

  const [value, setvalue] = useState("");

  console.log(value);
  

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => {
        setData(res.recipes);
        // console.log(res.recipes);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mb-10">
        <div className="flex flex-col w-[60%]">
          <label htmlFor="Sherch Food" className="text-[#00000046]">
            Search Food
          </label>
          <input
            type="text"
            placeholder="Enter Food Name "
            className="w-[80%] p-2 bg-[#c29c9c77]"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        {data.map((item) => {
          return (
            <>
              <div key={item.id}>
                <p className="text-center text-2xl font-medium">
                  {item.name === value ? (
                    <>
                      <p>{item.name}</p>
                      <div className="flex justify-center">
                        <img src={item.image} alt="" className="size-72" />
                      </div>

                      <p>{item.instructions}</p>
                    </>
                  ) : (
                    console.log("fail")
                  )}
                </p>
              </div>

              <div >
                <p>{item.name}</p>
                <div className="flex justify-center">
                  <img src={item.image} alt="" className="size-72" />
                </div>

                <p>{item.instructions}</p>
              </div>
            </>
          );
        })}

        
      </div>


      <div>

      </div>
    </>
  );
};

export default Fooditem;
