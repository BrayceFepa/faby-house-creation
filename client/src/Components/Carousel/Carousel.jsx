import React, { useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/productsReducer";
import SkeletonProductCard from "../SkeletonProductCard/SkeletonProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Carousel.scss";

const Carousel = () => {
  const products = useSelector(selectProducts);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    if (products) {
      console.log("products", products);
    }
  }, [products]);

  return (
    <div className="carousel_container">
      <h2 className="heading">
       <span>Meilleures</span> Offres
      </h2>
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        slidesPerGroup={3}
        // centeredSlides={true}
        loopedSlides={true}
         loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={300}
        // centeredSlides={true}
        breakpoints={{ 
          1200: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          }
         }}
      >
        {/* <div className="products-list"> */}
        {products?.products.slice(0, 5).map((product, id) => (
          <SwiperSlide key={id+1}>
            <ProductCard key={product?._id} product={product} />
          </SwiperSlide>
        ))}
        {/* </div>  */}
      </Swiper>
    </div>
  );
};

export default Carousel;
