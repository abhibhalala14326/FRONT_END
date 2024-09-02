import React from 'react'
import SimpleSlider from './TopSlider';
import Dropdown from './Dropdown';
import Eur from "../assets/european-union.png";




const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="w-full bg-black text-white flex justify-around items-center">
          <div className="flex gap-5">
            <p>(+333) 123-168</p>
            <p>sayhello@ecomus.com</p>
          </div>
          <SimpleSlider />
          <div className='flex gap-10'>
            <Dropdown name="EUR" img={Eur} />
            <Dropdown name="English"   />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar
