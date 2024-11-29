import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        {/* <div className="footer-top-div">
          <div className="container">
            <div className="footer-top-div-text">
              <h2>ASR</h2>
              <h6>Providing premium rolling shutter solutions since 1985.</h6>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-start">
                <div className="col-lg-9">
                  <div
                    className="footer-text"
                    data-aos="zoom-in" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <h2>Why Choose Us?</h2>

                    <p>
                      Ashish Rolling Shutters is a trusted name in the
                      manufacturing and installation of high-quality rolling
                      shutters and industrial doors. With years of expertise and
                      a commitment to excellence, we provide durable,
                      innovative, and reliable solutions for residential,
                      commercial, and industrial properties.
                    </p>
                  </div>
                </div>

                <div className="row mt-lg-4">
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="footer-logo">
                      <img
                        src="/images/Ashish Rolling Shutter Logo.png"
                        alt="logo"
                      />
                    </div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <NavLink to="/">
                            <i class="fa-brands fa-facebook-f"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/">
                            <i class="fa-brands fa-instagram"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/">
                            <i class="fa-brands fa-youtube"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="quick-links">
                      {/* <h6 className="footer-titles">Quick Links</h6> */}

                      <h6 className="footer-titles about-subtitle">
                        <span></span>Quick Links
                      </h6>
                      <ul>
                        <li>
                          <NavLink to="/">About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Brochures</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Support</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Contact Us</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="address-div">
                      <h6 className="footer-titles about-subtitle">
                        <span></span>Find Us Here
                      </h6>

                      {/* <h6 className="footer-titles ">Find Us Here</h6> */}

                      <a href="#" className="contact-links">
                        <div className="address-text">
                          <i class="fa-solid fa-location-dot footer-icon"></i>
                          <p>
                            HD-693 at Worli Shivaji Nagar, Worli, Mumbai,
                            Maharashtra - 400025
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-lg-0 mt-4"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <div className="phone-mail-div">
                      {/* <h6 className="footer-titles">Reach Out</h6> */}
                      <h6 className="footer-titles about-subtitle">
                        <span></span>Reach Out
                      </h6>

                      <a href="tel: +91 9324874287" className="contact-links">
                        <div className="phone-mail-text">
                          <i class="fa-solid fa-phone footer-icon"></i>
                          <p>+91 9324874287</p>
                        </div>
                      </a>
                      <a
                        href="mailto: contact@example.com"
                        className="contact-links"
                      >
                        <div className="phone-mail-text">
                          <i class="fa-solid fa-envelope footer-icon"></i>
                          <p>contact@example.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-none">
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Motorized Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Motorized Rolling Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Industrial Gates</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Fire Rated Shutters & Doors</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="collections-links">
                    <NavLink to="/">Hangar Doors</NavLink>
                  </div>
                </div>
              </div>

              <div
                className="row mt-5 " // Fade in as you scroll
                data-aos-duration="1500"
              >
                <div className="copyright-text text-center">
                  <p>
                    Copyright © 2024 <span>Ashish Rolling Shutter</span>. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              {/* <div className="go-up-btn">
              <NavLink to="/#home-banner">
                <i class="fa-solid fa-arrow-up"></i>
              </NavLink>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
