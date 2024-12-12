import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink, useParams } from "react-router-dom";
import SlickSlider from "../components/SlickSlider";
import CollectionData from "../components/CollectionData";

const Collection = () => {
  const { category_slug, slug } = useParams();

  // Find the collection using category_slug
  const collection = CollectionData.filter(
    (category) => category.category_slug === category_slug
  );
  console.log("Collection:", collection);

  // Check if category_slug is invalid
  if (!category_slug || collection.length === 0) {
    return <Layout>"Collection Not Found or Invalid Category"</Layout>;
  }

  // Find the product using slug in each collection
  const products = collection.flatMap((collection) =>
    collection.products.filter((product) => product.slug === slug)
  );
  console.log("Selected Product:", products);

  // If no collection or product is found, return error messages
  if (!collection) {
    return <Layout>Collection Not Found</Layout>;
  }

  if (!products) {
    return <Layout>Product Not Found in this category</Layout>;
  }

  // Banner data configuration
  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg", // Example banner image
    title: products[0].productName,
    breadcrumbs: [
      {
        label: "Home",
        path: `/`,
        active: false,
      },
      { label: products[0].productName, path: null, active: true },
    ],
  };

  const BannerSettings = {
    dots: products[0].image?.length > 1 || false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          fade: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          fade: true,
        },
      },
    ],
  };

  const ProductsSettings = {
    dots: collection[0].otherproducts?.length > 4 || false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, collection[0].otherproducts?.length || 0),
    slidesToScroll: 4,
    fade: collection[0].otherproducts?.length === 1 || false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, collection[0].otherproducts?.length || 0),
          slidesToScroll: 2,
          dots: collection[0].otherproducts?.length > 2 || false,
          fade: collection[0].otherproducts?.length === 1 || false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: Math.min(1, collection[0].otherproducts?.length || 0),
          slidesToScroll: 1,
          dots: collection[0].otherproducts?.length > 1 || false,
          fade: collection[0].otherproducts?.length === 1 || false,
        },
      },
    ],
  };

  console.log("other", collection[0].otherproducts);

  // WhatsApp contact number
  const whatsappNumber = "+918850366693"; // Replace with your WhatsApp number

  // Determine the base URL dynamically
  const baseUrl = window.location.origin;

  // Construct the full URL dynamically
  const productUrl = `${baseUrl}/${collection[0].category_slug}/${products[0].slug}`;

  // Pre-filled message
  const message = `Hi, I was on your website and want to know more about this project: ${productUrl}`;

  console.log(message);

  // WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="category-banner ">
        <div className="container">
          {/* <div className="title featured-title px-3">
            {products[0].productName}
          </div> */}
          <p className="paragraph category-para ">{products[0].paragraph}</p>
        </div>

        <div className="row collection-row">
          <SlickSlider
            settings={BannerSettings}
            hasText={false}
            showProductName={false}
            filterdProducts={false}
            items={products[0].image.map((image) => ({
              image: image.image_url,
            }))}
          />
        </div>
      </section>

      <section className="key-features-section">
        <div className="container">
          <div className="features">
            <h4 className="category-title">Key Features:</h4>
            {products[0].choose?.map((choose, index) => (
              <p className="paragraph category-para">
                <span>{choose.type}</span>
                {choose.content}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose">
            <h4 className="category-title">
              Why Choose Ashish {products[0].productName}?
            </h4>
            <div className="row">
              {products[0].choose?.map((choose, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="choose-div">
                    <img src={choose.image} alt={choose.type} />
                    <h6>{choose.type}</h6>
                    <p className="paragraph category-para">{choose.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="container">
          <div className="service">
            <h4 className="category-title">Trusted Manufacturing</h4>
            {products[0].trusted?.map((trusted, index) => (
              <p key={index} className="paragraph category-para mb-0">
                {trusted.para}
              </p>
            ))}
          </div>
        </div>

        <div className="container mt-4">
          <NavLink to="/">
            <button
              className="explore-button about-btn me-3 mb-3 wow"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Download Brochure
            </button>
          </NavLink>

          <NavLink to={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button
              className="explore-button about-btn mb-3 wow"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Get Quote
            </button>
          </NavLink>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="title featured-title pb-5">Related Products</div>
        </div>
        <div className="container-fluid featured-products-section related-section py-0">
          <div className="row filter-products-slider slider-section">
            <SlickSlider
              settings={ProductsSettings}
              hasText={false}
              showProductName={false}
              filterdProducts={true}
              items={collection[0].otherproducts?.map((product) => ({
                productImg: product.productImg,
                productName: product.productName,
                url: product.url,
              }))}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
