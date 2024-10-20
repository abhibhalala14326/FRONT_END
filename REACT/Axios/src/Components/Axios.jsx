import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

 

  useEffect(()=>
{
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });

  };   

  
  return ()=>{fetchData()}
} ,[])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((crr, index) => (
            <div key={index}>
              <img
                src={crr.image}
                alt={crr.title}
                className="h-[50vh] object-contain"
              />
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-2">{crr.title}</h2>
                <p className="text-gray-500">{crr.category}</p>
                <p className="text-gray-700">
                  Rating: {crr.rating.rate} ({crr.rating.count} reviews)
                </p>
                <p className="font-bold text-lg">${crr.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No products available</p>
      )}
    </div>
  );
};

export default Axios;
