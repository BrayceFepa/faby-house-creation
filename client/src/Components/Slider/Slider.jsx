import React, { useState } from "react";
import images from "../../Constants/Images";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs";

import "./Slider.scss";


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);



    const nextSlide = () => { 
      setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1);
    }
    
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1);
    }

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        
        <div className="slide">
          <div className="image">
            <img src={images.slide1} alt="" />
          </div>
          <div className="txt">
            <span>Bienvenu chez <br /> FABY HOUSE CREATION</span>
            <span className="btn">En Savoir plus <BsFillArrowDownCircleFill/></span>
          </div>
        </div>

        <div className="slide">
          <div className="image">
            <img src={images.slide2} alt="" />
          </div>
          <div className="txt">
            <span>Votre Atelier de Conception de chapeau haut de gamme</span>
          </div>
        </div>

        <div className="slide">
          <div className="image">
            <img src={images.slide3} alt="" />
          </div>
          <div className="txt">
            <span>Démarquez-vous avec un style unique et original</span>
          </div>
        </div>
      </div>
          <div className="icons">
              <div className="left" onClick={prevSlide}>
                  <BsFillArrowLeftCircleFill/>
              </div>
              <div className="right" onClick={nextSlide}>
                  <BsFillArrowRightCircleFill/>
              </div>
      </div>
    </div>
  );
};

export default Slider;
