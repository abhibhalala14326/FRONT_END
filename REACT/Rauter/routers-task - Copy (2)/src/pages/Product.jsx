import React from "react";

const Product = () => {

   
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$150",
      image: "https://via.placeholder.com/150",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$800",
      image: "https://via.placeholder.com/150",
      description: "Latest model with high performance and excellent camera.",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$1200",
      image: "https://via.placeholder.com/150",
      description: "Powerful gaming laptop with high-end graphics and specs.",
    },
   
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Product;
