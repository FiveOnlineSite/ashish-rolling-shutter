import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SlickSlider from "../components/SlickSlider";
import { NavLink } from "react-router-dom";
import ProductData from "../components/ProductData";
import MapsTabs from "../components/MapsTabs";
import ClientsData from "../components/ClientsData";
import CounterSection from "../components/CounterSection";
import Accreditations from "../components/Accreditations";

const Home = () => {
  const BannerSlider = [
    {
      // image: "/images/home-banners/banner-1.jpg",
      video: "/videos/video-banner.mp4",
      text: "We are rolling shutter manufacturer",
    },
    {
      image: "/images/home-banners/banner2 (2).jpg",
      text: "Designed for Security, Built to Last",
    },
    {
      image: "/images/home-banners/banner3.png",
      text: "Engineered for Strength and Reliability",
    },
    {
      image: "/images/home-banners/banner4.png",
      text: "Speed, safety, and seamless operations combined",
    },
  ];

  const ProductsSlider = [
    {
      image: "/images/products/motorised-gates.jpg",
      productName: "Motorized Gates",
      url: "/products/motorized-gates", // Add URL here
    },
    {
      image: "/images/products/motorized-rolling-gates.jpg",
      productName: "Motorized Rolling Gates",
      url: "/products/motorized-rolling-gates",
    },
    {
      image: "/images/products/industrial-gates.jpg",
      productName: "Industrial Gates",
      url: "/products/industrial-gates",
    },
    {
      image: "/images/products/fire-rated-doors.jpg",
      productName: "Fire Rated Shutters & Doors",
      url: "/products/fire-rated-doors",
    },
    {
      image: "/images/products/hangar-doors.jpg",
      productName: "Hangar Doors",
      url: "/products/hangar-doors",
    },
    {
      image: "/images/products/fire-rated-doors.jpg",
      productName: "Fire Rated Shutters & Doors1",
      url: "/products/fire-rated-doors1",
    },
    {
      image: "/images/products/hangar-doors.jpg",
      productName: "Hangar Doors1",
      url: "/products/hangar-doors1",
    },
    {
      image: "/images/products/fire-rated-doors.jpg",
      productName: "Fire Rated Shutters & Doors2",
      url: "/products/fire-rated-doors2",
    },
    {
      image: "/images/products/hangar-doors.jpg",
      productName: "Hangar Doors2",
      url: "/products/hangar-doors2",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/left-chevron.png" alt="left-arrow" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/chevron.png" alt="right-arrow" />
      </button>
    );
  };

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All Products") {
      // When 'All Products' is selected, set all products
      const allProducts = ProductData.flatMap((category) => category.products);
      setFilteredProducts(allProducts);
    } else {
      // Filter by the selected category
      const category = ProductData.find(
        (cat) => cat.category === selectedCategory
      );
      setFilteredProducts(category ? category.products : []);
    }
  }, [selectedCategory]);

  const categories = [
    "All Products",
    ...ProductData.map((category) => category.category),
  ];

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
    // centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerPadding: "40px",
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ProductsFilterSettings = {
    dots: filteredProducts.length > 2,
    arrows: false,
    infinite: false, // Disable infinite scrolling to control layout precisely
    speed: 500,
    slidesToShow: filteredProducts.length < 3 ? filteredProducts.length : 2.5, // Show full slides when fewer than 3 items
    slidesToScroll: filteredProducts.length < 3 ? 1 : 2, // Scroll one slide at a time for fewer items
    autoplay: false,
    fade: filteredProducts.length === 1, // Enable fade if there's only one slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: filteredProducts.length > 1,
          slidesToShow:
            filteredProducts.length < 2 ? filteredProducts.length : 1.5, // Adjust for tablets
          slidesToScroll: 1,
          infinite: false,
          fade: filteredProducts.length === 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: filteredProducts.length > 1,
          slidesToShow:
            filteredProducts.length < 2 ? filteredProducts.length : 1.5,
          slidesToScroll: 1,
          infinite: false,
          fade: filteredProducts.length === 1,
        },
      },
    ],
  };

  const ClientsSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Layout>
      <section
        className="home-banner slider-section wow"
        // data-wow-duration="2s"
        id="home-page-banner"
      >
        <SlickSlider
          items={BannerSlider}
          settings={BannerSettings}
          hasText={true}
          filterdProducts={false}
        />
      </section>

      <section className="about-section position-relative">
        <div className="container">
          <div className="col-lg-12">
            <div className="row about-row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div
                  className="about-img-div wow"
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <img
                    src="/images/about1.jpg"
                    className="about-img1"
                    alt="about-img1"
                  />
                  <img
                    src="/images/about2.jpg"
                    className="about-img2"
                    alt="about-img2"
                  />
                  <img
                    src="/images/round-logo.png"
                    alt="logo-round"
                    className="round-logo"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="about-text">
                  {/* <h5
                    className="about-subtitle wow"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <span></span> Since 1985
                  </h5> */}

                  <h5
                    className="about-subtitle wow"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <span>
                      <img src="/images/small-logo.png" alt="logo" />
                    </span>
                    <span>About Us</span>{" "}
                    <span>
                      <img src="/images/small-logo.png" alt="logo" />
                    </span>
                  </h5>
                  <h2
                    className="title featured-title wow"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500" // Optional, adjust duration
                  >
                    Ashish Rolling Shutter
                  </h2>
                  <p
                    className="paragraph"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-delay="500" // Optional, delay for the paragraph
                  >
                    We take immense gratification in introducing ourselves as
                    pioneer manufacturers and solution providers for high-end
                    automatic entrance doors. We specialize in delivering
                    seamless operations with a wide range of products, including
                    loading bay equipment designed for safety, speed, and
                    efficiency.
                  </p>

                  <NavLink to={"/about"}>
                    {/* <button
                      className="know-more-btn wow"
                      data-aos="fade-up" // Fade in as you scroll
                      data-aos-duration="1500"
                    >
                      About Us <i className="fas fa-arrow-right"></i>
                    </button> */}

                    <button
                      className="explore-button about-btn wow"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Explore
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="products-section wow slideInRight"
        data-aos="fade-up" // Fade in as you scroll
        data-aos-duration="1500"
      >
        <div className="container">
          <h5
            className="about-subtitle wow"
            data-aos="fade-up" // Fade in as you scroll
            data-aos-duration="1500"
          >
            <h5
              className="about-subtitle wow"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <span>
                <img src="/images/small-logo.png" alt="logo" />
              </span>
              <span>Curated For You</span>{" "}
              <span>
                <img src="/images/small-logo.png" alt="logo" />
              </span>
            </h5>
          </h5>
          <h2
            className="title featured-title "
            data-aos="fade-up" // Fade in as you scroll
            data-aos-duration="1500"
          >
            Featured Products
          </h2>
        </div>
        <SlickSlider
          items={ProductsSlider}
          settings={ProductsSettings}
          hasText={false}
          showProductName={true}
          filterdProducts={false}
        />
      </section>

      <section className="featured-products-section slider-section">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-lg-4">
                <div className="featured-product-text">
                  <h5
                    className="about-subtitle wow"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <h5
                      className="about-subtitle wow"
                      data-aos="fade-up" // Fade in as you scroll
                      data-aos-duration="1500"
                    >
                      <span>
                        <img src="/images/small-logo.png" alt="logo" />
                      </span>
                      <span>Exclusive Selection</span>{" "}
                      <span>
                        <img src="/images/small-logo.png" alt="logo" />
                      </span>
                    </h5>
                  </h5>
                  <h2
                    className="title featured-title wow slideInLeft"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    Featured Collections
                  </h2>

                  <div
                    className="filter-dropdown wow slideInRight"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <select
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      value={selectedCategory}
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="row filter-products-slider slider-section wow"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <SlickSlider
                    items={filteredProducts.map((product) => ({
                      productImg: product.productImg,
                      productName: product.productName,
                      url: product.url,
                    }))}
                    settings={ProductsFilterSettings}
                    hasText={false}
                    showProductName={false}
                    filterdProducts={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection bgImage="/images/counter-bg.png" />

      <section className="accreditations-section">
        <Accreditations />
      </section>

      <section className="maps-tab-section">
        <MapsTabs />
      </section>

      <section
        className="clients-section slider-section"
        data-aos="fade-up" // Fade in as you scroll
        data-aos-duration="1500"
      >
        <div className="container">
          <h5
            className="about-subtitle wow"
            data-aos="fade-up" // Fade in as you scroll
            data-aos-duration="1500"
          >
            <h5
              className="about-subtitle wow"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <span>
                <img src="/images/small-logo.png" alt="logo" />
              </span>
              <span>Partners In Success</span>{" "}
              <span>
                <img src="/images/small-logo.png" alt="logo" />
              </span>
            </h5>{" "}
          </h5>
          <h2
            className="title featured-title"
            data-aos="fade-right" // Fade in as you scroll
            data-aos-duration="1500"
          >
            Our Clients
          </h2>
        </div>
        <div className="row">
          <SlickSlider
            items={ClientsData.map((client) => ({
              image: client.image_url,
            }))}
            settings={ClientsSettings}
            hasText={false}
            showProductName={false}
            filterdProducts={false}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
