import React, { useContext, useState } from 'react';
import {  MdMenu } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import Images from '../../Constants/Images';

import { Link } from 'react-router-dom';

import "./MobileNavbar.scss";
import Cart from '../Cart/Cart';
import CartContext from '../../Context/Cart/CartContext';
import { AiFillCloseCircle } from 'react-icons/ai';
import Menu from './Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import { FiSearch } from 'react-icons/fi';

const MobileNavbar = () => {

    const [toggleMenu, setToggleMenu] = useState(null);
       const [searching, setSearching] = useState(false);
    

    
    const { cartItems, showCart, showHideCart ,showSearch} = useContext(CartContext);

   return (
       <>
       <div className='mobile__navbar'>
          
          <div className="logo">
               <div className='pic'>
                   <Link to="/"><img src={Images.logo} alt="" /></Link>
               </div>
               <h1 className='title'>Faby House Creation</h1>
          </div>

         <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
           
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

           {/* <div className={`mobile_cart-container  ${showCart && " active"}`} ><Cart/></div> */}
           <div className={`mobile-search ${showSearch && " active"}`}>
                   <div className={`search-bar`}>
                  <SearchBar setSearching={setSearching} searching={searching}/>
                  <div className={`icon ${searching && " active"}`} onClick={()=> searching ? setSearching(false): {}}>
                      {
                          searching ? <AiFillCloseCircle  /> : <FiSearch className='search-icon'/>
                  }
              </div>
          </div>
               </div>
          
          
       </div>
      
            
       </>
  );
}



export default MobileNavbar;