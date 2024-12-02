import React, { useState, useEffect } from "react";

const LogoLoader = ({ logoSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Page fully loaded");
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleLogoLoad = () => {
    console.log("Logo loaded!");
    setIsLoading(false);
  };

  return (
    <>
      {!pageLoaded && (
        <div className="logo-loader-container">
          {/* {isLoading} */}
          <img
            src={logoSrc}
            alt="Logo"
            onLoad={handleLogoLoad}
            style={{
              opacity: isLoading ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              width: "140px",
              display: "block",
            }}
          />
        </div>
      )}
    </>
  );
};

export default LogoLoader;
