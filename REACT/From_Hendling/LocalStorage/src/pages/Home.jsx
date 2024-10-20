import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg mb-8">
            Explore amazing features and get started today!
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      <div class="container mx-auto mt-8">
        <div class="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <!-- Watch Image --> */}
          <div class="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Watch Image"
              class="w-full h-full object-cover"
            />
          </div>

          {/* <!-- Watch Details --> */}
          <div class="lg:w-1/2 p-6">
            <h1 class="text-3xl font-semibold text-gray-800">
              Luxury Leather Watch
            </h1>
            <p class="mt-4 text-gray-600">
              This luxury watch is crafted with precision and features a leather
              strap. Perfect for both casual and formal occasions.
            </p>
            <div class="mt-6">
              <span class="text-gray-800 text-2xl font-bold">$299.99</span>
            </div>

            {/* <!-- Add to Cart Button --> */}
            <div class="mt-8">
              <button class="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded hover:bg-indigo-500">
                Add to Cart
              </button>
            </div>

            {/* <!-- Watch Specifications --> */}
            <div class="mt-8">
              <h2 class="text-lg font-semibold text-gray-800">
                Specifications
              </h2>
              <ul class="mt-2 list-disc list-inside text-gray-600">
                <li>Material: Leather, Stainless Steel</li>
                <li>Water Resistance: 50 meters</li>
                <li>Movement: Quartz</li>
                <li>Battery Life: 2 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto pt-20 px-4">
        {/* Watch Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Watch"
            className="w-full h-auto"
          />
        </div>

        {/* Watch Details */}
        <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Luxury Leather Watch
          </h1>
          <p className="mt-2 text-gray-600">
            This luxury leather watch is stylish, durable, and perfect for any
            occasion. It combines modern design with classic elegance.
          </p>
          <div className="mt-4">
            <span className="text-gray-800 text-xl font-bold">$299.99</span>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-indigo-600 text-white text-sm font-semibold rounded hover:bg-indigo-500">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Watch Specifications */}
        <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Specifications
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Material: Leather, Stainless Steel</li>
            <li>Water Resistance: 50 meters</li>
            <li>Movement: Quartz</li>
            <li>Battery Life: 2 years</li>
          </ul>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product </h3>
              <p className="text-gray-600 mb-2">$199.99</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product </h3>
              <p className="text-gray-600 mb-2">$299.99</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product </h3>
              <p className="text-gray-600 mb-2">$399.99</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-700">
                Description of Feature 1 goes here. It's awesome!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-700">
                Description of Feature 2 goes here. You'll love it!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-700">
                Description of Feature 3 goes here. Check it out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  ); 
}

export default Home
