import React, { useEffect } from 'react';
import Images from '../../Constants/Images';


import "./Footer.scss";
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/reducers/categoriesReducer';
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = useSelector(selectCategories);

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
  
  useEffect(() => {
   
    console.log("categories", categories);
    
  }, [categories]);
  return (
    <div className='footer'>
      <div className="top">
        <div className="box">
        <h4>Catgories</h4>
          <ul>
            {
              categories && categories.map((category, idx) => (
                <li key={idx}>
                  <Link to={`#${category?.title}`}><span style={{ padding:"4px" }}>
                  {category.title}
                  </span></Link>
                </li>
              ))
            }
          
        </ul>
      </div>

      <div className="box">
        <h4>Liens utils</h4>
          <div className='links'>
            {menus.map((menu) => (
                              <div  className='item'>
                                  <Link to={`${menu.link}`}><span>{menu.name}</span></Link> 
                              </div>
                          ))}
           </div>
      </div>

      <div className="box">
        <h4>Qui sommes nous ?</h4>
        <p>Faby House Creation : Accessoires de Mode pour Femme. Découvrez notre collection élégante et tendance de crinolines, foulards nigériens, et chapeaux de paille français. Alliez style et qualité avec nos créations uniques.</p>
      </div>

      <div className="box">
        <h4>Contacts</h4>
        <p>Phone : +237 699243581</p>
        <p>Email : evanaoussi@gmail.com</p>
      </div>
      </div>

      <div className="bottom">
        <div className="payments">
        <h4>FABY HOUSE CREATION ALL RIGHTS RESERVED</h4>
        <div className="payment-pic">
          <img src={Images.payment} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;