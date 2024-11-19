import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg desktop-navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src="/images/logo 1.png"
                width={"100px"}
                height={"80px"}
                alt="logo"
              />
            </NavLink>

            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

                  <ul className="dropdown-menu">
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

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar fixed-top mobile-navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src="/images/logo 1.png"
                width={"100px"}
                height={"80px"}
                alt="logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
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
                <NavLink className="navbar-brand" to="/">
                  <img
                    src="/images/logo.jpeg"
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

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
