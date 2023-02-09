import React from 'react';
import Images from '../../Constants/Images';


import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="box">
        <h4>Catgories</h4>
        <ul>
          <li>Foulard nigerien</li>
          <li>Paille Française</li>
          <li>Crinolline</li>
        </ul>
      </div>

      <div className="box">
        <h4>Liens utils</h4>
        <span>Acceuil</span>
        <span>À propos</span>
        <span>Formations</span>
        <span>Blog</span>
      </div>

      <div className="box">
        <h4>Qui sommes nous ?</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique sunt deleniti natus quos illum quibusdam repellendus, quod cupiditate, delectus et ut aliquam, possimus magnam.</p>
      </div>

      <div className="box">
        <h4>Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus obcaecati sapiente hic illo error.</p>
      </div>
      </div>

      <div className="bottom">
        <div className="payments">
        <h4>FABY HOUSE CREATION ALL RIGHTS RESERVED</h4>
        <div className="payment-pic">
          <img src={Images.payment} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;