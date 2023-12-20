import React from 'react';
import Slider from '../../Components/Slider/Slider';

import "./Home.scss";
import Products from '../../Components/Products/Products';
import Carousel from '../../Components/Carousel/Carousel';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Carousel/>
      <Products/>
    </div>
  );
}

export default Home;