import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/Slideshow_Electronics1.jpg";
import Slider2 from "../../assets/Slideshow_Electronics2.jpg";
import Slider3 from "../../assets/Slideshow_Electronics3.jpg";
import styles from "../../css/Seconder.module.css";
import { FaAngleRight } from "react-icons/fa6";
const MainSlider = ({ OfferName, title, button, bgimg }) => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="slider-container">
          <div>
            <div
              className={styles.Main}
              style={{ backgroundImage: `url(${bgimg})` }}
            >
              <div className={styles.Collection}>
                <p className={styles.offer}>{OfferName}</p>
                <p className={styles.heding}>{title}</p>
                <a
                  href=""
                  className="relative cursor-pointer w-[265px] max-[425px]:w-[150px]  max-[425px]:p-0   max-[425px]:py-3 max-[425px]:pl-4   flex item-center justify-evenly  text-center     min-[320px]:text-[12px]  opacity-90 px-10 py-4 hover:opacity-100 rounded-[50px] font-[600] sm:text-xl transition-opacity p-[2px] bg-black overflow-hidden bg-gradient-to-t from-[black] to-[#00000065] active:scale-95"
                >
                  <span className="w-full h-full flex items-center gap-2 text-center   bg-[black] text-white rounded-[50px] bg-gradient-to-t from-[black] to-[#00000065]">
                    {button}
                    <FaAngleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
