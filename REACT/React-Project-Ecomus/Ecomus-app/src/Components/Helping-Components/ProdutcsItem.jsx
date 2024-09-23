import React from "react";
import img1 from "../../assets/hmgoepprod31.jpg";

const ProdutcsItem = () => {
  return (
    <div>
      <div>
        <div></div>
        <div className="h-[100vh] overflow-hidden">
          <img src={img1} alt="" className="h-full object-cover" />
        </div>

        <div>
          <h1 className="text-[28px]">Cotton jersey top</h1>
          <div className="flex">
            <p className="px-3 text-center border border-black w-[110px] text-sm">Best seller</p>
            <i></i>
            <p className="text-[14px] font-semibold">Selling fast! 56 people have this in their carts.</p>
          </div>

          <div>
            <p>$8.00</p>
            <del>$10.00</del>
          </div>

          <div>
            <p>20</p>
            <p>People are viewing this right now</p>
          </div>
          {/* timing */}
          <div>
            <section>
              <i></i>
              <p>HURRY UP! SALE ENDS IN:</p>
            </section>
            <div>
              <p>11day</p>
              <p>:</p>
              <p>14Hours </p>
              <p>:</p>
              <p>47Mins </p>
              <p>34Secs</p>
            </div>
          </div>

          <p>
            color: <span>White</span>
          </p>
          <p>
            Size: <span>s</span>
          </p>

          <section>
            <p>s</p>
          </section>

          <section>
            <p>Quantity</p>
            <div>
              <i></i>
              <p></p>
              <i></i>
            </div>
          </section>

          <section>
            <button>Add to cart - $8.00</button>
            <i></i>
            <i></i>
          </section>

          <button>
            Buy with <img src="" alt="" />
          </button>
          <div>
            <p>Buy with More payment options</p>
          </div>

          <div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>

          <section>
            <i></i>
            <p>
              Estimate delivery times: 12-26 days (International), 3-6 days
              (United States).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProdutcsItem;
