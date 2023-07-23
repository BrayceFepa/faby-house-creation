import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Menu.scss"
import { BsArrowRightCircle } from 'react-icons/bs';
import Images from '../../../Constants/Images';
import { useSelector } from "react-redux";
import { selectCategories } from "../../../redux/reducers/categoriesReducer";
 

const Menu = ({ toggleMenu, setToggleMenu }) => {
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
    
      const categories = useSelector(selectCategories);
    const [menuType, setMenuType] = useState("menu");
  return (
      <div className={`menu-container  ${toggleMenu && " active"}`}>
           <div className={`navbar-menu`}>
               <span className='close' onClick={()=>setToggleMenu(!toggleMenu)}>
                   <AiFillCloseCircle size="3em" />
              </span>
              <div className="menu-types">
                  <span onClick={()=>setMenuType("menu")} className={`${menuType === "menu" && " active"}`}>Menus</span>
                  <span onClick={()=>setMenuType("categories")} className={`${menuType === "categories" && " active"}`}>Categories</span>
              </div>
              {
                  menuType === "menu" ? <div className='menu-screen'>
                      <div className='menu-items'>
                          {menus.map((menu) => (
                              <div  className='item'>
                                  <BsArrowRightCircle/>
                                  <Link to={`${menu.link}`} onClick={() => setToggleMenu(!toggleMenu)}><span>{menu.name}</span></Link> 
                              </div>
                          ))}
                      </div>
                      <div className='contact-btn'>
                              Contactez-nous

                      </div>
                  </div> : menuType === "categories" ? <div className='menu-screen'>
                           <div className='menu-items'>
                          {categories.map((category) => (
                              <div  className='item'>
                                  <BsArrowRightCircle/>
                                  <a href={`#${category?.title}`} onClick={()=>setToggleMenu(!toggleMenu)}><span> {category?.title}</span></a> 
                              </div>
                          ))}
                      </div>
                 </div> : null
              }
           </div> 
    </div>
  )
}

export default Menu