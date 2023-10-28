import React, { useEffect } from 'react';


import "./MobileFooter.scss";
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSearch } from '../../redux/reducers/searchbarReducer';
import { useSelector } from 'react-redux';

const MobileFooter = () => {

  const dispatch = useDispatch();
   const user = useSelector((state)=>state.user.user); // Get the loading state
  
  const handleShowSearch = () => {
    dispatch(showSearch());
  };

  useEffect(() => {
    console.log("user", user);
  },[user])

  return (
    <div className='mobile__footer'>
       <Link to={`${user ? `/profile/${user.savedUser._id}`: "/auth/login"}`}>
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