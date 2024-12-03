import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const ContactUs = () => {
  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: "Contact us",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Contact us", path: null, active: true },
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

export default ContactUs;
