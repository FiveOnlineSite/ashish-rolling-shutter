import React from "react";
import Layout from "./components/Layout";
import SlickSlider from "./components/SlickSlider";
import { NavLink } from "react-router-dom";

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

  const ProductsSlider = [
    {
      image: "/images/products/product1.jpg",
      productName: "Prime 2.0",
    },

    {
      image: "/images/products/product1.jpg",
      productName: "Prime 2.0",
    },

    {
      image: "/images/products/product1.jpg",
      productName: "Prime 2.0",
    },

    {
      image: "/images/products/product1.jpg",
      productName: "Prime 2.0",
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

  const ProductsSettings = {
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    centerPadding: "50px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "6px",
        },
      },
    ],
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

      <section className="about-section position-relative">
        <div className="container">
          <div className="col-lg-12">
            <div className="row about-row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="about-img-div">
                  <img
                    src="/images/about1.jpg"
                    className="about-img1"
                    alt="about-img1"
                  />

                  <img
                    src="/images/about1.jpg"
                    className="about-img2"
                    alt="about-img2"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="about-text">
                  <h5 className="about-subtitle">
                    <span></span> Since 1996
                  </h5>

                  <h2>Ashish Rolling Shutter</h2>
                  <p>
                    We take immense gratification in introducing ourselves as
                    the pioneer manufacturers & Solution provider for all types
                    of High End Automatic Entrance Doors & Loading Bay
                    Equipments Our rich heritage and ethics comes from our
                    parent company, A Mathurbhai & Co. started way back in 1982
                    with a small manufacturing, development center & a handful
                    of technicians & engineers. They gradually grew with strong
                    expertise, hard work & loyal clientele. The product range
                    was all types of conventional doors, rolling shutters &
                    gates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <NavLink to={"/"}>
          <SlickSlider
            items={ProductsSlider}
            settings={ProductsSettings}
            hasText={false}
            showProductName={true}
          />
        </NavLink>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8"></div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
