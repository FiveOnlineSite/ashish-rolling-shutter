import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CategoryData from "../components/CategoryData";
import { useParams } from "react-router-dom";
import SlickSlider from "../components/SlickSlider";

const Category = () => {
  const { categoryName } = useParams();

  const category = CategoryData.find(
    (item) => item.slug.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return <Layout>Category Not Found</Layout>;
  }

  const bannerData = {
    bannerImg: "/images/banners/about-us-banner.jpg",
    title: category.category,
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: category.category, path: null, active: true },
    ],
  };

  const BannerSettings = {
    dots: true,
    arrows: true,
    infinite: true,
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
    dots: (category.products && category.products.length > 4) || false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(
      4,
      (category.products && category.products.length) || 0
    ),
    slidesToScroll: 4,
    fade: (category.products && category.products.length === 1) || false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(
            2.5,
            (category.products && category.products.length) || 0
          ),
          slidesToScroll: 2,
          dots: (category.products && category.products.length > 2) || false,
          fade: (category.products && category.products.length === 1) || false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: Math.min(
            1.5,
            (category.products && category.products.length) || 0
          ),
          slidesToScroll: 1,
          dots: (category.products && category.products.length > 1) || false,
          fade: (category.products && category.products.length === 1) || false,
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
                  {category.image.map((image, index) => (
                    <div
                      className={
                        category.image.length === 1 ? "col-lg-12" : "col-lg-6"
                      }
                      key={index}
                    >
                      <img
                        key={index}
                        src={image.image_url}
                        className="w-100 pb-4"
                        alt={category.category}
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
                    items={category.image.map((image, index) => ({
                      image: image.image_url,
                    }))}
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="title featured-title pb-5">
                  {category.category}
                </div>
                <p className="paragraph category-para">{category.paragraph}</p>

                <div className="custom-operations">
                  <h4 className="category-title">Material Options:</h4>
                  <div className="row">
                    {category.material_options.map((material, index) => (
                      <div className="col-6" key={index}>
                        <p className="paragraph category-para">
                          <span>{material.option}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="custom-operations">
                  <h4 className="category-title">Operation Types:</h4>
                  {category.operation_type.map((operation, index) => (
                    <p key={index} className="paragraph category-para">
                      <span className="category-span"> {operation.type}</span>
                      {operation.content}
                    </p>
                  ))}
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
                    {category.choose.map((choose, index) => (
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
                  <h4 className="category-title">Worldwide Service:</h4>
                  {category.service.map((service, index) => (
                    <p key={index} className="paragraph category-para mb-0">
                      {service.para}
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
              items={category.products.map((product, index) => ({
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

export default Category;
