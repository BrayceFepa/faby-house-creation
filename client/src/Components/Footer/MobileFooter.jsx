import React, { useContext, useEffect } from 'react';
import Images from '../../Constants/Images';


import "./MobileFooter.scss";
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext';

const MobileFooter = () => {

  const { showSearch, toggleMobileSearch } = useContext(CartContext);
  
  useEffect(() => {
    console.log("showsearch", showSearch)
  }, [showSearch])
  
  const handleShowSearch = () => {
    toggleMobileSearch();
    console.log("showsearch", showSearch);
  }

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
      <div className='footer-icon' onClick={()=> handleShowSearch()}>
        <FaSearch size="3em"/>
      </div>
    </div>
  );
}

export default MobileFooter;