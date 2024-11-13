import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <NavLink class="navbar-brand" to="/">
              <img
                src="/images/logo.jpeg"
                width={"100px"}
                height={"80px"}
                alt="logo"
              />
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    About Us
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <NavLink
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    to="/"
                    aria-expanded="false"
                  >
                    Products <i class="fa-solid fa-angle-down"></i>
                  </NavLink>

                  <ul class="dropdown-menu">
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Hangar Doors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        High Speed Doors
                      </NavLink>
                    </li>

                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Cold Storage Doors
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Brochures
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Support
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
