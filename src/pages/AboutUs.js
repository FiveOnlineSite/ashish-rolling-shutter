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
      <section className="about-banner">
        <Banner
          bannerImg={bannerData.bannerImg}
          title={bannerData.title}
          breadcrumbs={bannerData.breadcrumbs}
        />
      </section>

      <section className="about-content1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <h5
                  className="img-text1 wow"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Since 1996
                </h5>
                <img
                  className="img1 wow"
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                  src="/images/about1.jpg"
                  alt=""
                />
                <img
                  className="img2 wow"
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                  src="/images/about2.jpg"
                  alt=""
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo1 wow"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div
                className="about-content wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <p>
                  <span>Ashish Rolling Shutter</span> has held a lead position
                  in manufacturing as well as exporting, distributing and
                  installing Entrance Automation Systems and Loading Bay
                  Equipment that are problem free and easy to operate.
                </p>

                <p>
                  <span>Ashish Rolling Shutter</span> specializes in designing,
                  manufacturing and installing customised products conforming to
                  the highest safety standards complemented with reliability and
                  energy efficiency.
                </p>

                <p>
                  All our products are designed and manufactured with European
                  collaboration using innovative and creative engineering
                  technology. The product development team uses the latest
                  software combined with technologically advanced machinery to
                  offer our customers an excellent engineered product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <CounterSection />
      </section>

      <section className="about-content2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-img">
                <h5
                  className="img-text2 wow"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  Over 1000 employees
                </h5>

                <img
                  className="img1 wow"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                  src="/images/about2.jpg"
                  alt=""
                />
                <img
                  className="img2 wow"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                  src="/images/about1.jpg"
                  alt=""
                />
                <img
                  src="/images/round-logo.png"
                  alt="logo-round"
                  className="round-logo1 wow"
                  data-aos="zoom-in" // Fade in as you scroll
                  data-aos-duration="1500"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5 order-lg-1 order-2">
              <div
                className="about-content wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <p>
                  <span>Ashish Rolling Shutter</span> We lay great emphasis on
                  exceptional customer service and provide regular programmed
                  inspections and maintenance safeguards which increases product
                  lifetime and reduces operational cost. We have a huge team of
                  committed and diligent engineers & technicians; many of them
                  are trained at advanced training centres in Asia, Europe,
                  Africa, North America, & South America.
                </p>

                <p>
                  Headquartered in Mumbai, the commercial capital of India, the
                  company has expanded its operations, geographical reach,
                  manufacturing capacity and customer base globally. We are a
                  global ‘Make in India’ brand and proudly recognized as the
                  STAR EXPORT HOUSE by the Government of India. Today our
                  products are marketed by us and our distributors in more than
                  69 countries across the globe.
                </p>

                <p>
                  We have established a significant presence in India with over
                  1000 employees and operations spanning across 26 major cities.
                  Having a strong and efficient customer care team available 24
                  hours a day and 7 days a week reflects commitment to excellent
                  service and customer satisfaction.
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
