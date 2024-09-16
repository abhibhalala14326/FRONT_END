import React from "react";
import img1 from "../../assets/electronic-6.jpg";

const Item = () => {
  return (
    <>
      
        
        <div className="h-[100vh] w-full sm:w-[90%] relative">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="flex justify-center items-center w-full absolute top-[70%] ">
            <div>
              <p className="text-[14px] uppercase text-center">
                hot accssorise
              </p>
              <h1 className="text-[20px] font-bold capitalize  text-center">
                Smart Assistant
              </h1>
              <div className="flex justify-center mt-5">
                <button className="px-5 font-bold py-2 bg-[#93f859]  ">
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Item;
