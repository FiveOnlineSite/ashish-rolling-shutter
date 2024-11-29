import React, { useState, useEffect } from "react";

const LogoLoader = ({ logoSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Detect when the entire page has loaded
  useEffect(() => {
    const handleLoad = () => {
      console.log("Page is fully loaded");
      setPageLoaded(true); // Set pageLoaded to true when the page is fully loaded
    };

    if (document.readyState === "complete") {
      setPageLoaded(true); // If the page is already loaded, just set the state
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleLogoLoad = () => {
    console.log("Logo loaded!"); // Debug if onLoad is triggered
    setIsLoading(false); // Set loading to false when the logo has finished loading
  };

  return (
    <>
      {/* Only show loader if the page is not loaded yet */}
      {!pageLoaded && (
        <div className="logo-loader-container">
          {/* Show loader while image is loading */}
          {isLoading && <div className="loader">Loading...</div>}

          {/* The logo image, hidden until it's loaded */}
          <img
            src={logoSrc}
            alt="Logo"
            onLoad={handleLogoLoad}
            style={{
              opacity: isLoading ? 0 : 1, // Use opacity to hide until loaded
              transition: "opacity 0.5s ease-in-out", // Smooth fade-in
              display: isLoading ? "block" : "none", // Ensure logo is hidden until loaded
            }}
          />
        </div>
      )}
    </>
  );
};

export default LogoLoader;
