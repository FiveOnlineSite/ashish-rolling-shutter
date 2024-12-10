import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import CounterSection from "../components/CounterSection";
import Accreditations from "../components/Accreditations";

const AboutUs = () => {
  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: "About us",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "About us", path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="about-content1">
        <div className="container">
          <div className="row align-items-center">
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
                  src="/images/Group 7.png"
                  alt="logo-round"
                  className="round-logo"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div
                className="about-content wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Welcome To Ashish Rolling Shutter
                </h2>
                <p className="paragraph">
                  At <span>Ashish Rolling Shutter</span>, we’ve been crafting
                  and exporting high-quality rolling shutters since 1985. Our
                  journey began with a simple mission: to deliver robust,
                  reliable, and aesthetically pleasing shutters that meet the
                  diverse needs of our customers. Over the decades, we’ve grown
                  into a trusted name in the industry, known for our unwavering
                  commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
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

            <div className="col-lg-6 mt-5 order-lg-1 order-2">
              <div
                className="about-content wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Our Expertise
                </h2>
                <p className="paragraph">
                  We specialize in manufacturing a wide range of rolling
                  shutters designed to offer superior security and
                  functionality. Whether you need shutters for industrial,
                  commercial, or residential purposes, we have solutions that
                  are tailored to your specific requirements. Our products are
                  engineered using advanced technologies and premium materials
                  to ensure durability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection bgImage="/images/about-counter.png" />

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
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

            <div className="col-lg-6 mt-5 ">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Global Reach
                </h2>
                <p className="paragraph">
                  With a presence in both domestic and international markets,
                  <span> Ashish Rolling Shutter</span> is proud to serve clients
                  across the globe. Our export operations are driven by a
                  dedicated team that ensures timely delivery and exceptional
                  service, no matter where you are located.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
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

            <div className="col-lg-6 mt-5 order-lg-1 order-2">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Why Choose Us?
                </h2>
                <p className="paragraph">
                  <span>Experience and Expertise:</span> Over 35 years of
                  industry experience.
                </p>

                <p className="paragraph">
                  <span>Quality Assurance:</span> Rigorous quality control
                  processes to guarantee top-notch products.
                </p>

                <p className="paragraph">
                  <span>Customization:</span> Shutters that are customized to
                  meet your unique needs.
                </p>

                <p className="paragraph">
                  <span>Customer-Centric Approach:</span> Dedicated to providing
                  outstanding service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-div wow"
                data-aos="fade-left" // Fade in as you scroll
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

            <div className="col-lg-6 mt-5 ">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h2
                  className="title featured-title wow slideInLeft"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Our Commitment
                </h2>
                <p className="paragraph">
                  At <span> Ashish Rolling Shutter</span>, we believe in
                  building lasting relationships with our clients. Your
                  satisfaction is our top priority, and we strive to exceed your
                  expectations with every product we deliver. Trust us to
                  safeguard your spaces with our reliable and stylish rolling
                  shutters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accreditations-section">
        <Accreditations />
      </section>
    </Layout>
  );
};

export default AboutUs;
