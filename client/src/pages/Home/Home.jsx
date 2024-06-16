import React from 'react';
import Slider from '../../Components/Slider/Slider';

import "./Home.scss";
import Products from '../../Components/Products/Products';
import Carousel from '../../Components/Carousel/Carousel';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Accueil</title>
        <meta
                name="description"
                content="Votre atelier de conception haut de game d'accéssoires de mode, chapeau, crinolline, paille française, robes..."
        />
        <meta
                name="keywords"
                content="Faby House Creation, Djouokouo, Chapeau, accessoires, robes, africaine, mode africaine"
            />
      </Helmet>
    <div className='home'>
      <Slider />
      <Carousel/>
      <Products/>
    </div>
    </>
  );
}

export default Home;