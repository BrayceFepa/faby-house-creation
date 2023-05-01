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
        autoplay={true}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="image">
            <img src={images.slide1} alt="" />
          </div>
          <div className="txt">
            <span>Bienvenu chez <br /> FABY HOUSE CREATION</span>
            <span className="btn">En Savoir plus <BsFillArrowDownCircleFill/></span>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
            <img src={images.slide2} alt="" />
          </div>
          <div className="txt">
            <span>Votre Atelier de Conception de chapeau haut de gamme</span>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image">
            <img src={images.slide3} alt="" />
          </div>
          <div className="txt">
            <span>Démarquez-vous avec un style unique et original</span>
          </div>
          </div>
        </SwiperSlide>
        </Swiper>
      
        
    </div>
  );
};

export default Slider;
