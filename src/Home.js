import React from "react";
import Layout from "./components/Layout";
import BannerSlider from "./components/BannerSlider";

const Home = () => {
  return (
    <Layout>
      <section className="home-banner">
        <BannerSlider />
      </section>
    </Layout>
  );
};

export default Home;
