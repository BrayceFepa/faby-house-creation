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
  <source srcset={images.mobileSlide1} media="(max-width: 768px)"/>
  <img src={images.slide1} alt="Default Image"/>
</picture>
            {/* <img src= alt="" /> */}
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <picture>
  <source srcset={images.mobileSlide2} media="(max-width: 768px)"/>
  <img src={images.slide2} alt="Default Image"/>
</picture>
            {/* <img src={images.slide2} alt="" /> */}
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <picture>
  <source srcset={images.mobileSlide3} media="(max-width: 768px)"/>
  <img src={images.slide3} alt="Default Image"/>
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
