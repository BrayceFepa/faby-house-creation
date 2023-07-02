import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import images from "../../Constants/Images";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";


const Slider = () => {




  return (
    <div className="slider-container">
      
        
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ 
          clickable: true,
         }}
        autoplay={{ 
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        effect="fade"
        
      >
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <picture>
  <source srcset={"https://faby-house-creation-16dl.vercel.app/static/media/mobile-banner.831b8e56756bec4a43b6.jpg"} media="(max-width: 768px)"/>
  <img src={"https://faby-house-creation-16dl.vercel.app/static/media/banner-v1.cb9ba1b36c1516e16061.jpg"} alt="Default Image"/>
</picture>
            {/* <img src= alt="" /> */}
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <picture>
  <source srcset={"https://faby-house-creation-16dl.vercel.app/static/media/mobile-banner-2.c8419f1da52cde3f382f.jpg"} media="(max-width: 768px)"/>
  <img src={"https://faby-house-creation-16dl.vercel.app/static/media/banner-v2.dd1e45bb15459495aa32.jpg"} alt="Default Image"/>
</picture>
            {/* <img src={images.slide2} alt="" /> */}
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <picture>
  <source srcset={"https://faby-house-creation-16dl.vercel.app/static/media/mobile-banner-3.0111d15ed852ee18ad5d.jpg"} media="(max-width: 768px)"/>
  <img src={"https://faby-house-creation-16dl.vercel.app/static/media/banner-v3.6e39d01bcd0b4f8720d1.jpg"} alt="Default Image"/>
</picture>
            {/* <img src={images.slide3} alt="" /> */}
          </div>
          </div>
        </SwiperSlide>
        </Swiper>
      
        
    </div>
  );
};

export default Slider;
