import React from "react";
import carouselImg1 from "../../../../public/images/carouselimg/carouselimg1.jpg"
import carouselImg2 from "../../../../public/images/carouselimg/carouselimg2.jpg"
import carouselImg4 from "../../../../public/images/carouselimg/carouselimg4.jpg"
import carouselImg5 from "../../../../public/images/carouselimg/carouselimg5.jpg"
import carouselImg6 from "../../../../public/images/carouselimg/carouselimg6.jpg"
import carouselImg7 from "../../../../public/images/carouselimg/carouselimg7.jpg"

const Banner = () => {
  return (
    <div className="mt-10 carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={carouselImg7}
          className="w-full h-[70%] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={carouselImg2}
          className="w-full h-[70%] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={carouselImg6}
          className="w-full h-[70%] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={carouselImg5}
          className="w-full h-[70%] object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
