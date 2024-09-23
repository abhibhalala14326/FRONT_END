import React, { useEffect, useState } from "react";

const Fooditem = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => {
        setData(res.recipes);
      })
      .catch((error) => {
        console.error(error);
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
            placeholder="Enter Food Name"
            className="w-[80%] p-2 bg-[#c29c9c77]"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="text-center text-2xl font-medium">
              <p>{item.name}</p>
              <div className="flex justify-center">
                <img src={item.image} alt={item.name} className="size-72" />
              </div>
              <p>{item.instructions}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Fooditem;
