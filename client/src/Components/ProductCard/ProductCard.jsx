import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./ProductCard.scss";

const ProductCard = ({id, img, title, price, discountedPrice, isNew}) => {
  return (
      <div className='product-card'>
          {isNew && <span className='new'>Nouveau</span>}
          <div className="product-pic">
              <Link to={`/product/${id}`}>
                <img src={img} alt="" />
              </Link>
          </div>
          <span className="title">{title}</span>
          <div className="prices">
              <span >{price}</span>
          <span >{discountedPrice} FCFA</span>
          </div>
          <div className="buttons">
              <button type='button' className='btn'><BsCart3/> ajouter au pannier</button>
              <button type='button' className='btn'><BiCommentDetail/> commenter</button>
          </div>
    </div>
  );
}

export default ProductCard;