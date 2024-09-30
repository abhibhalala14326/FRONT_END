import React from "react";
import img from "../../assets/collection-72.jpg";

const DiscountsOffer = () => {
  return (
    <main className="flex justify-center items-center w-full mt-12 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#93f859] w-full max-w-[90%] rounded-lg">
        {/* Image Section */}
        <section className="overflow-hidden lg:w-[45%] w-full h-full flex items-center  justify-center ">
          <img
            src={img}
            alt="collection"
            className=" lg:h-[80vh] object-cover rounded-lg"
          />
        </section>

        {/* Text & Offer Section */}
        <section className="flex flex-col items-start lg:items-start w-full lg:w-[45%] py-10 px-6 gap-4 bg-[#93f859]">
          <p className="capitalize text-[18px] sm:text-[20px] ">
            Ultimate Apple Accessory
          </p>
          <h1 className="text-[30px] sm:text-[52px] font-semibold">60% Discount</h1>
          <p className="sm:text-[16px] text-sm text-[#545454]">
            Find the latest and greatest gadgets to enhance your electronic
            devices.
          </p>
          <p className="text-[16px] text-black">
            Hurry up! <span className="text-[#1f12126e]">Deals end in:</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-2">
            {["days", "hours", "mins", "secs"].map((unit, index) => (
              <div
                key={index}
                className="bg-white w-[50px] h-[60px] flex flex-col items-center justify-center text-black text-[18px] font-bold"
              >
                <p>92</p>
                <p className="text-[14px]">{unit}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 px-5 py-3 font-bold w-40 rounded-3xl  bg-black text-white">
            Shop Now
          </button>
        </section>
      </div>
    </main>
  );
};

export default DiscountsOffer;
