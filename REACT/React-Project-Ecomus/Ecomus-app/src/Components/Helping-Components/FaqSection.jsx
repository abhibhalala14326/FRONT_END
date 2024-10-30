import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { BiChat } from 'react-icons/bi';

const FaqSection = () => {
      const accordionData = [
    {
      key: "1",
      title: "Pellentesque habitant morbi tristique senectus et netus?",
      content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      key: "2",
      title: "How much is shipping and how long will it take?",
      content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      key: "3",
      title: "How long will it take to get my package?",
      content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      key: "4",
      title: "Branding is simply a more efficient way to sell things?",
      content: "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
return (
  <div className="flex flex-col md:flex-row justify-around w-full px-4">
    <div className="flex flex-col gap-4 w-full md:w-[55%]">
      <div className="">
        <p className="text-2xl mb-4">Shopping Information</p>
        <Accordion>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={`Accordion ${item.key}`}
              title={item.title}
            >
              <p className="text-sm">{item.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="">
        <p className="text-2xl mb-4">Payment Information</p>
        <Accordion>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={`Accordion ${item.key}`}
              title={item.title}
            >
              <p className="text-sm">{item.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="">
        <p className="text-2xl mb-4">Order Returns</p>
        <Accordion>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={`Accordion ${item.key}`}
              title={item.title}
            >
              <p className="text-sm">{item.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

    <div className="w-full md:w-[30%] mt-4 md:mt-0">
      <div className="bg-gray-100 flex flex-col  p-4 rounded-lg shadow-sm">
        <h3 className="text-2xl font-medium">Have a question</h3>
        <p className="text-gray-600 mt-2 ">
          If you have an issue or question that requires immediate assistance,
          you can click the button below to chat live with a Customer Service
          representative.
        </p>
        <p className="text-gray-600 mt-4 ">
          Please allow 06 – 12 business days from the time your package arrives
          back to us for a refund to be issued.
        </p>
        <div className="flex mt-4 space-x-2">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Contact us
          </button>
          <button className="text-black px-4 py-2 flex items-center">
            Live chat <BiChat className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default FaqSection
