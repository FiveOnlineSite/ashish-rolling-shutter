import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import SlickSlider from "./components/SlickSlider";
import { NavLink } from "react-router-dom";
import ProductData from "./components/ProductData";
import Counter from "./components/Counter";

const Home = () => {
  const BannerSlider = [
    {
      image: "/images/home-banners/banner-1.jpg",
      text: "Speed, safety, and seamless operations combined",
    },
    {
      image: "/images/home-banners/banner-2.jpg",
      text: "Speed, safety, and seamless operations combined",
    },
    {
      image: "/images/home-banners/banner-3.jpg",
      text: "Speed, safety, and seamless operations combined",
    },
    {
      image: "/images/home-banners/banner-4.jpg",
      text: "Speed, safety, and seamless operations combined",
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

  const ProductsFilterSettings = {
    dots: filteredProducts.length > 3,
    arrows: false,
    infinite: filteredProducts.length > 3,
    speed: 500,
    slidesToShow: filteredProducts.length < 4 ? filteredProducts.length : 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false, // Ensure center mode is disabled
    fade: filteredProducts.length === 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: filteredProducts.length > 1,
          slidesToShow: 1,
          centerMode: false,
          infinite: filteredProducts.length > 1,
          fade: filteredProducts.length === 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: filteredProducts.length > 1,
          slidesToShow: 1,
          centerMode: false,
          infinite: filteredProducts.length > 1,
          fade: filteredProducts.length === 1,
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
          filterdProducts={false}
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
                  <h2 className="title featured-title">
                    Ashish Rolling Shutter
                  </h2>
                  <p>
                    We take immense gratification in introducing ourselves as
                    the pioneer manufacturers & Solution provider for all types
                    of High End Automatic Entrance Doors & Loading Bay
                    Equipments.
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
            filterdProducts={false}
          />
        </NavLink>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-lg-6">
                <div className="featured-product-text">
                  <h2 className="title featured-title">
                    Featured
                    <br />
                    Products
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="filter-dropdown">
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
          </div>
        </div>

        <div className="row filter-products-slider">
          <SlickSlider
            items={filteredProducts.map((product) => ({
              productImg: product.productImg,
              productName: product.productName,
            }))}
            settings={ProductsFilterSettings}
            hasText={false}
            showProductName={false}
            filterdProducts={true}
          />
        </div>
      </section>
      <section className="counter-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4">
                  <h2 className="title featured-title">Every Count Matter</h2>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="counter-div">
                        <div className="counter-nos">
                          <Counter target={28} />
                          <span>+</span>
                        </div>
                        <div className="counter-text">
                          {/* <img src="/images/review.png" alt="review" /> */}
                          <h6>Years of Excellence</h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="counter-div">
                        <div className="counter-nos">
                          <Counter target={26} />
                          <span>+</span>
                        </div>
                        <div className="counter-text">
                          {/* <img src="/images/location (1).png" alt="review" /> */}
                          <h6>Cities with PAN india presence</h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-lg-4">
                      <div className="counter-div">
                        <div className="counter-nos">
                          <Counter target={70} />
                          <span>+</span>
                        </div>
                        <div className="counter-text">
                          {/* <img src="/images/planet-earth.png" alt="review" /> */}
                          <h6>Countries delivered</h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-lg-4">
                      <div className="counter-div">
                        <div className="counter-nos">
                          <Counter target={70} />
                          <span>%</span>
                        </div>
                        <div className="counter-text">
                          {/* <img src="/images/graph.png" alt="review" /> */}
                          <h6>Market share</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="counter-div">
                <div className="counter-text">
                  <img src="/images/support.png" alt="review" />
                  <h6>Support</h6>
                </div>
                <div className="counter-nos">24/7</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="accreditations-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-3">
                <h2 className="title featured-title ">
                  Our Recognized Accreditations
                </h2>
              </div>
              <div className="col-lg-9">
                <div className="row justify-content-end">
                  <div className="col-lg-3">
                    <div className="accreditation-img">
                      <img src="/images/tuv.png" alt="tuv" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="accreditation-img">
                      <img src="/images/IGBC.png" alt="IGBC" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="accreditation-img">
                      <img src="/images/seh-logo.png" alt="seh" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
