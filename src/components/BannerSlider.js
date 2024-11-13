import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const bannerSlider = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...bannerSlider}>
        <div className="element">
          <img
            src="/images/home-banners/banner-1.jpg"
            className="w-100"
            alt="banner-1-img"
          />
        </div>
        <div className="element">
          <img
            src="/images/home-banners/banner-2.jpg"
            className="w-100"
            alt="banner-2-img"
          />
        </div>
        <div className="element">
          <img
            src="/images/home-banners/banner-3.jpg"
            className="w-100"
            alt="banner-3-img"
          />
        </div>
        <div className="element">
          <img
            src="/images/home-banners/banner-4.jpg"
            className="w-100"
            alt="banner-4-img"
          />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
