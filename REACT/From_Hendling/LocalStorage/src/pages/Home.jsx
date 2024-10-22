import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

 useEffect(()=>
{
  const isAuthenticated = localStorage.getItem('authenticate')

  if(isAuthenticated === false)
  {
    navigate('/login')
  }

} , [navigate])

  const products = [
    {
      id: 1,
      name: "Luxury Leather Watch",
      price: "$199.99",
      image:
        "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Stylish Headphones",
      price: "$299.99",
      image:
        "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Smartphone",
      price: "$399.99",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const features = [
    {
      id: 1,
      title: "High Performance",
      description:
        "Experience blazing fast performance with cutting-edge technology.",
    },
    {
      id: 2,
      title: "Durability",
      description:
        "Built to withstand the toughest conditions, indoors or outdoors.",
    },
    {
      id: 3,
      title: "Long Battery Life",
      description: "Stay powered up all day with a long-lasting battery.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg mb-8">
            Explore amazing features and get started today!
          </p>
          <NavLink
            to="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Get Started
          </NavLink>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold">My Website</h2>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <ul className="flex space-x-4">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="text-gray-400 hover:text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="text-gray-400 hover:text-white"
                >
                  Signup
                </NavLink>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                target="_blank"
                href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%7C&placement=&creative=589460569849&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9062189%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUJVO7_kT8zicAW3i8BQT4sKbEXKQAXHi_HC2XvUnDChZ24zcShH40BoCYH8QAvD_BwE"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
