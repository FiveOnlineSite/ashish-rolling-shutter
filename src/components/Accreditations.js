import React from "react";

const Accreditations = () => {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3">
              <h5
                className="about-subtitle wow"
                data-aos="fade-up" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h5
                  className="about-subtitle wow"
                  data-aos="fade-up" // Fade in as you scroll
                  data-aos-duration="1500"
                >
                  <span>
                    <img src="/images/small-logo.png" alt="logo" />
                  </span>
                  <span>Trusted Recognition</span>{" "}
                  <span>
                    <img src="/images/small-logo.png" alt="logo" />
                  </span>
                </h5>
              </h5>
              <h2
                className="title featured-title "
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Our Recognized Accreditations
              </h2>
            </div>
            <div className="col-lg-9 mt-lg-0 mt-5 ">
              <div className="row justify-content-lg-end justify-content-center">
                <div
                  className="col-lg-3 slideInLeft"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="accreditation-img">
                    <img src="/images/tuv.png" alt="tuv" />
                  </div>
                </div>
                <div
                  className="col-lg-3 slideInLeft"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="accreditation-img">
                    <img src="/images/IGBC.png" alt="IGBC" />
                  </div>
                </div>
                <div
                  className="col-lg-3 slideInLeft"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <div className="accreditation-img">
                    <img src="/images/seh-logo.png" alt="seh" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
