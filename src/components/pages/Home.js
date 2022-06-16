import React from "react";
import Header from "../header/Header";
import Product from "../productCard/Product";
import Slider from "../carousel/AddCarousel";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
