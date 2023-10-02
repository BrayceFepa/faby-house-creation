import React, { useContext, useEffect } from 'react';
import Images from '../../Constants/Images';


import "./MobileFooter.scss";
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext';
import { useDispatch } from 'react-redux';
import { showSearch } from '../../redux/reducers/searchbarReducer';

const MobileFooter = () => {

  // const { showSearch, toggleMobileSearch } = useContext(CartContext);

  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   console.log("showsearch", showSearch)
  // }, [showSearch])
  
  const handleShowSearch = () => {
    // toggleMobileSearch();
    // console.log("showsearch", showSearch);
    dispatch(showSearch());
  }

  return (
    <div className='mobile__footer'>
       <Link to={`/auth/login`}>
      <div className='footer-icon'>
        <FaUserAlt size="3em"/>
      </div>
      </Link>
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