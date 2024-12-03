import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Brochures = () => {
  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: "Brochures",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Brochures", path: null, active: true },
    ],
  };
  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />
    </Layout>
  );
};

export default Brochures;
