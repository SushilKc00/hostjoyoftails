import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import "./CategoryCarousel.css";

export const CategoryCarousel = ({
  images,
  desktop,
  mobile,
  arrow,
  dots,
  countslide,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: desktop,
      slidesToSlide: countslide,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop,
      slidesToSlide: countslide,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: mobile,
      slidesToSlide: mobile,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobile,
      slidesToSlide: mobile,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={dots}
        infinite={true}
        arrows={arrow}
        autoPlay={true}
        autoPlaySpeed={6000}
        className="carousel"
      >
        {images.map((img) => {
          return (
            <NavLink to="/dashboard">
              <div key={img.key} className="carousel-category-container">
                <figure>
                  <img src={img.imgName} alt={img.imgName} />
                </figure>
                <h3 style={{ fontSize: "2rem" }}>Product1</h3>
                <p style={{ fontSize: "1.5rem" }}>From 12000</p>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </>
  );
};
