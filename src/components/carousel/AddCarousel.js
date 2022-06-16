import React, { useState, useEffect } from "react";
import "./AddCarousel.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { data } from "./CarouselData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;
  //slideLength = 1 2 3
  //currentSlide = 0 1 2
  const autoScroll = true;
  let slideInterval;

  //functions to go to next,prev slides
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  //function to autoscroll
  const auto = () => {
    slideInterval = setInterval(nextSlide, 7000);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, );

  return (
    <div className="carousel">
      {data.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="all_content">
                <MdArrowBackIos className="arrow prev" onClick={prevSlide} />
                <MdArrowForwardIos className="arrow next" onClick={nextSlide} />
                <div className="slider_info">
                  <div className="slider_name">{slide.productName}</div>
                  <div className="slider_description">{slide.description}</div>
                  <div className="slider_price_info">
                    <div className="slider_price_info_text">only for</div>
                    <div className="slider_price_info_price">
                      {slide.price} s
                    </div>
                  </div>
                  <button className="slider_button">ADD TO CART</button>
                </div>
                <img src={slide.image} alt="toy" className="slider_image" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
