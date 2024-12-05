import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({ bannerImg, title, breadcrumbs }) => {
  return (
    <section className="banner-div">
      <div className="row">
        <div className="banner-img">
          <img src={bannerImg} className="w-100" alt="banner-img" />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <h1
                    className="banner-title wow"
                    data-aos="fade-right" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    {title}
                  </h1>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-end">
                  <div
                    className="breadcrumb wow"
                    data-aos="fade-left" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        {breadcrumbs.map((breadcrumb, index) => (
                          <li
                            key={index}
                            class={`breadcrumb-item ${
                              breadcrumb.active ? "active" : ""
                            }`}
                            aria-current={
                              breadcrumb.active ? "page" : undefined
                            }
                          >
                            {breadcrumb.active ? (
                              breadcrumb.label
                            ) : (
                              <NavLink to={breadcrumb.path}>
                                {breadcrumb.label}
                              </NavLink>
                            )}
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
