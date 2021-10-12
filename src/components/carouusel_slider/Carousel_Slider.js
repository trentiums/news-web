import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/carousel images/img-1.jpg";
import image2 from "../assets/carousel images/img-2.jpg";
import image3 from "../assets/carousel images/img-3.jpg";

function CarouselSlider() {
  return (
    <div>
      <Carousel className="carousel" interval={1000}>
        <Carousel.Item>
          <img
            className="crousel_indicators d-block w-100 "
            style={{ maxHeight: "500px" }}
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ maxHeight: "500px" }}
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            style={{ maxHeight: "500px" }}
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
