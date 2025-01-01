import React from 'react'
import {
  FaTshirt,
  FaRecycle,
  FaTint,
  FaBan,
  FaThermometerHalf,
} from "react-icons/fa";


const Description = () => {
  return (
    <>
      <div className=" mx-auto p-6 bg-white  rounded-md">
        <p className="text-gray-700 text-lg mb-6">
          Button-up shirt sleeves and a relaxed silhouette. It’s tailored with
          drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™
          Viscose — responsibly sourced wood-based fibers produced through a
          process that reduces impact on forests, biodiversity and water supply.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Features Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Front button placket</li>
              <li>Adjustable sleeve tabs</li>
              <li>Babaton embroidered crest at placket and hem</li>
            </ul>
          </div>

          {/* Materials Care Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Materials Care</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaTshirt className="text-gray-500" />
                <span className="text-gray-700">
                  Machine wash max. 30°C. Short spin.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaThermometerHalf className="text-gray-500" />
                <span className="text-gray-700">Iron maximum 110°C.</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaBan className="text-gray-500" />
                <span className="text-gray-700">Do not bleach/bleach.</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaRecycle className="text-gray-500" />
                <span className="text-gray-700">Do not dry clean.</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaTint className="text-gray-500" />
                <span className="text-gray-700">Tumble dry, medium heat.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description
