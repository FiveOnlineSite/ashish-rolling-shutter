import React from "react";
import Counter from "./Counter";

const CounterSection = () => {
  return (
    <>
      <div className="counter-overlay"></div>
      <div>
        <div
          className="container wow"
          data-aos="fade-up" // Fade in as you scroll
          data-aos-duration="1500"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4">
                  <h5
                    className="about-subtitle wow"
                    data-aos="fade-up" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    <span></span> Making Every Count a Success
                  </h5>
                  <h2 className="title featured-title ">Every Count Matter</h2>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div
                      className="col-lg-6 wow"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="counter-div">
                        <div className="counter-icon">
                          <img
                            src="/images/review.png"
                            width={"50px"}
                            height={"50px"}
                            alt="review"
                          />
                        </div>
                        <div className="counter-div-text">
                          <div className="counter-nos">
                            <Counter target={28} />
                            <span className="counter-span">+</span>
                          </div>
                          <div className="counter-text">
                            {/* <img src="/images/review.png" alt="review" /> */}
                            <h6>Years of Excellence</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 wow"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="counter-div">
                        <div className="counter-icon">
                          <img
                            src="/images/location (1).png"
                            width={"50px"}
                            height={"50px"}
                            alt="graph"
                          />
                        </div>
                        <div className="counter-div-text">
                          <div className="counter-nos">
                            <Counter target={26} />
                            <span className="counter-span">+</span>
                          </div>
                          <div className="counter-text">
                            {/* <img src="/images/location (1).png" alt="review" /> */}
                            <h6>PAN India Cities</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 mt-lg-4 wow"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <div className="counter-div">
                        <div className="counter-icon">
                          <img
                            src="/images/planet-earth.png"
                            width={"50px"}
                            height={"50px"}
                            alt="graph"
                          />
                        </div>
                        <div className="counter-div-text">
                          <div className="counter-nos">
                            <Counter target={70} />
                            <span className="counter-span">+</span>
                          </div>
                          <div className="counter-text">
                            {/* <img src="/images/planet-earth.png" alt="review" /> */}
                            <h6>Countries delivered</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 mt-lg-4 wow"
                      data-aos="fade-up"
                      data-aos-delay="1200"
                    >
                      <div className="counter-div">
                        <div className="counter-icon">
                          <img
                            src="/images/graph.png"
                            width={"50px"}
                            height={"50px"}
                            alt="graph"
                          />
                        </div>
                        <div className="counter-div-text">
                          <div className="counter-nos">
                            <Counter target={70} />
                            <span className="counter-span">%</span>
                          </div>
                          <div className="counter-text">
                            {/* <img src="/images/graph.png" alt="review" /> */}
                            <h6>Market share</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="counter-div">
                <div className="counter-text">
                  <img src="/images/support.png" alt="review" />
                  <h6>Support</h6>
                </div>
                <div className="counter-nos">24/7</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;
