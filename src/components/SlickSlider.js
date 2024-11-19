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
          {item.video ? (
            <video
              className="slider-video"
              autoPlay
              loop
              muted
              playsInline
              poster={item.image} // Use image as poster for video
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.image || item.productImg}
              alt={`Slider item ${index}`}
            />
          )}

          {hasText && item.text && (
            <>
              <div className="banner-overlay"></div>
              <div className="home-banner-text">
                <h1>{item.text}</h1>
                <NavLink to={"/"}>
                  <button className="know-more-btn">
                    Explore <i className="fas fa-arrow-right"></i>
                  </button>
                </NavLink>
              </div>
            </>
          )}
          {showProductName && (
            <>
              <div className="overlay-bg"></div>
              <div className="product-name">
                <NavLink to={item.url}>
                  <h4>{item.productName}</h4>
                </NavLink>

                {/* <NavLink to={"/about"}>
                  <button className="discover-more-btn">Discover more</button>
                </NavLink> */}
                <NavLink to={item.url}>
                  <img src="/images/right-arrow.png" alt="right-arrow" />
                </NavLink>
              </div>
            </>
          )}
          {filterdProducts && (
            <>
              <NavLink to={item.url}>
                <div className="featured-product-name">
                  <h4>{item.productName}</h4>
                </div>
              </NavLink>
            </>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
