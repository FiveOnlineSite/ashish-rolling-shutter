import React from "react";
import IndiaMapLocations from "./IndiaMapLocations";
import GlobalMapLocations from "./GlobalMapLocations";

const MapsTabs = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title featured-title">
          Serving <b>26 +</b> <br /> Indian Cities
        </h2>
        <div className="maps-container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#pan-india"
                role="tab"
              >
                Pan India
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#other-countries"
                role="tab"
              >
                Other Countries
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              id="pan-india"
              className="tab-pane fade show active"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-3">
                  <div className="map-detail-container">
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

                <div className="col-lg-9 indian-map-col">
                  <div className="single-map-container india-map">
                    <img src="/images/maps/indian-map.png" alt="pan-india" />
                    {/* <div className="location-div ahmedabad">
                      <div className="map-pin"></div>
                      <div className="location-data">
                        <h6>Ahmedabad</h6>
                      </div>
                    </div> */}

                    {IndiaMapLocations.map((location, index) => (
                      <div
                        key={index}
                        className="location-div"
                        style={{ position: "absolute", ...location.position }} // Combine inline styles
                      >
                        <div className="map-pin"></div>
                        <div className="location-data">
                          <h6>{location.name}</h6>
                          <p>{location.tel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="other-countries" className="tab-pane fade" role="tabpanel">
              <div className="row">
                <div className="col-lg-3">
                  <div className="map-detail-container">
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

                <div className="col-lg-9 global-map-col">
                  <div className="single-map-container world-map">
                    <img
                      src="/images/maps/The_World_map 1.png"
                      alt="pan-india"
                    />

                    {GlobalMapLocations.map((location, index) => (
                      <div
                        key={index}
                        className="location-div"
                        style={{ position: "absolute", ...location.position }} // Combine inline styles
                      >
                        <div className="map-pin"></div>
                        <div className="location-data">
                          <h6>{location.name}</h6>
                        </div>
                      </div>
                    ))}
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

export default MapsTabs;
