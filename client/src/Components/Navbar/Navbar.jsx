import React, { useContext, useEffect, useState, useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import Images from '../../Constants/Images';

import { Link } from 'react-router-dom';

import "./Navbar.scss";
import Cart from '../Cart/Cart';
import CartContext from '../../Context/Cart/CartContext';
import CategoriesBar from '../CategoriesBar/CategoriesBar';

const Navbar = () => {


    const menus = [
        {
            name: "accueil",
            link: "/"
        },
        {
            name: "à propos",
            link: "/about"
        },
        {
            name: "formations",
            link: "/formations"
        },
        {
            name: "blog",
            link: "/blog"
        }
    ];
    const { cartItems, showCart, showHideCart, hideCart } = useContext(CartContext);
  const cartref = useRef();
        
    const cartContainer = cartref.current
      
useEffect(() => {


    const handleScroll = () => {
      hideCart();
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
}, [showHideCart]);

  return (
      <>
      <div className='navbar'>
          
          <div className="logo">
              <Link to="/"><img src={Images.logo} alt="" /></Link>
          </div>

          <div className="navbar-menu">
              {
                  menus.map((menu) => (<span className='item'> <Link to={`${menu.link}`}>{ menu.name}</Link> </span>))
              }
          </div>

          <div className="navbar-icons">
              <div className="icon">
                  <FiSearch className='search-icon'/>
              </div>
              <div className="icon">
                  <FaUserAlt/>
              </div>
              <div className="icon" onClick={()=>showHideCart()}>
                  <BsFillCartDashFill />
                  <div className='cart-items'>{cartItems.length}</div>
              </div>
              <div className="icon">
                      <MdLogout />
                      
              </div>
          </div>

          {showCart && (<div  ref={cartref} ><Cart/></div>)}
          
          </div>
          
          <CategoriesBar/>
      </>
  );
}

export default Navbar;