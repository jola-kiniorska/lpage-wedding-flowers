import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselItem.scss";
import imgGallery1 from "../../img/gallery_1.jpg";
import imgGallery2 from "../../img/gallery_2.jpg";
import imgGallery3 from "../../img/gallery_3.jpg";
import imgGallery4 from "../../img/gallery_4.jpg";
import imgGallery5 from "../../img/gallery_5.jpg";
import imgGallery6 from "../../img/gallery_6.jpg";

const CarouselItem = () => {
  return (
    <div className="gallery-carousel">
      <Carousel
        infinite={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
      >
        <img src={imgGallery1} alt="wedding-flowers" />
        <img src={imgGallery2} alt="wedding-flowers" />
        <img src={imgGallery3} alt="wedding-flowers" />
        <img src={imgGallery4} alt="wedding-flowers" />
        <img src={imgGallery5} alt="wedding-flowers" />
        <img src={imgGallery6} alt="wedding-flowers" />
      </Carousel>
    </div>
  );
};

export default CarouselItem;
