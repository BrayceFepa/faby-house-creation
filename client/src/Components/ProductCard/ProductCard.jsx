import React, { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from '../../Context/Cart/CartContext';

import "./ProductCard.scss";

const ProductCard = ({product}) => {
  const { id, img, title, price, discountedPrice, isNew }= product;
  const { addToCart } = useContext(CartContext);

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
        <button type='button' className='btn' onClick={() => addToCart(product)}><BsCart3 size={'1.5em'} /> ajouter au pannier</button>
        <Link to={`/product/${id}`}>
          <button type='button' className='view'><AiOutlineEye size={'1.5em'} /> </button>
        </Link>
          </div>
    </div>
  );
}

export default ProductCard;