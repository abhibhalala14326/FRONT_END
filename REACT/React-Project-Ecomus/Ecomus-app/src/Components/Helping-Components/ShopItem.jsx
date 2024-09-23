import React from "react";
import img3 from "../../assets/white-1.jpg";

const items = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
  {
    id: 2,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
  {
    id: 3,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
  {
    id: 4,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
  {
    id: 5,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
  {
    id: 6,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img3,
    colors: ["black", "orange", "pink"],
  },
];

const ShopItem = () => {
  return (
    <div className="container m-auto sm:grid-cols-3  px-5 gap-10 lg:grid-cols-3 xl:grid-cols-2 grid grid-cols-1 items-center justify-center w-full">
      {items.map((item) => (
        <div key={item.id} className="mr-10 overflow-hidden py-7 w-full shadow-lg">
          <div className="w-full overflow-hidden lg:w-full">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full overflow-hidden bg-black hover:scale-105 object-cover duration-1000"
            />
          </div>

          <div className="pl-2">
            <p className="font-[700] sm:text-xl text-[17px]">{item.name}</p>
            <p className="font-[500] sm:text-[21px] text-[17px] mt-1">
              &#36;{item.price}
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {item.colors.map((color, index) => (
                <div
                  key={index}
                  className="sm:h-8 sm:w-8 h-6 w-6 border-black border flex items-center justify-center rounded-[50%]"
                >
                  <p
                    className={`sm:h-6 sm:w-6 h-4 w-4 bg-[${color}] rounded-[50%] duration-300 hover:w-3 hover:h-3`}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopItem;
