import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-2 ">
                <div className="footer-logo">
                  <img src="/images/logo.jpeg" alt="logo" />
                </div>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-4">
                <div className="quick-links">
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
              <div className="col-lg-2 mt-lg-0 mt-4">
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
            </div>
            <div className="row mt-5">
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

            <div className="row mt-5">
              <div className="copyright-text">
                <p>© All Rights Reserved. 24/7 Support</p>
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
  );
};

export default Footer;
