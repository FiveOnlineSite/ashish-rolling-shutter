import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import ProductData from "../components/ProductData";

const Brochures = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const allProducts = ProductData.flatMap((data) => data.products);

  const filteredProducts =
    activeTab === "All"
      ? allProducts
      : ProductData.find((data) => data.category === activeTab)?.products || [];

  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: "Brochures",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Brochures", path: null, active: true },
    ],
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="brochures-tab-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5
                className="about-subtitle wow"
                data-aos="fade-up" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <span>
                  <img src="/images/small-logo.png" alt="logo" />
                </span>
                <span>Find Brochures</span>
                <span>
                  <img src="/images/small-logo.png" alt="logo" />
                </span>
              </h5>
              <h2
                className="title featured-title wow"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Brochure Center
              </h2>
            </div>
            <div className="col-lg-9">
              {isMobile ? (
                // Dropdown for mobile
                <div
                  className="filter-dropdown"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                  >
                    <option value="All">All</option>
                    {ProductData.map((data) => (
                      <option key={data.category} value={data.category}>
                        {data.category}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                // Tabs for larger screens
                <ul
                  className="nav nav-tabs "
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <li className="nav-item mb-4">
                    <button
                      className={`nav-link ${
                        activeTab === "All" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("All")}
                    >
                      All
                    </button>
                  </li>
                  {ProductData.map((data) => (
                    <li className="nav-item mb-4" key={data.category}>
                      <button
                        className={`nav-link ${
                          activeTab === data.category ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(data.category)}
                      >
                        {data.category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-5">
            {filteredProducts.map((products) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 brochure-col"
                key={products.id}
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <NavLink to={products.url}>
                  <div className="brochure-div">
                    <img
                      src={products.brochureImg}
                      alt={products.productName}
                      className="w-100"
                    />
                    <div className="download">
                      <h6>Download Brochure</h6>
                    </div>
                    <h4>{products.productName}</h4>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brochures;
