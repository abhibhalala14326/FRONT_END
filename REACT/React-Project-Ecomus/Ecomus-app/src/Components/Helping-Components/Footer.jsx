import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Dropdown from "../Helping-Components/Dropdown";
import Eur from "../../assets/european-union.png";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import visa from "../../assets/visa.png";


import logo from "../../assets/logo-white.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const Help = [
    { name: "Privacy Policy", href: "#" },
    { name: "Returns + Exchanges", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "FAQ's", href: "faq" },
    { name: "Compare", href: "#" },
    { name: "My Wishlist", href: "#" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "#" },
    { name: "Visit Our Store", href: "#" },
    { name: "Contact Us", href: "contactus" },
    { name: "Account", href: "#" },
  ];

  const images = [visa, img1, img2, img3, img4];

  return (
    <footer className="bg-black text-white flex  h-auto   items-center flex-col p-8">
      <div className="container mx-auto flex flex-col md:flex-row h-full ">
        <div className=" flex flex-col lg:flex-row w-[50%] justify-around sm:gap-4 ">
          <div className="mb-6 md:mb-0 lg:w-[25%] w-full flex flex-col gap-3 text-[14px] text-[#a1a1a1]">
            <img src={logo} alt="logo" className="mb-4 lg:w-full sm:w-1/2" />
            <p className="sm:w-10/12 lg:w-full">
              Address: 1234 Fashion Street, Suite 567 New York, NY 10001
            </p>
            <p className="flex gap-1">
              Email: <a href=" ">info@fashionshop.com</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <span>(212) 555-1234</span>
            </p>
            <a href="#" className="text-primary hover:underline">
              Get direction
            </a>

            <div className="flex gap-3 sm:w-[500px]">
              <div className="w-[40px] h-[40px]  flex items-center justify-center rounded-[50%] p-1  border">
                <CiFacebook className="text-5xl" />
              </div>
              <div className="w-[46px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                <FaXTwitter className="text-2xl" />
              </div>
              <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                <FaTiktok className="text-2xl" />
              </div>
              <div className="w-[40px] h-[40px]  flex items-center justify-center  rounded-[50%] p-1 border">
                <FaPinterestSquare className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-3 text-[18px]">Help</h3>
            <ul className="list-none flex flex-col gap-1 text-[14px] duration-1000 text-[#a1a1a1]">
              {Help.map((link, id) => (
                <li key={id}>
                  <NavLink
                    to={link.href}
                    className="text-muted-foreground hover:text-[#93f859]"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row sm:gap-14 lg:gap-0 sm:w-[50%] justify-around ">
          <div className="mb-6 md:mb-0">
            <h3 className="text-[18px]">About us</h3>
            <ul className="list-none flex flex-col gap-3 text-[14px] mt-2 text-[#a1a1a1]">
              {aboutLinks.map((link, id) => (
                <li key={id}>
                  <NavLink
                    to={link.href}
                    className="text-muted-foreground hover:text-[#93f859]"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 md:mb-0 flex flex-col lg:w-[40%]  w-full gap-5">
            <h3 className="font-semibold">Sign Up for Email</h3>
            <p className="text-[14px] w-[60%]  text-[#a1a1a1]">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>
            <div className="flex relative">
              <input
                type="email"
                placeholder="Enter your email..."
                className="border border-muted rounded-l-lg p-2 bg-[#bda6a628]  w-[100%] h-12 "
              />
              <button className="bg-primary text-primary-foreground right-[3%] lg:right-[2%]   sm:right-[3%] max-[37px]:right-[2%]  py-2 px-5 rounded-lg absolute top-[10%] bg-black  hover:bg-primary/80">
                Subscribe
              </button>
            </div>
            {/* Dropdown */}
            <div className="flex justify-around">
              <Dropdown name="EUR" img={Eur} />
              <div className="text-white flex items-center gap-2 relative">
                <p>ENGLISH</p>
                <i className="ri-arrow-down-s-line text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="h-[1px] bg-white w-[80%] mt-10"></p>

      {/* devloper name */}

      <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-0 sm:justify-between w-full py-6">
        <p className="text-[14px] text-[#545454] ">
          © 2024 Ecomus Store. All Rights Reserved
        </p>
        <div className="flex gap-2">
          {images.map((imgSrc, id) => (
            <img key={id} src={imgSrc} alt={`image-${id}`} />
          ))}
        </div>
      </div>
    </footer>
  );
}
