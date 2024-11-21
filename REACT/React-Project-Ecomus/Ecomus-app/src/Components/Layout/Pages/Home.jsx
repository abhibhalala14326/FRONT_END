import SliderOffer from "../../Helping-Components/Slider.jsx";
import Marquee from "../../Helping-Components/Marquee.jsx";
import CategorySlider from "../../Helping-Components/CategorySlider.jsx";
import Discounts from "../../Helping-Components/Discounts.jsx";
import DiscountsOffer from "../../Helping-Components/DiscountsOffer.jsx";
import ItemSlider from "../../Helping-Components/ItemSlider.jsx";
import HappyClientsSlider from "../../Helping-Components/HappyClientsSlider.jsx";
import BlogPostSlider from "../../Helping-Components/BlogPostSlider.jsx";
import Footer from "../../Helping-Components/Footer.jsx";
import Shipping from "../../Helping-Components/Shipping.jsx";
import Navbartop from "../../Helping-Components/NavbarTop.jsx";
import Navbar from "../../Helping-Components/Navbar.jsx";
import TrendingSection from "../../Helping-Components/TrendingSection.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticate");

    if (isAuthenticated !== "true") {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <>
      <div className="overflow-hidden flex flex-col gap-1">
        <Navbartop />
        <Navbar />
        <SliderOffer />
        <Marquee />
        <CategorySlider />
        <Discounts />
        <DiscountsOffer />
        <TrendingSection />
        <ItemSlider />
        <HappyClientsSlider />
        <BlogPostSlider />
        <Shipping />
        <Footer />
      </div>
    </>
  );
}

export default Home;
