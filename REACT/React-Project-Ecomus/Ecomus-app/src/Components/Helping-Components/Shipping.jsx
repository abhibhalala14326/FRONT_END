
import React from "react";
import { FiBox } from "react-icons/fi";
import { MdOutlinePayment, MdOutlineSupportAgent } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";


const shippingDetails = [
  {
    title: "Free Shipping",
    description: "Free shipping over order $120",
    icon: FiBox,
  },
  {
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
    icon: MdOutlinePayment,
  },
  {
    title: "14 Day Returns",
    description: "Within 30 days for an exchange",
    icon: IoMdReturnLeft,
  },
  {
    title: "Premium Support",
    description: "Outstanding premium support",
    icon: MdOutlineSupportAgent,
  },
];

const ShippingSection = () => {
  return (
    <section className="flex h-auto py-11 justify-center flex-wrap items-center gap-4 bg-[#f5f5f5] mb-10">
      {shippingDetails.map((detail, index) => (
        <div key={index} className="flex gap-4 w-[300px] ">
          <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
            {detail.icon && <detail.icon className="text-5xl" />}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[18px]">{detail.title}</p>
            <p className="text-[14px]">{detail.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShippingSection;
