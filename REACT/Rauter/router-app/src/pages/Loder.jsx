import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Loder = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>This is Loder Page</h1>
      <ul className="grid grid-cols-3 gap-4 px-3 ">
        {data.map((item) => {
          return (
            <>
              <li className="bg-amber-400">
                <li className="uppercase font-bold">{item.title}</li>
                <li>
                  <p>{item.body}</p>
                </li>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export const LoaderApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default Loder;
