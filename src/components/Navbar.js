import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container-fluid top-bar-div">
          <div className="row topbar ">
            <div className="col-lg-5">
              <h6
                className="topbar-title"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                provides custom, durable shutters for ultimate security
              </h6>
            </div>
            <div className="col-lg-5">
              <div
                className="contact-links-div"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <div className="contact-link">
                  <a href="mailto:contact@example.com">
                    <i class="fa-solid fa-envelope"></i>
                    <p>contact@example.com</p>
                  </a>
                </div>

                <div className="contact-link">
                  <a href="#">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Worli, Mumbai, Maharashtra 400025/30</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div
                className="social-links top-bar-links"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
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
          </div>
        </div>
        <nav className="navbar navbar-expand-lg desktop-navbar">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand"
              to="/"
              data-aos="fade-right" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <img
                src="/images/Ashish Rolling Shutter Logo.png"
                width={"95px"}
                height={"75px"}
                alt="logo"
              />
            </NavLink>

            <div
              className="navbar-collapse"
              id="navbarSupportedContent"
              data-aos="fade-left" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    to="/"
                    aria-expanded="false"
                  >
                    Products <i className="fa-solid fa-angle-down"></i>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Rolling shutter
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Gates
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Raw materials
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Sliding shutter
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Rolling shutter operating system
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/brochures">
                    Brochures
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/support">
                    Support
                  </NavLink>
                </li>

                <li className="nav-item contact-btn">
                  {/* <NavLink className="nav-link" to="/">
                    Contact Us
                  </NavLink> */}
                  <NavLink to="/contact-us">
                    <button className="explore-button contact-btn wow">
                      Contact Us
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mobile-navbar-div">
          <div className="container-fluid mobile-top-bar-div">
            <div className="row topbar ">
              <div className="col-lg-5 col-md-5 col-sm-5">
                <h6
                  className="topbar-title"
                  data-aos="fade-right" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  provides custom, durable shutters for ultimate security
                </h6>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5">
                <div
                  className="contact-links-div"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <div className="contact-link">
                    <a href="mailto:contact@example.com">
                      <i class="fa-solid fa-envelope"></i>
                      <p>contact@example.com</p>
                    </a>
                  </div>

                  <div className="contact-link">
                    <a href="#">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Worli, Mumbai, Maharashtra 400025/30</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div
                  className="social-links top-bar-links"
                  data-aos="fade-left" // Fade in as you scroll
                  data-aos-duration="1500"
                >
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
            </div>
          </div>
          <nav className="navbar fixed-top mobile-navbar">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand"
                to="/"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <img
                  src="/images/Ashish Rolling Shutter Logo.png"
                  width={"100px"}
                  height={"80px"}
                  alt="logo"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <NavLink
                    className="navbar-brand"
                    to="/"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <img
                      src="/images/Ashish Rolling Shutter Logo.png"
                      width={"100px"}
                      height={"80px"}
                      alt="logo"
                    />
                  </NavLink>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        to="/"
                        aria-expanded="false"
                      >
                        Products <i className="fa-solid fa-angle-down"></i>
                      </NavLink>

                      <ul className="dropdown-menu ">
                        <li>
                          <NavLink className="dropdown-item" to="/">
                            Hangar Doors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/">
                            High Speed Doors
                          </NavLink>
                        </li>

                        <li>
                          <NavLink className="dropdown-item" to="/">
                            Cold Storage Doors
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Brochures
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Support
                      </NavLink>
                    </li>

                    <li className="nav-item explore-button contact-mb-btn">
                      <NavLink className="nav-link" to="/">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
