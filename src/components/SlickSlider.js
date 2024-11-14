import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const SlickSlider = ({
  items,
  settings,
  hasText,
  showProductName,
  filterdProducts,
}) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div className="element" key={index}>
          <img
            src={item.image || item.productImg}
            alt={`Slider item ${index}`}
          />
          {hasText && item.text && (
            <div className="home-banner-text">
              <h1>{item.text}</h1>
              <NavLink to={"/"}>
                <button className="know-more-btn">
                  Know more <i className="fas fa-arrow-right"></i>
                </button>
              </NavLink>
            </div>
          )}
          {showProductName && (
            <>
              <div className="overlay-bg">
                <img src="/images/top-right.png" alt="arrow-up" />
              </div>
              <div className="product-name">
                <h4>{item.productName}</h4>
                <NavLink to={"/about"}>
                  <button className="discover-more-btn">Discover more</button>
                </NavLink>
              </div>
            </>
          )}
          {filterdProducts && (
            <>
              <div className="featured-product-name">
                <h4>{item.productName}</h4>
              </div>
            </>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
