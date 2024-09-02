import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-5  mb-6 bg-[#2e242436]">
        <div className="text-4xl ">Logo</div>
        <div>
          <ul className="flex  gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">AboutUS</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar
