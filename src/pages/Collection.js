import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import SlickSlider from "../components/SlickSlider";
import CollectionData from "../components/CollectionData";

const Collection = () => {
  const { category_slug, productName } = useParams();

  const collection = CollectionData.find(
    (item) => item.category_slug.toLowerCase() === category_slug?.toLowerCase()
  );

  if (!category_slug || !productName) {
    return <Layout>Invalid collection parameters</Layout>;
  }

  // Find the product by productName
  const product = collection.product.find(
    (item) => item.productName === productName
  );

  if (!collection) {
    return <Layout>Collection Not Found</Layout>;
  }

  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: collection.productName,
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: collection.productName, path: null, active: true },
    ],
  };

  const BannerSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Ensure dots are enabled here
          fade: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Ensure dots are enabled here
          fade: true,
        },
      },
    ],
  };

  const ProductsSettings = {
    dots:
      (collection.otherproducts && collection.otherproducts.length > 4) ||
      false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(
      4,
      (collection.otherproducts && collection.otherproducts.length) || 0
    ),
    slidesToScroll: 4,
    fade:
      (collection.otherproducts && collection.otherproducts.length === 1) ||
      false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(
            2.5,
            (collection.otherproducts && collection.otherproducts.length) || 0
          ),
          slidesToScroll: 2,
          dots:
            (collection.otherproducts && collection.otherproducts.length > 2) ||
            false,
          fade:
            (collection.otherproducts &&
              collection.otherproducts.length === 1) ||
            false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: Math.min(
            1.5,
            (collection.otherproducts && collection.otherproducts.length) || 0
          ),
          slidesToScroll: 1,
          dots:
            (collection.otherproducts && collection.otherproducts.length > 1) ||
            false,
          fade:
            (collection.otherproducts &&
              collection.otherproducts.length === 1) ||
            false,
        },
      },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="category-banner">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="row desktop-row">
                  {product.image?.map((image, index) => (
                    <div
                      className={
                        product.image.length === 1 ? "col-lg-12" : "col-lg-6"
                      }
                      key={index}
                    >
                      <img
                        key={index}
                        src={product.image.image_url}
                        className="w-100 pb-4"
                        alt={product.productName}
                      />
                    </div>
                  ))}
                </div>

                <div className="row mobile-row">
                  <SlickSlider
                    settings={BannerSettings}
                    hasText={false}
                    showProductName={false}
                    filterdProducts={false}
                    items={product.image.map((image, index) => ({
                      image: image.image_url,
                    }))}
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="title featured-title pb-5">
                  {product.productName}
                </div>
                <p className="paragraph category-para">{product.paragraph}</p>

                <div className="custom-operations">
                  <h4 className="category-title">Key Features:</h4>
                  <div className="row">
                    {collection.product?.key_features.map((features, index) => (
                      <p className="paragraph category-para">
                        <span>{features.type}</span> {features.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="why-choose">
                  <h4 className="category-title">
                    Why Choose Ashish Rolling Shutters?
                  </h4>
                  <div className="row">
                    {collection.product?.choose?.map((choose, index) => (
                      <div className="col-lg-3">
                        <div className="choose-div" key={index}>
                          <img src={choose.image} alt={choose.type} />
                          <h6>{choose.type}</h6>
                          <p className="paragraph category-para">
                            {choose.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="service">
                  <h4 className="category-title">Trusted Manufacturing</h4>
                  {collection.product.trusted.map((trusted, index) => (
                    <p key={index} className="paragraph category-para mb-0">
                      {trusted.para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="title featured-title pb-5">Related Products</div>
        </div>
        <div className="container-fuild featured-products-section related-section py-0">
          <div
            className="row filter-products-slider slider-section wow"
            data-aos="zoom-in" // Fade in as you scroll
            data-aos-duration="1500"
          >
            {/* {category.products.map((prod, index) => ( */}
            <SlickSlider
              settings={ProductsSettings}
              hasText={false}
              showProductName={false}
              filterdProducts={true}
              items={collection.otherproducts?.map((product, index) => ({
                productImg: product.productImg,
                productName: product.productName,
                url: product.url,
              }))}
            />
            {/* ))} */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
