import React, { useContext, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout, MdMenu } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import Images from '../../Constants/Images';

import { Link } from 'react-router-dom';

import "./MobileNavbar.scss";
import Cart from '../Cart/Cart';
import CartContext from '../../Context/Cart/CartContext';
import { AiFillCloseCircle } from 'react-icons/ai';

const MobileNavbar = () => {

    const [toggleMenu, setToggleMenu] = useState(null);

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
      <div className='mobile__navbar'>
          
          <div className="logo">
               <div className='pic'>
                   <Link to="/"><img src={Images.logo} alt="" /></Link>
               </div>
               <h1 className='title'>Faby House Creation</h1>
          </div>

           <div className={`navbar-menu ${toggleMenu && "active"}`}>
               <span className='close' onClick={()=>setToggleMenu(!toggleMenu)}>
                   <AiFillCloseCircle size="3em" />
               </span>
              {
                  menus.map((menu) => (<span className='item'> <Link to={`${menu.link}`}>{ menu.name}</Link> </span>))
              }
           </div>
           
           {/* <div className='title'>
               
           </div> */}

          <div className="navbar-icons">
              <div className="icon" onClick={()=>showHideCart()}>
                  <BsFillCartDashFill />
                  <div className='cart-items'>{cartItems.length}</div>
              </div>
              <div className="icon" onClick={()=>setToggleMenu(!toggleMenu)}>
                  <MdMenu/>
              </div>
          </div>

          {showCart && <Cart/>}
          
    </div>
  );
}



export default MobileNavbar;