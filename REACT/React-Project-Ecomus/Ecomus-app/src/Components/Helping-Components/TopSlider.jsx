import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../css/TopSilder.module.css";

import "remixicon/fonts/remixicon.css";

function SimpleSlider() {
  return (
    <div className="overflow-hidden w-[500px] text-center ">
      <Slider autoplay={true} infinite={true} autoplaySpeed={5000}>
        <div className={styles.topSlider}>
          <p> Welcome to store. Fantastic theme! Beautifully designed</p>
        </div>
        <div className={styles.topSlider}>
          <p>
            Season Sale : Time to refresh your wardrobe
            <a href="" className="text-[green] relative left-2 ">
              Shop Now
              <i className="ri-arrow-right-up-line ml-1 text-[16px] text-white"></i>
              <p className={styles.Slideroutline}></p>
            </a>
          </p>
        </div>
        <div className={styles.topSlider}>
          <div>
            Discount off 50%.
            <a href="" className="text-[green] relative left-4">
              Shop Now
              <i className="ri-arrow-right-up-line ml-1 text-[16px] text-white"></i>
              <p className={styles.Slideroutline}></p>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
