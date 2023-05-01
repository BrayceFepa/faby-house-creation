import React from 'react';
import Images from '../../Constants/Images';


import "./MobileFooter.scss";
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
  return (
    <div className='mobile__footer'>
      <div className='footer-icon'>
        <FaUserAlt size="3em"/>
      </div>
      <Link to="/">
      <div className='footer-icon'>
        <AiFillHome size="3em"/>
      </div>
      </Link>
      <div className='footer-icon'>
        <FaSearch size="3em"/>
      </div>
    </div>
  );
}

export default MobileFooter;