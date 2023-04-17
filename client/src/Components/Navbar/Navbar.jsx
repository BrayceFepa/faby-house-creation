import React, { useContext, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import Images from '../../Constants/Images';

import { Link } from 'react-router-dom';

import "./Navbar.scss";
import Cart from '../Cart/Cart';
import CartContext from '../../Context/Cart/CartContext';

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
    const { cartItems, showCart, showHideCart } = useContext(CartContext);

  return (
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
                  <FiSearch/>
              </div>
              <div className="icon">
                  <FaUserAlt/>
              </div>
              <div className="icon" onClick={()=>showHideCart()}>
                  <BsFillCartDashFill />
                  <div className='cart-items'>{cartItems.length}</div>
              </div>
              <div className="icon">
                  <MdLogout/>
              </div>
          </div>

          {showCart && <Cart/>}
          
    </div>
  );
}

export default Navbar;