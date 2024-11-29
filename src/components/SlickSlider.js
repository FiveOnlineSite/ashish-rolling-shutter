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
              ref={(video) => {
                if (video) {
                  video.playbackRate = 5.0; // Set the playback rate to 2x speed
                }
              }}
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="slider-img wow fadeIn"
              src={item.image || item.productImg}
              alt={`Slider item ${index}`}
              // data-wow-duration="1s"
              // data-wow-delay="0.3s"
            />
          )}

          {hasText && item.text && (
            <>
              <div className="banner-overlay"></div>
              <div className="row banner-text-row">
                <div className="col-lg-12 banner-big-title">
                  {/* <h2
                    className="wow"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    ARS
                  </h2> */}
                  <img
                    className="wow"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    src="/images/Ashish Rolling Shutter Logo.png"
                    alt="logo"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-12">
                  <div className="home-banner-text">
                    <h1
                      className="wow"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      {item.text}
                    </h1>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-12">
                  {/* <button className="explore-button">new button</button> */}
                  <div className="home-banner-btn">
                    <NavLink to={"/"}>
                      {/* <button
                        className="know-more-btn wow fadeIn"
                        data-aos-duration="1500"
                      > */}

                      <button
                        className="explore-button wow"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        Explore
                      </button>
                    </NavLink>
                  </div>
                </div>
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
                    {item.productName}
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
