import React from 'react';
import Slider from '../../Components/Slider/Slider';

import "./Home.scss";
import Products from '../../Components/Products/Products';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Products/>
    </div>
  );
}

export default Home;