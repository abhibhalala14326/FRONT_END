import React from 'react'
import img from ".././../assets/collection-72.jpg";

const DiscountsOffer = () => {
  return (
    <>
      <main className="flex justify-around items-center  h-auto  w-[100%] mt-12 ">
        <div className="flex lg:flex-row justify-between items-center bg-[#93f859] flex-col w-[90%]">
          <section className="overflow-hidden lg:w-[45%] w-full flex items-center justify-center h-[70vh]">
            <img
              src={img}
              alt="collection"
              className="w-[100%] h-full object-cover object-center"
            />
          </section>
          <section className="flex flex-col w-[45%]  max-[1024px]:items-center py-10   gap-4 bg-[#93f859]  ">
            <p className="capitalize max-[600px]:text-[17px] text-nowrap">ULTIMATE APPLE ACCESSORY.</p>
            <h1 className="text-[52px] max-[800px]:text-[40px] text-nowrap max-[600px]:text-[40px] font-[500] ">
              60% Discount
            </h1>
            <p className="text-[16px] w-full  max-[600px]:text-[16px] text-[#545454]">
              Find the latest and greatest gadgets to enhance your electronic
              devices.
            </p>
            <p className="text-[16px] text-black">
              Hungry up !{" "}
              <span className="text-[#1f12126e]">Deals end in :</span>
            </p>

            <div className="flex  gap-5">
              <div className=" bg-white  w-[50px] h-[60px] text-black flex flex-col items-center justify-center text-[18px]">
                <p>92</p>
                <p>day</p>
              </div>
              <div className=" bg-white  w-[50px] h-[60px] text-black flex flex-col items-center justify-center text-[18px]">
                <p>92</p>
                <p>day</p>
              </div>
              <div className=" bg-white  w-[50px] h-[60px] text-black flex flex-col items-center justify-center text-[18px]">
                <p>92</p>
                <p>day</p>
              </div>
              <div className=" bg-white  w-[50px] h-[60px] text-black flex flex-col items-center justify-center text-[18px]">
                <p>92</p>
                <p>day</p>
              </div>
            </div>

            <button className="px-5 font-bold py-2 w-40 rounded-3xl  bg-black text-white  ">
              shop now
            </button>
          </section>
        </div>
      </main>
    </>
  );
}



export default DiscountsOffer
