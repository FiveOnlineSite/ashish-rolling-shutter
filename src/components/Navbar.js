import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleOffcanvasHidden = () => {
      document.body.style.overflow = ""; // Reset the overflow
    };

    document.addEventListener("hidden.bs.offcanvas", handleOffcanvasHidden);

    return () => {
      document.removeEventListener(
        "hidden.bs.offcanvas",
        handleOffcanvasHidden
      );
    };
  }, []);

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
                  <NavLink
                    to="mailto:contact@example.com"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <p>contact@example.com</p>
                  </NavLink>
                </div>

                <div className="contact-link">
                  <NavLink to="/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Worli, Mumbai, Maharashtra 400025/30</p>
                  </NavLink>
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
                    <NavLink to="/" title="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" title="youtube">
                      <i className="fa-brands fa-youtube"></i>
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
              title="logo"
              data-aos="fade-right" // Fade in as you scroll
              data-aos-duration="1500"
            >
              <img
                src="/images/Ashish Rolling Shutter Logo.png"
                width={"105px"}
                height={"85px"}
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
                  <NavLink className="nav-link" to="/" title="Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us" title="About Us">
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
                    title="Products"
                  >
                    Products <i className="fa-solid fa-angle-down"></i>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/"
                        title="Rolling Shutter"
                      >
                        Rolling shutter
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/" title="Gates">
                        Gates
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/"
                        title="Raw Materials"
                      >
                        Raw materials
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/"
                        title="Sliding Shutter"
                      >
                        Sliding shutter
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/"
                        title="Rolling Shutter Operating System"
                      >
                        Rolling shutter operating system
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/brochures"
                    title="Brochures"
                  >
                    Brochures
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/support" title="Support">
                    Support
                  </NavLink>
                </li>

                <li className="nav-item contact-btn">
                  {/* <NavLink className="nav-link" to="/">
                    Contact Us
                  </NavLink> */}
                  <NavLink to="/contact-us" title="Contact Us">
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
                    <NavLink to="mailto:contact@example.com" title="mailid">
                      <i className="fa-solid fa-envelope"></i>
                      <p>contact@example.com</p>
                    </NavLink>
                  </div>

                  <div className="contact-link">
                    <NavLink to="/" title="address">
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Worli, Mumbai, Maharashtra 400025/30</p>
                    </NavLink>
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
                      <NavLink to="/" title="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" title="youtube">
                        <i className="fa-brands fa-youtube"></i>
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
                title="logo"
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
                    title="logo"
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
                      <NavLink className="nav-link" to="/" title="Home">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/about-us"
                        title="About Us"
                      >
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
                        title="Products"
                      >
                        Products <i className="fa-solid fa-angle-down"></i>
                      </NavLink>

                      <ul className="dropdown-menu ">
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/"
                            title="Hangar Doors"
                          >
                            Hangar Doors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/"
                            title="High Speed Doors"
                          >
                            High Speed Doors
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/"
                            title="Cold Storage Doors"
                          >
                            Cold Storage Doors
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/brochures"
                        title="Brochures"
                      >
                        Brochures
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/support"
                        title="Support"
                      >
                        Support
                      </NavLink>
                    </li>

                    <li className="nav-item explore-button contact-mb-btn">
                      <NavLink
                        className="nav-link"
                        to="/contact-us"
                        title="Contact Us"
                      >
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
