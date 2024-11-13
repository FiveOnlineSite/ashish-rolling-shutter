import React from "react";
import Slider from "react-slick";

const SlickSlider = ({ items, settings, hasText }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Slider item ${index}`} />
          {hasText && item.text && (
            <div className="home-banner-text">
              <h1>{item.text}</h1>
              <button className="know-more-btn">
                Know more <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
