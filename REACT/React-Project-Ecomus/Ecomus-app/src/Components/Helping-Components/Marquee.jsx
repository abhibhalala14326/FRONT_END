import React from "react";
import { FaSortUp } from "react-icons/fa";
import styles from "../../css/Marquee.module.css";


const Marquee = () => {
  return (
    <>
      <div
        className={`${styles.Marquee} flex  bg-[#24c724d8]  mt-3  text-white items-center overflow-hidden text-nowrap  py-5 justify-evenly gap-10`}
      >
        <div className="flex items-center gap-11  justify-around ">
          <p> NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          <span>
            <FaSortUp />
          </span>

          <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          <FaSortUp />

          <p>FREE SHIPPING AND RETURN</p>
          <FaSortUp />
        </div>

        <div className="flex items-center gap-11  justify-around ">
          <p> NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          <span>
            <FaSortUp />
          </span>

          <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          <FaSortUp />

          <p>FREE SHIPPING AND RETURN</p>
          <FaSortUp />
        </div>

        <div className="flex items-center gap-11  justify-around ">
          <p> NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          <span>
            <FaSortUp />
          </span>

          <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          <FaSortUp />

          <p>FREE SHIPPING AND RETURN</p>
          <FaSortUp />
        </div>

        <div className="flex items-center gap-11  justify-around ">
          <p> NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          <span>
            <FaSortUp />
          </span>

          <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          <FaSortUp />

          <p>FREE SHIPPING AND RETURN</p>
          <FaSortUp />
        </div>
      </div>
    </>
  );
};

export default Marquee;
