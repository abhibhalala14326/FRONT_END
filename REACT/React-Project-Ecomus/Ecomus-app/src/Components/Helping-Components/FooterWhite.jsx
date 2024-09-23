import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import Eur from "../../assets/european-union.png";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import visa from "../../assets/visa.png";
import logo from "../../assets/logo.svg";

export default function FooterWhite() {
  const Help = [
    { name: "Privacy Policy", href: "#" },
    { name: "Returns + Exchanges", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "FAQ's", href: "#" },
    { name: "Compare", href: "#" },
    { name: "My Wishlist", href: "#" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "#" },
    { name: "Visit Our Store", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Account", href: "#" },
  ];

  const socialMedia = [
    { icon: <CiFacebook className="text-5xl" />, href: "#" },
    { icon: <FaXTwitter className="text-2xl" />, href: "#" },
    { icon: <FaInstagram className="text-2xl" />, href: "#" },
    { icon: <FaTiktok className="text-2xl" />, href: "#" },
    { icon: <FaPinterestSquare className="text-2xl" />, href: "#" },
  ];

  const images = [visa, img1, img2, img3, img4];

  return (
    <footer className="bg-white text-black flex h-auto items-center flex-col p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="logo" className="mb-4 w-[150px]" />
          <p>Address: 1234 Fashion Street, Suite 567 New York, NY 10001</p>
          <p className="flex gap-1">
            Email:{" "}
            <a href="mailto:info@fashionshop.com">info@fashionshop.com</a>
          </p>
          <p>
            Phone: <span>(212) 555-1234</span>
          </p>
          <a href="#" className="text-primary hover:underline">
            Get direction
          </a>
          <div className="flex gap-3">
            {socialMedia.map((media, id) => (
              <div
                key={id}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] p-1 border"
              >
                {media.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="mb-3 text-[18px]">Help</h3>
          <ul className="list-none flex flex-col gap-1 text-[14px] text-[#a1a1a1]">
            {Help.map((link, id) => (
              <li key={id}>
                <a href={link.href} className="hover:text-[#db1215]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-[18px]">About Us</h3>
          <ul className="list-none flex flex-col gap-3 text-[14px] mt-2 text-[#a1a1a1]">
            {aboutLinks.map((link, id) => (
              <li key={id}>
                <a href={link.href} className="hover:text-[#db1215]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Dropdown Section */}
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold">Sign Up for Email</h3>
          <p className="text-[14px] text-[#a1a1a1]">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events, and more!
          </p>
          <div className="relative flex">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border border-muted rounded-l-lg p-2 bg-[#bda6a628] w-full h-12"
            />
            <button className="bg-primary right-[3%] py-2 px-5 rounded-lg absolute top-[10%] bg-white hover:bg-primary/80">
              Subscribe
            </button>
          </div>
          <div className="flex justify-around text-black mt-4">
            {/* <Dropdown name="EUR" img={Eur} /> */}
            <div className="text-black flex items-center gap-2 relative">
              <p>ENGLISH</p>
              <i className="ri-arrow-down-s-line text-black"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <p className="h-[1px] bg-black w-[80%] mt-10"></p>

      {/* Footer Bottom */}
      <div className="flex sm:flex-row flex-col items-center justify-between w-full py-6 gap-3 sm:gap-0">
        <p className="text-[14px] text-[#545454]">
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
