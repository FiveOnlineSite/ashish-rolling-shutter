import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ScrollTop from "./components/ScrollTop";
import { useEffect } from "react";
import WOW from "wowjs";
import AOS from "aos";
import CustomCursor from "./components/CustomCursor";
import LogoLoader from "./components/LogoLoader";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router>
      <ScrollTop />
      <LogoLoader logoSrc="/images/Ashish Rolling Shutter Logo.png" />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
