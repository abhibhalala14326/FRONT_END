import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const UseParams = () => {

  console.log('useparams render');
  
  
    const {id} = useParams()

    const Param = useLoaderData();


   

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">  {id}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <img
            src={Param.images}
            alt={Param.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {Param.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{Param.category}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">
              ${Param.price}
            </p>
            <p className="text-sm text-yellow-500 mt-1">
              ⭐ {Param.rating} / 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export const Pramss = async ({ params }) => {
  console.log('pramss render');
  
  const { id } = params;
  const res = await fetch("https://dummyjson.com/products/" + id);

  return res.json();
};

export default UseParams




