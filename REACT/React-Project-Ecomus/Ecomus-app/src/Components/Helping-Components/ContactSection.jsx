import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";

const ContactSection = () => {
  // Array for contact details
  const contactDetails = [
    {
      label: "Address",
      value: "66 Mott St, New York, New York, Zip Code: 10006, AS",
    },
    { label: "Phone", value: "(623) 934-2400" },
    { label: "Email", value: "EComposer@example.com" },
    {
      label: "Open Time",
      value:
        "Our store has re-opened for shopping, exchange every day 11am to 7pm",
    },
  ];

  // Array for social media icons
  const socialIcons = [
    <FaFacebook key="facebook" />,
    <FaInstagram key="instagram" />,
    <FaTwitter key="twitter" />,
    <FaTiktok key="tiktok" />,
    <FaPinterest key="pinterest" />,
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-8 lg:px-20 py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-medium">Visit Our Store</h2>
        {/* Map through contact details */}
        {contactDetails.map((detail, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold">{detail.label}</h3>
            <p>{detail.value}</p>
          </div>
        ))}
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 text-2xl text-gray-600">
          {socialIcons.map((icon) => icon)}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
        <p className="mb-6">
          If you’ve got great products you’re making or looking to work with us
          then drop us a line.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <input
              type="text"
              placeholder="Name *"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 lg:mb-0 flex-grow"
            />
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32"
          />
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
