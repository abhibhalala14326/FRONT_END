import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/collection-1.jpg"; 
import img2 from "../../assets/collection-2.jpg"; 
import img3 from "../../assets/white-1.jpg"; 
import img4 from "../../assets/white-4.jpg"; 

const ShopList = () => {      
  
  return (
    <div className="flex mt-2">
      {/* Another pageslist */}
      <section className="w-[40vw] flex justify-around ">
        <section className="shop-layouts">
          <h2 className="text-black font-bold mb-4">Shop Layouts</h2>
          <ul className="flex flex-col gap-4">
            <li>Default</li>
            <li>Left sidebar</li>
            <li>Right sidebar</li>
            <li>Fullwidth</li>
            <li>Sub collection</li>
            <li>Collections list</li>
          </ul>
        </section>
        <section className="features">
          <h2 className="text-black font-bold mb-4">Features</h2>
          <ul className="flex flex-col gap-5 cursor-pointer">
            <li>Pagination links</li>
            <li>Pagination loadmore</li>
            <li>Pagination infinite scrolling</li>
            <li>Filter sidebar</li>
            <li>Filter hidden</li>
          </ul>
        </section>
        <section className="product-styles">
          <h2 className="text-black font-bold mb-3 cursor-pointer">
            Product Styles
          </h2>
          <ul className="flex flex-col cursor-pointer gap-5">
            <li>Product style list</li>
            <li>Product style 01</li>
            <li>Product style 02</li>
            <li>Product style 03</li>
            <li>Product style 04</li>
            <li>Product style 05</li>
            <li>Product style 06</li>
          </ul>
        </section>
      </section>

      {/* ? shop img */}
      <section className="flex  justify-around items-center  w-[60vw]">
        <div className="w-[20vw] h-[50vh] overflow-hidden relative">
          <img src={img1} alt="" className="w-full h-full hover:scale-105" />

          <div className="flex justify-center items-center">
            <p className="text-black absolute border px-6 py-1 bg-white   top-[75%]">
              Men
            </p>
          </div>
        </div>

        <div className="w-[20vw] h-[50vh] overflow-hidden relative ">
          <img src={img2} alt="" className="w-full h-full hover:scale-105 " />
          <div className="flex justify-center items-center ">
            <p className="text-black absolute border px-6 py-1 bg-white   top-[75%]">
              Women
            </p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default ShopList;


 export const ProductsPagesList = () => {

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    
  };
  return (
    <>
      <main className="flex w-full justify-evenly">
        <div className="w-[15vw] flex flex-col gap-3 ">
          <h3 className="font-bold">PRODUCT LAYOUTS</h3>
          <ul className="flex flex-col gap-3">
            <li>Product default</li>
            <li>Product grid 1</li>
            <li>Product grid 2</li>
            <li>Product stacked</li>
            <li>Product right thumbnails</li>
            <li>Product bottom thumbnails</li>
            <li>Product drawer sidebar</li>
            <li>Product description accordion</li>
            <li>Product description list</li>
            <li>Product description vertical</li>
          </ul>
        </div>

        <div className="w-[15vw] flex flex-col gap-3 ">
          <h3 className="font-bold">PRODUCT DETAILS</h3>
          <ul className="flex flex-col gap-3">
            <li>Product inner zoom</li>
            <li>Product zoom magnifier</li>
            <li>Product no zoom</li>
            <li>Product photoswipe popup</li>
            <li>Product external zoom and photoswipe popup</li>
            <li>Product video</li>
            <li>Product 3D, AR models</li>
            <li>Product options & customizer</li>
            <li>Advanced product types</li>
            <li>Recipient information form for gift card products</li>
          </ul>
        </div>

        <div className="w-[15vw] flex flex-col gap-3 ">
          <h3 className="font-bold">PRODUCT SWATCHS</h3>
          <ul className="flex flex-col gap-3">
            <li>Product color swatch</li>
            <li>Product rectangle</li>
            <li>Product rectangle color</li>
            <li>Product swatch image</li>
            <li>Product swatch image rounded</li>
            <li>Product swatch dropdown</li>
            <li>Product swatch dropdown color</li>
          </ul>
        </div>

        <div className="w-[13vw] flex flex-col gap-3 ">
          <h3 className="font-bold">PRODUCT FEATURES</h3>
          <ul className="flex flex-col gap-3">
            <li>Frequently bought together</li>
            <li>Frequently bought together 2</li>
            <li>Product upsell features</li>
            <li>Product pre-orders</li>
            <li>Back in stock notification</li>
            <li>Product pickup</li>
            <li>Variant images grouped</li>
            <li>Complimentary products</li>
            <li>Quick order list</li>
          </ul>
        </div>
        <section className="w-[30vw] h-[50vh]  ">
          <div className="slider-container gap-20 ">
            <Slider {...settings}>
              <div className="mr-10 overflow-hidden  ">
                <img src={img3} alt="" className="w-[14vw]" />
                <div>
                  <p className="font-[700]">Ribbed Tank Top</p>
                  <p className="font-[500] text-[16px]">&#36;16.95 </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 border-black border flex items-center justify-center  rounded-[50%] ">
                      <p className="h-6 w-6 bg-black rounded-[50%]  duration-300 hover:w-3 hover:h-3  "></p>
                    </div>

                    <div className="h-8 w-8 border-black border flex items-center justify-center  rounded-[50%] ">
                      <p className="h-6 w-6 bg-[orange] rounded-[50%]  duration-300 hover:w-3 hover:h-3  "></p>
                    </div>

                   

                    <div className="h-8 w-8 border-black border flex items-center justify-center  rounded-[50%] ">
                      <p className="h-6 w-6 bg-[pink] rounded-[50%]  duration-300 hover:w-3 hover:h-3  "></p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" overflow-hidden">
                  <img src={img4} alt="" className="w-[14vw]" />
                  <div>
                  <p className="font-[700] w-10/12">Oversoze printed T-Shirt</p>
                  <p className="font-[500] text-[16px]">&#36; 10.00 </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </main>
    </>
  );
}



