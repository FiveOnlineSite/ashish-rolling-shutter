import React, { useState } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import MapsTabs from "../components/MapsTabs";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      return; // Prevent form submission if validation fails
    }

    const mailMessage = `Hello,
My name is ${formData.name}, and I can be reached at ${formData.email} and ${formData.phone}. I am located in ${formData.state} and work at ${formData.company}. I would like to enquire about: ${formData.message}.`;

    const whatsappNumber = "+919579068536"; // Replace with your WhatsApp number

    // WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      mailMessage
    )}`;

    window.open(whatsappLink, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      company: "",
      message: "",
    });
  };

  const bannerData = {
    bannerImg: "/images/banners/contact-bg.png",
    title: "Contact us",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Contact us", path: null, active: true },
    ],
  };
  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-form">
            <div className="col-lg-12">
              <div className="row info-div">
                <div className="col-lg-10">
                  <div className="row justify-content-lg-center justify-content-start">
                    <div className="col-lg-5">
                      <div
                        className="map-detail-container"
                        data-aos="fade-right" // Fade in as you scroll
                        data-aos-duration="1500"
                      >
                        <h3>India</h3>

                        <div className="map-location-detail">
                          <i class="fa-solid fa-location-dot"></i>
                          <p>Ashish Rolling Shutter</p>
                        </div>

                        <a href="tel:+91423053534">
                          <div className="map-location-detail">
                            <i class="fa-solid fa-phone"></i>
                            <p>+91423053534</p>
                          </div>
                        </a>

                        <a href="mailto:officemail@gmail.com">
                          <div className="map-location-detail">
                            <i class="fa-solid fa-envelope"></i>
                            <p>officemail@gmail.com</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div
                        className="map-detail-container"
                        data-aos="fade-left" // Fade in as you scroll
                        data-aos-duration="1500"
                      >
                        <h3>Global</h3>

                        <div className="map-location-detail">
                          <i class="fa-solid fa-location-dot"></i>
                          <p>Ashish Rolling Shutter</p>
                        </div>

                        <a href="tel:+91423053534">
                          <div className="map-location-detail">
                            <i class="fa-solid fa-phone"></i>
                            <p>+91423053534</p>
                          </div>
                        </a>

                        <a href="mailto:officemail@gmail.com">
                          <div className="map-location-detail">
                            <i class="fa-solid fa-envelope"></i>
                            <p>officemail@gmail.com</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row form">
                <div className="col-lg-8">
                  <div className="row">
                    <h2
                      className="title featured-title px-lg-0 px-2 wow"
                      data-aos="fade-left" // Fade in as you scroll
                      data-aos-duration="1500"
                    >
                      Contact Us
                    </h2>
                    <p
                      className="paragraph p-lg-0 mb-5"
                      data-aos="fade-left" // Fade in as you scroll
                      data-aos-duration="1500"
                    >
                      Got a query? Kindly fill the form and we shall get back to
                      you.
                    </p>
                  </div>
                  <div className="row">
                    <div className="form-container">
                      <form onSubmit={handleSubmit}>
                        <div className="col-lg-12">
                          <div className="row justify-content-lg-center justify-content-start">
                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right" // Fade in as you scroll
                              data-aos-duration="1500"
                            >
                              <div class="mb-4">
                                <label for="name" class="form-label paragraph">
                                  Name*
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="John Dae"
                                  required
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right" // Fade in as you scroll
                              data-aos-duration="1500"
                            >
                              <div class="mb-4">
                                <label
                                  for="company"
                                  class="form-label paragraph"
                                >
                                  Company*
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  value={formData.company}
                                  onChange={handleChange}
                                  id="company"
                                  required
                                  placeholder="Ashish Rolling Shutter"
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right" // Fade in as you scroll
                              data-aos-duration="1500"
                            >
                              <div class="mb-4">
                                <label for="state" class="form-label paragraph">
                                  Location*
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="state"
                                  placeholder="Maharashtra"
                                  value={formData.state}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right"
                              data-aos-duration="1500"
                            >
                              <div className="mb-4">
                                <label
                                  for="phone"
                                  className="form-label paragraph"
                                >
                                  Phone*
                                </label>
                                <input
                                  type="text" // Using text input type to allow unrestricted entry of characters
                                  className="form-control"
                                  id="phone"
                                  placeholder="0000000000"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  onInput={(e) => {
                                    // Remove non-numeric characters
                                    let value = e.target.value.replace(
                                      /[^0-9]/g,
                                      ""
                                    );

                                    // Ensure the value has exactly 10 digits
                                    if (value.length <= 10) {
                                      e.target.value = value;
                                      handleChange(e); // Update state
                                    } else {
                                      // Prevent entering more than 10 digits
                                      e.preventDefault();
                                    }
                                  }}
                                  required
                                  maxLength="10" // Ensures only 10 digits can be typed
                                  title="Please enter exactly 10 digits"
                                />
                                {formData.phone.length !== 10 &&
                                  formData.phone.length > 0 && (
                                    <div
                                      className="error-message"
                                      style={{ fontSize: "14px", color: "red" }}
                                    >
                                      Phone number must be exactly 10 digits.
                                    </div>
                                  )}
                              </div>
                            </div>

                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right" // Fade in as you scroll
                              data-aos-duration="1500"
                            >
                              <div class="mb-4">
                                <label for="email" class="form-label paragraph">
                                  Email*
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="john@example.com"
                                  required
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-6 col-12"
                              data-aos="fade-right" // Fade in as you scroll
                              data-aos-duration="1500"
                            >
                              <div class="mb-4">
                                <label
                                  for="message"
                                  class="form-label paragraph"
                                >
                                  Message*
                                </label>
                                <textarea
                                  class="form-control"
                                  id="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows="4"
                                  required
                                />
                              </div>
                            </div>

                            <div className="container">
                              <button
                                type="submit"
                                className="explore-button about-btn wow"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maps-tab-section">
        <MapsTabs />
      </section>
    </Layout>
  );
};

export default ContactUs;
