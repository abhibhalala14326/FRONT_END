import React from "react";
import SimpleSlider from "./TopSlider";
import Dropdown from "./Dropdown";
import Eur from "../../assets/european-union.png";

React

const Navbartop = () => {
  return (
    <>
      <header>
        <nav className="w-full bg-black text-white flex justify-around items-center py-2">
          <div className="lg:flex gap-5 sm:hidden">
            <p>(+333) 123-168</p>
            <p>sayhello@ecomus.com</p>
          </div>
          <SimpleSlider />
          <div className="lg:flex gap-10 sm:hidden">
            <Dropdown name="EUR" img={Eur} />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbartop;
