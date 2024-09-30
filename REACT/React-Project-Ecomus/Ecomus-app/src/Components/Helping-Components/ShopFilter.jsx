import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/react";

const ShopFilter = () => {
  const featuredOptions = [
    { key: "best-selling", label: "Best Selling" },
    { key: "alphabetical-a-z", label: "Alphabetically, A-Z" },
    { key: "alphabetical-z-a", label: "Alphabetically, Z-A" },
    { key: "price-low-high", label: "Price, Low to High" },
    { key: "price-high-low", label: "Price, High to Low" },
    { key: "date-old-new", label: "Date, Old to New" },
    { key: "date-new-old", label: "Date, New to Old" },
  ];

  return (
    <div className="flex justify-between px-4 md:px-14 py-5">
      {/* Filter Button */}
      <div className="flex gap-4 px-2 sm:px-4 border items-center bg-[#cecece]">
        <IoFilterSharp className="font-medium sm:text-[29px]" />
        <p className="font-medium text-[13px]">FILTER</p>
      </div>

      {/* Sorting Dropdown */}
      <div className="bg-white border w-fit">
        <Select
          isRequired
          radius="none"
          color="white"
          placeholder="Featured"
          className="text-black  bg-white sm:w-[200px] lg:w-fix  "
        >
          {featuredOptions.map((featured) => (
            <SelectItem key={featured.key} className=" py-1 ">
              {featured.label}
            </SelectItem>
          ))}
        </Select>
        {/* <IoIosArrowDown className="text-[17px]  relative right-2 bottom-1" /> */}
      </div>
    </div>
  );
};

export default ShopFilter;
