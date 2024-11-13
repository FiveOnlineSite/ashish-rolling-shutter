import React from "react";
import Layout from "./components/Layout";
import SlickSlider from "./components/SlickSlider";

const Home = () => {
  const BannerSlider = [
    {
      image: "/images/home-banners/banner-1.jpg",
      text: "Speed, safety, and seemless operations combined",
    },

    {
      image: "/images/home-banners/banner-2.jpg",
      text: "Speed, safety, and seemless operations combined",
    },

    {
      image: "/images/home-banners/banner-3.jpg",
      text: "Speed, safety, and seemless operations combined",
    },

    {
      image: "/images/home-banners/banner-4.jpg",
      text: "Speed, safety, and seemless operations combined",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <i className="fas fa-arrow-left"></i>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <i className="fas fa-arrow-right"></i>
      </button>
    );
  };

  const BannerSettings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Layout>
      <section className="home-banner">
        <SlickSlider
          items={BannerSlider}
          settings={BannerSettings}
          hasText={true}
        />
      </section>

      <section className="about-section"></section>
    </Layout>
  );
};

export default Home;
