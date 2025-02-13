import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";

const Loader = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4 px-3">
        {data.products.map((item) => (
          <li key={item.id} className="bg-amber-400">
            <NavLink className='uppercase font-bold p-2 leading-none  ' to={`${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export  const LoaderApi = async () => {
  const res = await fetch("https://dummyjson.com/products")
  
  return await res.json();; 
};

export default Loader;
