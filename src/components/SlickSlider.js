import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import AOS from "aos"; // Import AOS (Animate on Scroll) library
import "aos/dist/aos.css"; // Ensure you've imported the AOS CSS

// SlickSlider component
const SlickSlider = ({
  items,
  settings,
  hasText,
  showProductName,
  filterdProducts,
}) => {
  // Initialize AOS animation on component mount
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set the duration for animations
      once: false, // Ensure animations trigger each time the element enters the viewport
    });
  }, []);

  // Function to handle slide change and refresh AOS animations
  const handleAfterChange = () => {
    AOS.refresh(); // Refresh AOS after a slide change to trigger animations
  };

  return (
    <Slider {...settings} afterChange={handleAfterChange}>
      {items.map((item, index) => (
        <div className="element" key={index}>
          {item.video ? (
            <video
              className="slider-video wow fadeIn"
              autoPlay
              loop
              muted
              playsInline
              poster={item.image} // Use image as poster for video
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="slider-img wow fadeIn"
              src={item.image || item.productImg}
              alt={`Slider item ${index}`}
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            />
          )}

          {hasText && item.text && (
            <>
              <div className="banner-overlay"></div>
              <div className="home-banner-text">
                <h1
                  className="wow"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500" // Optional duration setting for AOS
                >
                  {item.text}
                </h1>
                <NavLink to={"/"}>
                  <button
                    className="know-more-btn wow fadeIn"
                    data-aos-duration="1500"
                  >
                    Explore <i className="fas fa-arrow-right"></i>
                  </button>
                </NavLink>
              </div>
            </>
          )}

          {showProductName && (
            <>
              <div className="overlay-bg"></div>
              <div
                className="product-name wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <NavLink to={item.url}>
                  <h4
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    {item.productName}{" "}
                  </h4>
                </NavLink>
                <NavLink
                  to={item.url}
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <img src="/images/right-arrow.png" alt="right-arrow" />
                </NavLink>
              </div>
            </>
          )}

          {filterdProducts && (
            <>
              <NavLink to={item.url}>
                <div
                  className="featured-product-name wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.7s"
                >
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
