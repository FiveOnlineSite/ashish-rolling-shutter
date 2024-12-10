import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CategoryData from "../components/CategoryData";
import { useParams } from "react-router-dom";

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
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
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
                        className="w-100"
                        alt={category.category}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="title featured-title">{category.category}</div>
                <p className="paragraph category-para">{category.paragraph}</p>

                <div className="custom-operations">
                  <h4>Material Options:</h4>
                  <div className="row">
                    {category.material_options.map((material, index) => (
                      <div className="col-6">
                        <p key={index} className="paragraph category-para">
                          {material.option}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="custom-operations">
                  <h4>Operation Types:</h4>
                  {category.operation_type.map((operation, index) => (
                    <p key={index} className="paragraph category-para">
                      <span className="category-span"> {operation.type}</span>
                      {operation.content}
                    </p>
                  ))}
                </div>

                <div className="why-choose">
                  <h4>Why Choose Ashish Rolling Shutters?</h4>
                  {category.choose.map((choose, index) => (
                    <p key={index} className="paragraph category-para">
                      <span className="category-span"> {choose.type}</span>{" "}
                      {choose.content}
                    </p>
                  ))}
                </div>

                <div className="service">
                  <h4>Worldwide Service</h4>
                  {category.service.map((service, index) => (
                    <p key={index} className="paragraph category-para">
                      {service.para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Category;
