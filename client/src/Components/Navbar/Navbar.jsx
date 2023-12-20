import React, { useContext, useEffect, useRef, useState } from 'react';

import { FaUserAlt } from "react-icons/fa";
import { MdLogout, MdMenu } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import Images from '../../Constants/Images';

import { Link } from 'react-router-dom';

import "./Navbar.scss";
import CartContext from '../../Context/Cart/CartContext';
import { useSelector } from "react-redux";
import Menu from './Menu/Menu';

import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
const cartRef = useRef(null);
    const [toggleMenu, setToggleMenu] = useState(null);

    const [searching, setSearching] = useState(false);
    const { cartItems, showCart, showHideCart, hideCart } = useContext(CartContext);
      const user = useSelector((state)=>state.user.user); // Get the loading state

 
        
//     useEffect(() => {
//     const handleOutsideClick = (event) => {
//       // Check if the click target is inside the cart element or its children
//       if (!cartRef.current || !cartRef.current.contains(event.target)) {
//         hideCart();
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [hideCart]);

    // useEffect(() => {
    //     console.log("user",user);
    // },[user])
    
  return (
      <>
      <div className='navbar'>
          
          <div className="logo">
              <Link to="/"><img src={Images.logo} alt="" /></Link>
          </div>

          <div className="search-bar">
                  <SearchBar setSearching={setSearching} searching={searching}/>
          </div>

          <div className="navbar-icons">
              
              <div className="icon">
                      {
                          user?
                          <Link to={`/profile`}>
                                  <div className="profile">
                                      {user.savedUser.firstName[0]}
                          </div>
                          </Link>
                          :
                          <Link to="/auth/login">
                          <FaUserAlt />
                          </Link>
                      }
              </div>
              <div className="icon" onClick={()=>showHideCart()}>
                  <BsFillCartDashFill />
                  <div className='cart-items'>{cartItems.length}</div>
              </div>
              <div className="icon" onClick={()=>setToggleMenu(!toggleMenu)}>
                      <MdMenu size={30} />
                      
              </div>
          </div>

          {/* <div ref={cartRef} className={`cart-container  ${showCart && " active"}`} ><Cart/></div> */}
                   <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          </div>
          
          {/* <CategoriesBar/> */}
      </>
  );
}

export default Navbar;